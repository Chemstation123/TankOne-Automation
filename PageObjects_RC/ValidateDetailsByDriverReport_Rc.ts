import { Page, expect } from "@playwright/test";



export class DetailsByDriver {
    public page : Page;


    constructor(page: Page) {
        this.page = page;
    }


    async performDetailsByDriver() {


        
        // await this.page.getByLabel('Username').fill('fmohammed@chemstation.com');
        // await this.page.getByLabel('Password').click();
        // await this.page.getByLabel('Password').fill('Iamlegend@62');
        // await this.page.getByRole('button', { name: 'Sign In' }).click();

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Reports').getByText('Reports').click();
        await this.page.getByPlaceholder('Search...').click();
        await this.page.getByPlaceholder('Search...').fill('Details By Driver');
        await this.page.getByText('Details By Driver').click();
        await this.page.getByRole('combobox').nth(1).click();
        await this.page.getByRole('combobox').nth(2).click();
        await this.page.getByLabel('Submit').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Report Preview page 1 of').locator('div').nth(3).click();
        await this.page.getByRole('button', { name: 'Close' }).click();

        
    }
}