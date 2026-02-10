import { Page, expect } from "@playwright/test";




export class VerifyHomeAndLogoutButtonsOnLeftPanel {
    public page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async VerifyHomeAndLogoutButtonsOnLeftPanel() {
   
        await this.page.getByRole('link', { name: ' Home' }).click();
        console.log("Clicked on Home button");
        await this.page.getByText('Welcome, Pramod!Here\'s an overview of your account.Active Tanks8Empty5Critical').click();
        console.log("Landed on Home page Successfully");
        await this.page.getByRole('link', { name: ' Documents' }).click();
        console.log("Clicked on Documents button");
        console.log("Landed on Documents page Successfully");
        await this.page.getByRole('application', { name: 'File Manager' }).click();
        await this.page.getByRole('link', { name: ' Home' }).click();
        console.log("Clicked on Home button again Navigated to Home page");
        await this.page.getByText('Welcome, Pramod!Here\'s an overview of your account.Active Tanks8Empty5Critical').click();
        await this.page.getByRole('button', { name: ' Logout' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
        console.log("Clicked on Logout button and logged out successfully");
    }
}