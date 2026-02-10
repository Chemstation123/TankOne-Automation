import { Page, expect } from "@playwright/test";


    function generateRandomAlphaNumeric(length: number) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++){
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
        
    }

    function generateRandomNumber(length: number){
        return Math.floor(Math.random() * (10 ** length - 10 ** (length - 1)) + 10 ** (length - 1)).toString();
    }

    export class SanitizerInventoryAddingNewDefaultTransaction {
        public page : Page;

        constructor(page: Page){
            this.page = page;
        }
    

    async performAddingNewDefaultTransaction()
    {
        const randomLOT = generateRandomAlphaNumeric(4);
        const randomTransactionCode = generateRandomAlphaNumeric(4);
        const randomAmount = generateRandomNumber(3);

        await this.page.getByText('Products').click();
        await this.page.getByText('Products List').click();
        await this.page.getByText('Sanitizer InventorySanitizer').click();
        await this.page.getByLabel('Add Transaction').click();


        // Randomly select a product
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Select a Product').click();
        const productOptions = this.page.locator('[role="listbox"] >> [role="option"]');
        const count = await productOptions.count();
        const randomIndex = Math.floor(Math.random() * count);
        const selectedProduct = await productOptions.nth(randomIndex).innerText();
        await productOptions.nth(randomIndex).click();

        // LOT Number
        await this.page.getByLabel('Lot Number: *').fill(randomLOT);

        // Transaction Code
        await this.page.getByPlaceholder('Select a transaction code').click();
        await this.page.getByText('Default').click();

        // Transaction Amount
        await this.page.getByLabel('Transaction Amount: *').fill(randomAmount);

        // Operator, Keyed By, Note
        await this.page.getByLabel('Operator Name:').fill('TGP');
        await this.page.getByLabel('Keyed By:').fill('Tester');
        await this.page.getByLabel('Note:').fill('Testing');

        await this.page.getByLabel('Save').click();

        // Wait and locate grid row
        //const grid = this.page.getByRole('gridcell', { name: selectedProduct });
        await this.page.waitForTimeout(1000);
        const grid = this.page.getByRole('gridcell', { name: selectedProduct }).first();
        await expect(grid).toBeVisible();

        await this.page.getByRole('row', { name: new RegExp(`.*${selectedProduct}.*`) }).locator('div').click();
        await this.page.getByRole('row', { name: new RegExp(`.*${randomLOT}.*`) }).locator('div').click();

        // Verify values
        await expect(this.page.getByRole('gridcell', { name: 'Default' })).toBeVisible();
        await expect(this.page.getByRole('gridcell', { name: randomLOT }).first()).toBeVisible();
        await expect(this.page.getByRole('gridcell', { name: randomAmount }).first()).toBeVisible();
        await expect(this.page.getByRole('gridcell', { name: 'TGP' })).toBeVisible();
        await expect(this.page.getByRole('gridcell', { name: 'Testing' })).toBeVisible();

        
    }
}

