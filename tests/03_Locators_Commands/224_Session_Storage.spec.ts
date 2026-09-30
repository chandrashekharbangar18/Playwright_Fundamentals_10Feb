import {chromium} from 'playwright';

async function run() {

    const username = process.env.VWO_USERNAME;
    const password = process.env.VWO_PASSWORD;
    if (!username || !password) {
        throw new Error("Set VWO_USERNAME and VWO_PASSWORD before running this script.");
    }

    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.vwo.com/#login");
    await page.fill("#login-username", username);
    await page.fill("#login-password", password);
    await page.click("#js-login-btn");

    //page.waitForTimeout(5000);

    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");
    await browser.close();
}