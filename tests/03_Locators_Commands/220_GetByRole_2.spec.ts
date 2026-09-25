import { test, expect } from '@playwright/test';

test('Automate App.vwo invalid credentials with error message', async ({ page }) => {
    // 1. Navigate to the App.vwo login page
    await page.goto("https://app.vwo.com");
    
    // 2. Define form inputs using getByRole
    const usernameInput = page.getByRole("textbox", { name: "Email address", exact: true });
    const passwordInput = page.getByRole("textbox", { name: "Password", exact: true });
    const signInBtn = page.getByRole("button", { name: "Sign in", exact: true });

    // 3. Perform the actions with invalid credentials
    await usernameInput.fill("invalid_user@example.com");
    await passwordInput.fill("WrongPassword123");
    await signInBtn.click();

    // 4. Assert that the error message container appears and contains the correct text
    // Playwright automatically waits for this condition to pass!
    const errorMsg = page.locator("#js-notification-box-msg");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");
});