import { Page, expect } from "@playwright/test";
import { SMSPProductsInventoryHE } from "../TestData_DEV/SMSPProductInventoryByLOTNumberHEData";



export class SMSPProductInventoryByLOTNumberHEPage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async getValidationMesssages(printedMessages: Set<string>){
        const validationsDiv = this.page.locator("div >> text=---");
        const count = await validationsDiv.count();

        for (let i = 0; i < count; i++){
            const element = validationsDiv.nth(i);
            if (await element.isVisible()) {
                const text = await element.textContent();
                if (text && text.trim().startsWith('---')){
                    const trimmedText = text.trim();
                    if (!printedMessages.has(trimmedText)) {
                        console.log(`Validation Message: ${trimmedText}`);
                        printedMessages.add(trimmedText);
                    }
                }
            }
        }
    }

    async performSMSPProductInventoryHardErrors()
    {
        const printedMessages = new Set<string>();

        //Navigating to Products list page
        await this.page.getByText('Products').click();
        await this.page.getByText('Products List').click();
        await this.page.getByText('Sanitizer InventorySanitizer').click();
        await this.page.getByLabel('Add Transaction').click();
        await this.page.getByLabel('Save').click();
        await this.getValidationMesssages(printedMessages);
        // await this.page.waitForTimeout(1000);
        

        //Validations for the Hard Errors
        await this.page.waitForSelector('[placeholder="Select a Product"]', { state: 'visible' });
        await this.page.getByPlaceholder('Select a Product').click();
        await this.page.getByLabel('Items').getByText(SMSPProductsInventoryHE.ProductCode).click();
        await this.page.getByLabel('Save').click();
        await this.getValidationMesssages(printedMessages);
        // await this.page.waitForTimeout(1000);
        
        await this.page.getByLabel('Lot Number: *').click();
        await this.page.getByLabel('Lot Number: *').fill(SMSPProductsInventoryHE.LOTNumber);
        await this.page.getByLabel('Save').click();
        await this.getValidationMesssages(printedMessages);
        // await this.page.waitForTimeout(1000);

        await this.page.getByPlaceholder('Select a transaction code').click();
        await this.page.getByText(SMSPProductsInventoryHE.TransactionCode).click();
        await this.page.getByLabel('Save').click();
        await this.getValidationMesssages(printedMessages);
        // await this.page.waitForTimeout(1000);

        await this.page.getByLabel('Transaction Amount: *').click();
        await this.page.getByLabel('Transaction Amount: *').fill(SMSPProductsInventoryHE.TransactionAmount);
        await this.page.getByLabel('Save').click();
        await this.getValidationMesssages(printedMessages);
        
    }
}