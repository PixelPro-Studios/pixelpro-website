import type { Metadata } from "next";
import { getAllPromotions } from "@/lib/promotions";
import BlogPageMotion from "@/components/blog/BlogPageMotion";
import PromotionCard from "@/components/promotions/PromotionCard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Promotions",
  description:
    "Current offers and community initiatives from PixelPro Studios, including charity and NPO event support.",
  path: "/promotions",
});

export default function PromotionsPage() {
  const promotions = getAllPromotions();

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <BlogPageMotion>
        <div className="mb-16 space-y-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white">
            Promotions.
          </h1>
          <p className="text-lg md:text-xl font-light text-brand-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Current offers and community initiatives from the PixelPro team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {promotions.map((promotion, index) => (
            <PromotionCard
              key={promotion.slug}
              promotion={promotion}
              index={index}
            />
          ))}
        </div>
      </BlogPageMotion>
    </main>
  );
}
