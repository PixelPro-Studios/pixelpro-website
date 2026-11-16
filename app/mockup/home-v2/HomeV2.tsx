"use client";
// MOCKUP by Rankr (16 Nov 2026). Home page, design v2. Service copy from components/ServicesSection.tsx;
// "why" copy from the approved LED page and Lukas's WhatsApp text. No guarantee, no "one-stop" (writing rules).
import Image from "next/image";
import { LED_PROJECTS, RatingBlock, ReviewsMarquee, Stars, WaIcon, WorkCarousel, waLink } from "../_v2/shared";

const WA = waLink("Hi PixelPro, I'd like a quote for an event (from your website).\nDate: \nVenue: \nEvent name & type: \nWhat you need: ");
const CAL = "https://cal.com/pixelpro/consultation";

const LOGOS = [
  ["mediacorp-projector-rental-service", "Mediacorp"],
  ["ministry-of-education-moe-sound-system-service", "Ministry of Education"],
  ["land-transport-authority-sound-system-service", "Land Transport Authority"],
  ["ntu-stage-sound-system-service", "NTU"],
  ["smu-projector-sound-system-service", "SMU"],
  ["sutd-singapore-university-sound-system-service", "SUTD"],
  ["hard-rock-cafe-singapore-sound-system-service", "Hard Rock Cafe Singapore"],
  ["gushcloud-projector-rental-service", "Gushcloud"],
];

