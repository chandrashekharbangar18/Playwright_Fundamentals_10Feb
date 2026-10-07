import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { faker } from '@faker-js/faker';

test.describe('POM with Login Page', () => {

    test('Test Login with Valid Cred', async ({ page }) => {

        const loginPage = new LoginPage(page); // object creation

        await loginPage.goto();
    //  await loginPage.signin('admin', 'admin123'); // or
        await loginPage.signin(faker.internet.email(), faker.internet.password());

        await expect(page).toHaveTitle('Multiple Element Filter Login — The Testing Academy');

    });
});