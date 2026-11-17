// MOCKUP by Rankr (18 Nov 2026). Chinese New Year event AV, "Design 2" (_v3/ServiceV3.tsx). Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "./content";

export const metadata: Metadata = {
  title: "Chinese New Year Event AV Singapore | Crew Included",
  description: "Chinese New Year event AV in Singapore: sound for the lo hei and speeches, an LED wall for the lucky draw and a stage for performances, set up and run by our team.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
