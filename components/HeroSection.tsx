"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

export default function Hero() {
  return (
    <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/pixelpro-studios-singapore-sound-system-rental.jpg"
          alt="PixelPro Studios Sound System Rental"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-black/60" />
        {/* Bottom gradient fade to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black" />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-charcoal/20 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-brand-off-white leading-tight"
        >
          Events made effortless, 
          <br className="hidden md:block" />
          <span className="inline-block md:ml-2">
            every time.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl text-brand-off-white/80 max-w-2xl mx-auto font-sans"
        >
         One-stop partner for events, media, and AV productions in Singapore.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            whileTap={{ y: 4, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="https://cal.com/pixelpro/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-4 bg-brand-off-white text-brand-black font-semibold rounded-md hover:bg-white transition-colors duration-300 tracking-wide uppercase text-sm cursor-pointer"
              onClick={() => posthog.capture('book_a_call_clicked', { source: 'hero' })}
            >
              Book a Call
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