const SERVICES = [
  { title: "Audio Visual Systems", copy: "Professional sound reinforcement, stage lighting, projection and technical support for events of any scale.", img: "/services-hero/services_av-systems.webp", href: "/mockup/av-systems" },
  { title: "LED Walls", copy: "Bright, high-resolution LED wall systems with custom configurations and on-site video operation for indoor and outdoor events.", img: "/services-hero/services_led-walls.webp", href: "/mockup/led-walls-v2" },
  { title: "Photography", copy: "Professional event coverage, corporate headshots, and creative brand photography.", img: "/services-photo/pixelpro-studios-photography-service-singapore.jpg", href: "/services/photography" },
  { title: "Videography", copy: "Cinematic event coverage, highlight reels, and corporate videos that tell your story.", img: "/services-video/pixelpro-studios-videography-services-singapore.jpg", href: "/services/videography" },
  { title: "Entertainment & Talent", copy: "Professional hosts, event entertainment and performances that engage your audience.", img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg", href: "/services/talent" },
];

const REASONS = [
  {
    title: "Quick replies, any day",
    copy: "WhatsApp is available 24/7 for enquiries and quotations. Our office runs Mon–Sun 9am–10pm, and you can call +65 8860 5489 for urgent requests.",
    img: "/portfolio-live-music/sound-system-rental_live-band-stage-monitors.webp",
    alt: "PixelPro stage monitors set up for a live band",
  },
  {
    title: "Clear, competitive quotations",
    copy: "Customised quotations with clear, competitive pricing. You see a breakdown of the equipment, installation and technical services.",
    img: "/portfolio-live-music/sound-system-rental_mixing-desk-sound-engineer.webp",
    alt: "PixelPro sound engineer at the mixing desk",
  },
  {
    title: "One team for the technical side",
    copy: "Sound systems, LED walls, staging, photography and videography from the same team. You have one contact and one quotation.",
    img: "/portfolio-live-music/av-rental_stage-speakers-and-mixer.webp",
    alt: "PixelPro stage speakers and mixer set up for an event",
  },
];

const FIELD = [1, 2, 3, 4, 5, 6].map((n) => `/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-${n}.jpg`);

export default function HomeV2() {
  return (
    <main className="v2">
      {/* 1. Hero: one photo, one line, two buttons */}
      <header className="v2-hero v2-hero-center">
        <Image src="/photos/pixelpro-studios-hero-stage.webp" alt="Stage lit for an event by PixelPro Studios" fill priority sizes="100vw" className="v2-hero-img" />
        <div className="v2-hero-shade" aria-hidden />
        <div className="v2-hero-in">
          <p className="v2-eyebrow v2-rise" style={{ animationDelay: "0ms" }}>Events, AV and media · Singapore</p>
          <h1 className="v2-h1 v2-rise" style={{ animationDelay: "60ms" }}>Events made effortless, every time.</h1>
          <p className="v2-lead v2-rise" style={{ animationDelay: "120ms" }}>
            Sound systems, LED walls, staging, photography and videography for events across Singapore, planned and run by our own crew.
          </p>
          <div className="v2-btns v2-rise" style={{ animationDelay: "180ms" }}>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-white">
              Book a call
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">
              <WaIcon /> WhatsApp us
            </a>
          </div>
        </div>
        <div className="v2-badge v2-rise" style={{ animationDelay: "260ms" }}>
          <div className="v2-badge-top">
            <span className="v2-badge-num">5.0</span>
            <div>
              <Stars />
              <span className="v2-badge-sub">Rated on Google</span>
            </div>
          </div>
          <div className="v2-badge-row">
            <span>GeBIZ registered</span>
            <span>bizSAFE Level 3</span>
          </div>
        </div>
      </header>

      {/* 2. Client logos: one quiet row, no motion */}
      <section className="v2-logos" aria-label="Clients we have worked with">
        <div className="v2-wrap v2-logos-in">
          <p className="v2-eyebrow">Trusted by</p>
          <ul>
            {LOGOS.map(([file, name]) => (
              <li key={file}>
                <Image src={`/client_logos_greyscale/pixelpro-studios-${file}.png`} alt={name} width={120} height={60} className="v2-logo" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Services: real job photos on every card */}
      <section className="v2-wrap v2-sec" aria-labelledby="svc-h">
        <div className="v2-head-row">
          <div>
            <p className="v2-eyebrow">What we offer</p>
            <h2 id="svc-h" className="v2-h2">Event AV and media services</h2>
          </div>
          <a href="/services/deck" className="v2-btn v2-btn-ghost v2-btn-sm">
            Download our services deck
          </a>
        </div>
        <div className="v2-svc">
          {SERVICES.map((s, i) => (
            <a key={s.title} href={s.href} className={`v2-svc-card ${i > 2 ? "is-wide" : ""}`}>
              <div className="v2-svc-media">
                <Image src={s.img} alt={`${s.title} by PixelPro Studios`} fill sizes="(min-width: 1024px) 420px, 100vw" className="v2-cover" />
              </div>
              <div className="v2-svc-text">
                <div>
                  <h3 className="v2-card-title">{s.title}</h3>
                  <p className="v2-card-line">{s.copy}</p>
                </div>
                <span className="v2-arrow" aria-hidden>
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. Recent work: same carousel as the service pages */}
      <section className="v2-sec" aria-labelledby="work-h">
        <div className="v2-wrap v2-head-row">
          <div>
            <p className="v2-eyebrow">Recent work</p>
            <h2 id="work-h" className="v2-h2">Events we&apos;ve supported</h2>
          </div>
          <a href="/portfolio" className="v2-link">
            See all projects →
          </a>
        </div>
        <WorkCarousel projects={LED_PROJECTS} />
      </section>

      {/* 5. Why PixelPro: three short reasons, real crew photos (replaces the stock-photo blocks; guarantee removed) */}
      <section className="v2-wrap v2-sec" aria-labelledby="why-h">
        <p className="v2-eyebrow">Why PixelPro</p>
        <h2 id="why-h" className="v2-h2">Why event teams book PixelPro</h2>
        <div className="v2-reasons">
          {REASONS.map((r) => (
            <article key={r.title} className="v2-reason">
              <div className="v2-reason-media">
                <Image src={r.img} alt={r.alt} fill sizes="(min-width: 1024px) 400px, 100vw" className="v2-cover" />
              </div>
              <div className="v2-reason-text">
                <h3 className="v2-card-title">{r.title}</h3>
                <p className="v2-card-line">{r.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="v2-sec" aria-labelledby="reviews-h">
        <div className="v2-wrap v2-reviews-head">
          <div>
            <p className="v2-eyebrow">Reviews</p>
            <h2 id="reviews-h" className="v2-h2">What our clients say</h2>
          </div>
          <RatingBlock />
        </div>
        <ReviewsMarquee />
      </section>

      {/* 7. From the field: dark photo grid (replaces the white Instagram box) */}
      <section className="v2-wrap v2-sec" aria-labelledby="field-h">
        <div className="v2-head-row">
          <div>
            <p className="v2-eyebrow">From the field</p>
            <h2 id="field-h" className="v2-h2">See what we&apos;ve been creating</h2>
          </div>
          <a href="https://www.instagram.com/pixelprostudios.sg/" target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost v2-btn-sm">
            Follow @pixelprostudios.sg
          </a>
        </div>
        <div className="v2-field">
          {FIELD.map((src, i) => (
            <a key={src} href="https://www.instagram.com/pixelprostudios.sg/" target="_blank" rel="noopener noreferrer" className="v2-field-tile">
              <Image src={src} alt={`PixelPro stage production in Singapore, photo ${i + 1}`} fill sizes="(min-width: 1024px) 200px, 33vw" className="v2-cover" />
            </a>
          ))}
        </div>
      </section>

      {/* 8. One clear next step */}
      <section className="v2-wrap v2-sec v2-sec-last" aria-labelledby="cta-h">
        <div className="v2-cta">
          <h2 id="cta-h" className="v2-h2">Let&apos;s bring your event to life.</h2>
          <p className="v2-body">Tell us the date, venue and what you need. WhatsApp is available 24/7 for enquiries and quotations.</p>
          <div className="v2-btns">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
              <WaIcon /> WhatsApp us
            </a>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost">
              Book a call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
