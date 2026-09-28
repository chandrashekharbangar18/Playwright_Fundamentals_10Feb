import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function run() {
  const browser: Browser = await chromium.launch({
    headless: process.env.CI !== 'true',
  });

  console.log('Browser launched');

  const context: BrowserContext = await browser.newContext();
  console.log('Context created');

  const page: Page = await context.newPage();
  console.log('Page opened');

  try {
    await page.goto('https://example.com');
    console.log('Title:', await page.title());
  } finally {
    await page.close();
    await context.close();
    await browser.close();
  }
}

run();

// Browser launched
// Context created
// Page opened
// Title: Example Domain