
    import { test, expect } from '@playwright/test';

    test('Test Hover Action', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    // 1. Trigger the hover action first
        await page.getByTestId("nav-add-ons").hover();

    // 2. Chain the locators properly and fix the dot selector
        const allLinks = await page.getByTestId("nav-add-ons")
                            .locator('.submenu .submenu-item')
                            .allInnerTexts();

        console.log("All Links present inside Add-ons --> ", allLinks);

        await page.getByTestId("test-id-Wifi").click();

        let output = await page.getByTestId("hover-output").innerText();
        console.log("Output Text --> ", output);
        await expect(output).toContain("clicked");

        await page.waitForTimeout(2000);

    });
