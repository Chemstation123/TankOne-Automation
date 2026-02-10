import { Page, expect } from "@playwright/test";
import { EquipmentHE } from "../TestData/EquipmentMaintenanceHE";


export class EquipmentHardErrorsPage{
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
    
    async performEquipmentHE() {
  
      //Select Seetings Icon
      await this.page.getByLabel('Settings').locator('div').nth(2).click();
  
      //Selecting LookUp Tables option
      await this.page.getByText('Lookup Tables').click();
      await this.page.getByText('Equipment MaintenanceEquipment Maintenance').click();
  
    
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('button', { name: 'Add a row' }).click();
  
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByLabel('Code: *').click();
      await this.page.waitForTimeout(1000);
      // await this.page.getByText(EquipmentHE.Code).click();
      // const myCode = this.page.getByText(EquipmentHE.Code).innerHTML();
      // await this.page.waitForTimeout(1000);
      // console.log(await(myCode));
      // expect(EquipmentHE.Code).toContain("Code is requried")
  
  
      await this.page.getByLabel('Cost: *').click();
      // await this.page.getByText(EquipmentHE.Cost).click();
      // await this.page.waitForTimeout(1000);
      // const myCost = this.page.getByText(EquipmentHE.Cost).innerHTML();
      // await this.page.waitForTimeout(1000);
      // console.log(await(myCost));
      // expect(EquipmentHE.Cost).toContain("Cost is requried")
  
      await this.page.getByLabel('Description: *').click();
      // await this.page.getByText(EquipmentHE.Description).click();
      // await this.page.waitForTimeout(1000);
      // const myDescrption = this.page.getByText(EquipmentHE.Description).innerHTML();
      // await this.page.waitForTimeout(1000);
      // console.log(await(myDescrption));
      // expect(EquipmentHE.Description).toContain("Description is requried")
  
  
  
    }
  };