// MOCKUP by Rankr (25 Nov 2026). AV rental in Design 2, on the service template (_v3/ServiceV3.tsx), template sections only.
// Wording: Jovin's own AV lines from his doc "[2] First Draft Feedback (Jovin)" (16 Nov; Free-otion voice guide §10) where they fit a
// template section, kept short (Abel, 25 Nov). Only changes to his lines are their own decisions: no "seamless", no 30-minute guarantee,
// GeBIZ purchases line until Lukas confirms "quotations". No big lighting section (Jovin); his service cards are summed up in the FAQ.
// Hero photo changed (Jovin): stand-in until he picks one.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for event AV (from your AV rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of guests: \nWhat I need: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "Professional Event AV Services · Singapore",
  h1: "AV Rental in Singapore",
  intro: "Our solutions include sound systems, LED walls, projectors, staging, lighting and media production, supported by experienced technical crews from installation through live event operation.",
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
        line: "",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
        alt: "AV rental for a pitch day: a 6 m × 2.5 m PixelPro LED wall and speakers in a university atrium",
        tag: "University · Indoor",
        spec: ["6 m × 2.5 m LED wall", "Audio and technical operators"],
        title: "A university innovation showcase",
        line: "",
      },
      {
        img: "/portfolio-live-music/av-rental_stage-speakers-and-mixer.webp",
        alt: "AV rental for a live music show: PixelPro speakers on stands either side of the stage",
        tag: "Live music · Convention centre",
        spec: ["Speakers and stage monitors", "Digital mixer and wireless mics"],
        title: "A record show with live bands",
        line: "",
      },
      {
        img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
        alt: "School hall stage with PixelPro LED panels and coloured stage lighting for a prize day",
        tag: "School · Indoor",
        spec: ["Four 1 m × 2 m LED panels", "Stage lighting and sound"],
        title: "A school prize-day ceremony",
        line: "",
      },
    ],
  },
  included: {
    title: "Complete AV Rental & Technical Support",
    intro: "Our AV team takes care of everything from LED walls and staging to sound, so there's just one team to liaise with, one quotation and one payment to settle. A dedicated technical lead oversees every setup, so you can focus on your event.",
    items: [
      "Pre-event technical consultation and venue assessment, where required",
      "Equipment delivery, installation and configuration",
      "Sound checks, system testing and calibration",
      "On-site technical operation, where on-site technical support is included",
      "Post-event dismantling and equipment removal",
    ],
    support: "Our technical team conducts thorough equipment checks, system testing and pre-event preparations to minimise the risk of disruptions. Where on-site technical support is included, our crew remains available to monitor the systems and respond promptly to technical issues.",
  },
  buyers: {
    title: "Who we work with",
    items: [
      { tab: "Corporate", who: "Corporate Events & Functions", events: "Conferences, dinner and dances", copy: "From corporate conferences and town halls to dinner and dances, we work closely with corporate organisers to deliver polished presentations, clear audio and coordinated event production.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/cny-event-av-v3" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Speech days, graduations", copy: "From speech days to graduation ceremonies, we provide audiovisual solutions tailored to educational environments. As a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "National celebrations, community programmes", copy: "GeBIZ registered and bizSAFE Level 3 certified, with experience supporting large-scale public events, including the National Day 2026 celebrations at Marina Barrage.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, retail activations", copy: "Our team can coordinate multiple AV elements to suit the event's visual direction, venue and technical requirements.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical AV production partner", copy: "We work with event agencies and professional organisers as a technical audiovisual production partner, from equipment rental and technical planning to installation and live operation.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Gwendolyn Anne David", "Candy Mak", "Tan Hee Pheng"],
  pricing: {
    intro: "Whether you require a standalone sound system or an integrated setup with LED walls, staging and lighting, we provide clear, competitive quotations based on the equipment and manpower required.",
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
  quote: { title: "Request an AV Rental Quotation", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "Number of rental days", "What you think you need", "Photo or video too?"] },
  faqTitle: "AV rental questions",
  faqs: [
    { q: "How much does AV rental cost?", a: "We quote per event, because the price depends on what you need, your guest count and room, the number of rental days, indoor or outdoor, venue access, and how much crew is needed. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "What AV equipment can I rent?", a: "Sound systems with experienced sound engineers, indoor and outdoor LED walls, projectors and screens, modular stages with skirting and steps, and stage and event lighting. Book one, or combine them into one AV package.", link: { label: "LED wall rental", href: "/mockup/led-walls-v3" } },
    { q: "Do you rent sound systems for events in Singapore?", a: "Yes. We provide loudspeakers, subwoofers, microphones, digital mixers and monitoring, with experienced sound engineers available for setup and live event operation.", link: { label: "Sound system rental", href: "/mockup/sound-system-rental" } },
    { q: "Do you rent stages and lighting too?", a: "Yes. Our modular stage platforms come with installation, skirting and access steps. For lighting, we provide stage illumination and ambience lighting with our lighting technicians.", link: { label: "Stage rental", href: "/mockup/stage-rental-v3" } },
    { q: "How does booking AV rental work?", a: "From enquiry to event execution, in five steps:", list: ["Enquiry & requirements: share your event date, venue, audience size and technical requirements", "Consultation & planning: we assess the venue, recommend a suitable setup and identify any additional technical requirements", "Quotation & confirmation: receive a customised quotation and confirm your booking on the agreed payment terms", "Installation & testing: our crew delivers, installs and tests the equipment ahead of your event", "Live operation & dismantling: our technical team supports the event and manages the post-event dismantling"] },
    { q: "Do you provide setup and technical support on site?", a: "Yes. Our team handles delivery, setup and testing, and the dismantling after your event. Where on-site technical support is included, our crew also runs the systems during your programme." },
    { q: "How far in advance should I book AV rental?", a: "We recommend booking at least two to four weeks ahead for standard events. Larger productions, LED walls or peak seasons may need earlier confirmation so we can reserve crew and equipment. For urgent requests, our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you a GeBIZ registered supplier?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
    { q: "Do you cover all of Singapore?", a: "Yes. We provide AV rental island-wide, with crew and equipment sized to your venue and programme." },
  ],
};
