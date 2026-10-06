
import { test, expect } from '@playwright/test';

test('Test The File Upload 1', async ({ page }) => {

        await page.goto("https://awesomeqa.com/practice.html");

        const chooseFile = page.locator("#photo");
        chooseFile.setInputFiles(['tests/14_File_Upload/testData.txt']);


        await page.waitForTimeout(5000);
 });
