// MOCKUP by Rankr (25 Nov 2026). Services hub (/services) in "Design 2". See ./ServicesV3.tsx. Review only.
import type { Metadata } from "next";
import ServicesV3 from "./ServicesV3";

export const metadata: Metadata = {
  title: "Event AV & Production Services Singapore",
  description: "PixelPro Studios services: LED walls, sound systems, stages, lighting, projectors, photography, videography and entertainment for events across Singapore.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServicesV3 />;
}
