// MOCKUP by Rankr (25 Nov 2026). Stage rental in Design 2, on the service template (_v3/ServiceV3.tsx), template sections only.
// Jovin wrote no stage copy, so this follows the voice guide (deepagent clients/pixelpro/WRITING-RULES.md) and the product
// bible (F3, §8c, §8d). Base: the 18 Nov stage page (../stage-rental-v2/content.ts) and the home Staging tab (live since 24 Nov).
// Changes from 18 Nov: no 3-event lists; "tear-down", not "pack away"; no stock or load figures (600 kg/m² had no source);
// GeBIZ line; links only to pages that exist; CWA Caregiving Week stage first (Jovin's staging photo, 24 Nov), no client name.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

const J = "/portfolio-jobs/";
export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for a stage (from your stage rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of guests: \nWhat happens on stage: \nStage size (if known): \nIndoor or outdoor: "),
  eyebrow: "Stage rental · Singapore",
  h1: "Stage Platform Rental in Singapore",
  intro: "Stage platform rental in Singapore that gives your speakers and performers a stable, professional platform. We plan the stage size and height with you, set it up with skirting and steps, and handle the tear-down after your event.",
  hero: { img: "/services-hero/services_stage-rental.webp", alt: "Stage platform rental in Singapore: a PixelPro stage with skirting under an LED wall in a mall atrium", pos: "50% 50%" },
  seeWorkLabel: "See our stage work",
  work: {
    title: "Stages we've built",
    projects: [
      { img: J + "stage-rental_caregiving-week-mall-stage.webp", alt: "PixelPro modular stage with skirting, speakers and a backdrop in a mall for a community event", tag: "Community · Mall", spec: ["Modular stage", "Skirting and sound"], title: "A community event stage in a mall", line: "" },
      { img: J + "event-av-planning_control-desk-beside-the-stage.webp", alt: "A 7 m × 4 m PixelPro stage with steps and red skirting in a mall atrium", tag: "Roadshow · Mall atrium", spec: ["7 m × 4 m stage", "Built overnight"], title: "A stage built overnight in a mall atrium", line: "" },
      { img: J + "stage-rental_stage-steps-and-skirting.webp", alt: "PixelPro stage steps and full skirting on a modular stage", spec: ["Stage steps", "Skirting all around"], title: "Steps and full skirting", line: "" },
      { img: J + "roadshow-led-screen-rental_mall-atrium-crowd.webp", alt: "Performers on a PixelPro stage in a mall atrium with a seated crowd", spec: ["Performances and speeches"], title: "The same atrium stage in use", line: "" },
    ],
  },
  setup: {
    label: "Sizes",
    title: "Which stage size do I need?",
    intro: "It depends on what happens on stage: a speaker at a rostrum needs far less space than a band or a dance item. Our stage is built from 2 m × 1 m platforms, so we size it to your programme and venue.",
    columns: [
      { big: "60–100 cm", label: "Adjustable height", lines: ["A higher stage is easier to see from the back of the room."] },
      { big: "2 m × 1 m", label: "Modular platforms", lines: ["Combined to fit your programme, your room and the space for your guests."] },
    ],
    picker: { kind: "plan", caption: "Common stage sizes", options: [[4, 2], [6, 3], [7, 4], [8, 4]], start: 2 },
    sizesLine: "Whatever size your programme needs, we can build it.",
    note: "Send us your programme and venue, and our team will recommend a size and height. Book a free consultation with our team.",
  },
  included: {
    title: "Complete Stage Rental & Setup",
    intro: "Every stage rental comes with our crew. We work with you on the size and height, and our dedicated on-site personnel oversee the setup.",
    items: [
      "We plan the stage size and height with you",
      "Delivery and build before your guests arrive",
      "Black skirting all around, other colours on request",
      "Stage steps for speakers, performers and winners",
      "Guardrails arranged where your stage needs them",
      "Planned together with the screen and sound if you book them",
      "Tear-down and removal after your event",
    ],
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Dinner and dances, award nights", copy: "A proper stage for the speeches, performances and lucky draw at your dinner and dance, planned together with the screen and sound.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/cny-event-av-v3" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Prize giving, graduations", copy: "A raised stage with steps for students walking up to receive their prizes. We regularly work with MOE schools, and as a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "Community programmes, public events", copy: "Stages for community programmes and public events. GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, mall activations", copy: "A clean stage for product reveals and emcee segments at your roadshow, with skirting in your brand colour on request.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "Need a stage for a client's event? We work with you as your technical team, and can add the LED wall and sound in the same quotation.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Reshan Sivasamy"],
  pricing: {
    intro: "Your quotation depends on the factors below, and we'll recommend a practical, cost-effective stage for your programme.",
    rows: [
      ["Stage size", "A small speaking platform", "A larger stage: more platforms, crew and setup time"],
      ["Height", "A low platform", "A higher stage, with more steps"],
      ["Skirting", "Standard black skirting", "Custom skirting colours"],
      ["Safety extras", "A low stage with steps", "Guardrails for higher stages"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ],
    footer: "Customised quotations with clear, competitive pricing.",
  },
  quote: { title: "Request a Stage Rental Quotation", checklist: ["Event date", "Venue", "Number of guests", "What happens on stage", "Stage size (if you know it)", "Preferred height", "Skirting colour", "Need a screen or sound too?"] },
  faqTitle: "Stage rental questions",
  faqs: [
    { q: "How much does stage rental cost?", a: "We quote per event, because the price depends on the stage size and height, skirting, safety extras like guardrails, the number of rental days, and venue access and timing. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "How big can the stage be?", a: "Whatever size your programme needs. It's built from 2 m × 1 m platforms, so it works as a portable stage for venues that don't have one, and we plan the size around your venue." },
    { q: "How high is the stage?", a: "The height is adjustable from 60 cm to 100 cm, depending on your room and what happens on stage." },
    { q: "Do you provide steps and guardrails?", a: "Steps come with the stage. Guardrails aren't included as standard, but we arrange them when your stage needs them." },
    { q: "Can the skirting match our theme?", a: "Black skirting is standard. We can arrange other colours on request." },
    { q: "I'm not technical. What do I need to do?", a: "Tell us your programme and the venue. We plan the size and height with you, build it before your guests arrive and handle the tear-down after." },
    { q: "How does booking a stage work?", a: "From enquiry to event execution, in five steps:", list: ["Enquiry: share your event date, venue, guest count and programme", "Consultation and planning: we check the venue and recommend a stage size and height", "Quotation and confirmation: you receive a customised quotation and confirm on the agreed payment terms", "Installation: our crew delivers and builds the stage ahead of your event", "Tear-down: we dismantle and remove the stage after your event"] },
    { q: "Can you supply the stage, screen and sound together?", a: "Yes. Our AV team takes care of everything from LED walls and staging to sound, so there's just one team to liaise with, one quotation and one payment to settle.", link: { label: "AV rental", href: "/mockup/av-systems-v3" } },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
    { q: "Do you cover all of Singapore?", a: "Yes, island-wide. We deliver and build the stage, and handle the tear-down after your event." },
  ],
};
