"use client";
// MOCKUP by Rankr (16 Nov 2026). Shared parts for the v2 design (LED page + home page).
// `_v2` is a private folder, so Next.js doesn't route it.
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./v2.css";
import { allReviews, type Project } from "./data";
export { waLink, allReviews, LED_PROJECTS, type Project } from "./data";

/** Smooth scrolling only when the visitor hasn't asked for reduced motion */
export const scrollBehavior = (): ScrollBehavior =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
export const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z" />
    </svg>
  );
}

export function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="v2-stars" role="img" aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" width={size} height={size} aria-hidden>
          <path fill="currentColor" d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

/** One-line trust chip for the top of each page (the big 5.0 lives in the reviews section only) */
export function TrustChip() {
  return (
    <p className="v2-trust">
      <Stars size={13} />
      <span>
        5.0<span className="v2-long"> on Google</span>
      </span>
      <i aria-hidden />
      <span>
        GeBIZ<span className="v2-long"> registered</span>
      </span>
      <i aria-hidden />
      <span>
        bizSAFE<span className="v2-long"> Level</span> 3
      </span>
    </p>
  );
}

/** Which section sits in the middle of the screen; null while the hero is in view */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const opts = { rootMargin: "-45% 0px -50% 0px" };
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), opts);
    const hero = new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), opts);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const h = document.getElementById("top");
    if (h) hero.observe(h);
    return () => {
      obs.disconnect();
      hero.disconnect();
    };
  }, [ids]);
  return active;
}

/** Desktop: thin ticks on the right edge (Abel's pick, 17 Nov). Labels show for the current section and on hover. */
export function SideTicks({ sections, active }: { sections: readonly (readonly [string, string])[]; active: string | null }) {
  return (
    <nav className={`v2-ticks ${active ? "is-on" : ""}`} aria-label="Page sections" inert={!active}>
      {sections.map(([id, label], i) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={(e) => (e.preventDefault(), goTo(id))}>
          <span className="v2-tick-label">
            <span className="v2-secbar-n">0{i + 1}</span> {label}
          </span>
          <span className="v2-tick" />
        </a>
      ))}
    </nav>
  );
}

/** Desktop: numbered section bar under the site navbar, with the main action on the right (T SERVIS / Apple local nav) */
export function SectionBar({ sections, active, wa }: { sections: readonly (readonly [string, string])[]; active: string | null; wa: string }) {
  const idx = sections.findIndex(([id]) => id === active);
  return (
    <nav className={`v2-secbar ${active ? "is-on" : ""}`} aria-label="Page sections" inert={!active}>
      <ol>
        {sections.map(([id, label], i) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={(e) => (e.preventDefault(), goTo(id))}>
              <span className="v2-secbar-n">0{i + 1}</span>
              {label}
            </a>
          </li>
        ))}
      </ol>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa v2-btn-xs">
        <WaIcon /> Get a quote
      </a>
      <span className="v2-secbar-bar" aria-hidden>
        <i style={{ transform: `scaleX(${(Math.max(idx, 0) + 1) / sections.length})` }} />
      </span>
    </nav>
  );
}

