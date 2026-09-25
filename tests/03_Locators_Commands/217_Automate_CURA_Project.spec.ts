import { test, expect } from '@playwright/test';

test('Verify CURA Healthcare Service project', async ({ page }) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");

    let makeAppointmentButton = page.locator("#btn-make-appointment");
    // 1. ADDED AWAIT: Wait for the button click to transition the page
    await makeAppointmentButton.click();

    let username = page.locator("#txt-username");
    let password = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");

    // 2. ADDED AWAIT: Wait for inputs to be filled correctly
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    
    // 3. ADDED AWAIT: Wait for the login form to submit
    await loginButton.click();

    let pageTitle = await page.title();
    console.log(pageTitle);

    let makeAppointmentTitle = page.locator("section#appointment h2");
    await expect(makeAppointmentTitle).toHaveText("Make Appointment");

    console.log('Task successfully automated and verified! ✅');

});
