// MOCKUP by Rankr (25 Nov 2026, evening). Sound system rental in Design 2, on the service template (_v3/ServiceV3.tsx).
// Built on Abel's 25 Nov draft (facts, FAQs, pricing rows; no line arrays, brand names or mic counts in the copy),
// laid out like the LED and AV pages Jovin approved on 25 Nov, so his "same feedback as LED Wall Rental" applies up front:
// subhead + two intro lines, Why choose PixelPro Studios, a longer write-up per project, "Complete ... Rental & Technical Support",
// his "Reliable Technical Support Throughout Your Event" block, Our Process (no 50% booking), "Pricing Factor | What Affects
// the Quotation" with his pricing write-up, "dismantling" not "tear-down", number of rental days in the quote message.
// Jovin's own words: the intro lines are his AV-page "Audio System Rental" card (16 Nov doc), the story is his home Sound tab
// (23 Nov), the support block is his AV copy; the project lines come from his Drive write-ups (PUB NDP, Side A, Changi Simei
// Ukulele Night, VJC JC1 Orientation). Only National Day is named, as on the LED page.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for a sound system (from your sound system rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of rental days: \nNumber of guests: \nSpeeches, music or a live band: \nIndoor or outdoor: \nNeed operator on-site: Yes/No"),
  eyebrow: "Sound system rental · Singapore",
  h1: "Sound System Rental in Singapore",
  subhead: "Professional Sound Reinforcement Solutions for Every Event",
  intro: "PixelPro Studios provides professional sound reinforcement solutions for corporate events, conferences, live performances, roadshows and public gatherings.",
  intro2: "Our services include loudspeakers, subwoofers, microphones, digital audio mixers and monitoring systems, with experienced sound engineers available for setup and live event operation.",
  // hero photo: PUB NDP folder (IMG_8394), the National Day crowd at Marina Barrage behind PixelPro's mixing case; Jovin asked for NDP first on LED (25 Nov)
  hero: { img: "/services-hero/sound-system-rental_ndp-marina-barrage-crowd.webp", alt: "Sound system rental in Singapore: PixelPro mixing case in front of the National Day 2026 crowd at Marina Barrage", pos: "50% 70%" },
  seeWorkLabel: "See our sound work",
  why: {
    title: "Why choose PixelPro Studios?",
    items: [
      { title: "Clear, Reliable Sound", copy: "From speeches and panel discussions to live bands and outdoor celebrations, our sound systems are planned to deliver clear, even audio across your venue, from the front row to the back." },
      { title: "Complete Event AV Solutions", copy: "Beyond sound systems, we provide LED walls, staging, lighting and media production services. Consolidate your event's technical requirements with one experienced AV partner for better coordination and a smooth production experience." },
      { title: "Experienced Sound Engineers", copy: "Our sound engineers manage system setup, sound checks, live mixing and dismantling. Every microphone and speaker is tested before the event, with on-site technical support available throughout the programme." },
      { title: "Reliable & Professional Service", copy: "Trusted by corporate organisations, educational institutions, government agencies and event organisers, PixelPro Studios is committed to reliable equipment, responsive communication and professional event execution." },
    ],
  },
  work: {
    title: "Sound we've run for events",
    showLines: true,
    projects: [
      { img: "/portfolio-jobs/event-production_sound-engineer-marina-barrage.webp", alt: "PixelPro sound engineer on site at Marina Barrage for the National Day 2026 celebrations", tag: "Government · Outdoor", spec: ["Sound covering over 100 m", "8 speakers and a subwoofer"], title: "National Day 2026 celebrations at Marina Barrage", line: "Delivered a distributed outdoor sound system with eight speakers, a subwoofer and a digital mixer, extending audio coverage across more than 100 metres of Marina Barrage for the National Day celebrations and live parade screening. Advance site visits shaped the setup, and our crew stayed on site to monitor and adjust the system throughout." },
      { img: "/portfolio-live-music/sound-system-rental_mixing-desk-sound-engineer.webp", alt: "Sound system rental in Singapore: a PixelPro sound engineer at the mixing desk during a live music show", tag: "Live music · Convention centre", spec: ["Speakers and stage monitors", "Wireless mics and a digital mixer"], title: "A record show with live performances", line: "Provided full-range speakers, three stage monitors, wireless microphones and a 16-channel digital mixer with a stage box and DI boxes for a vinyl record convention at a convention centre, with our sound engineer running the live performances on the day." },
      { img: "/portfolio-jobs/sound-system-rental_community-club-hall-full-house.webp", alt: "A full community club hall with PixelPro speakers and screens", tag: "Community · Club hall", spec: ["Live band sound", "Stage monitors"], title: "A full-house sing-along night", line: "Balanced acoustic instruments, vocals and accompaniment for a community ukulele sing-along in a multi-purpose hall. Two full-range speakers, two stage monitors, a 16-channel digital mixer and instrument microphones were managed by our sound engineer, alongside two 120-inch projection screens for the sing-along." },
      { img: "/portfolio-jobs/school-sound-system-rental_outdoor-orientation-speakers.webp", alt: "PixelPro outdoor speakers set up around a fountain plaza for a school orientation", tag: "School · Outdoor", spec: ["8 outdoor speakers", "Generator, LEW and permits"], title: "A school orientation at a fountain plaza", line: "Deployed eight outdoor loudspeakers around a circular fountain plaza, so students on every side could hear the music, announcements and school cheers at a junior college orientation finale. We arranged the generator, power distribution, LEW certification and permit support, and coordinated with venue management on installation." },
    ],
  },
  story: {
    title: "Crystal-clear sound for every occasion.",
    paragraphs: [
      "Deliver exceptional audio experiences with professional sound systems tailored to your event's scale, venue and requirements.",
      "From corporate presentations and conferences to live performances and outdoor events, we provide quality speakers, microphones, digital mixing systems and experienced sound engineers to ensure every word and performance is heard clearly.",
      "Every setup is planned around your room, guest count and programme, so speeches stay clear and music sounds even from the front table to the back row.",
    ],
  },
  included: {
    title: "Complete Sound System Rental & Technical Support",
    subtitle: "From Installation to Live Event Operation",
    intro: "Every sound system rental is supported by our experienced technical team to ensure professional installation, clear audio and a smooth event experience.",
    items: [
      "Pre-event technical consultation and venue assessment, where required",
      "A sound system planned around your room, guest count and programme",
      "Delivery, installation and a sound check before your guests arrive",
      "Wireless handheld and headset microphones for speakers, panels and Q&A",
      "Digital mixers, stage monitors and instrument microphones for live performances",
      "Live sound mixing by our sound engineer, where on-site technical support is included",
      "LEW and PE endorsements and permits handled where required",
      "Post-event dismantling and equipment removal",
    ],
    more: { title: "More Than Just Sound", body: "Complete your event production with our additional services, including LED walls, staging and lighting solutions, photography, videography and live video production." },
  },
  supportBlock: {
    title: "Reliable Technical Support Throughout Your Event",
    body: "Our technical team conducts thorough equipment checks, system testing and pre-event preparations to minimise the risk of disruptions. Where on-site technical support is included, our crew remains available to monitor the systems, manage live operations and respond promptly to technical issues.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Town halls, dinner and dances", copy: "From town halls and conferences to dinner and dances and award ceremonies, we provide sound systems for clear speeches, panel discussions, Q&A sessions and entertainment. Headset and handheld microphones, digital mixing and an on-site sound engineer keep your programme running smoothly.", links: [{ label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" }, { label: "Dinner and dance AV", href: "/mockup/events/dinner-and-dance-av" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Speech days, concerts", copy: "Supporting speech days, prize presentations, school concerts and orientation programmes with clear, reliable sound, indoors and outdoors, and we can work alongside your hall's own sound system. We regularly work with MOE schools, and as a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "Public events, community programmes", copy: "Supporting national celebrations, community programmes and public events with sound reinforcement planned for large crowds and outdoor spaces, including the National Day 2026 celebrations at Marina Barrage. GeBIZ registered and bizSAFE Level 3 certified. Registered charities and NPOs get 10% off.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Roadshows", events: "Roadshows, mall activations", copy: "Make sure your emcee, product demos and performances are heard over the crowd at roadshows, mall activations and launches, with sound systems configured for busy public spaces.", links: [{ label: "Roadshow LED screen", href: "/mockup/events/roadshow-led-screen-rental" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "A reliable technical production partner for event agencies and professional organisers. We provide sound engineers and complete audio systems, or equipment-only rental if you have your own technician, alongside LED wall, staging and lighting services.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  steps: {
    title: "Our Process: From Enquiry to Event Execution",
    items: [
      ["Enquiry & Requirements", "Share your event date, venue, guest count and programme: speeches, music or a live band."],
      ["Consultation & Planning", "We assess the venue and recommend a suitable sound system, microphones and manpower."],
      ["Quotation & Confirmation", "Receive a customised quotation detailing the equipment and services. Confirm your booking in accordance with the agreed payment terms."],
      ["Installation & Sound Check", "Our crew delivers, installs and sound-checks the system ahead of your event."],
      ["Live Operation & Dismantling", "Our sound engineer runs the sound during the event, where included, and our team manages the post-event dismantling."],
    ],
  },
  reviews: ["Gwendolyn Anne David", "Ng Sherelle", "Chloe Lim"],
  pricing: {
    title: "Pricing Factor | What Affects the Quotation",
    intro: "Competitive Rental Rates, Tailored to Your Event. At PixelPro Studios, we believe professional sound should be accessible without compromising on equipment quality or service reliability.",
    more: [
      "Our rental packages are customised according to your guest count and room, programme, number of rental days, venue requirements and technical support needs.",
      "Whether you're planning a small corporate function or a large-scale production, we work with you to recommend a practical and cost-effective solution.",
    ],
    rows: [
      ["Number of guests and room size", "A small room or function room", "A ballroom, hall or outdoor field: more speakers and subwoofers"],
      ["Speeches or live music", "Speeches and background music", "A live band: more inputs, monitors and mixing"],
      ["Number of mics", "A few handhelds", "Panels, headsets for every presenter, instrument mics"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Technical support", "Equipment only", "A sound engineer running the sound during your event"],
    ],
    footer: "Share your event details with our team for a customised quotation with a clear breakdown of the equipment, installation and technical services required.",
  },
  quote: {
    title: "Request a Sound System Rental Quotation",
    intro: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.",
    checklist: ["Event date", "Venue", "Number of rental days", "Number of guests", "Indoor or outdoor", "Speeches, music, or a live band", "How many mics you need", "Need an operator on site?"],
  },
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
    { q: "Do you cover all of Singapore?", a: "Yes, island-wide. We deliver, set up and sound-check, and manage the dismantling after your event." },
  ],
};
