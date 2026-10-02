
import { test, expect } from '@playwright/test';

test('test dropdown 1', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');

        // await page.locator("#dropdown").click();
        // await page.getByText("Option 1", {exact : true}).click();

      //  page.selectOption("#dropdown", "Option 1");

        await page.locator("#dropdown").selectOption("Option 1");

        await page.waitForTimeout(5000);

});
