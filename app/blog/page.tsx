import type { Metadata } from "next";
import SoroBlogEmbed from "./SoroBlogEmbed";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Insights on event production, AV, photography, and videography from PixelPro Studios.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white">
          Blog.
        </h1>
      </div>
      <SoroBlogEmbed />
    </main>
  );
}
