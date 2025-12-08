"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import PortfolioBottomNavbar from "@/components/PortfolioBottomNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Category = "audio" | "stage" | "photography" | "videography";

type PortfolioItem = {
  id: number;
  category: Category;
  title: string;
  image?: string;
  videoId?: string;
};

// Generate portfolio items from the folders
const generatePortfolioItems = (): PortfolioItem[] => {
  const items: PortfolioItem[] = [];
  let id = 1;

  // Audio Systems (10 images)
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: id++,
      category: "audio",
      image: `/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-${i}.jpg`,
      title: `Sound System`,
    });
  }

  // Stage Productions (8 images)
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      category: "stage",
      image: `/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-${i}.jpg`,
      title: `Stage Production`,
    });
  }

  // Photography - Events (29 images)
  for (let i = 1; i <= 29; i++) {
    items.push({
      id: id++,
      category: "photography",
      image: `/portfolio-photo/Events/pixelpro-studios-event-photography-singapore-${i}.jpg`,
      title: `Event Photography`,
    });
  }

  // Photography - Food (8 images)
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      category: "photography",
      image: `/portfolio-photo/Food/pixelpro-studios-food-photography-singapore-${i}.jpg`,
      title: `Food Photography`,
    });
  }

  // Photography - Graduation (6 images)
  for (let i = 1; i <= 6; i++) {
    const num = i.toString().padStart(2, '0');
    items.push({
      id: id++,
      category: "photography",
      image: `/portfolio-photo/Graduation/pixelpro-studios-graduation-photography-singapore-${num}.jpg`,
      title: `Graduation Photography`,
    });
  }

  // Photography - Pets (5 images)
  for (let i = 1; i <= 5; i++) {
    items.push({
      id: id++,
      category: "photography",
      image: `/portfolio-photo/Pets/pixelpro-studios-pet-photography-singapore-${i}.jpg`,
      title: `Pet Photography`,
    });
  }

  // Photography - Studio (5 images)
  for (let i = 1; i <= 5; i++) {
    items.push({
      id: id++,
      category: "photography",
      image: `/portfolio-photo/Studio/pixelpro-studios-studio-photography-singapore-${i}.jpg`,
      title: `Studio Photography`,
    });
  }

  // Videography - YouTube Videos
  const videos = [
    { id: "M2EVYaAZnuE", title: "Event Videography" },
    { id: "ZvpU03aguZY", title: "Corporate Video" },
    { id: "7XBPY9j5Xck", title: "Promotional Video" },
  ];

  videos.forEach((video) => {
    items.push({
      id: id++,
      category: "videography",
      videoId: video.id,
      title: video.title,
    });
  });

  return items;
};

const portfolioItems = generatePortfolioItems();

function PortfolioContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryParam || "audio");
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  // Update category when URL parameter changes
  useEffect(() => {
    if (categoryParam && (categoryParam === "audio" || categoryParam === "stage" || categoryParam === "photography" || categoryParam === "videography")) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredItems = portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-off-white">
            Portfolio.
          </h1>
          <p className="text-lg text-brand-off-white/80 max-w-2xl mx-auto font-light">
            Explore our work across events, media production, and AV solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        {selectedCategory === "videography" ? (
          // Video Layout - One per row
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-brand-charcoal">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          // Image Layout - Masonry
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                if (!item.image) return null;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => item.image && setSelectedImage({ image: item.image, title: item.title })}
                    className="group relative overflow-hidden rounded-2xl bg-brand-charcoal cursor-pointer break-inside-avoid mb-6 aspect-[4/3]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-brand-off-white font-semibold text-sm">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-off-white/60 text-lg">
              No items found in this category.
            </p>
          </div>
        )}
        </motion.div>

        <PortfolioBottomNavbar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div className="relative w-full h-full max-w-6xl max-h-[90vh] pointer-events-auto flex flex-col">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-0 right-0 md:-top-2 md:-right-12 p-3 md:p-2 text-brand-off-white hover:text-white transition-colors z-10 cursor-pointer bg-brand-black/50 md:bg-transparent rounded-full"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                
                {/* Image */}
                <div className="relative w-full flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    quality={100}
                  />
                </div>
                
                {/* Title */}
                <div className="mt-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-off-white">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-brand-black">
        <p className="text-brand-off-white">Loading portfolio...</p>
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}
