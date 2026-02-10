import {Page, expect} from '@playwright/test';

export class VerifyLocationDropdownonTopToolbar {
    public page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async VerifyLocationDropdownonTopToolbar() {
        
        await this.page.getByRole('button', { name: 'Select' }).click();
        console.log("Clicked Location Dropdown data display successfully");
        await this.page.getByText('CUST000014982 - Warped Wing - Dayton26 Wyandot St, Dayton, OH').click();
        console.log("Selected Location from Dropdown successfully");
        await this.page.getByText('Welcome, Pramod!Here\'s an overview of your account.Active Tanks8Empty5Critical').click();
        console.log("Landed on Home page successfully and data displayed based on selected location from dropdown");
    }
}