"use client";
// MOCKUP by Rankr (18 Nov 2026). Shared SERVICE page template, "Design 2". It takes the same content object as
// Design 1 (_v2/ServiceV2.tsx), so the wording and facts are the same on both designs. Same slot order as Design 1:
// hero · our work · setup (optional) · what's included · who it's for · reviews + pricing · get a quote · FAQ.
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { allReviews } from "../_v2/data";
import { Accordion, ArrowLink, Badge, FloatingWa, PeekCarousel, Stars, WaComposer, WaIcon, goTo, reduced, useInView, useReveal } from "./parts";

export default function ServiceV3({ c }: { c: ServiceV2Content }) {
  useReveal();
  // dark sheets take turns: charcoal, black, charcoal ...
  let t = 0;
  const tone = () => (t++ % 2 === 0 ? "v3-sheet-charcoal" : "v3-sheet-black");
  const reviews = c.reviews.map((n) => allReviews.find((r) => r.who === n)).filter((r): r is (typeof allReviews)[number] => Boolean(r));

  return (
    <main className="v3">
      <FloatingWa wa={c.wa} endId="quote" />

      {/* 1. Hero: the service photo as a dim backdrop, text centred */}
      <header id="top" className="v3-hero v3-hero-photo">
        <div className="v3-hero-bg">
          <Image src={c.hero.img} alt={c.hero.alt} fill priority quality={70} sizes="100vw" className="v3-cover v3-photo" style={{ objectPosition: c.hero.pos ?? "50% 40%" }} />
        </div>
        <div className="v3-hero-in">
          <Badge />
          <h1 className="v3-h1 v3-rise-h">{c.h1}</h1>
          <p className="v3-lead v3-rise" style={{ animationDelay: "80ms" }}>
            {c.intro}
          </p>
          <div className="v3-btns v3-rise" style={{ animationDelay: "140ms" }}>
            <a href={c.wa} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-wa">
              <WaIcon /> WhatsApp us for a quote
            </a>
            <button type="button" onClick={() => goTo("work")} className="v3-btn v3-btn-line">
              {c.seeWorkLabel}
            </button>
          </div>
        </div>
      </header>

      {/* 2. Our work: peek carousel */}
      <section id="work" className={`v3-sheet ${tone()}`} aria-labelledby="work-h">
        <div className="v3-wrap">
          <div className="v3-head" data-rv>
            <h2 id="work-h" className="v3-h2">
              {c.work.title}
            </h2>
            <div className="v3-links">
              <ArrowLink href="/portfolio">See all projects</ArrowLink>
            </div>
          </div>
          <div data-rv>
            <PeekCarousel label={c.work.title} noun="project" items={c.work.projects.map((p) => ({ title: p.title, meta: p.tag, gear: p.spec, img: p.img, alt: p.alt, pos: p.pos }))} />
          </div>
        </div>
      </section>

      {/* 3. Choose your setup (optional) */}
      {c.setup && <Setup s={c.setup} tone={tone()} />}

      {/* 4. What's included */}
      <section id="included" className={`v3-sheet ${tone()}`} aria-labelledby="inc-h">
        <div className="v3-wrap v3-two">
          <div data-rv>
            <h2 id="inc-h" className="v3-h2">
              {c.included.title}
            </h2>
            {c.included.intro && (
              <p className="v3-body" style={{ marginTop: 16 }}>
                {c.included.intro}
              </p>
            )}
            {c.included.support && (
              <p className="v3-body" style={{ marginTop: 16 }}>
                {c.included.support}
              </p>
            )}
          </div>
          <ul className="v3-checks" data-rv>
            {c.included.items.map((it) => (
              <li key={it}>
                <span className="v3-check" aria-hidden />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Who it's for: tabs */}
      <Buyers b={c.buyers} tone={tone()} />

      {/* 6. Light sheet: three reviews, then what affects the quotation */}
      <section id="reviews" className="v3-sheet v3-sheet-light" aria-labelledby="reviews-h">
        <div className="v3-wrap">
          <div className="v3-head" style={{ marginBottom: 28 }} data-rv>
            <h2 id="reviews-h" className="v3-h2">
              What our clients say
            </h2>
            <p className="v3-rating">
              <span>5.0</span>
              <span>
                <Stars size={15} />
                <br />
                Rated on Google
              </span>
            </p>
          </div>
          <div className="v3-revs">
            {reviews.map((r) => (
              <figure key={r.who} className="v3-rev" data-rv>
                <Stars />
                <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption>
                  {r.who} · {r.context} · Google review
                </figcaption>
              </figure>
            ))}
          </div>

          <div id="pricing" className="v3-price v3-dark-card" data-rv>
            <div>
              <h2 className="v3-h2" style={{ marginTop: 12 }}>
                What Affects the Quotation
              </h2>
              <p className="v3-body" style={{ marginTop: 14 }}>
                {c.pricing.intro}
              </p>
              <p className="v3-note">{c.pricing.footer}</p>
            </div>
            <div role="table" aria-label="What affects the quotation" className="v3-ptable">
              <div role="row" className="v3-prow v3-phead">
                <span role="columnheader">Factor</span>
                <span role="columnheader">Costs more when</span>
              </div>
              {c.pricing.rows.map(([f, , more]) => (
                <div key={f} role="row" className="v3-prow">
                  <span role="cell">{f}</span>
                  <span role="cell">{more}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Get a quote (before the FAQ, Abel 17 Nov) */}
      <section id="quote" className="v3-sheet v3-sheet-black" aria-labelledby="quote-h">
        <div className="v3-wrap">
          <div className="v3-cta2">
            <div data-rv>
              <h2 id="quote-h" className="v3-h2 v3-cta2-h">
                {c.quote.title}
              </h2>
              <ul className="v3-chips" style={{ marginTop: 28 }}>
                {c.quote.checklist.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="v3-links v3-cta2-links">
                <ArrowLink href="tel:+6588605489">Prefer to talk? Call +65 8860 5489</ArrowLink>
              </div>
              <p className="v3-note">Office Mon–Sun 9am–10pm</p>
            </div>
            <div data-rv>
              <WaComposer template={decodeURIComponent(c.wa.split("?text=")[1] ?? "")} greeting="Hi! Send us these details and we'll send you a quotation." />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="v3-sheet v3-sheet-charcoal v3-sheet-last" aria-labelledby="faq-h">
        <div className="v3-wrap">
          <h2 id="faq-h" className="v3-h2" style={{ textAlign: "center", margin: "0 auto" }} data-rv>
            {c.faqTitle}
          </h2>
          <div data-rv>
            <Accordion faqs={c.faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- slot 3: two big specs on the left, a to-scale size picker on the right ---------- */
function Setup({ s, tone }: { s: NonNullable<ServiceV2Content["setup"]>; tone: string }) {
  const p = s.picker;
  const [k, setK] = useState(p?.start ?? 0);
  const [auto, setAuto] = useState(true);
  const [box, seen] = useInView<HTMLDivElement>(0.4);
  const count = p?.options.length ?? 0;
  useEffect(() => {
    if (reduced()) setAuto(false);
  }, []);
  // steps to the next size every 3 s while on screen; stops for good once the visitor picks one
  useEffect(() => {
    if (!auto || !seen || count < 2) return;
    const id = setTimeout(() => setK((v) => (v + 1) % count), 3000);
    return () => clearTimeout(id);
  }, [auto, seen, k, count]);
  const [w, h] = p ? p.options[k] : [0, 0];
  return (
    <section id="setup" className={`v3-sheet ${tone}`} aria-labelledby="setup-h">
      <div className="v3-wrap v3-two">
        <div data-rv>
          <h2 id="setup-h" className="v3-h2">
            {s.title}
          </h2>
          <p className="v3-body" style={{ marginTop: 16 }}>
            {s.intro}
          </p>
          {s.columns && (
            <div className="v3-specs">
              {s.columns.map((col) => (
                <div key={col.big}>
                  <span className="v3-spec-big">{col.big}</span>
                  <h3 className="v3-spec-label">{col.label}</h3>
                  <p className="v3-spec-text">{col.lines.join(" ")}</p>
                </div>
              ))}
            </div>
          )}
          {s.note && <p className="v3-note">{s.note}</p>}
        </div>
        {p && (
          <div ref={box} className="v3-sizer" data-rv>
            <div className="v3-tabs v3-sizer-tabs" role="radiogroup" aria-label={p.caption}>
              {p.options.map(([a, b], i) => (
                <button key={i} type="button" role="radio" aria-checked={k === i} onClick={() => (setAuto(false), setK(i))} className={`v3-tab ${k === i ? "is-active" : ""}`}>
                  {a} × {b} m
                </button>
              ))}
            </div>
            {p.kind === "wall" ? (
              /* front view, to scale: frame 9.5 m × 5 m, person 1.7 m, base wall 8 m × 4 m */
              <div className="v3-sizer-frame">
                <svg className="v3-sizer-person" viewBox="0 0 20 68" aria-hidden>
                  <circle cx="10" cy="6" r="5" fill="currentColor" />
                  <path d="M3 16h14l-1.5 24H14v28H6V40H4.5z" fill="currentColor" />
                </svg>
                <div className="v3-sizer-wall" style={{ transform: `scale(${w / 8}, ${h / 4})` }} />
              </div>
            ) : (
              /* top view, to scale: frame 10 m × 6 m, base stage 8 m × 4 m, one person ≈ 0.5 m */
              <div className="v3-plan-frame">
                <div className="v3-plan-stage" style={{ transform: `scale(${w / 8}, ${h / 4})` }} />
                <span className="v3-plan-person" aria-hidden />
                <span className="v3-plan-tag v3-mono">Top view</span>
              </div>
            )}
            <p className="v3-sizer-label" aria-live="polite">
              {w} m × {h} m{p.kind === "plan" ? ` · ${w * h} m²` : ""} <span>· {p.kind === "wall" ? "person shown at 1.7 m for scale" : "dot shows one person for scale"}</span>
            </p>
            {s.sizesLine && <p className="v3-note">{s.sizesLine}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- slot 5: tabs for each kind of buyer ---------- */
function Buyers({ b, tone }: { b: ServiceV2Content["buyers"]; tone: string }) {
  const [i, setI] = useState(0);
  const cur = b.items[i];
  return (
    <section id="buyers" className={`v3-sheet ${tone}`} aria-labelledby="buyers-h">
      <div className="v3-wrap">
        <h2 id="buyers-h" className="v3-h2" style={{ textAlign: "center", margin: "0 auto 28px" }} data-rv>
          {b.title}
        </h2>
        <div data-rv>
          <div className="v3-tabs" role="tablist" aria-label="Choose your type of organisation">
            {b.items.map((it, k) => (
              <button key={it.tab} type="button" role="tab" aria-selected={k === i} className={`v3-tab ${k === i ? "is-active" : ""}`} onClick={() => setI(k)}>
                {it.tab}
              </button>
            ))}
          </div>
          <div key={i} className="v3-buyer" role="tabpanel">
            <div>
              <h3 className="v3-h3" style={{ marginTop: 12 }}>
                {cur.who}
              </h3>
              <p className="v3-body" style={{ marginTop: 14, maxWidth: "34em" }}>
                {cur.copy}
              </p>
            </div>
            {cur.links.length > 0 && (
              <div className="v3-links">
                {cur.links.map((l) => (
                  <ArrowLink key={l.href} href={l.href}>
                    {l.label}
                  </ArrowLink>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* every group stays in the page for search engines, even when its tab isn't open */}
        <div className="v3-sr">
          {b.items.map((it) => (
            <p key={it.who}>
              {it.who}: {it.copy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