/** Phone: bottom bar after the hero. Left = section menu (opens a list, never jumps), right = WhatsApp quote */
export function PhoneBar({ sections, active, wa, hideIds = [] }: { sections?: readonly (readonly [string, string])[]; active: string | null; wa: string; hideIds?: string[] }) {
  const [shown, setShown] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top");
    const ends = hideIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    let pastHero = false;
    let atEnd = false;
    const set = () => setShown(pastHero && !atEnd);
    const o1 = new IntersectionObserver(([e]) => ((pastHero = !e.isIntersecting && e.boundingClientRect.top < 0), set()));
    const o2 = new IntersectionObserver((es) => ((atEnd = es.some((e) => e.isIntersecting)), set()));
    if (hero) o1.observe(hero);
    ends.forEach((el) => o2.observe(el));
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, [hideIds]);
  useEffect(() => {
    if (!shown) setMenu(false);
  }, [shown]);
  const idx = sections ? sections.findIndex(([id]) => id === active) : -1;
  return (
    <div className={`v2-phonebar ${shown ? "is-on" : ""}`} inert={!shown}>
      {sections && (
        <div id="v2-secmenu" className={`v2-secmenu ${menu ? "is-open" : ""}`} inert={!menu}>
          {sections.map(([id, label], i) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={(e) => (e.preventDefault(), setMenu(false), goTo(id))}>
              <span className="v2-secbar-n">0{i + 1}</span>
              {label}
            </a>
          ))}
        </div>
      )}
      <div className="v2-phonebar-row">
        {sections && (
          <button type="button" className="v2-phonebar-sec" aria-expanded={menu} aria-controls="v2-secmenu" onClick={() => setMenu(!menu)}>
            <span className="v2-secbar-n">0{Math.max(idx, 0) + 1}/0{sections.length}</span>
            <span>{idx >= 0 ? sections[idx][1] : sections[0][1]}</span>
            <span className={`v2-chev-s ${menu ? "is-up" : ""}`} aria-hidden />
          </button>
        )}
        <a href={wa} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa v2-phonebar-wa">
          <WaIcon /> Get a quote
        </a>
      </div>
    </div>
  );
}

/** Desktop: a WhatsApp button in the bottom-right corner, shown only when no other WhatsApp button is on screen */
export function FloatingWa({ wa }: { wa: string }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".v2-btn-wa:not(.v2-float):not(.v2-phonebar-wa):not(.v2-btn-xs)"));
    const visible = new Set<Element>();
    const obs = new IntersectionObserver((es) => {
      es.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setShown(visible.size === 0);
    });
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return (
    <a href={wa} target="_blank" rel="noopener noreferrer" className={`v2-btn v2-btn-wa v2-float ${shown ? "is-on" : ""}`} inert={!shown} aria-label="WhatsApp us for a quote">
      <WaIcon /> <span>Get a quote</span>
    </a>
  );
}

/* Apple-style gallery (apple.com/iphone "media card gallery"): one big card at a time with the next one peeking,
   auto-advances every 4 s while on screen; dot bar where the current dot stretches into a filling progress line;
   round play/pause button. Stops for good once the visitor swipes or clicks. No autoplay under reduced motion. */
