import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with PixelPro Studios for AV rental, photography, videography, and talent in Singapore. WhatsApp, email, or book a call.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
