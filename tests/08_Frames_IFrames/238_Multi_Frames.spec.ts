
    import { test, expect } from '@playwright/test';

    test('Test Multi Frames ', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

        const mainFrame = await page.frameLocator('[name="main"]');

        const headerText = await mainFrame.locator("#main-heading").innerText();
        console.log("Main Heading --> ", headerText);

        await page.waitForTimeout(2000);

        // Total no of Frames on the page

        const allFrames = await page.locator("//frame").all();
        console.log("Total no of Frames on the page --> ", allFrames.length);

        // normal for loop for iterating through all the frames and getting the frame name
        for (let i = 0; i < allFrames.length; i++) {
            const frameName = await allFrames[i].getAttribute("name");
            console.log("Frame Name --> ", frameName);
        }

        // side frame

        const sideFrame = await page.frameLocator('[name="side"]');
        await sideFrame.getByTestId("side-link-registration").click();

        await page.waitForTimeout(5000);

    });
