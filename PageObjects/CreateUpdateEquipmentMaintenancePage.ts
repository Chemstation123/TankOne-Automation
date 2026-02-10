import { Page,expect } from "@playwright/test";
import { CreateUpdateEquipmentMPage } from "../TestData/CreateUpdateEquipmentMaintenanceJData";





export class CreateUpdateEquipmentMaintenancePage{
    public page : Page;

    constructor(page: Page){
        this.page =  page;
    }


    async performCreateUpdateEquipmentPage() {

        await this.page.getByText('Settings').click();
        await this.page.getByText('Lookup Tables').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Equipment MaintenanceEquipment Maintenance').click();

        //Adding New Record 
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.waitForTimeout(3000);

        function generateRandomAlphanumeric(length : number): string{
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            const characterslenght = characters.length;

            for(let i =0; i<length; i++){
                result += characters.charAt(Math.floor(Math.random() * characterslenght));
            }

            return result;
        }

        for(let i=0; i<20; i++){
            const randomStr = generateRandomAlphanumeric(5);
            console.log(randomStr);
        }

        function isValidAlphanumeric(str: string, length: number): boolean{
            //check if the string is correct length and only constians alphanumeric characters
            const regex = /^[A-Za-z0-9]{5}$/;
            return regex.test(str) && str.length === length;
        }

        const randomAlphanumeric = generateRandomAlphanumeric(5);
        console.log("Generated String :" , randomAlphanumeric);


        await this.page.getByLabel('Code: *').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('Code: *').fill(randomAlphanumeric);
        //Validating the generated 5-digit alphanumeric string
        if(isValidAlphanumeric(randomAlphanumeric,5)){
            console.log("The generated string is valid.");
        }else {
            console.log("The generated string is invalid.");
        }
     
        
        await this.page.getByLabel('Cost: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Cost: *').fill(CreateUpdateEquipmentMPage.Cost);
        const MyCost = await this.page.getByLabel('Cost: *').innerHTML();
        console.log(await(MyCost));
        expect(CreateUpdateEquipmentMPage.Cost).toContain("$5.320")

        await this.page.getByLabel('Description: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Description: *').fill(CreateUpdateEquipmentMPage.Description);
        const MyDescription = await this.page.getByLabel('Description: *').innerHTML();
        console.log(await(MyDescription));
        expect(CreateUpdateEquipmentMPage.Description).toContain("Testing")

        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();


        //Updating the Created record
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(randomAlphanumeric);
        await this.page.getByRole('gridcell', { name: randomAlphanumeric }).click();

        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Edit' }).click();

        function generateStrongAlphanumeric(length: number): string {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const digits = '0123456789';
        
            let result = '';
            while (true) {
                result = '';
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length));
                }
        
                // Check if it contains at least one letter and one digit
                if (/[A-Za-z]/.test(result) && /\d/.test(result)) {
                    return result;
                }
            }
        }

        const randomAlphanumeric1 = generateStrongAlphanumeric(6);
        console.log("Generated 6-digit alphanumeric:", randomAlphanumeric1);

        await this.page.getByLabel('Code: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Code: *').fill(randomAlphanumeric1);

        await this.page.getByLabel('Cost: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Cost: *').fill(CreateUpdateEquipmentMPage.UpdatedCost);
        // const UpdatedCost = await this.page.getByLabel('Cost: *').innerHTML();
        // console.log(await(UpdatedCost));
        // expect(CreateUpdateEquipmentMPage.UpdatedCost).toContain("$6.320")

        await this.page.getByLabel('Description: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Description: *').fill(CreateUpdateEquipmentMPage.UpdatedDescription);
        const UpdatedDescription = await this.page.getByLabel('Description: *').innerHTML();
        console.log(await (UpdatedDescription));
        expect(CreateUpdateEquipmentMPage.UpdatedDescription).toContain("Testing123")
        await this.page.waitForTimeout(1000);

        await this.page.getByRole('button', { name: 'Save' }).click();
        // await this.page.getByText('Record Saved Succesfully').click();


        //Deleting record
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menu').getByText('Contains').click();

        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(randomAlphanumeric1);
        await this.page.getByRole('gridcell', { name: randomAlphanumeric1 }).click();
        await this.page.getByRole('link', { name: 'Delete' }).click();
        await this.page.getByLabel('Yes').click();
    }
}