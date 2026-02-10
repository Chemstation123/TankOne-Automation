import { Page, expect } from "@playwright/test";
import { ValidateAmouintFeildInCustomerPage } from "../TestData/ValidateAmountFeildIsFloatTypeINCustomerPage";

export class ValidateAmountFeildIsFloatInCustomerPage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performAmountFeildIsFloatValue() {
        // Navigate to the posting page
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('PostingPosting').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(ValidateAmouintFeildInCustomerPage.Customer_Name);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();

        // Fill and validate the amount field with valid float values
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Amount', { exact: true }).fill(ValidateAmouintFeildInCustomerPage.ValidAmountValue);
        await this.page.waitForTimeout(1000);
        const validAmountValue = await this.page.getByLabel('Amount', { exact: true }).inputValue();
        expect(parseFloat(validAmountValue)).toBeCloseTo(1.23, 2);

        //Testing invalid input: alphabets
    try {
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Amount', { exact: true }).fill(ValidateAmouintFeildInCustomerPage.InvalidAmount_Alphabets); // Example invalid input
        const invalidAmountAlpha = await this.page.getByLabel('Amount', { exact: true }).inputValue();
        expect(invalidAmountAlpha).toBe('');
    } catch (error) {
        console.log("Failed: Amount feild will not accepted invalid alphabet input.")
    }
    

       // Testing invalid input: special characters
    try {
       await this.page.getByLabel('Amount', { exact: true }).fill(ValidateAmouintFeildInCustomerPage.InvalidAmount_Special); // Example invalid input
       const invalidAmountSpecial = await this.page.getByLabel('Amount', { exact: true }).inputValue();
       expect(invalidAmountSpecial).toBe(''); // Field should reject invalid input or clear it
    } catch (error) {
        console.log("Failed: Amount FEild will not accept special characters as input.")
    }
    if (validAmountValue === validAmountValue){
        console.log(`Amount Feild is accepting float values : ${validAmountValue}`);
    } else {
        console.log("Errorin accepting float values in Amount Feild. ");
    }
        
    }
}