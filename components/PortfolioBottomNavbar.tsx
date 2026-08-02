"use client";

import { motion } from "framer-motion";

type Category = "audio" | "stage" | "photography" | "videography";

interface PortfolioBottomNavbarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories = [
  { id: "audio" as Category, label: "Audio" },
  { id: "stage" as Category, label: "Stage" },
  { id: "photography" as Category, label: "Photo" },
  { id: "videography" as Category, label: "Video" },
];

export default function PortfolioBottomNavbar({
  activeCategory,
  onCategoryChange,
}: PortfolioBottomNavbarProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-lg">
      <nav className="relative bg-brand-charcoal/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 shadow-lg flex justify-around items-center">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="group flex flex-col items-center gap-1 min-w-[60px] cursor-pointer"
              whileTap={{ y: 2, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className={`text-[10px] uppercase tracking-wider font-medium transition-colors ${
                isActive 
                  ? "text-brand-off-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                  : "text-brand-off-white/50 group-hover:text-brand-off-white"
              }`}>
                {category.label}
              </span>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
