import type { Metadata } from "next";
import JsonLd, {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { ledWallsFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import LEDWallsPageClient from "./LEDWallsPageClient";

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
      <JsonLd data={faqPageJsonLd(ledWallsFaqs)} />
      <LEDWallsPageClient />
    </>
  );
}
