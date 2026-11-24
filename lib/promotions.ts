import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { RelatedService } from "@/lib/blog";

const promotionsDirectory = path.join(process.cwd(), "content/promotions");

export type PromotionMeta = {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
  relatedServices: RelatedService[];
};

export type Promotion = PromotionMeta & {
  content: string;
};

function getMdxFiles(): string[] {
  if (!fs.existsSync(promotionsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(promotionsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function parseRelatedServices(data: Record<string, unknown>): RelatedService[] {
  const raw = data.relatedServices;
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item) => {
      if (
        item &&
        typeof item === "object" &&
        "label" in item &&
        "href" in item &&
        typeof (item as RelatedService).label === "string" &&
        typeof (item as RelatedService).href === "string"
      ) {
        return item as RelatedService;
      }
      return null;
    })
    .filter((item): item is RelatedService => item !== null);
}

export function getPromotionSlugs(): string[] {
  return getMdxFiles().map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPromotionBySlug(slug: string): Promotion {
  const fullPathMdx = path.join(promotionsDirectory, `${slug}.mdx`);
  const fullPathMd = path.join(promotionsDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    metaTitle: typeof data.metaTitle === "string" ? data.metaTitle : undefined,
    metaDescription: typeof data.metaDescription === "string" ? data.metaDescription : undefined,
    date: data.date as string,
    author: data.author as string,
    image: typeof data.image === "string" ? data.image : undefined,
    imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
    relatedServices: parseRelatedServices(data as Record<string, unknown>),
    content,
  };
}

// Promotions built as their own page instead of an MDX file. They are listed on /promotions and in the sitemap
// like the MDX ones, but getPromotionSlugs() leaves them out, so app/promotions/[slug] never builds them.
const PAGE_PROMOTIONS: PromotionMeta[] = [
  {
    slug: "christmas-av-packages-singapore",
    title: "Christmas 2026 Promotion",
    description: "Sound and lighting packages from S$888, plus 10% off additional AV rentals. Promotion ends 31 December 2026.",
    date: "2026-11-25",
    author: "PixelPro Studios",
    image: "/promotions/christmas-2026-promotion.webp",
    imageAlt: "Christmas 2026 Promotion by PixelPro Studios: from $888 plus 10% off additional AV rentals",
    relatedServices: [],
  },
  {
    slug: "festive-av-packages-singapore",
    title: "Chinese New Year 2027 Promotion",
    description: "Make your company's Chinese New Year celebration an occasion to remember with professional sound and lighting solutions. Promotion ends 28 February 2027.",
    date: "2026-11-24",
    author: "PixelPro Studios",
    image: "/promotions/cny-2027-promotion.webp",
    imageAlt: "Chinese New Year 2027 Promotion by PixelPro Studios: from $888 plus 10% off additional AV rentals",
    relatedServices: [],
  },
];

export function getAllPromotions(): PromotionMeta[] {
  return [...PAGE_PROMOTIONS, ...getMdxPromotions()].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getMdxPromotions(): PromotionMeta[] {
  return getPromotionSlugs()
    .map((slug) => {
      const promotion = getPromotionBySlug(slug);
      return {
        slug: promotion.slug,
        title: promotion.title,
        description: promotion.description,
        date: promotion.date,
        author: promotion.author,
        image: promotion.image,
        imageAlt: promotion.imageAlt,
        relatedServices: promotion.relatedServices,
      };
    });
}
