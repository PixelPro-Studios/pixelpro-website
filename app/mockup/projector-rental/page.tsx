// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// Story block = PixelPro's existing "Projector and Screen Rental" copy from /services/av-systems, kept word for word
// (only change: screens "100” to 300”" → "100” to 250”", the largest they own, per Lucas 6 Nov).
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "Projector Rental Singapore | Crew Included",
  description: "Projector rental in Singapore with the screen and crew included: set up and run for seminars, town halls, school ceremonies and outdoor movie nights.",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like a quote for a projector and screen. Date: , Venue: , Guests: , Indoor/outdoor: ",
  eyebrow: "Projector and screen rental · Singapore",
  h1: "Projector Rental in Singapore",
  intro: "Projector rental for your seminar, town hall, school ceremony or outdoor movie night, with the screen included. We deliver it, line it up and stay on site, so your slides just work.",
  introRetained: "High Brightness Projection for Corporate Events, Presentations, Outdoor Movie Nights, Exhibitions and Roadshows.",
  seeWorkLabel: "See our projector work",
  heroImages: ["/services-hero/services_projector-rental.webp", "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-5.jpg"],
  heroAlt: "Projector rental in Singapore: an outdoor projection screen on a truss frame",
  pains: [
    { worry: "“The room is bright. Will the slides look washed out?”", fix: "We bring projectors bright enough for lit halls, and very bright laser projectors for big rooms. For really bright venues, we'll tell you if an LED wall is the better choice.", spec: "5,000-lumen projectors · 10,000-lumen laser projectors" },
    { worry: "“There's no space to put the projector.”", fix: "Short-throw and ultra-short-throw projectors sit close to the screen, so nobody walks through the picture.", spec: "Short-throw lenses · ultra-short-throw projector" },
    { worry: "“We need a really big screen.”", fix: "Fast-fold screens from 100 to 250 inches, including one big enough for an outdoor movie night.", spec: "100\" fabric · 120\" and 250\" fast-fold screens" },
    { worry: "“What if my laptop won't connect?”", fix: "We handle the cables, signal and backup equipment, and test your laptop and slides before the event starts.", spec: "HDMI, audio and signal management · backup projection" },
  ],
  reviewsFirst: ["Jasmine Chye"],
  story: {
    eyebrow: "Projector and screen rental",
    title: "Bright, reliable visuals for every environment",
    subtitle: "High Brightness Projection for Corporate Events, Presentations, Outdoor Movie Nights, Exhibitions and Roadshows",
    paragraphs: [
      "We deliver projection setups sized for every type of event. Whether it is a professional corporate presentation, a training session, a product showcase, a wedding montage, or an outdoor movie screening, our projectors and screens ensure your visuals look sharp, bright and immersive.",
      "Every setup is planned to ensure maximum clarity and visibility regardless of venue lighting conditions. For brightly lit halls, shopping malls and outdoor environments, our high-lumen projectors guarantee crisp images that stay readable and impactful from all angles.",
    ],
    listTitle: "We provide a full range of projection equipment, including:",
    list: [
      "High brightness projectors (5000+ lumens)",
      "Short-throw & ultra-short-throw projectors",
      "Large format screens (100” to 250”)",
      "Fast fold projector screens",
      "HDMI, audio and signal management solutions",
      "Backup projection equipment",
    ],
    after: [
      "We support a wide range of event types such as corporate seminars, AGMs, exhibitions, roadshows, school ceremonies, product launches, outdoor screenings and community events. Our team handles delivery, lens adjustment, alignment, keystone correction, cable routing, testing and on-site support.",
      "We combine professional-grade projection systems with a young, detail focused team that ensures your visuals look impressive and run smoothly from start to finish. The result is a polished, reliable presentation that enhances your event and leaves a strong impression on your audience.",
    ],
    image: "/services-av-projector/pixelpro-studios-projector-screen-rental-singapore.jpg",
    imageAlt: "PixelPro Studios projector screen setup",
  },
  buyers: [
    { who: "HR and admin teams", events: "Town halls, seminars, AGMs, training", copy: "Slides that the whole room can read, a laptop that connects first time, and someone on site if anything changes. You present; we handle the screen.", links: [{ label: "Town hall sound", href: "/mockup/events/town-hall-sound-system" }] },
    { who: "Schools", events: "Ceremonies, prize giving, briefings", copy: "We quote through GeBIZ and handle the technical side, so the teacher-in-charge doesn't have to. We already work with MOE schools.", links: [{ label: "Prize giving ceremony AV", href: "/events/prize-giving-ceremony-av" }] },
    { who: "Government and community", events: "Outdoor movie nights, community events", copy: "A 250-inch screen and bright laser projector for outdoor screenings. GeBIZ registered and bizSAFE Level 3. Registered charities and NPOs get 10% off, and we donate 5% of the booking.", links: [{ label: "Outdoor movie screening", href: "/events/outdoor-movie-screening" }] },
    { who: "Brand and marketing teams", events: "Exhibitions, roadshows, launches", copy: "Projection for booths and launches, with short-throw options where space is tight. For bright mall atriums, we'll recommend LED.", links: [{ label: "LED wall rental", href: "/mockup/led-walls" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "Running the event for a client? We can supply and run the projection with our own crew, so you deal with one supplier.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  sizing: { eyebrow: "Sizing", title: "Which projector and screen do I need?", intro: "It depends on the room size, how bright it is, and how far back your guests sit. Send us your venue and guest count and we'll recommend a setup.", placeholder: "3–4 rows from Jovin's job list, e.g. \"[screen size] + [projector], [venue type], about [N] guests\". Only setups PixelPro has actually run." },
  priceFactors: [
    ["Screen size", "A 100 or 120-inch screen", "A 250-inch screen, or several screens"],
    ["Room brightness", "A dim room: a standard projector is enough", "A bright hall or outdoors: a laser projector, or LED"],
    ["Number of screens", "One screen", "Extra screens so the back of the room can see"],
    ["How long the event runs", "A short programme, like a two-hour seminar", "A full day, or several days"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["Add-ons", "Projector and screen on their own", "Adding sound, a stage or a crew member for the whole event"],
  ],
  comparison: {
    eyebrow: "Projector or LED?",
    title: "When a projector is the right choice",
    body: "We rent both, so we'll tell you honestly which one fits. A projector is great value for dim rooms and smaller budgets. For bright rooms, mall atriums and big outdoor stages, an LED wall looks better.",
    link: { label: "Read: LED wall vs projector", href: "/blog/led-wall-vs-projector" },
    cards: [
      ["Choose a projector when", "The room can be dimmed, the budget is tighter, or you need a very large picture for a seminar."],
      ["Choose LED when", "The room is bright, it's outdoors in daylight, or people will walk in front of the screen."],
      ["Outdoor movie at night", "A 250-inch screen with a laser projector works well once it's dark."],
      ["Not sure?", "Send us your venue and guest count and we'll recommend one."],
    ],
  },
  jobs: {
    title: "Screens we've set up",
    items: [
      { img: "/services-av-projector/pixelpro-studios-projector-rental-singapore.jpg", alt: "PixelPro Studios projector setup", placeholder: "Caption: \"[screen size] + [projector], [venue type], [N] guests\". No client names." },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-5.jpg", alt: "PixelPro Studios projection at an event", placeholder: "Caption: \"[screen size] + [projector], [venue type], [N] guests\". No client names." },
      { img: "/services-av-projector/pixelpro-studios-projector-screen-rental-singapore.jpg", alt: "PixelPro Studios projector screen", placeholder: "Caption: \"[screen size] + [projector], [venue type], [N] guests\". No client names." },
    ],
  },
  typicalSetup: { title: "What a 150-guest seminar usually needs", placeholder: "From the job list: guests · venue type · screen size · projector · crew on site · setup time. One line under it: \"Based on [N] of our seminar jobs. No client named.\"" },
  includedTitle: "You don't have to touch a thing",
  included: [
    "We pick the projector and screen for your room and lighting",
    "We deliver, set up, align and focus before your guests arrive",
    "We test your laptop, slides and videos with you",
    "Cables, signal and backup equipment handled",
    "Someone on site for support during the event",
    "We pack everything away after",
  ],
  addOns: [
    { label: "Sound", copy: "Speakers, wireless and headset mics, and an engineer", href: "/mockup/sound-system-rental" },
    { label: "LED wall", copy: "For bright rooms, outdoors in daylight and big stages", href: "/mockup/led-walls" },
    { label: "Stage", copy: "Up to 32 m², 60–100 cm high, with skirting and steps", href: "/mockup/stage-rental" },
  ],
  quote: { title: "Get your projector quote", checklist: ["Event date", "Venue", "Number of guests", "Indoor or outdoor", "How bright the room is", "How long the event runs", "What you'll show: slides, video", "Need sound too?"] },
  faqTitle: "Projector rental questions",
  faqs: [
    { question: "How much does projector rental cost?", answer: "We quote per event, because the price depends on the screen size, how bright the room is, how many screens you need, how long the event runs and venue access. Send us your brief and we'll reply with a setup and a quote." },
    { question: "I'm not technical. What do I need to do?", answer: "Send us your slides and videos, and bring your laptop early if you're presenting from it. We set up, align and test everything with you before guests arrive." },
    { question: "What if something goes wrong in the middle of the event?", answer: "We carry backup projection equipment and have someone on site. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
    { question: "How big a screen can you provide?", answer: "We have 100-inch fabric screens, a 120-inch fast-fold screen (our go-to portable option) and a 250-inch fast-fold screen for large rooms and outdoor screenings." },
    { question: "Will a projector work in a bright room?", answer: "Our high-brightness and laser projectors handle lit halls well. For very bright venues, mall atriums or daylight outdoors, an LED wall gives a clearer picture, and we'll tell you if that's the better choice." },
    { question: "Do you have short-throw projectors?", answer: "Yes. Short-throw and ultra-short-throw projectors sit close to the screen, which helps in small rooms and stops people casting shadows." },
    { question: "Can you do an outdoor movie screening?", answer: "Yes. A 250-inch screen with a laser projector and outdoor sound works well once it's dark. The organiser arranges the screening licence." },
    { question: "How far in advance should I book?", answer: "We recommend booking at least two to four weeks ahead for standard events. If you need urgent support, feel free to reach out — we respond fast." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
    { question: "Do you cover all of Singapore?", answer: "Yes, island-wide. We deliver, set up, support you during the event and pack everything away after." },
  ],
  related: [
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "LED wall vs projector", href: "/blog/led-wall-vs-projector" },
    { label: "Outdoor movie screening", href: "/events/outdoor-movie-screening" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
