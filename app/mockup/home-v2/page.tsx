// MOCKUP by Rankr (16 Nov 2026). Home page, design v2 (same system as /mockup/led-walls-v2). Local review only.
import type { Metadata } from "next";
import HomeV2 from "./HomeV2";

export const metadata: Metadata = {
  title: "Event AV, LED Wall & Sound Rental Singapore",
  description: "Sound systems, LED walls, staging, photography and videography for events in Singapore, planned and run by our own technical crew.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HomeV2 />;
}
