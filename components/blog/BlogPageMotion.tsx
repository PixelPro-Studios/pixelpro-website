"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function BlogPageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto"
    >
      {children}
    </motion.div>
  );
}
