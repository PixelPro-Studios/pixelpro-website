"use client";
// Festive packages page (Jovin, 24 Nov: "like another link to the packages", for his Wednesday post).
// Only approved content: the headline and both paragraphs are Jovin's festive promotion text (WhatsApp, 23 Nov), the
// packages come from _v2/festive.ts (his "Festive Promotions" sheet), shared with the CNY page so prices stay in one place.
// Hero photo: the same banquet photo as the festive promotion card on the home page (no LED wall claim here).
import Image from "next/image";
import { waLink } from "../_v2/data";
import { FESTIVE_PACKAGES } from "../_v2/festive";
import { Badge, FloatingWa, WaIcon, goTo, pkgLink, useReveal } from "../_v3/parts";

const WA = waLink("Hi PixelPro, I'd like to ask about your festive Chinese New Year packages (from your festive packages page).\nDate: \nVenue: \nNumber of guests: ");
const P = FESTIVE_PACKAGES;

export default function FestivePackages() {
  useReveal();
  return (
    <main className="v3">
      <FloatingWa wa={WA} />

      <header id="top" className="v3-hero v3-hero-photo">
        <div className="v3-hero-bg">
          <Image src="/events-hero/events_cny-event-av.webp" alt="Banquet hall set up for a company Chinese New Year dinner" fill priority quality={70} sizes="100vw" className="v3-cover v3-photo" style={{ objectPosition: "50% 45%" }} />
        </div>
        <div className="v3-hero-in">
          <Badge />
          <h1 className="v3-h1 v3-rise-h">Celebrate Chinese New Year with Our Festive AV Packages!</h1>
          <p className="v3-lead v3-rise" style={{ animationDelay: "80ms" }}>
            Make your company&apos;s Chinese New Year celebration an occasion to remember with professional sound and lighting solutions.
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
      </header>

      <section id="packages" className="v3-sheet v3-sheet-charcoal v3-sheet-last" aria-labelledby="pkg-h">
        <div className="v3-wrap">
          <div className="v3-head" data-rv>
            <h2 id="pkg-h" className="v3-h2">
              {P.title}
            </h2>
            <p className="v3-body" style={{ maxWidth: 460 }}>
              From corporate reunion dinners and festive gatherings to lively lo hei celebrations, our specially curated AV packages start from just S$888, with setup, dismantling and technical support included.
            </p>
          </div>
          <div className="v3-pkgs">
            {P.items.map((p) => (
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
                <a className="v3-sizer-ask" href={pkgLink(WA, p.name)} target="_blank" rel="noopener noreferrer">
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
          {P.note && (
            <p className="v3-note" style={{ marginTop: 22 }}>
              {P.note}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
