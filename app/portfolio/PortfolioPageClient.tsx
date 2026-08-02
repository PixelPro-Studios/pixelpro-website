"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import PortfolioBottomNavbar from "@/components/PortfolioBottomNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import posthog from "posthog-js";

type Category = "audio" | "stage" | "photography" | "videography";

type PhotographySubcategory = "events" | "food" | "graduation" | "pets" | "studio";

type PortfolioItem = {
  id: number;
  category: Category;
  subcategory?: PhotographySubcategory;
  title: string;
  image?: string;
  videoId?: string;
};

const CATEGORIES: Category[] = ["audio", "stage", "photography", "videography"];

const PHOTOGRAPHY_SUBCATEGORIES: { id: PhotographySubcategory; label: string }[] = [
  { id: "events", label: "Events" },
  { id: "food", label: "Food" },
  { id: "graduation", label: "Graduation" },
  { id: "pets", label: "Pets" },
  { id: "studio", label: "Studio" },
];

const SECTION_HEADINGS: Record<Category, string> = {
  audio: "Audio Systems",
  stage: "Stage Productions",
  photography: "Photography",
  videography: "Videography",
};

const generatePortfolioItems = (): PortfolioItem[] => {
  const items: PortfolioItem[] = [];
  let id = 1;

  for (let i = 1; i <= 10; i++) {
    items.push({
      id: id++,
      category: "audio",
      image: `/portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-${i}.jpg`,
      title: "Sound System",
    });
  }

  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      category: "stage",
      image: `/portfolio-av-stage/pixelpro-studios-stage-productions-singapore-${i}.jpg`,
      title: "Stage Production",
    });
  }

  for (let i = 1; i <= 29; i++) {
    items.push({
      id: id++,
      category: "photography",
      subcategory: "events",
      image: `/portfolio-photo/Events/pixelpro-studios-event-photography-singapore-${i}.jpg`,
      title: "Event Photography",
    });
  }

  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      category: "photography",
      subcategory: "food",
      image: `/portfolio-photo/Food/pixelpro-studios-food-photography-singapore-${i}.jpg`,
      title: "Food Photography",
    });
  }

  for (let i = 1; i <= 6; i++) {
    const num = i.toString().padStart(2, "0");
    items.push({
      id: id++,
      category: "photography",
      subcategory: "graduation",
      image: `/portfolio-photo/Graduation/pixelpro-studios-graduation-photography-singapore-${num}.jpg`,
      title: "Graduation Photography",
    });
  }

  for (let i = 1; i <= 13; i++) {
    items.push({
      id: id++,
      category: "photography",
      subcategory: "pets",
      image: `/portfolio-photo/Pets/pixelpro-studios-pet-photography-singapore-${i}.jpg`,
      title: "Pet Photography",
    });
  }

  for (let i = 1; i <= 13; i++) {
    items.push({
      id: id++,
      category: "photography",
      subcategory: "studio",
      image: `/portfolio-photo/Studio/pixelpro-studios-studio-photography-singapore-${i}.jpg`,
      title: "Studio Photography",
    });
  }

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

