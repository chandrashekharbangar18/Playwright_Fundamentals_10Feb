
    import { test, expect } from '@playwright/test';

    test('Test The Shadow DOM', async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/shadow-dom");

        const card = page.getByTestId("card-account-card");

        await card.getByTestId("card-account-email").fill("test@abc.com");
        await card.getByTestId("card-account-password").fill("abc123");
        await card.getByTestId("card-account-submit").click();

        //const outputStatus = await page.locator("#card-output").innerText();
        const outputStatus = await page.getByTestId("card-account-status").innerText();
        console.log("Output Status : ", outputStatus);

        await expect(outputStatus).toContain("test@abc.com");

        const cart = await page.getByTestId('counter-cart');
        await cart.getByRole('button', {name : 'Increment'}).click();
        await cart.getByRole('button', {name : 'Increment'}).click();

        await expect(cart.getByTestId("counter-value")).toHaveText("5");

        // Nested shadow host

        await page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('pramod@thetestingacademy.com');
        await page.getByTestId('card-inside-password').fill('pramod@123');
        await page.getByTestId('card-inside-submit').click();
        await page.waitForTimeout(5000);
    });
