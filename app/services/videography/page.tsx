"use client";

import BottomNavbar from "@/components/BottomNavbar";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import posthog from "posthog-js";

export default function VideographyPage() {
  useEffect(() => {
    posthog.capture("service_page_viewed", { service: "videography" });
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-off-white">
            Videography
          </h1>
          <h3 className="text-xl text-brand-off-white max-w-2xl mx-auto font-medium">
          Capturing Events with Clarity, Emotion and Visual Impact
          </h3>
        </div>

        {/* Videography Section */}
        <section id="videography" className="scroll-mt-32">
          <div className="space-y-8">
            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We deliver high quality videography designed to capture your event with clarity, emotion and visual impact. We specialise in creating videos that not only document your programme but also elevate your brand, strengthen engagement and showcase the essence of the experience.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-video/pixelpro-studios-videography-services-singapore.jpg"
                  ]} 
                  alt="Event Videography" 
                />
              </div>

              {/* Offerings List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">Our videography offerings include:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "Full event coverage",
                      "Highlight reels and recap videos",
                      "Corporate interview segments",
                      "Product and brand activation videos",
                      "Conference and seminar documentation",
                      "Roadshow and exhibition reels",
                      "Community and grassroots events",
                      "Same day edits upon request",
                      "Multi camera coverage",
                      "Drone videography for outdoor events",
                      "Social media short form content"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 mt-2 bg-brand-silver rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-brand-off-white/80 leading-relaxed pt-4 text-justify">
              <p>We use professional mirrorless systems, stabilisers, high quality audio capture and multiple lenses to ensure clean visuals, smooth motion and crisp sound. Whether your event is corporate, outdoor, fast paced or highly produced, our team adapts seamlessly to the environment.</p>
              <p>Our videographers understand the importance of storytelling. We focus on capturing key moments such as speeches, reactions, energy shots, branding placements, audience interactions and programme highlights. Every clip is selected with purpose and edited into a polished and engaging narrative.</p>
            </div>

            {/* Editing Process Box */}
            <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5">
              <h4 className="text-brand-off-white font-bold text-lg mb-6">The editing process includes:</h4>
              <ul className="space-y-3 text-brand-silver/80">
                {[
                  "Professional colour grading",
                  "Clean transitions",
                  "Music licensing options",
                  "Subtitle support",
                  "Motion graphics and title cards",
                  "Brand aligned styling",
                  "Fast turnaround timelines"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-brand-silver rounded-full flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-brand-off-white/80 leading-relaxed pt-4 text-justify">
              <p>We can also create social media optimised cuts such as vertical reels, promotional clips and teaser videos to help you maximise impact online.</p>
              <p>We combine technical precision with a young, passionate creative team that makes videography effortless for organisers. From pre-event planning to the final exported video, we ensure a seamless and reliable production process that delivers compelling results every time.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/portfolio?category=videography" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-brand-off-white text-brand-off-white font-semibold rounded-full hover:bg-brand-off-white hover:text-brand-black transition-all duration-300 group" onClick={() => posthog.capture("see_our_work_clicked", { service: "videography" })}>
                    <Eye className="w-4 h-4" />
                    <span>See Our Work</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-off-white text-brand-black font-semibold rounded-full hover:bg-white transition-all duration-300 group" onClick={() => posthog.capture("get_a_quote_clicked", { service: "videography" })}>
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      
      <BottomNavbar />
    </main>
  );
}
