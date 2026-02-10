import { Page, expect } from "@playwright/test";
import { CreateUpdateMSCOverride } from "../TestData/CreateUpdateMSCOverrideJData";



export class CreateUpdateMSCOverridePage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performCreateUpdateMSCOverride(){

        await this.page.getByText('Products').click();
        await this.page.getByText('Products List').click();

        //Searhing for the Product 
        await this.page.getByPlaceholder('Search...').click();
        await this.page.getByPlaceholder('Search...').fill(CreateUpdateMSCOverride.Product);
        await this.page.getByText(CreateUpdateMSCOverride.Product).click();

        //View full product details
        await this.page.waitForTimeout(3000);
        await this.page.getByLabel('View Full Product Detail').click();
        await this.page.waitForTimeout(5000);
        await this.page.getByLabel('MSC Override').click();

        //MSC Override
        await this.page.getByLabel('MSC Factor: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('MSC Factor: *').fill(CreateUpdateMSCOverride.MSC_Factor);

        await this.page.getByLabel('Minimum MSC: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Minimum MSC: *').fill(CreateUpdateMSCOverride.Minimum_MSC);

        await this.page.getByLabel('Maximum Load: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Maximum Load: *').fill(CreateUpdateMSCOverride.Maximum_Load);

        await this.page.getByLabel('Reason For Override:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Reason For Override:').fill(CreateUpdateMSCOverride.Reason_For_Override);

        
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();

        await this.page.getByRole('cell', { name: CreateUpdateMSCOverride.Validation_Value }).click();
        const MyValidation_Value = await this.page.getByRole('cell', { name: CreateUpdateMSCOverride.Validation_Value }).innerHTML();
        console.log(MyValidation_Value);

        //Validation of the MSC Overridden 
        await this.page.getByRole('link', { name: 'Product List' }).click();

        await this.page.getByRole('gridcell', { name: CreateUpdateMSCOverride.Validation_Value }).click();
        const MyStrategic_MSC = await this.page.getByRole('gridcell', { name: CreateUpdateMSCOverride.Validation_Value }).innerHTML();
        console.log(MyStrategic_MSC);
        expect((await MyStrategic_MSC).includes(MyValidation_Value)).toBe(true);


        //await page.getByRole('cell', { name: 'Strategic' }).click();

        



    }
}