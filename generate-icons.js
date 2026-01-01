import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SIZES = [16, 32, 180, 192, 512];
const SOURCE = 'src/assets/logo.png';
const PROCESSED_SOURCE = 'src/assets/logo-transparent.png';
const OUT_DIR = 'public';

if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR);
}

async function removeWhiteBackground(input, output) {
    console.log('Processing transparency...');
    const { data, info } = await sharp(input)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

    // data is a Buffer, which is a Uint8Array
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // Threshold for white/near-white
        if (r > 230 && g > 230 && b > 230) {
            data[i + 3] = 0; // Set alpha to 0
        }
    }

    await sharp(data, {
        raw: {
            width: info.width,
            height: info.height,
            channels: 4
        }
    })
        .png()
        .toFile(output);
    console.log('Transparency mask applied.');
}

async function generateIcons() {
    try {
        // 0. Pre-process to remove background
        await removeWhiteBackground(SOURCE, PROCESSED_SOURCE);

        console.log('Generating icons from processed source...');

        // 1. Generate Favicon
        await sharp(PROCESSED_SOURCE).resize(32, 32).toFile(path.join(OUT_DIR, 'favicon.png'));

        // apple-touch-icon.png (180x180)
        await sharp(PROCESSED_SOURCE).resize(180, 180).toFile(path.join(OUT_DIR, 'apple-touch-icon.png'));

        // android-chrome-192x192.png
        await sharp(PROCESSED_SOURCE).resize(192, 192).toFile(path.join(OUT_DIR, 'android-chrome-192x192.png'));

        // android-chrome-512x512.png
        await sharp(PROCESSED_SOURCE).resize(512, 512).toFile(path.join(OUT_DIR, 'android-chrome-512x512.png'));

        console.log('Icons generated successfully.');

    } catch (err) {
        console.error('Error generating icons:', err);
    }
}

generateIcons();
