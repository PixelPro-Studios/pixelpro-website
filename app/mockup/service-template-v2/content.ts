// MOCKUP by Rankr. Page content for Service template, used by Design 1 (./page.tsx) and Design 2 (../service-template-v3/page.tsx).
import type { ServiceV2Content } from "../_v2/ServiceV2";
import { waLink } from "../_v2/data";

const J = "/portfolio-jobs/";
export const c: ServiceV2Content = {
  wa: waLink("Hi PixelPro, I'd like a quote for [service] (from your [service] page).\nDate: \nVenue: \n[One line per detail the crew needs]"),
  eyebrow: "[Service] · Singapore",
  h1: "[Service] Rental in Singapore",
  intro: "[Service] rental in Singapore, [who it's for or what it covers]. [One sentence on how PixelPro plans, sets up and runs it.] [One sentence on support on the day.] Keep it to 2–3 sentences and start with the main search phrase.",
  hero: { img: "/services-hero/services_av-systems.webp", alt: "[Service] rental in Singapore: [what the photo shows]" },
  seeWorkLabel: "See our [service] work",
  work: {
    title: "[Service] we've built for events",
    projects: [
      { img: J + "led-wall-rental_6x2-5m-led-wall-pitch-day.webp", alt: "[What the photo shows]", tag: "Featured project", spec: ["[Main spec, e.g. size]", "[Second spec]"], title: "[Job name, no client name]", line: "" },
      { img: J + "conference-av-rental_led-wall-hotel-ballroom-forum.webp", alt: "[What the photo shows]", spec: ["[Main spec]", "[Second spec]"], title: "[Job name: type of event + venue type]", line: "" },
      { img: J + "led-wall-rental_5-5x3m-led-wall-mall-atrium.webp", alt: "[What the photo shows]", spec: ["[Main spec]"], title: "[2 to 5 real jobs. One photo = one still card]", line: "" },
    ],
  },
  setup: {
    label: "Setup",
    title: "[Which size / how much / what do I need?]",
    intro: "[The buying question for this service, answered in 1–2 sentences. Optional slot: leave it out if the service has no setup choice.]",
    columns: [
      { big: "[Spec A]", label: "[Option A]", lines: ["[Who it suits, one sentence.]", "[What makes it different, one sentence.]"] },
      { big: "[Spec B]", label: "[Option B]", lines: ["[Who it suits, one sentence.]", "[What makes it different, one sentence.]"] },
    ],
    picker: { kind: "wall", caption: "Common sizes", options: [[3, 2], [5, 3], [6, 4], [8, 4]], start: 2 },
    sizesLine: "[Common sizes or options in one line. Picker: 'wall' = front view next to a person; 'plan' = top view, e.g. stages.]",
    note: "[Reassurance line, e.g. not sure? Share your venue details and we'll recommend one.]",
  },
  included: {
    title: "Complete [Service] Rental & Technical Support",
    intro: "[One sentence: what every booking comes with.]",
    items: [
      "[Planning: consultation, venue check]",
      "[Delivery and installation]",
      "[Setup, testing, calibration]",
      "[Crew or technician on site]",
      "[Tear-down and removal]",
      "[Permits or approvals handled, if any]",
    ],
    support: "[Optional: one line on technical support during the event.]",
  },
  buyers: {
    title: "Built around your kind of event",
    items: [
      { tab: "Corporate", who: "[Corporate events]", events: "[Event types, e.g. dinner and dances, conferences]", copy: "[1–2 sentences: what this buyer needs and how we deliver it.]", links: [{ label: "[Related event page]", href: "#" }] },
      { tab: "Schools", who: "[Schools & educational institutions]", events: "[Graduations, speech days]", copy: "[1–2 sentences. Mention GeBIZ purchases and MOE where true.]", links: [{ label: "[Related event page]", href: "#" }] },
      { tab: "Government", who: "[Government & community events]", events: "[National celebrations, community events]", copy: "[1–2 sentences. GeBIZ, bizSAFE Level 3, 10% off for registered charities and NPOs.]", links: [{ label: "[Related event page]", href: "#" }] },
      { tab: "Brands", who: "[Brand activations & roadshows]", events: "[Mall roadshows, launches]", copy: "[1–2 sentences.]", links: [{ label: "[Related event page]", href: "#" }] },
      { tab: "Agencies", who: "[Event agencies & organisers]", events: "[Technical production partner]", copy: "[1–2 sentences: we work as your technical team, with our own crew.]", links: [{ label: "Event production", href: "#" }] },
    ],
  },
  reviews: ["Candy Mak", "Ng Sherelle", "Tan Hee Pheng"],
  pricing: {
    intro: "[One sentence: quote-only, the quotation depends on the factors below.] Real prices are never shown; rental days, not hours.",
    rows: [
      ["[Size or quantity]", "[Smaller / fewer]", "[Bigger / more: crew and setup time]"],
      ["[Indoor or outdoor]", "[Indoors]", "[Outdoors: more planning]"],
      ["Number of rental days", "A one-day event", "An event over several days"],
      ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
      ["[Service-specific factor]", "[Costs less when]", "[Costs more when]"],
      ["Add-ons", "[The service on its own]", "[Adding other services (one quotation for all of it)]"],
    ],
    footer: "Customised quotations with clear, competitive pricing.",
  },
  quote: { title: "Request a [Service] Rental Quotation", checklist: ["Event date", "Venue", "Event name and type", "Number of rental days", "[Size or quantity, if known]", "[Indoor or outdoor]", "[Anything else the crew needs]"] },
  faqTitle: "[Service] rental questions",
  faqs: [
    { q: "How much does [service] rental cost?", a: "[Quote per event + the main price factors. Always the first question.]" },
    { q: "[Service-specific question people search for]", a: "[2–3 sentence answer. Comparisons (e.g. LED wall vs projector) go here with a link to the blog post, not as their own section.]", link: { label: "[Read: related blog post]", href: "#" } },
    { q: "How does booking work?", a: "From enquiry to event execution, in five steps:", list: ["Enquiry", "Consultation and planning", "Quotation and confirmation", "Installation and testing", "Live operation and tear-down"] },
    { q: "I'm not technical. What do I need to do?", a: "[What the client sends us; what our team handles.]" },
    { q: "How far ahead should I book?", a: "At least two to four weeks for standard events. We also take urgent requests: our WhatsApp is available 24/7, or give us a call." },
    { q: "Do you provide [service] across Singapore?", a: "[Yes, island-wide + what we do.]" },
    { q: "Are you registered on GeBIZ?", a: "Yes. We are a GeBIZ-registered vendor listed on GeBIZ Mall, and we support purchases through GeBIZ and SAP Ariba, as well as e-invoicing." },
  ],
};
