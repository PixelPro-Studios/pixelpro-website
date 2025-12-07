"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  useEffect(() => {
    // Only auto-advance if there are multiple images
    if (images.length > 1) {
      const timer = setInterval(() => paginate(1), 5000);
      return () => clearInterval(timer);
    }
  }, [page, images.length]); // Depends on page to reset timer on manual navigation

  // If only one image, show it without carousel controls
  if (images.length === 1) {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-brand-charcoal/20">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group rounded-2xl overflow-hidden border border-white/10 bg-brand-charcoal/20">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[imageIndex]}
            alt={`${alt} ${imageIndex + 1}`}
            fill
            className="object-cover"
            priority // Helps with loading of current image
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-10">
        <button
          onClick={() => paginate(-1)}
          className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index + (Math.floor(page / images.length) * images.length), index > imageIndex ? 1 : -1])}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === imageIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
