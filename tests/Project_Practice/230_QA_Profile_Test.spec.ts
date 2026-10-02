import {test, expect} from '@playwright/test'

test('Verify Para Bank Project', async ( {page} ) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    let title = await page.title();
    console.log("Title of the page is : " , title);
    await expect(page).toHaveTitle("QA Profile Form Practice — The Testing Academy");

    await page.locator("#first-name").fill("Shree");
    await page.locator("#last-name").fill("Ram");
    await page.locator("//input[@data-testid='gender-male']").click();
    await page.locator("//input[@data-testid='profession-manual']").click();
    await page.locator("//input[@data-testid='tool-selenium']").click();
    await page.locator("//input[@data-testid='continent-asia']").click();
    await page.locator("#profile-submit").click();

    //page.waitForTimeout(5000);
});