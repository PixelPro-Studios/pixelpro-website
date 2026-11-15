// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// Wording rule: PixelPro's existing copy is kept (story block, intro line, FAQs); our additions sit around it.
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.6 and outdoor P3.9 screens for dinner and dances, town halls, school events and launches.",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like a quote for an LED wall. Date: , Venue: , Guests: , Indoor/outdoor: ",
  eyebrow: "LED wall rental · Singapore",
  h1: "LED Wall Rental in Singapore",
  intro: "LED wall rental for your dinner and dance, town hall, school event or launch. Our crew sets up the LED screen, runs it and packs it away, so you can focus on your guests.",
  introRetained: "Bright LED displays engineered for conferences, concerts, exhibitions, roadshows, launches, and large-scale events in Singapore.",
  seeWorkLabel: "See our LED work",
  heroImages: ["/services-hero/services_led-walls.webp", "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp"],
  heroAlt: "LED wall rental in Singapore: a PixelPro LED wall at a live event",
  pains: [
    { worry: "“The back of the room can't see the slides.”", fix: "A sharp LED wall big enough to fill the stage, with side screens and a live camera on the speaker if the room is long.", spec: "P2.6 indoor screen · up to about 25 m²" },
    { worry: "“It's outdoors, or the room is bright. Won't it look washed out?”", fix: "LED is brighter than a projector, and we have a separate screen built for outdoor events and big stages.", spec: "P3.9 outdoor screen · up to about 18 m²" },
    { worry: "“I'm already chasing five vendors.”", fix: "One team brings the screen, the stage and the sound, so you have one quote and one person to call.", spec: "Stage up to 32 m² · sound and photo/video in the same booking" },
    { worry: "“I'm not technical, and I'll be busy hosting.”", fix: "Our crew sets up before your guests arrive, runs the screen all event, then packs it away.", spec: "Crew on site from setup to pack-down" },
  ],
  reviewsFirst: ["Candy Mak"],
  story: {
    eyebrow: "Built around your production",
    title: "Your content, impossible to miss.",
    paragraphs: [
      "Every installation is planned around viewing distance, venue lighting, content format, audience size, and programme flow. We configure the screen so presentations stay crisp, videos remain smooth, and branding lands with impact.",
      "Our team handles structure planning, rigging, cable management, power, calibration, testing, playback, and live operation—giving organisers one accountable technical partner from setup to strike.",
    ],
    listTitle: "Complete LED wall support",
    list: [
      "Indoor and outdoor LED panels",
      "Modular screens sized to your venue",
      "Full-stage LED backdrops and side screens",
      "Ground-supported, or rigged after a venue and safety check",
      "Live camera feeds and presentation playback",
      "Video processors and signal management",
      "Power distribution, calibration, and testing",
      "On-site video operators and technical crew",
    ],
  },
  buyers: [
    { who: "HR and admin teams", events: "Dinner and dances, town halls, CNY dinners", copy: "Organising the company D&D for the first time? One team handles the screen, stage and sound, so you're not chasing five vendors. Our crew runs everything on the night while you host.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/events/cny-event-av" }] },
    { who: "Schools", events: "Graduations, speech days, concerts", copy: "We quote through GeBIZ and handle the technical side, so the teacher-in-charge doesn't have to. We already work with MOE schools.", links: [{ label: "LED wall for graduation", href: "/events/led-wall-rental-for-graduation" }] },
    { who: "Government and community", events: "Public screenings, National Day, community events", copy: "Public events that can't fail. GeBIZ registered and bizSAFE Level 3. We ran the outdoor LED wall, sound and lighting for the NDP 2026 screening at Marina Barrage. Registered charities and NPOs get 10% off, and we donate 5% of the booking.", links: [{ label: "Outdoor LED wall rental", href: "/events/outdoor-led-wall-rental" }] },
    { who: "Brand and marketing teams", events: "Roadshows, launches, activations", copy: "A screen bright enough to stop people in a busy mall, plus photos and video you can use after the event.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }, { label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "Running the event for a client? We can be your AV team: screen, stage and sound with our own crew, so you deal with one supplier.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  sizing: {
    eyebrow: "Sizing",
    title: "Which size do I need?",
    intro: "The screens we own, the walls we've built with them, and the one rule that decides the size: how close your nearest guests sit.",
    rows: [
      ["Indoor screen (P2.6)", "Up to about 25 m² from our own stock, for example 5 m × 3 m. Sharp when the nearest guests sit at least 2.6 m away."],
      ["Outdoor screen (P3.9)", "Up to about 18 m², in whole-metre sizes such as 6 m × 3 m or 5 m × 2 m. Built for outdoor events and bright atriums; we confirm daylight visibility on a site check. Best when the nearest viewers are at least 3.9 m away."],
      ["Walls we've built", "3.5 m × 2.5 m for a three-day international forum in a hotel ballroom · 5 m × 3 m outdoors at Marina Barrage for National Day · 5.5 m × 3 m in a mall atrium · 6 m × 2.5 m and 7 m × 2.5 m for university showcases · 2.5 m × 4 m upright for a party · four 1 m × 2 m upright panels on a school hall stage"],
      ["Power", "Plan for about one 13A socket per 4 m² of screen. If the venue can't supply that, we arrange temporary power and a licensed electrical worker."],
    ],
    note: "Not sure? Send us your venue and guest count and we'll recommend a size.",
  },
  priceFactors: [
    ["Screen size", "A smaller wall", "A bigger wall: more panels, crew and setup time"],
    ["Indoor or outdoor", "Indoors", "Outdoors: a different screen and more planning"],
    ["How long the event runs", "A short programme, like a two-hour town hall", "A full day, or several days"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Standing or hung", "Standing on the floor", "Hung from the ceiling: rigging and venue approval"],
    ["Crew and add-ons", "The screen on its own", "Adding a stage, sound or extra operators (one quote for all of it)"],
  ],
  comparison: {
    eyebrow: "LED or projector?",
    title: "Why choose LED over a projector",
    body: "We rent both, so we'll tell you honestly when a projector is enough: a dim room on a tighter budget. For bright rooms, outdoor events and big stages, LED wins.",
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
      { img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp", alt: "Four upright PixelPro LED panels on a school hall stage", caption: "Four 1 m × 2 m upright LED panels on a school hall stage for a prize day, with stage lighting" },
      { img: "/portfolio-jobs/conference-av-rental_led-wall-hotel-ballroom-forum.webp", alt: "3.5 m × 2.5 m LED wall in a hotel ballroom for an international forum", caption: "3.5 m × 2.5 m LED wall and a 50-inch confidence monitor for a three-day international forum, about 100 delegates, hotel ballroom" },
      { img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp", alt: "5.5 m × 3 m LED wall above a stage in a mall atrium, set up by PixelPro", caption: "5.5 m × 3 m LED wall and a 7 m × 4 m stage in a mall atrium, built overnight before the mall opened" },
    ],
  },
  typicalSetup: {
    title: "A university pitch day with a 6 m × 2.5 m LED wall",
    rows: [
      ["Event", "Create4Good Demo Day 2026, SUTD Campus Centre: student teams pitching to judges and guests"],
      ["Screen", "6 m × 2.5 m LED wall for slides, a pitch timer and sponsor visuals"],
      ["Sound", "2 × 15-inch speakers, a digital mixer, 2 wireless mics and 3 rostrum mics"],
      ["Crew", "Our crew built and ran the LED wall; a sound engineer stayed on site for the whole programme"],
    ],
  },
  includedTitle: "You don't have to touch a thing",
  included: [
    "We check the venue first, with a site visit if it needs one",
    "We deliver, build and test the screen before your guests arrive",
    "We stand it on the floor, or hang it where the venue allows after a technical check",
    "We can put the speaker on the big screen with a live camera",
    "Someone from our crew runs the screen for the whole event",
    "We pack everything away after",
  ],
  addOns: [
    { label: "Stage", copy: "Up to 32 m², 60–100 cm high, with skirting and steps", href: "/mockup/stage-rental" },
    { label: "Sound", copy: "Speakers, wireless and headset mics, and an engineer", href: "/mockup/sound-system-rental" },
    { label: "Photo and video", copy: "Event photography, highlight films and social clips", href: "/services/photography" },
  ],
  quote: { title: "Get your LED wall quote", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "How long the event runs", "Screen size (if you know it)", "What you'll show: slides, video, live camera", "Need a stage or sound too?"] },
  faqTitle: "LED wall rental questions",
  faqs: [
    { question: "How much does LED screen rental cost?", answer: "We quote per event, because the price depends on the screen size, indoor or outdoor, how long the event runs, venue access and setup timing, and the crew needed. Send us your brief and we'll reply with a setup and a quote." },
    { question: "I'm not technical. What do I need to do?", answer: "Send us your slides and videos beforehand and tell us the programme. Our crew plans the setup, builds and tests the screen, and runs it during the event." },
    { question: "What if something goes wrong in the middle of the event?", answer: "Our crew is on site the whole time. If a technical issue happens, we resolve it within thirty minutes or you receive a rebate, as set out in your quote." },
    { question: "Do you provide LED wall rental across Singapore?", answer: "Yes. We supply, install, calibrate, operate, and dismantle indoor and outdoor LED wall systems for events across Singapore." },
    { question: "How big can the LED video wall be?", answer: "For LED video wall hire, up to about 25 m² indoors and 18 m² outdoors from our own stock, depending on the venue, power and structure. For bigger walls we bring in more screen through our partners." },
    { question: "What pixel pitches are available?", answer: "Our commonly specified systems include P2.6 panels for closer indoor viewing and P3.9 panels for larger stages and outdoor applications. We recommend the right option based on viewing distance, content, and venue conditions." },
    { question: "Should I choose an LED wall or a projector?", answer: "An LED wall is brighter, sharper and casts no shadows, so it suits bright rooms, outdoor events and big stages. A projector can be enough for a dim room on a tighter budget. We rent both, so we'll recommend whichever fits your venue." },
    { question: "Can the LED wall be used outdoors or in bright venues?", answer: "Yes. Our outdoor-capable panels help content remain clear in daylight and bright mall or atrium environments. Final suitability depends on the site and weather plan." },
    { question: "Can you manage live cameras and presentation content?", answer: "Yes. We can route live camera feeds, presentations, sponsor loops, videos, countdowns, and motion graphics through professional video processors, with an operator on site where required." },
    { question: "Can you livestream the event as well?", answer: "Yes, for compact setups: up to four cameras streamed online. Cameras that move around the room need wireless links, so they cost more." },
    { question: "How far ahead should I book?", answer: "At least two to four weeks for standard events, and earlier for LED walls in peak season. We also take urgent requests: WhatsApp us and we'll tell you what's possible." },
    { question: "What information do you need for an LED wall quote?", answer: "Share your event date, venue, preferred screen size, indoor or outdoor setting, programme hours, content sources, and whether the wall will be ground-supported or rigged. We can help refine the specification from there." },
    { question: "Are you registered on GeBIZ?", answer: "Yes. Schools and government agencies can request our quotation through GeBIZ." },
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
