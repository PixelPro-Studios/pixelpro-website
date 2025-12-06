"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background overlay - Simulating depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-charcoal/30 via-brand-black to-brand-black" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-brand-silver leading-tight"
        >
          Every Moment, <br className="hidden md:block" />
          Perfectly Framed
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-brand-off-white/80 max-w-2xl mx-auto font-sans"
        >
          Technical excellence meets creative vision to create visual legacies that endure.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <button className="mt-4 px-8 py-4 bg-brand-silver text-brand-black font-semibold rounded-sm hover:bg-white transition-colors duration-300 tracking-wide uppercase text-sm cursor-pointer">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}

