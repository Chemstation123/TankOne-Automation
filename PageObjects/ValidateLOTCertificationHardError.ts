import { Page,expect } from "@playwright/test";
import { LOTCertification } from "../TestData/LOTCertificationHE";


export class LOTCertificationPage {
    private page: Page;
  
    constructor(page: Page){
      this.page= page;
    }
  
    async performLOTCertification(){
  
    //Lot Certification page
    await this.page.getByText('Lot Certification').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('plus').click();
    await this.page.getByLabel('Save').click();
  
    // Manufacture Date & Time Hard Error
    await this.page.getByLabel('Manufacture Date & Time: *').click();
    await this.page.getByText(LOTCertification.ManufactureDateTime).click();
    const ManufactureDate = this.page.getByText(LOTCertification.ManufactureDateTime).innerHTML();
    console.log(await(ManufactureDate));
    expect(LOTCertification.ManufactureDateTime).toContain("Manufacture Date & Time is required");

     // Quantity Hard Error    
    await this.page.locator('dx-number-box').getByRole('spinbutton').click();
    await this.page.locator('dx-number-box').getByRole('spinbutton').fill('');
    await this.page.locator('label').filter({ hasText: 'Quantity: *' }).click();
    await this.page.locator('dx-number-box').getByRole('spinbutton').click();
    await this.page.getByText(LOTCertification.Quantity).click();
    const Quantity = this.page.getByText(LOTCertification.Quantity).innerHTML();
    console.log(await(Quantity));
    expect(LOTCertification.Quantity).toContain("Quantity is required");
   
    // pH Value Range Hard Error
    await this.page.getByLabel('pH Value Range: *').click();
    await this.page.getByText(LOTCertification.pHValueRange).click();
    const pHValueRange = this.page.getByText(LOTCertification.pHValueRange).innerHTML();
    console.log(await(pHValueRange));
    expect(LOTCertification.pHValueRange).toContain("pH Value is required");
  
    // Specific Gravity Range Hard Error
    await this.page.getByLabel('Specific Gravity Range: *').click();
    // await this.page.waitForTimeout(1000);
    await this.page.getByText(LOTCertification.SpecificGravityRange).click();
    const SpecificGravityRange = this.page.getByText(LOTCertification.SpecificGravityRange).innerHTML();
    console.log(await(SpecificGravityRange));
    expect(LOTCertification.SpecificGravityRange).toContain("Specific Gravity is required");
  
    // Certified By Hard Error
    await this.page.getByLabel('Enter Lot Certification').getByPlaceholder('Select...').click();
    await this.page.getByText(LOTCertification.CertifiedBy).click();
    const EnterLoTCertification = this.page.getByText(LOTCertification.CertifiedBy).innerHTML();
    console.log(await(EnterLoTCertification));
    expect(LOTCertification.CertifiedBy).toContain("Certified By is required");
    
  
  
    }
  
  };