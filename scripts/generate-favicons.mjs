import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const svgPath = path.join(rootDir, "D1-PDF", "assets", "logo-mark.svg");
const publicDir = path.join(rootDir, "public");
const svg = await readFile(svgPath);

async function writePng(size, filename) {
  const buffer = await sharp(svg).resize(size, size).png().toBuffer();
  await writeFile(path.join(publicDir, filename), buffer);
  return buffer;
}

await writePng(32, "favicon-32x32.png");
await writePng(48, "favicon-48x48.png");
await writePng(180, "apple-touch-icon.png");

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((size) => sharp(svg).resize(size, size).png().toBuffer()),
);
const ico = await toIco(icoBuffers);
await writeFile(path.join(publicDir, "favicon.ico"), ico);

console.log("Generated favicon assets in public/");
