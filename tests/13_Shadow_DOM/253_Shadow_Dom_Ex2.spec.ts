
import { test, expect } from '@playwright/test';

test('Test The Shadow DOM Ex2', async ({ page }) => {

        await page.goto("https://selectorshub.com/xpath-practice-page/");

        const card = page.locator("[data-id='617b7ae']");

        await card.locator('#kils').fill("test@abc");
        await card.locator("#pizza").fill("Paneer Pizza");
        // await card.locator("#training").fill("Test Shadow Dom");
        // await card.locator('#pwd').fill("test1234");

         // WORKAROUND TO FILL
        page.keyboard.press('Tab'); // to move to the next field
        await page.keyboard.type("Playwright");

        page.keyboard.press('Tab+Tab'); // to move to the next field
        await page.keyboard.type("Password123");

        await page.waitForTimeout(5000);
 });
