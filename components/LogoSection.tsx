"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS: { file: string; alt: string }[] = [
  {
    file: "pixelpro-studios-ahmad-ibrahim-secondary-school-sound-system-service.png",
    alt: "Ahmad Ibrahim Secondary School",
  },
  {
    file: "pixelpro-studios-camp-challenge-sound-system-service.png",
    alt: "Camp Challenge",
  },
  {
    file: "pixelpro-studios-grand-cru-wine-sound-system-service.png",
    alt: "Grand Cru Wine",
  },
  {
    file: "pixelpro-studios-gushcloud-projector-rental-service.png",
    alt: "Gushcloud",
  },
  {
    file: "pixelpro-studios-hard-rock-cafe-singapore-sound-system-service.png",
    alt: "Hard Rock Cafe Singapore",
  },
  {
    file: "pixelpro-studios-land-transport-authority-sound-system-service.png",
    alt: "Land Transport Authority",
  },
  {
    file: "pixelpro-studios-mediacorp-projector-rental-service.png",
    alt: "Mediacorp",
  },
  {
    file: "pixelpro-studios-ministry-of-education-moe-sound-system-service.png",
    alt: "Ministry of Education Singapore",
  },
  {
    file: "pixelpro-studios-nanyang-jc-sound-system-service.png",
    alt: "Nanyang Junior College",
  },
  {
    file: "pixelpro-studios-ngee-ann-sec-sound-system-service.png",
    alt: "Ngee Ann Secondary School",
  },
  {
    file: "pixelpro-studios-ntu-stage-sound-system-service.png",
    alt: "Nanyang Technological University",
  },
  {
    file: "pixelpro-studios-pap-event-stage-sound-system-service.png",
    alt: "People's Action Party",
  },
  {
    file: "pixelpro-studios-paradigm-event-projector-sound-system-service.png",
    alt: "Paradigm",
  },
  {
    file: "pixelpro-studios-paws-for-cause-projector-rental-singapore-service.png",
    alt: "Paws for Cause",
  },
  {
    file: "pixelpro-studios-serangoon-secondary-school-sound-system-service.png",
    alt: "Serangoon Secondary School",
  },
  {
    file: "pixelpro-studios-smu-projector-sound-system-service.png",
    alt: "Singapore Management University",
  },
  {
    file: "pixelpro-studios-sutd-singapore-university-sound-system-service.png",
    alt: "Singapore University of Technology and Design",
  },
  {
    file: "pixelpro-studios-the-university-of-chicago-av-system-service.png",
    alt: "The University of Chicago",
  },
];

export default function InfiniteLogos() {
  return (
    <section className="py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-brand-silver/90 uppercase tracking-widest font-medium font-sans">
          Trusted By
        </p>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex py-8 space-x-16 min-w-max px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={`${logo.file}-${index}`}
              className="group relative w-28 h-28 flex items-center justify-center z-0"
            >
              <div className="absolute inset-0 bg-brand-silver/80 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 -z-10" />

              <div className="relative z-10 w-full h-full grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                <Image
                  src={`/client_logos/${logo.file}`}
                  alt={logo.alt}
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
