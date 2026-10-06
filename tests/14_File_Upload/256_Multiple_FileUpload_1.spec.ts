import { test, expect } from '@playwright/test';


test('Test The Multiple File Upload ', async ({ page }) => {

        await page.goto("https://www.patternfly.org/components/file-upload/multiple-file-upload");

    //  const chooseFileToUpload = page.getByRole('button', {name : 'Upload'});
        const chooseFileToUpload = page.locator('div.pf-v6-c-multiple-file-upload input');
        chooseFileToUpload.setInputFiles(['0.png','A.png']);

        // const output = await page.locator('#single-preview').innerText();
        // console.log('Output --> ', output);

        // await expect(output).toContain('testData.txt');


        await page.waitForTimeout(5000);
 });