function ImageMasonry({
  items,
  onImageClick,
}: {
  items: PortfolioItem[];
  onImageClick: (item: PortfolioItem, pool: PortfolioItem[]) => void;
}) {
  const imageItems = items.filter((item) => item.image);

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
      {imageItems.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          onClick={() => onImageClick(item, imageItems)}
          className="group relative overflow-hidden rounded-2xl bg-brand-charcoal cursor-pointer break-inside-avoid mb-6 aspect-[4/3]"
        >
          <Image
            src={item.image!}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-brand-off-white font-semibold text-sm">{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("audio");
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    pool: PortfolioItem[];
  } | null>(null);
  const isScrollingRef = useRef(false);

  const scrollToCategory = useCallback((category: Category) => {
    const el = document.getElementById(category);
    if (!el) return;

    isScrollingRef.current = true;
    setActiveCategory(category);
    window.history.replaceState(null, "", `#${category}`);
    el.scrollIntoView({ behavior: "smooth" });
    posthog.capture("portfolio_category_changed", { category });

    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Category;
    if (CATEGORIES.includes(hash)) {
      window.setTimeout(() => scrollToCategory(hash), 100);
    }
  }, [scrollToCategory]);

  useEffect(() => {
    const sections = CATEGORIES.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topEntry = visible[0];
        if (topEntry?.target.id && CATEGORIES.includes(topEntry.target.id as Category)) {
          const category = topEntry.target.id as Category;
          setActiveCategory(category);
          window.history.replaceState(null, "", `#${category}`);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleImageClick = (item: PortfolioItem, pool: PortfolioItem[]) => {
    if (!item.image) return;
    setSelectedImage({ image: item.image, title: item.title, pool });
    posthog.capture("portfolio_image_viewed", {
      title: item.title,
      category: item.category,
      subcategory: item.subcategory,
    });
  };

  const getPreviousImage = useCallback(() => {
    if (!selectedImage) return null;
    const imageItems = selectedImage.pool;
    const currentIndex = imageItems.findIndex((item) => item.image === selectedImage.image);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : imageItems.length - 1;
    const prevItem = imageItems[prevIndex];
    return prevItem?.image
      ? { image: prevItem.image, title: prevItem.title, pool: selectedImage.pool }
      : null;
  }, [selectedImage]);

  const getNextImage = useCallback(() => {
    if (!selectedImage) return null;
    const imageItems = selectedImage.pool;
    const currentIndex = imageItems.findIndex((item) => item.image === selectedImage.image);
    const nextIndex = currentIndex < imageItems.length - 1 ? currentIndex + 1 : 0;
    const nextItem = imageItems[nextIndex];
    return nextItem?.image
      ? { image: nextItem.image, title: nextItem.title, pool: selectedImage.pool }
      : null;
  }, [selectedImage]);

  const handlePrevious = useCallback(() => {
    const prev = getPreviousImage();
    if (prev) setSelectedImage(prev);
  }, [getPreviousImage]);

  const handleNext = useCallback(() => {
    const next = getNextImage();
    if (next) setSelectedImage(next);
  }, [getNextImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  const audioItems = portfolioItems.filter((item) => item.category === "audio");
  const stageItems = portfolioItems.filter((item) => item.category === "stage");
  const videographyItems = portfolioItems.filter((item) => item.category === "videography");

  return (
    <>
      <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-gradient-to-b from-brand-black from-70% to-brand-silver/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-display text-brand-off-white">Portfolio.</h1>
            <p className="text-lg text-brand-off-white/80 max-w-2xl mx-auto font-light">
              Explore our work across events, media production, and AV solutions.
            </p>
          </div>

          <div className="space-y-24">
            {/* Audio */}
            <section id="audio" className="scroll-mt-32 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display text-brand-off-white">
                {SECTION_HEADINGS.audio}
              </h2>
              <ImageMasonry items={audioItems} onImageClick={handleImageClick} />
            </section>

            {/* Stage */}
            <section id="stage" className="scroll-mt-32 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display text-brand-off-white">
                {SECTION_HEADINGS.stage}
              </h2>
              <ImageMasonry items={stageItems} onImageClick={handleImageClick} />
            </section>

            {/* Photography */}
            <section id="photography" className="scroll-mt-32 space-y-12">
              <h2 className="text-3xl md:text-4xl font-display text-brand-off-white">
                {SECTION_HEADINGS.photography}
              </h2>
              {PHOTOGRAPHY_SUBCATEGORIES.map((sub) => {
                const subItems = portfolioItems.filter(
                  (item) => item.category === "photography" && item.subcategory === sub.id
                );
                if (subItems.length === 0) return null;

                return (
                  <div key={sub.id} className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-display text-brand-off-white/90">
                      {sub.label}
                    </h3>
                    <ImageMasonry items={subItems} onImageClick={handleImageClick} />
                  </div>
                );
              })}
            </section>

            {/* Videography */}
            <section id="videography" className="scroll-mt-32 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display text-brand-off-white">
                {SECTION_HEADINGS.videography}
              </h2>
              <div className="space-y-8">
                {videographyItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
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
              </div>
            </section>
          </div>
        </motion.div>

        <PortfolioBottomNavbar
          activeCategory={activeCategory}
          onCategoryChange={scrollToCategory}
        />
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div className="relative w-full h-full max-w-6xl max-h-[90vh] pointer-events-auto flex flex-col">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-0 right-0 md:-top-2 md:-right-12 p-3 md:p-2 text-brand-off-white hover:text-white transition-colors z-10 cursor-pointer bg-brand-black/50 md:bg-transparent rounded-full"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <div className="relative w-full flex-1 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage.image}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedImage.image}
                        alt={selectedImage.title}
                        fill
                        className="object-contain"
                        sizes="90vw"
                        quality={100}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex items-center justify-center gap-4">
                  {getPreviousImage() && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                      }}
                      className="p-3 md:p-4 text-brand-off-white hover:text-white transition-colors cursor-pointer bg-brand-black/50 hover:bg-brand-black/70 rounded-full backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                  )}

                  {getNextImage() && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="p-3 md:p-4 text-brand-off-white hover:text-white transition-colors cursor-pointer bg-brand-black/50 hover:bg-brand-black/70 rounded-full backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-2xl md:text-3xl font-display text-brand-off-white">
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
