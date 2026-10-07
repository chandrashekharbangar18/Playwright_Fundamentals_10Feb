import { test, expect } from '@playwright/test';
import { readCSV } from './csvReader';


test.describe.serial('DDT CSV file', () => {

    const loginData = readCSV("tests/19_Data_Driven_Testing/login-data.csv");

    for (let i = 0; i < loginData.length; i++) {
        const data = loginData[i];

        test(`Login with : ${data.description}`, async ({ page }) => {

            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" }).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
            let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" }).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLoginToPracticeAccount.click();

            await expect(page).toHaveURL(data.expectedURL);
        });
    }

});
