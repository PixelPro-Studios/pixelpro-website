import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogPageMotion from "@/components/blog/BlogPageMotion";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Insights on event production, AV, photography, and videography from PixelPro Studios.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <BlogPageMotion>
        <div className="mb-16 space-y-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white">
            Blog.
          </h1>
          <p className="text-lg md:text-xl font-light text-brand-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Practical notes on event production, AV, and visual storytelling from
            the PixelPro team.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </BlogPageMotion>
    </main>
  );
}
