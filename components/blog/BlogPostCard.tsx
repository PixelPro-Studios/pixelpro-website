"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostCard({
  post,
  index = 0,
}: {
  post: BlogPostMeta;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      whileTap={{ y: 2, scale: 0.99 }}
    >
      <Link
        href={`/blog/${post.slug}/`}
        className="block p-6 md:p-8 bg-brand-charcoal/30 border border-white/5 rounded-2xl hover:bg-brand-charcoal/50 hover:border-white/10 transition-all duration-300 group"
      >
        <time
          dateTime={post.date}
          className="text-sm text-brand-silver/80 font-sans tracking-wide"
        >
          {formatDate(post.date)}
        </time>
        <h2 className="mt-3 text-2xl md:text-3xl font-display font-bold text-brand-off-white group-hover:text-white transition-colors">
          {post.title}
        </h2>
        <p className="mt-3 text-brand-off-white/70 font-light leading-relaxed">
          {post.description}
        </p>
        <span className="mt-5 inline-block text-sm uppercase tracking-wide text-brand-silver group-hover:text-brand-off-white transition-colors">
          Read more →
        </span>
      </Link>
    </motion.div>
  );
}
