// MOCKUP by Rankr (9 Nov 2026). Event page, review only (noindex). Facts from deepagent clients/pixelpro/PRODUCT-BIBLE.md only.
// Keyword: "roadshow led screen rental singapore". Supporting: "roadshow singapore" (140/mo), "pop up event singapore" (70/mo),
// beauty / brand pop-ups (Beauty Fiesta tie-in, details pending from PixelPro). Persona: brand and marketing teams (bible §6).
import type { Metadata } from "next";
import EventPage, { type EventContent } from "../../_template/EventPage";

export const metadata: Metadata = {
  title: "Roadshow LED Screen Rental Singapore | Crew Included",
  description: "Roadshow LED screen rental in Singapore: a bright LED wall, sound for the emcee and demos, set up and torn down by our crew for mall roadshows and pop-ups.",
  robots: { index: false, follow: false },
};

const c: EventContent = {
  waText: "Hi PixelPro, I'd like a quote for a roadshow LED screen. Dates: , Mall/venue: , Indoor or outdoor: ",
  eyebrow: "Mall roadshows · brand pop-ups · activations",
  h1: "Roadshow LED Screen Rental in Singapore",
  intro: "Roadshow LED screen rental for your mall atrium, pop-up or brand activation: a screen bright enough for a sunlit atrium, sound that carries the emcee over the crowd, and a crew that sets up and tears down around the mall's hours.",
  heroImage: "/events-hero/events_roadshow-led-screen-rental.webp",
  heroAlt: "Roadshow LED screen rental in Singapore: an LED wall and sound set up in a mall atrium by PixelPro",
  painsTitle: "Where roadshow screens fall short",
  pains: [
    { worry: "A projector looks washed out in a bright atrium.", fix: "LED walls are brighter and have more contrast than projection, and nobody casts a shadow on them when they walk past." },
    { worry: "Nobody hears the emcee over the mall.", fix: "Speakers and wireless mics set up for the space, so the emcee and product demos carry without blasting the shops next door." },
    { worry: "Too many vendors for one booth.", fix: "Screen, sound, stage, photos and video from one team. Signage and printing can be arranged through our partners." },
  ],
  reviewsFirst: ["Candy Mak", "Reshan Sivasamy", "f eli"],
  pitch: {
    title: "A screen that gets noticed, and content you can use after",
    paragraphs: [
      "A roadshow has seconds to catch a passer-by. A bright LED wall playing your brand video does most of that work; clear sound for the emcee and demos does the rest.",
      "We set up the screen, sound and stage, run them for the day and take them down after. Add photography and videography, including drone footage and same-day highlight edits, and you leave with content for your social channels too.",
    ],
  },
  moments: {
    title: "What we set up for a roadshow or pop-up",
    intro: "Tell us the venue, the dates and what's happening at the booth.",
    items: [
      ["Setup", "We build the LED wall, sound and stage in the slot the mall gives us."],
      ["Brand video loop", "Your videos and graphics playing on the LED wall all day."],
      ["Emcee and stage segments", "Wireless mics for the emcee, games and guest appearances, with a small stage if you need one."],
      ["Product demos", "A headset mic for the demonstrator and a live camera on the product if you add one."],
      ["Content capture", "Event photos, videos, drone footage and same-day highlight edits for your social posts."],
      ["Teardown", "We take everything down after the last day."],
    ],
  },
  typicalSetup: {
    title: "A typical mall atrium setup",
    placeholder: "From Jovin's job list (bible §10): venue type · LED wall size and pitch · speakers and mics · stage · crew on site · setup time. One line under it: \"Based on [N] of our roadshow jobs. No client named.\" Leave out if no roadshow job is confirmed.",
  },
  coreTitle: "Built to make your booth the one people stop at",
  priceFactors: [
    ["Screen size", "A small screen for a booth", "A large LED wall for an atrium stage"],
    ["Indoor or outdoor", "Indoors, in an air-conditioned mall", "Outdoors (outdoor LED is waterproof; speakers are rain-protected)"],
    ["Number of days", "A one-day pop-up", "A multi-day roadshow"],
    ["Stage and sound", "Background music only", "An emcee, games and performances on a stage"],
    ["Venue access", "Easy loading and a roomy setup slot", "No loading bay, or a tight setup window"],
    ["Add-ons", "Screen and sound only", "Adding photo, video, drone footage or same-day edits (one quote for all of it)"],
  ],
  photos: {
    title: "Mall atriums and activations we've set up",
    items: [
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-9.jpg", alt: "LED wall and sound set up in a mall atrium by PixelPro Studios", placeholder: "Caption: \"[LED size, sound], mall atrium\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-3.jpg", alt: "Performance in a mall atrium with speakers by PixelPro Studios", placeholder: "Caption: \"[speakers, mics], mall atrium\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-1.jpg", alt: "Outdoor community event with speakers by PixelPro Studios", placeholder: "Caption: \"[speakers, mics], outdoor\". No client names." },
    ],
  },
  included: [
    "A setup planned for your venue and booth",
    "Delivery, setup and testing in the mall's slot",
    "Your brand videos and graphics running on the screen",
    "Wireless mics for the emcee and demos",
    "Crew on site while the screen is running",
    "Teardown after the last day",
  ],
  quote: {
    title: "Get your roadshow quote",
    checklist: ["Dates and hours", "Mall or venue", "Indoor or outdoor", "Screen size you have in mind", "Emcee, games or performances?", "Stage needed?", "Photo or video coverage?", "Setup window the venue allows"],
  },
  faqTitle: "Roadshow LED screen questions",
  faqs: [
    { question: "How is an LED screen different from a projector at a roadshow?", answer: "An LED wall is brighter, has more contrast, needs no throw distance and doesn't show shadows when people walk in front of it. In a bright mall atrium or outdoors, that's the difference between a screen people notice and one they don't. A projector can still work in a dim indoor space on a smaller budget." },
    { question: "How much does roadshow LED screen rental cost?", answer: "We quote per event, because the price depends on the screen size, indoor or outdoor, the number of days, the sound and stage, and the setup window. Send us your brief and we'll reply with a setup and a quote." },
    { question: "Can you set up outdoors?", answer: "Yes. Our outdoor LED is waterproof and our speakers are rain-protected, so outdoor setups work much like indoor ones." },
    { question: "Do you need special power at the mall?", answer: "Our setups run on the venue's normal power points. We check access and power with the venue before the event." },
    { question: "Can you supply signage and printing for the booth?", answer: "Yes, through our partners. We coordinate signage and printing with the screen, sound and stage, so you still have one contact." },
    { question: "Can you film the roadshow for social media?", answer: "Yes. We offer event photography and videography, including drone footage and same-day highlight edits, from the same team running the screen." },
  ],
  related: [
    { label: "LED wall rental", href: "/mockup/led-walls" },
    { label: "Sound system rental", href: "/mockup/sound-system-rental" },
    { label: "Stage platform rental", href: "/mockup/stage-rental" },
    { label: "Event production", href: "/mockup/event-production" },
    { label: "Videography", href: "/services/videography" },
    { label: "Conference AV rental", href: "/mockup/events/conference-av-rental" },
  ],
};

export default function Page() {
  return <EventPage c={c} />;
}
