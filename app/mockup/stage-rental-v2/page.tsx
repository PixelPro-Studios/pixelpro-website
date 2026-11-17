// MOCKUP by Rankr (17 Nov 2026). Stage rental on the shared v2 service template, to prove the template works beyond LED.
// Facts from ../stage-rental/page.tsx (Lucas, 6 Nov, bible §2b), brought in line with the 16 Nov rules: no partner mentions,
// no "you don't have to touch a thing". Headings marked NEW are Rankr wording for PixelPro to approve. Local review only.
import type { Metadata } from "next";
import ServiceV2 from "../_v2/ServiceV2";
import { c } from "./content";

export const metadata: Metadata = {
  title: "Stage Platform Rental Singapore | Crew Included",
  description: "Stage platform rental in Singapore: modular stages 60 to 100 cm high, with skirting and steps, built and packed away by our crew.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV2 c={c} />;
}
