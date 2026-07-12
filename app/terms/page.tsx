import type { Metadata } from "next";
import TermsPageClient from "./TermsPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for engaging PixelPro Studios for AV systems, photography, videography, and talent services in Singapore.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsPageClient />;
}
