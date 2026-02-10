import { Page,expect } from "@playwright/test";
import { CreateUpdateGlobalVMPage } from "../TestData/CreateUpdateGlobalVendorMaintenanceJData";



export class CreateUpdateGlobalVendorMaintenancePage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }


    async performCreateUpdateGVMPage() {

        await this.page.getByText('Settings').click();


        await this.page.getByText('Lookup Tables').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Global Vendor MaintenanceGlobal Vendor Maintenance').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.waitForTimeout(1000);

        //VendorCode
        await this.page.getByLabel('Vendor Code: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Vendor Code: *').fill(CreateUpdateGlobalVMPage.VendorCode);
        await this.page.waitForTimeout(1000);
        const MyVendorCode = this.page.getByLabel('Vendor Code: *').innerHTML();
        await this.page.waitForTimeout(1000);
        console.log(await (MyVendorCode));
        expect(CreateUpdateGlobalVMPage.VendorCode).toContain("T1234")

        //VendorName
        await this.page.getByLabel('Vendor Name: *').click();
        await this.page.getByLabel('Vendor Name: *').fill(CreateUpdateGlobalVMPage.VendorName);
        await this.page.waitForTimeout(1000);
        const MyVendorName = this.page.getByLabel('Vendor Name: *').innerHTML();
        await this.page.waitForTimeout(1000);
        console.log(await (MyVendorName));
        await this.page.waitForTimeout(1000);
        expect(CreateUpdateGlobalVMPage.VendorName).toContain("Testing");

        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Searching for the created Vendor
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CreateUpdateGlobalVMPage.SearchingVendor);
        await this.page.getByRole('gridcell', { name: CreateUpdateGlobalVMPage.SearchingVendor }).click();
        await this.page.getByRole('link', { name: 'Edit' }).click();

        //Updating Vendor Code
        await this.page.getByLabel('Vendor Code: *').click();
        await this.page.getByLabel('Vendor Code: *').fill(CreateUpdateGlobalVMPage.UpdatedVendorCode);
        await this.page.waitForTimeout(1000);
        const UpdatedVendorCode = this.page.getByLabel('Vendor Code: *').innerHTML();
        await this.page.waitForTimeout(1000);
        console.log(await (UpdatedVendorCode));
        await this.page.waitForTimeout(1000);
        expect(CreateUpdateGlobalVMPage.UpdatedVendorCode).toContain("T4321")

        //Updating Vendor Name
        await this.page.getByLabel('Vendor Name: *').click();
        await this.page.getByLabel('Vendor Name: *').fill(CreateUpdateGlobalVMPage.UpdatedVendorName);
        await this.page.waitForTimeout(1000);
        const UpdatedVendorName = this.page.getByLabel('Vendor Name: *').innerHTML();
        await this.page.waitForTimeout(1000);
        console.log(await (UpdatedVendorName));
        await this.page.waitForTimeout(1000);
        expect(CreateUpdateGlobalVMPage.UpdatedVendorName).toContain("Test")


        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();
        await this.page.waitForTimeout(1000);

        //Deleting Record
        await this.page.getByLabel('Reset State').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CreateUpdateGlobalVMPage.UpdatedVendorCode);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: CreateUpdateGlobalVMPage.UpdatedVendorCode }).click();
        await this.page.getByRole('link', { name: 'Delete' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Yes').click();
        await this.page.getByText('Vendor Deleted').click();









        // await this.page.getByText('Products').click();
        // await this.page.getByText('Raw Materials').click();
        // await this.page.getByPlaceholder('Search...').click();
        // await this.page.getByPlaceholder('Search...').fill('');
        // await this.page.getByRole('gridcell', { name: '3030' }).first().click();
        // await this.page.getByText('VendorsVendors').click();
        // await this.page.getByLabel('Data grid with 3 rows and 3').getByPlaceholder('Search...').click();
        // await this.page.getByLabel('Data grid with 3 rows and 3').getByPlaceholder('Search...').fill('T4321');
        // await this.page.locator('div:nth-child(7) > .dx-item-content > .dx-datagrid-search-panel > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-clear-button-area > .dx-icon').click();
        // await this.page.locator('.dx-first-cell > .dx-editor-with-menu > .dx-menu > .dx-menu-horizontal > .dx-menu-items-container > .dx-menu-item-wrapper > .dx-item > .dx-context-menu-container-border').click();
        // await this.page.getByRole('menu').getByText('Contains').click();
        // await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(2).fill('T4321');

    }
}