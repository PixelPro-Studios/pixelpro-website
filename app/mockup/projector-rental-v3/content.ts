// MOCKUP by Rankr (26 Nov 2026). Projector and screen rental in Design 2, on the service template (_v3/ServiceV3.tsx),
// laid out like the LED and AV pages Jovin approved on 25 Nov, so his "same feedback as LED Wall Rental" applies up front
// (subhead + two intro lines, Why choose, a write-up per project, Complete ... & Technical Support, support block, Our Process
// without the 50% booking, his pricing write-up, rental days in the quote message, "dismantling").
// Jovin's own words: the hero line and the options intro are his AV-page "Projector & Screen Rental" card (16 Nov doc); the
// LED-or-projector lines are his LED page copy. Equipment list and story: PixelPro's own old AV-page projector copy (Abel's
// 6 Nov port, screens checked with Lukas). Projects: his "Changi Simei Ukelele Night Website Copy" (Drive) and the Tampines
// Boulevard screening photos (Drive; hero is IMG_2114, the photo he picked for the AV card on 25 Nov).
// Left out on purpose (voice guide): projector brand and model, the largest screen size, how many projectors they own, client names.
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

const J = "/portfolio-jobs/";
export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for a projector and screen (from your projector rental page).\nDate: \nVenue: \nEvent name & type: \nNumber of rental days: \nNumber of guests: \nIndoor or outdoor: \nWhat we'll show (slides, videos): "),
  eyebrow: "Projector rental · Singapore",
  h1: "Projector & Screen Rental in Singapore",
  subhead: "High-Brightness Projection Solutions for Every Event",
  intro: "We provide projection and screen solutions for presentations, seminars, conferences, exhibitions and screenings.",
  intro2: "From projector and screen setup to alignment, testing and on-site technical support, PixelPro Studios delivers complete projection solutions tailored to your venue and event requirements.",
  hero: { img: "/services-hero/projector-rental_tampines-movie-screening.webp", alt: "Projector and screen rental in Singapore: a large PixelPro screen and projector at a packed community movie screening in Tampines", pos: "50% 45%" },
  seeWorkLabel: "See our projector work",
  why: {
    title: "Why choose PixelPro Studios?",
    items: [
      { title: "Bright, Clear Projection", copy: "From compact meeting-room setups to large screens for halls and outdoor screenings, we match the projector brightness and screen size to your venue lighting and audience, so every seat can read the slides." },
      { title: "Complete Event AV Solutions", copy: "Beyond projection, we provide LED walls, professional sound systems, staging, lighting and media production services. Consolidate your event's technical requirements with one experienced AV partner for better coordination and a smooth production experience." },
      { title: "Experienced Technical Crew", copy: "Our crew manages delivery, installation, alignment and focus, then tests your laptop, slides and videos with you before guests arrive, with on-site support available throughout the programme." },
      { title: "Reliable & Professional Service", copy: "Trusted by corporate organisations, educational institutions, government agencies and event organisers, PixelPro Studios is committed to reliable equipment, responsive communication and professional event execution." },
    ],
  },
  work: {
    title: "Screens we've set up for events",
    showLines: true,
    projects: [
      { img: J + "projector-rental_movie-screening-crowd.webp", alt: "Families seated on mats watching a community movie screening on a PixelPro projector screen in Tampines", tag: "Community · Movie screening", spec: ["Fast-fold screen", "Projector and speakers"], title: "A community movie screening in Tampines", line: "Provided a fast-fold screen, a high-brightness projector and speakers for a community movie night in Tampines. Families filled the space on mats and chairs, with a clear picture and sound from the front rows to the back." },
      { img: J + "projector-rental_two-120-inch-screens-community-club.webp", alt: "Song lyrics and chords on a 120-inch PixelPro screen beside the stage at a community club ukulele night", tag: "Community · Multi-purpose hall", spec: ["2 × 120-inch fast-fold screens", "2 × 5,000-lumen projectors"], title: "A ukulele sing-along with two screens", line: "Installed two 120-inch fast-fold projection screens with two high-brightness 5,000-lumen projectors for a community ukulele night, so residents seated across the multi-purpose hall could follow the lyrics and chords. Our team also supplied and ran the sound, and handled delivery, setup, testing and dismantling." },
      { img: J + "sound-system-rental_community-club-hall-full-house.webp", alt: "A full community club hall with PixelPro projector screens on either side of the stage", spec: ["Screens either side of the stage"], title: "Screens placed for every row", line: "The same hall from the back: one screen on each side of the stage, placed so every row had a clear view of the lyrics during the sing-along." },
      { img: J + "projector-rental_screen-and-speakers-setup.webp", alt: "A PixelPro fast-fold screen, projectors on their flight case and speakers set up before a movie screening", spec: ["Set up and tested early"], title: "Ready before the audience arrives", line: "The Tampines screening before the audience arrived: screen, projector and speakers set up, aligned and tested ahead of the start time." },
    ],
  },
  story: {
    title: "Bright, reliable visuals for every environment.",
    paragraphs: [
      "Whether it is a corporate presentation, a training session, a product showcase or an outdoor movie screening, our projectors and screens keep your visuals sharp, bright and easy to see.",
      "Every setup is planned for clarity and visibility in your venue's lighting. For brightly lit halls and function rooms, our high-brightness and laser projectors keep slides readable, and for bright outdoor settings we'll recommend an LED wall instead.",
      "Our experienced team handles the details, including lens adjustment, alignment, keystone correction, cable routing and testing, delivering a clear, reliable picture from start to finish.",
    ],
  },
  included: {
    title: "Complete Projector Rental & Technical Support",
    subtitle: "From Planning to Post-Event Dismantling",
    intro: "Every projector and screen rental is supported by our experienced crew to ensure professional installation, a clear picture and a smooth event experience.",
    items: [
      "Pre-event consultation and venue assessment, where required",
      "Projector and screen matched to your room, lighting and audience",
      "Delivery, installation, alignment and focus",
      "Your laptop, slides and videos tested with you before the event",
      "HDMI, audio and signal management",
      "Backup projection equipment on hand",
      "On-site technical support during your programme, where required",
      "Post-event dismantling and equipment removal",
    ],
    more: { title: "More Than Just Projection", body: "Complete your event production with our additional services, including LED walls, professional sound systems, staging, lighting, photography, videography and live video production." },
  },
  supportBlock: {
    title: "Dedicated Support Throughout Your Event",
    body: "Our crew tests the projector, the screen and your presentation before your guests arrive, and coordinates with your programme and venue team on the day. Where on-site technical support is included, our team remains available to respond promptly to any issues and manages the post-event dismantling.",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "Corporate Events", events: "Town halls, seminars, AGMs", copy: "From town halls, seminars and AGMs to training sessions and product showcases, we provide projectors and screens sized for your room, so every seat can read the slides. Your laptop and videos are tested before the programme starts, with technical support on site.", links: [{ label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" }] },
      { tab: "Schools", who: "Schools & Educational Institutions", events: "Ceremonies, briefings, assemblies", copy: "Supporting school ceremonies, briefings, assemblies and performances with projection and screens planned for your hall. We regularly work with MOE schools, and as a GeBIZ-registered vendor listed on GeBIZ Mall, we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing.", links: [{ label: "School sound system rental", href: "/mockup/events/school-sound-system-rental" }] },
      { tab: "Government", who: "Government & Community Events", events: "Movie nights, community events", copy: "Supporting community movie screenings, sing-along nights and public events with large screens, projection and sound. GeBIZ registered and bizSAFE Level 3 certified. Registered charities and NPOs get 10% off.", links: [{ label: "Our charity promotion", href: "/promotions/promotion-charity-singapore-led-walls-event/" }] },
      { tab: "Brands", who: "Brand Activations & Exhibitions", events: "Exhibitions, roadshows, launches", copy: "Projection for exhibition booths, product launches and roadshows, with short-throw options where space is tight. For bright mall atriums, we'll recommend an LED wall for a clearer picture.", links: [{ label: "LED wall rental", href: "/mockup/led-walls-v3" }] },
      { tab: "Agencies", who: "Event Agencies & Organisers", events: "Technical production partner", copy: "A reliable technical production partner for event agencies and professional organisers. We provide integrated projection, LED wall, sound and lighting services, backed by experienced crews and smooth project coordination.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
    ],
  },
  compare: {
    title: "Projector & Screen Options",
    paragraphs: [
      "Our team can recommend suitable projection equipment based on venue lighting, screen dimensions, viewing distance and audience requirements.",
      "For bright rooms, mall atriums and outdoor events in daylight, an LED wall gives a clearer picture. As a provider of both solutions, PixelPro Studios can recommend the most suitable display system for your event.",
    ],
    link: { label: "LED wall rental", href: "/mockup/led-walls-v3" },
    points: [
      ["High-Brightness Projectors", "Projectors of 5,000 lumens and above for seminars, halls and function rooms, and laser projectors for big rooms and night screenings."],
      ["Short-Throw & Ultra-Short-Throw", "Projectors that sit close to the screen, for small rooms and tight spaces where nobody should walk through the picture."],
      ["Large-Format & Fast-Fold Screens", "Fabric and fast-fold screens in a range of sizes, from meeting rooms to halls and outdoor movie nights."],
      ["Signal & Backup Equipment", "HDMI, audio and signal management handled by our team, with backup projection equipment on hand."],
    ],
  },
  steps: {
    title: "Our Process: From Enquiry to Event Execution",
    items: [
      ["Enquiry & Requirements", "Share your event date, venue, audience size and what you'll be showing."],
      ["Consultation & Planning", "We assess the venue and lighting, and recommend a suitable projector and screen size."],
      ["Quotation & Confirmation", "Receive a customised quotation detailing the equipment and services. Confirm your booking in accordance with the agreed payment terms."],
      ["Installation & Testing", "Our crew delivers, sets up, aligns and tests the projector, screen and your presentation ahead of your event."],
      ["Event Support & Dismantling", "Our team supports the event where required and manages the post-event dismantling."],
    ],
  },
  reviews: ["Jasmine Chye", "Tan Hee Pheng", "Candy Mak"],
  pricing: {
    title: "Pricing Factor | What Affects the Quotation",
    intro: "Competitive Rental Rates, Tailored to Your Event. At PixelPro Studios, we believe professional projection should be accessible without compromising on image quality or service reliability.",
    more: [
      "Our rental packages are customised according to your screen size, venue lighting, number of rental days, venue requirements and technical support needs.",
      "Whether you're planning a small corporate function or a large-scale production, we work with you to recommend a practical and cost-effective solution.",
    ],
    rows: [
      ["Screen size", "A standard screen for a meeting room or seminar", "A large-format screen, or several screens"],
      ["Room brightness", "A dim room: a standard projector is enough", "A bright hall or outdoors: a laser projector, or an LED wall"],
      ["Number of screens", "One screen", "Extra screens so the back of the room can see"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["Add-ons", "Projector and screen on their own", "Adding sound, a stage or lighting (still one quotation)"],
    ],
    footer: "Share your event details with our team for a customised quotation with a clear breakdown of the equipment, installation and technical services required.",
  },
  quote: {
    title: "Request a Projector Rental Quotation",
    intro: "Give us a call or drop us a WhatsApp message! Our WhatsApp is available 24/7, and we'll get back to you as soon as we can. For urgent enquiries, feel free to give us a call directly.",
    checklist: ["Event date", "Venue", "Number of rental days", "Number of guests", "Indoor or outdoor", "How bright the room is", "What you'll show: slides, videos", "Need sound too?"],
  },
  faqTitle: "Projector rental questions",
  faqs: [
    { q: "How much does projector rental cost?", a: "We quote per event, because the price depends on the screen size, how bright the room is, how many screens you need, the number of rental days, and venue access and timing. Send us your event details and we'll reply with a setup and a quotation." },
    { q: "Which projector and screen do I need?", a: "It depends on your room size, how bright it is and how far back your guests sit. Share your venue details and our team will recommend a suitable projector and screen size." },
    { q: "Will a projector work in a bright room?", a: "Our high-brightness and laser projectors handle lit halls well. For very bright venues, mall atriums or daylight outdoors, an LED wall gives a clearer picture, and we'll tell you if that's the better choice." },
    { q: "LED wall or projector: which should I choose?", a: "Both offer distinct advantages depending on your venue, audience and budget. LED walls deliver bright, vibrant visuals and are particularly effective for large stages, high-ambient-light environments and outdoor events. Projectors remain a practical and cost-effective alternative for smaller events and venues with controlled lighting.", link: { label: "LED wall rental", href: "/mockup/led-walls-v3" } },
    { q: "Do you have short-throw projectors?", a: "Yes. Short-throw and ultra-short-throw projectors sit close to the screen, which helps in small rooms and stops people casting shadows on the picture." },
    { q: "Can you do an outdoor movie screening?", a: "Yes. A large screen with a high-brightness projector and outdoor sound works well once it's dark. Tell us the venue and the expected crowd, and we'll recommend the screen size." },
    { q: "I'm not technical. What do I need to do?", a: "Send us your slides and videos, and bring your laptop early if you're presenting from it. We set up, align and test everything with you before guests arrive, and manage the dismantling after your event." },
    { q: "What if something goes wrong during the event?", a: "We carry backup projection equipment, and where on-site technical support is included, our team responds promptly to any issue." },
    { q: "Can you supply the projector, screen and sound together?", a: "Yes. Our AV team takes care of everything from projection and LED walls to sound and staging, so there's just one team to liaise with, one quotation and one payment to settle.", link: { label: "AV rental", href: "/mockup/av-systems-v3" } },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
    { q: "Do you cover all of Singapore?", a: "Yes, island-wide. We deliver and set up the projector and screen, and manage the dismantling after your event." },
  ],
};
