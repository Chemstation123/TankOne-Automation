import { Page, expect } from "@playwright/test";



export class TaxFieldFreightPage{
    public page : Page;

    constructor(page : Page) {
        this.page = page;
    }

    async TaxFieldFreight()

    {

        await this.page.getByRole('combobox', { name: 'Select...' }).click(); // to check I have added this line
        await this.page.getByText('Dayton (IGHQ), OH -').click(); // to check I have added this line
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(1000);

        await this.page.getByRole('row', { name: 'Select row Expand 106 Actest' }).getByLabel('Edit').click(); // to check I have added this line
        // await this.page.getByRole('row', { name: 'Select row Expand 118348' }).getByRole('link').nth(1).click();


        await this.page.getByRole('link', { name: 'Misc/Freight' }).first().click(); // to check I have added this line

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Add New Misc/Freight Item').click();
        await this.page.waitForTimeout(1000);
        await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(1).click();
        await this.page.getByText('Freight', { exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('combobox', { name: 'Select a value...' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator('app-tank-dropdown').getByLabel('Select').click();
        //await this.page.locator('app-tank-dropdown span').nth(1).click();

        await this.page.getByText('abc Rockford, OH').first().click(); // to check I have added this line
        // await this.page.getByRole('gridcell', { name: '12688 New Holland St. Holland' }).click();

        // Validation step for tax text box
        const taxTextBox = await this.page.locator("//dx-drop-down-box[@placeholder='Select a value...']");  // Update with the correct selector for the tax textbox
        
        // Check if the tax text box is visible after selecting 'Freight'
        await expect(taxTextBox).toBeVisible();
        
    }
}