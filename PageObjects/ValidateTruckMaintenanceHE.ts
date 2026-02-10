import { expect, Page } from '@playwright/test';
import { TruckMaintenanceHE } from '../TestData/TruckMaintenanceHE';


  export class TruckMaintenaceHardErrorsPage{
    public page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    async performTruckPageHardErrors() {

 //Select Seetings Icon
  await this.page.getByLabel('Settings').locator('div').nth(2).click();

  //Selecting LookUp Tables option
  await this.page.getByText('Lookup Tables').click();
  
 //Truck Maintenance this.page
  await this.page.getByRole('tab', { name: 'Truck Maintenance' }).click();

  await this.page.waitForTimeout(1000);
  await this.page.getByRole('button', { name: 'Add a row' }).click();
  await this.page.waitForTimeout(1000);
  await this.page.getByRole('button', { name: 'Save' }).click();


  await this.page.getByLabel('Truck: *').click();
  await this.page.getByText(TruckMaintenanceHE.Truck).click();
  const TruckHErrorMessage = this.page.getByText(TruckMaintenanceHE.Truck).innerHTML();
  console.log(await(TruckHErrorMessage));
  expect(TruckMaintenanceHE.Truck).toContain("Truck is required");

  
    }

  };