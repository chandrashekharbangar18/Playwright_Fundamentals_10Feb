// **Creating your first Playwright test:**

// - Test structure
// - Basic assertions
// - Navigation
// - Element interaction

import { test, expect } from '@playwright/test';

test("Verify our First TC", async ({ page }) => {

    await page.goto("https://app.vwo.com/");
    await expect (page).toHaveTitle("Login - Wingify");

    const vwoImg = page.locator('#vow-login-logo'); 

    await expect (vwoImg).toBeVisible();
});
