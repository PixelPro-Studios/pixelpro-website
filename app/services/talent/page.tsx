import type { Metadata } from "next";
import TalentPageClient from "./TalentPageClient";
import JsonLd, {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

const title = "Talent & Entertainment";
const description =
  "Book hosts, performers, and entertainment talent for events in Singapore — curated by PixelPro Studios for confident, professional programmes.";
const path = "/services/talent";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
});

export default function TalentPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Event Talent & Entertainment Singapore",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Talent & Entertainment", path },
        ])}
      />
      <TalentPageClient />
    </>
  );
}
