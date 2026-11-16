"use client";
// MOCKUP by Rankr (16 Nov 2026). LED wall rental page, design v2 (Abel picked: Our work = carousel, LED walls = chapters).
// Copy from ../led-walls/page.tsx.
import Image from "next/image";
import { useEffect, useState } from "react";
import { FloatingWa, LED_PROJECTS, PhoneBar, RatingBlock, ReviewsMarquee, SideTicks, TrustChip, WaIcon, WorkCarousel, goTo, useActiveSection, useReveal, waLink } from "../_v2/shared";

const WA = waLink(
  "Hi PixelPro, I'd like a quote for an LED wall (from your LED wall rental page).\nDate: \nVenue: \nEvent name & type: \nLED wall size: \nIndoor or outdoor: \nNeed operator on-site: Yes/No",
);

const SECTIONS = [
  ["work", "Our work"],
  ["walls", "LED walls"],
  ["reviews", "Reviews"],
  ["quote", "Get a quote"],
  ["faq", "Questions"],
] as const;
const SECTION_IDS = SECTIONS.map(([id]) => id);

const WALLS = [
  {
    n: "01",
    label: "Indoor",
    title: "Indoor P2.5 LED wall",
    copy: "For corporate presentations, conferences and indoor performances. High-resolution panels for slides, video and detailed graphics.",
    img: "/portfolio-jobs/conference-av-rental_panel-discussion-led-wall.webp",
    alt: "Indoor P2.5 LED wall behind a panel discussion",
    pos: "center 72%",
    facts: [["P2.5", "pixel pitch"], ["Sharp", "slides and text up close"], ["Indoors", "ballrooms and halls"]],
  },
  {
    n: "02",
    label: "Outdoor",
    title: "Outdoor P3.9 LED wall",
    copy: "For outdoor events, public screenings and bright venues. High-brightness, weather-resistant panels.",
    img: "/portfolio-jobs/roadshow-led-screen-rental_mall-atrium-crowd.webp",
    alt: "LED screen in a bright mall atrium with a crowd",
    pos: "center 45%",
    facts: [["P3.9", "pixel pitch"], ["Bright", "clear in daylight"], ["Outdoors", "weather-resistant panels"]],
  },
  {
    n: "03",
    label: "Sizes",
    title: "Which size LED wall do I need?",
    copy: "Our modular LED walls can be configured to suit your event size, stage layout and venue. Whatever size you have in mind, we can build it.",
    img: "/portfolio-jobs/town-hall-sound-system_full-atrium-led-wall.webp",
    alt: "Large PixelPro LED wall filling an atrium for a town hall",
    pos: "center 50%",
    facts: [],
  },
];

const SIZES: [number, number][] = [
  [3.5, 2.5],
  [5.5, 3],
  [6, 2.5],
  [6, 4],
  [8, 3],
];

