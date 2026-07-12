"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Logo Component to reuse
  const Logo = () => (
    <Link href="/" onClick={() => setIsOpen(false)} className="relative z-50">
      <motion.div 
        className="w-8 h-8 relative group"
        whileHover={{ 
          rotate: 360
        }}
        whileTap={{ 
          scale: 0.6
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for slow-fast-slow (ease-in-out variant)
        }}
      >
         <Image 
           src="/logos/pixelpro_logo_light.svg" 
           alt="PixelPro Studios" 
           fill
           className="object-contain"
         />
      </motion.div>
    </Link>
  );

  // Central Text Component to reuse
  const BrandText = () => (
    <motion.div whileTap={{ y: 2, scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Link href="/" onClick={() => setIsOpen(false)} className="font-display font-bold text-lg tracking-wide text-brand-off-white hover:text-brand-silver transition-colors cursor-pointer">
        pixelpro
      </Link>
    </motion.div>
  );

  return (
    <>
      {/* Backdrop for when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Main Expanding Navbar Container */}
      <div className="fixed top-6 left-0 right-0 z-[70] flex justify-center pointer-events-none">
        
        {/* Brand Text Overlay - Moved OUTSIDE the motion.div to prevent animation */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-[80] pointer-events-none">
          <div className="w-[90%] max-w-lg flex items-center justify-center px-5 py-3 h-[calc(32px+24px)]">
            {/* Center: Brand Name */}
            <div className="pointer-events-auto">
              <BrandText />
            </div>
          </div>
        </div>

        <motion.div 
          layout // This enables the smooth size/position animation
          style={{ transformOrigin: "top" }}
          className={`pointer-events-auto overflow-hidden border relative flex flex-col ${
             isOpen 
             ? "bg-brand-charcoal w-[90%] max-w-3xl rounded-3xl border-white/10 shadow-2xl max-h-[calc(100vh-3rem)]" 
             : `w-[90%] max-w-lg rounded-[2rem] ${scrolled ? "bg-brand-charcoal/90 backdrop-blur-md shadow-lg border-white/10" : "bg-brand-charcoal/60 backdrop-blur-sm border-transparent"}`
          }`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header Row - Logo and Toggle Button */}
          {/* Note: BrandText is removed from here and placed in the overlay above */}
          <div className="flex items-center justify-between px-5 py-3 flex-shrink-0 w-full">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Right: Toggle Button */}
            <div className="flex-shrink-0">
              <button
                onClick={toggleMenu}
                className="p-1 text-brand-silver hover:text-white transition-all duration-300 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Expanded Content - Only rendered when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex-1 overflow-y-auto"
              >
                <div className="px-6 md:px-10 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 h-full items-center">
                      
                      {/* Left Column: Navigation Links */}
                      <div className="flex flex-col justify-center space-y-3 md:space-y-5">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                            whileTap={{ y: 2, scale: 0.98 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => {
                                toggleMenu();
                                posthog.capture('nav_link_clicked', { link_name: link.name, href: link.href });
                              }}
                              className="text-2xl md:text-3xl font-display font-medium text-brand-off-white transition-all duration-300 block w-fit cursor-pointer
                                         hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-brand-silver hover:to-white
                                         hover:bg-[length:200%_auto] hover:animate-[shimmer_2s_linear_infinite]"
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Right Column: Contact Form */}
                      {/* <div className="flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                          className="bg-brand-black/50 p-6 rounded-2xl border border-white/5"
                        >
                          <h3 className="text-xl font-display font-bold text-brand-platinum mb-5">Get in Touch</h3>
                          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1.5">
                              <label htmlFor="name" className="text-[10px] font-sans text-brand-silver uppercase tracking-wider">Name</label>
                              <input 
                                type="text" 
                                id="name"
                                className="w-full bg-transparent border-b border-brand-silver/30 py-1.5 text-brand-off-white focus:border-brand-silver focus:outline-none transition-colors text-sm"
                                placeholder="Jane Doe"
                              />
                            </div>
                            
                            <div className="space-y-1.5">
                              <label htmlFor="email" className="text-[10px] font-sans text-brand-silver uppercase tracking-wider">Email</label>
                              <input 
                                type="email" 
                                id="email"
                                className="w-full bg-transparent border-b border-brand-silver/30 py-1.5 text-brand-off-white focus:border-brand-silver focus:outline-none transition-colors text-sm"
                                placeholder="jane@example.com"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label htmlFor="message" className="text-[10px] font-sans text-brand-silver uppercase tracking-wider">Message</label>
                              <textarea 
                                id="message"
                                rows={3}
                                className="w-full bg-transparent border-b border-brand-silver/30 py-1.5 text-brand-off-white focus:border-brand-silver focus:outline-none transition-colors resize-none text-sm"
                                placeholder="Tell us about your project..."
                              />
                            </div>

                            <button className="w-full mt-2 group flex items-center justify-between px-5 py-2.5 bg-brand-silver text-brand-black font-semibold hover:bg-white transition-colors duration-300 rounded-sm text-xs uppercase tracking-wide cursor-pointer">
                              <span>Send Message</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </form>
                        </motion.div>
                      </div> */}
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
