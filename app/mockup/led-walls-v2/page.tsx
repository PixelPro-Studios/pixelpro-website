// MOCKUP by Rankr (16 Nov 2026). Design v2 of the LED wall rental page: fewer sections, real headings for SEO,
// interaction modelled on LUSTRE (chapters), Lime Duo (full-screen projects) and Rain (hero badge).
// Copy is the approved LED copy from ../led-walls/page.tsx. Local review only.
import type { Metadata } from "next";
import LedV2 from "./LedV2";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.5 and outdoor P3.9 LED walls, planned around your venue, installed, run and torn down by our technicians.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LedV2 />;
}
