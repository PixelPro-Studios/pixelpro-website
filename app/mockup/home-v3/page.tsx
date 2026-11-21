// MOCKUP by Rankr (17 Nov 2026). Home page, "Design 2" (voltade.com layout and motion, PixelPro colours). Review only.
import type { Metadata } from "next";
import HomeV3 from "./HomeV3";

export const metadata: Metadata = {
  title: "Audio Visual Company in Singapore for Events",
  description: "PixelPro Studios is an audio visual company in Singapore. We set up and run LED walls, sound and staging for events, and cover them on photo and video.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HomeV3 />;
}
