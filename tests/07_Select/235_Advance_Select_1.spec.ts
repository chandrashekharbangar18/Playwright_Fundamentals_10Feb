
import { test, expect } from '@playwright/test';

test('Test Advance dropdown ', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

        // Ex1

        await page.locator("#lang-trigger").click();
        await page.getByRole("option", { name: "JavaScript", exact: true }).click();
        await expect(page.locator("#lang-trigger")).toContainText("JavaScript");

        // Ex2
        await page.locator("#framework-trigger").click();
        await page.getByRole("option", { name: "Svelte", exact: true }).click();
        await expect(page.locator("#framework-trigger")).toContainText("Svelte");


        // Ex3
        await page.locator("#experience-trigger").click();
        await page.getByRole("option", { name: "Mid-level (4-6 years)", exact: true }).click();
        await expect(page.locator("#experience-trigger")).toContainText("Mid-level (4-6 years");

});
