// Design 2 since 25 Nov 2026 (Jovin approved). Page: app/mockup/services-v3/ServicesV3.tsx. Old page: ServicesPageClient.tsx, kept unused.
import type { Metadata } from "next";
import ServicesV3 from "@/app/mockup/services-v3/ServicesV3";
import { FAQS } from "@/app/mockup/services-v3/faqs";
import JsonLd, { faqPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Event AV & Media Services Singapore",
  description:
    "Explore PixelPro Studios services: AV systems, LED walls, photography, videography, and talent for events across Singapore.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(FAQS.map((f) => ({ question: f.q, answer: f.a })))} />
      <ServicesV3 />
    </>
  );
}
