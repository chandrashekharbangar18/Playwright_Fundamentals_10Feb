
    import { test, expect } from '@playwright/test';

    test('Test Handle SVG', async ({ page }) => {

        await page.goto("https://www.flipkart.com/search");

        const searchBar = page.getByPlaceholder("Search for products, brands and more");
        await searchBar.fill("macmini");

        const svgElement = page.locator("svg");
        await svgElement.first().click();

        await page.waitForTimeout(5000);

        // const svgAllElement = await page.locator("svg").all();
        // console.log(svgAllElement);

        // Normal For loop

        // for(let i = 0; i < svgAllElement.length ; i++)
        // {
        //     const svgEle = svgAllElement[i];
        //     const svgText = await svgEle.textContent();
        //     console.log(svgText);
        // }

        const firstResult = page.locator("//div[contains(@data-id,'CPU')]/div/a[2]");
        await expect(firstResult.first()).toBeVisible( { timeout: 1500} );

    });
