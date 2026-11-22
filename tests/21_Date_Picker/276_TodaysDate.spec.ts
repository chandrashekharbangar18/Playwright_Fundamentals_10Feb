import {test, expect} from '@playwright/test'
import { constrainedMemory } from 'node:process';


    // Todays date selection
     test('Verify Todays Date', async ({page}) => {

        await page.goto('https://qaplayground.com/practice/date-picker');
        
        const assertTodayBtn = page.getByRole('button', {name: "Assert today's date"});
        const result = page.getByTestId("result-s08");

        const today = new Date();
        console.log(today);

        // fetch day
        const day = String(today.getDate()).padStart(2, '0');
        console.log(day);

        // fetch month
        const month = String(today.getMonth()+1).padStart(2, '0');
        console.log(month);

        // fetch year
        const year = today.getFullYear();
        console.log(year);

        const expectedDate = `${month}/${day}/${year}`;
        console.log(expectedDate);

        await assertTodayBtn.click();
        await expect(result).toHaveText(`Asserted: ${expectedDate}`);
     });