"use client";

import { useState } from "react";
import Image from "next/image";
import TvFramePixelated from "@/components/TvFramePixelated";

/** Screen hole insets relative to cropped TV frame (top right bottom left) */
const SCREEN_INSET = "19.2% 14.8% 17.6% 14.8%";

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

const MID = Math.ceil(LOGOS.length / 2);
const ROW_ONE = LOGOS.slice(0, MID);
const ROW_TWO = LOGOS.slice(MID);

function LogoRow({
  logos,
  direction,
  duration = 50,
  paused,
}: {
  logos: typeof LOGOS;
  direction: "left" | "right";
  duration?: number;
  paused: boolean;
}) {
  const loop = [...logos, ...logos];
  const animationName =
    direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className="flex py-1.5 md:py-2 space-x-10 md:space-x-14 min-w-max px-4 items-center"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {loop.map((logo, index) => (
          <div
            key={`${logo.file}-${index}`}
            className="group relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center z-0 shrink-0"
          >
            <div className="absolute inset-0 bg-brand-silver/80 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 -z-10" />

            <div className="relative z-10 w-full h-full grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300 opacity-85 group-hover:opacity-100">
              <Image
                src={`/client_logos/${logo.file}`}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteLogos() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="pt-2 md:pt-4 pb-8 md:pb-12 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-3 md:px-6">
        <div
          className="relative w-full aspect-[795/511]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Display — label + logos in the transparent screen hole */}
          <div
            className="absolute overflow-hidden bg-[#061018]"
            style={{ inset: SCREEN_INSET }}
          >
            <div className="relative z-0 flex h-full flex-col">
              <p className="shrink-0 pt-2 md:pt-3 text-center text-[10px] md:text-sm text-brand-silver/90 uppercase tracking-widest font-medium font-sans">
                Trusted By
              </p>
              <div className="flex min-h-0 flex-1 flex-col justify-center gap-0.5 pb-1">
                <LogoRow
                  logos={ROW_ONE}
                  direction="left"
                  duration={55}
                  paused={paused}
                />
                <LogoRow
                  logos={ROW_TWO}
                  direction="right"
                  duration={60}
                  paused={paused}
                />
              </div>
            </div>

            {/* CRT blue tint */}
            <div
              className="pointer-events-none absolute inset-0 z-[1] mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(41,78,255,0.35) 0%, rgba(20,60,140,0.4) 50%, rgba(10,40,100,0.38) 100%)",
              }}
              aria-hidden
            />

            {/* Soft blue wash on top for glow */}
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-brand-blue/15 mix-blend-screen"
              aria-hidden
            />

            {/* Subtle vignette */}
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
              }}
              aria-hidden
            />
          </div>

          {/* Pixelated TV bezel — same CELL/GAP LED look as hero */}
          <TvFramePixelated />
        </div>
      </div>
    </section>
  );
}
