"use client";
// MOCKUP by Rankr (17 Nov 2026). Home page, "Design 2": layout and motion patterns from voltade.com, PixelPro colours.
// Same facts and copy as Design 1 (home-v2): services from components/ServicesSection.tsx, events from Jovin's write-ups,
// review excerpts never reworded. No guarantee, no "one-stop", client names left out (writing rules).
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroPixelSpotlight from "@/components/HeroPixelSpotlight";
import { LOGOS } from "@/components/LogoSection";
import { allReviews, waLink } from "../_v2/data";
import { Accordion, Arrow, ArrowLink, Badge, FloatingWa, PeekCarousel, WaComposer, Stars, WaIcon, reduced, useInView, useReveal } from "../_v3/parts";

const WA_TEXT = "Hi PixelPro, I'd like a quote for an event (from your website).\nDate: \nVenue: \nEvent name & type: \nWhat you need: ";
const WA = waLink(WA_TEXT);
const CAL = "https://cal.com/pixelpro/consultation";
/* ---------- 1. services demo: tabs step by themselves, one sentence, one photo ---------- */
const SERVICES = [
  { tab: "LED walls", pre: "Indoor and outdoor LED walls, ", hl: "configured to your venue", post: " and operated on site.", foot: "Indoor and outdoor LED wall systems, configured to your venue and operated on site.", img: "/services-hero/services_led-walls.webp", href: "/mockup/led-walls-v3", cta: "LED wall rental" },
  { tab: "Sound, lighting, projection", pre: "Sound, stage lighting and projection for ", hl: "events of any scale", post: ".", foot: "Sound reinforcement, stage lighting, projection and technical support for events of any scale.", img: "/services-hero/services_av-systems.webp", href: "/mockup/av-systems", cta: "Audio visual systems" },
  { tab: "Photography", pre: "Event coverage, ", hl: "corporate headshots", post: " and brand photography.", foot: "Event coverage, corporate headshots and brand photography.", img: "/services-photo/pixelpro-studios-photography-service-singapore.jpg", href: "/services/photography", cta: "Photography" },
  { tab: "Videography", pre: "Event coverage, ", hl: "highlight reels", post: " and corporate videos.", foot: "Event coverage, highlight reels and corporate videos.", img: "/services-video/pixelpro-studios-videography-services-singapore.jpg", href: "/services/videography", cta: "Videography" },
  { tab: "Entertainment", pre: "", hl: "Hosts and performances", post: " for your programme.", foot: "Hosts, entertainment and performances for your programme.", img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg", href: "/services/talent", cta: "Entertainment and talent" },
];
const TAB_MS = 4500;
function ServicesDemo() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  useEffect(() => {
    if (reduced()) setPlaying(false);
  }, []);
  useEffect(() => {
    if (!playing || !inView) return;
    const t = setTimeout(() => setI((k) => (k + 1) % SERVICES.length), TAB_MS);
    return () => clearTimeout(t);
  }, [i, playing, inView]);
  const s = SERVICES[i];
  return (
    <div ref={ref} className="v3-demo">
      <div className="v3-tabs" role="tablist" aria-label="Services">
        {SERVICES.map((x, k) => (
          <button key={x.tab} type="button" role="tab" aria-selected={k === i} className={`v3-tab ${k === i ? "is-active" : ""} ${playing && inView ? "is-playing" : ""}`} onClick={() => (setPlaying(false), setI(k))}>
            {x.tab}
            {k === i && <span key={`${i}-${playing}-${inView}`} className="v3-tab-fill" style={{ animationDuration: `${TAB_MS}ms` }} />}
          </button>
        ))}
      </div>
      <p className="v3-demo-line" aria-live="off">
        <span key={i}>
          {s.pre}
          <span className="v3-hl">{s.hl}</span>
          {s.post}
        </span>
      </p>
      <div className="v3-demo-stage">
        {SERVICES.map((x, k) => (
          <div key={x.tab} className={`v3-demo-img ${k === i ? "is-active" : ""}`} aria-hidden={k !== i}>
            <Image src={x.img} alt={k === i ? `${x.cta} by PixelPro Studios` : ""} fill sizes="(min-width: 1240px) 1160px, 100vw" className="v3-cover v3-photo" priority={k === 0} />
          </div>
        ))}
        <div className="v3-demo-shade" aria-hidden />
        <div className="v3-demo-foot">
          <div>
            <p>{s.foot}</p>
            <div style={{ marginTop: 10 }}>
              <ArrowLink href={s.href}>{s.cta}</ArrowLink>
            </div>
          </div>
          <button type="button" className="v3-pp" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>
            {playing ? (
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                <rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
                <rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                <path d="M4 2.5v11a.7.7 0 0 0 1 .6l9-5.5a.7.7 0 0 0 0-1.2l-9-5.5a.7.7 0 0 0-1 .6Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- 2. events: peek carousel (active card wide, neighbours as slices, square arrows) ---------- */
const J = "/portfolio-jobs/";
const EVENTS = [
  { title: "National Day celebration at Marina Barrage", meta: "Government · Outdoor", gear: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m", "Stage lighting"], img: J + "event-production_sound-engineer-marina-barrage.webp", alt: "PixelPro crew on site at Marina Barrage on National Day" },
  { title: "Three-day international forum", meta: "Conference · Hotel ballroom", gear: ["3.5 m × 2.5 m LED wall", "50-inch confidence monitor", "LED technician all 3 days"], img: J + "conference-av-rental_led-wall-hotel-ballroom-forum.webp", alt: "LED wall in a hotel ballroom for an international forum" },
  { title: "Caregiving Week in a mall atrium", meta: "Community roadshow · Built overnight", gear: ["5.5 m × 3 m LED wall", "7 m × 4 m stage", "Sound and wireless mics"], img: J + "led-wall-rental_5-5x3m-led-wall-mall-atrium.webp", alt: "LED wall above a stage in a mall atrium" },
  { title: "University innovation showcase", meta: "University · Pitching", gear: ["6 m × 2.5 m LED wall", "Sound and rostrum mics", "Sound engineer on site"], img: J + "led-wall-rental_6x2-5m-led-wall-pitch-day.webp", alt: "LED wall at a university pitch day" },
  { title: "School speech and prize day", meta: "School · Hall and outdoor stage", gear: ["Four 1 m × 2 m LED panels", "Stage lighting", "Two sound crews"], img: J + "school-sound-system-rental_prize-day-stage-led-and-lighting.webp", alt: "School hall stage with LED panels and lighting" },
  { title: "Junior college orientation at a fountain plaza", meta: "School · Outdoor", gear: ["8 outdoor speakers", "Generator and power", "Permits and LEW handled"], img: J + "school-sound-system-rental_outdoor-orientation-speakers.webp", alt: "Outdoor speakers set up for a school orientation" },
  { title: "Community club music night", meta: "Community · Club hall", gear: ["Two 120-inch screens", "Live band sound", "Projectors"], img: J + "sound-system-rental_community-club-hall-full-house.webp", alt: "Full community club hall with PixelPro screens and speakers" },
];
/* ---------- 3. client logos: white circles that drift along a wave; drag to move them ---------- */
function LogoWave() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const dragging = useRef<{ startX: number; startOffset: number } | null>(null);
  const place = useCallback(() => {
    const t = track.current;
    const w = wrap.current;
    if (!t || !w) return;
    const half = t.scrollWidth / 2;
    if (half > 0) x.current = ((x.current % half) + half) % half;
    t.style.transform = `translate3d(${-x.current}px,0,0)`;
    const vw = w.clientWidth;
    const kids = t.children;
    const size = (kids[0] as HTMLElement)?.offsetWidth ?? 120;
    const amp = size * 0.2;
    const wavelength = Math.max(vw * 0.9, 700);
    for (let k = 0; k < kids.length; k++) {
      const el = kids[k] as HTMLElement;
      const cx = el.offsetLeft + size / 2 - x.current; // centre on screen
      if (cx < -size || cx > vw + size) continue;
      el.style.transform = `translate3d(0,${(Math.sin((cx / wavelength) * Math.PI * 2) * amp).toFixed(2)}px,0)`;
    }
  }, []);
  useEffect(() => {
    const w = wrap.current;
    if (!w) return;
    place();
    let raf = 0;
    let last = 0;
    let visible = false;
    const still = reduced();
    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 50) : 16;
      last = now;
      if (!dragging.current && !still) x.current += (dt / 1000) * 36; // 36 px per second
      place();
      if (visible) raf = requestAnimationFrame(tick);
    };
    const o = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      last = 0;
      if (visible) raf = requestAnimationFrame(tick);
    });
    o.observe(w);
    window.addEventListener("resize", place);
    return () => {
      o.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", place);
    };
  }, [place]);
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div
      ref={wrap}
      className="v3-wave"
      onPointerDown={(e) => {
        dragging.current = { startX: e.clientX, startOffset: x.current };
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        x.current = dragging.current.startOffset - (e.clientX - dragging.current.startX);
        place();
      }}
      onPointerUp={() => (dragging.current = null)}
      onPointerCancel={() => (dragging.current = null)}
    >
      <div ref={track} className="v3-wave-track">
        {loop.map((logo, k) => (
          <div key={`${logo.file}-${k}`} className="v3-circle" aria-hidden={k >= LOGOS.length}>
            <div className="v3-circle-in">
              <Image src={`/client_logos/${logo.file}`} alt={k < LOGOS.length ? logo.alt : ""} fill sizes="120px" draggable={false} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 4. why card ---------- */
const WHY = [
  { n: "24/7", t: "Quick replies, any day", h: "WhatsApp for enquiries and quotations at any hour", p: "Send us the date, venue and what you need. For urgent requests, call +65 8860 5489.", rows: [["WhatsApp", "24/7"], ["Office", "Mon–Sun, 9am–10pm"], ["Urgent requests", "+65 8860 5489"]] },
  { n: "5.0", t: "Rated on Google", h: "Customised quotations with a clear breakdown", p: "Sound systems, LED walls, staging, photography and videography, planned and run by our own crew.", rows: [["Google rating", "5.0"], ["Quotation", "Equipment, installation and crew itemised"], ["Crew", "Our own technicians"]] },
  { n: "Lv 3", t: "bizSAFE and GeBIZ registered", h: "Registered for schools and government agencies", p: "PixelPro Studios is bizSAFE Level 3 and a GeBIZ-registered vendor.", rows: [["bizSAFE", "Level 3"], ["GeBIZ", "Registered vendor"], ["Purchases", "GeBIZ, SAP Ariba, e-invoicing"]] },
];
function WhyCard() {
  const [i, setI] = useState(0);
  const w = WHY[i];
  return (
    <div className="v3-why" data-rv>
      <div className="v3-why-list" role="tablist" aria-label="Why event teams book PixelPro">
        {WHY.map((x, k) => (
          <button key={x.t} type="button" role="tab" aria-selected={k === i} className={`v3-why-item ${k === i ? "is-active" : ""}`} onClick={() => setI(k)} onMouseEnter={() => setI(k)} onFocus={() => setI(k)}>
            <span className="v3-why-n">{x.n}</span>
            <span className="v3-why-t">{x.t}</span>
          </button>
        ))}
      </div>
      <div className="v3-why-panel" role="tabpanel">
        <div key={i} className="v3-why-pane">
          <h3 className="v3-h3">{w.h}</h3>
          <p className="v3-body">{w.p}</p>
          <ul className="v3-rows">
            {w.rows.map(([a, b]) => (
              <li key={a}>
                <span>{a}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- 5. one review at a time ---------- */
function ReviewQuote() {
  const [i, setI] = useState(0);
  const n = allReviews.length;
  const r = allReviews[i];
  return (
    <div className="v3-quote" data-rv>
      <div key={i} className="v3-quote-body">
        <Stars size={16} />
        <p className="v3-quote-text" style={{ marginTop: 14 }}>
          &ldquo;{r.quote}&rdquo;
        </p>
        <p className="v3-quote-who">
          {r.who} · {r.context} · Google review
        </p>
      </div>
      <div className="v3-quote-nav">
        <div className="v3-arrows">
          <button type="button" className="v3-sq is-prev" aria-label="Previous review" onClick={() => setI((i - 1 + n) % n)}>
            <Arrow dir="prev" />
          </button>
          <span className="v3-count">
            {i + 1} / {n}
          </span>
          <button type="button" className="v3-sq is-next" aria-label="Next review" onClick={() => setI((i + 1) % n)}>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- 6. FAQ (answers use only facts already on the site) ---------- */
const FAQS = [
  { q: "What does PixelPro Studios provide?", a: "Sound systems, LED walls, staging, stage lighting, projection, photography, videography, and hosts and performances for events across Singapore." },
  { q: "How do I get a quotation?", a: "WhatsApp us the date, venue, event type and what you need. You get one quotation with a clear breakdown of the equipment, installation and technical services." },
  { q: "When can I reach you?", a: "WhatsApp is available 24/7 for enquiries and quotations. The office is open Monday to Sunday, 9am to 10pm. For urgent requests, call +65 8860 5489." },
  { q: "Do you work with schools and government agencies?", a: "Yes. PixelPro Studios is a GeBIZ-registered vendor and is bizSAFE Level 3." },
];

export default function HomeV3() {
  useReveal();
  return (
    <main className="v3">
      <FloatingWa wa={WA} />

      {/* Hero: the live pixel-spotlight backdrop (Abel likes it). Voltade layout: small badge, big tight headline, one line, buttons. */}
      <header id="top" className="v3-hero">
        <HeroPixelSpotlight />
        <div className="v3-hero-in">
          <Badge />
          <h1 className="v3-h1 v3-rise-h">Events made effortless, every time.</h1>
          <p className="v3-lead v3-rise" style={{ animationDelay: "80ms" }}>
            Sound systems, LED walls, staging, photography and videography for events across Singapore, planned and run by our own crew.
          </p>
          <div className="v3-btns v3-rise" style={{ animationDelay: "140ms" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-wa">
              <WaIcon /> WhatsApp us
            </a>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-line">
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Sheet 1: services, as a tab demo that steps by itself */}
      <section className="v3-sheet v3-sheet-charcoal" aria-labelledby="svc-h">
        <div className="v3-wrap">
          <h2 id="svc-h" className="v3-h2" style={{ textAlign: "center", margin: "0 auto 28px" }} data-rv>
            Event AV and media services
          </h2>
          <div data-rv>
            <ServicesDemo />
          </div>
        </div>
      </section>

      {/* Sheet 2: events, peek carousel */}
      <section className="v3-sheet v3-sheet-black" aria-labelledby="work-h">
        <div className="v3-wrap">
          <div className="v3-head" data-rv>
            <h2 id="work-h" className="v3-h2">
              Events we&apos;ve supported
            </h2>
            <div className="v3-links">
              <ArrowLink href="/portfolio">See all projects</ArrowLink>
              <ArrowLink href="/mockup/led-walls-v3">LED wall rental</ArrowLink>
              <ArrowLink href="/mockup/stage-rental-v3">Stage rental</ArrowLink>
            </div>
          </div>
          <div data-rv>
            <PeekCarousel items={EVENTS} label="Events we have supported" noun="event" />
          </div>
        </div>
      </section>

      {/* Sheet 3: client logos on a wave, heading left and links right */}
      <section className="v3-sheet v3-sheet-charcoal" aria-labelledby="logo-h" style={{ paddingTop: 0 }}>
        <LogoWave />
        <div className="v3-wrap v3-wave-text">
          <div className="v3-head" data-rv>
            <h2 id="logo-h" className="v3-h2">
              Trusted by schools, agencies and event teams
            </h2>
            <div className="v3-links">
              <ArrowLink href="/mockup/events/conference-av-rental">Conference AV</ArrowLink>
              <ArrowLink href="/mockup/events/school-sound-system-rental">School events</ArrowLink>
              <ArrowLink href="/mockup/events/roadshow-led-screen-rental">Roadshows</ArrowLink>
              <ArrowLink href="/mockup/events/dinner-and-dance-av">Dinner and dance</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* Sheet 4 (light): why, one review, FAQ */}
      <section className="v3-sheet v3-sheet-light" aria-labelledby="why-h">
        <div className="v3-wrap">
          <div className="v3-head" style={{ marginBottom: 32 }} data-rv>
            <h2 id="why-h" className="v3-h2">
              Why event teams book PixelPro
            </h2>
            <div className="v3-links">
              <ArrowLink href="/services/deck">Download our services deck</ArrowLink>
            </div>
          </div>
          <WhyCard />
          <ReviewQuote />
          <div className="v3-faq">
            <h2 className="v3-h2" data-rv>
              Frequently asked questions
            </h2>
            <div data-rv>
              <Accordion faqs={FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* Sheet 5: two wide buttons, then one line and a link */}
      <section id="cta" className="v3-sheet v3-sheet-black v3-sheet-last" aria-labelledby="cta-h">
        <div className="v3-wrap">
          <div className="v3-cta2">
            <div data-rv>
              <h2 id="cta-h" className="v3-h2 v3-cta2-h">
                Let&apos;s bring your event to life.
              </h2>
              <p className="v3-lead" style={{ marginTop: 18, maxWidth: 420 }}>
                Tap what fits your event. We write the WhatsApp message for you.
              </p>
              <div className="v3-links v3-cta2-links">
                <ArrowLink href={CAL} external>
                  Prefer to talk? Book a call
                </ArrowLink>
                <ArrowLink href="https://www.instagram.com/pixelprostudios.sg/" external>
                  Recent setups on Instagram
                </ArrowLink>
              </div>
            </div>
            <div data-rv>
              <WaComposer template={WA_TEXT} needs={["LED wall", "Sound system", "Stage", "Lighting", "Projector", "Photography", "Videography"]} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
