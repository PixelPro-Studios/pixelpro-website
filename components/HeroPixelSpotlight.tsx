"use client";

import { useEffect, useRef } from "react";

const IMAGE_SRC = "/photos/pixelpro-studios-hero-stage.webp";
const BG = "#0A0A0A";

/** Pixel size in CSS px — chunky LED look */
const CELL = 7;
const GAP = 1;

/** Push the photo down so stage lights sit in view; top gap = gradient */
const IMAGE_SHIFT = 0.1;

/** Base dim so headline stays readable; spotlight lifts back toward full */
const BASE_DIM = 0.38;
const SPOT_BOOST = 1.55;
const SPOT_RADIUS_CELLS = 10;

/** Random pixel boot — all lit by this duration (seconds) */
const BOOT_DURATION = 0.5;

/** Top gradient (matches stage blues) */
const GRAD_TOP = { r: 10, g: 10, b: 10 };
const GRAD_BOTTOM = { r: 12, g: 28, b: 55 };

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
    const desktopQuery = window.matchMedia("(min-width: 768px) and (pointer: fine)");

    let cols = 0;
    let rows = 0;
    let pixels: Uint8ClampedArray = new Uint8ClampedArray(0);
    let bootDelay: Float32Array = new Float32Array(0);
    let pointer: { x: number; y: number } | null = null;
    let rafId = 0;
    let needsDraw = true;
    let sourceImage: HTMLImageElement | null = null;
    let running = true;
    let bootStarted = false;
    let bootStart = 0;
    let bootDone = reducedMotion;
    let spotlightEnabled = desktopQuery.matches;

    const seedBootDelays = () => {
      const count = cols * rows;
      bootDelay = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        bootDelay[i] = Math.random() * BOOT_DURATION;
      }
    };

    const startBoot = () => {
      if (bootStarted || reducedMotion) {
        bootDone = true;
        return;
      }
      seedBootDelays();
      bootStart = performance.now();
      bootStarted = true;
      bootDone = false;
      needsDraw = true;
    };

    const sampleImage = () => {
      const count = cols * rows;
      pixels = new Uint8ClampedArray(count * 4);

      const { width } = container.getBoundingClientRect();
      const isMobile = width < 768;
      const shiftRatio = isMobile ? 0.03 : IMAGE_SHIFT;
      const zoom = isMobile ? 1.35 : 1;

      for (let i = 0; i < count; i++) {
        pixels[i * 4] = GRAD_TOP.r;
        pixels[i * 4 + 1] = GRAD_TOP.g;
        pixels[i * 4 + 2] = GRAD_TOP.b;
        pixels[i * 4 + 3] = 255;
      }

      const shiftRows = Math.floor(rows * shiftRatio);

      for (let y = 0; y < shiftRows; y++) {
        const t = shiftRows <= 1 ? 1 : y / (shiftRows - 1);
        const r = Math.round(GRAD_TOP.r + (GRAD_BOTTOM.r - GRAD_TOP.r) * t);
        const g = Math.round(GRAD_TOP.g + (GRAD_BOTTOM.g - GRAD_TOP.g) * t);
        const b = Math.round(GRAD_TOP.b + (GRAD_BOTTOM.b - GRAD_TOP.b) * t);
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          pixels[i] = r;
          pixels[i + 1] = g;
          pixels[i + 2] = b;
        }
      }

      if (!sourceImage?.complete || !sourceImage.naturalWidth) return;

      const availableRows = Math.max(8, rows - shiftRows);
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = availableRows;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const iw = sourceImage.naturalWidth;
      const ih = sourceImage.naturalHeight;
      const scale = Math.max(cols / iw, availableRows / ih) * zoom;
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cols - sw) / 2;

      octx.fillStyle = BG;
      octx.fillRect(0, 0, cols, availableRows);
      octx.imageSmoothingEnabled = false;
      octx.drawImage(sourceImage, sx, 0, sw, sh);

      const data = octx.getImageData(0, 0, cols, availableRows).data;
      for (let y = 0; y < availableRows; y++) {
        for (let x = 0; x < cols; x++) {
          const src = (y * cols + x) * 4;
          const dst = ((y + shiftRows) * cols + x) * 4;
          pixels[dst] = data[src];
          pixels[dst + 1] = data[src + 1];
          pixels[dst + 2] = data[src + 2];
          pixels[dst + 3] = 255;
        }
      }
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

      const elapsed = bootDone
        ? BOOT_DURATION
        : Math.min(BOOT_DURATION, (performance.now() - bootStart) / 1000);

      if (!bootDone && elapsed >= BOOT_DURATION) {
        bootDone = true;
      }

      const spotActive = Boolean(spotlightEnabled && pointer && bootDone);
      const spotCol = spotActive && pointer ? Math.floor((pointer.x / width) * cols) : -999;
      const spotRow = spotActive && pointer ? Math.floor((pointer.y / height) * rows) : -999;
      const radiusSq = SPOT_RADIUS_CELLS * SPOT_RADIUS_CELLS;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          // Random pixel-by-pixel power-on over ~0.5s
          if (!bootDone && elapsed < bootDelay[idx]) continue;

          const i = idx * 4;
          let r = pixels[i];
          let g = pixels[i + 1];
          let b = pixels[i + 2];

          let mul = BASE_DIM;
          if (spotActive) {
            const dx = x - spotCol + 0.5;
            const dy = y - spotRow + 0.5;
            const distSq = dx * dx + dy * dy;
            if (distSq <= radiusSq) {
              const t = 1 - Math.sqrt(distSq) / SPOT_RADIUS_CELLS;
              const stepped = Math.round(t * 4) / 4;
              mul = BASE_DIM + (SPOT_BOOST - BASE_DIM) * stepped;
            }
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

      const bottom = ctx.createLinearGradient(0, height * 0.7, 0, height);
      bottom.addColorStop(0, "rgba(10,10,10,0)");
      bottom.addColorStop(1, "rgba(10,10,10,0.95)");
      ctx.fillStyle = bottom;
      ctx.fillRect(0, 0, width, height);
    };

    const loop = () => {
      if (!running) return;
      if (!bootDone) needsDraw = true;
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

      // Keep boot timing stable across resize; only reseed delays if still booting
      if (!bootStarted) {
        // wait for image
      } else if (!bootDone) {
        seedBootDelays();
      }

      needsDraw = true;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!spotlightEnabled || reducedMotion || !bootDone) return;
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

    const onDesktopChange = () => {
      spotlightEnabled = desktopQuery.matches;
      if (!spotlightEnabled) {
        pointer = null;
        needsDraw = true;
      }
    };

    const img = new Image();
    img.decoding = "async";
    img.src = IMAGE_SRC;
    img.onload = () => {
      sourceImage = img;
      resize();
      startBoot();
      needsDraw = true;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    desktopQuery.addEventListener("change", onDesktopChange);
    running = true;
    rafId = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      desktopQuery.removeEventListener("change", onDesktopChange);
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
