// MOCKUP by Rankr (18 Nov 2026). Page content for the Chinese New Year event page, Design 2 (./page.tsx).
// Ported from the Design 1 CNY page (events/cny-event-av), brought in line with the PixelPro writing rules:
// tear-down not pack-down, no partners, "lo hei". Chinese New Year 2027 falls on 6 February.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { type Project, waLink } from "../_v2/data";

const CNY_PROJECTS: Project[] = [
  {
    img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-6.jpg",
    alt: "SUTD Chinese Orchestra on stage in front of an LED wall, sound by PixelPro Studios",
    title: "A Chinese orchestra concert",
    spec: ["LED wall", "Stage monitors", "Sound"],
    line: "The SUTD Chinese Orchestra on stage, with an LED wall, stage monitors and sound.",
  },
  {
    img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-2.jpg",
    alt: "Chinese ensemble playing with instrument mics and stage lighting by PixelPro Studios",
    title: "A Chinese ensemble performance",
    spec: ["Instrument mics", "Stage lighting", "Sound"],
    line: "A Chinese ensemble with instrument mics and stage lighting.",
  },
  {
    img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg",
    alt: "A guzheng performer at an event arranged by PixelPro Studios",
    title: "A guzheng performance",
    spec: ["Performer", "Sound"],
    line: "A guzheng performer for a reception programme.",
  },
];

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for our Chinese New Year event (from your CNY event AV page).\nDate: \nVenue: \nNumber of guests: \nEvent name & type: \nLED wall or stage needed: \nNeed operator on-site: Yes/No"),
  eyebrow: "Chinese New Year event AV · Singapore",
  h1: "Chinese New Year Event AV in Singapore",
  intro: "Chinese New Year event AV for your company dinner, lo hei or spring reception: sound for the toast and speeches, an LED wall for the lucky draw, and a stage for performances, set up and run by our team.",
  hero: { img: "/events-hero/events_cny-event-av.webp", alt: "Chinese New Year event AV in Singapore: a banquet hall with an LED wall and stage set up by PixelPro" },
  seeWorkLabel: "See our event work",
  work: { title: "Banquets and Chinese performances we've supported", projects: CNY_PROJECTS },
  included: {
    title: "Everything Your CNY Programme Needs",
    items: [
      "A setup planned around your run sheet",
      "Delivery, setup and testing before guests arrive",
      "Your slides, videos and lucky-draw graphics run on cue",
      "Wireless mics for the emcee, speakers and winners",
      "Technicians on standby throughout",
      "Tear-down after the last guest leaves",
    ],
  },
  packages: {
    title: "Festive Packages",
    intro: "Three sound and lighting packages for Chinese New Year, at a festive price.",
    note: "Get 10% off additional AV equipment rentals with any festive package. The discount excludes manpower, transport, setup and tear-down, overtime, PE and LEW endorsements and other third-party services, cannot be combined with other offers and is subject to equipment availability.",
    items: [
      { name: "Festive Essentials", price: "S$888", was: "S$1,088", best: "Speeches, lo hei and background music", includes: ["Two 15-inch full-range speakers with stands and skirting", "Two microphones of your choice: wireless, rostrum or lavalier", "16-channel digital mixer", "A sound engineer for 3 hours", "Transport, setup and tear-down"] },
      { name: "Festive Plus", price: "S$1,888", was: "S$2,188", best: "A full dinner programme with stage lighting", includes: ["Four 15-inch full-range speakers with stands and skirting", "Four microphones of your choice", "16-channel digital mixer", "Four RGBAW PAR lights with T-stands", "Lighting controller", "A sound engineer and a lighting engineer for 3 hours", "Transport, setup and tear-down"] },
      { name: "Festive Premium", price: "S$2,888", was: "S$3,288", best: "Performances, a band and a big room", includes: ["Four 15-inch full-range speakers and an 18-inch subwoofer", "Six microphones of your choice, with an antenna distribution system for the wireless mics", "16-channel digital mixer", "Six RGBAW PAR lights and two moving heads", "A lighting console for the moving heads and PAR lights", "A sound engineer and a lighting engineer for 3 hours", "Transport, setup and tear-down"] },
    ],
  },
  buyers: {
    title: "Planned around your night",
    items: [
      { tab: "Company dinner", who: "Company CNY Dinners", events: "Dinner and dances, annual dinners", copy: "A long programme in one room: the guest of honour's speech, the lo hei, performances, dinner, then the lucky draw. We plan the sound, LED wall and stage around your run sheet and stay until the last prize is drawn.", links: [{ label: "LED wall rental", href: "/mockup/led-walls-v3/" }, { label: "Stage rental", href: "/mockup/stage-rental-v3/" }] },
      { tab: "Lo hei", who: "Lo Hei Lunches", events: "Office lo hei, team lunches", copy: "Wireless mics for the emcee and the toast leader, and speakers placed so every table hears the toast, not just the front.", links: [] },
      { tab: "Spring reception", who: "Spring Receptions", events: "Client and community receptions", copy: "Background music, your welcome slides on the LED wall and a mic for the welcome address, all set up and tested before guests arrive.", links: [] },
      { tab: "Performances", who: "Chinese Performances", events: "Orchestras, ensembles, lion dance", copy: "Mics for singers and musicians, and a stage so the back tables can see. A live band needs more inputs, so tell us early.", links: [{ label: "Sound system rental", href: "/mockup/sound-system-rental" }] },
    ],
  },
  reviews: ["Jasmine Chye", "f eli", "Candy Mak"],
  pricing: {
    intro: "We quote per event. These are the things that move the price.",
    rows: [
      ["Guests and room size", "A function room for a team lunch", "A ballroom for several hundred guests: more speakers and a bigger screen"],
      ["Screen", "A projector and screen, or no screen", "An LED wall sized for the back tables"],
      ["Performances", "Speeches and recorded music", "A live band or several acts with their own mics"],
      ["Stage", "No stage, or a small platform", "A larger stage with steps and skirting"],
      ["Programme length and timing", "A short lunch programme", "A long dinner, or a tight setup slot at the venue"],
      ["Add-ons", "Sound only", "Adding photography, videography or an emcee (one quotation for all of it)"],
    ],
    footer: "Customised quotations with clear, competitive pricing.",
  },
  quote: { title: "Request a CNY Event AV Quotation", checklist: ["Date", "Venue", "Number of guests", "Run sheet", "LED wall or stage"] },
  faqTitle: "Chinese New Year event AV questions",
  faqs: [
    { q: "What do you set up for each part of the night?", a: "Send us your run sheet and we'll match the sound, screen and stage to every part of it:", list: ["Guests arrive: background music and your welcome slide on the LED wall", "Guest of honour's speech: a lectern or handheld mic, sound-checked on setup day", "Lo hei: wireless mics for the emcee and the toast leader, so every table joins in together", "Performances: mics for singers and musicians, and a stage the back tables can see", "Lucky draw: your graphics and winners on the LED wall, plus a walk-up mic", "Tear-down: we take everything down after the last guest leaves"] },
    { q: "How early should we book for Chinese New Year?", a: "Chinese New Year 2027 falls on 6 February, and company dinners and lo hei sessions run in the weeks around it. Book as soon as your date and venue are fixed, earlier than the usual two to four weeks, especially if you need an LED wall." },
    { q: "How is this different from the hotel's in-house AV?", a: "For a short speech in a small room, the venue's own setup may be enough. For a full programme with a lo hei, performances and a lucky draw, we bring the LED wall, stage and sound together and run them with our team. We can also work alongside the venue's AV team on the day." },
    { q: "How much does AV for a CNY dinner cost?", a: "We quote per event, because the price depends on your guest count and room, the screen, any live performances, the stage and how long the programme runs. Send us your details and we'll reply with a setup and a quotation." },
    { q: "Can you show our lucky draw on the screen?", a: "Yes. Send us your lucky-draw graphics and videos and we run them on the LED wall on cue, with a walk-up mic for the winners." },
    { q: "Can you arrange an emcee or performers?", a: "Yes. Tell us your programme and we'll suggest emcees and performers to suit it, coordinated with the sound and screen." },
    { q: "What if something goes wrong during the dinner?", a: "Our technicians stay on standby throughout, and we carry spare LED panels and backup mics." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
};
