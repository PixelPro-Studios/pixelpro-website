"use client";
// Festive promotion page: one per promotion (Christmas 2026, Chinese New Year 2027), the same three packages on each
// (Jovin, 17 Nov: "its just 3 packages then we can reuse for all"). Top: his artwork beside the headline, the offer and
// the end date; then the packages from _v2/festive.ts with a WhatsApp button per package.
import Image from "next/image";
import { waLink } from "../_v2/data";
import { FESTIVE_PACKAGES, type FestivePromo } from "../_v2/festive";
import { Badge, FloatingWa, WaIcon, goTo, pkgLink, useReveal } from "../_v3/parts";

const P = FESTIVE_PACKAGES;

export default function FestivePackages({ p }: { p: FestivePromo }) {
  useReveal();
  const WA = waLink(`Hi PixelPro, I'd like to ask about ${p.ask} (from your website).\nDate: \nVenue: \nNumber of guests: `);
  return (
    <main className="v3">
      <FloatingWa wa={WA} />

      <header id="top" className="v3-fp-hero">
        <div className="v3-wrap v3-fp-grid">
          <div className="v3-fp-text">
            <Badge />
            <h1 className="v3-h1 v3-rise-h">{p.h1}</h1>
            <p className="v3-lead v3-rise" style={{ animationDelay: "80ms" }}>
              {p.lead}
            </p>
            <p className="v3-fp-ends v3-rise" style={{ animationDelay: "110ms" }}>
              {p.ends}
            </p>
            <div className="v3-btns v3-rise" style={{ animationDelay: "140ms" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-wa">
                <WaIcon /> WhatsApp us
              </a>
              <button type="button" onClick={() => goTo("packages")} className="v3-btn v3-btn-line">
                See the packages
              </button>
            </div>
          </div>
          <div className="v3-fp-art v3-rise" style={{ animationDelay: "120ms", background: p.bg }}>
            <Image src={p.art} alt={p.artAlt} fill priority sizes="(min-width: 900px) 600px, 100vw" />
          </div>
        </div>
      </header>

      <section id="packages" className="v3-sheet v3-sheet-charcoal v3-sheet-last" aria-labelledby="pkg-h">
        <div className="v3-wrap">
          <div className="v3-head" data-rv>
            <h2 id="pkg-h" className="v3-h2">
              {P.title}
            </h2>
            <p className="v3-body" style={{ maxWidth: 460 }}>
              {p.intro}
            </p>
          </div>
          <div className="v3-pkgs">
            {P.items.map((it) => (
              <div key={it.name} className="v3-pkg" data-rv>
                <h3 className="v3-h3">{it.name}</h3>
                {it.price && (
                  <p className="v3-pkg-price">
                    <b>{it.price}</b>
                    {it.was && (
                      <s>
                        <span className="sr-only">Usual price </span>
                        {it.was}
                      </s>
                    )}
                  </p>
                )}
                <p className="v3-pkg-best">{it.best}</p>
                <a className="v3-sizer-ask" href={pkgLink(WA, it.name)} target="_blank" rel="noopener noreferrer">
                  <WaIcon /> Ask about {it.name}
                </a>
                <ul>
                  {it.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {P.note && (
            <p className="v3-note" style={{ marginTop: 22 }}>
              {P.note} {p.ends}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