type Faq = { q: string; a: string; list?: string[]; group: string };
const FAQ_GROUPS = ["All", "Pricing", "Planning", "On the day", "Booking"];
const FAQS: Faq[] = [
  {
    group: "Pricing",
    q: "How much does LED screen rental cost?",
    a: "We quote per event, because the price depends on the screen size, indoor or outdoor, the number of rental days, venue access and setup timing, and the technical support you need. These are the things that raise the quotation:",
    list: [
      "Screen size: a bigger wall needs more panels, crew and setup time",
      "Indoor or outdoor: outdoors needs a different screen and more planning",
      "Number of rental days: an event over several days",
      "Venue access and timing: no loading bay, stairs only, or a tight setup window",
      "Standing or hung: hanging from the ceiling needs rigging and venue approval",
      "Technical support: technicians on site for a long programme",
      "Add-ons: a stage, sound or photo and video (one quotation for all of it)",
    ],
  },
  {
    group: "Pricing",
    q: "What information do you need for an LED wall quote?",
    a: "Share your event date, venue, preferred screen size, indoor or outdoor setting, the number of rental days, what you'll show on the screen, and whether the wall will stand on the floor or be rigged. We can help refine the setup from there.",
  },
  {
    group: "Planning",
    q: "Should I choose an LED wall or a projector?",
    a: "Both have their place, depending on your venue, audience and budget. We rent both, so we'll recommend the one that fits. An LED wall is:",
    list: [
      "Brighter and sharper: stays clear in bright rooms, mall atriums and outdoors",
      "No projector space needed: nothing to place in front of or behind the screen",
      "No shadows: speakers and guests can walk past without blocking the picture",
      "Stronger contrast: colours and text stay clear, especially in bright venues",
    ],
  },
  {
    group: "Planning",
    q: "What pixel pitches are available?",
    a: "Our commonly specified systems include P2.5 panels for indoor events and P3.9 panels for larger stages and outdoor use. We recommend the right option based on your content, venue and audience.",
  },
  {
    group: "Planning",
    q: "How big can the LED video wall be?",
    a: "For LED video wall hire, whatever size you have in mind, we can build it. Common sizes include 6 m × 4 m and 8 m × 3 m. We confirm the final size after checking your venue, power and structure.",
  },
  {
    group: "Planning",
    q: "Can the LED wall be used outdoors or in bright venues?",
    a: "Yes. Our outdoor LED walls keep content clear in daylight and in bright mall or atrium spaces. Final suitability depends on the site and the weather plan.",
  },
  {
    group: "On the day",
    q: "What's included in an LED wall rental?",
    a: "Every LED wall rental comes with our technical team. We work with you from planning to tear-down:",
    list: [
      "Pre-event consultation and a venue check, where needed",
      "Delivery, installation and configuration of the LED wall",
      "Video processing, signal routing and screen calibration",
      "Testing and a content check before your guests arrive",
      "LED wall technicians on standby throughout the event",
      "Tear-down and removal after the event",
    ],
  },
  {
    group: "On the day",
    q: "I'm not technical. What do I need to do?",
    a: "Send us your slides and videos beforehand and tell us the programme. Our team plans the setup, installs and tests the screen, and our technicians run it during the event.",
  },
  {
    group: "On the day",
    q: "What if something goes wrong in the middle of the event?",
    a: "Our LED wall technicians are on standby throughout the event and respond quickly if anything needs attention. We test the setup and your content before guests arrive, and we plan backups.",
  },
  {
    group: "On the day",
    q: "Can you manage presentation content?",
    a: "Yes. We run presentations, sponsor loops, videos, countdowns and motion graphics through professional video processors, with a technician on site.",
  },
  {
    group: "Booking",
    q: "How does booking an LED wall work?",
    a: "Five steps from enquiry to event day:",
    list: [
      "Enquiry: share your event date, venue, audience size and what you need",
      "Consultation and planning: we check the venue and recommend a suitable LED setup",
      "Quotation and confirmation: you receive a customised quotation and confirm on the agreed payment terms",
      "Installation and testing: our crew delivers, installs and tests the LED wall ahead of your event",
      "Live operation and tear-down: our technicians support the event, then handle the tear-down",
    ],
  },
  {
    group: "Booking",
    q: "How far ahead should I book?",
    a: "At least two to four weeks for standard events, and earlier for LED walls in peak season. We also take urgent requests: our WhatsApp is available 24/7, or give us a call.",
  },
  {
    group: "Booking",
    q: "Do you provide LED wall rental across Singapore?",
    a: "Yes. We supply, install, calibrate, operate and dismantle indoor and outdoor LED wall systems for events across Singapore.",
  },
  {
    group: "Booking",
    q: "Are you registered on GeBIZ?",
    a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.",
  },
];

const CHECKLIST = ["Event date", "Venue", "Event name and type", "Number of rental days", "LED wall size (if you know it)", "Indoor or outdoor", "What you'll show: slides, video, graphics", "Need an operator on site?"];

