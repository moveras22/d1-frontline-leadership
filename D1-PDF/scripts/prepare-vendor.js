/**
 * Copies vendor assets needed for offline PDF generation.
 * Run automatically before build via npm scripts.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const vendorDir = path.join(ROOT, "vendor");
const pagedSrc = path.join(ROOT, "node_modules", "pagedjs", "dist", "paged.polyfill.js");
const pagedDest = path.join(vendorDir, "paged.polyfill.js");

fs.mkdirSync(vendorDir, { recursive: true });

if (!fs.existsSync(pagedSrc)) {
  console.error("pagedjs not installed. Run: npm install");
  process.exit(1);
}

fs.copyFileSync(pagedSrc, pagedDest);
console.log("Vendor assets ready.");
