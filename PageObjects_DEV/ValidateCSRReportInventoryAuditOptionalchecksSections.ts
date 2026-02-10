import { Page, expect } from "@playwright/test";
import { csrReportsInventoryAuditOptionalchecksData } from "../TestData_DEV/CSRReportsInventoryAuditOptionalchecksData";

export class ValidateCSRReportInventoryAuditOptionalchecksSections{ 
    public page : Page;
    constructor(page: Page){
        this.page = page;
    }
    async validateCSRReportInventoryAuditOptionalchecksSections()
    {   
        // Create a new CSR Report
        await this.page.getByText('Customers').click();
        await this.page.getByRole('gridcell', { name: csrReportsInventoryAuditOptionalchecksData.CustomerID }).click();
        await this.page.getByText('CSR ReportsCSR Reports').click();
        await this.page.getByRole('button', { name: 'New CSR' }).click();
        await this.page.getByRole('textbox', { name: 'Enter contact name' }).click();
        await this.page.getByRole('textbox', { name: 'Enter contact name' }).fill('Test');
        await this.page.getByRole('textbox', { name: 'Enter who you met with' }).click();
        await this.page.getByRole('textbox', { name: 'Enter who you met with' }).fill('Testing');
        await this.page.getByRole('textbox', { name: 'Enter time in' }).click();
        await this.page.getByRole('textbox', { name: 'Enter time in' }).fill('11:00');
        await this.page.getByRole('textbox', { name: 'Enter time out' }).click();
        await this.page.getByRole('textbox', { name: 'Enter time out' }).fill('2:00');
        await this.page.getByRole('button', { name: 'Create CSR' }).click();
        await this.page.getByRole('combobox', { name: 'Select or enter customer' }).click();
        await this.page.getByText('161 N SHELBY STREET').click();

        // Validate Inventory Section
        await this.page.getByRole('button', { name: 'edit' }).click();
        await this.page.getByText('5Inventory✔').click();
        await this.page.getByRole('gridcell', { name: '-13' }).click();
        await this.page.getByRole('gridcell', { name: '90188' }).first().dblclick();
        await this.page.getByRole('gridcell', { name: '220' }).first().click();
        await this.page.getByText('220').nth(1).click();
        await this.page.getByText('%').nth(1).click();
        await this.page.getByText('TanksTanks').click();
        await this.page.getByRole('gridcell', { name: '-13' }).click();
        await this.page.getByRole('gridcell', { name: '90188' }).click();
        await this.page.getByRole('gridcell', { name: '-13' }).click();
        await this.page.getByRole('textbox', { name: 'Tank Number: *' }).click();
        await this.page.getByRole('textbox', { name: 'Product Code:' }).click();
        await this.page.getByRole('spinbutton').first().click();
        await this.page.getByRole('spinbutton').nth(1).click();
        await this.page.getByRole('spinbutton').nth(2).click();
        await this.page.getByText('5Inventory✔').click();

        // Validate Audit Section
        await this.page.getByText('6Audit').click();
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.getByText('Yes', { exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).first().click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).first().fill('Testing');
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
        await this.page.getByRole('listbox').getByText('Yes').click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(1).click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(1).fill('Testing');
        await this.page.getByRole('button', { name: 'Save Draft' }).click();
        await this.page.getByText('6Audit✔').click();

        // chck whether the entries are saved successfully
        await this.page.getByText('6Audit').click();
        await expect(this.page.getByRole('combobox', { name: 'Select...' }).nth(1)).toHaveText('Yes');
        await expect(this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).first()).toHaveText('Testing');
        await expect(this.page.getByRole('combobox', { name: 'Select...' }).nth(2)).toHaveText('Yes');
        await expect(this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(1)).toHaveText('Testing');

        // Validation Optional Checks Section
        await this.page.getByText('7Optional Checks').click();
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.getByText('Yes').click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).first().click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).first().fill('Testing');
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
        await this.page.getByRole('listbox').getByText('Yes').click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(1).click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(1).fill('Testing');
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
        await this.page.locator('#dx-b1f05789-65bb-dd19-83a7-0668174398be').getByText('Yes').click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(2).click();
        await this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(2).fill('Testing');
        // await page.getByText('✔').nth(3).click();
        await this.page.getByText('7Optional Checks✔').click();
        await this.page.getByRole('button', { name: 'Save Draft' }).click();
        // checking whether the entries are saved successfully
        await this.page.getByText('7Optional Checks').click();
        await expect(this.page.getByRole('combobox', { name: 'Select...' }).nth(1)).toHaveText('Yes');
        await expect(this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).first()).toHaveText('Testing');
        await expect(this.page.getByRole('combobox', { name: 'Select...' }).nth(2)).toHaveText('Yes');
        await expect(this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(1)).toHaveText('Testing');
        await expect(this.page.getByRole('combobox', { name: 'Select...' }).nth(3)).toHaveText('Yes');
        await expect(this.page.getByRole('textbox', { name: 'Add any relevant notes or' }).nth(2)).toHaveText('Testing');

        // Delete the created CSR Report
        // await this.page.getByRole('button', { name: 'trash' }).click();
        // await this.page.getByRole('button', { name: 'Yes, Delete' }).click();
        
        this.page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await this.page.getByRole('button', { name: 'trash' }).click();

        
    }}