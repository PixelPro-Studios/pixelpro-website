// Festive CNY packages page (Jovin, 24 Nov: "like another link to the packages", for his social posts).
// Design 2 page; listed on /promotions and in the sitemap through PAGE_PROMOTIONS in lib/promotions.ts.
import type { Metadata } from "next";
import FestivePackages from "@/app/mockup/festive-packages/FestivePackages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Festive AV Packages Singapore from S$888",
  description: "Sound and lighting packages for your company Chinese New Year dinner or lo hei, from S$888 with setup, dismantling and technical support included.",
  path: "/promotions/festive-av-packages-singapore",
  ogImage: "/events-hero/events_cny-event-av.webp",
});

export default function Page() {
  return <FestivePackages />;
}
