import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about PixelPro Studios — founded in 2019 to deliver reliable AV, photography, videography, and talent for events across Singapore.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}
