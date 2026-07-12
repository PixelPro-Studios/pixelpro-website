import type { Metadata } from "next";
import VideographyPageClient from "./VideographyPageClient";
import JsonLd, {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { videographyFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

const title = "Event Videography";
const description =
  "Event videography in Singapore — highlight films, full coverage, and multi-camera production for corporates, schools, and organisations.";
const path = "/services/videography";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
});

export default function VideographyPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Event Videography Singapore",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Videography", path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(videographyFaqs)} />
      <VideographyPageClient />
    </>
  );
}
