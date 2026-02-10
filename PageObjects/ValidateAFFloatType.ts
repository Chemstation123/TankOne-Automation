import { Page, expect } from "@playwright/test";

export class ValidateAFIsFloatType {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performValidateAmountFeildIsFloatType() {
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(1000);

        await this.page.getByText('PostingPosting').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill('RPMN');
        await this.page.waitForTimeout(1000);

        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
        await this.page.waitForTimeout(1000);

        // Enter a float value in the Amount field
        const amountField = this.page.getByLabel('Amount', { exact: true });
        await amountField.fill('1.25');
        const enteredValue = await amountField.inputValue();
        await this.page.waitForTimeout(1000);
        await amountField.press('Tab');
        await this.page.waitForTimeout(1000);
        

        // Validate if the entered value is a float
        const isFloat = /^[+-]?\d+(\.\d+)?$/.test(enteredValue);
        expect(isFloat).toBeTruthy(); // Assertion to check if value is a valid float

        console.log(`✅ Validation Passed: Entered Amount "${enteredValue}" is a float.`);
    }
}

    
