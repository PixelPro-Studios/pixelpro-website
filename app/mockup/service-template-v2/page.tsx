// MOCKUP by Rankr (17 Nov 2026). The v2 service page template with placeholder text that explains each slot.
// Every service page (LED walls, stage, sound, projector, AV, photo, video) fills these 9 slots. Local review only.
import type { Metadata } from "next";
import ServiceV2 from "../_v2/ServiceV2";
import { c } from "./content";

export const metadata: Metadata = {
  title: "Service page template (v2)",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV2 c={c} />;
}
