// MOCKUP by Rankr (25 Nov 2026). LED wall rental in Design 2, on the service template (_v3/ServiceV3.tsx).
// Wording: Jovin's own copy, word for word, from his doc "[2] First Draft Feedback (Jovin)" (16 Nov; Free-otion voice guide §10),
// wherever he wrote copy (Abel, 25 Nov). Only changes, each one their own decision:
// - P2.6 → P2.5 (Jovin, 16 Nov). "event duration" → "number of rental days" (Jovin, 16 Nov).
// - "seamless" → "smooth" (Lukas's banned words, 15 Nov).
// - His forum example (3.5 m × 2.5 m LED wall) is the MOT job: left out (Jovin, 18 Nov: not online).
// - Sizes: Lukas's "Common sizes include 6 m × 4 m and 8 m × 3 m" and "Book a free consultation with our team"; LEW/PE line (Lukas).
// - H1 stays "LED Wall Rental in Singapore" for search; his headline is the line under it.
// - Quote text: Lukas's wording (15 Nov). Sections he wrote no copy for (National Day caption, FAQs) keep our text, in his tone.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for an LED wall (from your LED wall rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of rental days: \nLED wall size: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "LED wall rental · Singapore",
  h1: "LED Wall Rental in Singapore",
  subhead: "Professional Indoor & Outdoor LED Display Solutions for Every Event",
  intro: "Bring your event to life with high-resolution LED walls designed for corporate functions, conferences, exhibitions, concerts, roadshows and large-scale productions.",
  intro2: "From screen configuration and installation to content playback and on-site technical support, PixelPro Studios delivers complete LED wall solutions tailored to your venue and event requirements.",
  // hero photo: Jovin picked the PUB NDP folder (25 Nov); DSC_0091, the outdoor LED wall and crowd at Marina Barrage
  hero: { img: "/services-hero/led-wall-rental_ndp-marina-barrage-crowd.webp", alt: "LED wall rental in Singapore: PixelPro's outdoor LED wall at the National Day 2026 celebrations at Marina Barrage", pos: "50% 45%" },
  seeWorkLabel: "See our LED work",
  why: {
    title: "Why choose PixelPro Studios?",
    items: [
      { title: "High-Quality LED Display Solutions", copy: "From intimate corporate presentations to large-scale outdoor events, our indoor and outdoor LED walls deliver vibrant visuals, sharp content and excellent visibility across a wide range of event environments." },
      { title: "Complete Event AV Solutions", copy: "Beyond LED walls, we provide professional sound systems, staging, lighting and media production services. Consolidate your event's technical requirements with one experienced AV partner for better coordination and a smooth production experience." },
      { title: "Experienced Technical Crew", copy: "Our technical team manages screen installation, configuration, content playback, live operation and dismantling. Every setup is carefully tested before the event, with dedicated technical support available throughout the programme." },
      { title: "Reliable & Professional Service", copy: "Trusted by corporate organisations, educational institutions, government agencies and event organisers, PixelPro Studios is committed to reliable equipment, responsive communication and professional event execution." },
    ],
  },
  work: {
    title: "LED screens we've built for events",
    showLines: true,
    projects: [
      {
        img: "/portfolio-jobs/led-wall-rental_ndp-marina-barrage-flag-led-wall.webp",
        alt: "5 m × 3 m outdoor LED wall by PixelPro at the National Day 2026 celebrations at Marina Barrage",
        tag: "Government · Outdoor",
        spec: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m"],
        title: "National Day 2026 celebrations at Marina Barrage",
        line: "Delivered a 5 m × 3 m outdoor LED wall with sound and lighting for a public National Day celebration. Site visits ahead of the event shaped an outdoor setup the whole crowd could see and hear.",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
        alt: "6 m × 2.5 m LED wall at a university innovation showcase, set up by PixelPro",
        tag: "University · Indoor",
        spec: ["6 m × 2.5 m LED wall", "Sound and crew"],
        title: "A university innovation showcase",
        line: "Provided an integrated LED wall and audio solution for a university innovation showcase. The 6 m × 2.5 m LED display supported pitch presentations, countdown timers and sponsor visuals, complemented by professional audio equipment and dedicated technical operators throughout the event.",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp",
        alt: "5.5 m × 3 m LED display above a 7 m × 4 m stage in a mall atrium, set up by PixelPro",
        tag: "Roadshow · Mall atrium",
        spec: ["5.5 m × 3 m LED display", "7 m × 4 m stage"],
        title: "An overnight build in a mall atrium",
        line: "Installed a 5.5 m × 3 m LED display alongside a 7 m × 4 m stage within a mall atrium. Installation was completed overnight within the venue's restricted access window, ensuring the event infrastructure was ready before the mall opened.",
      },
      {
        img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
        alt: "Four upright PixelPro LED panels on a school hall stage for a prize day",
        tag: "School · Indoor",
        spec: ["Four 1 m × 2 m LED panels"],
        title: "A school prize-day ceremony",
        line: "Set up four 1 m × 2 m upright LED panels to frame a school hall stage for a prize-day ceremony. The panels carried the programme visuals for students, parents and guests.",
      },
    ],
  },
  story: {
    title: "Your content, impossible to miss.",
    paragraphs: [
      "Make every presentation, performance and brand message stand out with professionally configured LED display solutions.",
      "Whether you require a full-stage LED backdrop, presentation screen or outdoor LED wall, we design each setup around your venue, audience size, viewing distance and content requirements.",
      "Our experienced team handles the technical details, including installation, screen calibration, video processing, signal management and live operation, delivering a smooth visual experience from start to finish.",
    ],
  },
  setup: {
    label: "Sizes",
    title: "Indoor & Outdoor LED Wall Specifications",
    intro: "Flexible LED Display Configurations for Every Venue. Our modular LED wall systems can be configured to accommodate different event sizes, stage layouts and viewing requirements. Whether you require a compact presentation screen, a large-format stage backdrop or an outdoor display, our team will recommend a suitable configuration based on your venue, audience and content requirements.",
    columns: [
      { big: "P2.5", label: "Indoor P2.5 LED Wall", lines: ["Ideal for corporate presentations, conferences, exhibitions, dinner and dances, and indoor performances. Our P2.5 LED panels provide high-resolution visuals suited to presentations, videos and detailed graphics."] },
      { big: "P3.9", label: "Outdoor P3.9 LED Wall", lines: ["Designed for outdoor events, public screenings, festivals and venues with high ambient lighting. Our outdoor LED displays offer high brightness and weather-resistant construction, making them suitable for demanding event environments."] },
    ],
    picker: { kind: "wall", caption: "Common LED wall sizes", options: [[4, 2.5], [5.5, 3], [6, 2.5], [6, 4], [8, 3]], start: 3 },
    sizesLine: "From standard rectangular displays to customised LED backdrops and multiple-screen configurations, we offer flexible solutions to complement your event's stage design and production requirements. Common sizes include 6 m × 4 m and 8 m × 3 m.",
    note: "Not sure what screen size you need? Share your venue details and event requirements, and our team will recommend a suitable solution. Book a free consultation with our team.",
  },
  included: {
    title: "Complete LED Wall Rental & Technical Support",
    subtitle: "From Installation to Live Event Operation",
    intro: "Every LED wall rental is supported by our experienced technical team to ensure professional installation, reliable performance and a smooth event experience.",
    items: [
      "Pre-event technical consultation and venue assessment, where required",
      "LED wall delivery, installation and configuration",
      "Video processing, signal routing and screen calibration",
      "Pre-event testing and content verification",
      "Dedicated on-site technical operation",
      "Post-event dismantling and equipment removal",
      "LEW and PE endorsements where required, and all necessary permits handled by us, tailored to your venue",
    ],
    more: { title: "More Than Just LED Walls", body: "Complete your event production with our additional services, including professional sound systems, stage and lighting solutions, photography, videography and live video production." },
  },
  supportBlock: {
    title: "Dedicated Technical Support Throughout Your Event",
    body: "Our technical crew remains on-site to monitor screen performance, manage content playback and respond promptly to any technical issues. We conduct comprehensive pre-event testing and maintain contingency procedures to minimise disruptions and ensure a smooth event experience.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Dinner and dances, conferences", copy: "From dinner and dances and corporate town halls to annual celebrations and conferences, we provide professional LED displays and integrated AV solutions to deliver polished, engaging event experiences.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/cny-event-av-v3" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Graduations, speech days", copy: "Supporting graduations, speech days, performances and school celebrations with reliable LED wall, audio and lighting solutions. Experienced in educational events and familiar with institutional procurement requirements.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "National celebrations, public screenings", copy: "Supporting national celebrations, community programmes and public events with professional LED displays and technical production services. GeBIZ registered and bizSAFE Level 3 certified.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Mall roadshows, retail activations", copy: "Create engaging brand experiences with vibrant LED displays for product launches, exhibitions, retail activations and promotional roadshows. Customisable screen configurations help maximise visibility and audience engagement.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "A reliable technical production partner for event agencies and professional organisers. We provide integrated LED wall, staging, sound and lighting services, backed by experienced crews and smooth project coordination.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  compare: {
    title: "LED Wall vs Projector: Which Is Right for Your Event?",
    paragraphs: [
      "Both LED walls and projectors offer distinct advantages depending on your venue, audience and budget.",
      "LED walls deliver bright, vibrant visuals and are particularly effective for large stages, high-ambient-light environments and outdoor events. Projectors remain a practical and cost-effective alternative for smaller events and venues with controlled lighting.",
      "As a provider of both solutions, PixelPro Studios can recommend the most suitable display system for your event.",
    ],
    link: { label: "Projector and screen rental", href: "/mockup/projector-rental-v3" },
  },
  steps: {
    title: "Our Process: From Enquiry to Event Execution",
    items: [
      ["Enquiry & Requirements", "Share your event date, venue, audience size and technical requirements."],
      ["Consultation & Planning", "We assess the venue, recommend a suitable LED configuration and identify any additional technical requirements."],
      ["Quotation & Confirmation", "Receive a customised quotation detailing the equipment and services. Confirm your booking in accordance with the agreed payment terms."],
      ["Installation & Testing", "Our crew delivers, installs and tests the LED wall ahead of your event."],
      ["Live Operation & Dismantling", "Our technical team supports the event and manages the post-event dismantling."],
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Tan Hee Pheng"],
  pricing: {
    title: "Pricing Factor | What Affects the Quotation",
    intro: "Competitive Rental Rates, Tailored to Your Event. At PixelPro Studios, we believe professional LED wall solutions should be accessible without compromising on equipment quality or service reliability.",
    more: [
      "Our rental packages are customised according to your screen size, number of rental days, venue requirements and technical support needs.",
      "Whether you're planning a small corporate function or a large-scale production, we work with you to recommend a practical and cost-effective solution.",
    ],
    rows: [
      ["Screen size", "A smaller wall", "A bigger wall: more panels, crew and setup time"],
      ["Indoor or outdoor", "Indoors", "Outdoors: a different screen and more planning"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Standing or hung", "Standing on the floor", "Hung from the ceiling: rigging and venue approval"],
      ["Technical support", "Setup and tear-down only", "Technicians on site for a long programme"],
      ["Add-ons", "The screen on its own", "Adding a stage, sound or photo and video (one quotation for all of it)"],
    ],
    footer: "Share your event details with our team for a customised quotation with a clear breakdown of the equipment, installation and technical services required.",
  },
  quote: {
    title: "Request an LED Wall Rental Quotation",
    intro: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.",
    checklist: ["Event date", "Venue", "Event name and type", "Number of rental days", "LED wall size (if you know it)", "Indoor or outdoor", "What you'll show: slides, video, graphics", "Need an operator on site?"],
  },
  faqTitle: "LED wall rental questions",
  faqs: [
    { q: "How much does LED screen rental cost?", a: "We quote per event, because the price depends on the screen size, indoor or outdoor, the number of rental days, venue access and setup timing, and the technical support you need. Share your event details and we'll send a quotation." },
    { q: "I'm not technical. What do I need to do?", a: "Send us your slides and videos beforehand and tell us the programme. Our team plans the setup, installs and tests the screen, and our technicians run it during the event." },
    { q: "What if something goes wrong in the middle of the event?", a: "Our LED wall technicians are on standby throughout the event and respond quickly if anything needs attention. We test the setup and your content before guests arrive, and we plan backups." },
    { q: "Do you provide LED wall rental across Singapore?", a: "Yes. We supply, install, calibrate, operate and dismantle indoor and outdoor LED wall systems for events across Singapore." },
    { q: "How big can the LED video wall be?", a: "For LED video wall hire, whatever size you have in mind, we can build it. Common sizes include 6 m × 4 m and 8 m × 3 m. We confirm the final size after checking your venue, power and structure." },
    { q: "What pixel pitches are available?", a: "Our commonly specified systems include P2.5 panels for indoor events and P3.9 panels for larger stages and outdoor use. We recommend the right option based on your content, venue and audience." },
    { q: "Can the LED wall be used outdoors or in bright venues?", a: "Yes. Our outdoor LED walls keep content clear in daylight and in bright mall or atrium spaces. Final suitability depends on the site and the weather plan." },
    { q: "Can you manage presentation content?", a: "Yes. We run presentations, sponsor loops, videos, countdowns and motion graphics through professional video processors, with a technician on site." },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events, and earlier for LED walls in peak season. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "What information do you need for an LED wall quote?", a: "Share your event date, venue, preferred screen size, indoor or outdoor setting, the number of rental days, what you'll show on the screen, and whether the wall will stand on the floor or be rigged. We can help refine the setup from there." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
};
