// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// Rewrite of /services/av-systems at the same URL. The umbrella page for "av rental singapore".
// Kept from their current page: the one-line intro, each section's H2 + H3 + opening paragraph (service cards),
// the full Stage Lighting section (story block; lighting has no page of its own until Q2 2027), and their 5 FAQs.
// Only change to their wording: lighting items that come from partners are marked, per the product bible §9.
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "AV Rental Singapore | Sound, LED, Stage, Crew Included",
  description: "AV rental in Singapore from one team: sound, LED walls, stages and projectors, set up, run on the day and packed away by our crew. GeBIZ registered.",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like a quote for event AV. Date: , Venue: , Guests: , What I need: ",
  eyebrow: "AV systems · Singapore",
  h1: "AV Rental in Singapore",
  intro: "AV rental from one team: sound, LED walls, stages and projectors for your event. We plan it, set it up, run it on the day and pack it away, so you only deal with one vendor.",
  introRetained: "Audio visual systems for events, conferences, and installations.",
  seeWorkLabel: "See our work",
  heroImages: ["/services-hero/services_av-systems.webp", "/services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg"],
  heroAlt: "AV rental in Singapore: PixelPro sound and stage setup at an event",
  pains: [
    { worry: "“I'm already chasing five vendors.”", fix: "Sound, screen, stage and projection from one team, planned together. One quote, one person to call.", spec: "Sound · LED walls · stages · projectors · photo and video" },
    { worry: "“I don't know what AV I actually need.”", fix: "Send us your venue, guest count and programme. We'll recommend a setup that fits your room and programme.", spec: "Recommendations from your brief · site visit if needed" },
    { worry: "“What if something fails mid-event?”", fix: "Our crew stays on site the whole time. If a technical issue happens, we resolve it within thirty minutes or you get an immediate discount.", spec: "Crew on site from setup to pack-down" },
    { worry: "“The programme keeps changing.”", fix: "We reply quickly and adjust the setup. Organisers in our Google reviews mention last-minute requests handled with calm efficiency.", spec: "Quick replies for urgent and last-minute requests" },
  ],
  reviewsFirst: ["Gwendolyn Anne David", "Candy Mak", "Tan Hee Pheng"],
  services: {
    eyebrow: "What we supply",
    title: "Everything for your event's AV",
    items: [
      { title: "Audio System Rental", subtitle: "Sound Systems for Concerts, Corporate Events, Roadshows, Exhibitions and Community Shows", copy: "We deliver professional audio solutions engineered for events that demand power, clarity and full reliability.", href: "/mockup/sound-system-rental", img: "/services-av-audio/pixelpro-studios-audio-visual-productions-singapore.jpg" },
      { title: "LED Wall Rental", subtitle: "High-impact event visuals", copy: "Bright LED displays engineered for conferences, concerts, exhibitions, roadshows, launches, and large-scale events in Singapore.", href: "/mockup/led-walls", img: "/services-av-led/pixelpro-studios-led-wall-services-singapore.jpg" },
      { title: "Projector and Screen Rental", subtitle: "High Brightness Projection for Corporate Events, Presentations, Outdoor Movie Nights, Exhibitions and Roadshows", copy: "We deliver projection setups sized for every type of event.", href: "/mockup/projector-rental", img: "/services-av-projector/pixelpro-studios-projector-rental-singapore.jpg" },
      { title: "Stage Rental", subtitle: "Modular Stages for Dinner and Dances, School Ceremonies, Concerts and Community Events", copy: "Modular stage platforms up to 32 m², 60 cm to 100 cm high, with skirting and steps.", href: "/mockup/stage-rental", img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-1.jpg" },
    ],
  },
  story: {
    eyebrow: "Stage lighting rental",
    title: "Stage Lighting Rental",
    subtitle: "Professional Lighting for Concerts, Corporate Shows, Roadshows, Exhibitions and Outdoor Events",
    paragraphs: [
      "We provide full-scale lighting solutions designed to transform any venue into a dynamic, visually striking experience. From intimate stages to large outdoor arenas, our lighting systems create atmosphere, focus audience attention and elevate every performance or presentation.",
      "Our lighting designers and technicians plan every angle carefully to ensure balanced illumination, clean stage visibility and dramatic impact where needed. Whether the event requires a concert look, an elegant ambience, product highlighting, or a full theatrical treatment, we create a lighting plan that aligns with your theme and desired audience experience.",
    ],
    listTitle: "We offer a comprehensive range of lighting equipment, such as:",
    list: [
      "LED Par cans",
      "Moving head spot, wash and beam lights",
      "Fresnel and profile stage lights (through our partners)",
      "RGBWA+UV wash lights",
      "Follow spots (through our partners)",
      "Uplighting",
      "Effect and ambience lighting",
      "DMX controllers",
      "Wireless lighting systems",
      "Lighting stands and truss-mounted rigs (truss through our partners)",
      "Outdoor-rated fixtures",
    ],
    after: [
      "We handle layout planning, power distribution, mounting, safety checks, DMX programming, live cue operation and teardown. This gives organisers complete assurance that the lighting will enhance the event without complications.",
    ],
    image: "/services-av-lighting/pixelpro-studios-stage-lighting-singapore.jpg",
    imageAlt: "Stage lighting by PixelPro Studios",
  },
  buyers: [
    { who: "HR and admin teams", events: "Dinner and dances, town halls, CNY dinners", copy: "Organising the company D&D or town hall? One team handles the screen, stage and sound, so you're not chasing five vendors. Our crew runs everything while you host.", links: [{ label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }, { label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" }] },
    { who: "Schools", events: "Graduations, speech days, concerts", copy: "We quote through GeBIZ and handle the technical side, so the teacher-in-charge doesn't have to. We already work with MOE schools.", links: [{ label: "LED wall for graduation", href: "/events/led-wall-rental-for-graduation" }, { label: "Speech day sound", href: "/events/speech-day-sound-system" }] },
    { who: "Government and community", events: "Public screenings, National Day, community events", copy: "Public events that can't fail. GeBIZ registered and bizSAFE Level 3. We produced the LED wall, stage and sound for the NDP 2026 screening at Marina Barrage. Registered charities and NPOs get 10% off, and we donate 5% of the booking.", links: [{ label: "Outdoor movie screening", href: "/events/outdoor-movie-screening" }] },
    { who: "Brand and marketing teams", events: "Roadshows, launches, activations", copy: "Screen, sound and stage for roadshows and launches, plus photos and video you can use after the event.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "Running the event for a client? We can be your AV team with our own crew, so you deal with one supplier.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  priceFactors: [
    ["What you need", "One item, like sound or a projector", "Sound, screen, stage and lighting together (still one quote)"],
    ["Number of guests and room size", "A small room or function room", "A ballroom, hall or outdoor field"],
    ["How long the event runs", "A short programme, like a two-hour town hall", "A full day, or several days"],
    ["Indoor or outdoor", "Indoors", "Outdoors: outdoor screens, sound and more planning"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Crew", "Setup and pack-down only", "Operators running sound, screen and lighting all event"],
  ],
  comparison: {
    eyebrow: "One team or several vendors?",
    title: "Why book your AV from one team",
    body: "You can hire sound from one company, the screen from another and the stage from a third. It works, until something doesn't fit on the day and nobody owns the problem.",
    cards: [
      ["One plan", "Screen, speakers and stage planned together, so they fit the room and each other."],
      ["One crew on the day", "The same team sets up, runs and packs down everything."],
      ["One quote", "Every item in one quote, so you can see the full cost."],
      ["One person to call", "If anything changes, one call sorts it out."],
    ],
  },
  jobs: {
    title: "Events we've produced",
    items: [
      { img: "/blog/ndp-2026-marina-barrage-live-screening.webp", alt: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage", caption: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage" },
      { img: "/portfolio-live-music/av-rental_stage-speakers-and-mixer.webp", alt: "AV rental for a live music show: PixelPro speakers on stands either side of the stage", caption: "Speakers, stage monitors, wireless mics, a 16-channel mixer and a sound engineer for a record show with live bands, convention centre" },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-3.jpg", alt: "PixelPro Studios event production", placeholder: "Caption: \"[what we supplied], [venue type], [N] guests\". No client names." },
    ],
  },
  typicalSetup: { title: "What a 300-guest dinner and dance usually needs", placeholder: "From the job list: guests · venue type · screen · sound · stage · crew on site · setup time. One line under it: \"Based on [N] of our D&D jobs. No client named.\"" },
  includedTitle: "You don't have to touch a thing",
  included: [
    "We plan the AV around your venue, guest count and programme",
    "We deliver, set up and test everything before your guests arrive",
    "Sound checks, screen checks and a run-through with you",
    "Our crew runs everything during the event",
    "Safety checks on cables, power and rigging",
    "We pack everything away after",
  ],
  addOns: [
    { label: "Photography", copy: "Planned and candid coverage of your event", href: "/services/photography" },
    { label: "Videography", copy: "Highlight films, full recordings and social clips", href: "/services/videography" },
    { label: "Emcees and entertainment", copy: "Emcees, DJs and live bands through our partners", href: "/services/talent" },
  ],
  quote: { title: "Get your AV quote", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "How long the event runs", "Your programme (speeches, performances)", "What you think you need", "Photo or video too?"] },
  faqTitle: "AV rental questions",
  faqs: [
    { question: "How much does AV rental cost?", answer: "We quote per event, because the price depends on what you need, your guest count and room, how long the event runs, indoor or outdoor, venue access, and how much crew is needed. Send us your brief and we'll reply with a setup and a quote." },
    { question: "Do you rent sound systems for events in Singapore?", answer: "Yes. PixelPro Studios provides professional sound system rental across Singapore, including speakers, mixers, microphones, and on-site technicians for corporate events, schools, conferences, and outdoor programmes." },
    { question: "What AV equipment can I rent?", answer: "We supply audio systems, LED walls, stages, stage lighting, and projectors. Packages can be tailored to your venue size, programme format, and technical requirements." },
    { question: "I'm not technical. What do I need to do?", answer: "Tell us your venue, guest count and programme. We recommend the setup, then plan, build, run and pack it away." },
    { question: "How far in advance should I book AV rental?", answer: "We recommend booking at least two to four weeks ahead for standard events. Larger productions, LED walls, or peak seasons may need earlier confirmation so we can reserve crew and equipment. If you need urgent support, feel free to reach out — we respond fast." },
    { question: "Do you provide setup and technical support on site?", answer: "Yes. Our team handles delivery, setup, live operation during your event, and teardown so your programme runs smoothly from start to finish." },
    { question: "What if something goes wrong in the middle of the event?", answer: "Our crew is on site the whole time. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
    { question: "Can you livestream the event?", answer: "Yes, for compact setups: up to four cameras streamed online. Cameras that move around the room need wireless links, so they cost more." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
    { question: "Do you cover all of Singapore?", answer: "Yes. We provide audio visual rental island-wide, with crew and equipment sized to your venue and run-of-show." },
  ],
  related: [
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Projector rental", href: "/mockup/projector-rental" },
    { label: "Stage rental", href: "/mockup/stage-rental" },
    { label: "Event production", href: "/mockup/event-production" },
    { label: "Event AV planning", href: "/mockup/event-av-planning" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
