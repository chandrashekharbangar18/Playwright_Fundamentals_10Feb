
    import { test, expect } from '@playwright/test';

    test('Test Handle SVG', async ({ page }) => {

        await page.goto("https://www.flipkart.com/search");

        const searchBar = page.getByPlaceholder("Search for products, brands and more");
        await searchBar.fill("macmini");

        // const svgElement = page.locator("svg");
        // await svgElement.first().click();

        await page.locator('button[type="submit"] svg').click();

        // Wait for results
        await page.waitForSelector('div[data-id]');
        await page.waitForTimeout(5000);
        await page.getByText('Price -- Low to High').click();// wait for 5' seconds to ensure sorting is applied

         // Wait for sorting to apply and results to load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(5000); // wait for 5' seconds to ensure sorting is applied

        // Get first product
        const firstProduct = page.locator("//div[contains(@data-id, 'CPU') or contains(@data-id, 'MPC') ]").first();

        const nameLocator=firstProduct.locator('a[title]').nth(0);
        const name = await nameLocator.innerText();
        const price = await nameLocator.locator("//following-sibling::a/div/div").first().innerText();

        console.log('Cheapest Mac Mini:');
        console.log('Name:', name);
        console.log('Price:', price);

        // Validation
        expect(price).toContain('₹');



    });
