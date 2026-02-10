import { Page, expect } from "@playwright/test";



export class VerifyRawMaterialsHardErrors{
    public page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async verifyRMHardErrors()
    {
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Products').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Raw Materials').click();

        //Creating a New Raw Material
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('New Raw Material').click();
        await this.page.waitForTimeout(3000);
        await this.page.getByLabel('New Raw Material').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Save').click();

        //Validations
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Raw Material Code: *').click();
        await this.page.getByText('Raw Material Code Required.').click();
        const RMCode = await this.page.getByText('Raw Material Code Required.').innerHTML();
        console.log(RMCode);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Specific Gravity: *').click();
        await this.page.getByText('Specific Gravity Required.').click();
        const SpecificGravity = await this.page.getByText('Specific Gravity Required.').innerHTML();
        console.log(SpecificGravity);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Raw Material Type: *').click();
        await this.page.getByText('Raw Material Type Required.').click();
        const RMType = await this.page.getByText('Raw Material Type Required.').innerHTML();
        console.log(RMType);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Raw Material Description: *').click();
        await this.page.getByText('Raw Material Description Required.').click();
        const RMDescription = await this.page.getByText('Raw Material Description Required.').innerHTML();
        console.log(RMDescription);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Flash Point: *').click();
        await this.page.getByText('Flash Point Required.').click();
        const FP = await this.page.getByText('Flash Point Required.').innerHTML();
        console.log(FP);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Package Type: *').click();
        await this.page.getByText('Package Type Required.').click();
        const PackageType = await this.page.getByText('Package Type Required.').innerHTML();
        console.log(PackageType);
    }
}