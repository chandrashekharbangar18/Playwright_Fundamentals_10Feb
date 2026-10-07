import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    // Page Locators

    readonly page : Page;
    readonly email : Locator;
    readonly password : Locator;
    readonly loginButton : Locator;

    constructor (page : Page)
    {
        this.page = page;
        this.email = page.getByRole("textbox", { name: "Email Address" });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page
                        .getByRole('button', { name: 'Login to Practice Account' })
                        .or(page.getByTestId('login-button'))
                        .or(page.getByText('Login to Practice Account'));

    }

    // Page Actions

    async goto()
    {
        await this.page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    }

    async signin(username : string, password : string)
    {
        await this.email.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}