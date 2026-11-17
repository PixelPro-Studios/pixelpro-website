// MOCKUP by Rankr (18 Nov 2026). LED wall rental, "Design 2" (_v3/ServiceV3.tsx). Same content as Design 1. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "../led-walls-v2/content";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.5 and outdoor P3.9 LED walls, planned around your venue, installed, run and torn down by our technicians.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
