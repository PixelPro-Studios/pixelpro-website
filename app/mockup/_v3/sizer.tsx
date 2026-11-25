"use client";
// MOCKUP by Rankr (18 Nov 2026). Size scenes for the Design 2 setup slot: an LED wall on a stage (front view, to scale,
// built from 0.5 m panels, two people and an audience for scale) and a stage seen from above (2 m × 1 m platforms).
import { useEffect, useRef, useState } from "react";

/* critically damped spring toward a target, so a size change glides instead of jumping (no overshoot) */
export function useSpring(target: number, k = 170) {
  const [v, setV] = useState(target);
  const s = useRef({ x: target, vel: 0, raf: 0 });
  useEffect(() => {
    const st = s.current;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      st.x = target; setV(target); return;
    }
    const c = 2 * Math.sqrt(k);
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000); last = now;
      const a = -k * (st.x - target) - c * st.vel;
      st.vel += a * dt; st.x += st.vel * dt;
      if (Math.abs(st.x - target) < 0.002 && Math.abs(st.vel) < 0.002) { st.x = target; st.vel = 0; setV(target); return; }
      setV(st.x); st.raf = requestAnimationFrame(step);
    };
    cancelAnimationFrame(st.raf); st.raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(st.raf);
  }, [target, k]);
  return v;
}

/* a 1.7 m scale figure, the way architects draw one: head, body, legs */
const Person = ({ x, base, s }: { x: number; base: number; s: number }) => {
  const h = 1.7 * s, r = h * 0.085;
  return (
    <g fill="#8a9099" aria-hidden>
      <circle cx={x} cy={base - h + r} r={r} />
      <rect x={x - h * 0.13} y={base - h + 2 * r + h * 0.02} width={h * 0.26} height={h * 0.38} rx={h * 0.06} />
      <rect x={x - h * 0.11} y={base - h * 0.44} width={h * 0.095} height={h * 0.44} rx={h * 0.03} />
      <rect x={x + h * 0.015} y={base - h * 0.44} width={h * 0.095} height={h * 0.44} rx={h * 0.03} />
    </g>
  );
};

/* front view: frame 640 × 360, 52 px per metre, stage deck 0.6 m, wall standing on the deck */
export function WallScene({ w, h, venue }: { w: number; h: number; venue: "Indoor" | "Outdoor" }) {
  const S = 52, cx = 320, floor = 318, deck = floor - 0.6 * S;
  const sw = useSpring(w), sh = useSpring(h);
  const W = sw * S, H = sh * S, x = cx - W / 2, y = deck - H;
  const pitch = venue === "Indoor" ? 3.2 : 4.8;
  const cols = Math.round(sw * 2), rows = Math.round(sh * 2);
  return (
    <svg viewBox="0 0 640 360" className="v3-scene" role="img" aria-label={`An LED wall ${w} m wide and ${h} m high on a stage, drawn to scale next to two people`}>
      <defs>
        <pattern id="v3px" width={pitch} height={pitch} patternUnits="userSpaceOnUse">
          <circle cx={pitch / 2} cy={pitch / 2} r={pitch * 0.22} fill="rgba(255,255,255,0.32)" />
        </pattern>
        <radialGradient id="v3glow" cx="50%" cy="45%" r="70%">
          <stop offset="0" stopColor="#4a6bff" />
          <stop offset="1" stopColor="#1f3fe0" />
        </radialGradient>
        <linearGradient id="v3sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1530" />
          <stop offset="1" stopColor="#2b3768" />
        </linearGradient>
      </defs>
      {venue === "Outdoor" ? (
        <g>
          <rect width="640" height={floor} fill="url(#v3sky)" />
          <path d={`M0 ${floor} V258 h40 v-26 h26 v18 h30 v-44 h22 v30 h34 v-14 h28 v36 h300 v-28 h24 v-50 h26 v44 h30 v-20 h36 v34 h44 V${floor} z`} fill="#0b0f1d" />
        </g>
      ) : (
        <g>
          <rect width="640" height={floor} fill="#101216" />
          <g stroke="#2a2f37" strokeWidth="2">
            <line x1="0" y1="26" x2="640" y2="26" />
            <line x1="0" y1="40" x2="640" y2="40" />
          </g>
          <g stroke="#2a2f37" strokeWidth="1.2">
            {Array.from({ length: 32 }, (_, i) => <line key={i} x1={i * 20} y1="26" x2={i * 20 + 14} y2="40" />)}
          </g>
        </g>
      )}
      <rect x="0" y={floor} width="640" height={360 - floor} fill="#07080a" />
      <rect x="36" y={deck} width="568" height={floor - deck} fill="#1b1e23" />
      <rect x="36" y={deck} width="568" height="2.5" fill="#3a3f48" />
      <g style={{ filter: "drop-shadow(0 0 22px rgba(41,78,255,0.45))" }}>
        <rect x={x - 3} y={y - 3} width={W + 6} height={H + 6} fill="#060708" />
        <rect x={x} y={y} width={W} height={H} fill="url(#v3glow)" />
        <rect x={x} y={y} width={W} height={H} fill="url(#v3px)" />
        <g stroke="rgba(0,0,0,0.22)" strokeWidth="1">
          {Array.from({ length: Math.max(0, cols - 1) }, (_, i) => <line key={"c" + i} x1={x + ((i + 1) * W) / cols} y1={y} x2={x + ((i + 1) * W) / cols} y2={y + H} />)}
          {Array.from({ length: Math.max(0, rows - 1) }, (_, i) => <line key={"r" + i} x1={x} y1={y + ((i + 1) * H) / rows} x2={x + W} y2={y + ((i + 1) * H) / rows} />)}
        </g>
        <text x={cx} y={y + H / 2} textAnchor="middle" dominantBaseline="central" fill="#fafdff" style={{ fontFamily: "var(--font-oliveira), Georgia, serif", fontSize: Math.max(14, Math.min(42, W / 7)) }}>
          Welcome
        </text>
      </g>
      <Person x={x - 22} base={deck} s={S} />
      <Person x={x + W + 22} base={deck} s={S} />
      <g fill="#030405">
        {Array.from({ length: 15 }, (_, i) => <circle key={i} cx={22 + i * 43 + (i % 2) * 8} cy={350 - (i % 3) * 3} r={15} />)}
      </g>
    </svg>
  );
}

