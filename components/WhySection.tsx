"use client";

import { Camera, Eye, Clock, Layers } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Technical Precision",
    description: "State-of-the-art equipment and flawless execution for every frame. We invest in top-tier technology to ensure your visuals are crisp, clear, and professionally calibrated.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", // Camera lens/equipment
  },
  {
    title: "Creative Vision",
    description: "Storytelling that transcends the ordinary, capturing the essence of your event. Our creative directors work closely with you to turn abstract concepts into compelling visual narratives.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop", // Creative/Atmospheric
  },
  {
    title: "Unwavering Reliability",
    description: "On time, every time. We understand there are no second takes in live events. Our rigorous planning and backup systems guarantee peace of mind when it matters most.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop", // Event production/Backstage
  },
  {
    title: "End-to-End Production",
    description: "From concept to final edit, we handle the entire production lifecycle seamlessly. You get a single point of contact and a unified team dedicated to your project's success.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44e?q=80&w=1000&auto=format&fit=crop", // Editing/Studio
  },
];

export default function WhyUs() {
  return (
    <section className="py-12 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col gap-0">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center my-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 py-12 md:py-16 px-6 md:px-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-platinum">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-brand-off-white/70 leading-relaxed text-lg font-sans">
                  {reason.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative group overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
