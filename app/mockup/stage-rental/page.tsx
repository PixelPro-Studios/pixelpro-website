// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// New page: PixelPro has no stage copy today. Facts from Lucas (6 Nov, bible F3/§2b); story copy written in the voice of their
// other service sections ("young, energetic crew", "simple, seamless and stress-free") and flagged for their review.
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "Stage Rental Singapore | Crew Included | PixelPro Studios",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like a quote for a stage. Date: , Venue: , Guests: , Stage size (if known): ",
  eyebrow: "Stage and platform rental · Singapore",
  h1: "Stage Rental in Singapore",
  intro: "A raised stage for your dinner and dance, prize giving, school concert or community event. We build it, skirt it and pack it away, so every guest can see who's on stage.",
  seeWorkLabel: "See our stage work",
  heroImages: ["/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-1.jpg", "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-2.jpg"],
  heroAlt: "PixelPro Studios stage at an event in Singapore",
  pains: [
    { worry: "“Guests at the back can't see who's speaking.”", fix: "A raised stage puts your speakers and performers above the crowd, with the height set for your room.", spec: "Adjustable height, 60 cm to 100 cm" },
    { worry: "“The venue has no stage, or it's too small.”", fix: "Our modular stage is built from sections, so we can size it for your room and programme. Need bigger? We bring more through our partners.", spec: "16 × 2 m × 1 m decks · up to 32 m²" },
    { worry: "“I want it to look neat in photos.”", fix: "Black skirting around the edge as standard, so you don't see the legs. Other colours on request to match your theme.", spec: "Black skirting standard · custom colours arranged" },
    { worry: "“Winners need to walk up safely.”", fix: "Stage steps come with the stage, so prize winners and performers can walk up and down. Guardrails can be arranged where needed.", spec: "2 stair units · guardrails arranged separately" },
  ],
  reviewsFirst: ["Candy Mak"],
  story: {
    eyebrow: "Stage and platform rental",
    title: "A stage that fits your room",
    subtitle: "Modular Stages for Dinner and Dances, School Ceremonies, Concerts and Community Events",
    paragraphs: [
      "We provide modular stage platforms that can be built to the size and height your event needs, from a small speaking platform for a seminar to a full performance stage for a dinner and dance or school concert.",
      "Our team handles planning, delivery, build, skirting and dismantling. Because we also run sound, LED walls and lighting, the stage is planned together with the screen and speakers, so everything fits and works on the day.",
    ],
    listTitle: "What we supply:",
    list: [
      "Modular 2 m × 1 m stage decks",
      "Up to 32 m² of stage from our own stock",
      "Adjustable height, 60 cm to 100 cm",
      "Black skirting as standard",
      "Custom skirting colours on request",
      "Stage stairs",
      "Guardrails (arranged separately)",
      "Larger stages through our partners",
    ],
    image: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-4.jpg",
    imageAlt: "PixelPro Studios stage production",
  },
  buyers: [
    { who: "HR and admin teams", events: "Dinner and dances, CNY dinners, award nights", copy: "A proper stage for the speeches, performances and lucky draw, built with the screen and sound by one team, so you're not chasing several vendors.", links: [{ label: "Dinner and dance AV", href: "/events/dinner-and-dance-av" }, { label: "CNY event AV", href: "/events/cny-event-av" }] },
    { who: "Schools", events: "Prize giving, graduations, concerts", copy: "A raised stage with steps for students walking up. We quote through GeBIZ and handle the technical side, and we already work with MOE schools.", links: [{ label: "Prize giving ceremony AV", href: "/events/prize-giving-ceremony-av" }] },
    { who: "Government and community", events: "Community stages, public events", copy: "Stages for community programmes and public events. GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off, and we donate 5% of the booking.", links: [{ label: "Community event sound", href: "/events/community-event-sound-system" }] },
    { who: "Brand and marketing teams", events: "Launches, roadshows, activations", copy: "A clean stage for product reveals and emcee segments, with skirting in your brand colour on request.", links: [{ label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "Need a stage for a client's event? We build it with our own crew, and can add the screen and sound in the same quote.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  sizing: { eyebrow: "Sizing", title: "Which stage size do I need?", intro: "It depends on what happens on stage: a speaker at a lectern needs far less than a band or a dance item. Send us your programme and we'll recommend a size.", placeholder: "3–4 rows from Jovin's job list, e.g. \"[size, height] for [event type], [venue type]\". Only stages PixelPro has actually built." },
  priceFactors: [
    ["Stage size", "A small speaking platform", "A full performance stage, up to 32 m² or bigger through partners"],
    ["Height", "A low platform", "A higher stage, with more steps"],
    ["Skirting", "Standard black skirting", "Custom skirting colours"],
    ["Safety extras", "A low stage with steps", "Guardrails for higher stages"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Add-ons", "The stage on its own", "Adding sound, an LED wall or lighting (one quote for all of it)"],
  ],
  jobs: {
    title: "Stages we've built",
    items: [
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-6.jpg", alt: "PixelPro Studios stage", placeholder: "Caption: \"[size, height] stage, [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-7.jpg", alt: "PixelPro Studios stage", placeholder: "Caption: \"[size, height] stage, [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-8.jpg", alt: "PixelPro Studios stage", placeholder: "Caption: \"[size, height] stage, [venue type], [N] guests\". No client names." },
    ],
  },
  typicalSetup: { title: "What a 300-guest dinner and dance stage usually looks like", placeholder: "From the job list: stage size · height · skirting · steps · crew · build time. One line under it: \"Based on [N] of our D&D jobs. No client named.\"" },
  includedTitle: "You don't have to touch a thing",
  included: [
    "We plan the stage size and height with you",
    "We deliver and build the stage before your guests arrive",
    "Skirting fitted all around",
    "Steps for speakers, performers and winners",
    "Planned together with the screen and sound if you book them",
    "We dismantle and pack everything away after",
  ],
  addOns: [
    { label: "LED wall", copy: "A screen behind the stage for slides, videos and branding", href: "/mockup/led-walls" },
    { label: "Sound", copy: "Speakers, wireless and headset mics, and an engineer", href: "/mockup/sound-system-rental" },
    { label: "Photo and video", copy: "Event photography, highlight films and social clips", href: "/services/photography" },
  ],
  quote: { title: "Get your stage quote", checklist: ["Event date", "Venue", "Number of guests", "What happens on stage", "Stage size (if you know it)", "Preferred height", "Skirting colour", "Need a screen or sound too?"] },
  faqTitle: "Stage rental questions",
  faqs: [
    { question: "How much does stage rental cost?", answer: "We quote per event, because the price depends on the stage size and height, skirting, any safety extras like guardrails, and venue access and timing. Send us your brief and we'll reply with a setup and a quote." },
    { question: "How big can the stage be?", answer: "Up to 32 m² from our own stock, built from 2 m × 1 m sections. For larger stages, we bring in more through our partners." },
    { question: "How high is the stage?", answer: "The height is adjustable from 60 cm to 100 cm, depending on your room and what happens on stage." },
    { question: "Do you provide steps and guardrails?", answer: "Steps come with the stage. Guardrails aren't included as standard, but we can arrange them when your stage needs them." },
    { question: "Can the skirting match our theme?", answer: "Black skirting is standard. We can arrange other colours on request." },
    { question: "I'm not technical. What do I need to do?", answer: "Tell us your programme and the venue. We plan the size and height, build it before your guests arrive and pack it away after." },
    { question: "Can you supply the stage, screen and sound together?", answer: "Yes. One team plans the stage, LED wall and sound together, so you get one quote and one person to call." },
    { question: "How far in advance should I book?", answer: "We recommend booking at least two to four weeks ahead for standard events. If you need urgent support, feel free to reach out — we respond fast." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
    { question: "Do you cover all of Singapore?", answer: "Yes, island-wide. We deliver, build, and dismantle the stage after your event." },
  ],
  related: [
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "Dinner and dance AV", href: "/events/dinner-and-dance-av" },
    { label: "Prize giving ceremony AV", href: "/events/prize-giving-ceremony-av" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
