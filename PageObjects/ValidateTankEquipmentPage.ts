import { Page,expect } from "@playwright/test";
import { TankEquipment } from "../TestData/TankEquipmentJData";


export class TankEquipmentPage {
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
  
    async perfomTankEquipement() {
  
  
  //   await this.page.getByText('Customers').click();
  //   await this.page.getByPlaceholder('Search...').click();
  //   await this.page.getByPlaceholder('Search...').fill('miller');
  //   await this.page.getByText('MILLER', { exact: true }).click();
  //   await this.page.getByText('EquipmentEquipment').click();
  
    
    await this.page.getByText('Customers').click();
    await this.page.getByRole('gridcell', { name: '60021' }).click();
    await this.page.getByRole('tab', { name: 'Tanks' }).click();
    await this.page.getByRole('gridcell', { name: '60021-1', exact: true }).click();
    await this.page.getByText('EquipmentEquipment').click();
  
  
    // //Adding a new Equipment 
    // await this.page.waitForTimeout(2000);
    // await this.page.getByLabel('Add a row').click();
  
    // //Equipemnt Code
    // await this.page.waitForTimeout(1000);
    // await this.page.getByRole('gridcell', { name: 'Select... Select' }).getByLabel('Select').click();
    // await this.page.getByText(TankEquipment.EquipmentCode).click();
  
    // //Description
    // await this.page.getByRole('gridcell', { name: 'RED$6.50 1/2" to 3/4" Reducer' }).click();
    // //await this.page.getByText('RED$6.50 1/2" to 3/4" Reducer').click();
  
    // //Quantity
    // await this.page.getByLabel('Quantity', { exact: true }).click();
    // await this.page.getByLabel('Quantity', { exact: true }).fill(TankEquipment.Quantity);
    // const myQuantity = this.page.getByLabel('Quantity', { exact: true }).innerHTML();
    // await this.page.waitForTimeout(1000);
    // console.log(await (myQuantity));
    // expect(TankEquipment.Quantity).toContain("5");
  
    // //Basis Date
    // await this.page.getByRole('gridcell', { name: 'Column Basis Date Select' }).getByLabel('Select').click();
    // await this.page.getByText('7', { exact: true }).first().click();
    
  
    // //Cost
    // await this.page.getByRole('gridcell', { name: '$' }).click();
  
    // //Total Cost
    // await this.page.locator('#dx-91ce9a09-a8cd-16ea-df6d-6d1c82b12af6 > tbody > tr > td:nth-child(6)').first().click();
  
    // //Saving the Equipment
    // await this.page.getByRole('link', { name: 'Save' }).click();
    // await this.page.getByText(TankEquipment.RecordMessage).click();
  
  
    // }
  
  
    await this.page.getByText('EquipmentEquipment').click();
        //await this.page.locator('#dx-4d8c518c-62c5-af52-9548-ac16126f67a7 > tbody > tr:nth-child(2) > .dx-command-edit').click();
        await this.page.waitForTimeout(1000); 
        // await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.getByLabel('Add a row').click();
        await this.page.waitForTimeout(1000); 
  
        // await this.page.getByPlaceholder('Select a value...').click();
        await this.page.getByRole('gridcell', { name: 'Select a value... Select' }).getByLabel('Select').click();
        await this.page.waitForTimeout(1000); 
        await this.page.getByLabel('Data grid with 1 rows and 6').getByRole('gridcell', { name: '0223' }).click();
        //await this.page.getByRole('gridcell', { name: '0223' }).click();
  
        await this.page.getByLabel('Quantity', { exact: true }).click();
        await this.page.waitForTimeout(1000); 
        await this.page.getByLabel('Quantity', { exact: true }).fill('5');

        const today : Date = new Date();
      //Extract year, month, and day
      const year: number = today.getFullYear();
      const month: number = today.getMonth() + 1;
      const day : number = today.getDate();
  
      //Formatting of the Date as mm-dd-yyyy
      const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;

      await this.page.getByLabel('Basis Date', { exact: true }).click();
      await this.page.getByLabel('Basis Date', { exact: true }).fill(formattedDate);
      console.log(formattedDate);
  
        // await this.page.getByRole('gridcell', { name: 'Column Basis Date Select' }).getByLabel('Select').click();
        // await this.page.getByRole('gridcell', { name: 'Tuesday, June 25,' }).locator('span').click();
  
        await this.page.getByRole('link', { name: 'Save' }).click();
        // await this.page.getByText('Record Saved Succesfully').click();
        // await this.page.waitForTimeout(1000);
  
  }
  
  };