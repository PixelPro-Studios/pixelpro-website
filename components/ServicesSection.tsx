"use client";

import { Speaker, Camera, Video, Mic2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Audio Visual Systems",
    description: "Comprehensive audio-visual solutions including sound reinforcement, lighting design, and staging for events of any scale.",
    icon: Speaker,
    href: "/services/av-systems",
  },
  {
    title: "Photography",
    description: "Professional event coverage, corporate headshots, and creative brand photography that captures the perfect moment.",
    icon: Camera,
    href: "/services/photography",
  },
  {
    title: "Videography",
    description: "Cinematic event, video production, highlight reels, and corporate videos that tell your story.",
    icon: Video,
    href: "/services/videography",
  },
  {
    title: "Talent",
    description: "Professional hosts, voiceover artists, and on-screen talent to elevate your production value and engage your audience.",
    icon: Mic2,
    href: "/services/talent",
  },
];

export default function Services() {
  return (
    <section className="pt-32 pb-12 bg-transparent px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 gap-6">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white">What we offer.</h2>
          <p className="text-brand-off-white/90 max-w-2xl font-sans text-lg md:text-xl leading-relaxed">
            Comprehensive media solutions tailored to your unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileTap={{ y: 4, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                href={service.href}
                className="group relative overflow-hidden bg-gradient-to-br from-brand-charcoal/100 to-brand-black/40 p-8 md:p-10 rounded-2xl border border-white/10 hover:border-brand-silver/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,192,192,0.1)] hover:-translate-y-1 cursor-pointer block"
              >
                {/* Arrow Icon - Top Right */}
                <div className="absolute top-6 right-6 text-brand-silver/40 group-hover:text-brand-silver group-hover:translate-x-1 transition-all duration-300">
                  <ChevronRight className="w-6 h-6" />
                </div>

                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-charcoal text-brand-silver group-hover:bg-brand-silver group-hover:text-brand-black transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-brand-platinum mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-brand-off-white/80 leading-relaxed font-sans group-hover:text-brand-off-white/80 transition-colors duration-300">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

