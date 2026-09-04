import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Embedded high-res version SVG
const imgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon-512x512.png'));
const base64Png = imgBuffer.toString('base64');

const svgWithImage = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <clipPath id="squircle">
      <rect width="512" height="512" rx="112" ry="112" />
    </clipPath>
  </defs>
  <image width="512" height="512" href="data:image/png;base64,${base64Png}" clip-path="url(#squircle)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svgWithImage.trim());
console.log('Successfully wrote public/favicon.svg with embedded high-res artwork.');
