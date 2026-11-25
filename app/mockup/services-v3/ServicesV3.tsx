"use client";
// MOCKUP by Rankr (25 Nov 2026). Services hub (/services) in "Design 2". What a visitor sees after clicking "Services" in the menu.
// Card text: Jovin's own service copy from the home page tabs (WhatsApp, 23 Nov), headline + first sentence, word for word.
// Staging is ours in his style (live on the home page since 24 Nov). FAQs: the live /services FAQs, with "one-stop" (Lukas's banned
// words) and "teardown" wording fixed. Links go to the Design 2 page where one exists, otherwise to the current live page.
import Image from "next/image";
import Link from "next/link";
import { allReviews, waLink } from "../_v2/data";
import { Accordion, ArrowLink, Badge, FloatingWa, Stars, WaComposer, WaIcon, goTo, useReveal } from "../_v3/parts";
import "./services.css";

const WA = waLink("Hi PixelPro, I'd like a quote for an event (from your services page).\nDate: \nVenue: \nEvent name & type: \nNumber of guests: \nWhat I need: \nIndoor or outdoor: ");

// Card = service name (largest) + one short line to make them click. Lines from the product bible and the voice guide.
const SERVICES = [
  { name: "LED Wall Rental", p: "Bright indoor and outdoor LED walls, with our technicians on standby throughout your event.", img: "/portfolio-jobs/led-wall-rental_ndp-marina-barrage-flag-led-wall.webp", alt: "PixelPro outdoor LED wall at the National Day 2026 celebrations at Marina Barrage", href: "/mockup/led-walls-v3/" },
  { name: "Sound System Rental", p: "Clear sound for every speech and performance, set up and sound-checked by our engineers.", img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-1.jpg", alt: "PixelPro sound system set up for an event", href: "/mockup/sound-system-rental-v3/" },
  { name: "Stage Rental", p: "A stable stage for your speakers and performers, sized and built around your programme.", img: "/portfolio-jobs/stage-rental_caregiving-week-mall-stage.webp", alt: "PixelPro modular stage with skirting at a community event in a mall", href: "/mockup/stage-rental-v3/" },
  { name: "Stage Lighting", p: "Lighting that sets the mood and puts your performers in the spotlight.", img: "/services-av-lighting/pixelpro-studios-stage-lighting-singapore.jpg", alt: "PixelPro stage lighting at an event", href: "/mockup/av-systems-v3/" },
  { name: "Projector Rental", p: "Projectors and screens for presentations, seminars and screenings, set up and tested for you.", img: "/portfolio-jobs/projector-rental_movie-screening-crowd.webp", alt: "Crowd watching a PixelPro projection screen at an outdoor screening", href: "/mockup/projector-rental/" },
  { name: "Event Photography", p: "Key moments and candid shots of your event, with same-day selections on request.", img: "/portfolio-jobs/event-photography_guest-of-honour-eye-dotting.webp", alt: "Guest of honour at an eye-dotting ceremony, photographed by PixelPro", href: "/services/photography/" },
  { name: "Event Videography", p: "Highlight films and social clips of your event, with same-day edits on request.", img: "/services-video/pixelpro-studios-videography-services-singapore.jpg", alt: "PixelPro videographer filming an event", href: "/services/videography/" },
  { name: "Entertainment & Talent", p: "Emcees, DJs and live bands, coordinated with our AV team on the day.", img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg", alt: "Performers on stage at an event supported by PixelPro", href: "/services/talent/" },
];

const FAQS = [
  { q: "What services does PixelPro Studios offer?", a: "LED walls, sound systems, stages, lighting, projectors and screens, event photography, videography, and entertainment and talent, for events of any scale across Singapore." },
  { q: "Can we book multiple services for one event?", a: "Yes. Our AV team takes care of everything from LED walls and staging to sound, so there's just one team to liaise with, one quotation and one payment to settle. A dedicated technical lead oversees every setup, so you can focus on your event.", link: { label: "AV rental", href: "/mockup/av-systems-v3/" } },
  { q: "Do you cover events across Singapore?", a: "Yes. We support corporate events, schools, government agencies and community organisations island-wide, with crew and equipment sized to your venue and programme." },
  { q: "Are you a GeBIZ registered supplier?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  { q: "How do I get a quote or start planning?", a: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. You can also download our services deck for an overview.", link: { label: "Download our services deck", href: "/services/deck" } },
  { q: "Do you provide on-site crew and technical support?", a: "Yes. Our team handles delivery, setup and testing, and the tear-down after your event. Where on-site technical support is included, our crew also runs the systems during your programme." },
];

export default function ServicesV3() {
  useReveal();
  const reviews = ["Candy Mak", "Gwendolyn Anne David", "Tan Hee Pheng"].map((n) => allReviews.find((r) => r.who === n)).filter((r): r is (typeof allReviews)[number] => Boolean(r));
  return (
    <main className="v3">
      <FloatingWa wa={WA} endId="quote" />

      {/* Hero */}
      <header id="top" className="v3-hero v3-hero-photo">
        <div className="v3-hero-bg">
          <Image src="/portfolio-jobs/event-production_sound-engineer-marina-barrage.webp" alt="PixelPro crew on site at Marina Barrage for the National Day 2026 celebrations" fill priority quality={70} sizes="100vw" className="v3-cover v3-photo" style={{ objectPosition: "50% 45%" }} />
        </div>
        <div className="v3-hero-in">
          <Badge />
          <h1 className="v3-h1 v3-rise-h">Event AV & Production Services in Singapore</h1>
          <p className="v3-lead v3-rise" style={{ animationDelay: "80ms" }}>
            From planning to tear-down, our team handles the technical side of your event. A dedicated technical lead oversees every setup, so you can focus on your guests.
          </p>
          <div className="v3-btns v3-rise" style={{ animationDelay: "140ms" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-wa">
              <WaIcon /> WhatsApp us for a quote
            </a>
            <button type="button" onClick={() => goTo("services")} className="v3-btn v3-btn-line">
              See our services
            </button>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="v3-sheet v3-sheet-charcoal" aria-labelledby="services-h">
        <div className="v3-wrap">
          <h2 id="services-h" className="v3-h2" style={{ marginBottom: 28 }} data-rv>
            Our services
          </h2>
          <ul className="v3-s-grid">
            {SERVICES.map((s) => (
              <li key={s.name} data-rv>
                <Link href={s.href} className="v3-s-card">
                  <span className="v3-s-img">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw" quality={70} className="v3-cover" />
                  </span>
                  <span className="v3-s-text">
                    <span className="v3-s-h">{s.name}</span>
                    <span className="v3-body">{s.p}</span>
                    <span className="v3-s-more">
                      Learn more <span aria-hidden>→</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
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

      {/* Quote */}
      <section id="quote" className="v3-sheet v3-sheet-black" aria-labelledby="quote-h">
        <div className="v3-wrap">
          <div className="v3-cta2">
            <div data-rv>
              <h2 id="quote-h" className="v3-h2 v3-cta2-h">
                Request a Quotation
              </h2>
              <p className="v3-body" style={{ marginTop: 16 }}>
                Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we&apos;ll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.
              </p>
              <div className="v3-links v3-cta2-links">
                <ArrowLink href="tel:+6588605489">Prefer to talk? Call +65 8860 5489</ArrowLink>
                <ArrowLink href="/services/deck">Download our services deck</ArrowLink>
              </div>
            </div>
            <div data-rv>
              <WaComposer template={decodeURIComponent(WA.split("?text=")[1] ?? "")} greeting="Hi! Send us these details and we'll send you a quotation." />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="v3-sheet v3-sheet-charcoal v3-sheet-last" aria-labelledby="faq-h">
        <div className="v3-wrap">
          <h2 id="faq-h" className="v3-h2" style={{ textAlign: "center", margin: "0 auto" }} data-rv>
            Services questions
          </h2>
          <div data-rv>
            <Accordion faqs={FAQS} />
          </div>
        </div>
      </section>
    </main>
  );
}
