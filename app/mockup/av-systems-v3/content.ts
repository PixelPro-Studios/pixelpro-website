// MOCKUP by Rankr (25 Nov 2026). AV rental in Design 2, on the service template (_v3/ServiceV3.tsx).
// Wording: Jovin's own AV-page copy, word for word, from his doc "[2] First Draft Feedback (Jovin)" (16 Nov; Free-otion voice guide §10),
// wherever he wrote copy (Abel, 25 Nov). Only changes, each one their own decision:
// - Big "Stage Lighting Rental" section removed; lighting is his 5th card (Jovin, 16 Nov).
// - "seamless" → plain words (Lukas's banned words). No 30-minute guarantee (Jovin).
// - Schools: his "including quotations … through … GeBIZ" sentence uses the agreed GeBIZ line until Lukas confirms quotations [pending].
// - H1 stays "AV Rental in Singapore" for search; his headline is the line under it.
// - For the parts he covered with "Same feedback as LED Wall Rental Page" (what's included, process), his LED wording, made general.
// - Hero photo changed (Jovin): stand-in until he picks one. Sections he wrote no copy for (work captions, FAQs) keep our text.
// Live since 25 Nov 2026. Links to pages that are not live yet were dropped or point at #quote; add them back when those pages go live.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for event AV (from your AV rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of rental days: \nNumber of guests: \nWhat I need: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "Professional Event AV Services · Singapore",
  kicker: "Professional Event AV Services · Singapore",
  h1: "AV Rental in Singapore",
  subhead: "Professional Audio, Visual & Event Production Solutions",
  intro: "From corporate conferences and dinner and dances to concerts, exhibitions, roadshows and large-scale events, PixelPro Studios provides professional audiovisual equipment and technical production services tailored to your event.",
  intro2: "Our solutions include sound systems, LED walls, projectors, staging, lighting and media production, supported by experienced technical crews from installation through live event operation.",
  tagline: "Reliable Equipment · Experienced Technical Crew · Integrated AV Solutions",
  hero: { img: "/portfolio-jobs/event-av-planning_control-desk-beside-the-stage.webp", alt: "AV rental in Singapore: PixelPro's AV control desk beside the stage at an event", pos: "50% 45%" },
  seeWorkLabel: "See our work",
  why: {
    title: "Why Choose PixelPro Studios?",
    items: [
      { title: "Complete Audiovisual Solutions", copy: "From professional sound reinforcement and LED displays to staging, lighting and media production, we provide integrated audiovisual solutions to support your event's technical requirements." },
      { title: "Professional Equipment & Technical Expertise", copy: "Our team works with professional AV equipment and carefully plans each setup according to venue conditions, audience size, programme requirements and event objectives." },
      { title: "Experienced On-Site Technical Support", copy: "Our technicians and operators manage equipment installation, configuration, testing and live event operation, helping ensure consistent technical performance throughout your programme." },
      { title: "Flexible Solutions for Every Event", copy: "Whether you require a simple sound system for a corporate presentation or a comprehensive audiovisual setup for a large-scale production, we recommend equipment and manpower arrangements suited to your event and budget." },
    ],
  },
  work: {
    title: "Events we've produced",
    showLines: true,
    projects: [
      {
        img: "/portfolio-jobs/led-wall-rental_ndp-marina-barrage-flag-led-wall.webp",
        alt: "5 m × 3 m outdoor LED wall by PixelPro at the National Day 2026 celebrations at Marina Barrage",
        tag: "Government · Outdoor",
        spec: ["5 m × 3 m outdoor LED wall", "Sound covering over 100 m", "Stage lighting"],
        title: "National Day 2026 celebrations at Marina Barrage",
        line: "Delivered the outdoor LED wall, sound and lighting for a public National Day celebration. Site visits ahead of the event shaped an outdoor setup the whole crowd could see and hear.",
      },
      {
        img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
        alt: "AV rental for a pitch day: a 6 m × 2.5 m PixelPro LED wall and speakers in a university atrium",
        tag: "University · Indoor",
        spec: ["6 m × 2.5 m LED wall", "Sound and a sound engineer"],
        title: "A university innovation showcase",
        line: "Provided an integrated LED wall and audio solution for a university innovation showcase. The 6 m × 2.5 m LED display supported pitch presentations, countdown timers and sponsor visuals, complemented by professional audio equipment and dedicated technical operators throughout the event.",
      },
      {
        img: "/portfolio-live-music/av-rental_stage-speakers-and-mixer.webp",
        alt: "AV rental for a live music show: PixelPro speakers on stands either side of the stage",
        tag: "Live music · Convention centre",
        spec: ["Speakers and stage monitors", "Digital mixer and wireless mics"],
        title: "A record show with live bands",
        line: "Provided speakers, stage monitors, wireless microphones and a digital mixer for a record show with live bands at a convention centre, with our sound engineer running the show.",
      },
      {
        img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
        alt: "School hall stage with PixelPro LED panels and coloured stage lighting for a prize day",
        tag: "School · Indoor",
        spec: ["Four 1 m × 2 m LED panels", "Stage lighting and sound"],
        title: "A school prize-day ceremony",
        line: "Set up LED panels, stage lighting and sound to frame a school hall stage for a prize-day ceremony, for students, parents and guests.",
      },
    ],
  },
  services: {
    title: "What we supply",
    items: [
      { title: "Audio System Rental", copy: "PixelPro Studios provides professional sound reinforcement solutions for corporate events, conferences, live performances, roadshows and public gatherings. Our services include loudspeakers, subwoofers, microphones, digital audio mixers and monitoring systems, with experienced sound engineers available for setup and live event operation.", href: "#quote", img: "/portfolio-live-music/sound-system-rental_mixing-desk-sound-engineer.webp", alt: "PixelPro sound engineer at a digital mixing desk during a live event" },
      { title: "LED Wall Rental", copy: "Create impactful event visuals with our indoor and outdoor LED wall solutions. From presentations and stage backdrops to public screenings and exhibitions, our modular LED displays can be configured to suit different venues, viewing requirements and production layouts.", href: "/services/led-walls/", img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp", alt: "5.5 m × 3 m PixelPro LED display above a stage in a mall atrium" },
      { title: "Projector & Screen Rental", copy: "We provide projection and screen solutions for presentations, seminars, conferences, exhibitions and screenings. Our team can recommend suitable projection equipment based on venue lighting, screen dimensions, viewing distance and audience requirements.", href: "#quote", img: "/portfolio-jobs/projector-rental_movie-screening-screen-and-projector.webp", alt: "Projector and screen rental: a big screen, PixelPro projector and speakers at a community movie screening in Tampines" }, // Jovin picked the Tampines Boulevard screening (25 Nov); IMG_2114
      { title: "Stage Rental", copy: "Our modular stage platforms offer flexible configurations for corporate functions, performances, ceremonies and community events. We provide stage installation, skirting and access steps, with configurations planned according to event requirements and venue conditions.", href: "#quote", img: "/portfolio-jobs/stage-rental_caregiving-week-mall-stage.webp", alt: "PixelPro modular stage with skirting set up in a mall for a community event" },
      { title: "Stage & Event Lighting Rental", copy: "Enhance your event with professional lighting solutions for stage illumination, performances, presentations and ambience. Our equipment includes LED PAR fixtures, moving heads, outdoor-rated lighting and DMX control systems, supported by experienced lighting technicians.", href: "#quote", small: true },
    ],
  },
  included: {
    title: "Complete AV Rental & Technical Support",
    subtitle: "From Installation to Live Event Operation",
    intro: "Every AV rental is supported by our experienced technical team to ensure professional installation, reliable performance and a smooth event experience.",
    items: [
      "Pre-event technical consultation and venue assessment, where required",
      "Equipment delivery, installation and configuration",
      "Sound checks, system testing and calibration",
      "Pre-event testing and content verification",
      "On-site technical operation, where on-site technical support is included",
      "Post-event dismantling and equipment removal",
    ],
    more: { title: "More Than Just Equipment", body: "Complete your event production with our additional services, including photography, videography and live video production." },
  },
  supportBlock: {
    title: "Reliable Technical Support Throughout Your Event",
    body: "Our technical team conducts thorough equipment checks, system testing and pre-event preparations to minimise the risk of disruptions. Where on-site technical support is included, our crew remains available to monitor the systems, manage live operations and respond promptly to technical issues.",
  },
  buyers: {
    title: "Who we work with",
    items: [
      { tab: "Corporate", who: "Corporate Events & Functions", events: "Conferences, dinner and dances", copy: "From corporate conferences and town halls to dinner and dances, award ceremonies and company celebrations, we provide integrated audiovisual solutions for professional event environments. Our services include sound systems, LED displays, projection, staging and lighting, supported by technical crews to manage setup and live event requirements. We work closely with corporate organisers to deliver polished presentations, clear audio and coordinated event production.", links: [] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Speech days, graduations", copy: "From speech days and graduation ceremonies to school concerts, orientation programmes and celebrations, we provide audiovisual solutions tailored to educational environments. Our team understands the importance of clear communication, safe installations, reliable equipment and professional event execution. We regularly work with MOE schools and understand their procurement processes. As a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [] },
      { tab: "Government", who: "Government & Community Events", events: "National celebrations, community programmes", copy: "We provide audiovisual production services for public events, community programmes, national celebrations and outdoor gatherings. Our capabilities include sound reinforcement, LED displays, stage lighting and technical operations for a variety of event environments. PixelPro Studios is GeBIZ registered and bizSAFE Level 3 certified, with experience supporting large-scale public events, including the National Day 2026 celebrations at Marina Barrage.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, retail activations", copy: "Create engaging brand experiences with professional audiovisual solutions for product launches, promotional roadshows, retail activations and exhibitions. We provide LED displays, sound systems, staging, lighting and media production services to support impactful presentations and audience engagement. Our team can coordinate multiple AV elements to suit the event's visual direction, venue and technical requirements.", links: [] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical AV production partner", copy: "PixelPro Studios works with event agencies and professional organisers as a technical audiovisual production partner. From equipment rental and technical planning to installation and live operation, we support event productions with professional AV systems and experienced crews. Our integrated services allow agencies to coordinate multiple technical requirements through a single AV partner while maintaining flexibility across different project scopes.", links: [] },
    ],
  },
  compare: {
    title: "Integrated AV Planning & Technical Coordination",
    paragraphs: [
      "Successful event production requires more than individual pieces of equipment. Sound, visuals, lighting and staging must be planned together to suit the venue, programme and audience.",
      "Our team coordinates audiovisual requirements from initial planning through installation, testing and live operation, helping ensure that the different technical elements work together effectively.",
      "By consolidating your AV requirements with PixelPro Studios, you benefit from clearer communication, coordinated technical planning and a single point of contact throughout the project.",
    ],
    points: [
      ["Coordinated Technical Planning", "We consider the interaction between sound, visuals, lighting, staging and venue infrastructure when developing the event setup."],
      ["Efficient Installation & Testing", "Our technical team coordinates equipment installation and testing according to the event schedule and venue requirements."],
      ["Simplified Project Communication", "Clients benefit from a central point of contact for audiovisual planning, coordination and technical requirements."],
      ["Flexible Production Support", "Our services can be provided individually or combined into an integrated audiovisual package based on your event requirements."],
    ],
  },
  steps: {
    title: "Our Process: From Enquiry to Event Execution",
    items: [
      ["Enquiry & Requirements", "Share your event date, venue, audience size and technical requirements."],
      ["Consultation & Planning", "We assess the venue, recommend a suitable AV configuration and identify any additional technical requirements."],
      ["Quotation & Confirmation", "Receive a customised quotation detailing the equipment and services. Confirm your booking in accordance with the agreed payment terms."],
      ["Installation & Testing", "Our crew delivers, installs and tests the equipment ahead of your event."],
      ["Live Operation & Dismantling", "Our technical team supports the event and manages the post-event dismantling."],
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Tan Hee Pheng"],
  pricing: {
    title: "AV Rental Pricing & Customised Packages",
    intro: "Our audiovisual rental solutions are tailored to each event's technical requirements, venue and budget.",
    more: [
      "Whether you require a standalone sound system or an integrated setup with LED walls, staging and lighting, we provide clear, competitive quotations based on the equipment and manpower required.",
      "Our team can recommend a suitable configuration to help you balance technical performance and cost-effectiveness.",
    ],
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
  quote: {
    title: "Request an AV Rental Quotation",
    intro: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.",
    checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "Number of rental days", "Your programme (speeches, performances)", "What you think you need", "Photo or video too?"],
  },
  faqTitle: "AV rental questions",
  faqs: [
    { q: "How much does AV rental cost?", a: "We quote per event, because the price depends on what you need, your guest count and room, the number of rental days, indoor or outdoor, venue access, and how much crew is needed. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "Do you rent sound systems for events in Singapore?", a: "Yes. PixelPro Studios provides professional sound system rental across Singapore, including speakers, mixers, microphones, and on-site technicians for corporate events, schools, conferences, and outdoor programmes." },
    { q: "What AV equipment can I rent?", a: "We supply audio systems, LED walls, stages, stage lighting, and projectors. Packages can be tailored to your venue size, programme format, and technical requirements." },
    { q: "I'm not technical. What do I need to do?", a: "Tell us your venue, guest count and programme. We recommend the setup, then plan, build and run it with you, and handle the tear-down." },
    { q: "How far in advance should I book AV rental?", a: "We recommend booking at least two to four weeks ahead for standard events. Larger productions, LED walls, or peak seasons may need earlier confirmation so we can reserve crew and equipment. If you need urgent support, feel free to reach out — we respond fast." },
    { q: "Do you provide setup and technical support on site?", a: "Yes. Our team handles delivery, setup and testing, and the dismantling after your event. Where on-site technical support is included, our crew also runs the systems during your programme." },
    { q: "Are you a GeBIZ registered supplier?", a: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
    { q: "Do you cover all of Singapore?", a: "Yes. We provide audio visual rental island-wide, with crew and equipment sized to your venue and run-of-show." },
  ],
};
