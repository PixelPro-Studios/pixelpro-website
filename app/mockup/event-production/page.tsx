// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// New page. Kept from PixelPro's own copy: the homepage "One-Stop Solution for Your Entire Event" line (WhySection), the
// service deck cover line and "Have something else in mind?" panel, and the /services FAQs. Partner list from Lucas (6 Nov).
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "Event Production Company Singapore | One Team | PixelPro Studios",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like to discuss event production. Date: , Venue: , Guests: , Event type: ",
  eyebrow: "Event production · Singapore",
  h1: "Event Production in Singapore",
  intro: "One team for the technical side of your event: sound, LED walls, stage, lighting, photos and video, plus emcees and crew through our partners. You deal with one person from the first brief to pack-down.",
  introRetained: "For events, media, and AV production. Your one-stop partner.",
  seeWorkLabel: "See our work",
  heroImages: ["/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-2.jpg", "/photos/pixelpro-studios-hero-stage.webp"],
  heroAlt: "PixelPro Studios event production in Singapore",
  pains: [
    { worry: "“I'm managing five vendors who don't talk to each other.”", fix: "Sound, screen, stage, lighting, photos and video from one team, planned together so everything fits on the day.", spec: "One vendor, one team, one workflow" },
    { worry: "“I also need emcees, ushers and registration crew.”", fix: "We arrange them through our partner network, and stay your one point of contact for all of it.", spec: "Emcees, DJs, bands, ushers, registration crew via partners" },
    { worry: "“Our event doesn't fit a standard package.”", fix: "Tell us the idea. Not all events fit into a fixed list, so we design the setup around your concept.", spec: "Custom setups on request" },
    { worry: "“If something goes wrong, who's responsible?”", fix: "We are. Our crew is on site throughout, and any technical issue is resolved within thirty minutes or you get an immediate discount.", spec: "One accountable technical partner from setup to strike" },
  ],
  reviewsFirst: ["Candy Mak", "Tan Hee Pheng", "Gwendolyn Anne David"],
  story: {
    eyebrow: "One-stop event partner",
    title: "One-Stop Solution for Your Entire Event",
    paragraphs: [
      "From sound and stage to lighting, projection, LED walls, photography and videography. You only deal with one vendor, one team, one smooth workflow.",
      "Our core work is event rental and technical production: we plan, supply, deliver, set up, operate and tear down the technical side of an event. We own the core AV equipment, and anything else your event needs comes through trusted partners, while we remain your technical production point of contact.",
    ],
    listTitle: "What we can bring together for you:",
    list: [
      "Sound systems and live sound engineers",
      "LED walls and projection",
      "Stages and platforms",
      "Stage lighting",
      "Event photography and videography, including drone footage and same-day edits",
      "Compact livestreams (up to 4 cameras)",
      "Photo booths with branded prints",
      "Emcees, DJs and live bands (partners)",
      "Ushers, registration and technical crew (partners)",
      "TVs and display screens (partners)",
      "Printing, furniture and fabrication (partners)",
      "LEW and PE support (partners)",
    ],
    after: [
      "Have something else in mind? Not all events fit into a fixed list. If you have a unique concept, custom setup, or specialised requirement, our team is ready to design and execute a solution tailored to you.",
    ],
    image: "/photos/one-stop-solution-for-your-entire-event.jpg",
    imageAlt: "One-stop event production by PixelPro Studios",
  },
  buyers: [
    { who: "HR and admin teams", events: "Dinner and dances, town halls, company events", copy: "Hand us the technical side of the whole event, from AV to photos and the emcee. You get one quote and one person to call, and you can enjoy the night.", links: [{ label: "Dinner and dance AV", href: "/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/events/cny-event-av" }] },
    { who: "Schools", events: "Graduations, concerts, school-wide events", copy: "AV, stage, photos and video under one GeBIZ quotation, so the teacher-in-charge has one vendor to manage. We already work with MOE schools.", links: [{ label: "LED wall for graduation", href: "/events/led-wall-rental-for-graduation" }] },
    { who: "Government and community", events: "Public events, National Day, community programmes", copy: "Public events that can't fail, with one accountable partner. GeBIZ registered and bizSAFE Level 3. We produced the LED wall, stage and sound for the NDP 2026 screening at Marina Barrage.", links: [{ label: "Outdoor movie screening", href: "/events/outdoor-movie-screening" }] },
    { who: "Brand and marketing teams", events: "Launches, roadshows, activations", copy: "The technical production for your launch or activation, plus photos and video you can use for marketing after.", links: [{ label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "We work with event agencies as their AV and technical production partner: our crew, our equipment, your client. Need the equipment only? We rent it without crew too.", links: [{ label: "AV rental", href: "/mockup/av-systems" }] },
  ],
  priceFactors: [
    ["How much you hand over", "One or two services, like sound and a screen", "The full technical production, plus partners like emcees and ushers"],
    ["Number of guests and room size", "A small room or function room", "A ballroom, hall or outdoor site"],
    ["How long the event runs", "A short programme", "A full day, or several days"],
    ["Equipment only or with crew", "Equipment only, which you run yourself", "Our crew setting up and running everything on the day"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Custom elements", "Our standard setups", "Custom builds, fabrication or specialised requirements"],
  ],
  comparison: {
    eyebrow: "Production or rental?",
    title: "Event production vs AV rental",
    body: "AV rental means you get the equipment, either on its own or with our crew to run it. Event production means we also plan the technical side of the whole event and coordinate everything around it. We do both, so pick what you need.",
    link: { label: "Read: event production vs AV rental", href: "/blog/event-production-vs-av-rental" },
    cards: [
      ["AV rental", "You plan the event; we supply the sound, screen or stage, with or without crew."],
      ["Event production", "We plan and run the technical side of the whole event with you."],
      ["Partners included", "Emcees, ushers, printing and more, arranged through us."],
      ["Same equipment either way", "Our own core equipment, whichever you choose."],
    ],
  },
  jobs: {
    title: "Events we've produced",
    items: [
      { img: "/blog/ndp-2026-marina-barrage-live-screening.webp", alt: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage", caption: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage" },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-1.jpg", alt: "PixelPro Studios event production", placeholder: "Caption: \"[what we produced], [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-3.jpg", alt: "PixelPro Studios event production", placeholder: "Caption: \"[what we produced], [venue type], [N] guests\". No client names." },
    ],
  },
  typicalSetup: { title: "What a full company dinner and dance production looks like", placeholder: "From the job list: guests · venue type · AV · stage · photo/video · talent · crew on site · setup time. One line under it: \"Based on [N] of our D&D jobs. No client named.\"" },
  includedTitle: "What you hand over to us",
  included: [
    "The technical plan for your whole event",
    "All the AV: sound, screen, stage and lighting",
    "Photos and video, if you need them",
    "Talent and event crew through our partners",
    "Our crew running everything on the day",
    "Setup and teardown, with one person in charge",
  ],
  addOns: [
    { label: "Event AV planning", copy: "Brief, site visit, setup-day testing and spares", href: "/mockup/event-av-planning" },
    { label: "Photography", copy: "Planned and candid coverage of your event", href: "/services/photography" },
    { label: "Emcees and entertainment", copy: "Emcees, DJs and live bands through our partners", href: "/services/talent" },
  ],
  quote: { title: "Tell us about your event", checklist: ["Event date", "Venue", "Number of guests", "Event type", "Your programme", "What you'd like us to handle", "Any talent or crew needed", "Indoor or outdoor"] },
  faqTitle: "Event production questions",
  faqs: [
    { question: "How much does event production cost?", answer: "We quote per event, because the price depends on how much you hand over to us, your guest count and venue, how long the event runs, whether you need our crew, and any custom elements. Send us your brief and we'll reply with a plan and a quote, usually within a day to a week." },
    { question: "Is there a minimum booking?", answer: "No. We take small events as well as large ones, from a single speaker set to a full production." },
    { question: "Can you do outdoor events?", answer: "Yes. Our outdoor LED wall is waterproof and our speakers are rain-protected, and our setups run on the venue's normal power." },
    { question: "What services does PixelPro Studios offer?", answer: "We provide audio-visual systems, LED walls, stages, event photography, videography, and entertainment & talent — a one-stop partner for productions of any scale across Singapore." },
    { question: "Can we book multiple services for one event?", answer: "Yes. As a one-stop event partner, we can coordinate AV, photography, videography, and talent under a single production team so your programme runs smoothly from planning to teardown." },
    { question: "Do you handle emcees, ushers and registration?", answer: "Yes, through our partner network. Emcees are freelance partners matched to your event and language needs, and we stay your one point of contact." },
    { question: "Do you work with event agencies?", answer: "Yes. We work as the AV and technical production partner for event agencies, as well as directly with companies hosting events." },
    { question: "Do you provide on-site crew and technical support?", answer: "Yes. Our team handles delivery, setup, live operation during your event, and teardown so your programme runs smoothly from start to finish." },
    { question: "What if something goes wrong in the middle of the event?", answer: "Our crew is on site the whole time with spare screen panels and backup mics. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
    { question: "Do you cover events across Singapore?", answer: "Yes. We support corporate events, schools, government agencies, and community organisations island-wide, with crew and equipment sized to your venue and run-of-show." },
    { question: "How do I get a quote or start planning?", answer: "Share your event brief on WhatsApp or by email and we will scope a proposal for you. You can also download our services deck for an overview of capabilities." },
  ],
  related: [
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "Event AV planning", href: "/mockup/event-av-planning" },
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "Event production vs AV rental", href: "/blog/event-production-vs-av-rental" },
    { label: "Dinner and dance AV", href: "/events/dinner-and-dance-av" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
