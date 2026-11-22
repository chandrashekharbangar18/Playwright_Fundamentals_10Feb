import {test, expect} from '@playwright/test'

test.describe('Date Picker Test', () => {

    test.beforeEach(async ({ page }) => {
    await page.goto('https://qaplayground.com/practice/date-picker');
});

    // Native date picker using fill ()
    test('Select date using fill', async ({page}) => {

        const dateInput = page.locator("#dp-basic-input");
        await expect(dateInput).toBeVisible();
        await dateInput.fill("2026-11-20");

        const dateOutput = page.getByTestId("result-s01");
        await expect(dateOutput).toContainText("2026-11-20");
        await page.waitForTimeout(5000);
    });

    // Custom calendar date picker
     test('Select date Dec 25, 2026 from the custom calendar', async ({page}) => {

        const calendarBtn = page.getByTestId("dp-calendar-trigger");
        await calendarBtn.click();
        
        const monthHeading = page.getByTestId("dp-calendar-month-heading");
        await expect(monthHeading).toBeVisible();

        let displayedMonthYear = await monthHeading.innerText();
        console.log(displayedMonthYear);  // November 2026

        const targetDate = '2026-12-25';
        const target = new Date(targetDate); // convert target date to Date object
        
        const targetMonthYear = target.toLocaleString('default', { month: 'long', year: 'numeric' }); // December 2026
        console.log(targetMonthYear);

        // Navigate to the target month and year
        while (displayedMonthYear !== targetMonthYear)
        {
            const displayedDate = new Date(displayedMonthYear);
            
            const nextButton = page.getByTestId("dp-next-month");
            await nextButton.click();
            displayedMonthYear = await monthHeading.innerText();
        }
        await expect(monthHeading).toHaveText(targetMonthYear);
        const dateBtn = page.getByTestId('dp-day-btn').filter({ hasText: '25' });
        await dateBtn.click();


        await page.waitForTimeout(5000);
    })

});