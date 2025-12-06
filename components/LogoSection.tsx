"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "TechCorp", "Studio One", "EventHorizon", "LuxeWeddings", "GlobalStream", "Visionary",
  "TechCorp", "Studio One", "EventHorizon", "LuxeWeddings", "GlobalStream", "Visionary",
];

export default function InfiniteLogos() {
  return (
    <section className="py-12 bg-brand-charcoal overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
         <p className="text-sm text-brand-silver/50 uppercase tracking-widest font-medium font-sans">Trusted By Industry Leaders</p>
      </div>
      
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex space-x-16 min-w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {/* Duplicating list 4 times to ensure smooth infinite scroll on wide screens */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="text-2xl md:text-3xl font-display font-bold text-brand-silver/20 whitespace-nowrap select-none">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

