// MOCKUP by Rankr (25 Nov 2026). Sound system rental in Design 2, on the service template (_v3/ServiceV3.tsx), template sections only.
// Wording: Jovin's own sound lines where they fit (home Sound tab, 23 Nov; his AV-page "Audio System Rental" card, 16 Nov doc),
// the rest written to the voice guide (deepagent clients/pixelpro/WRITING-RULES.md) from the product bible (F2, §8c, §8d) and the
// Design 1 sound page (../sound-system-rental/page.tsx). Removed from Design 1: line arrays and in-ear monitors, "through our partners",
// brand names, mic and speaker counts, "pack away", GeBIZ "quote through", "teacher-in-charge", pain-quote cards.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for a sound system (from your sound system rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of guests: \nSpeeches, music or a live band: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "Sound system rental · Singapore",
  h1: "Sound System Rental in Singapore",
  intro: "Sound system rental in Singapore, tailored to your event's scale, venue and requirements. We provide quality speakers, microphones, digital mixing systems and experienced sound engineers to ensure every word and performance is heard clearly.",
  hero: { img: "/services-hero/services_sound-system-rental.webp", alt: "Sound system rental in Singapore: PixelPro speakers and mics at an event" },
  seeWorkLabel: "See our sound work",
  work: {
    title: "Sound we've run",
    projects: [
      { img: "/portfolio-jobs/event-production_sound-engineer-marina-barrage.webp", alt: "PixelPro sound engineer on site at Marina Barrage for the National Day 2026 celebrations", tag: "Government · Outdoor", spec: ["Sound covering over 100 m", "Subwoofer and digital mixer"], title: "National Day 2026 celebrations at Marina Barrage", line: "" },
      { img: "/portfolio-live-music/sound-system-rental_mixing-desk-sound-engineer.webp", alt: "Sound system rental in Singapore: a PixelPro sound engineer at the mixing desk during a live music show", tag: "Live music · Convention centre", spec: ["Speakers and stage monitors", "Wireless mics and a digital mixer"], title: "A record show with live bands", line: "" },
      { img: "/portfolio-jobs/sound-system-rental_community-club-hall-full-house.webp", alt: "A full community club hall with PixelPro speakers and screens", tag: "Community · Club hall", spec: ["Live band sound", "Stage monitors"], title: "A full-house sing-along night", line: "" },
      { img: "/portfolio-jobs/school-sound-system-rental_outdoor-orientation-speakers.webp", alt: "PixelPro outdoor speakers set up around a fountain plaza for a school orientation", tag: "School · Outdoor", spec: ["Speakers around the space", "Permits and LEW handled"], title: "A school orientation at a fountain plaza", line: "" },
    ],
  },
  included: {
    title: "Complete Sound System Rental & Technical Support",
    intro: "Every setup is planned, tuned and tested by our sound engineers. We work with you on the programme, so speeches stay clear and music sounds even from the front table to the back row.",
    items: [
      "We plan the system around your room, guest count and programme",
      "Delivery, setup and a sound check before your guests arrive",
      "Wireless handheld and headset mics for speakers, panels and Q&A",
      "Digital mixers and stage monitors for live bands",
      "A sound engineer runs the sound, where on-site technical support is included",
      "Safety checks on cables and power",
      "Tear-down and removal after your event",
    ],
    support: "We test every mic and speaker in the room before doors open, and keep backup mics on hand. Where on-site technical support is included, our sound engineer stays on site to adjust levels as the room fills and respond promptly to any technical issue.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Town halls, dinner and dances", copy: "Headset mics for presenters, handhelds for Q&A and the lucky draw, and our sound engineer running it all, so you can focus on hosting.", links: [{ label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" }, { label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Speech days, concerts", copy: "Clear sound for speech days and school concerts, and we can work with your hall's own vendor. We regularly work with MOE schools, and as a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "Public events, community programmes", copy: "Clear sound for public events and community programmes, including the National Day 2026 celebrations at Marina Barrage. GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, mall activations", copy: "Sound for roadshow booths and mall atriums, so your emcee and product demos are heard over the crowd.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "Running the event for a client? We work with you as your sound team, or rent you the equipment on its own if you have your own technician.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  reviews: ["Gwendolyn Anne David", "Ng Sherelle", "Chloe Lim"],
  pricing: {
    intro: "Your quotation depends on the factors below, and we'll recommend a practical, cost-effective sound setup for your event.",
    rows: [
      ["Number of guests and room size", "A small room or function room", "A ballroom, hall or outdoor field: more speakers and subwoofers"],
      ["Speeches or live music", "Speeches and background music", "A live band: more inputs, monitors and mixing"],
      ["Number of mics", "A few handhelds", "Panels, headsets for every presenter, instrument mics"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Technical support", "Equipment only", "A sound engineer running the sound during your event"],
    ],
    footer: "Customised quotations with clear, competitive pricing.",
  },
  quote: { title: "Request a Sound System Rental Quotation", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "Number of rental days", "Speeches, music, or a live band", "How many mics you need", "Need an operator on site?"] },
  faqTitle: "Sound system rental questions",
  faqs: [
    { q: "How much does sound system rental cost?", a: "We quote per event, because the price depends on your guest count and room, whether it's speeches or live music, how many mics you need, the number of rental days and venue access. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "How much sound do I need?", a: "It depends on your guest count, the room, and whether it's speeches or live music. Speeches need speakers, handheld or rostrum mics and a mixer. Panels need more wireless mics, kept clear with an antenna system. Live bands need instrument mics, stage monitors and subwoofers. Big outdoor spaces need speakers spread around the space, not only at the front. Send us your venue, guest count and programme and we'll recommend a setup." },
    { q: "I'm not technical. What do I need to do?", a: "Tell us your programme: who speaks when, any music or performances, and how many mics you need. Our sound engineer sets up, sound-checks and runs it with you on the day." },
    { q: "Can I rent just the speakers?", a: "Yes. Equipment-only rental is available at a fixed equipment rate. Most organisers add our sound engineer, who sets up, sound-checks and runs it on the day." },
    { q: "Can you handle a live band?", a: "Yes. Our digital mixers and stagebox handle larger input counts for bands, with instrument mics, stage monitors and wireless mics for singers and hosts." },
    { q: "What if something goes wrong in the middle of the event?", a: "We test every mic and speaker before doors open and keep backup mics on hand. Where on-site technical support is included, our sound engineer stays on site and responds promptly to any technical issue." },
    { q: "Can you set up sound outdoors?", a: "Yes. Our speakers are rain-protected, and we spread them around the space so the sound reaches everyone. LEW and PE endorsements and permits are handled by us where required." },
    { q: "Can you work with the venue's own AV team?", a: "Yes. We can liaise with the venue's vendor or technician so everything works together on the day." },
    { q: "How far in advance should I book?", a: "At least two to four weeks ahead for standard events, and earlier for peak seasons. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
    { q: "Do you cover all of Singapore?", a: "Yes, island-wide. We deliver, set up and sound-check, and handle the tear-down after your event." },
  ],
};
