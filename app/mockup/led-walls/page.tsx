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
  heroImages: ["/services-hero/services_led-walls.webp", "/services-av-led/pixelpro-studios-led-wall-services-singapore.jpg"],
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
      "Ground-supported or rigged configurations",
      "Live camera feeds and presentation playback",
      "Video processors and signal management",
      "Power distribution, calibration, and testing",
      "On-site video operators and technical crew",
    ],
  },
  buyers: [
    { who: "HR and admin teams", events: "Dinner and dances, town halls, CNY dinners", copy: "Organising the company D&D for the first time? One team handles the screen, stage and sound, so you're not chasing five vendors. Our crew runs everything on the night while you host.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/mockup/events/cny-event-av" }] },
    { who: "Schools", events: "Graduations, speech days, concerts", copy: "We quote through GeBIZ and handle the technical side, so the teacher-in-charge doesn't have to. We already work with MOE schools.", links: [{ label: "LED wall for graduation", href: "/events/led-wall-rental-for-graduation" }] },
    { who: "Government and community", events: "Public screenings, National Day, community events", copy: "Public events that can't fail. GeBIZ registered and bizSAFE Level 3. We produced the LED wall, stage and sound for the NDP 2026 screening at Marina Barrage. Registered charities and NPOs get 10% off, and we donate 5% of the booking.", links: [{ label: "Outdoor LED wall rental", href: "/events/outdoor-led-wall-rental" }] },
    { who: "Brand and marketing teams", events: "Roadshows, launches, activations", copy: "A screen bright enough to stop people in a busy mall, plus photos and video you can use after the event.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }, { label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "Running the event for a client? We can be your AV team: screen, stage and sound with our own crew, so you deal with one supplier.", links: [{ label: "Event production", href: "/services/event-production" }] },
  ],
  sizing: { eyebrow: "Sizing", title: "Which size do I need?", intro: "The common sizes we build, and the events they suit. Not sure? Send us your venue and guest count and we'll recommend one.", placeholder: "3–4 rows from Jovin's job list, e.g. \"[size] for [venue type], about [N] guests\". Only sizes PixelPro has actually built." },
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
      { img: "/blog/ndp-2026-marina-barrage-live-screening.webp", alt: "LED wall for the NDP 2026 live screening at Marina Barrage", caption: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage" },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-3.jpg", alt: "PixelPro Studios stage production", placeholder: "Caption: \"[size] LED wall, [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-5.jpg", alt: "PixelPro Studios stage production", placeholder: "Caption: \"[size] LED wall, [venue type], [N] guests\". No client names." },
    ],
  },
  typicalSetup: { title: "What a 300-guest dinner and dance usually needs", placeholder: "From the job list: guests · venue type · screen size · sound · crew on site · setup time. One line under it: \"Based on [N] of our D&D jobs. No client named.\"" },
  includedTitle: "You don't have to touch a thing",
  included: [
    "We check the venue first, with a site visit if it needs one",
    "We deliver, build and test the screen before your guests arrive",
    "We stand it on the floor or hang it, whatever your venue allows",
    "We can put the speaker on the big screen with a live camera",
    "Someone from our crew runs the screen for the whole event",
    "We pack everything away after",
  ],
  addOns: [
    { label: "Stage", copy: "Up to 32 m², 60–100 cm high, with skirting and steps", href: "/services/stage-rental" },
    { label: "Sound", copy: "Speakers, wireless and headset mics, and an engineer", href: "/services/sound-system-rental" },
    { label: "Photo and video", copy: "Event photography, highlight films and social clips", href: "/services/photography" },
  ],
  quote: { title: "Get your LED wall quote", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "How long the event runs", "Screen size (if you know it)", "What you'll show: slides, video, live camera", "Need a stage or sound too?"] },
  faqTitle: "LED wall rental questions",
  faqs: [
    { question: "How much does LED screen rental cost?", answer: "We quote per event, because the price depends on the screen size, indoor or outdoor, how long the event runs, venue access and setup timing, and the crew needed. Send us your brief and we'll reply with a setup and a quote." },
    { question: "I'm not technical. What do I need to do?", answer: "Send us your slides and videos beforehand and tell us the programme. Our crew plans the setup, builds and tests the screen, and runs it during the event." },
    { question: "What if something goes wrong in the middle of the event?", answer: "Our crew is on site the whole time. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
    { question: "Do you provide LED wall rental across Singapore?", answer: "Yes. We supply, install, calibrate, operate, and dismantle indoor and outdoor LED wall systems for events across Singapore." },
    { question: "How big can the LED video wall be?", answer: "Up to about 25 m² indoors and 18 m² outdoors from our own stock, depending on the venue, power and structure. For bigger walls we bring in more screen through our partners." },
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