/* top view: frame 640 × 400, 56 px per metre, stage made of 2 m × 1 m platforms, audience side at the bottom */
export function StagePlan({ w, h }: { w: number; h: number }) {
  const S = 56, cx = 320, top = 46;
  const sw = useSpring(w), sh = useSpring(h);
  const W = sw * S, H = sh * S, x = cx - W / 2;
  // lay platforms across in rows of 2 m × 1 m; an odd width finishes with 1 m × 2 m platforms turned on end
  const tiles: { tx: number; ty: number; tw: number; th: number }[] = [];
  const across = Math.floor(w / 2), rest = w - across * 2;
  for (let r = 0; r < h; r++) for (let c = 0; c < across; c++) tiles.push({ tx: c * 2, ty: r, tw: 2, th: 1 });
  if (rest >= 1) for (let r = 0; r + 1 < h + 1; r += 2) tiles.push({ tx: across * 2, ty: r, tw: 1, th: Math.min(2, h - r) });
  const gx = W / w, gy = H / h;
  return (
    <svg viewBox="0 0 640 400" className="v3-scene" role="img" aria-label={`A ${w} m by ${h} m stage seen from above, built from 2 m by 1 m platforms`}>
      <rect width="640" height="400" fill="#101216" />
      <g fill="none" stroke="#1d2127">
        {Array.from({ length: 12 }, (_, i) => <line key={i} x1={i * 56} y1="0" x2={i * 56} y2="400" />)}
        {Array.from({ length: 8 }, (_, i) => <line key={"h" + i} x1="0" y1={i * 56} x2="640" y2={i * 56} />)}
      </g>
      <rect x={x - 4} y={top - 4} width={W + 8} height={H + 8} rx="3" fill="#0a0b0d" />
      {tiles.map((t, i) => (
        <rect key={i} x={x + t.tx * gx + 1.5} y={top + t.ty * gy + 1.5} width={t.tw * gx - 3} height={t.th * gy - 3} rx="2" fill="#262a31" stroke="#3a404a" strokeWidth="1" />
      ))}
      <rect x={x} y={top + H - 2} width={W} height="3" fill="#294eff" />
      <g fill="#8a9099">
        <circle cx={x + W * 0.5} cy={top + H * 0.62} r={0.25 * S} />
        <rect x={x + W * 0.5 - 0.3 * S} y={top + H * 0.62 + 0.3 * S} width={0.6 * S} height={0.35 * S} rx="3" fill="#4a505b" />
      </g>
      <g fill="#1e2228">
        {Array.from({ length: 3 }, (_, r) => Array.from({ length: 13 }, (_, c) => <rect key={r + "-" + c} x={34 + c * 45} y={top + H + 28 + r * 26} width="30" height="16" rx="4" />))}
      </g>
      <text x={cx} y={top + H + 18} textAnchor="middle" fill="#8f9193" style={{ fontSize: 12, letterSpacing: "0.04em" }}>Audience</text>
    </svg>
  );
}
