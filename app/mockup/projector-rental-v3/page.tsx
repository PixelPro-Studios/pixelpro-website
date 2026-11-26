// MOCKUP by Rankr. Projector and screen rental, "Design 2" on the service template (_v3/ServiceV3.tsx), written to the voice guide (26 Nov).
// See ./content.ts. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "./content";

export const metadata: Metadata = {
  title: "Projector Rental Singapore | Crew Included",
  description: "Projector and screen rental in Singapore for seminars, town halls, school events and outdoor movie nights, set up, tested and dismantled by our crew.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
