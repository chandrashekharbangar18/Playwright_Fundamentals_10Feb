
    import { test, expect } from '@playwright/test';

    test('Test Right CLick Action', async ({ page }) => {
        
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

        await page.getByTestId("ctx-target").first().click({button: 'right'});
        
        const allOption = await page.locator("#ctx-menu").allInnerTexts();
        console.log("All Menu Option --> ", allOption);
        
    //    await page.getByText("Copy", {exact:true}).first().click();

        await page.waitForTimeout(5000);


    });

