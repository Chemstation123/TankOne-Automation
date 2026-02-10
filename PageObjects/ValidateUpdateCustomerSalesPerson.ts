import { Page, expect } from "@playwright/test";
import { UpdateAccountManager } from "../TestData/ValidateUpdateSalesPersonJData";




export class ValidateUpdateCustomerSalesPerson {
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performValidateUpdateCustomerSalesPerson(){

        await this.page.getByText('Customers').click();
        await this.page.getByPlaceholder('Search...').click();
        await this.page.getByPlaceholder('Search...').fill(UpdateAccountManager.Customer);
        await this.page.waitForTimeout(2000);

        //selecting any customer 
        await this.page.getByRole('gridcell', { name: UpdateAccountManager.Customer }).click();

        //Validating the Account Manager
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Select...').nth(2).click();
        await this.page.waitForTimeout(1000);
        const AccontManager = await this.page.getByPlaceholder('Select...').nth(2).innerText();
        console.log(AccontManager);


        //Validating Account Manager in the Quote Info tab 
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Quote InfoQuote Info').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: '10005' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Commissions').click();

        //Account Manger validation 
        await this.page.waitForTimeout(1000);
        await this.page.locator("//td[normalize-space(text())='Tal Selby']").click();
        await this.page.waitForTimeout(1000);
        const AM1 = this.page.locator("//td[normalize-space(text())='Tal Selby']").innerText();
        console.log(await AM1);

        await this.page.getByLabel('Commissions for Product').getByLabel('Close').click();
        await this.page.getByRole('link', { name: 'Customer List' }).click();

        //Scenario 2 -- Updating the Account Manager 
        await this.page.getByPlaceholder('Search...').fill(UpdateAccountManager.Customer);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('gridcell', { name: UpdateAccountManager.Customer }).click();

        //Updating the selected the Customer Account Manager 
        await this.page.getByLabel('dropdownbutton').click();
        await this.page.getByText('Edit Customer').click();

        //Updating Account Manager 
        await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Select...').nth(2).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByText(UpdateAccountManager.VAccount_Manager).click();
        const UpdatedAccountManager = this.page.getByText(UpdateAccountManager.VAccount_Manager).innerHTML();
        console.log(await UpdatedAccountManager);
        expect((await (UpdatedAccountManager)).includes(UpdateAccountManager.VAccount_Manager)).toBe(true);
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('Save').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Record Saved Succesfully').click();
        


        await this.page.locator('dx-select-box').filter({ hasText: 'Pull down to refresh...' }).getByPlaceholder('Select...').click();
        
        //validating the Account Manager 
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Quote InfoQuote Info').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: '10005' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Commissions').click();

        //Validation in Quote Info tab 
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: UpdateAccountManager.VAccount_Manager }).first().click();
        await this.page.waitForTimeout(1000);
        const VAccountManager = this.page.getByRole('gridcell', { name: UpdateAccountManager.VAccount_Manager }).first().innerHTML();
        console.log(await VAccountManager);
        await this.page.waitForTimeout(1000);
        expect(UpdateAccountManager.VAccount_Manager).toBe(UpdateAccountManager.VAccount_Manager);

        await this.page.getByLabel('Commissions for Product').getByLabel('Close').click();
        await this.page.getByRole('link', { name: 'Customer List' }).click();



           // Need to discuss this with Vijay about the flow logic.


    }
    
}
