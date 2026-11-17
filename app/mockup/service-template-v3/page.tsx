// MOCKUP by Rankr (18 Nov 2026). Service template, "Design 2" (_v3/ServiceV3.tsx). Same content as Design 1. Review only.
import type { Metadata } from "next";
import ServiceV3 from "../_v3/ServiceV3";
import { c } from "../service-template-v2/content";

export const metadata: Metadata = {
  title: "Service page template (v2)",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceV3 c={c} />;
}
