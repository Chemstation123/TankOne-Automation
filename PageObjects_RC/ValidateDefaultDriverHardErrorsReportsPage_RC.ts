import { Page, expect } from "@playwright/test";



export class DefaultDriverHEReportsPage {
    public page: Page;


    constructor(page: Page) {
        this.page = page;
    }


    async performDefaultDriverHEReports() {

        await this.page.waitForTimeout(2000);
        await this.page.getByText('Reports').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Search...').first().click();
        await this.page.waitForTimeout(2000);
        await this.page.locator("//input[@aria-label='Search']").fill('Details by Driver');
        await this.page.getByText('Details By Driver').click();
        await this.page.getByRole('combobox').nth(1).click();
        await this.page.getByRole('combobox').nth(1).fill('');
        await this.page.getByRole('combobox').nth(2).click();
        await this.page.locator('dx-date-box').filter({ hasText: 'Required' }).getByRole('combobox').click();
        await this.page.getByText('Required').click();
        await this.page.getByRole('combobox').nth(2).click();
        await this.page.getByRole('combobox').nth(2).fill('');
        await this.page.getByText('Report details of all deliveries by driver for a specified period of time.Start').click();
        await this.page.locator('app-report-base div').filter({ hasText: 'Report details of all deliveries by driver for a specified period of time.Start' }).nth(2).click();
        await this.page.getByRole('combobox').nth(2).click();
        await this.page.getByText('Required').nth(1).click();

    }
}