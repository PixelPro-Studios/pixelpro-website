// MOCKUP by Rankr (18 Nov 2026). Stage rental, "Design 2" (_v3/ServiceV3.tsx). Same content as Design 1. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "../stage-rental-v2/content";

export const metadata: Metadata = {
  title: "Stage Platform Rental Singapore | Crew Included",
  description: "Stage platform rental in Singapore: modular stages up to 32 m², 60 to 100 cm high, with skirting and steps, built and packed away by our crew.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
