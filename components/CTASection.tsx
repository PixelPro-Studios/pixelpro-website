"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-b from-brand-charcoal to-brand-black relative overflow-hidden">
       {/* Abstract bg element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-off-white mb-6 tracking-tight">
          Your Vision, Our Lens.
        </h2>
        <p className="text-lg md:text-xl text-brand-silver/70 mb-12 max-w-2xl mx-auto font-sans font-light">
          Don't let your masterpiece go uncaptured. Let's build something extraordinary together.
        </p>
        
        <button className="group relative inline-flex items-center px-10 py-5 bg-transparent border border-brand-silver text-brand-silver font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-brand-silver hover:text-brand-black cursor-pointer rounded-sm">
          <span>Start Your Legacy</span>
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}

