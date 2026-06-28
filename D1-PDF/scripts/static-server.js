const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DEFAULT_PORT = 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
};

function startStaticServer(port = DEFAULT_PORT) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const safePath = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
      let filePath = path.join(ROOT, safePath === path.sep ? "index.html" : safePath);

      if (safePath === "/" || safePath === "") {
        filePath = path.join(ROOT, "index.html");
      }

      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(data);
      });
    });

    server.listen(port, "127.0.0.1", () => {
      const { port: actualPort } = server.address();
      resolve({ server, port: actualPort });
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE" && port !== 0) {
        startStaticServer(0).then(resolve).catch(reject);
        return;
      }
      reject(err);
    });
  });
}

module.exports = { ROOT, MIME, startStaticServer, DEFAULT_PORT };
