import { Page,expect } from "@playwright/test";
import { CreateUpdateLOTCertificate } from "../TestData/Create&UpdateLOTCertificationLData";


export class CreateUpdateLOTCertificationPage{
    public page : Page;


    constructor(page: Page) {
        this.page = page;
    }


    async performCreateUpdateLOTCertificate() {

        await this.page.getByText('Lot Certification').click();
        await this.page.getByLabel('plus').click();

        await this.page.waitForTimeout(20000);

        await this.page.getByPlaceholder('Select Product...').click();
        await this.page.waitForTimeout(3000);
        await this.page.getByText('10003', { exact: true }).click();
        //await this.page.getByText('Product: 10005').click();

        //Manufacturing Date & Time

        const today : Date = new Date();
        //Extract year, month, and day
        const year: number = today.getFullYear();
        const month: number = today.getMonth() + 1;
        const day : number = today.getDate();
    
        //Formatting of the Date as mm-dd-yyyy
        const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;

        await this.page.getByLabel('Manufacture Date & Time: *').click();
        await this.page.getByLabel('Manufacture Date & Time: *').fill(formattedDate);
        const Manufactured_Date = this.page.getByLabel('Manufacture Date & Time: *').innerText();
        console.log(await Manufactured_Date);

        //Quantity
        await this.page.locator('dx-number-box').getByRole('spinbutton').click();
        // await this.page.getByRole('spinbutton').fill('03');
        // await this.page.getByRole('spinbutton').press('NumLock');
        // await this.page.getByRole('spinbutton').press('NumLock');
        await this.page.locator('dx-number-box').getByRole('spinbutton').fill(CreateUpdateLOTCertificate.Quantity);
        await this.page.waitForTimeout(1000);

        //pH Value Range
        await this.page.getByLabel('pH Value Range: 13.1 - 13.7: *').click();
        await this.page.getByLabel('pH Value Range: 13.1 - 13.7: *').fill(CreateUpdateLOTCertificate.pHValueRange);
        const PH_Value = this.page.getByLabel('pH Value Range: 13.1 - 13.7: *').innerHTML();
        console.log(await PH_Value);
        // await this.page.getByLabel('pH Value Range: 10.7 - 11.3: *').click();
        // await this.page.getByLabel('pH Value Range: 10.7 - 11.3: *').fill(CreateUpdateLOTCertificate.pHValueRange);

        //Specific Grav Range
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Specific Grav Range: 1.02 - 1').click();
        await this.page.getByLabel('Specific Grav Range: 1.02 - 1').fill(CreateUpdateLOTCertificate.SpecficGravRange);
        // await this.page.getByLabel('Specific Grav Range: 1.065 -').fill('1.078');
        // await this.page.getByLabel('Enter Lot Certification').getByRole('combobox', { name: 'Select...' }).click();
        // await this.page.getByLabel('Specific Grav Range: 1.065 -').click();
        //await this.page.getByLabel('Specific Grav Range: 1.065 -').fill(CreateUpdateLOTCertificate.SpecficGravRange);
        const Specific_Gravity = this.page.getByLabel('Specific Grav Range: 1.02 - 1').innerHTML();
        console.log(await Specific_Gravity);

        //Certified By
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Enter Lot Certification').getByRole('combobox', { name: 'Select...' }).click();
        await this.page.getByRole('option', { name: '_ DAYT_TEST1_FIRST' }).locator('div').click();
        // await this.page.getByLabel('Select', { exact: true }).nth(4).click();
        // await this.page.getByText(CreateUpdateLOTCertificate.CertifiedBy).click();
        // const Certified_By = this.page.getByText(CreateUpdateLOTCertificate.CertifiedBy).innerHTML();
        // console.log(await Certified_By);

        
        //Comment
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Comment:').click();
        await this.page.getByLabel('Comment:').fill(CreateUpdateLOTCertificate.Comment);


        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();
        // await this.page.getByPlaceholder('Search').click();
        // await this.page.getByPlaceholder('Search').fill('10005');
        // await this.page.getByText('Product: 10005').click();
        // await this.page.getByRole('group').nth(2).click();
        // await this.page.getByLabel('Check State').click();


    }
}