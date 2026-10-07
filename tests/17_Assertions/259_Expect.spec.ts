
import { test, expect } from '@playwright/test';

test('1. Test Value Assertions', async ({ page }) => {

    expect(1+2).toBe(3);  // pass
   // expect(1+2).toBe(4);  // fail

    expect(false).toBeFalsy();  // pass
    expect(true).toBeTruthy();  // pass

    expect(null).toBeNull();    // pass

    expect(20).toBeGreaterThan(10); // pass

    expect([1,2,3]).toEqual([1,2,3])    // pass

    expect( { role :'Admin' } ).toEqual( { role:'Admin' } );    // pass
    expect( { age : 20, role :'Admin' } ).toEqual( { role:'Admin', age : 20 } );   // pass
});

test('2. Locator Based Assertions', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const heading = page.getByText('multiple element filters', { exact :true });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('filter', {timeout :1000});

    const email = page.getByRole('textbox', {name : 'email'});
    await expect(email).toHaveAttribute('id', 'email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

    const footerLink = page.locator('footer a');
    const count = await footerLink.count();
    console.log("Total Footer Link Count : ", count)
    await expect(footerLink).toHaveCount(count);
});

test('3. Soft Assertions & Negation', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    const firstName = page.getByLabel('First name');

    // Soft: each line records its own failure; test continues either way.

    await expect.soft(firstName).toHaveAttribute('id', 'first-name');
    await expect.soft(firstName).toBeVisible();
    await expect.soft(firstName).toHaveValue('');

    // Final hard assertion still runs after the soft block.
    await expect(firstName).toBeEnabled();


    await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');

    await expect(page.locator('#error')).not.toBeVisible();

    const title = await page.title();
    expect(title).not.toContain('error');


});
