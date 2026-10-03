
    import { test, expect } from '@playwright/test';

    test('Test Normal Frame ', async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/frames/');

            const vehicleFrame = await page.frameLocator("#frame-one");
            await vehicleFrame.locator("#RESULT_TextField-1").fill("Hyundai i20");
            await vehicleFrame.locator("#RESULT_TextField-2").fill("ChandraS");
            await vehicleFrame.locator("#RESULT_TextField-3").fill("MH17 BD 6428");
            await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("SUV");
            await vehicleFrame.locator("#RESULT_TextField-4").fill("2026");
            await vehicleFrame.locator("#RESULT_TextArea-1").fill("This is my car...");

            await vehicleFrame.getByRole("button", {name:"Submit registration"}).click();

            const outputRes = await vehicleFrame.locator("#vehicle-output").innerText();
            console.log("Output Result : ", outputRes);

            await expect(vehicleFrame.locator("#vehicle-output")).toHaveText(outputRes);

            await page.waitForTimeout(2000);

    });
