"use client";

import BottomNavbar from "@/components/BottomNavbar";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AVSystemsPage() {
  useEffect(() => {
    // Enable smooth scrolling for this page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Clean up - reset to default
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto space-y-32"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-off-white">
            AV Systems
          </h1>
          <p className="text-lg text-brand-off-white/80 max-w-2xl mx-auto font-light">
            State-of-the-art audio visual systems for events, conferences, and installations.
          </p>
        </div>

        {/* Audio System Section */}
        <section id="audio" className="scroll-mt-32">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white">Audio System Rental</h2>
              <h3 className="text-xl text-brand-off-white/80 font-medium leading-relaxed">Premium Sound Systems for Concerts, Corporate Events, Roadshows, Exhibitions and Community Shows</h3>
            </div>

            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We deliver professional audio solutions engineered for events that demand power, clarity and full reliability. Our systems are built to perform across any environment, including concert stages, shopping mall atriums, outdoor fields, hotel ballrooms, roadshow booths and community pavilions.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-av-audio/pixelpro-studios-audio-visual-productions-singapore.jpg"
                  ]} 
                  alt="Audio System Setup" 
                />
              </div>

              {/* Equipment List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">We supply a wide range of audio equipment such as:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "Full range speakers", "Subwoofers", "Touring grade line array systems",
                      "Stage monitors", "In-ear monitor systems", "Digital mixers",
                      "Wireless handheld and lapel microphones", "Instrument microphones",
                      "DI boxes", "Signal distribution and audio networking"
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
              <p>Every setup is designed, tuned and tested by experienced live sound engineers who understand how to achieve clean vocal presence, impactful music reinforcement and even coverage throughout the venue. Whether the event needs background ambience, high-energy music, formal speeches or a live performance, we configure the right system to match the exact space and audience size.</p>
              <p>Our team handles technical planning, equipment preparation, on-site setup, sound checks, safety checks and full event support. This ensures consistent performance from start to finish and gives organisers complete confidence that the audio will run smoothly.</p>
              <p>We combine professional-level sound engineering with a young, energetic crew that genuinely cares about creating great experiences. We focus on delivering outstanding audio performance while keeping the process simple, seamless and stress-free for every organiser.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/portfolio?category=av-systems" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-brand-off-white text-brand-off-white font-semibold rounded-full hover:bg-brand-off-white hover:text-brand-black transition-all duration-300 group">
                    <Eye className="w-4 h-4" />
                    <span>See Our Work</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-off-white text-brand-black font-semibold rounded-full hover:bg-white transition-all duration-300 group">
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stage Lighting Section */}
        <section id="lighting" className="scroll-mt-32">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white">Stage Lighting Rental</h2>
              <h3 className="text-xl text-brand-off-white/80 font-medium leading-relaxed">Professional Lighting for Concerts, Corporate Shows, Roadshows, Exhibitions and Outdoor Events</h3>
            </div>

            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We provide full-scale lighting solutions designed to transform any venue into a dynamic, visually striking experience. From intimate stages to large outdoor arenas, our lighting systems create atmosphere, focus audience attention and elevate every performance or presentation.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-av-lighting/pixelpro-studios-stage-lighting-singapore.jpg"
                  ]} 
                  alt="Stage Lighting" 
                />
              </div>

              {/* Equipment List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">We offer a comprehensive range of lighting equipment, such as:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "LED Par cans", "Moving head spot, wash and beam lights", 
                      "Fresnel and profile stage lights", "RGBWA+UV wash lights", 
                      "Follow spots", "Uplighting", "Effect and ambience lighting", 
                      "DMX controllers", "Wireless lighting systems", 
                      "Lighting stands and truss-mounted rigs", "Outdoor-rated fixtures"
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
              <p>Our lighting designers and technicians plan every angle carefully to ensure balanced illumination, clean stage visibility and dramatic impact where needed. Whether the event requires a concert look, an elegant ambience, product highlighting, or a full theatrical treatment, we create a lighting plan that aligns with your theme and desired audience experience.</p>
              <p>We handle layout planning, power distribution, mounting, safety checks, DMX programming, live cue operation and teardown. This gives organisers complete assurance that the lighting will enhance the event without complications.</p>
              <p>We combine professional-level lighting design with a young, energetic team that understands how to keep events stress-free. Our focus is on delivering impressive visual impact while ensuring everything runs smoothly from start to end.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/portfolio?category=av-systems" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-brand-off-white text-brand-off-white font-semibold rounded-full hover:bg-brand-off-white hover:text-brand-black transition-all duration-300 group">
                    <Eye className="w-4 h-4" />
                    <span>See Our Work</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-off-white text-brand-black font-semibold rounded-full hover:bg-white transition-all duration-300 group">
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projector Section */}
        <section id="projector" className="scroll-mt-32">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white">Projector and Screen Rental</h2>
              <h3 className="text-xl text-brand-off-white/80 font-medium leading-relaxed">High Brightness Projection for Corporate Events, Presentations, Outdoor Movie Nights, Exhibitions and Roadshows</h3>
            </div>

            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We deliver crystal clear projection solutions tailored for every type of event. Whether it is a professional corporate presentation, a training session, a product showcase, a wedding montage, or an outdoor movie screening, our projectors and screens ensure your visuals look sharp, bright and immersive.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-av-projector/pixelpro-studios-projector-rental-singapore.jpg",
                    "/services-av-projector/pixelpro-studios-projector-screen-rental-singapore.jpg"
                  ]} 
                  alt="Projector Setup" 
                />
              </div>

              {/* Equipment List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">We provide a full range of projection equipment, including:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "High brightness projectors (5000+ lumens)", "Short-throw & ultra-short-throw projectors",
                      "Large format screens (100” to 300”)", "Fast fold projector screens",
                      "HDMI, audio and signal management solutions", "Backup projection equipment"
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
              <p>Every setup is planned to ensure maximum clarity and visibility regardless of venue lighting conditions. For brightly lit halls, shopping malls and outdoor environments, our high-lumen projectors guarantee crisp images that stay readable and impactful from all angles.</p>
              <p>We support a wide range of event types such as corporate seminars, AGMs, exhibitions, roadshows, school ceremonies, product launches, outdoor screenings and community events. Our team handles delivery, lens adjustment, alignment, keystone correction, cable routing, testing and on-site support.</p>
              <p>We combine professional-grade projection systems with a young, detail focused team that ensures your visuals look impressive and run smoothly from start to finish. The result is a polished, reliable presentation that enhances your event and leaves a strong impression on your audience.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/portfolio?category=av-systems" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-brand-off-white text-brand-off-white font-semibold rounded-full hover:bg-brand-off-white hover:text-brand-black transition-all duration-300 group">
                    <Eye className="w-4 h-4" />
                    <span>See Our Work</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-off-white text-brand-black font-semibold rounded-full hover:bg-white transition-all duration-300 group">
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* LED Wall Section */}
        <section id="led-wall" className="scroll-mt-32">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white">LED Wall Rental</h2>
              <h3 className="text-xl text-brand-off-white/80 font-medium leading-relaxed">High Impact Visuals for Concerts, Exhibitions, Roadshows, Conferences, Product Launches and Large Scale Events</h3>
            </div>

            <p className="text-brand-off-white/80 leading-relaxed text-justify">
              We deliver professional LED wall solutions designed for high visibility, high energy and high engagement. Our LED screens serve as powerful visual centrepieces that elevate any event, from corporate conferences to mall activations and outdoor festivals.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Carousel Left */}
              <div className="w-full h-[400px] lg:h-auto min-h-[400px]">
                <ImageCarousel 
                  images={[
                    "/services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg",
                    "/services-av-led/pixelpro-studios-led-wall-services-singapore.jpg",
                  ]} 
                  alt="LED Wall" 
                />
              </div>

              {/* Equipment List Right */}
              <div className="flex flex-col justify-center">
                <div className="bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 h-full">
                  <h4 className="text-brand-off-white font-bold text-lg mb-6">We offer a full suite of LED wall options, including:</h4>
                  <ul className="space-y-3 text-brand-silver/80">
                    {[
                      "Indoor and outdoor LED panels", "High resolution P2.5 and P3.9 systems",
                      "High 3840Hz refresh rates", "Ultra bright outdoor panels (4000+ nits)",
                      "Modular panel configurations", "Full stage backdrops & immersive canvases",
                      "Curved and creative LED installations", "Video processors & signal management"
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
              <p>Every LED installation is engineered for maximum clarity and reliability. For outdoor spaces and bright shopping mall environments, our high brightness 4000 nits and above LED screens ensure visuals remain clear and vibrant even under direct sunlight. Our high refresh rate panels offer smooth animation, crisp text and true colour reproduction ideal for corporate presentations and live performances.</p>
              <p>Our LED walls support live camera feed, sponsor loops, product visuals, dynamic motion graphics, countdown timers and full stage shows. Whether you need a six metre conference backdrop, towering exhibition columns, or large outdoor screens at a festival, we configure the ideal setup for your venue and programme flow.</p>
              <p>We handle every detail, including structure design, rigging, cable management, power distribution, calibration, testing and on-site video operations. For large productions, we provide full video crew support to ensure seamless transitions and reliable playback.</p>
              <p>With high performance LED systems and a dedicated young team that understands the demands of live events, we ensure your visuals look world class, polished and unforgettable from start to finish.</p>
              
              <div className="pt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/portfolio?category=av-systems" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-brand-off-white text-brand-off-white font-semibold rounded-full hover:bg-brand-off-white hover:text-brand-black transition-all duration-300 group">
                    <Eye className="w-4 h-4" />
                    <span>See Our Work</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileTap={{ y: 4, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-off-white text-brand-black font-semibold rounded-full hover:bg-white transition-all duration-300 group">
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
