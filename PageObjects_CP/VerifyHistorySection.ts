import {Page, expect} from "@playwright/test";


export class VerifyHistorySection{
    public page : Page;
    constructor(page : Page){
    this.page = page;
    }
    async VerifyHistorySection()
    {
        await this.page.getByRole('cell', { name: '-1' }).click();
        await this.page.getByRole('button', { name: 'History' }).click();

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
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Submit').click();
        
        await this.page.getByRole('list', { name: 'Chart legend' }).click();
        console.log('Chart legend is displayed');
        await this.page.getByText('Gallons').click();
        console.log('Gallons is displayed in the graph');
        await this.page.getByRole('columnheader', { name: 'Status', exact: true }).click();
        console.log('Status column is displayed');
        await this.page.getByRole('columnheader', { name: 'Inventory Date' }).click();
        console.log('Inventory Date column is displayed');
        await this.page.getByRole('columnheader', { name: 'Height' }).click();
        console.log('Height column is displayed');
        await this.page.getByRole('columnheader', { name: 'Volume', exact: true }).click();
        console.log('Volume column is displayed');
        await this.page.getByRole('columnheader', { name: '% of Tank Capacity' }).click();
        console.log('% of Tank Capacity column is displayed');
        await this.page.getByRole('columnheader', { name: 'Temperature' }).click();
        console.log('Temperature column is displayed');
        await this.page.getByRole('columnheader', { name: 'Signal Strength' }).click();
        console.log('Signal Strength column is displayed');
        await this.page.getByRole('columnheader', { name: 'Telemetry Unit Serial Number' }).click();
        console.log('Telemetry Unit Serial Number column is displayed');

    }
}