"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PromotionMeta } from "@/lib/promotions";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PromotionCard({
  promotion,
  index = 0,
}: {
  promotion: PromotionMeta;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      whileTap={{ y: 2, scale: 0.99 }}
      className="h-full"
    >
      <Link
        href={`/promotions/${promotion.slug}/`}
        className="flex h-full flex-col overflow-hidden bg-brand-charcoal/30 border border-white/5 rounded-2xl hover:bg-brand-charcoal/50 hover:border-white/10 transition-all duration-300 group"
      >
        {promotion.image && (
          <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden border-b border-white/5 bg-brand-black">
            <Image
              src={promotion.image}
              alt={promotion.imageAlt ?? promotion.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <time
            dateTime={promotion.date}
            className="text-sm text-brand-silver/80 font-sans tracking-wide"
          >
            {formatDate(promotion.date)}
          </time>
          <h2 className="mt-3 text-xl md:text-2xl font-display font-bold text-brand-off-white group-hover:text-white transition-colors">
            {promotion.title}
          </h2>
          <p className="mt-3 text-brand-off-white/70 font-light leading-relaxed line-clamp-3">
            {promotion.description}
          </p>
          <span className="mt-auto pt-5 inline-block text-sm uppercase tracking-wide text-brand-silver group-hover:text-brand-off-white transition-colors">
            Read more →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
