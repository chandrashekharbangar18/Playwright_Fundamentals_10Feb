
    import { test, expect } from '@playwright/test';

    test('Test Handle SVG Practice', async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/svg");

        const circleShape = page.locator("#circle-red");
        await circleShape.click();

        let outputCircle = await page.locator("#shapes-output").innerText();
        console.log("Output -->  ", outputCircle);

        await expect(outputCircle).toContain("circle-red");

        const q4Bar = await page.getByRole("button", {name : /Q4 bar — 92/});
        await q4Bar.scrollIntoViewIfNeeded();
        await q4Bar.click();

        let outputBar = await page.locator("#bars-output").innerText();
        console.log("Output -->  ", outputBar);

        await expect(outputBar).toContain("bar-q4");

        const allBars = await page.locator(".bar").all();

        // for(let i=0;i<allBars.length;i++)
        // {
        //     // i want to click on the bar which has value 92
        //     if(await allBars[i].getAttribute("data-value") === "92")
        //     {
        //         await allBars[i].click();
        //         break;
        //     }
        // }

        // star rating

        const rating = await page.getByRole('radio', {name : '5 stars'});
        await rating.scrollIntoViewIfNeeded();
        await rating.click();

        await page.waitForTimeout(5000);

    });
