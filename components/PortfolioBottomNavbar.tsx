"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Category = "all" | "av-systems" | "photography" | "videography";
type AVSubcategory = "all" | "audio" | "stage";

interface PortfolioBottomNavbarProps {
  selectedCategory: Category;
  selectedAVSubcategory: AVSubcategory;
  onCategoryChange: (category: Category) => void;
  onAVSubcategoryChange: (subcategory: AVSubcategory) => void;
}

const mainCategories = [
  { id: "av-systems" as Category, label: "AV Systems" },
  { id: "photography" as Category, label: "Photo" },
  { id: "videography" as Category, label: "Video" },
];

const avSubcategories = [
  { id: "all" as AVSubcategory, label: "AV Systems" },
  { id: "audio" as AVSubcategory, label: "Audio" },
  { id: "stage" as AVSubcategory, label: "Stage" },
];

export default function PortfolioBottomNavbar({
  selectedCategory,
  selectedAVSubcategory,
  onCategoryChange,
  onAVSubcategoryChange,
}: PortfolioBottomNavbarProps) {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const isAvCategory = selectedCategory === "av-systems";

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-lg">
      <nav className="relative bg-brand-charcoal/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 shadow-lg flex justify-around items-center">
        
        {/* AV Systems Category - Show Subcategories */}
        {isAvCategory ? (
          <>
            {avSubcategories.map((subcategory) => {
              const isActive = selectedAVSubcategory === subcategory.id;
              return (
                <motion.button
                  key={subcategory.id}
                  onClick={() => onAVSubcategoryChange(subcategory.id)}
                  className="group flex flex-col items-center gap-1 min-w-[50px] cursor-pointer"
                  whileTap={{ y: 2, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className={`text-[9px] uppercase tracking-wider font-medium transition-colors ${
                    isActive 
                      ? "text-brand-off-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                      : "text-brand-off-white/50 group-hover:text-brand-off-white"
                  }`}>
                    {subcategory.label}
                  </span>
                </motion.button>
              );
            })}
            
            {/* More Button */}
            <div className="relative">
              <motion.button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="group flex flex-col items-center gap-1 min-w-[50px] outline-none cursor-pointer"
                whileTap={{ y: 2, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className={`transition-colors ${showMoreMenu ? "text-brand-off-white" : "text-brand-off-white/50 group-hover:text-brand-off-white"}`}>
                  <MoreHorizontal className="w-4 h-4" />
                </div>
              </motion.button>

              {/* Expanded Menu Popup */}
              <AnimatePresence>
                {showMoreMenu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowMoreMenu(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full right-0 mb-4 bg-brand-charcoal/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[140px] shadow-2xl z-50 flex flex-col gap-1"
                    >
                      {mainCategories.filter(cat => cat.id !== "av-systems").map((category) => (
                        <motion.button
                          key={category.id}
                          onClick={() => {
                            onCategoryChange(category.id);
                            onAVSubcategoryChange("all");
                            setShowMoreMenu(false);
                          }}
                          className="px-4 py-2.5 rounded-xl text-xs font-medium text-brand-off-white/70 hover:text-brand-off-white hover:bg-white/5 transition-all text-left uppercase tracking-wide cursor-pointer"
                          whileTap={{ y: 2, scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {category.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          /* Standard Category Navigation */
          mainCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  if (category.id !== "av-systems") {
                    onAVSubcategoryChange("all");
                  }
                }}
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
          })
        )}
      </nav>
    </div>
  );
}
