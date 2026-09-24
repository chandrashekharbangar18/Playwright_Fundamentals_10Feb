import {test, expect} from '@playwright/test'

test('Verify automation of the app.vwo.com', async ( {page} ) => {

    await page.goto("https://app.vwo.com/");
    await expect (page).toHaveTitle("Login - Wingify");

    let username = page.locator("#login-username");
    let password = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    username.fill("admin");
    password.fill("admin123");
    loginButton.click();

    console.log("All actions are completed...");

    let errorMsg = page.locator("#js-notification-box-msg");
    //errorMsg.getByText();

    //await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");


});