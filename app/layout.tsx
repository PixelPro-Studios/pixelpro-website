import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd, {
  organizationJsonLd,
  websiteJsonLd,
} from "@/components/JsonLd";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

const oliveira = localFont({
  src: "./fonts/oliveira.otf",
  variable: "--font-oliveira",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PixelPro Studios | One-stop AV Systems, Photography & Videography Singapore",
    template: "%s | PixelPro Studios",
  },
  description:
    "One-stop partner for events, media, and AV productions. Professional audio systems, stage lighting, LED walls, photography, videography, and talent services in Singapore.",
  keywords: [
    "AV systems Singapore",
    "event photography Singapore",
    "videography Singapore",
    "sound system rental Singapore",
    "stage lighting Singapore",
    "LED wall rental Singapore",
    "projector rental Singapore",
    "event production Singapore",
    "corporate events Singapore",
    "talent management Singapore",
  ],
  authors: [{ name: "PixelPro Studios" }],
  creator: "PixelPro Studios",
  publisher: "PixelPro Studios",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: SITE_URL,
    title:
      "PixelPro Studios | Premium AV Systems, Photography & Videography Singapore",
    description:
      "One-stop partner for events, media, and AV productions. Professional audio systems, stage lighting, LED walls, photography, videography, and talent services in Singapore.",
    siteName: "PixelPro Studios",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "PixelPro Studios - Professional AV Systems and Event Production Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PixelPro Studios | AV Systems, Photography & Videography Singapore",
    description:
      "One-stop partner for events, media, and AV productions in Singapore.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@pixelprostudiossg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(gscVerification
    ? { verification: { google: gscVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${oliveira.variable} ${montserrat.variable} ${inter.variable} antialiased font-sans bg-brand-black text-brand-off-white`}
      >
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
