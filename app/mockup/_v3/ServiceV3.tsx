"use client";
// MOCKUP by Rankr (18 Nov 2026). Shared SERVICE page template, "Design 2". It takes the same content object as
// Design 1 (_v2/ServiceV2.tsx), so the wording and facts are the same on both designs. Same slot order as Design 1:
// hero · our work · setup (optional) · what's included · who it's for · reviews + pricing · get a quote · FAQ.
// Optional sections (25 Nov, for pages where PixelPro wrote copy for them): kicker, subhead, second intro, tagline,
// why choose us, story, service cards, support block, comparison, process. Pages without them look as before.
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./extras.css";
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { allReviews } from "../_v2/data";
import { Accordion, ArrowLink, Badge, FloatingWa, PeekCarousel, Stars, WaComposer, WaIcon, goTo, pkgLink, reduced, useInView, useReveal } from "./parts";
import { StagePlan, WallScene } from "./sizer";

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
          {c.kicker && <p className="v3-mono v3-rise v3-x-kicker">{c.kicker}</p>}
          <h1 className="v3-h1 v3-rise-h">{c.h1}</h1>
          {c.subhead && <p className="v3-x-subhead v3-rise">{c.subhead}</p>}
          <p className="v3-lead v3-rise" style={{ animationDelay: "80ms" }}>
            {c.intro}
          </p>
          {c.intro2 && (
            <p className="v3-lead v3-rise v3-x-intro2" style={{ animationDelay: "100ms" }}>
              {c.intro2}
            </p>
          )}
          {c.tagline && (
            <p className="v3-x-tagline v3-rise" style={{ animationDelay: "120ms" }}>
              {c.tagline}
            </p>
          )}
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

      {/* 1b. Why choose PixelPro (optional) */}
      {c.why && (
        <section id="why" className={`v3-sheet ${tone()}`} aria-labelledby="why-h">
          <div className="v3-wrap">
            <h2 id="why-h" className="v3-h2" data-rv>
              {c.why.title}
            </h2>
            <ol className="v3-x-grid">
              {c.why.items.map((w, k) => (
                <li key={w.title} className="v3-x-card" data-rv>
                  <span className="v3-x-n">{String(k + 1).padStart(2, "0")}</span>
                  <h3 className="v3-x-t">{w.title}</h3>
                  <p className="v3-body">{w.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

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
            <PeekCarousel label={c.work.title} noun="project" items={c.work.projects.map((p) => ({ title: p.title, meta: p.tag, gear: p.spec, img: p.img, alt: p.alt, pos: p.pos, line: c.work.showLines ? p.line : undefined }))} />
          </div>
        </div>
      </section>

      {/* 2b. Story (optional) */}
      {c.story && (
        <section id="story" className={`v3-sheet ${tone()}`} aria-labelledby="story-h">
          <div className="v3-wrap v3-x-story" data-rv>
            <h2 id="story-h" className="v3-h2">
              {c.story.title}
            </h2>
            <div>
              {c.story.paragraphs.map((p) => (
                <p key={p} className="v3-body">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2c. Service cards (optional, umbrella pages) */}
      {c.services && (
        <section id="services" className={`v3-sheet ${tone()}`} aria-labelledby="services-h">
          <div className="v3-wrap">
            <div className="v3-head" data-rv>
              <h2 id="services-h" className="v3-h2">
                {c.services.title}
              </h2>
              {c.services.intro && (
                <p className="v3-body" style={{ maxWidth: 440 }}>
                  {c.services.intro}
                </p>
              )}
            </div>
            <div className="v3-x-svcs">
              {c.services.items.map((s) => (
                <Link key={s.title} href={s.href} className={`v3-x-svc ${s.small || !s.img ? "is-small" : ""}`} data-rv>
                  {s.img && !s.small && (
                    <span className="v3-x-svc-img">
                      <Image src={s.img} alt={s.alt ?? ""} fill sizes="(min-width: 760px) 50vw, 100vw" quality={70} className="v3-cover" />
                    </span>
                  )}
                  <span className="v3-x-svc-text">
                    <span className="v3-x-t">{s.title}</span>
                    <span className="v3-body">{s.copy}</span>
                    <span className="v3-x-more">
                      {s.href.startsWith("#") ? "Ask us" : "Learn more"} <span aria-hidden>→</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Choose your setup (optional) */}
      {c.setup && <Setup s={c.setup} tone={tone()} wa={c.wa} />}

      {/* 4. What's included */}
      <section id="included" className={`v3-sheet ${tone()}`} aria-labelledby="inc-h">
        <div className="v3-wrap v3-two">
          <div data-rv>
            <h2 id="inc-h" className="v3-h2">
              {c.included.title}
            </h2>
            {c.included.subtitle && <p className="v3-x-sub">{c.included.subtitle}</p>}
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
            {c.included.more && (
              <div className="v3-x-more-box">
                <h3 className="v3-x-t">{c.included.more.title}</h3>
                <p className="v3-body">{c.included.more.body}</p>
              </div>
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
      {c.packages && (
        <section id="packages" className={`v3-sheet ${tone()}`} aria-labelledby="pkg-h">
          <div className="v3-wrap">
            <div className="v3-head" data-rv>
              <h2 id="pkg-h" className="v3-h2">
                {c.packages.title}
              </h2>
              <p className="v3-body" style={{ maxWidth: 440 }}>
                {c.packages.intro}
              </p>
            </div>
            <div className="v3-pkgs">
              {c.packages.items.map((p) => (
                <div key={p.name} className="v3-pkg" data-rv>
                  <h3 className="v3-h3">{p.name}</h3>
                  {p.price && (
                    <p className="v3-pkg-price">
                      <b>{p.price}</b>
                      {p.was && (
                        <s>
                          <span className="sr-only">Usual price </span>
                          {p.was}
                        </s>
                      )}
                    </p>
                  )}
                  <p className="v3-pkg-best">{p.best}</p>
                  <a className="v3-sizer-ask" href={pkgLink(c.wa, p.name)} target="_blank" rel="noopener noreferrer">
                    <WaIcon /> Ask about {p.name}
                  </a>
                  <ul>
                    {p.includes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {c.packages.note && <p className="v3-note" style={{ marginTop: 22 }}>{c.packages.note}</p>}
          </div>
        </section>
      )}

      {/* 4b. Support block (optional; replaces the 30-minute guarantee) */}
      {c.supportBlock && (
        <section id="support" className={`v3-sheet ${tone()}`} aria-labelledby="support-h">
          <div className="v3-wrap v3-x-story" data-rv>
            <h2 id="support-h" className="v3-h2">
              {c.supportBlock.title}
            </h2>
            <div>
              <p className="v3-body">{c.supportBlock.body}</p>
            </div>
          </div>
        </section>
      )}

      <Buyers b={c.buyers} tone={tone()} />

      {/* 5b. Comparison (optional) */}
      {c.compare && (
        <section id="compare" className={`v3-sheet ${tone()}`} aria-labelledby="compare-h">
          <div className="v3-wrap v3-two">
            <div data-rv>
              <h2 id="compare-h" className="v3-h2">
                {c.compare.title}
              </h2>
              {c.compare.paragraphs.map((p) => (
                <p key={p} className="v3-body" style={{ marginTop: 16 }}>
                  {p}
                </p>
              ))}
              {c.compare.link && (
                <div className="v3-links" style={{ marginTop: 22 }}>
                  <ArrowLink href={c.compare.link.href}>{c.compare.link.label}</ArrowLink>
                </div>
              )}
            </div>
            {c.compare.points && (
              <ul className="v3-x-points" data-rv>
                {c.compare.points.map(([h, b]) => (
                  <li key={h}>
                    <h3 className="v3-x-t">{h}</h3>
                    <p className="v3-body">{b}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* 5c. Process (optional) */}
      {c.steps && (
        <section id="process" className={`v3-sheet ${tone()}`} aria-labelledby="process-h">
          <div className="v3-wrap">
            <h2 id="process-h" className="v3-h2" data-rv>
              {c.steps.title}
            </h2>
            <ol className="v3-x-steps">
              {c.steps.items.map(([h, b], k) => (
                <li key={h} data-rv>
                  <span className="v3-x-n">{k + 1}</span>
                  <h3 className="v3-x-t">{h}</h3>
                  <p className="v3-body">{b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

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

        </div>
      </section>

      {/* 6b. What affects the quotation, its own section as in Design 1 */}
      <section id="pricing" className="v3-sheet v3-sheet-charcoal" aria-label="What affects the quotation">
        <div className="v3-wrap">
          <div className="v3-price is-flat" data-rv>
            <div>
              <h2 className="v3-h2" style={{ marginTop: 12 }}>
                {c.pricing.title ?? "What Affects the Quotation"}
              </h2>
              <p className="v3-body" style={{ marginTop: 14 }}>
                {c.pricing.intro}
              </p>
              {c.pricing.more?.map((p) => (
                <p key={p} className="v3-body" style={{ marginTop: 14 }}>
                  {p}
                </p>
              ))}
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
              {c.quote.intro && (
                <p className="v3-body" style={{ marginTop: 16 }}>
                  {c.quote.intro}
                </p>
              )}
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

/* the page's WhatsApp message with the package named on its first line */

/* the page's WhatsApp message with the chosen size, and venue for a wall, filled in */
function askLink(wa: string, w: number, h: number, venue: string | null) {
  const [base, q = ""] = wa.split("?text=");
  const text = decodeURIComponent(q)
    .split("\n")
    .map((l) => (/^(LED wall size|Stage size[^:]*):/i.test(l) ? `${l.split(":")[0]}: ${w} m × ${h} m` : venue && /^Indoor or outdoor:/i.test(l) ? `Indoor or outdoor: ${venue}` : l))
    .join("\n");
  return `${base}?text=${encodeURIComponent(text)}`;
}

/* ---------- slot 3: two big specs on the left, a to-scale size picker on the right ---------- */
function Setup({ s, tone, wa }: { s: NonNullable<ServiceV2Content["setup"]>; tone: string; wa: string }) {
  const p = s.picker;
  const [venue, setVenue] = useState<"Indoor" | "Outdoor">("Indoor");
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
            {p.kind === "wall" && (
              <div className="v3-tabs v3-sizer-tabs v3-venue" role="radiogroup" aria-label="Indoor or outdoor">
                {(["Indoor", "Outdoor"] as const).map((v) => (
                  <button key={v} type="button" role="radio" aria-checked={venue === v} onClick={() => setVenue(v)} className={`v3-tab ${venue === v ? "is-active" : ""}`}>
                    {v}
                  </button>
                ))}
              </div>
            )}
            <div className="v3-scene-box">{p.kind === "wall" ? <WallScene w={w} h={h} venue={venue} /> : <StagePlan w={w} h={h} />}</div>
            <div className="v3-sizer-read">
              <p className="v3-sizer-label" aria-live="polite">
                {w} m × {h} m <span>· {Math.round(w * h * 100) / 100} m² · {p.kind === "wall" ? (venue === "Indoor" ? "P2.5 indoor LED wall" : "P3.9 outdoor LED wall") : `${(w * h) / 2} platforms of 2 m × 1 m`}</span>
              </p>
              <a className="v3-sizer-ask" href={askLink(wa, w, h, p.kind === "wall" ? venue : null)} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Ask about this size
              </a>
            </div>
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
