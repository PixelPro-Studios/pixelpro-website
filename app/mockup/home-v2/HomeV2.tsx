"use client";
// MOCKUP by Rankr (17 Nov 2026). Home page, design v2. Service copy from components/ServicesSection.tsx;
// "why" facts from the approved LED page and Lukas's WhatsApp text. No guarantee, no "one-stop" (writing rules).
// Abel 17 Nov: far fewer photos; keep the live pixel-spotlight hero backdrop and the live two-row logo marquee.
import { useState } from "react";
import Image from "next/image";
import HeroPixelSpotlight from "@/components/HeroPixelSpotlight";
import InfiniteLogos from "@/components/LogoSection";
import { LED_PROJECTS, PhoneBar, RatingBlock, ReviewsMarquee, TrustChip, WaIcon, waLink } from "../_v2/shared";

const WA = waLink("Hi PixelPro, I'd like a quote for an event (from your website).\nDate: \nVenue: \nEvent name & type: \nWhat you need: ");
const CAL = "https://cal.com/pixelpro/consultation";

const SERVICES = [
  { title: "Audio Visual Systems", copy: "Sound reinforcement, stage lighting, projection and technical support for events of any scale.", img: "/services-hero/services_av-systems.webp", href: "/mockup/av-systems" },
  { title: "LED Walls", copy: "Indoor and outdoor LED wall systems, configured to your venue and operated on site.", img: "/services-hero/services_led-walls.webp", href: "/mockup/led-walls-v2" },
  { title: "Photography", copy: "Event coverage, corporate headshots and brand photography.", img: "/services-photo/pixelpro-studios-photography-service-singapore.jpg", href: "/services/photography" },
  { title: "Videography", copy: "Event coverage, highlight reels and corporate videos.", img: "/services-video/pixelpro-studios-videography-services-singapore.jpg", href: "/services/videography" },
  { title: "Entertainment & Talent", copy: "Hosts, entertainment and performances for your programme.", img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg", href: "/services/talent" },
];

// Home leads with a different job than the LED page does; the rest are a text list (no thumbnails)
const [p0, p1, p2, p3] = LED_PROJECTS;
const LEAD = p2;
const ROWS = [p0, p1, p3];

const FIGURES = [
  { n: "24/7", title: "Quick replies, any day", copy: "WhatsApp for enquiries and quotations at any hour. Office Mon–Sun 9am–10pm; call +65 8860 5489 for urgent requests." },
  { n: "1", title: "One contact, one quotation", copy: "Sound systems, LED walls, staging, photography and videography, with a clear breakdown of the equipment, installation and technical services." },
  { n: "Lv 3", title: "bizSAFE and GeBIZ registered", copy: "bizSAFE Level 3, and a GeBIZ-registered vendor for schools and government agencies." },
];

export default function HomeV2() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <main className="v2">
      <PhoneBar active={null} wa={WA} hideIds={["cta"]} />

      {/* 1. Hero: the live site's pixel-spotlight backdrop (Abel likes it), text centred as on the live site */}
      <header id="top" className="v2-hero-pixel">
        <HeroPixelSpotlight />
        <div className="v2-hero-pixel-in">
          <TrustChip />
          <h1 className="v2-h1 v2-rise-h">Events made effortless, every time.</h1>
          <p className="v2-lead v2-rise" style={{ animationDelay: "80ms" }}>
            Sound systems, LED walls, staging, photography and videography for events across Singapore, planned and run by our own crew.
          </p>
          <div className="v2-btns v2-rise" style={{ animationDelay: "140ms" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
              <WaIcon /> WhatsApp us
            </a>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* 2. Client logos: the live two-row marquee, unchanged */}
      <div className="v2-logos-live">
        <InfiniteLogos />
      </div>

      {/* 3. Services: a big-type list; a photo shows only on hover (desktop) */}
      <section className="v2-wrap v2-sec" aria-labelledby="svc-h">
        <div className="v2-head-row">
          <div>
            <p className="v2-eyebrow">01 · What we offer</p>
            <h2 id="svc-h" className="v2-h2">Event AV and media services</h2>
          </div>
          <a href="/services/deck" className="v2-btn v2-btn-ghost v2-btn-sm">
            Download our services deck
          </a>
        </div>
        <ul className="v2-svc-list" onMouseLeave={() => setHover(null)}>
          {SERVICES.map((s, i) => (
            <li key={s.title}>
              <a href={s.href} className="v2-svc-row" onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)}>
                <span className="v2-row-n">0{i + 1}</span>
                <h3 className="v2-svc-title">{s.title}</h3>
                <p className="v2-svc-copy">{s.copy}</p>
                <span className="v2-arrow" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
          <li className={`v2-svc-peek ${hover !== null ? "is-on" : ""}`} aria-hidden>
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`v2-svc-peek-img ${hover === i ? "is-active" : ""}`}>
                <Image src={s.img} alt="" fill sizes="320px" className="v2-cover v2-photo" />
              </div>
            ))}
          </li>
        </ul>
      </section>

      {/* 4. Recent work: one big job, then a text list */}
      <section className="v2-wrap v2-sec" aria-labelledby="work-h">
        <div className="v2-head-row">
          <div>
            <p className="v2-eyebrow">02 · Recent work</p>
            <h2 id="work-h" className="v2-h2">Events we&apos;ve supported</h2>
          </div>
          <a href="/portfolio" className="v2-link">
            See all projects →
          </a>
        </div>
        <article className="v2-lead-job">
          <Image src={LEAD.img} alt={LEAD.alt} fill sizes="(min-width: 1280px) 1160px, 100vw" className="v2-cover v2-photo" />
          <div className="v2-lead-job-text">
            <div className="v2-chips">
              {LEAD.spec.map((s) => (
                <span key={s} className="v2-chip">
                  {s}
                </span>
              ))}
            </div>
            <h3 className="v2-h3">{LEAD.title}</h3>
            <p className="v2-card-line">{LEAD.line}</p>
          </div>
        </article>
        <ul className="v2-rows">
          {ROWS.map((p, i) => (
            <li key={p.title} className="v2-row v2-row-text-only">
              <span className="v2-row-n">0{i + 2}</span>
              <div className="v2-row-text">
                <h3 className="v2-row-title">{p.title}</h3>
                <p className="v2-card-line">{p.line}</p>
              </div>
              <span className="v2-row-spec">{p.spec[0]}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Statement: text only, one big line */}
      <section className="v2-wrap v2-statement" aria-label="What we do">
        <p className="v2-statement-text">From a school hall to a mall atrium, we plan, set up and run the technical side of your event.</p>
      </section>

      {/* 6. Why PixelPro: three big figures, no photos */}
      <section className="v2-wrap v2-sec" aria-labelledby="why-h">
        <h2 id="why-h" className="v2-h2">Why event teams book PixelPro</h2>
        <div className="v2-figures">
          {FIGURES.map((f) => (
            <div key={f.title} className="v2-figure">
              <span className="v2-figure-n">{f.n}</span>
              <h3 className="v2-figure-title">{f.title}</h3>
              <p className="v2-card-line">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Reviews: the one place the big 5.0 appears */}
      <section className="v2-sec" aria-labelledby="reviews-h">
        <div className="v2-wrap v2-head-row">
          <h2 id="reviews-h" className="v2-h2">What our clients say</h2>
          <RatingBlock />
        </div>
        <ReviewsMarquee />
      </section>

      {/* 8. One clear next step (Instagram link lives here now, not a photo grid) */}
      <section id="cta" className="v2-wrap v2-sec v2-sec-last" aria-labelledby="cta-h">
        <div className="v2-cta">
          <h2 id="cta-h" className="v2-h2 v2-h2-xl">Let&apos;s bring your event to life.</h2>
          <p className="v2-body">Tell us the date, venue and what you need. WhatsApp is available 24/7 for enquiries and quotations.</p>
          <div className="v2-btns">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
              <WaIcon /> WhatsApp us
            </a>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">
              Book a call
            </a>
          </div>
          <a href="https://www.instagram.com/pixelprostudios.sg/" target="_blank" rel="noopener noreferrer" className="v2-link">
            See recent setups on Instagram @pixelprostudios.sg →
          </a>
        </div>
      </section>
    </main>
  );
}
