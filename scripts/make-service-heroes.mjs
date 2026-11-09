// Page-named hero images for the service pages (Rankr, 9 Nov 2026).
// Compact Keywords image rule: the first image's file name mirrors the URL (`services_<slug>`).
// Copies, never moves: the source photos are still used elsewhere on the site.
// Run: node scripts/make-service-heroes.mjs
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const pub = path.join(import.meta.dirname, "..", "public");
const heroes = {
  "led-walls": "services-av-led/pixelpro-studios-led-wall-screen-rental-singapore.jpg",
  "av-systems": "portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-9.jpg",
  "sound-system-rental": "portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-2.jpg",
  "projector-rental": "services-av-projector/pixelpro-studios-projector-screen-rental-singapore.jpg",
  "stage-rental": "portfolio-av-stage/pixelpro-studios-stage-productions-singapore-6.jpg",
  "event-production": "portfolio-av-stage/pixelpro-studios-stage-productions-singapore-2.jpg",
  "event-av-planning": "portfolio-av-audio/pixelpro-studios-sound-system-rental-singapore-6.jpg",
};

await fs.mkdir(path.join(pub, "services-hero"), { recursive: true });
for (const [slug, src] of Object.entries(heroes)) {
  const out = path.join(pub, "services-hero", `services_${slug}.webp`);
  const info = await sharp(path.join(pub, src)).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  console.log(`services_${slug}.webp  ${Math.round(info.size / 1024)} KB  <- ${src}`);
}
