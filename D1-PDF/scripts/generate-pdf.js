/**
 * Generates output/D1-Leadership-Framework-v1.0.pdf from index.html
 * Requires: npm install (puppeteer, pagedjs)
 * Run: npm run pdf
 */

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { startStaticServer, ROOT } = require("./static-server");

function findBrowserExecutable() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }

  return null;
}

const htmlPath = path.join(ROOT, "index.html");
const outDir = path.join(ROOT, "output");
const outPath = path.join(outDir, "D1-Leadership-Framework-v1.0.pdf");

async function generatePdf() {
  if (!fs.existsSync(htmlPath)) {
    console.error("index.html not found. Run: npm run build");
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const { server, port } = await startStaticServer();
  const executablePath = findBrowserExecutable();
  const launchOptions = { headless: true };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  let browser;
  try {
    browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    await page.goto(`http://127.0.0.1:${port}/index.html`, {
      waitUntil: "networkidle0",
      timeout: 120000,
    });

    await page.waitForFunction(
      () =>
        window.PagedPolyfill &&
        document.querySelector(".pagedjs_pages") &&
        document.querySelectorAll(".pagedjs_page").length > 5,
      { timeout: 120000 }
    );

    await new Promise((r) => setTimeout(r, 1500));

    await page.pdf({
      path: outPath,
      format: "Letter",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    const stats = fs.statSync(outPath);
    console.log(`PDF generated: ${outPath} (${Math.round(stats.size / 1024)} KB)`);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

generatePdf().catch((err) => {
  console.error(err);
  process.exit(1);
});
