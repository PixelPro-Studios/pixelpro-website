"use client";

import { useEffect, useRef } from "react";

const IMAGE_SRC = "/photos/pixelpro-studios-tv-screen.webp";
const BG = "#0A0A0A";

/** LED cell size — finer than before so the bezel is less chunky */
const CELL = 7;
/** No gap lines between cells on the TV frame */
const GAP = 0;

/** Darken the metallic frame toward the page black */
const FRAME_DIM = 0.48;

/** Skip nearly-transparent samples so the screen hole stays open */
const ALPHA_CUTOFF = 24;

export default function TvFramePixelated() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let samples: Uint8ClampedArray = new Uint8ClampedArray(0);
    let sourceImage: HTMLImageElement | null = null;
    let running = true;

    const sampleImage = () => {
      const count = cols * rows;
      samples = new Uint8ClampedArray(count * 4);

      if (!sourceImage?.complete || !sourceImage.naturalWidth) return;

      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      octx.clearRect(0, 0, cols, rows);
      octx.imageSmoothingEnabled = false;

      const iw = sourceImage.naturalWidth;
      const ih = sourceImage.naturalHeight;
      // object-contain fit into the cell grid
      const scale = Math.min(cols / iw, rows / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cols - dw) / 2;
      const dy = (rows - dh) / 2;
      octx.drawImage(sourceImage, dx, dy, dw, dh);

      const data = octx.getImageData(0, 0, cols, rows).data;
      samples.set(data);
    };

    const draw = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0 || cols === 0) return;

      const cellW = width / cols;
      const cellH = height / rows;
      const pixelW = Math.max(1, cellW - GAP);
      const pixelH = Math.max(1, cellH - GAP);

      ctx.clearRect(0, 0, width, height);

      // Black underlay under frame LEDs (gaps read like hero), screen hole stays clear
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const a = samples[(y * cols + x) * 4 + 3];
          if (a < ALPHA_CUTOFF) continue;
          ctx.fillStyle = BG;
          ctx.fillRect(
            Math.floor(x * cellW),
            Math.floor(y * cellH),
            Math.ceil(cellW) + 1,
            Math.ceil(cellH) + 1
          );
        }
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const a = samples[i + 3];
          if (a < ALPHA_CUTOFF) continue;

          const r = Math.round(samples[i] * FRAME_DIM);
          const g = Math.round(samples[i + 1] * FRAME_DIM);
          const b = Math.round(samples[i + 2] * FRAME_DIM);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(
            Math.floor(x * cellW + GAP / 2),
            Math.floor(y * cellH + GAP / 2),
            Math.ceil(pixelW),
            Math.ceil(pixelH)
          );
        }
      }
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
      draw();
    };

    const img = new Image();
    img.decoding = "async";
    img.src = IMAGE_SRC;
    img.onload = () => {
      if (!running) return;
      sourceImage = img;
      resize();
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => {
      running = false;
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      aria-hidden
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
