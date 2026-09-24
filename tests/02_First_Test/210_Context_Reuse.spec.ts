import { test } from '@playwright/test';

test.describe('Shared context tests', () => {
  // Configures options for all tests inside this describe block
  test.use({ 
    viewport: { width: 1280, height: 720 },
    locale: 'en-US'
  });

  test('test 1', async ({ page }) => {
    await page.goto('https://playwright.dev');
  });

  test('test 2', async ({ page }) => {
    await page.goto('https://playwright.dev');
  });
});