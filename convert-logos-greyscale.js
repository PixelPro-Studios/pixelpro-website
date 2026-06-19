const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

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
  "pixelpro-studios-victoria-school-sound-system-service.png",
];

const inputDir = path.join(__dirname, 'public', 'client_logos');
const outputDir = path.join(__dirname, 'public', 'client_logos_greyscale');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertToGreyscaleInverted(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);

    // Process: greyscale -> invert -> use luminance as alpha (white=opaque, black=transparent)
    await image
      .greyscale() // Convert to greyscale
      .negate()    // Invert colors (equivalent to CSS invert filter)
      .toBuffer()
      .then(buffer => {
        // Now convert greyscale values to transparency
        // White (255) -> opaque with white color
        // Black (0) -> fully transparent
        return sharp(buffer)
          .ensureAlpha()
          .raw()
          .toBuffer({ resolveWithObject: true });
      })
      .then(({ data, info }) => {
        // Process raw pixel data
        const pixels = Buffer.from(data);

        // For each pixel, use the greyscale value as both color and alpha
        for (let i = 0; i < pixels.length; i += 4) {
          const grey = pixels[i]; // R, G, B are all the same in greyscale
          pixels[i] = 255;     // R: white
          pixels[i + 1] = 255; // G: white
          pixels[i + 2] = 255; // B: white
          pixels[i + 3] = grey; // Alpha: use greyscale value (white=opaque, black=transparent)
        }

        return sharp(pixels, {
          raw: {
            width: info.width,
            height: info.height,
            channels: 4
          }
        })
        .png()
        .toFile(outputPath);
      });

    console.log(`✓ Converted: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${path.basename(inputPath)}:`, error.message);
  }
}

async function convertAllLogos() {
  console.log('Converting logos to greyscale + inverted...\n');

  for (const logo of LOGOS) {
    const inputPath = path.join(inputDir, logo);
    const outputPath = path.join(outputDir, logo);

    if (fs.existsSync(inputPath)) {
      await convertToGreyscaleInverted(inputPath, outputPath);
    } else {
      console.log(`⚠ Skipped: ${logo} (file not found)`);
    }
  }

  console.log(`\n✓ Done! Greyscale logos saved to: ${outputDir}`);
}

convertAllLogos().catch(console.error);
