// MOCKUP by Rankr (9 Nov 2026). Event page, review only (noindex). Facts from deepagent clients/pixelpro/PRODUCT-BIBLE.md only.
// Keyword: "sound system rental for school" + "av rental for school" (high-leverage: one school = repeat jobs; page one untargeted,
// REVIEW-compact-keywords.md decision 3). Widens the planned "school-hall-sound-system" page. Persona: school event coordinator (bible §6).
import type { Metadata } from "next";
import EventPage, { type EventContent } from "../../_template/EventPage";

export const metadata: Metadata = {
  title: "Sound System Rental for Schools Singapore | GeBIZ",
  description: "Sound system rental for schools in Singapore: speech days, concerts, CCA shows and graduations, quoted on GeBIZ and run with your hall's own vendor.",
  robots: { index: false, follow: false },
};

const c: EventContent = {
  waText: "Hi PixelPro, I'd like a quote for a school event. Date: , School/venue: , Event: ",
  eyebrow: "Speech days · concerts · CCA shows · graduations",
  h1: "Sound System Rental for Schools in Singapore",
  intro: "Sound system rental for schools, plus LED walls, projectors and stages when you need them: we quote through GeBIZ, work with your hall's own vendor, and run the sound on the day, so the teacher-in-charge can focus on the programme.",
  heroImage: "/events-hero/events_school-sound-system-rental.webp",
  heroAlt: "Sound system rental for schools in Singapore: a school band performing with mics and speakers by PixelPro",
  painsTitle: "Why school events are harder than they look",
  pains: [
    { worry: "Procurement and paperwork.", fix: "We're a GeBIZ registered supplier and quote within 1 day to 1 week, with the documents your school needs." },
    { worry: "The hall already has a vendor.", fix: "We liaise with your hall's vendor or technician so everything works together on the day." },
    { worry: "A fixed budget.", fix: "We size the setup to what the event needs, not more. One MOE reviewer found our pricing significantly lower than the other vendors." },
  ],
  reviewsFirst: ["Chloe Lim", "Tan Hee Pheng", "Candy Mak"],
  pitch: {
    title: "We already work with MOE schools",
    paragraphs: [
      "School events follow SOPs, run on a fixed budget and can't fail in front of parents and the guest of honour. We plan around all three: a GeBIZ quotation, a setup sized for your hall, and an engineer on site who sound checks every mic before the students walk in.",
      "Most school events start with sound. When you need more, the same team brings an LED wall or projector for slides and videos, a stage for performances, and photos or video of the day.",
    ],
  },
  moments: {
    title: "What we set up for each school event",
    intro: "Tell us the event, the hall and the programme.",
    items: [
      ["Speech day and prize giving", "A lectern mic for the principal and guest of honour, handhelds for the emcee, and slides with the winners' names on screen."],
      ["Concerts and CCA shows", "Mics for choirs, bands and ensembles, a mixer with enough inputs for a full band, and a stage if the hall needs one."],
      ["Graduation", "Mics for speeches and the name reading, slides on screen, and photography or videography of the ceremony."],
      ["Outdoor events", "Rain-protected speakers and an outdoor LED wall for sports days, carnivals and open-air shows."],
      ["Rehearsal", "A full rehearsal on request, so students practise with the real mics."],
      ["Pack-down", "We pack everything away after the event."],
    ],
  },
  typicalSetup: {
    title: "A typical school hall setup",
    placeholder: "From Jovin's job list (bible §10): event type · school hall size · audience · speakers and mics · screen · crew on site · setup time. One line under it: \"Based on [N] of our school jobs. No school named.\" Leave out if no school job is confirmed.",
  },
  coreTitle: "Built for school halls, auditoriums and fields",
  timeline: {
    title: "When to book a school event",
    intro: "Procurement takes time, so start early.",
    items: [
      ["When the date is set", "Send us the date, hall and programme. We'll reply with a quote, through GeBIZ if needed, within 1 day to 1 week."],
      ["Two to four weeks before", "Confirm the booking, and share the programme, number of mics and any slides or videos."],
      ["The setup day", "We build, sound check every mic and run through your slides before the students arrive."],
    ],
  },
  priceFactors: [
    ["Hall size and audience", "A classroom or small hall", "An auditorium, large hall or field"],
    ["Programme", "Speeches only", "A concert with choirs, bands and many mics"],
    ["Screen", "The hall's own screen, or a projector", "An LED wall"],
    ["Stage", "The hall's own stage", "A stage platform built for the event"],
    ["Event length", "A morning assembly", "A full-day event, or several days"],
    ["Add-ons", "Sound only", "Adding photography or videography of the event (one quote for all of it)"],
  ],
  photos: {
    title: "School concerts and ceremonies we've supported",
    items: [
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-4.jpg", alt: "School band performing with mics set up by PixelPro Studios", placeholder: "Caption: \"[mics, speakers], school hall\". No school named." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-5.jpg", alt: "Outdoor school band performance with sound by PixelPro Studios", placeholder: "Caption: \"[mics, speakers], outdoor\". No school named." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-5.jpg", alt: "Orchestra concert on stage with a screen, by PixelPro Studios", placeholder: "Caption: \"[sound, screen, stage], auditorium\". No school named." },
    ],
  },
  included: [
    "A GeBIZ quotation if your school needs one",
    "A setup planned for your hall and programme",
    "Liaising with your hall's vendor or technician",
    "Delivery, setup and a sound check before students arrive",
    "A sound engineer on site for the whole event",
    "Pack-down after the event",
  ],
  quote: {
    title: "Get your school event quote",
    checklist: ["Event date and timing", "School hall or venue", "Audience size", "Event type and programme", "Number of mics", "Screen or stage needed?", "Photo or video coverage?", "GeBIZ quotation needed?"],
  },
  faqTitle: "School sound system questions",
  faqs: [
    { question: "How is PixelPro different from the hall's own sound system?", answer: "A hall's built-in system can be enough for an assembly. For a concert, speech day or graduation, you may need more mics, better coverage or a band setup. We bring that, and we work with the hall's own vendor so the two fit together." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies and institutional events. Quotes take 1 day to 1 week, including GeBIZ." },
    { question: "How much does sound system rental for a school event cost?", answer: "We quote per event, because the price depends on the hall, the programme, the number of mics, any screen or stage and how long the event runs. There's no minimum booking." },
    { question: "Can you handle a school concert with a band and choir?", answer: "Yes. Our digital mixers and stagebox handle larger input counts, with mics for instruments, singers and the emcee." },
    { question: "Can the students rehearse with your setup?", answer: "Yes, a full rehearsal is available on request. By default, we sound check every mic and run through your slides on setup day." },
    { question: "Do you also provide photography and videography for school events?", answer: "Yes. The same team can photograph or film your speech day, concert or graduation." },
  ],
  related: [
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "Stage platform rental", href: "/mockup/stage-rental" },
    { label: "Projector rental", href: "/mockup/projector-rental" },
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Event AV planning", href: "/mockup/event-av-planning" },
    { label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" },
  ],
};

export default function Page() {
  return <EventPage c={c} />;
}
