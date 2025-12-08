"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "We were genuinely so pleased with the outcome. Everything fell into place seamlessly with PixelPro Studios. Every scenario was carefully thought through and handled, which gave us complete peace of mind throughout the process. They showed up prepared, paid attention to every detail, and delivered far beyond expectations.",
    author: "Amanda Lum",
    role: "Event Coordinator, Sahasra Pte Ltd",
  },
  {
    id: 2,
    text: "After I first shared my plan for a relay during our commemorative event, PixelPro Studios took the initiative to conduct a recce on their own. From there, they helped refine and firm up the entire event plan with impressive detail. I'm truly grateful for their technical expertise and, more importantly, the drive and passion they put into this project.",
    author: "Mr Teo Zhan Rui",
    role: "Event Coordinator, Victoria School",
  },
  {
    id: 3,
    text: "Despite their extremely competitive rates, PixelPro exceeded all expectations. They handled every demanding change with complete professionalism and delivered exactly what our event needed. Their support made a meaningful difference to our success, and we were genuinely impressed. Highly recommended.",
    author: "Mr Tan",
    role: "Ngee Ann Secondary School",
  },
  {
    id: 4,
    text: "We engaged PixelPro Studios for our company event, and their projection setup was smooth and professional. The team was incredibly helpful and ensured everything ran perfectly. When we needed extra projectors on short notice, they arranged swift delivery promptly. Truly professional service and nothing but praise for their work.",
    author: "Jasmine Chye",
    role: "Chief of Staff, Paradigm Connect Asia",
  },
  {
    id: 5,
    text: "PixelPro Studios did an excellent job recording our band performances. Their lighting and sound setup was meticulous, and they allowed us to review clips on the spot with helpful pointers to improve our presentation. Turnaround for both raw and edited videos was impressively fast. Highly recommended for any performing arts group needing professional expertise.",
    author: "Ms Tan",
    role: "Nanyang Junior College",
  },
  {
    id: 6,
    text: "I was informed last minute that I needed a sound system and crew, with barely a two-week runway. I got to know about PixelPro Studios and engaged them on short notice, and they more than delivered. The team provided high quality support, were very flexible throughout, and made everything incredibly easy to manage. Thank you for the great work!",
    author: "Sherelle Ng",
    role: "Event Manager, Performing Arts",
  },
  {
    id: 7,
    text: "PixelPro Studios was recommended by a friend, and they managed my very last-minute request with impressive professionalism and kindness. The team was patient, accommodating, and ensured everything went smoothly without stress. Their exceptional service and reassuring approach made a big difference. I would definitely recommend them.",
    author: "Tian",
    role: "",
  },
  {
    id: 8,
    text: "Engaged PixelPro Studios to provide a high-brightness projector and screen for our outdoor event. The visuals were incredibly clear, even in challenging lighting conditions. The setup was smooth, the team was professional, and the overall experience was excellent. We will definitely work with them again for future events.",
    author: "Kimberly Liew",
    role: "Events Manager, Paws for Cause",
  },
  {
    id: 9,
    text: "We engaged PixelPro for a company photoshoot, and the team was easy to communicate with and offered helpful creative suggestions. The photos turned out superb, with excellent editing and a quick turnaround. Their professionalism made the entire process smooth. We're very satisfied and will definitely work with them again. Would highly recommend them!",
    author: "James",
    role: "Marketing Executive, Gelatology Lab",
  },
  {
    id: 10,
    text: "PixelPro Studios supported Victoria School Chinese Orchestra with videography and photography, and the final work was excellent. They were receptive to feedback, patient through multiple edits, and willing to customise their service to our needs. The team even coached our students in video editing. Responsible, reliable, and committed. We would gladly work with them again.",
    author: "Tan Yan Li",
    role: "Head of Department, Victoria School",
  },
  {
    id: 11,
    text: "PixelPro Studios delivered affordable yet high-quality video and audio recording for our event. We received both 1080p and 4K download links on the same day, which was incredibly efficient. They also offered helpful suggestions throughout the recording, ensuring a better final result. Overall, it was a very smooth, reliable, and impressive experience.",
    author: "De Shun Chin",
    role: "Performing Arts Teacher",
  },
  {
    id: 12,
    text: "PixelPro Studios was friendly, accommodating, and flexible throughout the entire rental process. The equipment was in excellent condition and helped our shoot run smoothly without any issues. We were very satisfied with their service and will definitely return for future rentals.",
    author: "Santhosh Chandran",
    role: "Operations Executive, Local SME",
  },
  {
    id: 13,
    text: "We engaged PixelPro for our event, and the experience was excellent from start to finish. Communication was seamless, the team arrived early, and the sound system was flawless throughout, including during the minister's speech. They handled last-minute requests with calm professionalism. A reliable, friendly, and highly capable team I'd recommend.",
    author: "Gwendolyn Anne David",
    role: "Community Event Organiser, People's Association",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.5,
  });

  const getNextIndex = () => (currentIndex + 1) % testimonials.length;

  const handleFlip = (showHeartsAnimation: boolean = false) => {
    if (isFlipping || showHearts) return;
    setIsFlipping(true);
    
    // Trigger heart shower only if manually clicked
    if (showHeartsAnimation) {
      setShowHearts(true);
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 0.3,
      }));
      setHearts(newHearts);
      
      setTimeout(() => {
        setShowHearts(false);
      }, 2000);
    }
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsFlipping(false);
    }, 800);
  };

  // Auto-advance every 12 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleFlip(false); // Auto-advance without hearts
    }, 12000);

    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer when currentIndex changes

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Heart Shower Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: -50, x: `${heart.x}vw`, opacity: 1, scale: 0 }}
              animate={{ 
                y: "100vh", 
                opacity: [1, 1, 0],
                scale: [0, 1.5, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 2, 
                delay: heart.delay,
                ease: "easeIn"
              }}
              className="absolute text-4xl"
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      {/* Sticky Heart Button - Fixed to Bottom of Screen */}
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
            style={{ pointerEvents: 'auto' }}
          >
            <motion.button
              onClick={() => handleFlip(true)}
              disabled={isFlipping || showHearts}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-silver/20 to-brand-silver/10 border-2 border-brand-silver/30 flex items-center justify-center hover:border-brand-silver hover:from-brand-silver/30 hover:to-brand-silver/20 transition-all cursor-pointer shadow-lg hover:shadow-brand-silver/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label="Next testimonial"
            >
              <span className="text-4xl">❤️</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold text-brand-off-white mb-4">
            Our clients love us.
          </h2>
        </motion.div>

        {/* Stacked Cards with Flip Animation */}
        <div className="relative flex flex-col items-center min-h-[400px]">
          <div className="w-full max-w-4xl mx-auto px-4 relative flex-1 flex items-center">
            {/* Next Card (Behind) - Hidden until current card flips */}
            <motion.div
              key={`next-${currentIndex}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ 
                scale: isFlipping ? 1 : 0.95, 
                opacity: isFlipping ? 1 : 0 
              }}
              className="absolute inset-0 z-0"
            >
              <div className="relative bg-brand-charcoal/20 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col justify-between overflow-hidden max-h-[450px]">
                <div className="mb-6 relative z-10 overflow-y-auto flex-1">
                  <p className="text-base md:text-lg text-brand-off-white/70 leading-relaxed italic text-justify">
                    "{testimonials[getNextIndex()].text}"
                  </p>
                </div>
                <div className="text-center relative z-10">
                  <p className="text-brand-off-white/70 font-semibold text-lg mb-1">
                    {testimonials[getNextIndex()].author}
                  </p>
                  {testimonials[getNextIndex()].role && (
                    <p className="text-brand-silver/50 text-sm">
                      {testimonials[getNextIndex()].role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Current Card (Front) */}
            <motion.div
              key={`current-${currentIndex}`}
              initial={{ scale: 1, opacity: 1, rotateZ: 0, x: 0, y: 0 }}
              animate={
                isFlipping
                  ? {
                      scale: 0.8,
                      opacity: 0,
                      rotateZ: -15,
                      x: -100,
                      y: -50,
                    }
                  : {
                      scale: 1,
                      opacity: 1,
                      rotateZ: 0,
                      x: 0,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="absolute inset-0 z-10"
            >
              <div className="relative bg-brand-charcoal/30 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl max-h-[450px]">
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  {/* Top shine */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-silver/50 to-transparent" />
                  {/* Bottom shine */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-silver/50 to-transparent" />
                  {/* Left shine */}
                  <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-silver/50 to-transparent" />
                  {/* Right shine */}
                  <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-silver/50 to-transparent" />
                  {/* Corner glows */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-silver/10 rounded-full blur-3xl" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-silver/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-silver/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-silver/10 rounded-full blur-3xl" />
                </div>

                <div className="mb-12 relative z-10 overflow-y-auto flex-1">
                  <p className="text-base md:text-lg text-brand-off-white/90 leading-relaxed italic text-justify">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
                <div className="text-center relative z-10">
                  <p className="text-brand-off-white font-semibold text-lg mb-1">
                    {testimonials[currentIndex].author}
                  </p>
                  {testimonials[currentIndex].role && (
                    <p className="text-brand-silver/70 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress Indicator - Always below cards */}
          <div className="mt-4 flex gap-2 justify-center">
            {testimonials.map((_, index) => (
              <motion.button
                key={`${index}-${currentIndex}`}
                onClick={() => {
                  if (!isFlipping && index !== currentIndex) {
                    setCurrentIndex(index);
                  }
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: index === currentIndex ? 1 : 0.8,
                  opacity: index === currentIndex ? 1 : 0.5
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`relative h-1.5 rounded-full transition-all cursor-pointer overflow-hidden ${
                  index === currentIndex
                    ? "bg-brand-silver/30 w-8"
                    : "bg-brand-silver/30 w-1.5 hover:bg-brand-silver/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-brand-silver rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 12, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

