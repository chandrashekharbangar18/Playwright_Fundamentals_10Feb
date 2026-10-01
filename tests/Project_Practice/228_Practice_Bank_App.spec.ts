import {test, expect} from '@playwright/test'

test('Verify Para Bank Project', async ( {page} ) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.html");
    let title = await page.title();
    console.log("Title of the page is : " , title);
    await expect(page).toHaveTitle("ParaBank | Error");

    let registerPageLink = page.locator("a[href*='register.htm']");
    await registerPageLink.click();

    await page.locator("//input[@id='customer.firstName']").fill("John");
    await page.locator("//input[@id='customer.lastName']").fill("Wick");
    await page.locator("//input[@id='customer.address.street']").fill("123, Main Street");
    await page.locator("//input[@id='customer.address.city']").fill("New York");
    await page.locator("//input[@id='customer.address.state']").fill("NY");
    await page.locator("//input[@id='customer.address.zipCode']").fill("10001");
    await page.locator("//input[@id='customer.phoneNumber']").fill("1234567890");
    await page.locator("//input[@id='customer.ssn']").fill("123-45-6789");
    await page.locator("//input[@id='customer.username']").fill("johnwick");
    await page.locator("//input[@id='customer.password']").fill("password123");
    await page.locator("//input[@id='repeatedPassword']").fill("password123");

    await page.locator("//input[@value='Register']").click();

    await expect(page.getByText("Your account was created successfully. You are now logged in.")).toBeVisible();

    // transfer funds
    await page.locator("a[href*='transfer.htm']").click();
    await page.locator("//input[@id='amount']").fill("5000");
    await page.locator("//input[@value='Transfer']").click();
    await expect(page.getByText("Transfer Complete!")).toBeVisible();

    // Account Overview
    await page.locator("a[href*='overview.htm']").click();
    await expect(page.getByText("Account Overview")).toBeVisible();

    // Click on the first account number link
    await page.locator("//a[@href='activity.htm?id=18117']").click();
    await expect(page.getByText("Account Details")).toBeVisible();

});