import { test, expect } from '@playwright/test';

test('URL & Title Assertions', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/calendar');

    await page.getByTestId('trigger-depart').click();
    await expect(page).toHaveTitle('Calendar Date Picker — The Testing Academy');
    await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar');

    const appURL = await page.url();
    expect (appURL).toContain('thetestingacademy');
});

test('Visible, Enabled, Disabled, Checked Assertions', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');

    const agreeCheckbox = page.getByRole('checkbox', { name: /UFT/ });
    const submitBtn = page.getByTestId('profile-submit');

    await expect(agreeCheckbox).not.toBeChecked();
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    await agreeCheckbox.check();
    await expect(agreeCheckbox).toBeChecked();

    await page.waitForTimeout(2000);
});
