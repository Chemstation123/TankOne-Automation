import { Page, expect } from "@playwright/test";
import { UpdateTankEquipmentTab } from "../TestData/UpdateDeleteTankEquipmentJData";



export class UpdateDeleteTankEquipmentPage{
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }

    async performUpdateDeleteTankEquipmentPage(){

        
        const today : Date = new Date();
        //Extract year, month, and day
        const year: number = today.getFullYear();
        const month: number = today.getMonth() + 1;
        const day : number = today.getDate();
    
        //Formatting of the Date as mm-dd-yyyy
        const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;

        //Searching for the user
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').fill(UpdateTankEquipmentTab.Customer_ID);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: UpdateTankEquipmentTab.Customer_ID, exact: true }).click();

        //Navigating to the Tanks page
        await this.page.waitForTimeout(1000);
        await this.page.getByText('TanksTanks').click();
        await this.page.waitForTimeout(1000);

        await this.page.getByRole('gridcell', { name: UpdateTankEquipmentTab.Tank_NUmber }).click();
        const Tank_Number = this.page.getByRole('gridcell', { name: UpdateTankEquipmentTab.Tank_NUmber }).innerText();
        console.log(await Tank_Number);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('EquipmentEquipment').click();

        //Adding a new Equipment to the Tank
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Add a row').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Select a value...').click();
        await this.page.waitForTimeout(1000);
        await this.page.locator("//td[normalize-space()='031631']").click();
        await this.page.waitForTimeout(1000);
       
        
        await this.page.getByLabel('Data grid with 0 rows and 6').getByRole('gridcell', { name: 'Tank, 625 gal' });
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Quantity', { exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Quantity', { exact: true }).fill('4');
        await this.page.waitForTimeout(1000);
        // await this.page.getByLabel('Basis Date', { exact: true }).click();
        // await this.page.getByLabel('Basis Date', { exact: true }).click();
        // await this.page.waitForTimeout(1000);
        // await this.page.getByRole('gridcell', { name: 'Column Basis Date Select' }).getByLabel('Select').click();
        // await this.page.waitForTimeout(1000);
        // await this.page.getByLabel('Wednesday, September 11,').getByText('11').click();
        await this.page.getByLabel('Basis Date', { exact: true }).click();
        await this.page.getByLabel('Basis Date', { exact: true }).fill(formattedDate);
        console.log(formattedDate)
        await this.page.waitForTimeout(1000);

        // const Equipment_Code = this.page.getByRole('gridcell', { name: UpdateTankEquipmentTab.Equipment_Code }).innerText();
        // console.log(await Equipment_Code);


        await this.page.getByRole('link', { name: 'Save' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Record Saved Succesfully').click();

        //Updating the record
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Edit' }).click();

        await this.page.waitForTimeout(2000);
        await this.page.locator('dx-drop-down-box > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-clear-button-area > .dx-icon').click();
        await this.page.getByPlaceholder('Select a value...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: UpdateTankEquipmentTab.Updated_Equipment_Code }).click();
        await this.page.getByRole('gridcell', { name: 'Plug, Steel, 2"' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Quantity', { exact: true }).click();
        await this.page.getByLabel('Quantity', { exact: true }).fill('6');
        await this.page.waitForTimeout(1000);



        await this.page.getByLabel('Basis Date', { exact: true }).click();
        await this.page.getByLabel('Basis Date', { exact: true }).fill(formattedDate);
        console.log(formattedDate)
        
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: '$3.00' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Save' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Record Saved Succesfully').click();

        //Deleting the record
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Delete' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Yes').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Record Saved Succesfully').click();

        
    }
}
