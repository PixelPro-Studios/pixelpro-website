"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "I am really glad that I have found PixelPro Studios when I went looking for a professional firm to videotape a speech to be used for the University of Chicago 10th Anniversary celebration in Beijing. I appreciate how Joe and Lukas did absolutely everything to make this a success. First of all, they did a dry run with all the equipment they've deemed necessary for the actual session; this consists of sound proofing panels, several cameras and an assorted lighting. The actual session went so smoothly after a long preparation of positioning equipment and testing. We were just so pleased with the result that everything falls into place when PixelPro Studios delivers. It is evident that they assume nothing, and went about making sure all scenarios are catered for, leaving nothing to render a less than desirable outcome of the taping. I really appreciated the hard work and dedication and especially the professionalism of the team.",
    author: "Amanda Lum",
    role: "Event Coordinator, Sahasra Pte Ltd",
  },
  {
    id: 2,
    text: "After I first proposed my plan for a relay during a commemorative event, Lukas and Wee Joe did a recce on their own initiative. Subsequently, they helped me firm up the event plan with much details. I am very appreciative of their technical expertise and of course, their drive and passion put into this project.",
    author: "Mr Teo Zhan Rui",
    role: "Event Coordinator, Victoria School",
  },
  {
    id: 3,
    text: "It was by chance that my organisation got to know about PixelPro. As the pricing they charged was significantly lower (and I really mean, worlds' apart) than the other vendors that I sourced for, I was not having very high expectations. However, I must say they more than surpass my hopes and I highly recommend them. I requested a lot of changes and my demands weren't exactly easy. But PixelPro never once showed me any attitude such as \"paying peanuts and demanding melons\". Rather they were professional through and through. In the end, we got what we needed and I must state that they played a significant role for us. Thank you PixelPro.",
    author: "Mr Tan",
    role: "Ngee Ann Secondary School",
  },
  {
    id: 4,
    text: "Engaged Lukas for my company's event to provide projectors. As I needed projector with usb compatibility, he went above and beyond to source for usb players that could be used with the projectors. The setting up was professional and he was super helpful in getting everything up and running. We needed a last min hire of another projector and even after he had left the premises, he arranged for a delivery to send it over swiftly. Really professional work here, nothing but praises 👏 🙌",
    author: "Jasmine Chye",
    role: "Chief of Staff, Paradigm Connect Asia",
  },
  {
    id: 5,
    text: "Lukas and his team did an excellent job of recording our Band performances. Their equipment setup was elaborate; both the lighting and sound aspects of the videos were professionally and meticulously taken care of. During the actual recording, they had the equipment to allow us to view the clips to assess if they were satisfactory, and gave us useful pointers on how to enhance the presentation both visually and audio-wise. They also had a very short turnaround time when we requested to take a look at the videos, both in raw form and after editing. I would highly recommend PixelPro to any performing arts group that requires their video recording expertise.",
    author: "Ms Tan",
    role: "Nanyang Junior College",
  },
  {
    id: 6,
    text: "I was informed I needed a sound system and crew very last minute with a 2 weeks runway. Got to hear about PixelPros and engaged them on short notice but they more than just delivered. They really provide high quality service and are really easy to work with. Thank you",
    author: "Sherelle Ng",
    role: "Event Manager, Performing Arts",
  },
  {
    id: 7,
    text: "Lukas was recommended through a friend of mine and Lukas was professional and kind enough to meet my requests as it was a very last minute arrangement. He was patient and understanding, excellent service and experience. Will definitely recommend them!",
    author: "Tian",
    role: "",
  },
  {
    id: 8,
    text: "Hired Lukas to provide a projector for an outdoor event. Thank you for the excellent service and experience! We will definitely work with him again for future events.",
    author: "Kimberly Liew",
    role: "Events Manager, Paws for Cause",
  },
  {
    id: 9,
    text: "We engaged PixelPro to help us take photos for our gelato earlier last month. They were easy to communicate with and helpful in suggesting ideas and concepts we could adopt during the shoot to ensure maximum results. The quality of the photos turned out to be superb, with incredible editing skills and quick turnaround, we were really satisfied with the results of this photoshoot. They have been very professional throughout the entire process and would definitely look to engage them for another photoshoot in the near future. Would recommend them strongly to anyone looking for a great photoshoot experience with fantastic results.",
    author: "James",
    role: "Marketing Executive, Gelatology Lab",
  },
  {
    id: 10,
    text: "PixelPro Studios helped Victoria School Chinese Orchestra in our video recording and photography last year. The quality of photos and videos were very good and they were receptive to our feedback, and were patient in editing the photos and videos to our satisfaction. They were able to customize their service to meet our needs and even went beyond their duty by coaching some of the students in video editing skills. Overall, they have been very responsible and reliable and I would recommend them strongly for their services.",
    author: "Tan Yan Li",
    role: "Head of Department, Victoria School",
  },
  {
    id: 11,
    text: "PixelPro Studios offers an affordable and high quality video and audio recording services. We started the recording at 830am that day and they offered us a link to download the video recordings in 1080p and 4K resolutions by 1030pm on the same day of recording. They also offered suggestions during the recording to make the video better.",
    author: "De Shun Chin",
    role: "Performing Arts Teacher",
  },
  {
    id: 12,
    text: "A friendly, accommodating and flexible rental shop/ studios. Item was in great condition and it helped with my shoot. Will surely look to rent from you guys again! Thanks!",
    author: "Santhosh Chandran",
    role: "",
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
    if (isFlipping) return;
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

  // Auto-advance every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleFlip(false); // Auto-advance without hearts
    }, 20000);

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
              disabled={isFlipping}
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
        <div className="relative flex flex-col items-center min-h-[500px]">
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

                <div className="mb-6 relative z-10 overflow-y-auto flex-1">
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
          <div className="mt-8 flex gap-2 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping && index !== currentIndex) {
                    setCurrentIndex(index);
                  }
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "bg-brand-silver w-8"
                    : "bg-brand-silver/30 w-1.5 hover:bg-brand-silver/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

