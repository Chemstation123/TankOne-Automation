import { Page, expect } from "@playwright/test";
import { CreateDeleteVendor } from "../TestData/CreateDeleteRawMaterialVendorJData";



export class CreateDeleteRawMaterialVendorPage{
    public page : Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performCreateDeleteRawMaterialVendor(){

        //Accessing Raw Materials 
        await this.page.getByText('Products').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Raw Materials').click();

        //Searching for a Raw Material
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').fill(CreateDeleteVendor.Searching_RawMaterial);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: CreateDeleteVendor.Searching_RawMaterial }).first().click();
        await this.page.waitForTimeout(1000);
        const MyRawMaterialSearch = await this.page.getByRole('gridcell', { name: CreateDeleteVendor.Searching_RawMaterial }).first().innerText();
        console.log(MyRawMaterialSearch);

        //Adding new Vendor
        await this.page.waitForTimeout(1000);
        await this.page.getByText('VendorsVendors').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Add a row').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('New Vendor Name').click();
        // await this.page.getByLabel('Add Exisiting Vendor').getByLabel('Select').click();
        // await this.page.getByPlaceholder('New Vendor Name').click();

        await this.page.waitForTimeout(3000);
        await this.page.getByLabel('Items').getByText('PVS').click();
        await this.page.waitForTimeout(3000);
        // const Vendor1 = await this.page.getByRole('gridcell', { name: CreateDeleteVendor.Vendor1_ID }).first().innerHTML();
        // console.log(Vendor1);
        // expect(CreateDeleteVendor.Vendor1_ID).toContain("PVS");

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Vendor Item Number: *').click();
        await this.page.getByLabel('Vendor Item Number: *').fill('T1234');
        await this.page.waitForTimeout(1000);
        const Vendor1ItemNumber = await this.page.getByLabel('Vendor Item Number: *').innerText();
        console.log(Vendor1ItemNumber);
        expect(CreateDeleteVendor.Vendor1_ItemNumber).toContain("T1234");

        // Saving the record
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Adding 2nd Vendor
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Add a row').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Add Exisiting Vendor').getByLabel('Select').click();

        await this.page.waitForTimeout(1000);
        await this.page.getByText(CreateDeleteVendor.Vendor2_ID).click();
        await this.page.waitForTimeout(1000);
        // const Vendor2 = await this.page.getByRole('gridcell', { name: 'NEXEO', exact: true }).innerHTML();
        // console.log(Vendor2);
        // expect(CreateDeleteVendor.Vendor2_ID).toContain("Nexeo");


        await this.page.locator("(//input[@aria-required='true'])[2]").click();
        await this.page.waitForTimeout(1000);
        await this.page.locator("(//input[@aria-required='true'])[2]").fill(CreateDeleteVendor.Vendor2_ItemNumber);
        await this.page.waitForTimeout(1000);
        // const Vendor2ItemNumber = await this.page.locator("(//input[@aria-required='true'])[2]").innerHTML();
        // console.log(Vendor2ItemNumber);
        // expect(CreateDeleteVendor.Vendor2_ItemNumber).toContain("T4321");

        //Saving the record
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Deleting the created vendor 
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Delete' }).nth(2).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Yes').click();
        await this.page.getByText('Vendor Deleted').click();
    

    
    }
}