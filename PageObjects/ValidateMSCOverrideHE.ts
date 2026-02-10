import { Page,expect } from "@playwright/test";
import { MSCFactorHE } from "../TestData/MSCOverrideHE";


export class MSCOverrideHardErrorsPage{
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
  
    async performMSCOverrideHE(){
  
    //Product list page
    await this.page.getByText('Products').click();
    await this.page.getByText('Products List').click();
  
  
    await this.page.getByRole('gridcell', { name: MSCFactorHE.Product, exact: true }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel('View Full Product Detail').click();
  
    await this.page.waitForTimeout(5000);
    //await this.page.getByLabel('MSC Override').click();
    //await this.page.getByLabel('MSC Override').click();
    await this.page.locator("//div[@class='dx-button-content']//span[1]").click();
    await this.page.waitForTimeout(5000);
    await this.page.getByLabel('Save').click();
  
    
    await this.page.getByLabel('MSC Factor: *').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText(MSCFactorHE.MSC_Factor).click();
    const MSCFactor = this.page.getByText(MSCFactorHE.MSC_Factor).innerHTML();
    console.log(await(MSCFactor));
    expect(MSCFactorHE.MSC_Factor).toContain("MSC Factor Required.");
  
  
    await this.page.getByLabel('Minimum MSC: *').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText(MSCFactorHE.Minimum_MSC).click();
    const MiniumMSC = this.page.getByText(MSCFactorHE.Minimum_MSC).innerHTML();
    console.log(await(MiniumMSC));
    expect(MSCFactorHE.Minimum_MSC).toContain("Minimum MSC Required.");
  
  
    await this.page.getByLabel('Maximum Load: *').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText(MSCFactorHE.Maximum_Load).click();
    const MaximumLoad = this.page.getByText(MSCFactorHE.Maximum_Load).innerHTML();
    console.log(await(MaximumLoad));
    expect(MSCFactorHE.Maximum_Load).toContain("Maximum Load Required.");
  
  
  
    }
  
  
  };
  