
    import { test, expect } from '@playwright/test';

    test('Test Frames within Frames ', async ({ page }) => {
        await page.goto('https://selectorshub.com/iframe-scenario/');

        const frame1 = page.locator('#pact1').first().contentFrame();
        const frame2 = frame1.locator('#pact2').first().contentFrame();
        const frame3 = frame2.locator('#pact3').first().contentFrame();

        await frame1.locator('#inp_val').fill('Aishwarya Rai');
        await frame2.locator('#jex').fill('MD');
        await frame3.locator('#glaf').fill('Playwright');

        // outer text

        const outerText = await page.locator('[data-id="24ab2f0"]').innerHTML();
        console.log("Outer Text --> ", outerText)
        await expect(page.locator('[data-id="24ab2f0"]')).toContainText('Enhance Your Web Testing');

        await page.waitForTimeout(5000);

    });