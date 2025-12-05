import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = fs.readdirSync(inputDir).filter(file =>
  /\.(jpg|jpeg|png)$/i.test(file)
);

async function optimizeImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const baseName = path.parse(filename).name;

  const stats = fs.statSync(inputPath);
  const originalSize = (stats.size / 1024 / 1024).toFixed(2);

  console.log(`Processing: ${filename} (${originalSize} MB)`);

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();

    // Determine output dimensions (max 1920px for hero images, 800px for others)
    const isHeroImage = filename.includes('Hero') || filename.includes('middle-section');
    const maxWidth = isHeroImage ? 1920 : 1200;
    const maxHeight = isHeroImage ? 1080 : 800;

    // Calculate new dimensions maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;

    if (width > maxWidth) {
      height = Math.round((maxWidth / width) * height);
      width = maxWidth;
    }
    if (height > maxHeight) {
      width = Math.round((maxHeight / height) * width);
      height = maxHeight;
    }

    // Create WebP version (primary)
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath)
      .resize(width, height, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSize = (webpStats.size / 1024).toFixed(0);

    // Create optimized JPG fallback
    const jpgPath = path.join(outputDir, `${baseName}.jpg`);
    await sharp(inputPath)
      .resize(width, height, { fit: 'cover' })
      .jpeg({ quality: 80, progressive: true })
      .toFile(jpgPath);

    const jpgStats = fs.statSync(jpgPath);
    const jpgSize = (jpgStats.size / 1024).toFixed(0);

    // Create tiny placeholder for blur effect (20px wide)
    const placeholderPath = path.join(outputDir, `${baseName}-placeholder.webp`);
    await sharp(inputPath)
      .resize(20, Math.round((20 / metadata.width) * metadata.height))
      .webp({ quality: 20 })
      .toFile(placeholderPath);

    console.log(`  ✓ WebP: ${webpSize} KB, JPG: ${jpgSize} KB (${width}x${height})`);

  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  console.log(`Found ${images.length} images to optimize\n`);

  for (const image of images) {
    await optimizeImage(image);
  }

  console.log('\nOptimization complete!');
  console.log(`Optimized images saved to: ${outputDir}`);
}

main();
