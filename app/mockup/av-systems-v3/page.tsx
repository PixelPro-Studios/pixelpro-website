// MOCKUP by Rankr (25 Nov 2026). AV rental, "Design 2" on the service template (_v3/ServiceV3.tsx), with the wording of
// the Design 1 page PixelPro reviewed (../av-systems) and Jovin's 16 Nov AV copy applied. See ./content.ts. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "./content";

export const metadata: Metadata = {
  title: "AV Rental Singapore | Sound, LED, Stage, Crew Included",
  description: "AV rental in Singapore from one team: sound, LED walls, projectors, stages and lighting, set up, tested and run by our technical crew. GeBIZ registered.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
