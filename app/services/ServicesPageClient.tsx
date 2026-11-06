"use client";

import Services from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import { servicesFaqs } from "@/lib/faqs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPageClient() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-brand-black/90 from-70% to-brand-silver/10"
    >
      <div className="bg-transparent">
        <Services eyebrow="Event AV and media services in Singapore" />
      </div>
      <p className="px-4 pb-16 text-center font-sans text-base text-brand-off-white/70">
        Running an event for a registered charity or NPO? See our{" "}
        <Link href="/promotions/promotion-charity-singapore-led-walls-event/" className="underline hover:text-brand-off-white">
          charity offer
        </Link>
        .
      </p>
      <div className="px-4 md:px-8 pb-24">
        <FaqSection faqs={servicesFaqs} />
      </div>
    </motion.main>
  );
}
