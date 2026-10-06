
import { test, expect } from '@playwright/test';

test('Test The File Upload 2', async ({ page }) => {

        await page.goto("https://the-internet.herokuapp.com/upload");

        const chooseFileToUpload = page.locator("#file-upload");
        chooseFileToUpload.setInputFiles(['tests/14_File_Upload/testData.txt']);

        await page.locator('file-submit').click();

        await expect(page.locator('#content')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toContainText('testData.txt');


        await page.waitForTimeout(5000);
 });

 test('Test The File Upload 3', async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download");

        const chooseFileToUpload = page.locator("#single-upload");
        chooseFileToUpload.setInputFiles(['tests/14_File_Upload/testData.txt']);

        // const output = await page.locator('#single-preview').innerText();
        // console.log('Output --> ', output);

        // await expect(output).toContain('testData.txt');


        await page.waitForTimeout(5000);
 });
