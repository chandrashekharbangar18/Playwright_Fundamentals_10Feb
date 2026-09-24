// Scenario 1: One Browser with Multiple Contexts & Multiple Pages

import { test } from '@playwright/test';

test('Scenario 1: One browser, multiple isolated contexts', async ({ browser }) => {
  // 1. Create the first context (User A) and open a page
  const contextA = await browser.newContext();
  const pageA = await contextA.newPage();
  await pageA.goto('https://playwright.dev');
  
  // 2. Create a second entirely independent context (User B) and open a page
  const contextB = await browser.newContext();
  const pageB = await contextB.newPage();
  await pageB.goto('https://google.com');

  // Perform actions independently...
  
  // Always clean up contexts when managing them manually
  await contextA.close();
  await contextB.close();
});