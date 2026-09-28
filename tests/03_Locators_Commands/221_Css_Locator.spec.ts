import {test, expect} from '@playwright/test'

test('Verify automation of the app.vwo.com', async ( {page} ) => {

    await page.goto("https://awesomeqa.com/css/");
   
    const allSpans = page.locator('div.first > span');
    const count = await allSpans.count();
    console.log(count);
});