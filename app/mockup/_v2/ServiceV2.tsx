"use client";
// MOCKUP by Rankr (17 Nov 2026). Shared SERVICE page template, v2 (9 slots, Apple-pattern components).
// 1 hero · 2 our work (Apple media gallery) · 3 choose your setup (Apple compare columns + picker; optional)
// 4 what's included (compare-style checklist) · 5 who we set up for (Apple Trade In pill switch)
// 6 reviews (Apple "quick answers" bubbles) · 7 what affects the quotation (compare rows)
// 8 get a quote · 9 FAQ
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FloatingWa, PhoneBar, RatingBlock, SideTicks, TrustChip, WaIcon, WorkCarousel, allReviews, goTo, useActiveSection, useReveal, type Project } from "./shared";

type Link = { label: string; href: string };
export type Faq = { q: string; a: string; list?: string[]; link?: Link };
export type ServiceV2Content = {
  wa: string;
  eyebrow: string;
  h1: string;
  intro: string;
  hero: { img: string; alt: string; pos?: string };
  seeWorkLabel: string;
  work: { title: string; projects: Project[]; showLines?: boolean };
  setup?: {
    label: string; // tracker label
    title: string;
    intro: string;
    columns?: { big: string; label: string; lines: string[] }[];
    picker?: { kind: "wall" | "plan"; caption: string; options: [number, number][]; start: number };
    sizesLine?: string;
    note?: string;
  };
  included: { title: string; subtitle?: string; intro?: string; items: string[]; support?: string; more?: { title: string; body: string } };
  packages?: { title: string; intro: string; note?: string; items: { name: string; price?: string; was?: string; best: string; includes: string[] }[] };
  buyers: { title: string; items: { tab: string; who: string; events: string; copy: string; links: Link[] }[] };
  reviews: string[]; // three reviewer names from allReviews
  pricing: { title?: string; intro: string; more?: string[]; rows: [string, string, string][]; footer: string };
  quote: { title: string; intro?: string; checklist: string[] };
  faqTitle: string;
  faqs: Faq[];
  // Optional sections, Design 2 only (_v3/ServiceV3.tsx). Used where PixelPro wrote copy for them (Jovin's doc, 16 Nov).
  kicker?: string; // small line above the H1
  subhead?: string; // line under the H1
  intro2?: string; // second hero paragraph
  tagline?: string; // short line under the hero text
  why?: { title: string; items: { title: string; copy: string }[] };
  story?: { title: string; paragraphs: string[] };
  services?: { title: string; intro?: string; items: { title: string; copy: string; href: string; img?: string; alt?: string; small?: boolean }[] };
  supportBlock?: { title: string; body: string };
  compare?: { title: string; paragraphs: string[]; points?: [string, string][]; link?: Link };
  steps?: { title: string; items: [string, string][] };
};

