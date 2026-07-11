"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import PortfolioBottomNavbar from "@/components/PortfolioBottomNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import posthog from "posthog-js";

type Category = "all" | "av-systems" | "photography" | "videography";
type AVSubcategory = "all" | "audio" | "stage";
type PhotoSubcategory = "events" | "food" | "graduation" | "pets" | "studio";

type PortfolioItem = {
  id: number;
  category: Category;
  subcategory: AVSubcategory;
  title: string;
  image?: string;
  videoId?: string;
  isVideo?: boolean;
  photoSubcategory?: PhotoSubcategory;
};

// Generate portfolio items from the folders
const generatePortfolioItems = (): PortfolioItem[] => {
  const items: PortfolioItem[] = [];
  let id = 1;

  // AV Audio Systems (10 images)
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: id++,
      category: "av-systems" as Category,
      subcategory: "audio" as AVSubcategory,
      image: `/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-${i}.jpg`,
      title: `Sound System`,
    });
  }

  // AV Stage Productions (8 images)
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      category: "av-systems" as Category,
      subcategory: "stage" as AVSubcategory,
      image: `/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-${i}.jpg`,
      title: `Stage Production`,
    });
  }

  // Photography - Events (29 images)
  for (let i = 1; i <= 29; i++) {
    items.push({
      id: id++,
      category: "photography" as Category,
      subcategory: "all" as AVSubcategory,
      photoSubcategory: "events" as PhotoSubcategory,
      image: `/portfolio-photo/Events/pixelpro-studios-event-photography-singapore-${i}.jpg`,
      title: `Event Photography`,
    });
  }

  // Photography - Food (8 images)
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      category: "photography" as Category,
      subcategory: "all" as AVSubcategory,
      photoSubcategory: "food" as PhotoSubcategory,
      image: `/portfolio-photo/Food/pixelpro-studios-food-photography-singapore-${i}.jpg`,
      title: `Food Photography`,
    });
  }

  // Photography - Graduation (6 images)
  for (let i = 1; i <= 6; i++) {
    const num = i.toString().padStart(2, '0');
    items.push({
      id: id++,
      category: "photography" as Category,
      subcategory: "all" as AVSubcategory,
      photoSubcategory: "graduation" as PhotoSubcategory,
      image: `/portfolio-photo/Graduation/pixelpro-studios-graduation-photography-singapore-${num}.jpg`,
      title: `Graduation Photography`,
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
      category: "videography" as Category,
      subcategory: "all" as AVSubcategory,
      videoId: video.id,
      title: video.title,
      isVideo: true,
    });
  });

  return items;
};

const portfolioItems = generatePortfolioItems();

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryParam || "av-systems");
  const [selectedAVSubcategory, setSelectedAVSubcategory] = useState<AVSubcategory>("all");
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    posthog.capture("portfolio_category_changed", { category });
  };

  // Update category when URL parameter changes
  useEffect(() => {
    if (categoryParam && (categoryParam === "av-systems" || categoryParam === "photography" || categoryParam === "videography")) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredItems = portfolioItems.filter((item) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory !== item.category) return false;
    if (selectedCategory === "av-systems" && selectedAVSubcategory !== "all") {
      return item.subcategory === selectedAVSubcategory;
    }
    return true;
  });

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
                    onClick={() => {
                      if (item.image) {
                        setSelectedImage({ image: item.image, title: item.title });
                        posthog.capture("portfolio_image_opened", { title: item.title, category: selectedCategory });
                      }
                    }}
                    className="group relative overflow-hidden rounded-2xl bg-brand-charcoal cursor-pointer break-inside-avoid mb-6 aspect-[4/3]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-display font-bold text-brand-off-white">
                        {item.title}
                      </h3>
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
          selectedAVSubcategory={selectedAVSubcategory}
          onCategoryChange={handleCategoryChange}
          onAVSubcategoryChange={setSelectedAVSubcategory}
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
