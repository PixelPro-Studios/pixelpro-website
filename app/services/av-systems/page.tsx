// Design 2 since 25 Nov 2026 (Jovin approved, WhatsApp 7:58 PM). Content: app/mockup/av-systems-v3/content.ts. Old page: AVSystemsPageClient.tsx, kept unused.
import type { Metadata } from "next";
import ServiceV3 from "@/app/mockup/_v3/ServiceV3";
import { c } from "@/app/mockup/av-systems-v3/content";
import JsonLd, {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

const title = "AV Systems";
const description =
  "Professional AV systems rental in Singapore — sound systems, stage lighting, projectors, and on-site technical support.";
const path = "/services/av-systems";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  ogImage: "/services-av-audio/pixelpro-studios-audio-visual-productions-singapore.jpg",
});

export default function AVSystemsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "AV Systems Rental Singapore",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AV Systems", path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(c.faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <ServiceV3 c={c} />
    </>
  );
}
