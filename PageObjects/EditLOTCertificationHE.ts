import { Page, expect } from "@playwright/test";
import { EditLOTCertificate } from "../TestData/EditLOTCertificationHE";


export class EditLOTCertificationHardErrorsPage{
    public page : Page;


    constructor(page: Page) {
        this.page = page;
    }


    async performEditLOTCertificate() {


       
        await this.page.getByText('Lot Certification').click();
        await this.page.getByLabel('Product: 1000', { exact: true }).getByLabel('Check State').nth(1).click();
        await this.page.getByLabel('Edit Cert').click();


        //LOT Number 
        await this.page.getByLabel('Lot Number: *').click();
        await this.page.getByLabel('Lot Number: *').fill('');

        //Manufacture Date
        await this.page.getByLabel('Manufacture Date: *').click();
        await this.page.getByLabel('Manufacture Date: *').fill('');

        //Quantity
        await this.page.getByLabel('Quantity: *').click();
        await this.page.getByLabel('Quantity: *').fill('');

        //Specific Gravity 
        await this.page.getByLabel('Specific Gravity: *').click();
        await this.page.getByLabel('Specific Gravity: *').fill('');

        await this.page.getByLabel('Save').click();


        //Hard Errors Validations

        //LOT Number Requried
        await this.page.getByLabel('Lot Number: *').click();
        await this.page.getByText(EditLOTCertificate.LotNumber).first().click();

        //Manufacture Date
        await this.page.getByLabel('Manufacture Date: *').click();
        await this.page.getByText(EditLOTCertificate.MaufactureDate).nth(1).click();

        //Quantity
        await this.page.getByLabel('Quantity: *').click();
        await this.page.getByText(EditLOTCertificate.Quantity).nth(2).click();

        //Specific Gravity 
        await this.page.getByLabel('Specific Gravity: *').click();
        await this.page.getByText(EditLOTCertificate.SpecificGravity).nth(3).click();

    }
}