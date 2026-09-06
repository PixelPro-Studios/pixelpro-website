import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllPromotions } from "@/lib/promotions";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const promotions = getAllPromotions();

  const staticRoutes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/av-systems", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/led-walls", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/photography", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/videography", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/talent", changeFrequency: "monthly", priority: 0.8 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/promotions", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...promotions.map((promotion) => ({
      url: absoluteUrl(`/promotions/${promotion.slug}`),
      lastModified: new Date(promotion.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
