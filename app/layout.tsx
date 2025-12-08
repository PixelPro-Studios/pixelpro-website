import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "PixelPro Studios | One-stop AV Systems, Photography & Videography Singapore",
  description: "Your reliable one-stop partner for events, media, and AV productions. Professional audio systems, stage lighting, LED walls, photography, videography, and talent services in Singapore.",
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
    "talent management Singapore"
  ],
  authors: [{ name: "PixelPro Studios" }],
  creator: "PixelPro Studios",
  publisher: "PixelPro Studios",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://pixelprostudios.com",
    title: "PixelPro Studios | Premium AV Systems, Photography & Videography Singapore",
    description: "Your reliable one-stop partner for events, media, and AV productions. Professional audio systems, stage lighting, LED walls, photography, videography, and talent services in Singapore.",
    siteName: "PixelPro Studios",
    images: [
      {
        url: "/photos/pixelpro-studios-singapore-sound-system-rental.jpg",
        width: 1200,
        height: 630,
        alt: "PixelPro Studios - Professional AV Systems and Event Production Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelPro Studios | Premium AV Systems, Photography & Videography Singapore",
    description: "Your reliable one-stop partner for events, media, and AV productions in Singapore.",
    images: ["/photos/pixelpro-studios-singapore-sound-system-rental.jpg"],
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased font-sans bg-brand-black text-brand-off-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
