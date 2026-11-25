// MOCKUP by Rankr (25 Nov 2026). LED wall rental in Design 2, on the service template (_v3/ServiceV3.tsx), template sections only.
// Wording: Jovin's own lines from his doc "[2] First Draft Feedback (Jovin)" (16 Nov; Free-otion voice guide §10) where they fit a
// template section, kept short (Abel, 25 Nov). Only changes to his lines are their own decisions: P2.5, rental days, no "seamless".
// His LED-vs-projector text and process steps sit in the FAQ. His forum example (MOT job) is left out.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for an LED wall (from your LED wall rental page).\nDate: \nVenue: \nEvent name & type: \nLED wall size: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "LED wall rental · Singapore",
  h1: "LED Wall Rental in Singapore",
  intro: "From screen configuration and installation to content playback and on-site technical support, PixelPro Studios delivers complete LED wall solutions tailored to your venue and event requirements.",
  hero: { img: "/services-hero/services_led-walls.webp", alt: "LED wall rental in Singapore: a PixelPro LED wall at a live event" },
  seeWorkLabel: "See our LED work",
  work: {
    title: "LED screens we've built for events",
    projects: [
      {
        img: "/portfolio-jobs/led-wall-rental_ndp-marina-barrage-flag-led-wall.webp",
        alt: "5 m × 3 m outdoor LED wall by PixelPro at the National Day 2026 celebrations at Marina Barrage",
        tag: "Government · Outdoor",
        spec: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m"],
        title: "National Day 2026 celebrations at Marina Barrage",
        line: "",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
        alt: "6 m × 2.5 m LED wall at a university innovation showcase, set up by PixelPro",
        tag: "University · Indoor",
        spec: ["6 m × 2.5 m LED wall", "Audio and technical operators"],
        title: "A university innovation showcase",
        line: "",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp",
        alt: "5.5 m × 3 m LED display above a 7 m × 4 m stage in a mall atrium, set up by PixelPro",
        tag: "Roadshow · Mall atrium",
        spec: ["5.5 m × 3 m LED display", "7 m × 4 m stage", "Installed overnight"],
        title: "An overnight build in a mall atrium",
        line: "",
      },
      {
        img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
        alt: "Four upright PixelPro LED panels on a school hall stage for a prize day",
        tag: "School · Indoor",
        spec: ["Four 1 m × 2 m LED panels"],
        title: "A school prize-day ceremony",
        line: "",
      },
    ],
  },
  setup: {
    label: "Sizes",
    title: "Which size LED wall do I need?",
    intro: "Our modular LED wall systems can be configured to accommodate different event sizes, stage layouts and viewing requirements.",
    columns: [
      { big: "P2.5", label: "Indoor LED wall", lines: ["High-resolution visuals suited to presentations, videos and detailed graphics."] },
      { big: "P3.9", label: "Outdoor LED wall", lines: ["High brightness and weather-resistant construction for outdoor events and bright venues."] },
    ],
    picker: { kind: "wall", caption: "Common LED wall sizes", options: [[4, 2.5], [5.5, 3], [6, 2.5], [6, 4], [8, 3]], start: 3 },
    sizesLine: "Common sizes include 6 m × 4 m and 8 m × 3 m. Custom sizes and multiple-screen setups too.",
    note: "Not sure what screen size you need? Share your venue details and event requirements, and our team will recommend a suitable solution.",
  },
  included: {
    title: "Complete LED Wall Rental & Technical Support",
    intro: "Every LED wall rental is supported by our experienced technical team to ensure professional installation, reliable performance and a smooth event experience.",
    items: [
      "Pre-event technical consultation and venue assessment, where required",
      "LED wall delivery, installation and configuration",
      "Video processing, signal routing and screen calibration",
      "Pre-event testing and content verification",
      "Dedicated on-site technical operation",
      "Post-event dismantling and equipment removal",
      "LEW and PE endorsements where required, and all necessary permits handled by us",
    ],
    support: "Our technical crew remains on-site to monitor screen performance, manage content playback and respond promptly to any technical issues.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Dinner and dances, conferences", copy: "From dinner and dances to annual conferences, we provide professional LED displays and integrated AV solutions to deliver polished, engaging event experiences.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/cny-event-av-v3" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Graduations, speech days", copy: "Supporting graduations and speech days with reliable LED wall, audio and lighting solutions. Experienced in educational events and familiar with institutional procurement requirements.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "National celebrations, public screenings", copy: "Supporting national celebrations and public events with professional LED displays and technical production services, including the National Day 2026 celebrations at Marina Barrage. GeBIZ registered and bizSAFE Level 3 certified.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Mall roadshows, retail activations", copy: "Create engaging brand experiences with vibrant LED displays. Customisable screen configurations help maximise visibility and audience engagement.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "A reliable technical production partner for event agencies and organisers, with LED wall, staging, sound and lighting backed by experienced crews.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Tan Hee Pheng"],
  pricing: {
    intro: "Our rental packages are customised according to your screen size, number of rental days, venue requirements and technical support needs.",
    rows: [
      ["Screen size", "A smaller wall", "A bigger wall: more panels, crew and setup time"],
      ["Indoor or outdoor", "Indoors", "Outdoors: a different screen and more planning"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Standing or hung", "Standing on the floor", "Hung from the ceiling: rigging and venue approval"],
      ["Technical support", "Setup and tear-down only", "Technicians on site for a long programme"],
    ],
    footer: "Share your event details for a customised quotation with a clear breakdown of the equipment, installation and technical services required.",
  },
  quote: { title: "Request an LED Wall Rental Quotation", checklist: ["Event date", "Venue", "Event name and type", "Number of rental days", "LED wall size (if you know it)", "Indoor or outdoor", "Need an operator on site?"] },
  faqTitle: "LED wall rental questions",
  faqs: [
    { q: "How much does LED screen rental cost?", a: "We quote per event, because the price depends on the screen size, indoor or outdoor, the number of rental days, venue access and setup timing, and the technical support you need. Share your event details and we'll send a quotation." },
    { q: "LED wall or projector: which is right for my event?", a: "LED walls deliver bright, vibrant visuals and are particularly effective for large stages, high-ambient-light environments and outdoor events. Projectors remain a practical and cost-effective alternative for smaller events and venues with controlled lighting. As a provider of both, we can recommend the most suitable display for your event.", link: { label: "Projector and screen rental", href: "/mockup/projector-rental" } },
    { q: "How does booking an LED wall work?", a: "From enquiry to event execution, in five steps:", list: ["Enquiry & requirements: share your event date, venue, audience size and technical requirements", "Consultation & planning: we assess the venue, recommend a suitable LED configuration and identify any additional technical requirements", "Quotation & confirmation: receive a customised quotation and confirm your booking on the agreed payment terms", "Installation & testing: our crew delivers, installs and tests the LED wall ahead of your event", "Live operation & dismantling: our technical team supports the event and manages the post-event dismantling"] },
    { q: "What if something goes wrong in the middle of the event?", a: "Our LED wall technicians are on standby throughout the event and respond promptly to any technical issues. We test the setup and your content before guests arrive, and maintain contingency procedures." },
    { q: "How big can the LED video wall be?", a: "For LED video wall hire, whatever size you have in mind, we can build it. Common sizes include 6 m × 4 m and 8 m × 3 m. We confirm the final size after checking your venue, power and structure." },
    { q: "What pixel pitches are available?", a: "P2.5 panels for indoor events and P3.9 panels for outdoor events and venues with high ambient lighting. We recommend the right option based on your content, venue and audience." },
    { q: "Can you manage presentation content?", a: "Yes. We run presentations, sponsor loops, videos, countdowns and motion graphics through professional video processors, with a technician on site." },
    { q: "Can you add sound, staging or video?", a: "Yes. Complete your event production with our professional sound systems, stage and lighting, photography, videography and live video production.", link: { label: "AV rental", href: "/mockup/av-systems-v3" } },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events, and earlier for LED walls in peak season. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
};
