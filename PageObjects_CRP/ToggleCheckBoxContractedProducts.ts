import { Page, expect } from "@playwright/test";



export class ToggoleCheckBoxContractedProducts{
    public page : Page;

    constructor(page : Page){
        this.page = page;
    }

    async performToggleCheckboxContractedProducts()
    {     
        await this.page.getByText('IGHQ', { exact: true }).click();
        await this.page.getByText('Strategic').click();
        await this.page.getByText('Strategic Accounts').click();
        await this.page.getByRole('gridcell', { name: 'White Labs Inc' }).click();
        await this.page.getByLabel('dropdownbutton').click();
        await this.page.getByText('Edit Customer').click();
        await this.page.getByText('No').click();
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();
        await this.page.getByRole('heading', { name: 'White Labs Inc' }).click();
        await this.page.getByText('Customers', { exact: true }).click()

    }
}