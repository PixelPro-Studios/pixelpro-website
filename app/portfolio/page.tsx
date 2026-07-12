import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Browse PixelPro Studios event work across audio, stage, photography, and videography for clients in Singapore.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
