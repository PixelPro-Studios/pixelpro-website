import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTASection";
import BlogPostMotion from "@/components/blog/BlogPostMotion";
import MdxContent from "@/components/blog/MdxContent";
import JsonLd, {
  blogPostingJsonLd,
  breadcrumbJsonLd,
} from "@/components/JsonLd";
import { getPromotionBySlug, getPromotionSlugs } from "@/lib/promotions";
import { DEFAULT_OG_IMAGE, pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPromotionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const promotion = getPromotionBySlug(slug);
    const ogImage = promotion.image ?? DEFAULT_OG_IMAGE;
    return {
      ...pageMetadata({
        title: promotion.title,
        description: promotion.description,
        path: `/promotions/${slug}`,
        type: "article",
        ogImage,
      }),
      openGraph: {
        ...pageMetadata({
          title: promotion.title,
          description: promotion.description,
          path: `/promotions/${slug}`,
          type: "article",
          ogImage,
        }).openGraph,
        type: "article",
        publishedTime: promotion.date,
        authors: [promotion.author],
      },
    };
  } catch {
    return {
      title: "Promotions",
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

export default async function PromotionPage({ params }: PageProps) {
  const { slug } = await params;
  const slugs = getPromotionSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const promotion = getPromotionBySlug(slug);

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: promotion.title,
          description: promotion.description,
          slug: promotion.slug,
          date: promotion.date,
          author: promotion.author,
          image: promotion.image,
          basePath: "/promotions",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Promotions", path: "/promotions" },
          { name: promotion.title, path: `/promotions/${slug}` },
        ])}
      />
      <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
        <BlogPostMotion>
          <Link
            href="/promotions/"
            className="inline-block text-sm uppercase tracking-wide text-brand-silver hover:text-brand-off-white transition-colors mb-10"
          >
            ← Back to Promotions
          </Link>

          <header className="mb-12 space-y-4">
            <time
              dateTime={promotion.date}
              className="text-sm text-brand-silver/80 font-sans tracking-wide"
            >
              {formatDate(promotion.date)}
            </time>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-off-white leading-tight">
              {promotion.title}
            </h1>
            <p className="text-lg md:text-xl font-light text-brand-off-white/80 leading-relaxed">
              {promotion.description}
            </p>
            <p className="text-sm text-brand-silver/70">{promotion.author}</p>
          </header>

          {promotion.image && (
            <div className="relative mb-12 mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/5">
              <Image
                src={promotion.image}
                alt={promotion.imageAlt ?? promotion.title}
                width={819}
                height={1024}
                className="h-auto w-full"
                priority
              />
            </div>
          )}

          <article>
            <MdxContent source={promotion.content} />
          </article>

          {promotion.relatedServices.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-white/10">
              <h2 className="text-sm uppercase tracking-wide text-brand-silver mb-4">
                Related services
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {promotion.relatedServices.map((service) => (
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