export default function LedV2() {
  const active = useActiveSection(SECTION_IDS);
  useReveal();
  const [wall, setWall] = useState(0);
  const [prevWall, setPrevWall] = useState<number | null>(null);
  const [size, setSize] = useState(3);
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<number | null>(0);

  // LED wall chapters: when a chapter reaches the middle, fade the new photo in on top of the old one
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i);
          setWall((cur) => {
            if (cur !== i) setPrevWall(cur);
            return i;
          });
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-chapter]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const [w, h] = SIZES[size];
  const faqs = FAQS.map((f, i) => ({ ...f, i })).filter((f) => group === "All" || f.group === group);
  const pickGroup = (g: string) => {
    setGroup(g);
    const firstVisible = FAQS.findIndex((f) => g === "All" || f.group === g);
    setOpen(firstVisible);
  };

  return (
    <main className="v2">
      <SideTicks sections={SECTIONS} active={active} />
      <FloatingWa wa={WA} />
      <PhoneBar sections={SECTIONS} active={active} wa={WA} hideIds={["quote"]} />

      {/* 1. Hero: photo on the right, solid black behind the text (Netflix pattern), one-line trust chip */}
      <header id="top" className="v2-hero v2-hero-split">
        <div className="v2-hero-media">
          <Image src="/services-hero/services_led-walls.webp" alt="LED wall rental in Singapore: a PixelPro LED wall at a live event" fill priority quality={70} sizes="(min-width: 1024px) 70vw, 100vw" className="v2-cover v2-photo" style={{ objectPosition: "62% 40%" }} />
        </div>
        <div className="v2-hero-in">
          <TrustChip />
          <h1 className="v2-h1 v2-rise-h">LED Wall Rental in Singapore</h1>
          <p className="v2-lead v2-rise" style={{ animationDelay: "80ms" }}>
            From presentation screens to full-stage and outdoor LED displays. We plan each setup around your venue and programme, install and test it before your guests arrive, and our technicians stay on standby throughout your event.
          </p>
          <div className="v2-btns v2-rise" style={{ animationDelay: "140ms" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
              <WaIcon /> WhatsApp us for a quote
            </a>
            <button type="button" onClick={() => goTo("work")} className="v2-btn v2-btn-ghost">
              See our LED work
            </button>
          </div>
        </div>
      </header>

      {/* 2. Our work: Apple-style carousel; cards link to job pages once those exist */}
      <section id="work" className="v2-sec" aria-labelledby="work-h">
        <div className="v2-wrap v2-head-row">
          <div>
            <p className="v2-eyebrow">01 · Our work</p>
            <h2 id="work-h" className="v2-h2">LED walls we&apos;ve built for events</h2>
          </div>
        </div>
        <WorkCarousel projects={LED_PROJECTS} />
      </section>

      {/* 3. LED walls (LUSTRE): chapters with a sticky photo that changes */}
      <section id="walls" className="v2-walls v2-wrap" aria-labelledby="walls-h">
        <div className="v2-walls-head">
          <p className="v2-eyebrow">02 · LED walls</p>
          <h2 id="walls-h" className="v2-h2 v2-h2-xl">Indoor and outdoor LED walls</h2>
        </div>
        <div className="v2-walls-grid">
          <div className="v2-stage" aria-hidden>
            {WALLS.map((c, i) => (
              <div key={c.n} className={`v2-stage-img ${wall === i ? "is-active" : prevWall === i ? "is-prev" : ""}`}>
                <Image src={c.img} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="v2-cover v2-photo" style={c.pos ? { objectPosition: c.pos } : undefined} />
              </div>
            ))}
            <div className="v2-stage-tag">
              <span>{WALLS[wall].n}</span> / 03 · {WALLS[wall].label}
            </div>
          </div>
          <div className="v2-chapters">
            {WALLS.map((c, i) => (
              <div key={c.n} data-chapter data-i={i} className={`v2-chapter ${wall === i ? "is-active" : ""}`}>
                <div className="v2-chapter-img">
                  <Image src={c.img} alt={c.alt} fill sizes="100vw" className="v2-cover v2-photo" style={c.pos ? { objectPosition: c.pos } : undefined} />
                </div>
                <p className="v2-chapter-num">
                  {c.n} / 03 · {c.label}
                </p>
                <h3 className="v2-h3">{c.title}</h3>
                <p className="v2-body">{c.copy}</p>
                {c.facts.length > 0 && (
                  <dl className="v2-facts">
                    {c.facts.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {i === 2 && (
                  <div className="v2-sizer">
                    <div className="v2-sizer-tabs" role="radiogroup" aria-label="Common LED wall sizes">
                      {SIZES.map(([sw, sh], k) => (
                        <button key={k} type="button" role="radio" aria-checked={size === k} onClick={() => setSize(k)} className={size === k ? "is-active" : ""}>
                          {sw} × {sh} m
                        </button>
                      ))}
                    </div>
                    {/* Drawn to scale: the frame is 9.5 m wide and 5 m tall; the person is 1.7 m */}
                    <div className="v2-sizer-frame">
                      <svg className="v2-sizer-person" viewBox="0 0 20 68" aria-hidden>
                        <circle cx="10" cy="6" r="5" fill="currentColor" />
                        <path d="M3 16h14l-1.5 24H14v28H6V40H4.5z" fill="currentColor" />
                      </svg>
                      <div className="v2-sizer-wall" style={{ transform: `scale(${w / 8}, ${h / 4})` }} />
                    </div>
                    <p className="v2-sizer-label" aria-live="polite">
                      {w} m × {h} m <span>· person shown at 1.7 m for scale</span>
                    </p>
                    <p className="v2-note">Custom sizes and multiple-screen setups too.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-link">
                      Not sure? Share your venue details and we&apos;ll recommend a size →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews: the one place the big 5.0 appears */}
      <section id="reviews" className="v2-sec" aria-labelledby="reviews-h">
        <div className="v2-wrap v2-head-row">
          <h2 id="reviews-h" className="v2-h2">What our clients say</h2>
          <RatingBlock />
        </div>
        <ReviewsMarquee />
      </section>

      {/* 5. Quote (before the FAQ, Abel 17 Nov) */}
      <section id="quote" className="v2-wrap v2-quote-wrap" aria-labelledby="quote-h">
        <div className="v2-quote">
          <div>
            <p className="v2-eyebrow">04 · Get a quote</p>
            <h2 id="quote-h" className="v2-h2">Request an LED Wall Rental Quotation</h2>
            <p className="v2-body">WhatsApp available 24/7 for enquiries and quotations. We reply as soon as we can.</p>
            <div className="v2-btns">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-wa">
                <WaIcon /> WhatsApp us for a quote
              </a>
              <a href="tel:+6588605489" className="v2-btn v2-btn-ghost">
                Call +65 8860 5489
              </a>
            </div>
            <p className="v2-note">Office Mon–Sun 9am–10pm</p>
          </div>
          <div>
            <h3 className="v2-quote-list-h">What to send us</h3>
            <ul className="v2-quote-list">
              {CHECKLIST.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="v2-more">
          <h3>More than just LED walls</h3>
          <div className="v2-more-links">
            <a href="/mockup/stage-rental">Stage rental →</a>
            <a href="/mockup/sound-system-rental">Sound system rental →</a>
            <a href="/mockup/projector-rental">Projector and screen rental →</a>
            <a href="/mockup/av-systems">AV rental →</a>
          </div>
        </div>
      </section>
      {/* 6. Questions */}
      <section id="faq" className="v2-faq v2-wrap" aria-labelledby="faq-h">
        <div className="v2-faq-side">
          <h2 id="faq-h" className="v2-h2">LED wall rental questions</h2>
          <p className="v2-body">Pricing, sizes, what&apos;s included and how booking works.</p>
          <div className="v2-filter" role="group" aria-label="Filter questions">
            {FAQ_GROUPS.map((g) => (
              <button key={g} type="button" aria-pressed={group === g} onClick={() => pickGroup(g)} className={group === g ? "is-active" : ""}>
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className="v2-acc">
          {faqs.map((f) => (
            <div key={f.q} className={`v2-acc-item ${open === f.i ? "is-open" : ""}`}>
              <h3>
                <button type="button" aria-expanded={open === f.i} aria-controls={`faq-${f.i}`} onClick={() => setOpen(open === f.i ? null : f.i)}>
                  {f.q}
                  <span className="v2-plus" aria-hidden />
                </button>
              </h3>
              <div className="v2-acc-body" id={`faq-${f.i}`} inert={open !== f.i}>
                <div>
                  <div className="v2-acc-pad">
                    <p>{f.a}</p>
                    {f.list && (
                      <ul>
                        {f.list.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
