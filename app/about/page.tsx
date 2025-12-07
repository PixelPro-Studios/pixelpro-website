"use client";

import { motion } from "framer-motion";
import { Film, Target, TrendingUp, Users, Lightbulb, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Film,
      title: "Ownership",
      description: "We treat every event as if it were our own and commit fully to its success.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "We care deeply about details. Every cable, cue and connection matters.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We constantly learn, improve and adopt better practices and technology.",
    },
    {
      icon: Users,
      title: "Care for People",
      description: "We respect clients, partners and colleagues. Working with us should always feel positive.",
    },
    {
      icon: Lightbulb,
      title: "Resourcefulness",
      description: "We solve problems creatively and calmly, even under pressure.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and bring energy and enthusiasm to every setup.",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16 space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-4">
              Our story.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-brand-off-white/90 leading-relaxed max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl font-light text-justify">
              Founded in 2019, PixelPro Studios was built from a deep passion in event productions. 
              What started as two friends with a vision has grown into Singapore's one-stop event centre, 
              delivering seamless event experiences.
            </p>
            <p className="text-lg md:text-xl font-light text-justify">
              We believe great events should be effortless for organisers and accessible for everyone. 
              Affordable pricing, responsive communication, and our reliability guarantee mean you can 
              focus on the vision of your event while we deliver smooth, professional experiences every. 
              single. time.
            </p>
          </motion.div>
        </div>

        {/* What Drives Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="border-t border-brand-silver/20 pt-12 mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-off-white mb-6">
              What drives us
            </h2>
            <p className="text-lg md:text-xl text-brand-off-white/90 font-light leading-relaxed max-w-4xl mx-auto text-justify">
              To make every event seamless and stress free by delivering reliable sound, lighting, 
              visuals and media support. We focus on reliability, affordability and professional 
              execution for event organisers of any scale.
            </p>
          </div>
        </motion.div>

        {/* What We Stand For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="border-t border-brand-silver/20 pt-12 mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-off-white mb-6">
              What we stand for
            </h2>
            <p className="text-lg md:text-xl text-brand-off-white/90 font-light leading-relaxed max-w-4xl mx-auto text-justify">
              To be Singapore's most trusted one stop event partner, known for reliability, 
              energy and consistently smooth event experiences across all communities and industries.
            </p>
          </div>
        </motion.div>

        {/* What We Care About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="border-t border-brand-silver/20 pt-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-off-white mb-12">
              What we care about
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-brand-charcoal/30 border border-white/5 rounded-2xl p-8 hover:bg-brand-charcoal/50 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-silver/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-brand-silver" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-off-white uppercase tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-brand-off-white/80 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

