import { Page, expect } from "@playwright/test";
import { ValidateDDriverDataC1 } from "../TestData_RC/ValidateDefaultDriverJData_RC";


export class ValidateDefaultDriverC1 {
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performValidateDefaultDriverC1()
    {
        await this.page.getByText('Settings').click();
        await this.page.getByText('Lookup Tables').click();
        await this.page.getByText('Truck MaintenanceTruck').click();
        await this.page.getByRole('gridcell', { name: ValidateDDriverDataC1.TruckNumber }).click();
        await this.page.getByRole('gridcell', { name: ValidateDDriverDataC1.Driver }).click();

        //stroing the values of Truck Number and Driver
        const TruckNumber = await this.page.getByRole('gridcell', { name: ValidateDDriverDataC1.TruckNumber }).innerText();
        console.log(TruckNumber);
        
        const Driver = await this.page.getByRole('gridcell', { name: ValidateDDriverDataC1.Driver }).innerText();
        console.log(Driver);

        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.getByLabel('Add To Schedule').click();
        await this.page.getByText('Add Tank').click();
        await this.page.getByPlaceholder('Select a Customer...').click();
        await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]"); 
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(ValidateDDriverDataC1.CustomerNumber);
        console.log(ValidateDDriverDataC1.CustomerNumber);
        await this.page.getByRole('gridcell', { name: ValidateDDriverDataC1.CustomerNumber }).click();
        await this.page.waitForTimeout(1500);
        await this.page.getByPlaceholder('Select a Department...').click();
        await this.page.getByRole('gridcell', { name: 'Testing' }).click();
        await this.page.waitForTimeout(1500);
        await this.page.getByPlaceholder('Select Tanks...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
        await this.page.getByLabel('OK', { exact: true }).click();

        //Schedule Date & Picking Today's Date
        // const today : Date = new Date();
        // //Extract year, month, and day
        // const year: number = today.getFullYear();
        // const month: number = today.getMonth() + 1;
        // const day : number = today.getDate();
  
        // //Formatting of the Date as mm-dd-yyyy
        // const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;
  
        //Date
        const formattedDate = new Date().toLocaleDateString('en-US');
        console.log(formattedDate);

        await this.page.getByLabel('Scheduled Date:').click();
        await this.page.getByLabel('Scheduled Date:').fill(formattedDate);
        const date = this.page.getByLabel('Scheduled Date:').innerText();
        console.log(await (formattedDate));
        console.log(await(date));
        expect((await (date)).includes(formattedDate));    

        //Truck Validation
        await this.page.getByRole('combobox', { name: 'Driver:' }).click();
        await this.page.locator('div').filter({ hasText: 'Dalton Beachy' }).first();
        await this.page.getByRole('combobox', { name: 'Truck Id:' }).click();
        await this.page.getByText(ValidateDDriverDataC1.TruckNumber).click();

        const ValidateTruckNumber = await this.page.getByRole('combobox', { name: 'Truck Id:' }).inputValue();
        console.log(ValidateTruckNumber);

        const ValidateDriverName = await this.page.locator("(//input[@aria-required='false'])[2]").inputValue();
        console.log(await(ValidateDriverName));

        const ValidationValue1 = await ValidateTruckNumber
        const ValidationValue2 = await ValidateDriverName

        //Validating the values
        if (TruckNumber === ValidateTruckNumber && Driver === ValidateDriverName) {
            console.log("Both in Truck Maintenance and Delivery and Schedule page Default Driver Fuctionality is working fine");

        } else{
            console.error("Default Driver Fuctionality is not working");
        }

    }
}