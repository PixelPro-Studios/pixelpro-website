// MOCKUP by Rankr (17 Nov 2026). Home page, "Design 2" (voltade.com layout and motion, PixelPro colours). Review only.
import type { Metadata } from "next";
import HomeV3 from "./HomeV3";

export const metadata: Metadata = {
  title: "Event AV, LED Wall & Sound Rental Singapore",
  description: "Sound systems, LED walls, staging, photography and videography for events in Singapore, planned and run by our own technical crew.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HomeV3 />;
}
