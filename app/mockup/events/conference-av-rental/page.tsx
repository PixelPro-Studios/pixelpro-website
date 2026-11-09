// MOCKUP by Rankr (9 Nov 2026). Event page, review only (noindex). Facts from deepagent clients/pixelpro/PRODUCT-BIBLE.md only.
// Keyword: "conference av rental singapore" (was "tough" on 5 Nov; open under Compact Keywords rules: avrental.com.sg ranks
// without "conference" in its title or URL; REVIEW-compact-keywords.md decision 1). Personas: corporate coordinators + event agencies.
import type { Metadata } from "next";
import EventPage, { type EventContent } from "../../_template/EventPage";

export const metadata: Metadata = {
  title: "Conference AV Rental Singapore | Crew Included",
  description: "Conference AV rental in Singapore: sound, LED walls and projectors for the plenary, mics for every panel, breakout-room screens and a compact livestream.",
  robots: { index: false, follow: false },
};

const c: EventContent = {
  waText: "Hi PixelPro, I'd like a quote for conference AV. Dates: , Venue: , Attendees: , Breakout rooms: ",
  eyebrow: "Conferences · seminars · forums",
  h1: "Conference AV Rental in Singapore",
  intro: "Conference AV rental for your plenary, panels and breakout rooms: clear sound for every speaker, an LED wall or projector for the slides, and a crew that keeps each session on time.",
  heroImage: "/events-hero/events_conference-av-rental.webp",
  heroAlt: "Conference AV rental in Singapore: a speaker with a handheld mic at a PixelPro-supported conference",
  painsTitle: "Where conference AV usually slips",
  pains: [
    { worry: "Speaker changeovers eat into the schedule.", fix: "Every speaker's slides run through and every mic sound checked on setup day, so handovers are quick." },
    { worry: "Panellists end up sharing one mic.", fix: "A mic for each panellist, and an engineer switching them on as each person speaks." },
    { worry: "Breakout rooms get forgotten.", fix: "Projectors and screens for each breakout room, set up and tested along with the main hall." },
  ],
  reviewsFirst: ["Jasmine Chye", "f eli", "Gwendolyn Anne David"],
  pitch: {
    title: "The main hall, the panels and the breakouts, from one team",
    paragraphs: [
      "A conference is several events at once: a plenary with keynotes, panels with four or five voices, and breakout rooms running in parallel. Each needs its own sound and screen, and they all have to stay on schedule.",
      "We plan the AV room by room, bring the sound, LED wall, projectors and stage, and run them with our own crew. For delegates who can't attend, we offer a compact livestream with up to four cameras. Running the conference for a client? We can be your AV partner, or rent you the equipment on its own.",
    ],
  },
  moments: {
    title: "What we set up for each part of the conference",
    intro: "Send us the programme and the rooms, and we'll plan the AV for each one.",
    items: [
      ["Registration and walk-in", "Background music and your holding slide on screen."],
      ["Keynotes", "Headset or lectern mics, slides on the LED wall, and a live camera on the speaker for large rooms."],
      ["Panels", "A mic for each panellist, plus handhelds for questions from the floor."],
      ["Breakout rooms", "A projector and screen with a small sound setup in each room."],
      ["Remote delegates", "A compact livestream with up to four cameras, or a recording of the sessions."],
      ["Pack-down", "We pack everything away after the last session."],
    ],
  },
  typicalSetup: {
    title: "A typical conference setup",
    placeholder: "From Jovin's job list (bible §10): attendees · venue type · main screen · speakers and mics · breakout rooms · crew on site · setup time. One line under it: \"Based on [N] of our conference jobs. No client named.\" Leave out if no conference job is confirmed.",
  },
  coreTitle: "Built to keep every session on time",
  priceFactors: [
    ["Attendees and main hall size", "A seminar room", "A ballroom or auditorium for several hundred delegates"],
    ["Breakout rooms", "One room", "Several rooms running at the same time"],
    ["Main screen", "A projector and screen", "An LED wall with a live camera on the speaker"],
    ["Number of mics", "A few speakers", "Panels with a mic each, plus Q&A mics"],
    ["Days", "A half-day seminar", "A multi-day conference"],
    ["Add-ons", "Sound and screen only", "Adding a livestream, recording, photography or a stage (one quote for all of it)"],
  ],
  photos: {
    title: "Talks and panels we've run",
    items: [
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-8.jpg", alt: "Speaker with a handheld mic at a conference supported by PixelPro Studios", placeholder: "Caption: \"[mics, screen], [venue type], [N] delegates\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-2.jpg", alt: "Panel on stage with a mic for each speaker, by PixelPro Studios", placeholder: "Caption: \"[mics, stage, screen], [venue type]\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-6.jpg", alt: "Host on stage with slides on screen, by PixelPro Studios", placeholder: "Caption: \"[mics, screen], [venue type]\". No client names." },
    ],
  },
  included: [
    "An AV plan for every room in your programme",
    "Delivery, setup and testing before doors open",
    "Every speaker's slides run through on setup day",
    "Mics for keynotes, panels and Q&A",
    "Crew on site for every session",
    "Pack-down after the last session",
  ],
  quote: {
    title: "Get your conference AV quote",
    checklist: ["Dates and session times", "Venue", "Number of delegates", "Number of breakout rooms", "Keynotes, panels, Q&A", "LED wall or projector?", "Livestream or recording?", "Photography needed?"],
  },
  faqTitle: "Conference AV rental questions",
  faqs: [
    { question: "How is PixelPro different from the venue's in-house AV?", answer: "The venue's setup may cover one room. For a conference with a plenary, panels and breakout rooms, we plan the AV for every room and run it with our own crew. We can also work with the venue's AV team, or rent equipment on its own to an event agency that has its own technician." },
    { question: "How much does conference AV rental cost?", answer: "We quote per event, because the price depends on the main hall, the number of breakout rooms, the screens, the mics and how many days it runs. Send us the programme and we'll reply with a setup and a quote." },
    { question: "Can you livestream our conference?", answer: "Yes, as a compact setup with up to four cameras. We're not a large broadcast company, and we'll tell you if your plan needs one." },
    { question: "Do you work with event agencies?", answer: "Yes. We work as the AV and technical production partner for event agencies, with our own crew or as equipment-only rental at a fixed rate." },
    { question: "Can you supply projectors for breakout rooms?", answer: "Yes. We have projectors and screens for smaller rooms, set up and tested along with the main hall." },
    { question: "What if something fails mid-session?", answer: "Our crew stays on site with backup mics and spare LED panels. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
  ],
  related: [
    { label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" },
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "Projector rental", href: "/mockup/projector-rental" },
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Event production", href: "/mockup/event-production" },
    { label: "Event AV planning", href: "/mockup/event-av-planning" },
  ],
};

export default function Page() {
  return <EventPage c={c} />;
}
