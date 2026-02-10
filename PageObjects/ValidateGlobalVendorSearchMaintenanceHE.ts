import { expect, Page } from '@playwright/test';
import { GlobalVendorPageHE } from '../TestData/GlobalVendorMaintenanceHE';


export class GlobalVendorHardErrorsPage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    async performGlobalVendorHE() {

 //Select Seetings Icon
  await this.page.getByLabel('Settings').locator('div').nth(2).click();

  //Selecting LookUp Tables option
  await this.page.getByText('Lookup Tables').click();
  await this.page.getByText('Global Vendor MaintenanceGlobal Vendor Maintenance').click();
  await this.page.waitForTimeout(3000);

  //Adding a new row
  await this.page.getByRole('button', { name: 'Add a row' }).click();
  await this.page.waitForTimeout(1000);
  await this.page.getByLabel('Save').click();
  await this.page.waitForTimeout(3000);

  
  await this.page.getByLabel('Vendor Code: *').click();
  //await page.getByLabel('Vendor Code: *').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(GlobalVendorPageHE.VendorCode).click();
  const VendorCodeError = this.page.getByText(GlobalVendorPageHE.VendorCode).innerHTML();
  console.log(await(VendorCodeError));
  expect(GlobalVendorPageHE.VendorCode).toContain("Vendor Code Required.")

 
  await this.page.getByLabel('Vendor Name: *').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(GlobalVendorPageHE.VendorName).click();
  const VendorNameError = this.page.getByText(GlobalVendorPageHE.VendorName).innerHTML();
  console.log(await(VendorNameError));
  expect(GlobalVendorPageHE.VendorName).toContain("Vendor Name Required.")


  }

};