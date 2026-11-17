// MOCKUP by Rankr (17 Nov 2026). LED wall rental page on the shared v2 service template (_v2/ServiceV2.tsx).
// Copy: approved LED copy from ../led-walls/page.tsx (Jovin's doc + Lukas's comments). Local review only.
import type { Metadata } from "next";
import ServiceV2 from "../_v2/ServiceV2";
import { c } from "./content";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.5 and outdoor P3.9 LED walls, planned around your venue, installed, run and torn down by our technicians.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV2 c={c} />;
}
