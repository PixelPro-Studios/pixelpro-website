// Christmas 2026 promotion page on the review site (Jovin, 24 Nov). Goes live as /promotions/christmas-av-packages-singapore/.
import type { Metadata } from "next";
import FestivePackages from "../festive-packages/FestivePackages";
import { CHRISTMAS } from "../_v2/festive";

export const metadata: Metadata = {
  title: "Christmas 2026 AV Packages from S$888",
  description: "Sound and lighting packages for your Christmas party or year-end event, from S$888 plus 10% off additional AV rentals. Promotion ends 31 December 2026.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <FestivePackages p={CHRISTMAS} />;
}
