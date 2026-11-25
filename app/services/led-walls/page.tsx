// Design 2 since 25 Nov 2026 (Jovin approved, WhatsApp 7:58 PM). Content: app/mockup/led-walls-v3/content.ts. Old page: LEDWallsPageClient.tsx, kept unused.
import type { Metadata } from "next";
import JsonLd, {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import ServiceV3 from "@/app/mockup/_v3/ServiceV3";
import { c } from "@/app/mockup/led-walls-v3/content";

const title = "LED Wall Rental Singapore";
const description =
  "Indoor and outdoor LED wall rental in Singapore with high-resolution panels, video processing, installation, and on-site technical support.";
const path = "/services/led-walls";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  ogImage:
    "/services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg",
});

export default function LEDWallsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "LED Wall Rental Singapore",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "LED Walls", path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(c.faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <ServiceV3 c={c} />
    </>
  );
}
