import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Explore PixelPro Studios services: AV systems, photography, videography, and talent for events across Singapore.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
