"use client";
// MOCKUP by Rankr (16 Nov 2026). Home page, design v2. Service copy from components/ServicesSection.tsx;
// "why" facts from the approved LED page and Lukas's WhatsApp text. No guarantee, no "one-stop" (writing rules).
// Layout rule (T SERVIS / Moment Factory): every section a different shape; cards only in Services.
import Image from "next/image";
import { LED_PROJECTS, PhoneBar, RatingBlock, ReviewsMarquee, TrustChip, WaIcon, waLink } from "../_v2/shared";

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

// Home starts its work list with a different job than the LED page does (no repeated lead photo)
const [p0, p1, p2, p3] = LED_PROJECTS;
const LEAD = p2;
const ROWS = [p0, p1, p3];

const FIGURES = [
  { n: "24/7", title: "Quick replies, any day", copy: "WhatsApp for enquiries and quotations at any hour. Office Mon–Sun 9am–10pm; call +65 8860 5489 for urgent requests." },
  { n: "1", title: "One contact, one quotation", copy: "Sound systems, LED walls, staging, photography and videography, with one contact and a clear breakdown of the equipment, installation and technical services." },
  { n: "Lv 3", title: "bizSAFE and GeBIZ registered", copy: "bizSAFE Level 3, and a GeBIZ-registered vendor for schools and government agencies." },
];

const FIELD = [1, 2, 4, 5, 6].map((n) => `/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-${n}.jpg`);

export default function HomeV2() {
  return (
    <main className="v2">
      <PhoneBar active={null} wa={WA} hideIds={["cta"]} />

      {/* 1. Hero: a sharp photo of a PixelPro rig on the right, solid black behind the text */}
      <header id="top" className="v2-hero v2-hero-split">
        <div className="v2-hero-media">
          <Image src="/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-3.jpg" alt="Concert stage with lighting and LED screens run by PixelPro Studios" fill priority quality={70} sizes="(min-width: 1024px) 70vw, 100vw" className="v2-cover v2-photo" style={{ objectPosition: "55% 45%" }} />
        </div>
        <div className="v2-hero-in">
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

      {/* 3. Services: the only card grid on the page */}
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
        <div className="v2-svc">
          {SERVICES.map((s, i) => (
            <a key={s.title} href={s.href} className={`v2-svc-card ${i > 2 ? "is-wide" : ""}`}>
              <div className="v2-svc-media">
                <Image src={s.img} alt="" fill sizes="(min-width: 1024px) 420px, 100vw" className="v2-cover v2-photo" />
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

      {/* 4. Recent work: one big lead job, then a list (not more cards) */}
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
            <li key={p.title} className="v2-row">
              <span className="v2-row-n">0{i + 2}</span>
              <div className="v2-row-img">
                <Image src={p.img} alt={p.alt} fill sizes="160px" className="v2-cover v2-photo" />
              </div>
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

      {/* 6. Why PixelPro: one wide photo, then three big figures (no cards) */}
      <section className="v2-sec v2-why" aria-labelledby="why-h">
        <div className="v2-wrap">
          <h2 id="why-h" className="v2-h2">Why event teams book PixelPro</h2>
        </div>
        <div className="v2-why-photo">
          <Image src="/portfolio-live-music/event-av-planning_sound-check-before-doors-open.webp" alt="PixelPro crew running a sound check before the doors open" fill sizes="100vw" className="v2-cover v2-photo" style={{ objectPosition: "center 55%" }} />
        </div>
        <div className="v2-wrap v2-figures">
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

      {/* 8. From the field: a sideways strip (replaces the white Instagram box) */}
      <section className="v2-sec" aria-labelledby="field-h">
        <div className="v2-wrap v2-head-row">
          <h2 id="field-h" className="v2-h2">See what we&apos;ve been creating</h2>
          <a href="https://www.instagram.com/pixelprostudios.sg/" target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-ghost v2-btn-sm">
            Follow @pixelprostudios.sg
          </a>
        </div>
        <div className="v2-strip">
          {FIELD.map((src, i) => (
            <a key={src} href="https://www.instagram.com/pixelprostudios.sg/" target="_blank" rel="noopener noreferrer" className="v2-strip-tile" aria-label={`PixelPro stage production, photo ${i + 1} (opens Instagram)`}>
              <Image src={src} alt="" fill sizes="(min-width: 1024px) 300px, 70vw" className="v2-cover v2-photo" />
            </a>
          ))}
        </div>
      </section>

      {/* 9. One clear next step (the only centred block) */}
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
        </div>
      </section>
    </main>
  );
}
