import { Page,expect } from "@playwright/test";
import { ValidateUnCapAmount } from "../TestData/ValidateUnCapAmountFeildsPostingJData";




export class ValidateUnCapAmountFeilds {
    public page : Page;

    constructor(page : Page){
        this.page = page;
    }

    async performValidateUnCapAmountFeilds() 
    {
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(1000);

        await this.page.getByText('PostingPosting').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill('DMR');
        await this.page.waitForTimeout(1000);

        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
        await this.page.waitForTimeout(1000);

        // Enter a float value in the Amount field
        const amountField = this.page.getByLabel('Amount', { exact: true });
        await amountField.fill(ValidateUnCapAmount.Amount_Feild);

        await this.page.getByLabel('Amount', { exact: true }).press('Tab');
        await this.page.getByText(ValidateUnCapAmount.Validation_Message).click();
        const confrim_Message = await this.page.getByText(ValidateUnCapAmount.Validation_Message).innerText();
        console.log(confrim_Message);
        await this.page.waitForTimeout(1000);

        await this.page.getByLabel('Yes').click();
        await this.page.waitForTimeout(2000);
        console.log('Clicked "Yes" on the confirmation dialog.');

        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
        await this.page.getByLabel('Amount', { exact: true }).press('Tab');
        await this.page.getByLabel('Unf Cap', { exact: true }).fill(ValidateUnCapAmount.UnCap_Feild);
        const unCapFeild = this.page.getByLabel('Unf Cap', { exact: true }).innerText();
        console.log(unCapFeild);
        await this.page.waitForTimeout(1000);

        await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');
        await this.page.getByLabel('Yes').click();
        await this.page.waitForTimeout(2000);
        console.log('Clicked "Yes" on the confirmation dialog.');


       

   

    


    }
}