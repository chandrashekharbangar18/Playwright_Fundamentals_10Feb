
    import { test, expect } from '@playwright/test';

    test('Test Drag and Drop Action', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

        const toDoCard = await page.locator("#card-write-spec");   //await page.getByTestId("card-write-spec");
        const inProgress = await page.getByTestId("col-in-progress");


        (toDoCard).dragTo(inProgress);

        await page.waitForTimeout(5000);


    });
