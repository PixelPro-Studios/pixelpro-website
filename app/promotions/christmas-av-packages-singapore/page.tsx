// Christmas 2026 promotion page (Jovin, 24 Nov: "end date for the xmas promo will be 31st December 2026"). Same three packages as CNY.
// Listed on /promotions and in the sitemap through PAGE_PROMOTIONS in lib/promotions.ts.
import type { Metadata } from "next";
import FestivePackages from "@/app/mockup/festive-packages/FestivePackages";
import { CHRISTMAS } from "@/app/mockup/_v2/festive";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Christmas AV Packages Singapore from S$888",
  description: "Sound and lighting packages for your Christmas party or year-end event, from S$888 plus 10% off additional AV rentals. Promotion ends 31 December 2026.",
  path: "/promotions/christmas-av-packages-singapore",
  ogImage: "/promotions/christmas-2026-promotion.webp",
});

export default function Page() {
  return <FestivePackages p={CHRISTMAS} />;
}
