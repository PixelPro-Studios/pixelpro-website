import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import JsonLd, { faqPageJsonLd } from "@/components/JsonLd";
import { servicesFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Explore PixelPro Studios services: AV systems, LED walls, photography, videography, and talent for events across Singapore.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(servicesFaqs)} />
      <ServicesPageClient />
    </>
  );
}
