// Festive CNY packages from Jovin's "Festive Promotions" sheet (Drive), prices shown since 18 Nov ("but not for package", 16 Nov call).
// One source for the CNY page and the festive packages page.
export type FestivePackage = { name: string; price?: string; was?: string; best: string; includes: string[] };

export const FESTIVE_PACKAGES: { title: string; intro: string; note?: string; items: FestivePackage[] } = {
  title: "Festive Packages",
  intro: "Three sound and lighting packages for Chinese New Year, at a festive price.",
  note: "Get 10% off additional AV equipment rentals with any festive package. The discount excludes manpower, transport, setup and tear-down, overtime, PE and LEW endorsements and other third-party services, cannot be combined with other offers and is subject to equipment availability.",
  items: [
    { name: "Festive Essentials", price: "S$888", was: "S$1,088", best: "Speeches, toasts and background music", includes: ["Two 15-inch full-range speakers with stands and skirting", "Two microphones of your choice: wireless, rostrum or lavalier", "16-channel digital mixer", "A sound engineer for 3 hours", "Transport, setup and tear-down"] },
    { name: "Festive Plus", price: "S$1,888", was: "S$2,188", best: "A full dinner programme with stage lighting", includes: ["Four 15-inch full-range speakers with stands and skirting", "Four microphones of your choice", "16-channel digital mixer", "Four RGBAW PAR lights with T-stands", "Lighting controller", "A sound engineer and a lighting engineer for 3 hours", "Transport, setup and tear-down"] },
    { name: "Festive Premium", price: "S$2,888", was: "S$3,288", best: "Performances, a band and a big room", includes: ["Four 15-inch full-range speakers and an 18-inch subwoofer", "Six microphones of your choice, with an antenna distribution system for the wireless mics", "16-channel digital mixer", "Six RGBAW PAR lights and two moving heads", "A lighting console for the moving heads and PAR lights", "A sound engineer and a lighting engineer for 3 hours", "Transport, setup and tear-down"] },
  ],
};

// One page per festive promotion, same three packages. Text: Jovin's own where he wrote it (CNY, 23 Nov), his artwork's
// words for Christmas ("Christmas 2026 Promotion", "From $888 + 10% off additional AV rentals").
export type FestivePromo = { h1: string; lead: string; ends: string; intro: string; art: string; artAlt: string; ask: string; bg: string };

export const CHRISTMAS: FestivePromo = {
  h1: "Christmas 2026 Promotion",
  lead: "Sound and lighting packages from S$888, plus 10% off additional AV rentals.",
  ends: "Promotion ends 31 December 2026.",
  intro: "Three sound and lighting packages for your Christmas party or year-end event, with setup, dismantling and technical support included.",
  art: "/promotions/christmas-2026-promotion.webp",
  artAlt: "Christmas 2026 Promotion by PixelPro Studios: from $888 plus 10% off additional AV rentals",
  ask: "your Christmas 2026 promotion",
  bg: "#7d1b18",
};

export const CNY: FestivePromo = {
  h1: "Celebrate Chinese New Year with Our Festive AV Packages!",
  lead: "Make your company's Chinese New Year celebration an occasion to remember with professional sound and lighting solutions.",
  ends: "Promotion ends 28 February 2027.",
  intro: "From corporate reunion dinners and festive gatherings to lively lo hei celebrations, our specially curated AV packages start from just S$888, with setup, dismantling and technical support included.",
  art: "/promotions/cny-2027-promotion.webp",
  artAlt: "Chinese New Year 2027 Promotion by PixelPro Studios: from $888 plus 10% off additional AV rentals",
  ask: "your Chinese New Year 2027 promotion",
  bg: "#7a0000",
};
