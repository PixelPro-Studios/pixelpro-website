// MOCKUP by Rankr (9 Nov 2026). Event page, review only (noindex). Facts from deepagent clients/pixelpro/PRODUCT-BIBLE.md only.
// Keyword: "dinner and dance av package singapore" (page one 5/5 weak, untargeted; serp_events.md 9 Nov). Peak season Dec–Feb.
// Buyer words from bible §8b (Reddit): D&D, company dinner, pax, fuss free, first time organising, lucky draw, MC, GOH.
import type { Metadata } from "next";
import EventPage, { type EventContent } from "../../_template/EventPage";

export const metadata: Metadata = {
  title: "Dinner and Dance AV Singapore | One Crew",
  description: "Dinner and dance AV in Singapore: sound, an LED wall, a stage and a crew to run them, for company D&Ds and annual dinners of any size. No minimum booking.",
  robots: { index: false, follow: false },
};

const c: EventContent = {
  waText: "Hi PixelPro, I'd like a quote for our dinner and dance. Date: , Venue: , Pax: ",
  eyebrow: "Company D&Ds · annual dinners",
  h1: "Dinner and Dance AV in Singapore",
  intro: "Dinner and dance AV for your company D&D or annual dinner: sound for the MC and speeches, an LED wall for videos and the lucky draw, and a stage for the performances, all set up and run by our crew.",
  heroImage: "/events-hero/events_dinner-and-dance-av.webp",
  heroAlt: "Dinner and dance AV in Singapore: a ballroom D&D with an LED wall, stage and sound by PixelPro",
  painsTitle: "Why D&D organisers get stressed",
  pains: [
    { worry: "\"I got arrowed to organise it and I'm not technical.\"", fix: "Send us your run sheet. We plan the sound, screen and stage, set it up and run it, so you can host instead of fixing cables." },
    { worry: "Too many vendors to chase.", fix: "Sound, LED wall, stage, photo and video from one team, with emcees and performers through our partners. One quote, one contact." },
    { worry: "The video or the mic fails in front of the boss.", fix: "We run through every slide and video and sound check every mic on setup day, with spare panels and backup mics on hand." },
  ],
  reviewsFirst: ["f eli", "Gwendolyn Anne David", "Ng Sherelle"],
  pitch: {
    title: "One crew for the whole night",
    paragraphs: [
      "A D&D runs for hours: the welcome, the GOH speech, dinner, performances, games, the lucky draw and the dance floor. The sound, the screen and the stage all have to work together for each part.",
      "We plan the setup around your programme and your venue, bring the equipment, test it before guests arrive and stay to run it until the last song. Small events are welcome: there's no minimum booking.",
    ],
  },
  moments: {
    title: "What we set up for each part of the night",
    intro: "Every D&D is different. Send us your run sheet and we'll match the setup to it.",
    items: [
      ["Guests arrive", "Background music and your welcome slide or theme video on the LED wall."],
      ["MC and GOH speech", "Wireless handheld or headset mics for the MC, and a mic for the speaker, sound checked on setup day."],
      ["Performances", "Mics for singers and a stage so every table can see. Tell us early if there's a live band."],
      ["Games and lucky draw", "Your graphics and videos on the LED wall on cue, and a walk-up mic for the winners."],
      ["Dance floor", "Music through the full sound system. A DJ can be arranged through our partners."],
      ["Pack-down", "We pack everything away after the last guest leaves."],
    ],
  },
  typicalSetup: {
    title: "A typical D&D setup",
    placeholder: "From Jovin's job list (bible §10): pax · venue type · LED wall size · speakers and mics · stage size · crew on site · setup time. One line under it: \"Based on [N] of our D&D jobs. No client named.\" Also answers the Reddit question \"30 pax company dinner, what's the smallest setup?\" (bible §8b Q1). Leave out if no D&D job is confirmed.",
  },
  coreTitle: "Built to run your D&D from start to finish",
  timeline: {
    title: "When to book your D&D",
    intro: "Book as soon as your venue is fixed: year-end and Chinese New Year dates fill up first.",
    items: [
      ["Once the venue is fixed", "Send us your date, venue and pax. LED walls and peak dates should be booked earlier than the usual two to four weeks."],
      ["Two to four weeks before", "Share your run sheet, performances and the slides and videos you want on screen."],
      ["The setup day", "We build, run through every slide and sound check every mic before guests arrive."],
    ],
  },
  priceFactors: [
    ["Pax and room size", "A function room or restaurant for a small team", "A ballroom for several hundred pax"],
    ["Screen", "A projector and screen", "An LED wall sized for the back tables"],
    ["Entertainment", "Speeches and recorded music", "A live band, several acts or a DJ"],
    ["Stage", "No stage, or a small platform", "A larger stage with steps and skirting"],
    ["How long the night runs", "A short programme", "A long night, or a tight setup slot at the venue"],
    ["Add-ons", "Sound only", "Adding photography, videography, an emcee or a photo booth (one quote for all of it)"],
  ],
  photos: {
    title: "Dinners and stages we've run",
    items: [
      { img: "/services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg", alt: "Ballroom dinner with an LED wall by PixelPro Studios", placeholder: "Caption: \"[LED size, sound], [venue type], [N] pax\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-3.jpg", alt: "Band performing on a lit stage with an LED wall, production by PixelPro Studios", placeholder: "Caption: \"[stage, sound, LED], [venue type]\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-10.jpg", alt: "PixelPro Studios sound system at an event", placeholder: "Caption: \"[speakers, mics], [venue type], [N] pax\". No client names." },
    ],
  },
  included: [
    "A setup planned around your run sheet and venue",
    "Delivery, setup and testing before guests arrive",
    "Your videos, slides and lucky-draw graphics run on cue",
    "Wireless mics for the MC, speakers and winners",
    "Crew on site for the whole night",
    "Pack-down after the last guest leaves",
  ],
  quote: {
    title: "Get your D&D quote",
    checklist: ["Event date and timing", "Venue", "Number of pax", "Your run sheet", "Performances or a live band?", "LED wall or projector?", "Stage needed?", "Need an emcee, DJ, photographer or photo booth?"],
  },
  faqTitle: "Dinner and dance AV questions",
  faqs: [
    { question: "How is PixelPro different from the venue's in-house AV?", answer: "The venue's own setup can be enough for a short speech. For a full D&D with performances, videos and a lucky draw, we bring the sound, LED wall and stage together and run them with our own crew. We can also work with the venue's AV team on the day." },
    { question: "How much does AV for a dinner and dance cost?", answer: "We quote per event, because the price depends on your pax and room, the screen, the entertainment, the stage and how long the night runs. There's no minimum booking, so small company dinners are welcome." },
    { question: "It's my first time organising a D&D. What do I need to do?", answer: "Send us your date, venue, pax and a rough run sheet. We'll recommend a setup, then build, test and run it on the day. You don't need to know anything technical." },
    { question: "Can you put our lucky draw on the screen?", answer: "Yes. Send us your lucky-draw graphics and videos and we run them on the LED wall on cue, with a walk-up mic for the winners." },
    { question: "Can you arrange an emcee, DJ or band?", answer: "Yes, through our partners. We arrange emcees, DJs and live bands to suit your event and coordinate them with the sound and screen." },
    { question: "What if something goes wrong during the event?", answer: "Our crew is on site the whole time with spare LED panels and backup mics. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
  ],
  related: [
    { label: "Chinese New Year event AV", href: "/mockup/events/cny-event-av" },
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
