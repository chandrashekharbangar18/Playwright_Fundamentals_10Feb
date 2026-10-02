
import { test, expect } from '@playwright/test';

test('test_web_table_login - structured extraction', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/webtable');

        await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr");
       
        // normal xpath
        //await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td/input[@type='checkbox']").check();

        // css selector - with has text
        await page.locator('tr', { hasText: 'Rohan.Mehta' }).locator("input[type='checkbox']").check();

        await page.waitForTimeout(5000);
     
    })
