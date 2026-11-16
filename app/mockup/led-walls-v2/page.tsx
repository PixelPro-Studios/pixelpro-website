// MOCKUP by Rankr (17 Nov 2026). LED wall rental page on the shared v2 service template (_v2/ServiceV2.tsx).
// Copy: approved LED copy from ../led-walls/page.tsx (Jovin's doc + Lukas's comments). Local review only.
import type { Metadata } from "next";
import ServiceV2, { type ServiceV2Content } from "../_v2/ServiceV2";
import { LED_PROJECTS, waLink } from "../_v2/data";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.5 and outdoor P3.9 LED walls, planned around your venue, installed, run and torn down by our technicians.",
  robots: { index: false, follow: false },
};

const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for an LED wall (from your LED wall rental page).\nDate: \nVenue: \nEvent name & type: \nLED wall size: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "LED wall rental · Singapore",
  h1: "LED Wall Rental in Singapore",
  intro: "LED wall rental in Singapore, from presentation screens to full-stage and outdoor LED displays. We plan each setup around your venue and programme, install and test it before your guests arrive, and our technicians stay on standby throughout your event.",
  hero: { img: "/services-hero/services_led-walls.webp", alt: "LED wall rental in Singapore: a PixelPro LED wall at a live event" },
  seeWorkLabel: "See our LED work",
  work: { title: "LED walls we've built for events", projects: LED_PROJECTS },
  setup: {
    label: "Sizes",
    title: "Which size LED wall do I need?",
    intro: "Our modular LED walls can be configured to suit your event size, stage layout and venue. Whatever size you have in mind, we can build it.",
    columns: [
      { big: "P2.5", label: "Indoor LED wall", lines: ["For corporate presentations, conferences and indoor performances.", "High-resolution panels for slides, video and detailed graphics."] },
      { big: "P3.9", label: "Outdoor LED wall", lines: ["For outdoor events, public screenings and bright venues.", "High-brightness, weather-resistant panels."] },
    ],
    picker: { kind: "wall", caption: "Common LED wall sizes", options: [[3.5, 2.5], [5.5, 3], [6, 2.5], [6, 4], [8, 3]], start: 3 },
    sizesLine: "Common sizes: 3.5 m × 2.5 m, 5.5 m × 3 m, 6 m × 2.5 m, 6 m × 4 m and 8 m × 3 m. Custom sizes and multiple-screen setups too.",
    note: "Not sure what size you need? Share your venue details and we'll recommend one. Book a free consultation with our team.",
  },
  included: {
    title: "Complete LED Wall Rental & Technical Support",
    intro: "Every LED wall rental comes with our technical team. We work with you from planning to tear-down, so the screen performs reliably on the day.",
    items: [
      "Pre-event consultation and a venue check, where needed",
      "Delivery, installation and configuration of the LED wall",
      "Video processing, signal routing and screen calibration",
      "Testing and a content check before your guests arrive",
      "LED wall technicians on standby throughout the event",
      "Tear-down and removal after the event",
      "LEW and PE endorsements where required, and all necessary permits handled by us, tailored to your venue",
    ],
    support: "Dedicated technical support throughout your event: our LED wall technicians monitor the screen, run content playback and respond quickly if anything needs attention.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Dinner and dances, conferences", copy: "From the company dinner and dance to an annual conference, we set up LED displays and the rest of your AV, and our team runs it on the day so your event looks polished.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/events/cny-event-av" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Graduations, speech days", copy: "We regularly work with MOE schools and understand their procurement processes. As a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "LED wall for graduation", href: "/events/led-wall-rental-for-graduation" }] },
      { tab: "Government", who: "Government & Community Events", events: "National celebrations, public screenings", copy: "We support national celebrations and community events with LED displays and technical production, including the National Day 2026 celebrations at Marina Barrage. We are GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off.", links: [{ label: "Outdoor LED wall rental", href: "/events/outdoor-led-wall-rental" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Mall roadshows, retail activations", copy: "High-brightness LED displays that stay visible in busy malls and bright spaces, with the screen size configured to your booth or stage.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }, { label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "Running the event for a client? We work with you as your technical team, supplying the LED wall, staging and sound with our own crew.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Tan Hee Pheng"],
  pricing: {
    intro: "We keep LED wall rental accessible without cutting corners on equipment or service. Your quotation depends on the factors below, and we'll recommend a practical, cost-effective setup for your event.",
    rows: [
      ["Screen size", "A smaller wall", "A bigger wall: more panels, crew and setup time"],
      ["Indoor or outdoor", "Indoors", "Outdoors: a different screen and more planning"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Standing or hung", "Standing on the floor", "Hung from the ceiling: rigging and venue approval"],
      ["Technical support", "Setup and tear-down only", "Technicians on site for a long programme"],
      ["Add-ons", "The screen on its own", "Adding a stage, sound or photo and video (one quotation for all of it)"],
    ],
    footer: "Customised quotations with clear, competitive pricing. Share your event details and we'll send a quotation with a clear breakdown of the equipment, installation and technical services.",
  },
  quote: { title: "Request an LED Wall Rental Quotation", checklist: ["Event date", "Venue", "Event name and type", "Number of rental days", "LED wall size (if you know it)", "Indoor or outdoor", "What you'll show: slides, video, graphics", "Need an operator on site?"] },
  faqTitle: "LED wall rental questions",
  faqs: [
    { q: "How much does LED screen rental cost?", a: "We quote per event, because the price depends on the screen size, indoor or outdoor, the number of rental days, venue access and setup timing, and the technical support you need. Share your event details and we'll send a quotation." },
    { q: "Should I choose an LED wall or a projector?", a: "An LED wall is brighter, sharper and casts no shadows, so it suits bright rooms, outdoor events and big stages. A projector can be enough for a dim room on a tighter budget. We rent both, so we'll recommend whichever fits your venue.", link: { label: "Read: LED wall vs projector", href: "/blog/led-wall-vs-projector" } },
    { q: "How does booking an LED wall work?", a: "From enquiry to event execution, in five steps:", list: ["Enquiry: share your event date, venue, audience size and what you need", "Consultation and planning: we check the venue, recommend a suitable LED setup and flag anything else the event needs", "Quotation and confirmation: you receive a customised quotation and confirm on the agreed payment terms", "Installation and testing: our crew delivers, installs and tests the LED wall ahead of your event", "Live operation and tear-down: our technicians support the event, then handle the tear-down"] },
    { q: "I'm not technical. What do I need to do?", a: "Send us your slides and videos beforehand and tell us the programme. Our team plans the setup, installs and tests the screen, and our technicians run it during the event." },
    { q: "What if something goes wrong in the middle of the event?", a: "Our LED wall technicians are on standby throughout the event and respond quickly if anything needs attention. We test the setup and your content before guests arrive, and we plan backups." },
    { q: "How big can the LED video wall be?", a: "For LED video wall hire, whatever size you have in mind, we can build it. Common sizes include 6 m × 4 m and 8 m × 3 m. We confirm the final size after checking your venue, power and structure." },
    { q: "What pixel pitches are available?", a: "Our commonly specified systems include P2.5 panels for indoor events and P3.9 panels for larger stages and outdoor use. We recommend the right option based on your content, venue and audience." },
    { q: "Can the LED wall be used outdoors or in bright venues?", a: "Yes. Our outdoor LED walls keep content clear in daylight and in bright mall or atrium spaces. Final suitability depends on the site and the weather plan." },
    { q: "Can you manage presentation content?", a: "Yes. We run presentations, sponsor loops, videos, countdowns and motion graphics through professional video processors, with a technician on site." },
    { q: "Can you livestream the event as well?", a: "Yes, for compact setups: up to four cameras streamed online. Cameras that move around the room need wireless links, so they cost more." },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events, and earlier for LED walls in peak season. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Do you provide LED wall rental across Singapore?", a: "Yes. We supply, install, calibrate, operate and dismantle indoor and outdoor LED wall systems for events across Singapore." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
};

export default function Page() {
  return <ServiceV2 c={c} />;
}
