// MOCKUP by Rankr (25 Nov 2026). Sound system rental, "Design 2" on the service template (_v3/ServiceV3.tsx),
// Jovin's sound lines where they fit, the rest to the voice guide. See ./content.ts. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "./content";

export const metadata: Metadata = {
  title: "Sound System Rental Singapore | Engineer Included",
  description: "Sound system rental in Singapore: speakers, wireless and headset mics and digital mixers, set up, sound-checked and run by our sound engineers.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
