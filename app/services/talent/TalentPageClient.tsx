"use client";

import BottomNavbar from "@/components/BottomNavbar";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function TalentPage() {
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
            Talent & Entertainment
          </h1>
          <h2 className="text-xl text-brand-off-white max-w-2xl mx-auto font-medium">
            Elevating Events with Confidence and Professionalism
          </h2>
        </div>

        {/* Talent Section */}
        <section id="talent" className="scroll-mt-32">
          <div className="space-y-8">
            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We offer a curated selection of entertainment and talent to elevate the energy, engagement and overall atmosphere of your event. Whether you want a high energy show, a smooth corporate flow, or a culturally immersive experience, our talent roster ensures your programme comes alive with confidence and professionalism.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-talent/pixelpro-studios-talent-and-entertainment-singapore.jpg"
                  ]} 
                  alt="Talent and Entertainment" 
                />
              </div>

              {/* Performers List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">We provide a wide range of performers such as:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "Professional event emcees",
                      "Bilingual and multilingual hosts",
                      "DJs for parties, activations and mall events",
                      "Live bands and acoustic groups",
                      "Chinese Orchestra ensembles",
                      "Cultural performers for festive or thematic events",
                      "Speciality performers for launches and crowd engagement",
                      "Vocalists and solo instrumentalists"
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
              <p>Our emcees are trained to manage crowd flow, keep audiences engaged and elevate brand messaging in a natural and impactful way. For corporate events, they maintain professionalism and clarity. For activations and community events, they bring energy, personality and crowd interaction.</p>
              <p>Our DJs and live musicians tailor their sets to the event environment, delivering music that shapes ambience, builds excitement and enhances the guest experience. Whether it is a cosy evening dinner, a vibrant mall event, a wedding celebration or a large scale festival, our performers know how to set the right tone.</p>
              <p>With us, entertainment selection is integrated seamlessly into your full AV setup. We coordinate sound checks, stage requirements, cue planning, lighting design, and technical support so performers can focus fully on delivering a great show.</p>
              <p>We ensure every performance feels polished, confident and unforgettable, backed by a young and passionate team that makes everything easy and stress free for organisers.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
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
      </motion.div>
      
      <BottomNavbar />
    </main>
  );
}
