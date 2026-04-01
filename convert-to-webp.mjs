// convert-to-webp.mjs
// Uses sharp (already a devDependency) to convert all JPEG/PNG in src/assets to WebP.
// Deletes originals only after confirmed successful conversion.
// Quality 85: visually identical to source, ~65% smaller file size.

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');
const QUALITY = 85;

// Recursively collect all jpg/jpeg/png files
function walk(dir) {
    let results = [];
    for (const entry of fs.readdirSync(dir)) {
        const full = path.join(dir, entry);
        if (fs.statSync(full).isDirectory()) {
            results = results.concat(walk(full));
        } else if (/\.(jpg|jpeg|png)$/i.test(entry)) {
            results.push(full);
        }
    }
    return results;
}

const images = walk(assetsDir);
console.log(`\nFound ${images.length} images to convert...\n`);

let ok = 0;
let fail = 0;

for (const imgPath of images) {
    const outPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const name = path.basename(imgPath);

    try {
        await sharp(imgPath).webp({ quality: QUALITY }).toFile(outPath);
        // Only delete original if sharp succeeded and output file exists
        if (fs.existsSync(outPath)) {
            fs.unlinkSync(imgPath);
            console.log(`OK   ${name} -> ${path.basename(outPath)}`);
            ok++;
        }
    } catch (e) {
        console.log(`FAIL ${name}: ${e.message}`);
        fail++;
    }
}

console.log(`\nDone. Converted: ${ok}  Failed: ${fail}\n`);