import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { RelatedService } from "@/lib/blog";

const promotionsDirectory = path.join(process.cwd(), "content/promotions");

export type PromotionMeta = {
  slug: string;
  title: string;
  description: string;
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
    date: data.date as string,
    author: data.author as string,
    image: typeof data.image === "string" ? data.image : undefined,
    imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
    relatedServices: parseRelatedServices(data as Record<string, unknown>),
    content,
  };
}

export function getAllPromotions(): PromotionMeta[] {
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
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
