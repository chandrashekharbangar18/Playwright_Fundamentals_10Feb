import {test, expect} from '@playwright/test'

test('Verify automation of the app.vwo.com', async ( {page} ) => {

    await page.goto("https://awesomeqa.com/practice.html");

    await page.locator("//input[@name='firstname']").pressSequentially("The Testing Academy",{delay :50});

    await page.goto("https://app.vwo.com");

    // Read all cookies
    let cookies = await page.context().cookies();
    console.log("All cookies: ", cookies);

        // to add cookie
    await page.context().addCookies([
        {
            name: "mycookie",
            value: "123456",
            domain: "app.vwo.com",
            path: "/",
        },
        {
            name: "mycookie2",
            value: "123456",
            domain: "app.vwo.com",
            path: "/",
        }

    ]);

    // normal for loop to read all cookies
    for (let i = 0; i < cookies.length; i++) {
        console.log("cookies : ", cookies[i]);
    }
    await page.waitForTimeout(2000);

});