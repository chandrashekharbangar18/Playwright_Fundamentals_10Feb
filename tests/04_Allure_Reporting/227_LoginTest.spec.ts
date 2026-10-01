import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test("Verify our Login TC", async ({ page }) => {


    await allure.epic("Login VWO Application");
    await allure.description("Verify that the login is page works")
    await allure.feature("Essential features");
    await allure.story("Authentication");


    await page.goto("https://app.vwo.com/");
    await expect (page).toHaveTitle("Login - Wingify");

    const vwoImg = page.locator('#vow-login-logo');

    await expect (vwoImg).toBeVisible();

    let username = page.locator("#login-username");
    let password = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    await username.fill("admin");
    await password.fill("admin123");
    await loginButton.click();

    console.log("All actions are completed...");

    let errorMsg = page.locator("#js-notification-box-msg");
    //errorMsg.getByText();

    //await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");
});
