"use client";
// MOCKUP by Rankr (17 Nov 2026). Home page, "Design 2": layout and motion patterns from voltade.com, PixelPro colours.
// Same facts and copy as Design 1 (home-v2): services from components/ServicesSection.tsx, events from Jovin's write-ups,
// review excerpts never reworded. No guarantee, no "one-stop", client names left out (writing rules).
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import HeroPixelSpotlight from "@/components/HeroPixelSpotlight";
import { LOGOS } from "@/components/LogoSection";
import { allReviews, waLink } from "../_v2/data";
import { Accordion, Arrow, ArrowLink, Badge, FloatingWa, PeekCarousel, type PeekItem, StripGallery, WaComposer, Stars, WaIcon, reduced, useInView, useReveal } from "../_v3/parts";

const WA_TEXT = "Hi PixelPro, I'd like a quote for an event (from your website).\nDate: \nVenue: \nEvent name & type: \nWhat you need: ";
const WA = waLink(WA_TEXT);
const CAL = "https://cal.com/pixelpro/consultation";
/* ---------- 1. services demo: tabs step by themselves, one sentence, one photo ---------- */
const SERVICES = [
  /* Copy: Jovin's own text (WhatsApp, 23 Nov 5:02-5:10 pm), word for word, except Lukas's banned words:
     "seamless setup" -> "professional setup", "seamless coordination" -> "smooth coordination".
     Staging tab: Jovin asked to add it; the text is ours in his style, for him to check. */
  { tab: "LED walls", pre: "Stunning LED Displays That ", hl: "Bring Your Event to Life", post: ".", foot: ["Transform any event space with vibrant, high-resolution indoor and outdoor LED walls, customised to suit your venue and event requirements.", "From corporate conferences and exhibitions to concerts and large-scale celebrations, we provide complete LED wall solutions, including installation, content display management and dedicated technical support throughout your event."], img: "/services-hero/services_led-walls.webp", href: "/mockup/led-walls-v3", cta: "LED wall rental" },
  /* Sound, lighting and projection are three tabs, each with its own button (Jovin, 19 Nov) */
  { tab: "Sound", pre: "", hl: "Crystal-Clear Sound", post: " for Every Occasion.", foot: ["Deliver exceptional audio experiences with professional sound systems tailored to your event's scale, venue and requirements.", "From corporate presentations and conferences to live performances and outdoor events, we provide quality speakers, microphones, digital mixing systems and experienced sound engineers to ensure every word and performance is heard clearly."], img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-1.jpg", href: "/mockup/sound-system-rental", cta: "Sound system rental" },
  { tab: "Lighting", pre: "Set the Mood. ", hl: "Illuminate Every Moment", post: ".", foot: ["Elevate your event with professional lighting solutions designed to create atmosphere, enhance performances and captivate your audience.", "From elegant stage washes and ambient lighting to dynamic moving heads and synchronised lighting effects, our team delivers tailored lighting setups for corporate events, concerts, performances and celebrations."], img: "/services-av-lighting/pixelpro-studios-stage-lighting-singapore.jpg", href: "/mockup/av-systems", cta: "Audio visual systems" },
  { tab: "Projection", pre: "", hl: "Clear, Brilliant Visuals", post: " for Every Presentation.", foot: ["Make every presentation, video and visual count with professional projection solutions tailored to your venue.", "Whether it's a corporate seminar, conference, exhibition or community event, we provide high-quality projectors, projection screens, professional setup and technical support for a smooth viewing experience."], img: "/portfolio-jobs/projector-rental_movie-screening-crowd.webp", href: "/mockup/projector-rental", cta: "Projector rental" },
  { tab: "Staging", pre: "Solid Stages, ", hl: "Built Around Your Event", post: ".", foot: ["Give your speakers and performers a stable, professional platform with modular stage rental.", "We plan the stage size and height with you, set it up with skirting and steps, and handle the tear-down after your event."], img: "/services-hero/services_stage-rental.webp", href: "/mockup/stage-rental-v3", cta: "Stage rental" },
  /* Photo changed (Jovin, 23 Nov): a real event photo by PixelPro (Drive "Sino Elite Dragonboating", eye-dotting ceremony), top cropped */
  { tab: "Photography", pre: "Capturing ", hl: "Moments That Matter", post: ".", foot: ["Preserve the highlights of your event with professional photography that tells your story.", "From corporate functions and conferences to award ceremonies and celebrations, our photographers capture key moments, candid interactions, VIP engagements and memorable experiences with creativity and attention to detail.", "Same-day photo selections can also be arranged upon request."], img: "/portfolio-jobs/event-photography_guest-of-honour-eye-dotting.webp", href: "/services/photography", cta: "Photography" },
  { tab: "Videography", pre: "Your Event. Your Story. ", hl: "Beautifully Captured", post: ".", foot: ["Bring your event to life beyond the occasion with professional videography and video production services.", "From multi-camera event coverage and cinematic highlights to promotional videos and social media reels, our team captures and transforms memorable moments into compelling visual content.", "Same-day edits and customised video deliverables are available upon request."], img: "/services-video/pixelpro-studios-videography-services-singapore.jpg", href: "/services/videography", cta: "Videography" },
  { tab: "Entertainment", pre: "", hl: "Unforgettable Entertainment", post: " for Every Occasion.", foot: ["Bring energy, excitement and unforgettable experiences to your event with our curated entertainment and talent solutions.", "From professional emcees and DJs to live bands, musicians and cultural performances, we connect you with the right talent to complement your event's theme, audience and atmosphere.", "Together with our AV production team, we ensure smooth coordination between performers, sound, lighting and event programming."], img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg", href: "/services/talent", cta: "Entertainment and talent" },
];
const TAB_MS = 9000; /* longer text since Jovin's copy (23 Nov): time to read before the next tab */
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
            <ArrowLink href={s.href}>{s.cta}</ArrowLink>
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
      {/* Jovin's paragraphs sit under the photo (too long to lay over it). All are stacked in one grid cell, so the height never jumps between tabs. */}
      <div className="v3-demo-copy">
        {SERVICES.map((x, k) => (
          <div key={x.tab} className={k === i ? "is-active" : ""} aria-hidden={k !== i}>
            {x.foot.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 2. events: peek carousel (active card wide, neighbours as slices, square arrows) ---------- */
const J = "/portfolio-jobs/";
const EVENTS = [
  { title: "National Day celebration at Marina Barrage", meta: "Government · Outdoor", gear: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m", "Stage lighting"], img: J + "event-production_sound-engineer-marina-barrage.webp", alt: "PixelPro crew on site at Marina Barrage on National Day" },
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
  { n: "24/7", t: "Quick replies, any day", h: "WhatsApp us any time, even for last-minute requests", p: "Send us your date, venue and what you need. We reply as soon as we can. For urgent enquiries, call us directly.", rows: [["WhatsApp", "24/7"], ["Office", "Mon–Sun, 9am–10pm"], ["Urgent enquiries", "+65 8860 5489"]] },
  { n: "5.0", t: "Rated on Google", h: "Clear quotations, charged per rental day", p: "Your quotation lists the equipment, the setup and the crew, so you see what you pay for. Most equipment is charged per rental day, not per hour.", rows: [["Quotation", "Itemised"], ["Equipment", "Charged per rental day"], ["Google rating", "5.0"]] },
  { n: "Lv 3", t: "bizSAFE and GeBIZ registered", h: "A dedicated technical lead on every setup", p: "Our technicians test everything before your event, and a dedicated technical lead oversees every setup. It is part of our bizSAFE Level 3 safety practice.", rows: [["bizSAFE", "Level 3"], ["GeBIZ", "Registered vendor"], ["Purchases", "GeBIZ, SAP Ariba, e-invoicing"]] },
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
  { q: "What does PixelPro Studios do?", a: "We're an audio visual company in Singapore. We supply and run LED walls, sound systems, staging, lighting and projection for events, and we cover events on photo and video. We can also arrange emcees and performers." },
  { q: "How much does it cost?", a: "Every quotation is customised. Most equipment is charged per rental day, however many hours you use it that day. Technician charges can vary with the working hours. Send us your date, venue and what you need, and we'll send you a clear breakdown." },
  { q: "What size LED wall can you build?", a: "Whatever size you have in mind, we can build it. Common sizes include 6 m × 4 m and 8 m × 3 m. Book a free consultation with our team." },
  { q: "Does your team stay during the event?", a: "Our LED wall technicians are on standby throughout the event. For sound and our other services, our crew stays on site to monitor the systems where on-site technical support is included." },
  { q: "Do you handle permits and endorsements?", a: "Yes. We arrange LEW and PE endorsements where required, and all necessary permits, tailored to your venue." },
  { q: "Do you work with schools and government agencies?", a: "Yes. We regularly work with MOE schools and understand their procurement processes. As a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  { q: "How do I get a quotation?", a: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly." },
];

/* client logos from Jovin's services deck, "Trusted By." page, same three rows and order (18 Nov). MOT left out: they asked not to be online */
const CLIENT_LOGOS: [string, string][][] = [
  [["r1-01.webp", "People's Action Party"], ["r1-02.webp", "Singapore Airlines"], ["r1-03.webp", "Mediacorp"], ["r1-04.webp", "Land Transport Authority"], ["r1-06.webp", "PUB"], ["r1-07.webp", "People's Association"], ["r1-08.webp", "Ministry of Education Singapore"], ["r1-09.webp", "Singapore Schools Sports Council"]],
  [["r2-01.webp", "Camp Challenge"], ["r2-02.webp", "Nanyang Technological University"], ["r2-03.webp", "Singapore Management University"], ["r2-04.webp", "Singapore University of Technology and Design"], ["r2-05.webp", "The University of Chicago"], ["r2-06.webp", "Nanyang Junior College"], ["r2-07.webp", "Victoria Junior College"], ["r2-08.webp", "Victoria School"], ["r2-09.webp", "Ngee Ann Secondary School"], ["r2-10.webp", "Ahmad Ibrahim Secondary School"], ["r2-11.webp", "Serangoon Secondary School"], ["r2-12.webp", "Mosta Records"]],
  [["r3-01.webp", "Citrus"], ["r3-02.webp", "Blissful Brides"], ["r3-03.webp", "Clubpets"], ["r3-04.webp", "Coach"], ["r3-05.webp", "Hard Rock Cafe Singapore"], ["r3-06.webp", "Paradigm"], ["r3-07.webp", "Gushcloud"], ["r3-08.webp", "Universal Studios Singapore"], ["r3-09.webp", "Mega Beauty Festival"], ["r3-10.webp", "air"], ["r3-11.webp", "Grand Cru Wine Concierge"]],
];

/* Instagram's own profile embed, as on the live site: shows their latest posts by itself. Loads when scrolled to. */
function IgEmbed() {
  const [box, near] = useInView<HTMLDivElement>(0);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (near) setOn(true);
  }, [near]);
  return (
    <div ref={box} className="v3-ig-embed" data-rv>
      <div className="v3-ig-frame">{on && <iframe src="https://www.instagram.com/pixelprostudios.sg/embed/" title="Latest Instagram posts from PixelPro Studios" loading="lazy" allow="encrypted-media" />}</div>
    </div>
  );
}

/* Promotions: shown in the strip gallery. `meta` is the small white label on the open card. */
const PROMOS: PeekItem[] = [
  /* Promotion text: Jovin's own (WhatsApp, 23 Nov), word for word */
  { meta: "Festive promotion", title: "Celebrate Chinese New Year with Our Festive AV Packages!", line: "Make your company's Chinese New Year celebration an occasion to remember with professional sound and lighting solutions. From corporate reunion dinners and festive gatherings to lively lo hei celebrations, our specially curated AV packages start from just S$888, with setup, dismantling and technical support included.", cta: "Explore Festive Packages", href: "/mockup/cny-event-av-v3/#packages", gear: [], img: "/events-hero/events_cny-event-av.webp", alt: "Banquet hall set up for a Chinese New Year dinner" },
  { meta: "Charity promotion", title: "Supporting Communities. Creating Meaningful Events.", line: "At PixelPro Studios, we believe great events can make a meaningful difference. As part of our commitment to giving back, eligible registered charities and non-profit organisations enjoy 10% off our event AV packages. We'll also contribute an additional 5% of the discounted booking value towards their charitable cause. Together, let's create impactful events that give back to the community.", cta: "Discover Our Charity Initiative", href: "/promotions/promotion-charity-singapore-led-walls-event/", gear: [], img: "/portfolio-jobs/sound-system-rental_community-club-hall-full-house.webp", alt: "Full community club hall at an event with PixelPro sound" },
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
            Your trusted partner for professional audio visual solutions and event production in Singapore.
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
          <h2 id="svc-h" className="v3-h2" style={{ textAlign: "center", margin: "0 auto 16px" }} data-rv>
            Event AV and media services
          </h2>
          {/* Jovin's hero paragraph 2 (23 Nov), moved here so the hero stays one line. "seamless, end-to-end" -> "complete" (Lukas's banned words) */}
          <p className="v3-lead" style={{ textAlign: "center", margin: "0 auto 28px", maxWidth: 640 }} data-rv>
            From LED walls, sound systems, lighting and staging to photography, videography and entertainment, PixelPro Studios delivers complete event solutions.
          </p>
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
          </div>
          <div data-rv>
            <PeekCarousel items={EVENTS} label="Events we have supported" noun="event" />
          </div>
          <div className="v3-links v3-links-row" data-rv>
            <ArrowLink href="/portfolio">See all projects</ArrowLink>
            <ArrowLink href="/mockup/led-walls-v3">LED wall rental</ArrowLink>
            <ArrowLink href="/mockup/stage-rental-v3">Stage rental</ArrowLink>
          </div>
        </div>
      </section>

      {/* Promotions: a strip gallery, so it does not look the same as the events carousel above (Abel + Jovin, 19 Nov). Opens the next card every 6 s. */}
      <section className="v3-sheet v3-sheet-charcoal" aria-labelledby="promo-h">
        <div className="v3-wrap">
          <StripGallery items={PROMOS} heading="Promotions" headingId="promo-h" label="Promotions" noun="promotion" auto={6000} />
        </div>
      </section>

      {/* Sheet 3 (white, like the deck's "Trusted By." page): heading and links, then the deck's three logo rows in colour */}
      <section className="v3-sheet v3-sheet-light v3-sheet-logos" aria-labelledby="logo-h">
        <div className="v3-wrap">
          <div className="v3-head" data-rv>
            <h2 id="logo-h" className="v3-h2">
              Trusted by government agencies, schools and brands
            </h2>
            {/* Jovin's hero paragraph 3 (23 Nov), moved under the logo heading */}
            <p className="v3-body" style={{ marginTop: 14, maxWidth: 620 }}>
              Trusted by government agencies, educational institutions and corporate clients, we bring your vision to life with reliable equipment, experienced professionals and dedicated on-site support.
            </p>
          </div>
          <div className="v3-logo-wall" data-rv>
            {CLIENT_LOGOS.map((row, r) => (
              <ul key={r} className="v3-logo-group" style={{ "--n": row.length } as CSSProperties}>
                {row.map(([file, alt]) => (
                  <li key={file}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/client_logos_2026/${file}`} alt={alt} loading="lazy" />
                  </li>
                ))}
              </ul>
            ))}
            <p className="v3-logo-more">And more.</p>
          </div>
          {/* Links under the logos, in one row like the events section (Jovin, 19 Nov) */}
          <div className="v3-links v3-links-row" data-rv>
            <ArrowLink href="/mockup/events/conference-av-rental">Conference AV</ArrowLink>
            <ArrowLink href="/mockup/events/school-sound-system-rental">School events</ArrowLink>
            <ArrowLink href="/mockup/events/roadshow-led-screen-rental">Roadshows</ArrowLink>
            <ArrowLink href="/mockup/events/dinner-and-dance-av">Dinner and dance</ArrowLink>
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

      {/* Instagram (Jovin, 18 Nov) */}
      <section className="v3-sheet v3-sheet-charcoal" aria-labelledby="ig-h">
        <div className="v3-wrap">
          <div className="v3-ig-split">
            <div className="v3-head" data-rv>
              <h2 id="ig-h" className="v3-h2">
                Follow our setups on Instagram
              </h2>
              <a className="v3-ig-btn" href="https://www.instagram.com/pixelprostudios.sg/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" /></svg>
                @pixelprostudios.sg
              </a>
            </div>
            <IgEmbed />
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
                Tick what you need, and we&apos;ll write the WhatsApp message for you.
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
