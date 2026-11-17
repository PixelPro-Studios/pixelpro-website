// MOCKUP by Rankr. Page content for Stage rental, used by Design 1 (./page.tsx) and Design 2 (../stage-rental-v3/page.tsx).
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

const J = "/portfolio-jobs/";
export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for a stage (from your stage rental page).\nDate: \nVenue: \nNumber of guests: \nWhat happens on stage: \nStage size (if known): "),
  eyebrow: "Stage and platform rental · Singapore",
  h1: "Stage Platform Rental in Singapore",
  intro: "Stage platform rental in Singapore for dinner and dances, prize giving, school concerts and community events. We plan the size and height with you, build and skirt the stage before your guests arrive, and pack it away after.",
  hero: { img: "/services-hero/services_stage-rental.webp", alt: "Stage platform rental in Singapore: a PixelPro stage with skirting under an LED wall in a mall atrium", pos: "50% 50%" },
  seeWorkLabel: "See our stage work",
  work: {
    title: "Stages we've built",
    projects: [
      { img: J + "event-av-planning_control-desk-beside-the-stage.webp", alt: "A 7 m × 4 m PixelPro stage with steps and red skirting in a mall atrium", tag: "Featured project", spec: ["7 m × 4 m stage", "Steps, skirting and rostrum"], title: "A stage built overnight in a mall atrium", line: "" },
      { img: J + "stage-rental_stage-steps-and-skirting.webp", alt: "PixelPro stage stairs and full skirting on a modular stage", spec: ["Stage stairs", "Skirting all around"], title: "Steps and full skirting", line: "" },
      { img: J + "roadshow-led-screen-rental_mall-atrium-crowd.webp", alt: "Performers on a PixelPro stage in a mall atrium with a seated crowd", spec: ["Performances and speeches"], title: "The same stage in use", line: "" },
    ],
  },
  setup: {
    label: "Sizes",
    title: "Which stage size do I need?",
    intro: "It depends on what happens on stage: a speaker at a lectern needs far less than a band or a dance item. Our stage is built from 2 m × 1 m platforms, so it's sized to your programme.",
    columns: [
      { big: "60–100 cm", label: "Adjustable height", lines: ["A higher stage is easier to see from the back of the room."] },
      { big: "600 kg/m²", label: "Load", lines: ["Enough for bands, dance items and equipment."] },
    ],
    picker: { kind: "plan", caption: "Common stage sizes", options: [[4, 2], [6, 3], [7, 4], [8, 4]], start: 2 },
    sizesLine: "Built from 2 m × 1 m platforms: up to 32 m² (8 m × 4 m) from our own stock. Larger stages on request.",
    note: "Send us your programme and venue and we'll recommend a size and height.",
  },
  included: {
    title: "Complete Stage Rental and Setup", // NEW
    intro: "Every stage rental comes with our crew, from planning the size to packing it away.",
    items: [
      "We plan the stage size and height with you",
      "Delivery and build before your guests arrive",
      "Black skirting all around, other colours on request",
      "Stage stairs for speakers, performers and winners",
      "Guardrails arranged where your stage needs them",
      "Planned together with the screen and sound if you book them",
      "Dismantling and removal after the event",
    ],
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "HR and admin teams", events: "Dinner and dances, CNY dinners, award nights", copy: "A proper stage for the speeches, performances and lucky draw, built with the screen and sound by one team.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/events/cny-event-av" }] },
      { tab: "Schools", who: "Schools", events: "Prize giving, graduations, concerts", copy: "A raised stage with steps for students walking up. We are GeBIZ registered and already work with MOE schools.", links: [{ label: "Prize giving ceremony AV", href: "/events/prize-giving-ceremony-av" }] },
      { tab: "Government", who: "Government and community", events: "Community stages, public events", copy: "Stages for community programmes and public events. GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off.", links: [{ label: "Community event sound", href: "/events/community-event-sound-system" }] },
      { tab: "Brands", who: "Brand and marketing teams", events: "Launches, roadshows, activations", copy: "A clean stage for product reveals and emcee segments, with skirting in your brand colour on request.", links: [{ label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
      { tab: "Agencies", who: "Event agencies and planners", events: "Technical production partner", copy: "Need a stage for a client's event? We build it with our own crew, and can add the screen and sound in the same quotation.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Reshan Sivasamy"],
  pricing: {
    intro: "Your quotation depends on the factors below, and we'll recommend a practical, cost-effective stage for your programme.",
    rows: [
      ["Stage size", "A small speaking platform", "A full performance stage, up to 32 m²"],
      ["Height", "A low platform", "A higher stage, with more steps"],
      ["Skirting", "Standard black skirting", "Custom skirting colours"],
      ["Safety extras", "A low stage with steps", "Guardrails for higher stages"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Add-ons", "The stage on its own", "Adding sound, an LED wall or lighting (one quotation for all of it)"],
    ],
    footer: "Customised quotations with clear, competitive pricing.",
  },
  quote: { title: "Request a Stage Rental Quotation", checklist: ["Event date", "Venue", "Number of guests", "What happens on stage", "Stage size (if you know it)", "Preferred height", "Skirting colour", "Need a screen or sound too?"] },
  faqTitle: "Stage rental questions",
  faqs: [
    { q: "How much does stage rental cost?", a: "We quote per event, because the price depends on the stage size and height, skirting, any safety extras like guardrails, and venue access and timing. Send us your brief and we'll reply with a setup and a quotation." },
    { q: "How big can the stage be?", a: "Up to 32 m² from our own stock, built from 2 m × 1 m sections, so it works as a portable stage for venues that don't have one. Ask us about larger stages." },
    { q: "How high is the stage?", a: "The height is adjustable from 60 cm to 100 cm, depending on your room and what happens on stage." },
    { q: "Do you provide steps and guardrails?", a: "Steps come with the stage. Guardrails aren't included as standard, but we can arrange them when your stage needs them." },
    { q: "Can the skirting match our theme?", a: "Black skirting is standard. We can arrange other colours on request." },
    { q: "I'm not technical. What do I need to do?", a: "Tell us your programme and the venue. We plan the size and height, build it before your guests arrive and pack it away after." },
    { q: "Can you supply the stage, screen and sound together?", a: "Yes. We plan the stage, LED wall and sound together, so you get one quotation and one contact." },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
    { q: "Do you cover all of Singapore?", a: "Yes, island-wide. We deliver, build and dismantle the stage after your event." },
  ],
};
