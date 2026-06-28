/**
 * Local preview server for index.html
 * Run: npm run preview
 * Open: http://localhost:4173
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { startStaticServer, ROOT, DEFAULT_PORT } = require("./static-server");

const vendorScript = path.join(ROOT, "vendor", "paged.polyfill.js");
const indexHtml = path.join(ROOT, "index.html");

function ensurePreviewAssets() {
  if (!fs.existsSync(vendorScript)) {
    console.log("Preparing vendor assets...");
    execSync("node scripts/prepare-vendor.js", { cwd: ROOT, stdio: "inherit" });
  }

  if (!fs.existsSync(indexHtml)) {
    console.log("Building index.html...");
    execSync("node scripts/build-html.js", { cwd: ROOT, stdio: "inherit" });
  }
}

async function main() {
  ensurePreviewAssets();

  const { server, port } = await startStaticServer(DEFAULT_PORT);
  const url = `http://localhost:${port}`;

  console.log("");
  console.log("D1 Leadership Framework — preview server running");
  console.log(`  ${url}`);
  console.log("");
  console.log("Press Ctrl+C to stop.");
  console.log("");

  process.on("SIGINT", () => {
    server.close();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
