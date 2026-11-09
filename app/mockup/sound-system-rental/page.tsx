// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// Story block = PixelPro's existing "Audio System Rental" copy from /services/av-systems, kept word for word
// (only change: line arrays and in-ear monitors marked "through our partners", per the product bible §9).
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "Sound System Rental Singapore | Crew Included",
  description: "Sound system rental in Singapore with an engineer on site: speakers, wireless and headset mics for speeches, town halls, dinner and dances and live bands.",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like a quote for a sound system. Date: , Venue: , Guests: , Speeches/band: ",
  eyebrow: "Sound system rental · Singapore",
  h1: "Sound System Rental in Singapore",
  intro: "Sound system rental for your speeches, town hall, dinner and dance or live band. Our sound engineer sets it up, tests it and runs it on the day, so every guest hears every word.",
  introRetained: "Sound Systems for Concerts, Corporate Events, Roadshows, Exhibitions and Community Shows.",
  seeWorkLabel: "See our sound work",
  heroImages: ["/services-hero/services_sound-system-rental.webp", "/photos/pixelpro-studios-singapore-sound-system-rental.jpg"],
  heroAlt: "Sound system rental in Singapore: PixelPro speakers and mics at an event",
  pains: [
    { worry: "“People at the back can't hear the speeches.”", fix: "We size and tune the system for your room and guest count, so the sound is even from the front table to the back row.", spec: "15\" powered speakers · 18\" subwoofers" },
    { worry: "“The mic keeps cutting out, or it squeals.”", fix: "Our engineer sound-checks every mic before doors open and watches the levels for the whole event.", spec: "Shure and Sennheiser wireless handheld and headset mics" },
    { worry: "“We have a live band, not just speeches.”", fix: "Our digital mixers and stagebox handle a full band with many inputs, plus wireless mics for singers and hosts.", spec: "Digital mixers · stagebox for large input counts" },
    { worry: "“It's last minute.”", fix: "We own our sound equipment and reply quickly. Several of our Google reviews are from organisers who booked us at short notice.", spec: "Quick replies for urgent and last-minute requests" },
  ],
  reviewsFirst: ["Gwendolyn Anne David", "Ng Sherelle", "Chloe Lim", "Reshan Sivasamy"],
  story: {
    eyebrow: "Audio system rental",
    title: "Powerful, clear sound engineered for every event",
    subtitle: "Sound Systems for Concerts, Corporate Events, Roadshows, Exhibitions and Community Shows",
    paragraphs: [
      "We deliver professional audio solutions engineered for events that demand power, clarity and full reliability. Our systems are built to perform across any environment, including concert stages, shopping mall atriums, outdoor fields, hotel ballrooms, roadshow booths and community pavilions.",
      "Every setup is designed, tuned and tested by experienced live sound engineers who understand how to achieve clean vocal presence, impactful music reinforcement and even coverage throughout the venue. Whether the event needs background ambience, high-energy music, formal speeches or a live performance, we configure the right system to match the exact space and audience size.",
    ],
    listTitle: "We supply a wide range of audio equipment such as:",
    list: [
      "Full range speakers",
      "Subwoofers",
      "Touring grade line array systems (through our partners)",
      "Stage monitors",
      "In-ear monitor systems (through our partners)",
      "Digital mixers",
      "Wireless handheld and lapel microphones",
      "Instrument microphones",
      "DI boxes",
      "Signal distribution and audio networking",
    ],
    after: [
      "Our team handles technical planning, equipment preparation, on-site setup, sound checks, safety checks and full event support. This ensures consistent performance from start to finish and gives organisers complete confidence that the audio will run smoothly.",
      "We combine professional-level sound engineering with a young, energetic crew that genuinely cares about creating great experiences. We focus on delivering outstanding audio performance while keeping the process simple and stress-free for every organiser.",
    ],
    image: "/services-av-audio/pixelpro-studios-audio-visual-productions-singapore.jpg",
    imageAlt: "PixelPro Studios audio setup",
  },
  buyers: [
    { who: "HR and admin teams", events: "Town halls, dinner and dances, CNY dinners", copy: "Headset mics for presenters, handhelds for Q&A and the lucky draw, and an engineer running it all, so you can host instead of worrying about the mic.", links: [{ label: "Town hall sound", href: "/events/town-hall-sound-system" }, { label: "Dinner and dance AV", href: "/events/dinner-and-dance-av" }] },
    { who: "Schools", events: "Speech days, concerts, CCA shows", copy: "We quote through GeBIZ and handle the technical side, including working with your hall's own vendor. We already work with MOE schools.", links: [{ label: "Speech day sound", href: "/events/speech-day-sound-system" }, { label: "School hall sound", href: "/events/school-hall-sound-system" }] },
    { who: "Government and community", events: "Community events, public stages", copy: "Clear sound for community stages and public programmes. GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off, and we donate 5% of the booking.", links: [{ label: "Community event sound", href: "/events/community-event-sound-system" }] },
    { who: "Brand and marketing teams", events: "Roadshows, activations, launches", copy: "Sound for roadshow booths and mall atriums, with the emcee and product demos heard over the crowd.", links: [{ label: "Roadshow LED screen", href: "/events/roadshow-led-screen-rental" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "Running the event for a client? We can be your sound team, with our own crew, or rent you the equipment on its own if you have a technician.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  sizing: { eyebrow: "Sizing", title: "How much sound do I need?", intro: "It depends on your guest count, the room, and whether it's speeches or live music. Send us your venue and programme and we'll recommend a setup.", placeholder: "3–4 rows from Jovin's job list, e.g. \"[N] guests, [venue type], speeches only → [speakers, mics]\". Only setups PixelPro has actually run." },
  priceFactors: [
    ["Number of guests and room size", "A small room or function room", "A ballroom, hall or outdoor field: more speakers and subwoofers"],
    ["Speeches or live music", "Speeches and background music", "A live band: more inputs, monitors and mixing"],
    ["Number of mics", "A few handhelds", "Panels, headsets for every presenter, instrument mics"],
    ["How long the event runs", "A short programme, like a two-hour town hall", "A full day, or several days"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Add-ons", "Sound on its own", "Adding a stage, LED wall or recording (one quote for all of it)"],
  ],
  comparison: {
    eyebrow: "Do I need a sound engineer?",
    title: "Why we recommend booking an engineer",
    body: "Renting speakers is the easy part. What makes the difference on the day is someone who knows the system, checks every mic and adjusts the sound as the room fills up.",
    cards: [
      ["Sound check before doors open", "Every mic and every speaker tested in the room, not just at the warehouse."],
      ["Levels adjusted live", "A full room sounds different from an empty one. We adjust as it fills."],
      ["Mic handovers that just work", "Presenters, panels and Q&A mics switched on and off at the right moment."],
      ["One person to talk to", "You tell the engineer the programme; they handle the rest."],
    ],
  },
  jobs: {
    title: "Sound we've run",
    items: [
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-2.jpg", alt: "PixelPro Studios sound system setup", placeholder: "Caption: \"[speakers/mics], [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-4.jpg", alt: "PixelPro Studios sound system setup", placeholder: "Caption: \"[speakers/mics], [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-6.jpg", alt: "PixelPro Studios sound system setup", placeholder: "Caption: \"[speakers/mics], [venue type], [N] guests\". No client names." },
    ],
  },
  typicalSetup: { title: "What a 300-guest town hall usually needs", placeholder: "From the job list: guests · venue type · speakers · mics (headset/handheld) · crew on site · setup time. One line under it: \"Based on [N] of our town hall jobs. No client named.\"" },
  includedTitle: "You don't have to touch a thing",
  included: [
    "We plan the system for your room, guest count and programme",
    "We deliver, set up and sound-check before your guests arrive",
    "Wireless mics ready for every speaker, panel and Q&A",
    "A sound engineer runs the sound for the whole event",
    "Safety checks on cables and power",
    "We pack everything away after",
  ],
  addOns: [
    { label: "LED wall", copy: "A bright screen for slides, videos and a live camera on the speaker", href: "/mockup/led-walls" },
    { label: "Stage", copy: "Up to 32 m², 60–100 cm high, with skirting and steps", href: "/mockup/stage-rental" },
    { label: "Photo and video", copy: "Event photography, highlight films and recordings", href: "/services/photography" },
  ],
  quote: { title: "Get your sound system quote", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "How long the event runs", "Speeches, music, or a live band", "How many mics you need", "Need a stage or screen too?"] },
  faqTitle: "Sound system rental questions",
  faqs: [
    { question: "How much does sound system rental cost?", answer: "We quote per event, because the price depends on your guest count and room, whether it's speeches or live music, how many mics you need, how long the event runs and venue access. Send us your brief and we'll reply with a setup and a quote." },
    { question: "Do you rent sound systems for events in Singapore?", answer: "Yes. PixelPro Studios provides professional sound system rental across Singapore, including speakers, mixers, microphones, and on-site technicians for corporate events, schools, conferences, and outdoor programmes." },
    { question: "I'm not technical. What do I need to do?", answer: "Tell us your programme: who speaks when, any music or performances, and how many mics you need. Our engineer sets up, sound-checks and runs everything on the day." },
    { question: "What if something goes wrong in the middle of the event?", answer: "Our engineer is on site the whole time. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
    { question: "Can I rent just the speakers?", answer: "Yes. Speaker rental on its own, without an engineer, is available at a fixed equipment rate. Most organisers add our engineer, who sets up, sound-checks and runs it on the day." },
    { question: "Can you handle a live band?", answer: "Yes. Our digital mixers and stagebox handle larger input counts for bands, with instrument mics and wireless mics for singers and hosts." },
    { question: "Do you provide setup and technical support on site?", answer: "Yes. Our team handles delivery, setup, live operation during your event, and teardown so your programme runs smoothly from start to finish." },
    { question: "How far in advance should I book?", answer: "We recommend booking at least two to four weeks ahead for standard events. Larger productions or peak seasons may need earlier confirmation so we can reserve crew and equipment. If you need urgent support, feel free to reach out — we respond fast." },
    { question: "Can you work with the venue's own AV team?", answer: "Yes. We can liaise with the venue's vendor or technician so everything works together on the day." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
    { question: "Do you cover all of Singapore?", answer: "Yes, island-wide. We deliver, set up, run the sound during your event and pack it away after." },
  ],
  related: [
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Stage rental", href: "/mockup/stage-rental" },
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "How many speakers for 300 people?", href: "/blog/how-many-speakers-for-300-people" },
    { label: "Town hall sound", href: "/events/town-hall-sound-system" },
    { label: "Last-minute sound system rental", href: "/events/last-minute-sound-system-rental" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
