import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTASection";
import BlogPostMotion from "@/components/blog/BlogPostMotion";
import MdxContent from "@/components/blog/MdxContent";
import JsonLd, {
  blogPostingJsonLd,
  breadcrumbJsonLd,
} from "@/components/JsonLd";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, pageMetadata } from "@/lib/seo";

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
      ...pageMetadata({
        title: post.title,
        description: post.description,
        path: `/blog/${slug}`,
        type: "article",
        ogImage: DEFAULT_OG_IMAGE,
      }),
      openGraph: {
        ...pageMetadata({
          title: post.title,
          description: post.description,
          path: `/blog/${slug}`,
          type: "article",
        }).openGraph,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
      },
    };
  } catch {
    return {
      title: "Blog",
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
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          author: post.author,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ])}
      />
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

          {post.relatedServices.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-white/10">
              <h2 className="text-sm uppercase tracking-wide text-brand-silver mb-4">
                Related services
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {post.relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-brand-off-white hover:text-brand-silver transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-brand-silver"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </BlogPostMotion>
      </main>
      <CTA />
    </>
  );
}
