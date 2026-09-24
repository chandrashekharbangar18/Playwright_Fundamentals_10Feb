// Scenario 2: Same Context with Multiple Pages

import { test } from '@playwright/test';

test('Scenario 2: Same context, multiple pages (tabs)', async ({ browser }) => {
  // 1. Create a single context
  const context = await browser.newContext();
  
  // 2. Open Tab 1
  const page1 = await context.newPage();
  await page1.goto('https://playwright.dev');
  
  // 3. Open Tab 2 (shares the exact same login session/cookies as Tab 1)
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');

  // Both pages run concurrently under the same session profile
  
  await context.close();
});