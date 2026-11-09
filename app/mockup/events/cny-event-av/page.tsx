// MOCKUP by Rankr (9 Nov 2026). Event page, review only (noindex). Facts from deepagent clients/pixelpro/PRODUCT-BIBLE.md only.
// Keyword: "chinese new year event av singapore" (page one 5/5 weak, untargeted; serp_events.md 9 Nov). Seasonal: CNY 2027 = 6 Feb.
import type { Metadata } from "next";
import EventPage, { type EventContent } from "../../_template/EventPage";

export const metadata: Metadata = {
  title: "Chinese New Year Event AV Singapore | One Crew",
  description: "Chinese New Year event AV in Singapore: sound for the lohei and speeches, an LED wall for the lucky draw, a stage for performances, run by one crew.",
  robots: { index: false, follow: false },
};

const c: EventContent = {
  waText: "Hi PixelPro, I'd like a quote for our Chinese New Year event. Date: , Venue: , Guests: ",
  eyebrow: "CNY dinners · lohei · spring receptions",
  h1: "Chinese New Year Event AV in Singapore",
  intro: "Chinese New Year event AV for your company dinner, lohei or spring reception: sound for the toast and speeches, an LED wall for the lucky draw, and a stage for the performances, set up and run by our crew.",
  heroImage: "/events-hero/events_cny-event-av.webp",
  heroAlt: "Chinese New Year event AV in Singapore: a banquet hall with an LED wall and stage set up by PixelPro",
  painsTitle: "Why CNY dinners go wrong on the night",
  pains: [
    { worry: "Nobody hears the lohei.", fix: "Wireless mics for the emcee and whoever leads the toast, and speakers placed so every table hears it, not just the front." },
    { worry: "The lucky draw is too small to read.", fix: "An LED wall big enough for the back tables. Send us your lucky-draw slides and videos and we run them on cue." },
    { worry: "Every vendor is booked in January.", fix: "CNY is peak season. Book early and we hold your date; for urgent requests, WhatsApp us and we reply quickly." },
  ],
  reviewsFirst: ["Gwendolyn Anne David", "f eli", "Jasmine Chye"],
  pitch: {
    title: "Everything the stage needs, from one team",
    paragraphs: [
      "A CNY dinner is a long programme in one room: the guest of honour's speech, the lohei, performances, dinner, then the lucky draw. Each part needs something different from the sound and the screen.",
      "We plan the setup around your programme, bring the sound system, LED wall and stage, test every slide and mic on setup day, and stay on site to run it until the last prize is drawn. Bilingual emcees and cultural performances can be arranged through our partners, so you still deal with one contact.",
    ],
  },
  moments: {
    title: "What we set up for each part of the night",
    intro: "Tell us your run sheet and we'll match the sound, screen and stage to it.",
    items: [
      ["Guests arrive", "Background music through the sound system and your welcome slide or video on the LED wall."],
      ["Guest of honour speech", "A lectern or handheld mic, sound checked on setup day, with the speaker shown on screen if you add a camera."],
      ["Lohei", "Wireless mics for the emcee and the toast leader, so every table can join in at the same time."],
      ["Performances", "Mics for singers and musicians, and a stage so the back tables can see them. A live band needs more inputs; tell us early."],
      ["Lucky draw", "Your lucky-draw graphics and winners' names on the LED wall, plus a walk-up mic for the winners."],
      ["Pack-down", "We pack everything away after the last guest leaves."],
    ],
  },
  typicalSetup: {
    title: "A typical CNY dinner setup",
    placeholder: "From Jovin's CNY examples (bible §10, still to arrive): guests · venue type · LED wall size · speakers and mics · stage size · crew on site · setup time. One line under it: \"Based on [N] of our CNY jobs. No client named.\" Leave this block out if no CNY job is confirmed.",
  },
  coreTitle: "Built to keep your CNY programme running",
  timeline: {
    title: "Book early for CNY",
    intro: "Chinese New Year 2027 falls on 6 February, and company dinners and lohei sessions run before and in the weeks after it.",
    items: [
      ["Now to December", "Confirm your date and venue, and send us your brief. LED walls and peak dates should be booked earlier than the usual two to four weeks."],
      ["Two to four weeks before", "Share your run sheet, number of speakers and performers, and your lucky-draw slides and videos."],
      ["The setup day", "We build, run through every slide on the LED wall and sound check every mic before guests arrive."],
    ],
  },
  priceFactors: [
    ["Guests and room size", "A function room for a team lunch", "A ballroom for several hundred guests: more speakers and a bigger screen"],
    ["Screen", "A projector and screen, or no screen", "An LED wall sized for the back tables"],
    ["Performances", "Speeches and recorded music", "A live band or several acts with their own mics"],
    ["Stage", "No stage, or a small platform", "A larger stage with steps and skirting"],
    ["Programme length and timing", "A short lunch programme", "A long dinner, or a tight setup slot at the venue"],
    ["Add-ons", "Sound only", "Adding photography, videography or an emcee (one quote for all of it)"],
  ],
  photos: {
    title: "Banquets and Chinese performances we've supported",
    items: [
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-1.jpg", alt: "Banquet hall with an LED wall and stage, set up by PixelPro Studios", placeholder: "Caption: \"[LED size, sound], [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-6.jpg", alt: "Chinese orchestra on a stage with an LED wall, sound by PixelPro Studios", placeholder: "Caption: \"[stage, sound, screen], [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-2.jpg", alt: "Chinese ensemble with mics and stage lighting by PixelPro Studios", placeholder: "Caption: \"[mics, speakers], [venue type]\". No client names." },
    ],
  },
  included: [
    "A setup planned around your run sheet",
    "Delivery, setup and testing before guests arrive",
    "Your slides, videos and lucky-draw graphics run on cue",
    "Wireless mics for the emcee, speakers and winners",
    "Crew on site for the whole event",
    "Pack-down after the last guest leaves",
  ],
  quote: {
    title: "Get your CNY event quote",
    checklist: ["Event date and timing", "Venue", "Number of guests", "Your run sheet", "Speeches, performances or a live band", "Do you need an LED wall or stage?", "Lucky draw on screen?", "Need an emcee, photographer or videographer?"],
  },
  faqTitle: "Chinese New Year event AV questions",
  faqs: [
    { question: "How is PixelPro different from the hotel's in-house AV?", answer: "For a short speech in a small room, the venue's own setup may be enough. For a full CNY programme with a lohei, performances and a lucky draw, we bring the LED wall, stage and sound together and run them with our own crew. We can also work with the venue's own AV team on the day." },
    { question: "How much does AV for a CNY dinner cost?", answer: "We quote per event, because the price depends on your guest count and room, the screen, any live performances, the stage and how long the programme runs. There's no minimum booking. Send us your brief and we'll reply with a setup and a quote." },
    { question: "How early should we book for Chinese New Year?", answer: "We recommend at least two to four weeks ahead for standard events, and earlier for LED walls and peak season. CNY is peak season, so book as soon as your date and venue are fixed." },
    { question: "Can you show our lucky draw on the screen?", answer: "Yes. Send us your lucky-draw graphics and videos and we run them on the LED wall on cue. We can also set up a walk-up mic for the winners." },
    { question: "Can you arrange an emcee or performers?", answer: "Yes, through our partners. We arrange bilingual emcees and performers to suit your event, and coordinate them with the sound and screen so you have one contact." },
    { question: "What if something goes wrong during the dinner?", answer: "Our crew stays on site the whole time and we carry spare LED panels and backup mics. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
  ],
  related: [
    { label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" },
    { label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" },
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "Stage platform rental", href: "/mockup/stage-rental" },
    { label: "Event production", href: "/mockup/event-production" },
  ],
};

export default function Page() {
  return <EventPage c={c} />;
}
