import type { Metadata } from "next";
import AVSystemsPageClient from "./AVSystemsPageClient";
import JsonLd, {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { avSystemsFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

const title = "AV Systems";
const description =
  "Professional AV systems rental in Singapore — sound systems, stage lighting, projectors, and LED walls with on-site technical support.";
const path = "/services/av-systems";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
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
      <JsonLd data={faqPageJsonLd(avSystemsFaqs)} />
      <AVSystemsPageClient />
    </>
  );
}
