"use client";

import BottomNavbar from "@/components/BottomNavbar";
import FaqSection from "@/components/FaqSection";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { photographyFaqs } from "@/lib/faqs";

export default function PhotographyPage() {
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
            Photography
          </h1>
          <h2 className="text-xl text-brand-off-white max-w-2xl mx-auto font-medium">
            Capturing the Energy, Emotion and Storytelling of Every Moment
          </h2>
        </div>

        {/* Photography Section */}
        <section id="photography" className="scroll-mt-32">
          <div className="space-y-8">
            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We provide high quality event photography designed to capture the energy, emotion and storytelling of every moment. Our photographers are trained to document events with precision, creativity and a strong understanding of brand requirements, ensuring that every image reflects the professionalism and atmosphere of your programme.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-photo/pixelpro-studios-photography-service-singapore.jpg",
                    "/services-photo/pixelpro-studios-photography-services-singapore.jpg"
                  ]} 
                  alt="Event Photography" 
                />
              </div>

              {/* Coverage List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">We cover a wide range of photography needs such as:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "Corporate event coverage",
                      "Product launches and brand activations",
                      "Conferences, seminars and award ceremonies",
                      "Community and grassroots events",
                      "Roadshows and mall events",
                      "Team bonding and company retreats",
                      "Media, PR and marketing content",
                      "Candid lifestyle photography",
                      "Group photos and VIP shots",
                      "On site corporate headshots"
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
              <p>Our photographers work with a combination of candid and planned shots to tell the full story of your event. We understand how to capture audience reactions, key speeches, stage highlights, brand elements, venue ambience and interactions that matter.</p>
              <p>Using professional full frame cameras and lenses, we ensure every shot is sharp, well lit and colour accurate. For events with fast movement or stage lighting, we use techniques that protect detail and preserve the atmosphere without distortion. For corporate settings, we focus on clarity, professionalism and consistency.</p>
              <p>We handle fast delivery timelines, with edited photos often ready within a few days, depending on the scope. If you need images urgently for PR or same day posting, we can provide quick selects on site or shortly after the event.</p>
              <p>PixelPro Studios combines technical mastery with a young and energetic team that works seamlessly with your event flow. The result is a clean, polished and complete visual record that supports your marketing, branding and memories for years to come.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/portfolio?category=photography" className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-brand-off-white text-brand-off-white font-semibold text-sm rounded-full hover:bg-brand-off-white hover:text-brand-black transition-all duration-300 group">
                    <Eye className="w-4 h-4" />
                    <span>See Our Work</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-off-white text-brand-black font-semibold text-sm rounded-full hover:bg-white transition-all duration-300 group">
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection faqs={photographyFaqs} />
      </motion.div>
      
      <BottomNavbar />
    </main>
  );
}
