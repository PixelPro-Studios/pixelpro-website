"use client";

import { useEffect, useRef } from "react";

const IMAGE_SRC = "/photos/pixelpro-studios-hero-stage.webp";
const BG = "#0A0A0A";

/** Pixel size in CSS px — chunky LED look */
const CELL = 10;
const GAP = 1;

/** Cover-fit bias: 0 = top, 0.5 = center (keeps stage lights in frame) */
const FOCUS_Y = 0.22;

/** Base dim so headline stays readable; spotlight lifts back toward full */
const BASE_DIM = 0.38;
const SPOT_BOOST = 1.55;
const SPOT_RADIUS_CELLS = 7;

export default function HeroPixelSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols = 0;
    let rows = 0;
    let pixels: Uint8ClampedArray = new Uint8ClampedArray(0);
    let pointer: { x: number; y: number } | null = null;
    let rafId = 0;
    let needsDraw = true;
    let sourceImage: HTMLImageElement | null = null;
    let running = true;

    const sampleImage = () => {
      const count = cols * rows;
      pixels = new Uint8ClampedArray(count * 4);

      if (!sourceImage?.complete || !sourceImage.naturalWidth) {
        for (let i = 0; i < count; i++) {
          pixels[i * 4] = 10;
          pixels[i * 4 + 1] = 10;
          pixels[i * 4 + 2] = 14;
          pixels[i * 4 + 3] = 255;
        }
        return;
      }

      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const iw = sourceImage.naturalWidth;
      const ih = sourceImage.naturalHeight;
      const scale = Math.max(cols / iw, rows / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cols - sw) / 2;
      // Bias crop upward so lights aren't clipped
      const sy = (rows - sh) * FOCUS_Y;

      octx.fillStyle = BG;
      octx.fillRect(0, 0, cols, rows);
      octx.imageSmoothingEnabled = false;
      octx.drawImage(sourceImage, sx, sy, sw, sh);
      pixels.set(octx.getImageData(0, 0, cols, rows).data);
    };

    const draw = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0 || cols === 0) return;

      const cellW = width / cols;
      const cellH = height / rows;
      const pixelW = Math.max(1, cellW - GAP);
      const pixelH = Math.max(1, cellH - GAP);

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, width, height);

      const spotCol = pointer ? Math.floor((pointer.x / width) * cols) : -999;
      const spotRow = pointer ? Math.floor((pointer.y / height) * rows) : -999;
      const radiusSq = SPOT_RADIUS_CELLS * SPOT_RADIUS_CELLS;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          let r = pixels[i];
          let g = pixels[i + 1];
          let b = pixels[i + 2];

          const dx = x - spotCol + 0.5;
          const dy = y - spotRow + 0.5;
          const distSq = dx * dx + dy * dy;

          let mul = BASE_DIM;
          if (pointer && distSq <= radiusSq) {
            // Pixel-stepped falloff (not smooth) so the spot stays chunky
            const t = 1 - Math.sqrt(distSq) / SPOT_RADIUS_CELLS;
            const stepped = Math.round(t * 4) / 4;
            mul = BASE_DIM + (SPOT_BOOST - BASE_DIM) * stepped;
          }

          r = Math.min(255, Math.round(r * mul));
          g = Math.min(255, Math.round(g * mul));
          b = Math.min(255, Math.round(b * mul));

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(
            Math.floor(x * cellW + GAP / 2),
            Math.floor(y * cellH + GAP / 2),
            Math.ceil(pixelW),
            Math.ceil(pixelH)
          );
        }
      }

      // Soft bottom blend into next section
      const bottom = ctx.createLinearGradient(0, height * 0.7, 0, height);
      bottom.addColorStop(0, "rgba(10,10,10,0)");
      bottom.addColorStop(1, "rgba(10,10,10,0.95)");
      ctx.fillStyle = bottom;
      ctx.fillRect(0, 0, width, height);
    };

    const loop = () => {
      if (!running) return;
      if (needsDraw) {
        draw();
        needsDraw = false;
      }
      rafId = requestAnimationFrame(loop);
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(40, Math.floor(width / CELL));
      rows = Math.max(24, Math.floor(height / CELL));
      sampleImage();
      needsDraw = true;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (reducedMotion) return;
      const rect = container.getBoundingClientRect();
      pointer = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      needsDraw = true;
    };

    const onPointerLeave = () => {
      pointer = null;
      needsDraw = true;
    };

    const img = new Image();
    img.decoding = "async";
    img.src = IMAGE_SRC;
    img.onload = () => {
      sourceImage = img;
      resize();
      needsDraw = true;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    running = true;
    rafId = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden bg-brand-black"
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
