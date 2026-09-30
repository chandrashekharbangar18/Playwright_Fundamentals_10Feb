import { test, expect } from '@playwright/test';

test('VWO Free Trial - Incorrect Gmail Business Email Verification', async ({ page }) => {
    // 1. Navigate to the tracking URL
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");

    // 2. Fill out the Business Email field
    await page.getByRole('textbox', { name: 'Business Email' }).fill('abc@gmail.com');

    // 3. Correctly check both checkboxes with exact text matching the page context
    await page.getByRole('checkbox', { name: 'Yes, I agree to receive communications from Wingify.' }).check();
    await page.getByRole('checkbox', { name: 'I agree to Wingify\'s Privacy Policy & Terms' }).check();

    // 4. Click the form submit button
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();

    await page.waitForTimeout(10000); // Wait for 2 seconds to allow the error message to appear

    // 5. Locate and verify the business domain warning text
    const errorElement = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");
    await expect(errorElement).toBeVisible();
});