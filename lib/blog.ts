import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type RelatedService = {
  label: string;
  href: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  imageAlt?: string;
  relatedServices: RelatedService[];
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function getMdxFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
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

export function getPostSlugs(): string[] {
  return getMdxFiles().map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPathMdx = path.join(postsDirectory, `${slug}.mdx`);
  const fullPathMd = path.join(postsDirectory, `${slug}.md`);
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

export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        image: post.image,
        imageAlt: post.imageAlt,
        relatedServices: post.relatedServices,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
