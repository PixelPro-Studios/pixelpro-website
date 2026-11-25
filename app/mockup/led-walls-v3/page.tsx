// MOCKUP by Rankr. LED wall rental, "Design 2" on the service template (_v3/ServiceV3.tsx), with the wording of the
// Design 1 page PixelPro reviewed (../led-walls) and their feedback applied. See ./content.ts. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "./content";

export const metadata: Metadata = {
  title: "LED Wall Rental Singapore | Crew Included",
  description: "LED wall rental in Singapore with crew included: indoor P2.5 and outdoor P3.9 LED walls, planned around your venue, installed, run and torn down by our technicians.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
