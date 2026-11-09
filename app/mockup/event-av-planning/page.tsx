// MOCKUP by Rankr (6 Nov 2026). Local review only: do not commit or deploy.
// New page. Story block and steps = PixelPro's own "The Pre-Event AV Checklist Every Organiser Needs" post
// (content/blog/event-av-checklist.mdx), kept in their words, plus the 30-minute guarantee.
import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "../_template/ServicePage";

export const metadata: Metadata = {
  title: "Event AV Planning Singapore | Tested Before Doors Open",
  description: "Event AV planning in Singapore: the brief, a site visit, a plan for every mic and screen, and every slide tested before doors open, with spares on hand.",
  robots: { index: false, follow: false },
};

const c: ServiceContent = {
  waText: "Hi PixelPro, I'd like help planning the AV for my event. Date: , Venue: , Guests: , Event type: ",
  eyebrow: "Event AV planning · Singapore",
  h1: "Event AV Planning in Singapore",
  intro: "Event AV planning is the work before your guests arrive that stops things going wrong: the brief, a site visit where needed, a plan for every mic and screen, every slide tested on the screen and a sound check on setup day, with spares on hand. A full rehearsal is available on request.",
  introRetained: "Great events feel effortless for the audience. Behind the scenes, that calm usually comes from a clear AV plan locked in well before doors open.",
  seeWorkLabel: "See our work",
  heroImages: ["/services-hero/services_event-av-planning.webp", "/photos/our-reliability-guarantee.jpg"],
  heroAlt: "Event AV planning in Singapore: an emcee on stage with a tested mic and slides on screen",
  pains: [
    { worry: "“We only found out about the venue's problems on the day.”", fix: "We walk the venue first: power, cable runs, sightlines, stage height and the light in the room, so problems are fixed before load-in.", spec: "Site visit for larger or unusual setups" },
    { worry: "“The slides didn't show properly on the screen.”", fix: "On setup day we run through every one of your slides and videos on the screen, so you see them as your guests will before doors open.", spec: "Every slide tested on setup day" },
    { worry: "“The mics cut out halfway through the speech.”", fix: "Our sound engineer sets up and sound checks every mic on the day, and we map every mic, laptop and screen before load-in.", spec: "Signal-flow plan · same-day sound check" },
    { worry: "“What if something fails mid-event?”", fix: "We bring spare screen panels and backup mics, so a faulty part is swapped on the spot. Any technical issue is resolved within thirty minutes, or you get an immediate discount.", spec: "Spare panels and mics · 30-minute promise" },
  ],
  reviewsFirst: ["Gwendolyn Anne David", "Tan Hee Pheng", "Candy Mak"],
  story: {
    eyebrow: "How we plan",
    title: "The Pre-Event AV Checklist we walk through with every client",
    paragraphs: [
      "Whether you are running a corporate town hall, a product launch, or a multi-day conference, this checklist covers the essentials we walk through with clients before every PixelPro production.",
      "Start with the outcome, not the gear list. Align on audience size and room layout; speakers, panels, or entertainment segments; whether you need livestream, recording, or both; and the branding moments that need visual emphasis. A shared brief keeps the creative and technical teams moving in the same direction.",
      "Site visits catch problems drawings miss. Check power locations, cable runs, sightlines, stage height, and ambient light. If a hybrid or livestream setup is planned, verify network capacity and backup connectivity on site.",
    ],
    listTitle: "What we lock in before load-in day:",
    list: [
      "Microphones and wireless channels",
      "Presentation laptops and switchers",
      "Confidence monitors for speakers",
      "Recording and stream destinations",
      "Transitions, clicker handoffs and walk-on music",
      "Q&A mics",
      "Backup mics, spare HDMI and adapters",
      "Who owns audio, video switching and the client on the day",
    ],
    after: [
      "When everyone knows the path of each signal, troubleshooting stays fast if something drifts. For keynote-heavy programmes, ask us for a full rehearsal of the transitions and handovers. And after the show, we capture notes while the event is fresh: what worked, what to improve, and which assets need delivery. That loop is how productions get sharper over time.",
    ],
    image: "/photos/lightning-fast-response-time.jpg",
    imageAlt: "PixelPro Studios crew at work",
  },
  steps: [
    ["Confirm the brief", "Audience, room layout, programme segments, livestream or recording, branding moments."],
    ["Walk the venue", "Power, cable runs, sightlines, stage height, ambient light and network."],
    ["Lock the signal flow", "Every mic, laptop, monitor and recording path mapped before load-in."],
    ["Test on setup day", "Every slide and video run through on the screen, and every mic sound checked. A full rehearsal if you ask for one."],
    ["Show day and after", "Spare panels and mics on hand, clear roles, then post-show notes and delivery."],
  ],
  buyers: [
    { who: "HR and admin teams", events: "Town halls, dinner and dances, conferences", copy: "First time running the company event? We walk you through the brief and the venue, and test everything on setup day, so the night itself feels calm. No event is too small.", links: [{ label: "Town hall AV setup guide", href: "/blog/town-hall-av-setup" }, { label: "How to plan a dinner and dance", href: "/blog/how-to-plan-dinner-and-dance" }] },
    { who: "Schools", events: "Graduations, speech days, concerts", copy: "We plan with your team and liaise with the hall's own vendor, and we quote through GeBIZ. We already work with MOE schools.", links: [{ label: "School event checklist", href: "/blog/school-event-checklist" }] },
    { who: "Government and community", events: "Public events, National Day, community programmes", copy: "Public events that can't fail need a plan and a backup. GeBIZ registered and bizSAFE Level 3.", links: [{ label: "Outdoor event safety requirements", href: "/blog/outdoor-event-safety-requirements-singapore" }] },
    { who: "Brand and marketing teams", events: "Launches, keynotes, activations", copy: "Keynote-heavy launch? Ask for a full rehearsal and we'll run every transition with you, so the reveal lands on cue.", links: [{ label: "LED wall for product launches", href: "/events/led-wall-for-product-launch" }] },
    { who: "Event agencies and planners", events: "AV and technical production partner", copy: "We plan and run the technical side for your client's event, with our own crew and a clear owner for each role.", links: [{ label: "Event production", href: "/mockup/event-production" }] },
  ],
  priceFactors: [
    ["Size of the programme", "A short programme with a few speakers", "A multi-day conference with many sessions"],
    ["Site visit", "A venue we already know", "A new or unusual venue that needs a recce"],
    ["Rehearsal", "Our standard checks on setup day", "A full rehearsal of every segment, on request"],
    ["Livestream or recording", "No livestream", "Livestream or recording, with network checks"],
    ["Venue access and timing", "Easy loading and an early setup slot", "No loading bay, stairs only, or a tight setup window"],
    ["What we're running", "One service, like sound", "Sound, screen, stage and lighting together"],
  ],
  comparison: {
    eyebrow: "Why plan it?",
    title: "What a plan saves you on the day",
    body: "Most event-day problems start before the day: a missed power point, an untested laptop, a mic nobody switched on. Planning finds them while they're still easy to fix.",
    link: { label: "Read: The Pre-Event AV Checklist Every Organiser Needs", href: "/blog/event-av-checklist" },
    cards: [
      ["No venue surprises", "Power, sightlines and access checked before load-in."],
      ["Slides that work", "Every slide and video checked on the screen."],
      ["Clear sound", "Every mic sound checked before guests arrive."],
      ["A backup ready", "Spare panels and mics, and clear roles."],
    ],
  },
  jobs: {
    title: "Events we've planned and run",
    items: [
      { img: "/blog/ndp-2026-marina-barrage-live-screening.webp", alt: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage", caption: "LED wall, stage and sound for the NDP 2026 live screening at Marina Barrage" },
      { img: "/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-2.jpg", alt: "PixelPro Studios event", placeholder: "Caption: \"[event type], [venue type], [N] guests: what we planned\". No client names." },
      { img: "/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-5.jpg", alt: "PixelPro Studios event", placeholder: "Caption: \"[event type], [venue type], [N] guests: what we planned\". No client names." },
    ],
  },
  includedTitle: "Part of every PixelPro production",
  included: [
    "A shared brief for your team and ours",
    "A site visit for larger or unusual venues",
    "A plan for every mic, laptop, screen and recording",
    "Every slide tested on the screen and a sound check on setup day",
    "Spare panels and backup mics, and a clear owner for each role",
    "Post-show notes and delivery of your files",
  ],
  addOns: [
    { label: "Full rehearsal", copy: "A complete run-through of your programme with our crew, on request", href: "#pricing" },
    { label: "AV rental", copy: "Sound, LED walls, projectors and stages", href: "/mockup/av-systems" },
    { label: "Event production", copy: "The technical side of your whole event, from one team", href: "/mockup/event-production" },
    { label: "Videography", copy: "Recordings and highlight films of your event", href: "/services/videography" },
  ],
  quote: { title: "Start planning your event", checklist: ["Event date", "Venue", "Number of guests", "Event type", "Your programme", "Livestream or recording?", "What AV you think you need", "Any past issues to avoid"] },
  faqTitle: "Event AV planning questions",
  faqs: [
    { question: "How much does event AV planning cost?", answer: "We quote per event. Planning is how we run every PixelPro production, and the price depends on the size of the programme, whether we need a site visit, whether you'd like a full rehearsal, livestream or recording, and what we're running on the day." },
    { question: "Do you do site visits?", answer: "Yes, for larger or unusual setups. We check power locations, cable runs, sightlines, stage height and ambient light, and network capacity if you're livestreaming." },
    { question: "Do you rehearse before the event?", answer: "On every job we run through all your slides and videos on the screen, and our sound engineer sound checks every mic on setup day. If you'd like a full rehearsal of the programme (transitions, clicker handoffs, walk-on music, Q&A mics), just ask." },
    { question: "What happens if something fails?", answer: "We bring spare screen panels, backup mics and spare HDMI and adapters, so a faulty part is swapped on the spot, and each crew member has a clear role. If a technical issue happens, we resolve it within thirty minutes or you receive an immediate discount." },
    { question: "I'm organising this for the first time. Can you help?", answer: "Yes. We start with the outcome, not the gear list: your audience, room and programme. From there we recommend the setup and walk you through what to confirm. There's no minimum booking, so small events are welcome." },
    { question: "Can you plan a hybrid or livestreamed event?", answer: "Yes, for compact setups of up to four cameras. We check network capacity and backup connectivity at the site visit." },
    { question: "How far in advance should we start?", answer: "We recommend booking at least two to four weeks ahead for standard events, and earlier for larger productions. If you need urgent support, feel free to reach out — we respond fast." },
    { question: "Are you a GeBIZ registered supplier?", answer: "Yes. PixelPro Studios is a Singapore Government registered supplier on GeBIZ, and we regularly support schools, public agencies, and institutional events." },
  ],
  related: [
    { label: "AV rental", href: "/mockup/av-systems" },
    { label: "Event production", href: "/mockup/event-production" },
    { label: "The Pre-Event AV Checklist", href: "/blog/event-av-checklist" },
    { label: "Town hall AV setup guide", href: "/blog/town-hall-av-setup" },
    { label: "Event production schedule (example)", href: "/blog/event-production-schedule-example" },
  ],
};

export default function Page() {
  return <ServicePage c={c} />;
}
