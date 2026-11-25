// MOCKUP by Rankr (25 Nov 2026, evening). Stage rental in Design 2, on the service template (_v3/ServiceV3.tsx).
// Built on Abel's 25 Nov draft (facts: 2 m × 1 m platforms, 60–100 cm, skirting, steps, guardrails, GeBIZ line; no load figures),
// laid out like the LED and AV pages Jovin approved on 25 Nov, so his "same feedback as LED Wall Rental" applies up front:
// subhead + two intro lines, Why choose PixelPro Studios, a longer write-up per project, "Complete ... Rental & Technical Support",
// a support block, Our Process (no 50% booking), "Pricing Factor | What Affects the Quotation" with his pricing write-up,
// "Request a ... Quotation", "dismantling" not "tear-down", number of rental days in the quote message.
// Jovin's own words: the intro line is his AV-page "Stage Rental" card (16 Nov doc); the project lines come from his
// "CWA Caregiving Week Website Copy" (Drive); the shared lines are his LED-page copy with LED swapped for staging. No client names.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

const J = "/portfolio-jobs/";
export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for a stage (from your stage rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of rental days: \nNumber of guests: \nWhat happens on stage: \nStage size (if known): \nIndoor or outdoor: "),
  eyebrow: "Stage rental · Singapore",
  h1: "Stage Platform Rental in Singapore",
  subhead: "Professional Modular Stage Solutions for Every Event",
  intro: "Our modular stage platforms offer flexible configurations for corporate functions, performances, ceremonies and community events.",
  intro2: "From stage planning and installation to skirting, access steps and post-event dismantling, PixelPro Studios delivers complete stage solutions tailored to your venue and event requirements.",
  hero: { img: "/services-hero/services_stage-rental.webp", alt: "Stage platform rental in Singapore: a PixelPro stage with skirting under an LED wall in a mall atrium", pos: "50% 50%" },
  seeWorkLabel: "See our stage work",
  why: {
    title: "Why choose PixelPro Studios?",
    items: [
      { title: "Safe, Professional Stage Platforms", copy: "From compact speaking platforms to large performance stages, our modular stages are set up level and stable, with skirting and access steps for a clean, finished look at every event." },
      { title: "Complete Event AV Solutions", copy: "Beyond staging, we provide LED walls, professional sound systems, lighting and media production services. Consolidate your event's technical requirements with one experienced AV partner for better coordination and a smooth production experience." },
      { title: "Experienced Technical Crew", copy: "Our crew plans the stage size and height with you, then manages delivery, installation and dismantling. Every stage is checked before your guests arrive, with on-site support available throughout the programme." },
      { title: "Reliable & Professional Service", copy: "Trusted by corporate organisations, educational institutions, government agencies and event organisers, PixelPro Studios is committed to reliable equipment, responsive communication and professional event execution." },
    ],
  },
  work: {
    title: "Stages we've built for events",
    showLines: true,
    projects: [
      { img: J + "stage-rental_caregiving-week-mall-stage.webp", alt: "PixelPro modular stage with skirting, speakers and a backdrop in a mall for a community event", tag: "Community · Mall", spec: ["7 m × 4 m portable stage", "Rostrum, sound and LED wall"], title: "A community festival stage in a mall", line: "Provided a 7 m × 4 m portable stage with a rostrum, a 5.5 m × 3 m LED wall and a full sound system for a community festival at a shopping mall. The stage carried the day's performances, speeches and appreciation segments, with our technical crew on site throughout the programme." },
      { img: J + "event-av-planning_control-desk-beside-the-stage.webp", alt: "A 7 m × 4 m PixelPro stage with steps and red skirting in a mall atrium", tag: "Roadshow · Mall atrium", spec: ["7 m × 4 m stage", "Built overnight"], title: "A stage built overnight in a mall atrium", line: "Installed a 7 m × 4 m stage alongside a 5.5 m × 3 m LED display within a mall atrium. Installation was completed overnight within the venue's restricted access window, with every element assembled, tested and ready before the mall opened." },
      { img: J + "stage-rental_stage-steps-and-skirting.webp", alt: "PixelPro stage steps and full skirting on a modular stage", spec: ["Access steps", "Skirting all around"], title: "Steps and full skirting", line: "Every stage comes with access steps and skirting all around, so speakers, performers and award winners can walk up safely and the stage looks finished from every side." },
      { img: J + "roadshow-led-screen-rental_mall-atrium-crowd.webp", alt: "Performers on a PixelPro stage in a mall atrium with a seated crowd", spec: ["Performances and speeches"], title: "The same atrium stage in use", line: "The finished stage in use: performances and speeches in front of a seated crowd, with the LED wall and sound system supplied and run by the same team." },
    ],
  },
  story: {
    title: "A stage that sets the scene.",
    paragraphs: [
      "Give every speech, performance and award presentation the platform it deserves with professionally planned modular staging.",
      "Whether you require a low speaking platform, a performance stage or a stage paired with an LED wall backdrop, we plan each setup around your venue, programme, audience size and sightlines.",
      "Our experienced team handles the details, including stage sizing and height, installation, skirting, access steps and guardrails where required, delivering a safe, professional platform from start to finish.",
    ],
  },
  setup: {
    label: "Sizes",
    title: "Stage Sizes & Configurations",
    intro: "Flexible Stage Configurations for Every Venue. Our modular stage system is built from 2 m × 1 m platforms, so it can be configured to suit different programmes, room sizes and audience layouts. Whether you need a speaking platform for a rostrum or a larger stage for performances, our team will recommend a suitable size and height based on your venue and programme.",
    columns: [
      { big: "60–100 cm", label: "Adjustable height", lines: ["A higher stage helps guests at the back of the room see the speakers and performers clearly."] },
      { big: "2 m × 1 m", label: "Modular platforms", lines: ["Combined to suit your programme, your room and the space for your guests."] },
    ],
    picker: { kind: "plan", caption: "Common stage sizes", options: [[4, 2], [6, 3], [7, 4], [8, 4]], start: 2 },
    sizesLine: "From compact speaking platforms to large performance stages, we offer flexible configurations to complement your event's programme and venue.",
    note: "Not sure what stage size you need? Share your venue details and programme, and our team will recommend a suitable size and height. Book a free consultation with our team.",
  },
  included: {
    title: "Complete Stage Rental & Technical Support",
    subtitle: "From Planning to Post-Event Dismantling",
    intro: "Every stage rental is supported by our experienced crew to ensure professional installation, a safe platform and a smooth event experience.",
    items: [
      "Pre-event consultation and venue assessment, where required",
      "Stage size and height planned around your programme",
      "Stage delivery, installation and levelling",
      "Black skirting all around, other colours on request",
      "Access steps for speakers, performers and award winners",
      "Guardrails arranged where your stage needs them",
      "Coordinated with the LED wall, sound and lighting if you book them",
      "Post-event dismantling and equipment removal",
    ],
    more: { title: "More Than Just Stages", body: "Complete your event production with our additional services, including LED walls, professional sound systems, lighting, photography, videography and live video production." },
  },
  supportBlock: {
    title: "Dedicated Support Throughout Your Event",
    body: "Our crew checks the stage, steps and skirting before your guests arrive, and coordinates with your programme and venue team on the day. Where on-site technical support is included, our team remains available to respond promptly to any issues and manages the post-event dismantling.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Dinner and dances, award nights", copy: "From dinner and dances and award ceremonies to town halls and annual celebrations, we provide modular stages for speeches, performances and lucky draws, planned together with LED walls, sound and lighting for a polished, coordinated event.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/cny-event-av-v3" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Prize giving, graduations", copy: "Supporting speech days, prize presentations, graduations and school performances with safe, professional stages and access steps for students walking up to receive their awards. We regularly work with MOE schools, and as a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "Community programmes, public events", copy: "Supporting community programmes, national celebrations and public events with modular staging and technical production services. GeBIZ registered and bizSAFE Level 3 certified. Registered charities and NPOs get 10% off.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, mall activations", copy: "Create a stage for product reveals, emcee segments and performances at your roadshow or retail activation. Skirting can be arranged in your brand colour on request, and the stage can be paired with an LED wall and sound.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "A reliable technical production partner for event agencies and professional organisers. We provide integrated staging, LED wall, sound and lighting services, backed by experienced crews and smooth project coordination.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  steps: {
    title: "Our Process: From Enquiry to Event Execution",
    items: [
      ["Enquiry & Requirements", "Share your event date, venue, audience size and programme."],
      ["Consultation & Planning", "We assess the venue and recommend a suitable stage size, height and layout."],
      ["Quotation & Confirmation", "Receive a customised quotation detailing the equipment and services. Confirm your booking in accordance with the agreed payment terms."],
      ["Installation & Checks", "Our crew delivers, installs and checks the stage ahead of your event."],
      ["Event Support & Dismantling", "Our team supports the event where required and manages the post-event dismantling."],
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Reshan Sivasamy"],
  pricing: {
    title: "Pricing Factor | What Affects the Quotation",
    intro: "Competitive Rental Rates, Tailored to Your Event. At PixelPro Studios, we believe professional staging should be accessible without compromising on safety or service reliability.",
    more: [
      "Our rental packages are customised according to your stage size and height, number of rental days, venue requirements and technical support needs.",
      "Whether you're planning a small corporate function or a large-scale production, we work with you to recommend a practical and cost-effective solution.",
    ],
    rows: [
      ["Stage size", "A small speaking platform", "A larger stage: more platforms, crew and setup time"],
      ["Height", "A low platform", "A higher stage, with more steps"],
      ["Skirting", "Standard black skirting", "Custom skirting colours"],
      ["Safety extras", "A low stage with steps", "Guardrails for higher stages"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ],
    footer: "Share your event details with our team for a customised quotation with a clear breakdown of the equipment, installation and technical services required.",
  },
  quote: {
    title: "Request a Stage Rental Quotation",
    intro: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.",
    checklist: ["Event date", "Venue", "Number of rental days", "Number of guests", "What happens on stage", "Stage size (if you know it)", "Preferred height", "Skirting colour", "Need a screen or sound too?"],
  },
  faqTitle: "Stage rental questions",
  faqs: [
    { q: "How much does stage rental cost?", a: "We quote per event, because the price depends on the stage size and height, skirting, safety extras like guardrails, the number of rental days, and venue access and timing. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "How big can the stage be?", a: "Whatever size your programme needs. It's built from 2 m × 1 m platforms, so it works as a portable stage for venues that don't have one, and we plan the size around your venue." },
    { q: "How high is the stage?", a: "The height is adjustable from 60 cm to 100 cm, depending on your room and what happens on stage." },
    { q: "Do you provide steps and guardrails?", a: "Steps come with the stage. Guardrails aren't included as standard, but we arrange them when your stage needs them." },
    { q: "Can the skirting match our theme?", a: "Black skirting is standard. We can arrange other colours on request." },
    { q: "I'm not technical. What do I need to do?", a: "Tell us your programme and the venue. We plan the size and height with you, set up the stage before your guests arrive and manage the dismantling after your event." },
    { q: "Can you supply the stage, screen and sound together?", a: "Yes. Our AV team takes care of everything from LED walls and staging to sound, so there's just one team to liaise with, one quotation and one payment to settle.", link: { label: "AV rental", href: "/mockup/av-systems-v3" } },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
    { q: "Do you cover all of Singapore?", a: "Yes, island-wide. We deliver and set up the stage, and manage the dismantling after your event." },
  ],
};
