"use client";
// MOCKUP by Rankr (18 Nov 2026). Shared parts for "Design 2" (home-v3 and the v3 service pages).
// `_v3` is a private folder, so Next.js doesn't route it.
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./v3.css";

export const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z" />
    </svg>
  );
}
export function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="v3-stars" role="img" aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" width={size} height={size} aria-hidden>
          <path fill="currentColor" d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}
export function Arrow({ dir = "next" }: { dir?: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden style={dir === "prev" ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
/** One row of a ruled link list: the text slides and the arrow lifts on hover */
export function ArrowLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a href={href} className="v3-alink" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <span>{children}</span>
      <span className="v3-alink-arrow" aria-hidden>
        ↗
      </span>
    </a>
  );
}
/** The one-line trust badge at the top of every page */
export function Badge() {
  return (
    <p className="v3-badge v3-rise">
      <Stars size={13} />
      <span>
        5.0<span className="v3-long"> on Google</span>
      </span>
      <i aria-hidden />
      <span>
        GeBIZ<span className="v3-long"> registered</span>
      </span>
      <i aria-hidden />
      <span>
        bizSAFE<span className="v3-long"> Level</span> 3
      </span>
    </p>
  );
}

/** Blocks marked with data-rv fade and rise once as they come into view; siblings stagger */
export function useReveal() {
  useEffect(() => {
    if (reduced()) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]")).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
    const groups = new Map<Element, number>();
    els.forEach((el) => {
      const parent = el.parentElement as Element;
      const k = groups.get(parent) ?? 0;
      groups.set(parent, k + 1);
      el.style.setProperty("--d", `${Math.min(k, 4) * 90}ms`);
      el.classList.add("v3-rv");
    });
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            o.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);
}
export function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* Peek carousel: the active card is wide, its neighbours show as slices. One pill holds the arrows and the count.
   Click a slice, swipe, or use the arrow keys. */
export type PeekItem = { title: string; meta?: string; gear: string[]; img: string; alt: string; pos?: string; line?: string; href?: string; cta?: string };
const D_CLASS: Record<string, string> = { "0": "d0", "1": "dp1", "-1": "dn1", "2": "dp2", "-2": "dn2", "3": "dp3", "-3": "dn3" };
/* `fill`: with fewer than 5 items, repeat them so slices show on both sides (the count still shows the real number).
   `auto`: step by itself every `auto` ms while on screen; stops on hover or focus. */
export function PeekCarousel({ items, label, noun = "item", fill = false, auto = 0 }: { items: PeekItem[]; label: string; noun?: string; fill?: boolean; auto?: number }) {
  const real = items.length;
  const reps = fill && real > 1 && real < 5 ? Math.ceil(5 / real) : 1;
  const slides = reps > 1 ? Array.from({ length: real * reps }, (_, k) => items[k % real]) : items;
  const n = slides.length;
  const half = Math.floor(n / 2);
  const [i, setI] = useState(0);
  const prev = useRef(0);
  const offset = (k: number, at: number) => ((((k - at + half) % n) + n) % n) - half; // circular distance, -half..half
  const go = (k: number) => setI(((k % n) + n) % n);
  useEffect(() => {
    prev.current = i;
  }, [i]);
  const drag = useRef<number | null>(null);
  const dragged = useRef(false);
  const [hold, setHold] = useState(false);
  const [box, seen] = useInView<HTMLDivElement>(0.3);
  useEffect(() => {
    if (!auto || hold || !seen || n < 2 || reduced()) return;
    const t = setTimeout(() => setI((k) => (k + 1) % n), auto);
    return () => clearTimeout(t);
  }, [i, auto, hold, seen, n]);
  return (
    <div ref={box} aria-roledescription="carousel" aria-label={label} onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
      <div
        className="v3-peek"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "ArrowRight" ? go(i + 1) : e.key === "ArrowLeft" ? go(i - 1) : null)}
        onPointerDown={(e) => {
          drag.current = e.clientX;
          dragged.current = false;
        }}
        onPointerUp={(e) => {
          if (drag.current === null) return;
          const dx = e.clientX - drag.current;
          drag.current = null;
          if (Math.abs(dx) > 40 && n > 1) {
            dragged.current = true;
            go(i + (dx < 0 ? 1 : -1));
          }
        }}
        onPointerCancel={() => (drag.current = null)}
      >
        {slides.map((it, k) => {
          const d = offset(k, i);
          const was = offset(k, prev.current);
          const c = Math.max(-3, Math.min(3, d));
          const wrapped = Math.abs(d - was) > 1; // jumped from one end to the other: move it without a visible slide
          return (
            <article
              key={k}
              className={`v3-card ${D_CLASS[String(c)]} ${wrapped ? "no-move" : ""} ${it.line ? "has-line" : ""}`}
              aria-roledescription="slide"
              aria-label={`${(k % real) + 1} of ${real}: ${it.title}`}
              aria-hidden={d !== 0}
              onClick={() => d !== 0 && Math.abs(d) <= 2 && go(k)}
            >
              <div className="v3-card-media">
                <Image src={it.img} alt={it.alt} fill sizes="(min-width: 1240px) 780px, 100vw" className="v3-cover v3-photo" style={it.pos ? { objectPosition: it.pos } : undefined} />
              </div>
              <div className="v3-card-shade" aria-hidden />
              <div className="v3-card-text">
                
                <div>
                  <h3 className="v3-card-title">{it.title}</h3>
                  {it.line && <p className="v3-card-line">{it.line}</p>}
                  {it.gear.length > 0 && (
                    <ul className="v3-card-gear">
                      {it.gear.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  )}
                  {it.href && (
                    <a className="v3-card-cta" href={it.href} tabIndex={d === 0 ? 0 : -1} onClick={(e) => dragged.current && e.preventDefault()}>
                      {it.cta ?? "Read more"} <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {n > 1 && (
        <div className="v3-arrows">
          <button type="button" className="v3-sq is-prev" aria-label={`Previous ${noun}`} onClick={() => go(i - 1)}>
            <Arrow dir="prev" />
          </button>
          <span className="v3-count" aria-live="polite">
            {(i % real) + 1} / {real}
          </span>
          <button type="button" className="v3-sq is-next" aria-label={`Next ${noun}`} onClick={() => go(i + 1)}>
            <Arrow />
          </button>
        </div>
      )}
    </div>
  );
}

/* Strip gallery: the open card is wide, the others stand next to it as thin photo strips.
   Arrows sit under the cards, centred, like the events carousel. Click a strip, swipe, or use the arrow keys.
   `auto`: open the next card every `auto` ms while on screen; stops on hover or focus. (Promotions, Abel + Jovin, 19 Nov) */
export function StripGallery({ items, heading, headingId, label, noun = "item", auto = 0 }: { items: PeekItem[]; heading: React.ReactNode; headingId: string; label: string; noun?: string; auto?: number }) {
  const n = items.length;
  const [i, setI] = useState(0);
  const go = (k: number) => setI(((k % n) + n) % n);
  const drag = useRef<number | null>(null);
  const dragged = useRef(false);
  const [hold, setHold] = useState(false);
  const [box, seen] = useInView<HTMLDivElement>(0.3);
  useEffect(() => {
    if (!auto || hold || !seen || n < 2 || reduced()) return;
    const t = setTimeout(() => setI((k) => (k + 1) % n), auto);
    return () => clearTimeout(t);
  }, [i, auto, hold, seen, n]);
  return (
    <div ref={box} aria-roledescription="carousel" aria-label={label} onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
      <div className="v3-strip-head" data-rv>
        <h2 id={headingId} className="v3-h2">
          {heading}
        </h2>
      </div>
      <div
        className="v3-strips"
        data-rv
        tabIndex={0}
        onKeyDown={(e) => (e.key === "ArrowRight" ? go(i + 1) : e.key === "ArrowLeft" ? go(i - 1) : null)}
        onPointerDown={(e) => {
          drag.current = e.clientX;
          dragged.current = false;
        }}
        onPointerUp={(e) => {
          if (drag.current === null) return;
          const dx = e.clientX - drag.current;
          drag.current = null;
          if (Math.abs(dx) > 40 && n > 1) {
            dragged.current = true;
            go(i + (dx < 0 ? 1 : -1));
          }
        }}
        onPointerCancel={() => (drag.current = null)}
      >
        {items.map((it, k) => {
          const on = k === i;
          return (
            <article
              key={it.title}
              className={`v3-strip ${on ? "is-on" : ""}`}
              aria-roledescription="slide"
              aria-label={`${k + 1} of ${n}: ${it.title}`}
              aria-current={on}
              onClick={() => !on && !dragged.current && go(k)}
            >
              <Image src={it.img} alt={on ? it.alt : ""} fill sizes="(min-width: 1240px) 1100px, 100vw" className="v3-cover v3-photo" style={it.pos ? { objectPosition: it.pos } : undefined} />
              <div className="v3-strip-shade" aria-hidden />
              <div className="v3-strip-text" aria-hidden={!on}>
                <p className="v3-strip-pill">{it.meta ?? noun}</p>
                <h3 className="v3-card-title">{it.title}</h3>
                {it.line && <p className="v3-card-line">{it.line}</p>}
                {it.href && (
                  <a className="v3-card-cta" href={it.href} tabIndex={on ? 0 : -1} onClick={(e) => dragged.current && e.preventDefault()}>
                    {it.cta ?? "Read more"} <Arrow />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {/* arrows under the cards in the same pill as the events carousel (Jovin, 24 Nov: "can we move the arrows to the btm") */}
      {n > 1 && (
        <div className="v3-arrows" data-rv>
          <button type="button" className="v3-sq is-prev" aria-label={`Previous ${noun}`} onClick={() => go(i - 1)}>
            <Arrow dir="prev" />
          </button>
          <span className="v3-count" aria-live="polite">
            {i + 1} / {n}
          </span>
          <button type="button" className="v3-sq is-next" aria-label={`Next ${noun}`} onClick={() => go(i + 1)}>
            <Arrow />
          </button>
        </div>
      )}
      <p className="v3-sr" aria-live="polite">
        {`${noun} ${i + 1} of ${n}: ${items[i]?.title ?? ""}`}
      </p>
    </div>
  );
}

/** WhatsApp button in the corner: shows after the hero, hides when the section with `endId` is on screen */
export function FloatingWa({ wa, endId = "cta" }: { wa: string; endId?: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top");
    const end = document.getElementById(endId);
    let past = false;
    let atEnd = false;
    const set = () => setOn(past && !atEnd);
    const o1 = new IntersectionObserver(([e]) => ((past = !e.isIntersecting && e.boundingClientRect.top < 0), set()));
    const o2 = new IntersectionObserver(([e]) => ((atEnd = e.isIntersecting), set()), { threshold: 0.15 });
    if (hero) o1.observe(hero);
    if (end) o2.observe(end);
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, [endId]);
  return (
    <a href={wa} target="_blank" rel="noopener noreferrer" className={`v3-btn v3-btn-wa v3-float ${on ? "is-on" : ""}`} inert={!on}>
      <WaIcon /> Get a quote
    </a>
  );
}

/** FAQ accordion. Shows the first `first` questions, then a "Show all" button. An answer can carry a list and a link. */
export type FaqItem = { q: string; a: string; list?: string[]; link?: { label: string; href: string } };
export function Accordion({ faqs, first = 6, id = "v3-faq" }: { faqs: FaqItem[]; first?: number; id?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const [all, setAll] = useState(false);
  return (
    <div className="v3-acc">
      {faqs.map((f, k) => (
        <div key={f.q} className={`v3-acc-item ${open === k ? "is-open" : ""}`} hidden={!all && k >= first ? true : undefined}>
          <h3>
            <button type="button" className="v3-acc-q" aria-expanded={open === k} aria-controls={`${id}-${k}`} onClick={() => setOpen(open === k ? null : k)}>
              {f.q}
              <span className="v3-chev" aria-hidden />
            </button>
          </h3>
          <div id={`${id}-${k}`} className="v3-acc-a" inert={open !== k}>
            <div>
              <div className="v3-acc-pad">
                <p className="v3-body">{f.a}</p>
                {f.list && (
                  <ol>
                    {f.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ol>
                )}
                {f.link && (
                  <div className="v3-acc-link">
                    <ArrowLink href={f.link.href}>{f.link.label}</ArrowLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {!all && faqs.length > first && (
        <div className="v3-acc-more">
          <button type="button" className="v3-btn v3-btn-line" onClick={() => setAll(true)}>
            Show all {faqs.length} questions
          </button>
        </div>
      )}
    </div>
  );
}

/* WhatsApp composer: looks like a chat. The visitor taps a few chips, the message bubble fills in as they tap,
   and the green button opens WhatsApp with that message ready to send (they can still edit it there). */
const EVENT_TYPES = ["Conference", "Dinner and dance", "School event", "Roadshow", "Community event", "Something else"];
export function WaComposer({ template, needs, greeting = "Hi! Tell us about your event and we'll send you a quotation." }: { template: string; needs?: string[]; greeting?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  // once the chat has played in, it stays: scrolling away must not empty the panel
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (inView) setShown(true);
  }, [inView]);
  const [type, setType] = useState<string | null>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (n: string) => setPicked((v) => (v.includes(n) ? v.filter((x) => x !== n) : [...v, n]));
  // fill the two lines of the template that the chips answer
  let hasType = false;
  let hasNeed = false;
  const lines = template.split("\n").map((l) => {
    if (/^Event name & type:/i.test(l)) {
      hasType = true;
      return type && type !== "Something else" ? `Event name & type: ${type}` : l;
    }
    if (/^What you need:/i.test(l)) {
      hasNeed = true;
      return picked.length ? `What you need: ${picked.join(", ")}` : l;
    }
    return l;
  });
  if (!hasType && type && type !== "Something else") lines.push(`Event type: ${type}`);
  if (!hasNeed && picked.length) lines.push(`Also need: ${picked.join(", ")}`);
  const text = lines.join("\n");
  const href = "https://wa.me/6588605489?text=" + encodeURIComponent(text);
  return (
    <div ref={ref} className={`v3-chat ${shown ? "is-in" : ""}`}>
      <div className="v3-chat-head">
        <svg className="v3-chat-back" viewBox="0 0 24 24" aria-hidden>
          <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="v3-chat-avatar" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/pixelpro_logo_light.svg" alt="" />
        </span>
        <div>
          <p className="v3-chat-name">PixelPro Studios</p>
          <p className="v3-chat-sub">Business account</p>
        </div>
      </div>
      <div className="v3-chat-body">
        <p className="v3-chat-day" style={{ "--k": 0 } as React.CSSProperties}>Today</p>
        <div className="v3-bubble v3-bubble-in" style={{ "--k": 1 } as React.CSSProperties}>
          <p>{greeting}</p>
          <span className="v3-bubble-time">9:41</span>
        </div>
        <div className="v3-replies" style={{ "--k": 2 } as React.CSSProperties}>
          <p className="v3-replies-q">What kind of event is it?</p>
          <div className="v3-replies-grid" role="group" aria-label="Kind of event">
            {EVENT_TYPES.map((x) => (
              <button key={x} type="button" aria-pressed={type === x} className={type === x ? "is-on" : ""} onClick={() => setType(type === x ? null : x)}>
                {x}
              </button>
            ))}
          </div>
        </div>
        {needs && (
          <div className="v3-replies" style={{ "--k": 3 } as React.CSSProperties}>
            <p className="v3-replies-q">What do you need? Pick any.</p>
            <div className="v3-replies-grid" role="group" aria-label="What you need">
              {needs.map((x) => (
                <button key={x} type="button" aria-pressed={picked.includes(x)} className={picked.includes(x) ? "is-on" : ""} onClick={() => toggle(x)}>
                  {x}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="v3-bubble v3-bubble-out" style={{ "--k": 4 } as React.CSSProperties} aria-live="polite">
          <p className="v3-bubble-text">{text}</p>
          <span className="v3-bubble-time">
            9:42
            <svg viewBox="0 0 16 11" aria-hidden>
              <path d="M1 6l3 3 6-8M6 9l1 1 6-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="v3-chat-bar">
        <span className="v3-chat-input">Send this on WhatsApp</span>
        <span className="v3-chat-sendbtn" aria-hidden>
          <svg viewBox="0 0 24 24">
            <path d="M3 20l18-8L3 4l2.6 7L14 12l-8.4 1z" fill="currentColor" />
          </svg>
        </span>
      </a>
      <p className="v3-chat-note">Opens WhatsApp with this message. You can edit it before you send.</p>
    </div>
  );
}

/* WhatsApp link for one package: the page's message with the package named on its first line */
export function pkgLink(wa: string, name: string) {
  const [base, q = ""] = wa.split("?text=");
  const lines = decodeURIComponent(q).split("\n");
  lines[0] = lines[0].replace(/\s*\(from your[^)]*\)/i, "").replace(/\.$/, "") + ` (${name} package).`;
  return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
}
