import { test, expect } from '@playwright/test';

test('Verify CURA Healthcare Service project', async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    
    let button = page.getByRole("link", {name : "Make Appointment"})
    await button.click();

    // or 

    // await page.getByRole("link", { name: "Make Appointment" }).click();
});
