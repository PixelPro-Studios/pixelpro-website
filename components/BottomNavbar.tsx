"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoreHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const mainNavItems = [
  { name: "AV Systems", href: "/services/av-systems" },
  { name: "Photo", href: "/services/photography" },
  { name: "Video", href: "/services/videography" },
  { name: "Talent", href: "/services/talent" },
];

const avNavItems = [
  { name: "Audio", id: "audio", href: "/services/av-systems#audio" },
  { name: "Lighting", id: "lighting", href: "/services/av-systems#lighting" },
  { name: "Projector", id: "projector", href: "/services/av-systems#projector" },
  { name: "LED Walls", id: "led-wall", href: "/services/av-systems#led-wall" },
];

interface BottomNavbarProps {
  position?: "bottom" | "top";
}

export default function BottomNavbar({ position = "bottom" }: BottomNavbarProps = {}) {
  const pathname = usePathname();
  const isAvPage = pathname === "/services/av-systems";
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isAvPage) return;

    const handleScroll = () => {
      const sections = avNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAvPage]);

  return (
    <div className={`fixed ${position === "top" ? "top-24" : "bottom-6"} left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-lg`}>
      <nav className="relative bg-brand-charcoal/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 shadow-lg flex justify-around items-center">
        
        {/* AV Page Navigation */}
        {isAvPage ? (
          <>
            {avNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  className="group flex flex-col items-center gap-1 min-w-[50px] cursor-pointer"
                  whileTap={{ y: 2, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className={`text-[9px] uppercase tracking-wider font-medium transition-colors ${
                    isActive 
                      ? "text-brand-off-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                      : "text-brand-off-white/50 group-hover:text-brand-off-white"
                  }`}>
                    {item.name}
                  </span>
                </motion.a>
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
                      className={`absolute right-0 ${position === "top" ? "top-full mt-4" : "bottom-full mb-4"} bg-brand-charcoal/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[140px] shadow-2xl z-50 flex flex-col gap-1`}
                    >
                      {mainNavItems.filter(item => item.href !== "/services/av-systems").map((item) => (
                        <motion.div
                          key={item.name}
                          whileTap={{ y: 2, scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setShowMoreMenu(false)}
                            className="px-4 py-2.5 rounded-xl text-xs font-medium text-brand-off-white/70 hover:text-brand-off-white hover:bg-white/5 transition-all text-left uppercase tracking-wide cursor-pointer block"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          /* Standard Navigation */
          mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                whileTap={{ y: 2, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col items-center gap-1 min-w-[60px] cursor-pointer"
                >
                  <span className={`text-[10px] uppercase tracking-wider font-medium transition-colors ${
                    isActive 
                      ? "text-brand-off-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                      : "text-brand-off-white/50 group-hover:text-brand-off-white"
                  }`}>
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })
        )}
      </nav>
    </div>
  );
}
