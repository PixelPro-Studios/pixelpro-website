// MOCKUP by Rankr (25 Nov 2026). AV rental in Design 2, on the service template (_v3/ServiceV3.tsx), template sections only (Abel, 25 Nov).
// Wording: the Design 1 page PixelPro reviewed (../av-systems/page.tsx) with Jovin's AV-page copy from his doc
// "[2] First Draft Feedback (Jovin)" (16 Nov) and the decided rules (deepagent clients/pixelpro/WRITING-RULES.md):
// - The big "Stage Lighting Rental" section is gone (Jovin; lighting is not a main service).
// - Support block in place of the 30-minute guarantee; "Number of rental days"; tear down; no "partners" or gear models.
// - Crew wording "where on-site technical support is included"; GeBIZ: the agreed purchases line, not "quotations".
// - No sentence lists 3 or more event types; "seamless" swapped for plain words.
// - Our work: National Day 2026 first. Hero photo changed (Jovin): stand-in, final photo still to confirm.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for event AV (from your AV rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of guests: \nWhat I need: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "Professional Event AV Services · Singapore",
  h1: "AV Rental in Singapore",
  intro: "AV rental in Singapore, from a single sound system for a corporate presentation to a full production for a large-scale event. We supply sound systems, LED walls, projectors, staging, lighting and media production, with our technical crew from installation through live event operation.",
  hero: { img: "/portfolio-jobs/event-av-planning_control-desk-beside-the-stage.webp", alt: "AV rental in Singapore: PixelPro's AV control desk beside the stage at an event", pos: "50% 45%" },
  seeWorkLabel: "See our work",
  work: {
    title: "Events we've produced",
    projects: [
      {
        img: "/portfolio-jobs/led-wall-rental_ndp-marina-barrage-flag-led-wall.webp",
        alt: "5 m × 3 m outdoor LED wall by PixelPro at the National Day 2026 celebrations at Marina Barrage",
        tag: "Government · Outdoor",
        spec: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m", "Stage lighting"],
        title: "National Day 2026 celebrations at Marina Barrage",
        line: "Outdoor LED wall, sound and lighting for a public celebration, planned with site visits ahead of the day.",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
        alt: "AV rental for a pitch day: a 6 m × 2.5 m PixelPro LED wall and speakers in a university atrium",
        tag: "University · Indoor",
        spec: ["6 m × 2.5 m LED wall", "Sound and a sound engineer"],
        title: "A university innovation showcase",
        line: "The LED wall carried pitch slides, countdown timers and sponsor visuals, with a sound engineer on site for the whole programme.",
      },
      {
        img: "/portfolio-live-music/av-rental_stage-speakers-and-mixer.webp",
        alt: "AV rental for a live music show: PixelPro speakers on stands either side of the stage",
        tag: "Live music · Convention centre",
        spec: ["Speakers and stage monitors", "Digital mixer and wireless mics"],
        title: "A record show with live bands",
        line: "Speakers, stage monitors and wireless mics for a run of live bands, mixed by our sound engineer.",
      },
      {
        img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
        alt: "School hall stage with PixelPro LED panels and coloured stage lighting for a prize day",
        tag: "School · Indoor",
        spec: ["Four 1 m × 2 m LED panels", "Stage lighting and sound"],
        title: "A school prize-day ceremony",
        line: "LED panels, lighting and sound framed the stage for students, parents and guests.",
      },
    ],
  },
  included: {
    title: "Complete AV Rental & Technical Support",
    intro: "Our AV team takes care of everything from LED walls and staging to sound, so there's just one team to liaise with, one quotation and one payment to settle. A dedicated technical lead oversees every setup, so you can focus on your event.",
    items: [
      "We plan the AV around your venue, guest count and programme",
      "We deliver, set up and test everything before your guests arrive",
      "Sound checks, screen checks and a run-through with you",
      "Our crew runs the systems where on-site technical support is included",
      "Safety checks on cables, power and rigging",
      "We handle the tear-down after your event",
    ],
    support: "Our technical team checks the equipment, tests the systems and prepares everything before your event to keep disruptions to a minimum. Where on-site technical support is included, our crew stays on site to monitor the systems, run the live operation and respond promptly to technical issues.",
  },
  buyers: {
    title: "Who we work with",
    items: [
      { tab: "Corporate", who: "Corporate Events & Functions", events: "Conferences, dinner and dances", copy: "From corporate conferences to the company dinner and dance, we provide sound, LED displays, projection, staging and lighting, with our technical crew managing the setup and live requirements. We work closely with organisers for polished presentations and clear audio.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/cny-event-av-v3" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Speech days, graduations", copy: "From speech days to graduation ceremonies, we plan AV for school halls with clear communication, safe installations and reliable equipment. We regularly work with MOE schools and understand their procurement processes. As a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "National celebrations, community programmes", copy: "We provide sound, LED displays, stage lighting and technical operations for public events and outdoor gatherings, including the National Day 2026 celebrations at Marina Barrage. PixelPro Studios is GeBIZ registered and bizSAFE Level 3 certified. Registered charities and NPOs get 10% off.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, retail activations", copy: "LED displays, sound, staging, lighting and media production for roadshows and retail activations. Our team coordinates the AV to suit your visual direction, venue and technical needs.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical AV production partner", copy: "We work with event agencies and organisers as their technical AV team, from equipment and technical planning to installation and live operation. You coordinate the technical side through one AV partner, and book only what each project needs.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Gwendolyn Anne David", "Candy Mak", "Tan Hee Pheng"],
  pricing: {
    intro: "Our AV rental is tailored to each event's technical requirements, venue and budget. Whether you need a standalone sound system or a full setup with LED walls, staging and lighting, we quote on the equipment and manpower required and recommend a setup that balances performance and cost.",
    rows: [
      ["What you need", "One item, like sound or a projector", "Sound, screen, stage and lighting together (still one quotation)"],
      ["Number of guests and room size", "A small room or function room", "A ballroom, hall or outdoor field"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Indoor or outdoor", "Indoors", "Outdoors: outdoor screens, sound and more planning"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Technical support", "Setup and tear-down only", "Operators running sound, screen and lighting during the event"],
    ],
    footer: "Customised quotations with clear, competitive pricing.",
  },
  quote: { title: "Request an AV Rental Quotation", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "Number of rental days", "Your programme (speeches, performances)", "What you think you need", "Photo or video too?"] },
  faqTitle: "AV rental questions",
  faqs: [
    { q: "How much does AV rental cost?", a: "We quote per event, because the price depends on what you need, your guest count and room, the number of rental days, indoor or outdoor, venue access, and how much crew is needed. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "What AV equipment can I rent?", a: "We supply sound systems, LED walls, projectors and screens, stages and stage lighting. Packages are tailored to your venue size, programme format and technical requirements.", link: { label: "LED wall rental", href: "/mockup/led-walls-v3" } },
    { q: "Do you rent sound systems for events in Singapore?", a: "Yes. PixelPro Studios provides professional sound system rental across Singapore, including speakers, mixers, microphones and sound engineers for corporate events, schools, conferences and outdoor programmes.", link: { label: "Sound system rental", href: "/mockup/sound-system-rental" } },
    { q: "Do you rent stages too?", a: "Yes. Our modular stage platforms come with installation, skirting and access steps, planned around your venue.", link: { label: "Stage rental", href: "/mockup/stage-rental-v3" } },
    { q: "I'm not technical. What do I need to do?", a: "Tell us your venue, guest count and programme. We recommend the setup, then plan, build and run it with you, and handle the tear-down." },
    { q: "How does booking AV rental work?", a: "From enquiry to event execution, in five steps:", list: ["Enquiry: share your event date, venue, audience size and what you need", "Consultation and planning: we check the venue, recommend a setup and flag anything else the event needs", "Quotation and confirmation: you receive a customised quotation and confirm on the agreed payment terms", "Installation and testing: our crew delivers, installs and tests everything ahead of your event", "Live operation and tear-down: our team supports the event as booked, then handles the tear-down"] },
    { q: "How far in advance should I book AV rental?", a: "We recommend booking at least two to four weeks ahead for standard events. Larger productions, LED walls or peak seasons may need earlier confirmation so we can reserve crew and equipment. For urgent requests, our WhatsApp is available 24/7, or give us a call." },
    { q: "Do you provide setup and technical support on site?", a: "Yes. Our team handles delivery, setup and testing, and the tear-down after your event. Where on-site technical support is included, our crew also runs the systems during your programme." },
    { q: "What if something goes wrong in the middle of the event?", a: "We test everything before your guests arrive. Where on-site technical support is included, our crew stays on site to monitor the systems and respond promptly to any technical issue." },
    { q: "Can you livestream the event?", a: "Yes, for compact setups: up to four cameras streamed online. Cameras that move around the room need wireless links, so they cost more." },
    { q: "Are you a GeBIZ registered supplier?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing. We regularly work with schools and public agencies." },
    { q: "Do you cover all of Singapore?", a: "Yes. We provide AV rental island-wide, with crew and equipment sized to your venue and programme." },
  ],
};
