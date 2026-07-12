import type { Metadata } from "next";
import PrivacyPageClient from "./PrivacyPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for PixelPro Studios — how we handle information when you use our website and services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
