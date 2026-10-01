import {test} from '@playwright/test';

test('Save VWO session state', async ({page, context}) => {
    const username = process.env.VWO_USERNAME;
    const password = process.env.VWO_PASSWORD;
    if (!username || !password) {
        throw new Error("Set VWO_USERNAME and VWO_PASSWORD before running this script.");
    }

    await page.goto("https://app.vwo.com/#login");
    await page.fill("#login-username", username);
    await page.fill("#login-password", password);
    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json");
});