import type { Metadata } from "next";

export const SITE_URL = "https://pixelprostudios.sg";

export const SITE_NAME = "PixelPro Studios";

export const DEFAULT_OG_IMAGE = "/photos/pixelpro-studios-singapore-sound-system-rental.jpg";

export const organization = {
  name: "PixelPro Studios Pte. Ltd.",
  legalName: "PixelPro Studios Pte. Ltd.",
  alternateName: "PixelPro Studios",
  uen: "202340399H",
  phone: "+65 8860 5489",
  email: "hello@pixelprostudios.sg",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  sameAs: [
    "https://facebook.com/pixelprostudiossg",
    "https://instagram.com/pixelprostudios.sg",
    "https://tiktok.com/@pixelprostudios.sg",
    "https://linkedin.com/company/pixelprostudios",
  ],
  areaServed: "Singapore",
  openingHours: "Mo-Su 09:00-22:00",
  openingHoursDisplay: "Monday–Sunday, 9am–10pm",
  description:
    "One-stop partner for events, media, and AV productions in Singapore — sound systems, stage lighting, LED walls, photography, videography, and talent.",
} as const;

/** Ensure path has a trailing slash (matches next.config trailingSlash: true). */
export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") {
    return `${SITE_URL}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}

export function pageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_SG",
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
      creator: "@pixelprostudiossg",
    },
  };
}
