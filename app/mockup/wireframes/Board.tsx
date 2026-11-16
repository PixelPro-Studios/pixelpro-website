"use client";
// MOCKUP by Rankr (16 Nov 2026). Shows each v2 page on a desktop screen (1440 wide) and a phone screen (390 wide).
import { useEffect, useRef, useState } from "react";

const PAGES = [
  { key: "home", label: "Home page", src: "/mockup/home-v2/" },
  { key: "led", label: "LED wall rental", src: "/mockup/led-walls-v2/" },
  { key: "stage", label: "Stage rental", src: "/mockup/stage-rental-v2/" },
  { key: "tpl", label: "Service template", src: "/mockup/service-template-v2/" },
];

export default function Board() {
  const [page, setPage] = useState(PAGES[0]);
  const [z, setZ] = useState({ d: 0.6, m: 0.85, h: 700 });
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const h = window.innerHeight - 64 - 40 - 48;
      const m = Math.min(1, h / 844);
      const d = Math.max(0.3, Math.min(0.8, (window.innerWidth - 96 - 48 - 390 * m) / 1440));
      setZ({ d, m, h });
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "#1c1c1e", color: "#ececec", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <div style={{ height: 64, display: "flex", alignItems: "center", gap: 16, padding: "0 24px", background: "#141416", borderBottom: "1px solid #2a2a2e" }}>
        <strong style={{ fontSize: 15 }}>PixelPro · Design board</strong>
        <span style={{ fontSize: 12, color: "#9a9aa2" }}>v2 mockups · scroll inside each screen</span>
        <div style={{ display: "flex", gap: 4, background: "#232327", borderRadius: 10, padding: 4, marginLeft: 12 }}>
          {PAGES.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setPage(p)}
              style={{ padding: "7px 14px", borderRadius: 7, fontSize: 13, color: page.key === p.key ? "#fff" : "#bbb", background: page.key === p.key ? "#3a3a40" : "transparent" }}
            >
              {p.label}
            </button>
          ))}
        </div>
        <a href={page.src} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "auto", fontSize: 13, color: "#9db8ff" }}>
          Open {page.label.toLowerCase()} full size ↗
        </a>
      </div>
      <div ref={boardRef} style={{ display: "flex", gap: 48, padding: "28px 48px", alignItems: "flex-start", overflowX: "auto" }}>
        <div style={{ flex: "none" }}>
          <p style={{ fontSize: 12, color: "#9a9aa2", marginBottom: 10 }}>
            <b style={{ color: "#d6d6da", fontWeight: 500 }}>{page.label}</b> · Desktop 1440
          </p>
          <div style={{ width: 1440 * z.d, height: z.h, borderRadius: 4, overflow: "hidden", boxShadow: "0 0 0 1px #2c2c30, 0 20px 60px rgba(0,0,0,.45)" }}>
            <iframe key={page.key + "d"} src={page.src} title={`${page.label} desktop`} style={{ width: 1440, height: z.h / z.d, border: 0, transform: `scale(${z.d})`, transformOrigin: "0 0", display: "block" }} />
          </div>
        </div>
        <div style={{ flex: "none" }}>
          <p style={{ fontSize: 12, color: "#9a9aa2", marginBottom: 10 }}>
            <b style={{ color: "#d6d6da", fontWeight: 500 }}>{page.label}</b> · Phone 390
          </p>
          <div style={{ width: 390 * z.m, height: 844 * z.m, borderRadius: 28 * z.m, overflow: "hidden", boxShadow: "0 0 0 1px #2c2c30, 0 20px 60px rgba(0,0,0,.45)" }}>
            <iframe key={page.key + "m"} src={page.src} title={`${page.label} phone`} style={{ width: 390, height: 844, border: 0, transform: `scale(${z.m})`, transformOrigin: "0 0", display: "block" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
