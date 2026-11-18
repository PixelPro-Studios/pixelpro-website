"use client";
// MOCKUP by Rankr (17 Nov 2026). Home page, design v2. Service copy from components/ServicesSection.tsx;
// "why" facts from the approved LED page and Lukas's WhatsApp text. No guarantee, no "one-stop" (writing rules).
// Abel 17 Nov: far fewer photos; keep the live pixel-spotlight hero backdrop and the live two-row logo marquee.
import { useState } from "react";
import Image from "next/image";
import HeroPixelSpotlight from "@/components/HeroPixelSpotlight";
import { LOGOS, LogoRow } from "@/components/LogoSection";
import { FloatingWa, PhoneBar, RatingBlock, ReviewsMarquee, TrustChip, WaIcon, useReveal, waLink } from "../_v2/shared";

const WA = waLink("Hi PixelPro, I'd like a quote for an event (from your website).\nDate: \nVenue: \nEvent name & type: \nWhat you need: ");
const CAL = "https://cal.com/pixelpro/consultation";

const SERVICES = [
  { title: "Audio Visual Systems", copy: "Sound reinforcement, stage lighting, projection and technical support for events of any scale.", img: "/services-hero/services_av-systems.webp", href: "/mockup/av-systems" },
  { title: "LED Walls", copy: "Indoor and outdoor LED wall systems, configured to your venue and operated on site.", img: "/services-hero/services_led-walls.webp", href: "/mockup/led-walls-v2" },
  { title: "Photography", copy: "Event coverage, corporate headshots and brand photography.", img: "/services-photo/pixelpro-studios-photography-service-singapore.jpg", href: "/services/photography" },
  { title: "Videography", copy: "Event coverage, highlight reels and corporate videos.", img: "/services-video/pixelpro-studios-videography-services-singapore.jpg", href: "/services/videography" },
  { title: "Entertainment & Talent", copy: "Hosts, entertainment and performances for your programme.", img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg", href: "/services/talent" },
];

// Events from Jovin's write-ups (research/jovin-jobs/2026-11-15-job-writeups.md), National Day first (writing rules).
// Client names left out until PixelPro confirms them. Photos are the ones Lukas uploaded for each job.
const J = "/portfolio-jobs/";
type Ev = { title: string; type: string; where: string; gear: string[]; imgs: [string, string][] };
const EVENTS: Ev[] = [
  { title: "National Day celebration at Marina Barrage", type: "Government · Outdoor", where: "Marina Barrage", gear: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m", "Stage lighting"], imgs: [[J + "event-production_sound-engineer-marina-barrage.webp", "PixelPro crew on site at Marina Barrage on National Day"]] },
  { title: "Caregiving Week in a mall atrium", type: "Community roadshow", where: "Mall atrium · built overnight", gear: ["5.5 m × 3 m LED wall", "7 m × 4 m stage", "Sound and wireless mics"], imgs: [[J + "led-wall-rental_5-5x3m-led-wall-mall-atrium.webp", "LED wall above a stage in a mall atrium"], [J + "roadshow-led-screen-rental_mall-atrium-crowd.webp", "Audience watching the stage in the mall atrium"], [J + "event-av-planning_control-desk-beside-the-stage.webp", "PixelPro control desk beside the stage"]] },
  { title: "University innovation showcase", type: "University · Pitching", where: "Campus centre", gear: ["6 m × 2.5 m LED wall", "Sound and rostrum mics", "Sound engineer on site"], imgs: [[J + "led-wall-rental_6x2-5m-led-wall-pitch-day.webp", "LED wall at a university pitch day"]] },
  { title: "School speech and prize day", type: "School", where: "School hall and outdoor stage at the same time", gear: ["Four 1 m × 2 m LED panels", "Stage lighting", "Two sound crews"], imgs: [[J + "school-sound-system-rental_prize-day-stage-led-and-lighting.webp", "School hall stage with LED panels and lighting"], [J + "school-sound-system-rental_speech-at-the-rostrum.webp", "Speech at the rostrum with LED panels behind"]] },
  { title: "Junior college orientation at a fountain plaza", type: "School · Outdoor", where: "Outdoor plaza", gear: ["8 outdoor speakers", "Generator and power", "Permits and LEW handled"], imgs: [[J + "school-sound-system-rental_outdoor-orientation-speakers.webp", "Outdoor speakers set up for a school orientation"], [J + "event-av-planning_generator-and-safety-fencing.webp", "Generator with safety fencing for the outdoor event"]] },
  { title: "Community club music night", type: "Community", where: "Community club hall", gear: ["Two 120-inch screens", "Live band sound", "Projectors"], imgs: [[J + "sound-system-rental_community-club-hall-full-house.webp", "Full community club hall with PixelPro screens and speakers"], [J + "projector-rental_two-120-inch-screens-community-club.webp", "Two 120-inch screens in a community club"]] },
];
const FIRST = 4;

function EventsGallery() {
  const [all, setAll] = useState(false);
  const list = all ? EVENTS : EVENTS.slice(0, FIRST);
  return (
    <>
      <div className="v2-events">
        {list.map((e, i) => (
          <article key={e.title} className={`v2-event ${i >= FIRST ? "is-new" : ""}`}>
            <div className={`v2-event-photos n${Math.min(e.imgs.length, 3)}`}>
              {e.imgs.slice(0, 3).map(([src, alt], k) => (
                <div key={src} className="v2-event-photo">
                  <Image src={src} alt={alt} fill sizes={k === 0 ? "(min-width: 1024px) 400px, 70vw" : "200px"} className="v2-cover v2-photo" />
                </div>
              ))}
            </div>
            <div className="v2-event-text">
              <p className="v2-event-type">{e.type}</p>
              <h3 className="v2-card-title">{e.title}</h3>
              <p className="v2-note">{e.where}</p>
              <ul className="v2-event-gear">
                {e.gear.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      {!all && (
        <div className="v2-events-more">
          <button type="button" className="v2-btn v2-btn-ghost v2-btn-sm" onClick={() => setAll(true)}>
            View all {EVENTS.length} events
          </button>
        </div>
      )}
    </>
  );
}

/** The live site's logo marquee, as one row instead of two (Abel, 17 Nov) */
function LogosOneRow() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="v2-logos-live" aria-label="Clients we have worked with">
      <p className="v2-eyebrow v2-logos-label">Trusted by</p>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <LogoRow logos={LOGOS} direction="left" duration={90} paused={paused} />
      </div>
    </section>
  );
}

const FIGURES = [
  { n: "24/7", title: "Quick replies, any day", copy: "WhatsApp for enquiries and quotations at any hour. Office Mon–Sun 9am–10pm; call +65 8860 5489 for urgent requests." },
  { n: "1", title: "One contact, one quotation", copy: "Sound systems, LED walls, staging, photography and videography, with a clear breakdown of the equipment, installation and technical services." },
  { n: "Lv 3", title: "bizSAFE and GeBIZ registered", copy: "bizSAFE Level 3, and a GeBIZ-registered vendor for schools and government agencies." },
];

export default function HomeV2() {
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? 0;
  useReveal();
  return (
    <main className="v2">
      <PhoneBar active={null} wa={WA} hideIds={["cta"]} />
      <FloatingWa wa={WA} />

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
      <LogosOneRow />

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
        <div className="v2-svc-split">
          <ul className="v2-svc-list">
            {SERVICES.map((s, i) => (
              <li key={s.title}>
                <a href={s.href} className={`v2-svc-row ${shown === i ? "is-active" : ""}`} onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)}>
                  <span className="v2-row-n">0{i + 1}</span>
                  <div>
                    <h3 className="v2-svc-title">{s.title}</h3>
                    <p className="v2-svc-copy">{s.copy}</p>
                  </div>
                  <span className="v2-arrow" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          {/* One photo panel in its own column; it follows the row you point at (Apple "Significant others" pattern) */}
          <div className="v2-svc-panel" aria-hidden>
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`v2-svc-panel-img ${shown === i ? "is-active" : ""}`}>
                <Image src={s.img} alt="" fill sizes="420px" className="v2-cover v2-photo" />
              </div>
            ))}
          </div>
        </div>
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
        {/* A buyer checks three things: "have they done my kind of event?", "can they handle my venue and size?", "is it real?".
            So: pick the event type, see one real photo and a short spec sheet. No paragraphs. */}
        <EventsGallery />
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
