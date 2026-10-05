
    import { test, expect } from '@playwright/test';

    test('Test Drag and Drop Action', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

        const col_A = page.locator("#column-a");
        const col_B = page.locator("#column-b");

        // Drag Drop
        await (col_A).dragTo(col_B);

        // Verify initial state
        await expect(col_A).toHaveText("B");
        await expect(col_B).toHaveText("A");


    });
