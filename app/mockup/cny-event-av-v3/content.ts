// MOCKUP by Rankr (18 Nov 2026, reworked 26 Nov). Chinese New Year event page, Design 2 (./page.tsx).
// 26 Nov: laid out like the LED and AV pages Jovin approved on 25 Nov, so his "same feedback as LED Wall Rental" applies up front
// (subhead + two intro lines, Why choose, a write-up per project, Complete ... & Technical Support, support block, Our Process
// without the 50% booking, his pricing write-up, rental days in the quote message, "dismantling").
// Jovin's own words: intro2 is his CNY promotion copy (23 Nov, live at /promotions/festive-av-packages-singapore/); the packages are his
// "Festive Promotions" sheet (Drive, prices allowed for packages: 16 Nov call); the contingency line is his LED page copy. No client names.
// Chinese New Year 2027 falls on 6 February; the plan wants this page live by early December.
import { FESTIVE_PACKAGES } from "../_v2/festive";
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { type Project, waLink } from "../_v2/data";

const CNY_PROJECTS: Project[] = [
  {
    img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-6.jpg",
    alt: "A university Chinese orchestra on a skirted stage in front of an LED wall, sound by PixelPro Studios",
    tag: "Chinese orchestra · Stage",
    title: "A Chinese orchestra concert",
    spec: ["LED wall", "Stage monitors", "Sound"],
    line: "A university Chinese orchestra performing on a skirted stage in front of an LED wall, with stage monitors and the sound system supplied and run by our team throughout the performance.",
  },
  {
    img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-2.jpg",
    alt: "Chinese ensemble playing with instrument mics and stage lighting by PixelPro Studios",
    title: "A Chinese ensemble performance",
    spec: ["Instrument mics", "Stage lighting", "Sound"],
    line: "A Chinese ensemble performance with microphones on the instruments, stage lighting and sound, set up, sound-checked and run by our team.",
  },
  {
    img: "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg",
    alt: "A guzheng performer at an event arranged by PixelPro Studios",
    title: "A guzheng performance",
    spec: ["Performer", "Sound"],
    line: "A guzheng performer arranged for a reception programme, with the sound set up by our team.",
  },
];

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for our Chinese New Year event (from your CNY event AV page).\nDate: \nVenue: \nEvent name & type: \nNumber of rental days: \nNumber of guests: \nLED wall, stage or lighting needed: \nPackage (if any): "),
  eyebrow: "Chinese New Year event AV · Singapore",
  h1: "Chinese New Year Event AV in Singapore",
  subhead: "Professional Sound, LED Walls & Lighting for Your CNY Celebration",
  intro: "Chinese New Year event AV for your company dinner, lo hei or spring reception: sound for the toast and speeches, an LED wall for the lucky draw, and a stage for performances, set up and run by our team.",
  intro2: "From corporate reunion dinners and festive gatherings to lively lo hei celebrations, our specially curated AV packages start from just S$888, with setup, dismantling and technical support included.",
  hero: { img: "/events-hero/events_cny-event-av.webp", alt: "Chinese New Year event AV in Singapore: a banquet hall with an LED wall and stage set up by PixelPro", pos: "50% 50%" },
  seeWorkLabel: "See our event work",
  why: {
    title: "Why choose PixelPro Studios?",
    items: [
      { title: "Planned Around Your Run Sheet", copy: "The guest of honour's speech, the lo hei, performances and the lucky draw each need something different. We plan the sound, LED wall, stage and lighting around every part of your programme." },
      { title: "Complete Event AV Solutions", copy: "Sound systems, LED walls, staging, lighting, emcees and performers from one experienced AV partner, for better coordination and a smooth celebration from the first speech to the last prize." },
      { title: "Experienced Technical Crew", copy: "Our crew manages delivery, installation, sound checks and live operation. Every setup is tested before your guests arrive, with technicians on standby throughout the programme." },
      { title: "Reliable & Professional Service", copy: "Trusted by corporate organisations, educational institutions, government agencies and event organisers, PixelPro Studios is committed to reliable equipment, responsive communication and professional event execution." },
    ],
  },
  work: { title: "Banquets and Chinese performances we've supported", showLines: true, projects: CNY_PROJECTS },
  story: {
    title: "A celebration that runs on cue.",
    paragraphs: [
      "From the guest of honour's speech and the lo hei toast to performances and the lucky draw, every part of your Chinese New Year programme depends on clear sound, bright visuals and good timing.",
      "Send us your run sheet, venue and guest count, and we'll plan the sound, LED wall, stage and lighting around it, then set up and test everything before your guests arrive.",
      "Our technicians stay on standby throughout the programme, so you can focus on your guests.",
    ],
  },
  included: {
    title: "Complete CNY Event AV & Technical Support",
    subtitle: "From Planning to Post-Event Dismantling",
    intro: "Every Chinese New Year event is supported by our experienced crew to ensure professional installation, reliable operation and a smooth celebration.",
    items: [
      "A setup planned around your run sheet",
      "Delivery, setup and testing before guests arrive",
      "Your slides, videos and lucky-draw graphics run on cue",
      "Wireless mics for the emcee, speakers and winners",
      "Stage lighting for performances, where required",
      "Technicians on standby throughout",
      "Post-event dismantling and equipment removal",
    ],
    more: { title: "More Than Just AV", body: "Complete your celebration with our additional services, including emcees, performers, photography, videography and live video production." },
  },
  packages: FESTIVE_PACKAGES,
  supportBlock: {
    title: "Dedicated Support Throughout Your Event",
    body: "Our technical crew remains on-site to manage sound, playback and lighting through every part of your programme, and to respond promptly to any technical issues. We conduct comprehensive pre-event testing and maintain contingency procedures to minimise disruptions and ensure a smooth celebration.",
  },
  buyers: {
    title: "Planned around your celebration",
    items: [
      { tab: "Company dinner", who: "Company CNY Dinners", events: "Reunion dinners, annual dinners", copy: "A long programme in one room: the guest of honour's speech, the lo hei, performances, dinner, then the lucky draw. We plan the sound, LED wall and stage around your run sheet and stay until the last prize is drawn.", links: [{ label: "LED wall rental", href: "/mockup/led-walls-v3/" }, { label: "Stage rental", href: "/mockup/stage-rental-v3/" }] },
      { tab: "Lo hei", who: "Lo Hei Lunches", events: "Office lo hei, team lunches", copy: "Wireless mics for the emcee and the toast leader, and speakers placed so every table hears the toast, not just the front. Our Festive Essentials package covers most office lo hei sessions.", links: [{ label: "Our CNY promotion", href: "/promotions/festive-av-packages-singapore/" }] },
      { tab: "Spring reception", who: "Spring Receptions", events: "Client and community receptions", copy: "Background music, your welcome slides on the LED wall or a projector screen, and a mic for the welcome address, all set up and tested before guests arrive.", links: [{ label: "Projector rental", href: "/mockup/projector-rental-v3/" }] },
      { tab: "Performances", who: "Chinese Performances", events: "Orchestras, ensembles, lion dance", copy: "Mics for singers and musicians, stage lighting, and a stage so the back tables can see. A live band needs more inputs, so tell us early.", links: [{ label: "Sound system rental", href: "/mockup/sound-system-rental-v3/" }] },
    ],
  },
  steps: {
    title: "Our Process: From Enquiry to Event Execution",
    items: [
      ["Enquiry & Requirements", "Share your event date, venue, guest count and run sheet."],
      ["Consultation & Planning", "We recommend a package or a custom setup for each part of your programme."],
      ["Quotation & Confirmation", "Receive a customised quotation detailing the equipment and services. Confirm your booking in accordance with the agreed payment terms."],
      ["Installation & Testing", "Our crew delivers, sets up and sound-checks everything before your guests arrive."],
      ["Live Operation & Dismantling", "Our technicians run the programme and manage the post-event dismantling."],
    ],
  },
  reviews: ["Jasmine Chye", "f eli", "Candy Mak"],
  pricing: {
    title: "Pricing Factor | What Affects the Quotation",
    intro: "Competitive Rates, Tailored to Your Celebration. Our festive packages cover most company dinners and lo hei sessions at a fixed price.",
    more: [
      "For larger programmes, we customise the quotation according to your guest count, venue, screen and stage requirements, and technical support needs.",
      "Whether you're planning an office lo hei or a ballroom dinner, we work with you to recommend a practical and cost-effective solution.",
    ],
    rows: [
      ["Guests and room size", "A function room for a team lunch", "A ballroom for several hundred guests: more speakers and a bigger screen"],
      ["Screen", "A projector and screen, or no screen", "An LED wall sized for the back tables"],
      ["Performances", "Speeches and recorded music", "A live band or several acts with their own mics"],
      ["Stage", "No stage, or a small platform", "A larger stage with steps and skirting"],
      ["Programme length and timing", "A short lunch programme", "A long dinner, or a tight setup slot at the venue"],
      ["Add-ons", "Sound only", "Adding photography, videography or an emcee (one quotation for all of it)"],
    ],
    footer: "Share your event details with our team for a customised quotation with a clear breakdown of the equipment, installation and technical services required.",
  },
  quote: {
    title: "Request a CNY Event AV Quotation",
    intro: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.",
    checklist: ["Event date", "Venue", "Number of rental days", "Number of guests", "Run sheet", "LED wall, stage or lighting", "Package you're interested in"],
  },
  faqTitle: "Chinese New Year event AV questions",
  faqs: [
    { q: "What do you set up for each part of the night?", a: "Send us your run sheet and we'll match the sound, screen and stage to every part of it:", list: ["Guests arrive: background music and your welcome slide on the LED wall", "Guest of honour's speech: a lectern or handheld mic, sound-checked on setup day", "Lo hei: wireless mics for the emcee and the toast leader, so every table joins in together", "Performances: mics for singers and musicians, and a stage the back tables can see", "Lucky draw: your graphics and winners on the LED wall, plus a walk-up mic", "After the event: we manage the dismantling once the last guest leaves"] },
    { q: "How early should we book for Chinese New Year?", a: "Chinese New Year 2027 falls on 6 February, and company dinners and lo hei sessions run in the weeks around it. Book as soon as your date and venue are fixed, earlier than the usual two to four weeks, especially if you need an LED wall." },
    { q: "What's in the festive packages?", a: "Three sound and lighting packages from S$888: Festive Essentials for speeches, toasts and background music, Festive Plus for a full dinner programme with stage lighting, and Festive Premium for performances, a band and a big room. Each includes a sound engineer, transport, setup and dismantling.", link: { label: "Our CNY promotion", href: "/promotions/festive-av-packages-singapore/" } },
    { q: "How is this different from the hotel's in-house AV?", a: "For a short speech in a small room, the venue's own setup may be enough. For a full programme with a lo hei, performances and a lucky draw, we bring the LED wall, stage and sound together and run them with our team. We can also work alongside the venue's AV team on the day." },
    { q: "How much does AV for a CNY dinner cost?", a: "Our festive packages start from S$888. For larger programmes we quote per event, because the price depends on your guest count and room, the screen, any live performances, the stage and how long the programme runs." },
    { q: "Can you show our lucky draw on the screen?", a: "Yes. Send us your lucky-draw graphics and videos and we run them on the LED wall on cue, with a walk-up mic for the winners." },
    { q: "Can you arrange an emcee or performers?", a: "Yes. Tell us your programme and we'll suggest emcees and performers to suit it, coordinated with the sound and screen." },
    { q: "What if something goes wrong during the dinner?", a: "Our technicians stay on standby throughout. We conduct comprehensive pre-event testing and maintain contingency procedures to minimise disruptions." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
};
