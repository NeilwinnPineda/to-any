const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const URL = 'http://localhost:4200';
const OUT_DIR = path.resolve(__dirname, '../../master/reference');
const OUT_FILE = path.join(OUT_DIR, 'component-dom.html');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 900 });

  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle0' });

  console.log('Waiting for Angular to render...');
  await page.waitForSelector('.expo-section', { timeout: 15000 });

  // Give Angular change detection a moment to settle
  await new Promise(r => setTimeout(r, 1000));

  const dom = await page.evaluate(() => {
    const root = document.querySelector('.expo-page');
    return root ? root.outerHTML : document.body.innerHTML;
  });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, dom, 'utf8');

  console.log(`DOM captured → ${OUT_FILE}`);
  console.log(`Size: ${(Buffer.byteLength(dom, 'utf8') / 1024).toFixed(1)} KB`);

  await browser.close();
})();
