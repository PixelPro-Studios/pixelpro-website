"use client";

import { Speaker, Camera, Video, Mic2, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "AV Systems",
    description: "Comprehensive audio-visual solutions including sound reinforcement, lighting design, and staging for events of any scale.",
    icon: Speaker,
  },
  {
    title: "Photography",
    description: "Professional event coverage, corporate headshots, and creative brand photography that captures the perfect moment.",
    icon: Camera,
  },
  {
    title: "Videography",
    description: "Cinematic video production, highlight reels, and high-definition live streaming services to broadcast your message.",
    icon: Video,
  },
  {
    title: "Talent",
    description: "Professional hosts, voiceover artists, and on-screen talent to elevate your production value and engage your audience.",
    icon: Mic2,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-brand-charcoal px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-brand-silver/50 rounded-full" />
          </div>
          <p className="text-brand-silver/70 max-w-md font-sans text-right md:text-left">
            Comprehensive media solutions tailored to your unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-brand-black p-8 md:p-10 rounded-lg border border-white/5 hover:border-brand-silver/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-6 h-6 text-brand-silver" />
              </div>
              
              <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-charcoal text-brand-silver group-hover:bg-brand-silver group-hover:text-brand-black transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-brand-platinum mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-brand-off-white/60 leading-relaxed font-sans group-hover:text-brand-off-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

