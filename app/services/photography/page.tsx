import type { Metadata } from "next";
import PhotographyPageClient from "./PhotographyPageClient";
import JsonLd, {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { photographyFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

const title = "Event Photography";
const description =
  "Professional event photography in Singapore for corporate events, conferences, schools, and brand programmes — clear, story-driven imagery.";
const path = "/services/photography";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
});

export default function PhotographyPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Event Photography Singapore",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Photography", path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(photographyFaqs)} />
      <PhotographyPageClient />
    </>
  );
}
