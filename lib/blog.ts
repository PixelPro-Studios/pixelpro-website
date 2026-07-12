import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
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
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
