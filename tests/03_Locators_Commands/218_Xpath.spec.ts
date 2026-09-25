import {test, expect} from '@playwright/test'

test('Verify automation of the app.vwo.com', async ( {page} ) => {

    await page.goto("https://app.vwo.com/");
    await expect (page).toHaveTitle("Login - Wingify");

    // xpath --> 

    let username = page.locator('xpath=//*[@id="login-password"]');
    let password = page.locator('//input[@id="login-password"]');
    let loginButton = page.locator('//button[@id="js-login-btn"]'); 

    await username.fill("admin");
    await password.fill("admin123");
    await loginButton.click();

    console.log("All actions are completed...");

    let errorMsg = page.locator("#js-notification-box-msg");
    //errorMsg.getByText();

    await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");


});

// XPath -->
// Xpath by contains --> let password = page.locator('//input[contains(@id, "password")]');
// Xpath by contains text --> let passwordLabel = page.locator('//*[contains(text(), "Password")]');

// Xapth  functions
// a[contains(@id,"make")] - Partial Match
// a[contains(text(),"Make Appointment")]
// a[starts-with(@id,"btn")] 
// a[text()="Make Appointment"] - Exact Match
// a[text()="Make Appointment" or @id="btn-make-appointment"] - Either True
// a[text()="Make Appointment" and @id="btn-make-appointment"] - both True
// a[normalize-space()="Make Appointment"] - Trim the head and trila space