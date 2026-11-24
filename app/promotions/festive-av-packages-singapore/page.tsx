// Chinese New Year 2027 promotion page (Jovin). Same three packages as the Christmas page (17 Nov: "its just 3 packages then we can reuse for all").
// Listed on /promotions and in the sitemap through PAGE_PROMOTIONS in lib/promotions.ts.
import type { Metadata } from "next";
import FestivePackages from "@/app/mockup/festive-packages/FestivePackages";
import { CNY } from "@/app/mockup/_v2/festive";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "CNY AV Packages Singapore from S$888",
  description: "Sound and lighting packages for your company Chinese New Year dinner or lo hei, from S$888 plus 10% off additional AV rentals. Promotion ends 28 February 2027.",
  path: "/promotions/festive-av-packages-singapore",
  ogImage: "/promotions/cny-2027-promotion.webp",
});

export default function Page() {
  return <FestivePackages p={CNY} />;
}
