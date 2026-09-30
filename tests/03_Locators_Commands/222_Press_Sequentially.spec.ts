import {test, expect} from '@playwright/test'

test('Verify automation of the app.vwo.com', async ( {page} ) => {

    await page.goto("https://awesomeqa.com/practice.html");

  // await page.locator("//input[@name='firstname']").fill("The Testing Academy");

    await page.locator("//input[@name='firstname']").pressSequentially("The Testing Academy",{delay :100});

    await page.waitForTimeout(2000);

    await page.goto("https://app.vwo.com");

    await page.goBack();
    await page.waitForTimeout(2000);

});