// Festive CNY packages from Jovin's "Festive Promotions" sheet (Drive), prices shown since 18 Nov ("but not for package", 16 Nov call).
// One source for the CNY page and the festive packages page.
export type FestivePackage = { name: string; price?: string; was?: string; best: string; includes: string[] };

export const FESTIVE_PACKAGES: { title: string; intro: string; note?: string; items: FestivePackage[] } = {
  title: "Festive Packages",
  intro: "Three sound and lighting packages for Chinese New Year, at a festive price.",
  note: "Get 10% off additional AV equipment rentals with any festive package. The discount excludes manpower, transport, setup and tear-down, overtime, PE and LEW endorsements and other third-party services, cannot be combined with other offers and is subject to equipment availability.",
  items: [
    { name: "Festive Essentials", price: "S$888", was: "S$1,088", best: "Speeches, lo hei and background music", includes: ["Two 15-inch full-range speakers with stands and skirting", "Two microphones of your choice: wireless, rostrum or lavalier", "16-channel digital mixer", "A sound engineer for 3 hours", "Transport, setup and tear-down"] },
    { name: "Festive Plus", price: "S$1,888", was: "S$2,188", best: "A full dinner programme with stage lighting", includes: ["Four 15-inch full-range speakers with stands and skirting", "Four microphones of your choice", "16-channel digital mixer", "Four RGBAW PAR lights with T-stands", "Lighting controller", "A sound engineer and a lighting engineer for 3 hours", "Transport, setup and tear-down"] },
    { name: "Festive Premium", price: "S$2,888", was: "S$3,288", best: "Performances, a band and a big room", includes: ["Four 15-inch full-range speakers and an 18-inch subwoofer", "Six microphones of your choice, with an antenna distribution system for the wireless mics", "16-channel digital mixer", "Six RGBAW PAR lights and two moving heads", "A lighting console for the moving heads and PAR lights", "A sound engineer and a lighting engineer for 3 hours", "Transport, setup and tear-down"] },
  ],
};
