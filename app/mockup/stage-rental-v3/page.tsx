// MOCKUP by Rankr. Stage rental, "Design 2" on the service template (_v3/ServiceV3.tsx), written to the voice guide (25 Nov).
// See ./content.ts. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "./content";

export const metadata: Metadata = {
  title: "Stage Platform Rental Singapore | Crew Included",
  description: "Stage platform rental in Singapore: modular stages 60 to 100 cm high, with skirting and steps, set up and dismantled by our crew.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
