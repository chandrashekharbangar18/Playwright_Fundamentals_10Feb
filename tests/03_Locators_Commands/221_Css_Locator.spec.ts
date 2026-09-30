import {test, expect} from '@playwright/test'

test('Verify automation of the app.vwo.com', async ( {page} ) => {

    await page.goto("https://awesomeqa.com/css/");
   
    const allSpans = page.locator('div.first > span');
    const count = await allSpans.count();
    console.log(count);

    // const span1 = await allSpans.first().textContent();
    // const span2 = await allSpans.nth(1).textContent();
    // const span3 = await allSpans.nth(2).textContent();
    // const span4 = await allSpans.nth(3).textContent();
    // const span5 = await allSpans.nth(4).textContent();
    // const lastSpan = await allSpans.last().textContent();
    // console.log(span1);
    // console.log(span2);
    // console.log(span3);
    // console.log(span4);
    // console.log(span5);
    // console.log(lastSpan);

    // for loop to iterate through all the spans
    for (let i = 0; i < count; i++) {
        const spanText = await allSpans.nth(i).textContent();
        console.log(spanText);
    }

});