import { test, expect } from '@playwright/test';

test.describe('Multiple Elements Handling', () => {
  test('Basic Test - Verify page title', async ({ page }) => {
    // Navigate to a sample page
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    // 1. Handling the text array with a normal for loop
    const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinksTexts.length);

    for (let i = 0; i < rightPanelLinksTexts.length; i++) {
      const linkText = rightPanelLinksTexts[i];
      if (linkText === 'My Account') {
        await page.getByText(linkText).first().click();
        break;
      }
    }

    // 2. Handling the Locator array with a normal for loop
    const rightPanelLinks = await page.locator('a.list-group-item').all();

    for (let j = 0; j < rightPanelLinks.length; j++) {
      const link = rightPanelLinks[j];
      console.log(await link.getAttribute("href"));
    }
  });
});
