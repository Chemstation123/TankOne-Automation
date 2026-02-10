import { Page,expect } from "@playwright/test";
import { TankPOTax } from "../TestData/TankPOTaxJData";


export class TankPOTaxPage {
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async performTankPOTax() {
    await this.page.getByText('Customers').click();
  
    await this.page.getByPlaceholder('Search...').click();
    await this.page.getByPlaceholder('Search...').fill(TankPOTax.user);
  
  
  
    await this.page.getByRole('gridcell', { name: TankPOTax.user }).click();
    await this.page.getByRole('tab', { name: 'Tanks' }).click();
    await this.page.getByRole('gridcell', { name: '60021-1', exact: true }).click();
    await this.page.getByText('PO / TaxPO / Tax').click();
    await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
    await this.page.getByText(TankPOTax.dropdown).click();
  
  
    await this.page.getByLabel('PO #:').click();
    await this.page.getByLabel('PO #:').fill(TankPOTax.PO);
    const myPo = this.page.getByLabel('PO #:').innerHTML()
    console.log(await(myPo));
    expect(TankPOTax.PO).toContain("123456");
  
  
    await this.page.getByLabel('Release Number:').click();
    await this.page.getByLabel('Release Number:').fill(TankPOTax.ReleaseNumber);
    const myReleaseNumber = this.page.getByLabel('Release Number:').innerHTML()
    console.log(await(myReleaseNumber));
    expect(TankPOTax.ReleaseNumber).toContain("526341");
  
  
    await this.page.getByLabel('Requisition Number:').click();
    await this.page.getByLabel('Requisition Number:').fill(TankPOTax.RequisitionNumber);
    const myRequisitionNumber = this.page.getByLabel('Requisition Number:').innerHTML()
    console.log(await(myRequisitionNumber));
    expect(TankPOTax.RequisitionNumber).toContain("123456");
  
  
    await this.page.getByLabel('Tax Rate:').click();
    await this.page.getByLabel('Tax Rate:').fill(TankPOTax.TaxRate);
    const myTaxRate = this.page.getByLabel('Tax Rate:').innerHTML()
    console.log(await(myTaxRate));
    expect(TankPOTax.TaxRate).toContain("80.00%");
  
  
    await this.page.getByLabel('Tox Number:').click();
    await this.page.getByLabel('Tox Number:').fill(TankPOTax.TaxNumber);
    const myToxNumber = this.page.getByLabel('Tox Number:').innerHTML()
    console.log(await(myToxNumber));
    expect(TankPOTax.TaxNumber).toContain("415236");
  
  
    await this.page.getByLabel('Save').click();
    await this.page.waitForTimeout(2000);
    //await this.page.getByText(TankPOTax.RecordMessage).click();
   
  
  
    }
  
  };