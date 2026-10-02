import { test, expect } from '@playwright/test';

test('test_web_table_login - structured extraction', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    // 1. Locate and fill search bar
    const searchBar = page.getByRole("searchbox", { name: "Search employee table" });
    await searchBar.fill("Kabir");

    // 2. Perform search click action
    // Note: Verify if "Select Cloud QA" is the correct button name on the live site
    const searchButton = page.getByRole("button", { name: "Select Cloud QA" });
    await searchButton.click();

    // 3. Check target checkbox using role-centric locator instead of XPath
    await page.getByRole('checkbox', { name: 'Select Kabir.Khan' }).check();

    // 4. Extract text content correctly
    const selectedOutputLocator = page.locator("#selected-output");
    const extractedText = await selectedOutputLocator.innerText();
    console.log("Selected Text : ", extractedText);

    // 5. Assert the correct text element is actually visible to the user
    const visibleTextNode = selectedOutputLocator.getByText('Kabir.Khan');
    await expect(visibleTextNode).toBeVisible();

    await page.waitForTimeout(5000);
});
