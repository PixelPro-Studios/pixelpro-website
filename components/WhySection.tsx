"use client";

import { Camera, Eye, Clock, Layers } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "LIGHTNING-fast response time",
    description: "Whether it's a last-minute change, an urgent request or a same-day event, our team replies quickly and gets things moving immediately.",
    highlight: "No delays, no slow admin.",
    image: "/photos/lightning-fast-response-time.jpg",
  },
  {
    title: "Competitive Rates Without Compromising Quality",
    description: "We keep our pricing fair and transparent while using professional-grade equipment trusted at festivals, corporate productions, mall activations and community events.",
    highlight: "Get better value without the hidden markup.",
    image: "/photos/competitive-rates-without-compromising-quality.jpg",
  },
  {
    title: "One-Stop Solution for Your Entire Event",
    description: "From sound and stage to lighting, projection, LED walls, photography and videography. You only deal with one vendor, one team, one smooth workflow.",
    highlight: "",
    image: "/photos/one-stop-solution-for-your-entire-event.jpg",
  },
  {
    title: "Our Reliability Guarantee",
    description: "If a technical issue ever happens during your event, our team resolves it within thirty minutes or you receive an immediate discount.",
    highlight: "Zero stress, zero disruptions.",
    image: "/photos/our-reliability-guarantee.jpg",
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div 
      className={`flex flex-col md:flex-row items-center my-4 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Side */}
      <div className="w-full md:w-1/2 pt-4 pb-12 md:pb-16 px-6 md:px-16 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-platinum uppercase leading-tight">
            {reason.title}
          </h3>
        </div>
        <div className="text-brand-off-white/70 leading-relaxed text-lg font-sans text-justify">
          <p className="mb-4">{reason.description}</p>
          {reason.highlight && (
            <p className="font-bold text-brand-silver italic">{reason.highlight}</p>
          )}
        </div>
      </div>

      {/* Image Side */}
      <div ref={ref} className="w-full md:w-1/2 h-[200px] md:h-[400px] relative group overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <Image
          src={reason.image}
          alt={reason.title}
          fill
          className={`object-cover transition-all duration-[1500ms] group-hover:scale-105 ${
            isInView ? "grayscale-0" : "grayscale"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="pt-12 pb-6 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center text-center gap-6 pb-4">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-silver via-blue-400 to-brand-silver bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] hover:animate-[shimmer_0.8s_linear_infinite] transition-all cursor-default leading-tight pb-2">
              Let's bring your event to life.
            </h2>
        </div>

        <div className="flex flex-col gap-0 pt-12">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
