import {Page, expect} from "@playwright/test";

export class VerifyUsageSection{
    public page : Page;
    constructor(page : Page){
    this.page = page;
    }


    async VerifyUsageSection()
    {
        await this.page.getByRole('cell', { name: '-1' }).click();
        await this.page.getByRole('button', { name: ' Usage', exact: true }).click();

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const maxDaysBack = 30; // Adjust range as needed
        const randomDaysBack = Math.floor(Math.random() * maxDaysBack) + 1; // 1-30 days before yesterday
        const startDate = new Date(yesterday.getTime() - randomDaysBack * 24 * 60 * 60 * 1000);
        const formatDate = (date: Date): string => 
        date.getFullYear() + '-' + 
        String(date.getMonth() + 1).padStart(2, '0') + '-' + 
        String(date.getDate()).padStart(2, '0');
        await this.page.getByRole('textbox', { name: 'Start Date' }).fill(formatDate(startDate));
        await this.page.getByRole('textbox', { name: 'End Date' }).fill(formatDate(yesterday));


        await this.page.locator('div.row.g-2').locator('div').nth(0).innerText().then(text => {
            console.log('SummarySection_1: ' + '\n' + text);
        });
        await this.page.locator('div.row.g-2').locator('div').nth(1).innerText().then(text => {
            console.log('SummarySection_2: ' + '\n' + text);
        });
        await this.page.locator('div.row.g-2').locator('div').nth(2).innerText().then(text => {
            console.log('SummarySection_3: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(3).innerText().then(text => {
            console.log('CurrentInventory_1: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(4).innerText().then(text => {
            console.log('CurrentInventory_2: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(5).innerText().then(text => {
            console.log('CurrentInventory_3: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(6).innerText().then(text => {
            console.log('CurrentInventory_4: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(7).innerText().then(text => {
            console.log('EstimatedUsage_1: ' + '\n' + text);
        }
        );

        await this.page.locator('div.row.g-2').locator('div').nth(8).innerText().then(text => {
            console.log('EstimatedUsage_2: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(9).innerText().then(text => {
            console.log('EstimatedUsage_3: ' + '\n' + text);
        });

        await this.page.locator('div.row.g-2').locator('div').nth(10).innerText().then(text => {
            console.log('EstimatedUsage_4: ' + '\n' + text);
        });

    }
}