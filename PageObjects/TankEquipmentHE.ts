import { Page, expect } from "@playwright/test";
import { TankEquipmentHardErrors } from "../TestData/TankEquipmentHE";



export class TankEquipmentHE{
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }

    async performTankEquipmentHE() {

        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').click();
        await this.page.getByPlaceholder('Search...').fill(TankEquipmentHardErrors.Customer_ID);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: TankEquipmentHardErrors.Customer_ID, exact: true }).click();
        

        //Navigating to the tank equipment tab
        await this.page.waitForTimeout(1000);
        await this.page.getByText('TanksTanks').click();
        await this.page.getByRole('gridcell', { name: TankEquipmentHardErrors.Tank_Number }).click();
        const Tank_Number = this.page.getByRole('gridcell', { name: TankEquipmentHardErrors.Tank_Number }).innerText();
        console.log(await Tank_Number)
        await this.page.getByText('EquipmentEquipment').click();
        await this.page.waitForTimeout(3000);
       
        //Validating the Hard Errors
        await this.page.getByLabel('Add a row').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Save' }).click();

        //Equipment Code Hard Error
        await this.page.getByPlaceholder('Select a value...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Equipment is required').click();
        const Equipment_Code = this.page.getByText('Equipment is required').innerText();
        console.log(await Equipment_Code);

        //Quantity Hard Error
        await this.page.getByLabel('Quantity', { exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Quantity is required').click();
        const Quantity = this.page.getByText('Quantity is required').innerText();
        console.log(await Quantity);

        //Basis Date Hard Error
        await this.page.getByLabel('Basis Date', { exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Basis Date is required').click();
        const B_Date = this.page.getByText('Basis Date is required').innerText();
        console.log(await B_Date);
      };
    }
