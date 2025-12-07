"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  "pixelpro-studios-ahmad-ibrahim-secondary-school-sound-system-service.png",
  "pixelpro-studios-camp-challenge-sound-system-service.png",
  "pixelpro-studios-grand-cru-wine-sound-system-service.png",
  "pixelpro-studios-gushcloud-projector-rental-service.png",
  "pixelpro-studios-hard-rock-cafe-singapore-sound-system-service.png",
  "pixelpro-studios-land-transport-authority-sound-system-service.png",
  "pixelpro-studios-mediacorp-projector-rental-service.png",
  "pixelpro-studios-ministry-of-education-moe-sound-system-service.png",
  "pixelpro-studios-nanyang-jc-sound-system-service.png",
  "pixelpro-studios-ngee-ann-sec-sound-system-service.png",
  "pixelpro-studios-ntu-stage-sound-system-service.png",
  "pixelpro-studios-pap-event-stage-sound-system-service.png",
  "pixelpro-studios-paradigm-event-projector-sound-system-service.png",
  "pixelpro-studios-paws-for-cause-projector-rental-singapore-service.png",
  "pixelpro-studios-serangoon-secondary-school-sound-system-service.png",
  "pixelpro-studios-smu-projector-sound-system-service.png",
  "pixelpro-studios-sutd-singapore-university-sound-system-service.png",
  "pixelpro-studios-the-university-of-chicago-av-system-service.png",
];

export default function InfiniteLogos() {
  return (
    <section className="py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <p className="text-sm text-brand-silver/90 uppercase tracking-widest font-medium font-sans">Trusted By</p>
      </div>
      
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex py-8 space-x-16 min-w-max px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 60 
          }}
        >
          {/* Duplicating list to ensure smooth infinite scroll */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="group relative w-28 h-28 flex items-center justify-center z-0">
              {/* Blurred Circle Background on Hover */}
              <div className="absolute inset-0 bg-brand-silver/80 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 -z-10" />
              
              {/* Logo Image */}
              <div className="relative z-10 w-full h-full grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                <Image
                  src={`/client_logos/${logo}`}
                  alt="Client Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

