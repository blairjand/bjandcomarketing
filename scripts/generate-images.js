import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const IMAGES_DIR = path.join(process.cwd(), 'public/assets/images');

// Create noise texture
async function generateNoiseTexture() {
  const width = 400;
  const height = 400;
  const channels = 4;
  const noise = Buffer.alloc(width * height * channels);

  for (let i = 0; i < noise.length; i += channels) {
    const value = Math.random() * 255;
    noise[i] = value;     // R
    noise[i + 1] = value; // G
    noise[i + 2] = value; // B
    noise[i + 3] = 255;   // A
  }

  await sharp(noise, {
    raw: {
      width,
      height,
      channels,
    },
  })
    .blur(0.5)
    .webp({ quality: 80 })
    .toFile(path.join(IMAGES_DIR, 'noise.webp'));
}

// Generate logo
async function generateLogo() {
  const size = 512;
  const logo = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fff;stop-opacity:0.6" />
              </linearGradient>
            </defs>
            <circle cx="${size/2}" cy="${size/2}" r="${size/3}" fill="url(#grad)" />
            <text x="50%" y="50%" font-family="Inter" font-size="${size/4}" font-weight="bold" 
                  fill="url(#grad)" text-anchor="middle" dominant-baseline="middle">
              B&amp;C
            </text>
          </svg>`
        ),
        top: 0,
        left: 0,
      }
    ])
    .webp({ quality: 90 });

  await logo.toFile(path.join(IMAGES_DIR, 'logo.webp'));
}

// Generate showcase images
async function generateShowcaseImages() {
  const gradients = [
    ['#6366f1', '#db2777'], // Indigo to Pink
    ['#8b5cf6', '#ec4899'], // Purple to Pink
    ['#06b6d4', '#3b82f6'], // Cyan to Blue
  ];

  for (let i = 0; i < 3; i++) {
    const [color1, color2] = gradients[i];
    const width = 1920;
    const height = 1280;

    const showcase = sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        {
          input: Buffer.from(`
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
                  <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grad)" />
            </svg>`
          ),
          top: 0,
          left: 0,
        }
      ])
      .webp({ quality: 90 });

    await showcase.toFile(path.join(IMAGES_DIR, `showcase-${i + 1}.webp`));
  }
}

async function main() {
  // Ensure images directory exists
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  // Generate all assets
  await Promise.all([
    generateNoiseTexture(),
    generateLogo(),
    generateShowcaseImages(),
  ]);

  console.log('✨ All images generated successfully!');
}

main().catch(console.error); 