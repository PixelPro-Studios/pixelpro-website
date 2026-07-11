"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import posthog from "posthog-js";

export default function CTA() {
  return (
    <section className="pt-12 pb-28 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-silver/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-off-white mb-6 tracking-tight">
          Realise your event vision.
        </h2>
        <p className="text-lg md:text-xl text-brand-off-white/80 mb-12 max-w-2xl mx-auto font-sans font-light">
          Craft extraordinary experiences for your event participants with us.
        </p>
        
        <motion.div
          whileTap={{ y: 4, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="https://cal.com/pixelpro/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-4 bg-brand-off-white text-brand-black font-semibold rounded-xl hover:bg-white transition-colors duration-300 tracking-wide uppercase text-sm cursor-pointer"
            onClick={() => posthog.capture("book_a_call_clicked", { source: "cta_section" })}
          >
            Book a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

