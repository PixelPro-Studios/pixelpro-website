"use client";

import Services from "@/components/ServicesSection";
import BottomNavbar from "@/components/BottomNavbar";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-brand-black/90 from-70% to-brand-silver/10"
    >
      <div className="bg-transparent">
        <Services />
      </div>
      <BottomNavbar position="top" />
    </motion.main>
  );
}
