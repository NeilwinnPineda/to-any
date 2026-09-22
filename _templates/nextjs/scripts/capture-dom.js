const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const URL = "http://localhost:3000";
const OUT_DIR = path.resolve(__dirname, "../../master/reference");
const OUT_FILE = path.join(OUT_DIR, "next-component-dom.html");

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: "networkidle0" });
  await page.waitForSelector(".expo-section", { timeout: 15000 });
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const dom = await page.evaluate(() => {
    const root = document.querySelector(".expo-page");
    return root ? root.outerHTML : document.body.innerHTML;
  });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, dom, "utf8");

  console.log(`DOM captured -> ${OUT_FILE}`);
  console.log(`Size: ${(Buffer.byteLength(dom, "utf8") / 1024).toFixed(1)} KB`);
  await browser.close();
})();
