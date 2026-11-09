// MOCKUP by Rankr (9 Nov 2026). Event page, review only (noindex). Facts from deepagent clients/pixelpro/PRODUCT-BIBLE.md only.
// Keyword: "town hall sound system rental" (page one 5/5 weak: Carousell, Facebook, Instagram; serp_events.md 9 Nov).
// Absorbs "agm av setup" (info SERP, REVIEW-compact-keywords.md). Livestream only as compact, up to 4 cameras (bible F9, §9).
import type { Metadata } from "next";
import EventPage, { type EventContent } from "../../_template/EventPage";

export const metadata: Metadata = {
  title: "Town Hall Sound System Rental Singapore | Q&A Mics",
  description: "Town hall sound system rental in Singapore: headset mics for presenters, handhelds for Q&A, slides on screen and a sound engineer on site throughout.",
  robots: { index: false, follow: false },
};

const c: EventContent = {
  waText: "Hi PixelPro, I'd like a quote for a town hall sound system. Date: , Venue: , Attendees: ",
  eyebrow: "Town halls · AGMs · company meetings",
  h1: "Town Hall Sound System Rental in Singapore",
  intro: "Town hall sound system rental with a sound engineer on site: headset mics for your presenters, handheld mics for the Q&A, and speakers sized for your room, so everyone hears the CEO and every question from the floor.",
  heroImage: "/events-hero/events_town-hall-sound-system.webp",
  heroAlt: "Town hall sound system rental in Singapore: a fireside chat with mics and slides on screen, sound by PixelPro",
  painsTitle: "Where a town hall usually goes wrong",
  pains: [
    { worry: "The Q&A is silent at the back.", fix: "Handheld mics passed to the floor, and an engineer who switches each one on at the right moment, so every question is heard." },
    { worry: "The presenter's mic cuts out.", fix: "Headset mics for every presenter, all sound checked on setup day, with backup mics ready." },
    { worry: "Half the team is joining online.", fix: "A compact livestream with up to four cameras, so remote staff see and hear the same session." },
  ],
  reviewsFirst: ["f eli", "Ng Sherelle", "Jasmine Chye"],
  pitch: {
    title: "Clear sound first, then everything around it",
    paragraphs: [
      "A town hall lives or dies on the sound: if people can't hear the update or the questions, nothing else matters. Our sound engineer sets up, tests every mic and runs the levels for the whole session.",
      "Around the sound, we can add an LED wall or projector for your slides, a stage so the speakers are seen, a compact livestream for staff who join online, and photos or a recording for internal comms. One quote, one crew.",
    ],
  },
  moments: {
    title: "What we set up for each part of the session",
    intro: "Send us the agenda and how many people speak, and we'll match the mics and screens to it.",
    items: [
      ["Walk-in", "Background music and your title slide on screen."],
      ["Leadership update", "Headset mics for presenters, and slides on the LED wall or projector, every slide run through on setup day."],
      ["Panel or fireside chat", "A mic for each panellist, so nobody has to share."],
      ["Q&A from the floor", "Handheld mics passed around the room, switched on by our engineer as each person speaks."],
      ["Remote staff", "A compact livestream (up to four cameras) or a recording for those who can't attend."],
      ["Pack-down", "We pack everything away after the session."],
    ],
  },
  typicalSetup: {
    title: "A typical setup for a 300-person town hall",
    placeholder: "From Jovin's job list (bible §10): attendees · venue type · speakers · headset and handheld mics · screen · crew on site · setup time. One line under it: \"Based on [N] of our town hall jobs. No client named.\" Leave out if no town hall job is confirmed.",
  },
  coreTitle: "Built to make every update heard and seen",
  priceFactors: [
    ["Attendees and room size", "A meeting room or small hall", "An auditorium or ballroom: more speakers"],
    ["Number of mics", "One presenter and a couple of Q&A mics", "A panel, several presenters and many Q&A mics"],
    ["Screen", "The venue's own screen, or a projector", "An LED wall"],
    ["Remote staff", "In-room only", "A livestream or recording"],
    ["Session length and timing", "A one to two-hour session", "A full-day meeting, or a tight setup window"],
    ["Add-ons", "Sound only", "Adding a stage, photography or videography (one quote for all of it)"],
  ],
  photos: {
    title: "Talks, panels and meetings we've run",
    items: [
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-7.jpg", alt: "Fireside chat with handheld mics and slides on screen, sound by PixelPro Studios", placeholder: "Caption: \"[mics, screen], [venue type], [N] attendees\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-2.jpg", alt: "Panel discussion on stage with mics for each speaker, by PixelPro Studios", placeholder: "Caption: \"[mics, stage, screen], [venue type], [N] attendees\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-6.jpg", alt: "Emcee on stage with a headset mic and slides on screen, by PixelPro Studios", placeholder: "Caption: \"[mics, screen], [venue type]\". No client names." },
    ],
  },
  included: [
    "A sound plan for your room and number of speakers",
    "Delivery, setup and a sound check before doors open",
    "Headset mics for presenters, handhelds for the Q&A",
    "A sound engineer running the levels for the whole session",
    "Backup mics on hand",
    "Pack-down after the session",
  ],
  quote: {
    title: "Get your town hall quote",
    checklist: ["Date and timing", "Venue", "Number of attendees", "How many presenters and panellists", "Q&A from the floor?", "Slides on an LED wall or projector?", "Staff joining online?", "Photos or a recording?"],
  },
  faqTitle: "Town hall sound system questions",
  faqs: [
    { question: "How is PixelPro different from using the venue's own sound system?", answer: "A venue system can be enough for one speaker in a small room. For a town hall with several presenters, a panel and Q&A from the floor, we bring the mics and speakers for your room and an engineer who runs them for the whole session. We can also work with the venue's AV team." },
    { question: "How much does a town hall sound system cost?", answer: "We quote per event, because the price depends on the room, the number of mics, the screen, whether staff join online and how long the session runs. Send us your agenda and we'll reply with a setup and a quote." },
    { question: "How many mics do we need for the Q&A?", answer: "It depends on the room. A small room may need one or two handhelds; a large hall needs more, so runners can reach the floor quickly. Tell us your room and attendee count and we'll recommend a number." },
    { question: "Can staff join the town hall online?", answer: "Yes. We run compact livestreams with up to four cameras, so remote staff see the presenters and slides. For large broadcast productions, we'll tell you honestly that it's outside our compact setup." },
    { question: "Can you handle an AGM as well?", answer: "Yes. AGMs need the same things as a town hall: clear mics for the chair and speakers, mics for shareholder questions and slides on screen." },
    { question: "What if a mic fails during the session?", answer: "Our engineer is on site with backup mics. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
  ],
  related: [
    { label: "Conference AV rental", href: "/mockup/events/conference-av-rental" },
    { label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" },
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Projector rental", href: "/mockup/projector-rental" },
    { label: "Event AV planning", href: "/mockup/event-av-planning" },
  ],
};

export default function Page() {
  return <EventPage c={c} />;
}