const SLIDE_MS = 4000;
export function WorkCarousel({ projects }: { projects: Project[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const n = projects.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const el = root.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 });
    o.observe(el);
    return () => o.disconnect();
  }, []);

  // Which slide is centred
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mid = el.scrollLeft + el.clientWidth / 2;
        let best = 0;
        let dist = Infinity;
        Array.from(el.children).forEach((c, k) => {
          const h = c as HTMLElement;
          const d = Math.abs(h.offsetLeft + h.offsetWidth / 2 - mid);
          if (d < dist) {
            dist = d;
            best = k;
          }
        });
        setI(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = (k: number) => {
    const el = track.current;
    const slide = el?.children[k] as HTMLElement | undefined;
    if (!el || !slide) return;
    el.scrollTo({ left: slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2, behavior: scrollBehavior() });
  };

  // Auto-advance
  useEffect(() => {
    if (!playing || !inView || n < 2) return;
    const t = setTimeout(() => go((i + 1) % n), SLIDE_MS);
    return () => clearTimeout(t);
  }, [i, playing, inView, n]);

  const stop = () => setPlaying(false);

  return (
    <div ref={root} className={`v2-gal ${inView ? "is-in" : ""}`} aria-roledescription="carousel" aria-label="LED wall projects">
      <div ref={track} className="v2-gal-track" onPointerDown={stop} onWheel={(e) => Math.abs(e.deltaX) > Math.abs(e.deltaY) && stop()}>
        {projects.map((p, k) => (
          <article key={p.title} className={`v2-gal-slide ${k === i ? "is-current" : ""}`} aria-roledescription="slide" aria-label={`${k + 1} of ${n}`}>
            <Image src={p.img} alt={p.alt} fill sizes="(min-width: 1024px) 1100px, 90vw" className="v2-cover v2-photo" style={p.pos ? { objectPosition: p.pos } : undefined} />
            <div className="v2-gal-shade" aria-hidden />
            <div className="v2-gal-top">
              <div>
                <h3 className="v2-gal-title">{p.title}</h3>
                <p className="v2-gal-sub">{p.spec.join(" · ")}</p>
              </div>
            </div>
            {p.tag && <span className="v2-chip v2-chip-light v2-gal-tag">{p.tag}</span>}
          </article>
        ))}
      </div>
      {n > 1 && (
      <div className="v2-gal-ctrl">
        <div className="v2-gal-dots" role="group" aria-label="Choose a project">
          {projects.map((p, k) => (
            <button key={p.title} type="button" className={`v2-gal-dot ${k === i ? "is-active" : ""}`} aria-label={`Show ${p.title}`} aria-current={k === i ? "true" : undefined} onClick={() => (stop(), go(k))}>
              <span className="v2-gal-dot-bar">
                {k === i && <span key={`${i}-${playing}`} className="v2-gal-dot-fill" style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: playing && inView ? "running" : "paused", transform: playing ? undefined : "scaleX(1)", animationName: playing ? undefined : "none" }} />}
              </span>
            </button>
          ))}
        </div>
        <button type="button" className="v2-gal-pp" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>
          {playing ? (
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden><rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor" /><rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor" /></svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden><path d="M4 2.5v11a.7.7 0 0 0 1 .6l9-5.5a.7.7 0 0 0 0-1.2l-9-5.5a.7.7 0 0 0-1 .6Z" fill="currentColor" /></svg>
          )}
        </button>
      </div>
      )}
    </div>
  );
}

/** Apple-style scroll reveal: blocks below the fold fade and rise into place once, as they come into view */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sel = ".v2-head-row, .v2-walls-head, .v2-setup-head, .v2-buyers-head, .v2-svc-split, .v2-event, .v2-figure, .v2-statement-text, .v2-quote, .v2-acc, .v2-faq-side, .v2-cta, .v2-marquee, .v2-chapter, .v2-gal, .v2-compare-col, .v2-sizer-wide, .v2-inc, .v2-support, .v2-switch, .v2-buyer, .v2-bubble, .v2-tr, .v2-related-item";
    const els = Array.from(document.querySelectorAll<HTMLElement>(sel)).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
    const groups = new Map<Element, number>();
    els.forEach((el) => {
      const parent = el.parentElement as Element;
      const k = groups.get(parent) ?? 0;
      groups.set(parent, k + 1);
      el.style.setProperty("--d", `${Math.min(k, 4) * 80}ms`);
      el.classList.add("v2-reveal");
    });
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            o.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    els.forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);
}

/* Review row that slides by itself (Jovin likes it). Visible pause button; static swipe row on phones and for reduced motion. */
export function ReviewsMarquee({ first = "Candy Mak" }: { first?: string }) {
  const reviews = [...allReviews].sort((a, b) => (b.who === first ? 1 : 0) - (a.who === first ? 1 : 0));
  return (
    <div className="v2-marquee">
      <ul className="v2-track">
        {[...reviews, ...reviews].map((r, i) => (
          <li key={i} aria-hidden={i >= reviews.length} className={`v2-review ${i >= reviews.length ? "is-dup" : ""}`}>
            <Stars />
            <p>&ldquo;{r.quote}&rdquo;</p>
            <span>
              {r.who} · {r.context}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RatingBlock() {
  return (
    <div className="v2-rating">
      <span className="v2-rating-num">5.0</span>
      <div>
        <Stars size={16} />
        <span>Rated on Google</span>
      </div>
    </div>
  );
}
