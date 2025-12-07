"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedPixelBackground = ({ isVisible }: { isVisible: boolean }) => {
  const [pixels, setPixels] = useState<{ id: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Generate random pixels when footer becomes visible
      const pixelCount = 80;
      const generatedPixels = Array.from({ length: pixelCount }, (_, i) => ({
        id: i,
        delay: Math.random() * 5, // Random delay
        duration: 3 + Math.random() * 4, // Random duration (3-7 seconds)
      }));
      setPixels(generatedPixels);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full grid grid-cols-20 gap-4 p-4">
        {pixels.map((pixel) => (
          <div
            key={pixel.id}
            className="w-full aspect-square rounded-sm bg-brand-silver/20"
            style={{
              animation: `pixelPulse ${pixel.duration}s ease-in-out ${pixel.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes pixelPulse {
          0%, 100% {
            opacity: 0.05;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/pixelprostudiossg" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/pixelprostudios.sg" },
    { name: "TikTok", icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ), href: "https://tiktok.com/@pixelprostudios.sg" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/pixelprostudios" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@pixelprostudios" },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-brand-silver/10 to-brand-silver/50">
      <AnimatedPixelBackground isVisible={isVisible} />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-8 z-10">
        <div className="bg-brand-black/90 rounded-3xl p-8 md:p-10 border border-white/5 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Left Side - Copyright and Legal */}
            <div className="text-center md:text-left flex-1">
              <p className="text-brand-off-white/90 text-sm mb-1">
                Copyright © 2025 PixelPro Studios Pte. Ltd.
              </p>
              <p className="text-brand-off-white/90 text-sm mb-2">
                All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-brand-off-white/90 text-sm">
                <motion.div whileTap={{ y: 2, scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link href="/terms" className="hover:text-brand-off-white transition-colors cursor-pointer">
                    Terms & Conditions
                  </Link>
                </motion.div>
                <span>|</span>
                <motion.div whileTap={{ y: 2, scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link href="/privacy" className="hover:text-brand-off-white transition-colors cursor-pointer">
                    Privacy Policy
                  </Link>
                </motion.div>
              </div>
              <p className="text-brand-off-white/90 text-sm mt-2">
                UEN: 202340399H
              </p>
              <div className="mt-4 flex justify-center md:justify-start">
                <Image
                  src="/client_logos/pixelpro-studios-government-supplier-gebiz-registered.png"
                  alt="Singapore Government Registered Supplier - GeBIZ"
                  width={200}
                  height={60}
                  className="grayscale invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Center - Brand Name (Desktop Only) */}
            <div className="hidden md:block">
              <motion.div whileTap={{ y: 2, scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link href="/" className="font-display font-bold text-2xl tracking-wide text-brand-off-white hover:text-brand-silver transition-colors cursor-pointer">
                  pixelpro
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex items-center gap-4 flex-1 justify-center md:justify-end">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileTap={{ y: 2, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:bg-brand-off-white hover:text-brand-black text-brand-off-white/80 rounded-full transition-all duration-300 cursor-pointer"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

