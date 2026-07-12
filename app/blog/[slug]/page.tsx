import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTASection";
import BlogPostMotion from "@/components/blog/BlogPostMotion";
import MdxContent from "@/components/blog/MdxContent";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | PixelPro Studios`,
      description: post.description,
    };
  } catch {
    return {
      title: "Blog | PixelPro Studios",
    };
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const slugs = getPostSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  return (
    <>
      <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
        <BlogPostMotion>
          <Link
            href="/blog/"
            className="inline-block text-sm uppercase tracking-wide text-brand-silver hover:text-brand-off-white transition-colors mb-10"
          >
            ← Back to Blog
          </Link>

          <header className="mb-12 space-y-4">
            <time
              dateTime={post.date}
              className="text-sm text-brand-silver/80 font-sans tracking-wide"
            >
              {formatDate(post.date)}
            </time>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-off-white leading-tight">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl font-light text-brand-off-white/80 leading-relaxed">
              {post.description}
            </p>
            <p className="text-sm text-brand-silver/70">{post.author}</p>
          </header>

          <article>
            <MdxContent source={post.content} />
          </article>
        </BlogPostMotion>
      </main>
      <CTA />
    </>
  );
}