export default function ServiceV2({ c }: { c: ServiceV2Content }) {
  const sections = [
    ["work", "Our work"],
    ...(c.setup ? [["setup", c.setup.label] as const] : []),
    ["included", "What's included"],
    ["buyers", "Who it's for"],
    ["pricing", "Pricing"],
    ["quote", "Get a quote"],
    ["faq", "Questions"],
  ] as const;
  const ids = useRef(sections.map(([id]) => id)).current;
  const active = useActiveSection(ids);
  useReveal();

  return (
    <main className="v2">
      <SideTicks sections={sections} active={active} />
      <FloatingWa wa={c.wa} />
      <PhoneBar sections={sections} active={active} wa={c.wa} hideIds={["quote"]} />

      {/* 1. Hero */}
      <header id="top" className="v2-hero v2-hero-split">
        <div className="v2-hero-media">
          <Image src={c.hero.img} alt={c.hero.alt} fill priority quality={70} sizes="(min-width: 1024px) 70vw, 100vw" className="v2-cover v2-photo" style={{ objectPosition: c.hero.pos ?? "62% 40%" }} />
        </div>
        <div className="v2-hero-in">
          <TrustChip />
          <h1 className="v2-h1 v2-rise-h">{c.h1}</h1>
          <p className="v2-lead v2-rise" style={{ animationDelay: "80ms" }}>
            {c.intro}
          </p>
          <div className="v2-btns v2-rise" style={{ animationDelay: "140ms" }}>
            <a href={c.wa} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
              <WaIcon /> WhatsApp us for a quote
            </a>
            <button type="button" onClick={() => goTo("work")} className="v2-btn v2-btn-ghost">
              {c.seeWorkLabel}
            </button>
          </div>
        </div>
      </header>

      {/* 2. Our work: the one photo section */}
      <section id="work" className="v2-sec" aria-labelledby="work-h">
        <div className="v2-wrap v2-head-row">
          <div>
            <p className="v2-eyebrow">Our work</p>
            <h2 id="work-h" className="v2-h2">{c.work.title}</h2>
          </div>
        </div>
        <WorkCarousel projects={c.work.projects} />
      </section>

      {/* 3. Choose your setup (Apple compare page columns + the picker) */}
      {c.setup && <Setup s={c.setup} />}

      {/* 4. What's included (compare-style rows) */}
      <section id="included" className="v2-wrap v2-sec" aria-labelledby="inc-h">
        <div className="v2-inc">
          <div>
            <h2 id="inc-h" className="v2-h2">{c.included.title}</h2>
            {c.included.intro && <p className="v2-body">{c.included.intro}</p>}
          </div>
          <ul className="v2-checks">
            {c.included.items.map((it) => (
              <li key={it}>
                <span className="v2-check" aria-hidden />
                {it}
              </li>
            ))}
          </ul>
        </div>
        {c.included.support && <p className="v2-support">{c.included.support}</p>}
      </section>

      {/* 5. Who we set up for (Apple Trade In pill switch) */}
      <Buyers b={c.buyers} />

      {/* 6. Reviews (Apple "quick answers" bubbles), three that don't move */}
      <section id="reviews" className="v2-wrap v2-sec" aria-labelledby="reviews-h">
        <div className="v2-head-row">
          <h2 id="reviews-h" className="v2-h2">What our clients say</h2>
          <RatingBlock />
        </div>
        <div className="v2-bubbles">
          {c.reviews
            .map((n) => allReviews.find((r) => r.who === n))
            .filter((r): r is (typeof allReviews)[number] => Boolean(r))
            .map((r) => (
              <figure key={r.who} className="v2-bubble">
                <span className="v2-avatar" aria-hidden>
                  {r.who.trim()[0].toUpperCase()}
                </span>
                <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption>
                  {r.who} · {r.context} · Google review
                </figcaption>
              </figure>
            ))}
        </div>
      </section>

      {/* 7. What affects the quotation (Jovin's heading; compare rows) */}
      <section id="pricing" className="v2-wrap v2-sec" aria-labelledby="pricing-h">
        <div className="v2-pricing">
          <div>
            <p className="v2-eyebrow">Pricing Factor</p>
            <h2 id="pricing-h" className="v2-h2">What Affects the Quotation</h2>
            <p className="v2-body">{c.pricing.intro}</p>
            <p className="v2-note">{c.pricing.footer}</p>
          </div>
        <div className="v2-table" role="table" aria-label="What affects the quotation">
          <div className="v2-tr v2-th" role="row">
            <span role="columnheader">Factor</span>
            <span role="columnheader">Costs more when</span>
          </div>
          {c.pricing.rows.map(([f, , more]) => (
            <div key={f} className="v2-tr" role="row">
              <span role="cell" className="v2-td-f">
                {f}
              </span>
              <span role="cell">{more}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 8. Get a quote */}
      <section id="quote" className="v2-wrap v2-quote-wrap" aria-labelledby="quote-h">
        <div className="v2-quote">
          <div>
            <p className="v2-eyebrow">Get a quote</p>
            <h2 id="quote-h" className="v2-h2">{c.quote.title}</h2>
            <p className="v2-body">WhatsApp available 24/7 for enquiries and quotations. We reply as soon as we can.</p>
            <div className="v2-btns">
              <a href={c.wa} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
                <WaIcon /> WhatsApp us for a quote
              </a>
              <a href="tel:+6588605489" className="v2-btn v2-btn-ghost">
                Call +65 8860 5489
              </a>
            </div>
            <p className="v2-note">Office Mon–Sun 9am–10pm</p>
          </div>
          <div>
            <h3 className="v2-quote-list-h">What to send us</h3>
            <ul className="v2-quote-list">
              {c.quote.checklist.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FaqBlock title={c.faqTitle} faqs={c.faqs} />
    </main>
  );
}

/* ---------- slot 3: compare columns + picker ---------- */
function Setup({ s }: { s: NonNullable<ServiceV2Content["setup"]> }) {
  const [k, setK] = useState(s.picker?.start ?? 0);
  const p = s.picker;
  // Steps to the next size every 3 s while on screen; stops for good once the visitor picks one
  const [auto, setAuto] = useState(true);
  const [seen, setSeen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const count = p?.options.length ?? 0;
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = box.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.4 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!auto || !seen || count < 2) return;
    const t = setTimeout(() => setK((v) => (v + 1) % count), 3000);
    return () => clearTimeout(t);
  }, [auto, seen, k, count]);
  const [w, h] = p ? p.options[k] : [0, 0];
  return (
    <section id="setup" className="v2-wrap v2-sec" aria-labelledby="setup-h">
      {/* compact: text and specs on the left, the picker on the right */}
      <div className="v2-setup">
        <div className="v2-setup-head">
          <h2 id="setup-h" className="v2-h2">{s.title}</h2>
          <p className="v2-body">{s.intro}</p>
          {s.columns && (
            <div className="v2-compare">
              {s.columns.map((col) => (
                <div key={col.big} className="v2-compare-col">
                  <span className="v2-compare-big">{col.big}</span>
                  <h3 className="v2-compare-label">{col.label}</h3>
                  <p>{col.lines.join(" ")}</p>
                </div>
              ))}
            </div>
          )}
          {s.note && <p className="v2-note">{s.note}</p>}
        </div>
        {p && (
          <div ref={box} className="v2-sizer v2-sizer-wide">
            <div className="v2-sizer-tabs" role="radiogroup" aria-label={p.caption}>
              {p.options.map(([a, b], i) => (
                <button key={i} type="button" role="radio" aria-checked={k === i} onClick={() => (setAuto(false), setK(i))} className={k === i ? "is-active" : ""}>
                  {a} × {b} m
                </button>
              ))}
            </div>
            {p.kind === "wall" ? (
              /* front view, to scale: frame 9.5 m × 5 m, person 1.7 m, base wall 8 m × 4 m */
              <div className="v2-sizer-frame">
                <svg className="v2-sizer-person" viewBox="0 0 20 68" aria-hidden>
                  <circle cx="10" cy="6" r="5" fill="currentColor" />
                  <path d="M3 16h14l-1.5 24H14v28H6V40H4.5z" fill="currentColor" />
                </svg>
                <div className="v2-sizer-wall" style={{ transform: `scale(${w / 8}, ${h / 4})` }} />
              </div>
            ) : (
              /* top view, to scale: frame 10 m × 6 m, base stage 8 m × 4 m, one person ≈ 0.5 m */
              <div className="v2-plan-frame">
                <div className="v2-plan-stage" style={{ transform: `scale(${w / 8}, ${h / 4})` }} />
                <span className="v2-plan-person" aria-hidden />
                <span className="v2-plan-tag">Top view</span>
              </div>
            )}
            <p className="v2-sizer-label" aria-live="polite">
              {w} m × {h} m{p.kind === "plan" ? ` · ${w * h} m²` : ""} <span>· {p.kind === "wall" ? "person shown at 1.7 m for scale" : "dot shows one person for scale"}</span>
            </p>
            {s.sizesLine && <p className="v2-note">{s.sizesLine}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- slot 5: Apple Trade In-style pill switch ---------- */
function Buyers({ b }: { b: ServiceV2Content["buyers"] }) {
  const [t, setT] = useState(0);
  const pill = useRef<HTMLDivElement>(null);
  const [ind, setInd] = useState({ x: 0, w: 0 });
  useLayoutEffect(() => {
    const el = pill.current?.querySelectorAll<HTMLButtonElement>("button")[t];
    if (el) setInd({ x: el.offsetLeft, w: el.offsetWidth });
  }, [t]);
  const cur = b.items[t];
  return (
    <section id="buyers" className="v2-wrap v2-sec" aria-labelledby="buyers-h">
      <div className="v2-buyers-head">
        <h2 id="buyers-h" className="v2-h2">{b.title}</h2>
      </div>
      <div ref={pill} className="v2-switch" role="group" aria-label="Choose your type of organisation">
        <span className="v2-switch-ind" style={{ transform: `translateX(${ind.x}px)`, width: ind.w }} aria-hidden />
        {b.items.map((it, i) => (
          <button key={it.tab} type="button" aria-pressed={t === i} className={t === i ? "is-active" : ""} onClick={() => setT(i)}>
            {it.tab}
          </button>
        ))}
      </div>
      <div key={t} className="v2-buyer">
        <p className="v2-event-type">{cur.events}</p>
        <h3 className="v2-card-title">{cur.who}</h3>
        <p className="v2-body">{cur.copy}</p>
        {cur.links.length > 0 && (
          <div className="v2-buyer-links">
            {cur.links.map((l) => (
              <a key={l.href} href={l.href} className="v2-learn">
                {l.label} ›
              </a>
            ))}
          </div>
        )}
      </div>
      {/* every group stays in the page for search engines, even when its tab isn't open */}
      <div className="v2-sr">
        {b.items.map((it) => (
          <p key={it.who}>
            {it.who}: {it.copy}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ---------- slot 9: FAQ ---------- */
function FaqBlock({ title, faqs }: { title: string; faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const [all, setAll] = useState(false);
  const FIRST = 6;
  return (
    <section id="faq" className="v2-faq v2-wrap" aria-labelledby="faq-h">
      <div className="v2-faq-side">
        <h2 id="faq-h" className="v2-h2">{title}</h2>
        <p className="v2-body">Pricing, setup and how booking works.</p>
      </div>
      <div className="v2-acc">
        {faqs.map((f, i) => (
          <div key={f.q} className={`v2-acc-item ${open === i ? "is-open" : ""}`} hidden={!all && i >= FIRST ? true : undefined}>
            <h3>
              <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span className="v2-plus" aria-hidden />
              </button>
            </h3>
            <div className="v2-acc-body" id={`faq-${i}`} inert={open !== i}>
              <div>
                <div className="v2-acc-pad">
                  <p>{f.a}</p>
                  {f.list && (
                    <ul>
                      {f.list.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  )}
                  {f.link && (
                    <a href={f.link.href} className="v2-learn">
                      {f.link.label} ›
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {!all && faqs.length > FIRST && (
          <button type="button" className="v2-btn v2-btn-ghost v2-btn-sm v2-faq-more" onClick={() => setAll(true)}>
            Show all {faqs.length} questions
          </button>
        )}
      </div>
    </section>
  );
}
