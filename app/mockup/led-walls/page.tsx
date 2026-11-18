// MOCKUP by Rankr. Rewritten 16 Nov 2026 from Jovin's doc "[2] First Draft Feedback (Jovin)" (LED Wall Rental tab),
// Lukas's WhatsApp comments (15–16 Nov) and Jovin's answers (16 Nov). Rules: deepagent clients/pixelpro/WRITING-RULES.md
// (master: Free-otion "Writing as PixelPro: voice guide and rules") and PRODUCT-BIBLE.md §8d.
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.5 and outdoor P3.9 LED walls, planned around your venue, installed, run and torn down by our technicians.",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  // One detail per line (Lukas, 15 Nov); the first line names the page so PixelPro can see where the lead came from
  waText: "Hi PixelPro, I'd like a quote for an LED wall (from your LED wall rental page).\nDate: \nVenue: \nEvent name & type: \nLED wall size: \nIndoor or outdoor: \nNeed operator on-site: Yes/No",
  eyebrow: "LED wall rental · Singapore",
  h1: "LED Wall Rental in Singapore",
  intro: "LED wall rental in Singapore, from presentation screens to full-stage and outdoor LED displays. We plan each setup around your venue and programme, install and test it before your guests arrive, and our technicians stay on standby throughout your event.",
  seeWorkLabel: "See our LED work",
  heroImages: ["/services-hero/services_led-walls.webp", "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp"],
  heroAlt: "LED wall rental in Singapore: a PixelPro LED wall at a live event",
  pains: [],
  why: {
    title: "Why choose PixelPro for your LED wall",
    items: [
      { title: "Clear LED displays, indoors and out", copy: "From a presentation screen in a hotel ballroom to an outdoor wall in daylight, our indoor P2.5 and outdoor P3.9 LED walls keep your slides, videos and branding sharp and easy to see." },
      { title: "Sound, staging and media from the same team", copy: "Beyond LED walls, we supply sound systems, staging, photography and videography. You have one contact and one quotation for the technical side of your event." },
      { title: "An experienced technical crew", copy: "Our technicians install and configure the screen, run content playback and handle the tear-down. We test every setup before the event, and a dedicated technical lead oversees it." },
      { title: "Reliable and responsive", copy: "Corporate teams, schools and government agencies book us for reliable equipment, quick replies and careful work on the day. We are bizSAFE Level 3 and GeBIZ-registered." },
    ],
  },
  support: {
    title: "Dedicated technical support throughout your event",
    body: "Our LED wall technicians are on standby throughout your event. They monitor the screen, run content playback and respond quickly if anything needs attention. We test every setup before the event and plan backups, so your programme runs smoothly.",
  },
  reviewsFirst: ["Candy Mak"],
  story: {
    eyebrow: "Built around your production",
    title: "Your content, impossible to miss.",
    paragraphs: [
      "Make every presentation, performance and brand message stand out on a professionally configured LED display.",
      "Whether you need a full-stage LED backdrop, a presentation screen or an outdoor LED wall, we design the setup around your venue, audience size, viewing distance and content.",
      "Our team handles the technical details: installation, screen calibration, video processing, signal management and live operation.",
    ],
    listTitle: "Complete LED wall support",
    list: [
      "Indoor and outdoor LED walls",
      "Modular screens sized to your venue",
      "Full-stage LED backdrops and side screens",
      "Ground-supported, or rigged after a venue and safety check",
      "Presentation, video and graphics playback",
      "Video processors and signal management",
      "Power distribution, calibration and testing",
      "LEW and PE endorsements where required, and all necessary permits handled by us, tailored to your venue",
    ],
  },
  buyers: [
    { who: "Corporate Events", events: "Dinner and dances, conferences", copy: "From the company dinner and dance to an annual conference, we set up LED displays and the rest of your AV, and our team runs it on the day so your event looks polished.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/events/cny-event-av" }] },
    { who: "Schools & Educational Institutions", events: "Graduations, speech days", copy: "We regularly work with MOE schools and understand their procurement processes. As a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "LED wall for graduation", href: "/events/led-wall-rental-for-graduation" }] },
    { who: "Government & Community Events", events: "National celebrations, public screenings", copy: "We support national celebrations and community events with LED displays and technical production, including the National Day 2026 celebrations at Marina Barrage. We are GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off.", links: [{ label: "Outdoor LED wall rental", href: "/events/outdoor-led-wall-rental" }] },
    { who: "Brand Activations & Roadshows", events: "Mall roadshows, retail activations", copy: "High-brightness LED displays that stay visible in busy malls and bright spaces, with the screen size configured to your booth or stage.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }, { label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
    { who: "Event Agencies & Organisers", events: "Technical production partner", copy: "Running the event for a client? We work with you as your technical team, supplying the LED wall, staging and sound with our own crew.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  sizing: {
    eyebrow: "Sizing",
    title: "Which size LED wall do I need?",
    intro: "Our modular LED walls can be configured to suit your event size, stage layout and venue. Whatever size you have in mind, we can build it.",
    rows: [
      ["Indoor P2.5 LED wall", "For corporate presentations, conferences and indoor performances. High-resolution panels for slides, video and detailed graphics."],
      ["Outdoor P3.9 LED wall", "For outdoor events, public screenings and bright venues. High-brightness, weather-resistant panels."],
      ["Common sizes", "3.5 m × 2.5 m, 5.5 m × 3 m, 6 m × 2.5 m, 6 m × 4 m and 8 m × 3 m. Custom sizes and multiple-screen setups too."],
    ],
    note: "Not sure what size you need? Share your venue details and we'll recommend one. Book a free consultation with our team.",
  },
  pricingIntro: "We keep LED wall rental accessible without cutting corners on equipment or service. Your quotation depends on the factors below, and we'll recommend a practical, cost-effective setup for your event.",
  priceFactors: [
    ["Screen size", "A smaller wall", "A bigger wall: more panels, crew and setup time"],
    ["Indoor or outdoor", "Indoors", "Outdoors: a different screen and more planning"],
    ["Number of rental days", "A one-day event", "An event over several days"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Standing or hung", "Standing on the floor", "Hung from the ceiling: rigging and venue approval"],
    ["Technical support", "Setup and tear-down only", "Technicians on site for a long programme"],
    ["Add-ons", "The screen on its own", "Adding a stage, sound or photo and video (one quotation for all of it)"],
  ],
  comparison: {
    eyebrow: "LED or projector?",
    title: "LED Wall vs Projector: Which Is Right for Your Event?",
    body: "Both have their place, depending on your venue, audience and budget. LED walls are bright and vivid, so they suit large stages, bright rooms and outdoor events. Projectors are a practical, lower-cost choice for smaller events in rooms with controlled lighting. We rent both, so we'll recommend the one that fits.",
    link: { label: "Read: LED wall vs projector", href: "/blog/led-wall-vs-projector" },
    cards: [
      ["Brighter and sharper", "Stays clear in bright rooms, mall atriums and outdoors."],
      ["No projector space needed", "Nothing to place in front of or behind the screen."],
      ["No shadows", "Speakers and guests can walk past without blocking the picture."],
      ["Stronger contrast", "Colours and text stay clear, especially in bright venues."],
    ],
  },
  jobs: {
    title: "LED screens we've built for events",
    items: [
      { img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp", alt: "5.5 m × 3 m LED display above a 7 m × 4 m stage in a mall atrium, set up by PixelPro", caption: "We installed a 5.5 m × 3 m LED display alongside a 7 m × 4 m stage in a mall atrium. The build was done overnight within the venue's access window, so everything was ready before the mall opened." },
      { img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp", alt: "Four upright PixelPro LED panels on a school hall stage for a prize day", caption: "Four 1 m × 2 m upright LED panels framed a school hall stage for a prize-day ceremony. The panels carried the programme visuals for students, parents and guests." },
    ],
  },
  typicalSetup: {
    title: "A university innovation showcase with a 6 m × 2.5 m LED wall",
    summary: "We provided the LED wall and audio for a university innovation showcase. The 6 m × 2.5 m LED display carried pitch presentations, countdown timers and sponsor visuals, with our technical team on site throughout the event.",
    rows: [
      ["Screen", "6 m × 2.5 m LED wall for pitch slides, a countdown timer and sponsor visuals"],
      ["Sound", "Speakers, a digital mixer, wireless mics and rostrum mics for the pitching teams"],
      ["Crew", "Our technicians built and ran the LED wall; a sound engineer stayed on site for the whole programme"],
    ],
  },
  includedTitle: "Complete LED Wall Rental & Technical Support",
  includedIntro: "Every LED wall rental comes with our technical team. We work with you from planning to tear-down, so the screen performs reliably on the day.",
  included: [
    "Pre-event consultation and a venue check, where needed",
    "Delivery, installation and configuration of the LED wall",
    "Video processing, signal routing and screen calibration",
    "Testing and a content check before your guests arrive",
    "LED wall technicians on standby throughout the event",
    "Tear-down and removal after the event",
  ],
  addOnsTitle: "More Than Just LED Walls",
  addOns: [
    { label: "Stage", copy: "Modular stage platforms with skirting and steps", href: "/mockup/stage-rental" },
    { label: "Sound", copy: "Speakers, wireless and headset mics, and a sound engineer", href: "/mockup/sound-system-rental" },
    { label: "Photo and video", copy: "Event photography, highlight films and social clips", href: "/services/photography" },
  ],
  steps: [
    ["Enquiry", "Share your event date, venue, audience size and what you need."],
    ["Consultation and planning", "We check the venue, recommend a suitable LED setup and flag anything else the event needs."],
    ["Quotation and confirmation", "You receive a customised quotation for the equipment and services. Confirm your booking on the agreed payment terms."],
    ["Installation and testing", "Our crew delivers, installs and tests the LED wall ahead of your event."],
    ["Live operation and tear-down", "Our technicians support the event, then handle the tear-down."],
  ],
  quote: { title: "Request an LED Wall Rental Quotation", checklist: ["Event date", "Venue", "Event name and type", "Number of rental days", "LED wall size (if you know it)", "Indoor or outdoor", "What you'll show: slides, video, graphics", "Need an operator on site?"] },
  faqTitle: "LED wall rental questions",
  faqs: [
    { question: "How much does LED screen rental cost?", answer: "We quote per event, because the price depends on the screen size, indoor or outdoor, the number of rental days, venue access and setup timing, and the technical support you need. Share your event details and we'll send a quotation." },
    { question: "I'm not technical. What do I need to do?", answer: "Send us your slides and videos beforehand and tell us the programme. Our team plans the setup, installs and tests the screen, and our technicians run it during the event." },
    { question: "What if something goes wrong in the middle of the event?", answer: "Our LED wall technicians are on standby throughout the event and respond quickly if anything needs attention. We test the setup and your content before guests arrive, and we plan backups." },
    { question: "Do you provide LED wall rental across Singapore?", answer: "Yes. We supply, install, calibrate, operate and dismantle indoor and outdoor LED wall systems for events across Singapore." },
    { question: "How big can the LED video wall be?", answer: "For LED video wall hire, whatever size you have in mind, we can build it. Common sizes include 6 m × 4 m and 8 m × 3 m. We confirm the final size after checking your venue, power and structure." },
    { question: "What pixel pitches are available?", answer: "Our commonly specified systems include P2.5 panels for indoor events and P3.9 panels for larger stages and outdoor use. We recommend the right option based on your content, venue and audience." },
    { question: "Should I choose an LED wall or a projector?", answer: "An LED wall is brighter, sharper and casts no shadows, so it suits bright rooms, outdoor events and big stages. A projector can be enough for a dim room on a tighter budget. We rent both, so we'll recommend whichever fits your venue." },
    { question: "Can the LED wall be used outdoors or in bright venues?", answer: "Yes. Our outdoor LED walls keep content clear in daylight and in bright mall or atrium spaces. Final suitability depends on the site and the weather plan." },
    { question: "Can you manage presentation content?", answer: "Yes. We run presentations, sponsor loops, videos, countdowns and motion graphics through professional video processors, with a technician on site." },
    { question: "Can you livestream the event as well?", answer: "Yes, for compact setups: up to four cameras streamed online. Cameras that move around the room need wireless links, so they cost more." },
    { question: "How far ahead should I book?", answer: "At least two to four weeks for standard events, and earlier for LED walls in peak season. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { question: "What information do you need for an LED wall quote?", answer: "Share your event date, venue, preferred screen size, indoor or outdoor setting, the number of rental days, what you'll show on the screen, and whether the wall will stand on the floor or be rigged. We can help refine the setup from there." },
    { question: "Are you registered on GeBIZ?", answer: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
  related: [
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "Stage rental", href: "/mockup/stage-rental" },
    { label: "Projector and screen rental", href: "/mockup/projector-rental" },
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "LED wall vs projector", href: "/blog/led-wall-vs-projector" },
    { label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
