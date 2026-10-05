
    import { test, expect } from '@playwright/test';

    test('Generate List of All States', async ({ page }) => {

        await page.goto("https://simplemaps.com/svg/country/in");

        let allStates = await page.locator('path.sm_state');
        let allStatesCount = await allStates.count();
        console.log('No of States : ', allStatesCount);

        // let allStateNames = await allStates.all();
        // console.log("All states names --> ", allStateNames);

        // print all states names
        for(let i = 0 ; i < allStatesCount ; i++)
        {
            let stateName = await allStates.nth(i).getAttribute("class");
            console.log("All states names --> ",  stateName);

            // need to click on sm_state sm_state_INMH and take screenshot of that state

            if(stateName === "sm_state sm_state_INMH")
            {
                await allStates.nth(i).click();
                await page.waitForTimeout(5000);
                await page.screenshot({ path: 'MH_State.png', fullPage: true });
                break;
            }
        }



        await page.waitForTimeout(5000);

    });
