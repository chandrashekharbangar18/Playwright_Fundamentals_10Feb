
import { test, expect } from '@playwright/test';

test('Test Advance dropdown ', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

        await page.locator("#rs-single").click();
        await page.getByText("Selenium", {exact: true}).click();

        // multi select
         await page.locator("#rs-multi").click();
         await page.getByText("JUnit").click();
         await page.getByText("Mocha").click();
         await page.keyboard.press("Escape");

        // type and enter
         await page.locator("#rs-creatable").click();
         await page.getByText("api-testing").click();
         await page.getByText("security").click();
        await page.keyboard.press("Escape");

        // 5) Async — wait for results
    // await page.getByTestId('rs-async-input').fill('pun');
    // await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    // await page.getByRole('option', { name: 'Pune' }).click();

});
