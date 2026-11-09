// Page-named hero images for the event pages (Rankr, 9 Nov 2026).
// Compact Keywords image rule: the first image's file name mirrors the URL (`events_<slug>`).
// Copies, never moves: the source photos are still used elsewhere on the site.
// Run: node scripts/make-event-heroes.mjs
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const pub = path.join(import.meta.dirname, "..", "public");
const heroes = {
  "cny-event-av": "portfolio-av-stage/pixelpro-studios-stage-productions-singapore-1.jpg",
  "dinner-and-dance-av": "services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg",
  "town-hall-sound-system": "portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-7.jpg",
  "roadshow-led-screen-rental": "portfolio-av-stage/pixelpro-studios-stage-productions-singapore-7.jpg",
  "school-sound-system-rental": "portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-4.jpg",
  "conference-av-rental": "portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-8.jpg",
};

await fs.mkdir(path.join(pub, "events-hero"), { recursive: true });
for (const [slug, src] of Object.entries(heroes)) {
  const out = path.join(pub, "events-hero", `events_${slug}.webp`);
  const info = await sharp(path.join(pub, src)).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  console.log(`events_${slug}.webp  ${Math.round(info.size / 1024)} KB  <- ${src}`);
}
