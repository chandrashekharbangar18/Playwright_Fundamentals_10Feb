
    import { test, expect } from '@playwright/test';

    test('Test Nested Frames', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

        const frame1 = page.locator('#pact1').first().contentFrame();
        const frame2 = frame1.locator('#pact2').first().contentFrame();
        const frame3 = frame2.locator('#pact3').first().contentFrame();

        await frame1.locator("#inp_val").fill("Testing tool");
        await frame2.locator("#jex").fill("Selenium tool");
        await frame3.locator("#glaf").fill("Playwright Typescript");

        await page.waitForTimeout(5000);

    });