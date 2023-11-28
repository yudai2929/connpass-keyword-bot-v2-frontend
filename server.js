const express = require("express");
const next = require("next");
const https = require("https");
const fs = require("fs");
const os = require("os");

const port = parseInt(process.env.PORT || "3000");
const host = "0.0.0.0";

const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces();
  const addresses = Object.values(interfaces)
    .flat()
    .filter(
      (alias) =>
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
    )
    .map((alias) => alias.address);

  return addresses[0] || "0.0.0.0";
};

const ipAddress = getLocalIpAddress();

const app = next({
  dev: process.env.NODE_ENV !== "production",
});

const handle = app.getRequestHandler();

(async () => {
  await app.prepare();

  const expressApp = express();
  expressApp.get("*", (req, res) => handle(req, res));
  expressApp.post("*", (req, res) => handle(req, res));

  const hasCertificates =
    fs.existsSync(".certificates/localhost-key.pem") &&
    fs.existsSync(".certificates/localhost.pem");
  const useHttps = process.env.HTTPS === "true" && hasCertificates;

  if (useHttps) {
    const options = {
      cert: fs.readFileSync(".certificates/localhost.pem"),
      key: fs.readFileSync(".certificates/localhost-key.pem"),
    };

    const server = https.createServer(options, expressApp);

    server.listen(port, host);
    console.log(`> Ready on https://localhost:${port}`);
    console.log(`> Ready on https://${ipAddress}:${port}`);
  } else {
    expressApp.listen(port, host);
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> Ready on http://${ipAddress}:${port}`);
  }
})();
