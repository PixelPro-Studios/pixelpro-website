// MOCKUP by Rankr (17 Nov 2026). Plain data and helpers for the v2 pages (no "use client", so server pages can use them).

export const waLink = (text: string) => "https://wa.me/6588605489?text=" + encodeURIComponent(text);

// Real Google review excerpts, same list as ../_template/ServicePage.tsx (never reworded)
export const allReviews = [
  { quote: "Reliable, trustworthy, prompt, great communication.", who: "Candy Mak", context: "Finale with stage, LED screen and AV" },
  { quote: "Seamless and stress-free… last-minute requests… calm efficiency.", who: "Gwendolyn Anne David", context: "Event organiser, sound" },
  { quote: "Significantly lower… than the other vendors.", who: "Tan Hee Pheng", context: "MOE" },
  { quote: "Proactive and helpful in dealing with all our queries, liaising with our vendor.", who: "Chloe Lim", context: "School event, sound" },
  { quote: "Engaged them on short notice.", who: "Ng Sherelle", context: "Sound system and crew" },
  { quote: "Went above and beyond to source.", who: "Jasmine Chye", context: "Company event, projectors" },
  { quote: "Very proactive… replied promptly.", who: "f eli", context: "Company event" },
  { quote: "Super flexible.", who: "Reshan Sivasamy", context: "Event organiser, sound" },
];

export type Project = { img: string; alt: string; pos?: string; tag?: string; spec: string[]; title: string; line: string };

// LED jobs from Jovin's write-ups (clients anonymous until PixelPro confirms names)
export const LED_PROJECTS: Project[] = [
  {
    img: "/portfolio-jobs/led-wall-rental_6x2-5m-led-wall-pitch-day.webp",
    alt: "6 m × 2.5 m LED wall at a university innovation showcase, set up by PixelPro",
    tag: "Featured project",
    spec: ["6 m × 2.5 m LED wall", "Sound and crew"],
    title: "A university innovation showcase",
    line: "The LED display carried pitch presentations, countdown timers and sponsor visuals, with our technical team on site throughout the event.",
  },
  {
    img: "/portfolio-jobs/conference-av-rental_led-wall-hotel-ballroom-forum.webp",
    alt: "3.5 m × 2.5 m LED wall in a hotel ballroom for a three-day international forum",
    spec: ["3.5 m × 2.5 m LED wall", "50-inch confidence monitor"],
    title: "A three-day international forum",
    line: "Presentations and visual content for about 100 delegates in a hotel ballroom.",
  },
  {
    img: "/portfolio-jobs/led-wall-rental_5-5x3m-led-wall-mall-atrium.webp",
    alt: "5.5 m × 3 m LED display above a 7 m × 4 m stage in a mall atrium, set up by PixelPro",
    spec: ["5.5 m × 3 m LED display", "7 m × 4 m stage"],
    title: "An overnight build in a mall atrium",
    line: "Built within the venue's access window, so everything was ready before the mall opened.",
  },
  {
    img: "/portfolio-jobs/school-sound-system-rental_prize-day-stage-led-and-lighting.webp",
    alt: "Four upright PixelPro LED panels on a school hall stage for a prize day",
    spec: ["Four 1 m × 2 m LED panels"],
    title: "A school prize-day ceremony",
    line: "Upright panels framed the stage and carried the programme visuals for students, parents and guests.",
  },
];

