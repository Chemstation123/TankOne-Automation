import { Page,expect } from "@playwright/test";
import { NewTankHE } from "../TestData/NewTankHE";


export class NewTankHardErrorsPage{
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
  
    async performNewTankHE() {
  
    //Customer page
    await this.page.getByText('Customers').click();
  
    //Select any random Customer
    await this.page.getByPlaceholder('Search...').click();
    await this.page.getByPlaceholder('Search...').fill('60021')
    await this.page.getByRole('gridcell', { name: '60021' }).click();
  
    //Go to Tank sub-tab
    await this.page.getByRole('tab', { name: 'Tanks' }).click();
  
    //Adding a New Tank
    await this.page.getByLabel('New Tank').click();
  
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Location Name: *').click();
    await this.page.getByLabel('Location Name: *').fill('');
  
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
    await this.page.getByRole('textbox', { name: 'Address 1: *' }).fill('');
  
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'City: *' }).click();
    await this.page.getByRole('textbox', { name: 'City: *' }).fill('');
  
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
    await this.page.getByRole('textbox', { name: 'Zip Code: *' }).fill('');
  
  
    await this.page.getByLabel('Save').click();
  
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Tank Number: *').click();
    await this.page.getByText(NewTankHE.TankNumber).click();
    const tankNumber = this.page.getByText(NewTankHE.TankNumber).innerHTML();
    console.log(await(tankNumber));
    expect(NewTankHE.TankNumber).toContain("Tank Number is required");
  
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Est. Fills / Year: *').click();
    await this.page.getByText(NewTankHE.Est_Fills_Year).click();
    const estFills = this.page.getByText(NewTankHE.Est_Fills_Year).innerHTML();
    console.log(await(estFills));
    expect(NewTankHE.Est_Fills_Year).toContain("Estimated Fills Per Year is");
  
  
    await this.page.waitForTimeout(1000);
    await this.page.locator('dx-select-box').filter({ hasText: 'Product / Quote is required' }).getByPlaceholder('Select...').click();
    await this.page.getByText(NewTankHE.SelectedProduct_Quote).click();
    const productQuote = this.page.getByText(NewTankHE.SelectedProduct_Quote).innerHTML();
    console.log(await(productQuote));
    expect(NewTankHE.SelectedProduct_Quote).toContain("Product / Quote is required");
  
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Location Name: *').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText(NewTankHE.LocationName).click();
    const locationName = this.page.getByText(NewTankHE.LocationName).innerHTML();
    console.log(await(locationName));
    expect(NewTankHE.LocationName).toContain("Location Name is required");
  
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
    await this.page.getByText(NewTankHE.Address1).click();
    const Address1 = this.page.getByText(NewTankHE.Address1).innerHTML();
    console.log(await(Address1));
    expect(NewTankHE.Address1).toContain("Address is required");
  
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'City: *' }).click();
    await this.page.getByText(NewTankHE.City).click();
    const City = this.page.getByText(NewTankHE.City).innerHTML();
    console.log(await(City));
    expect(NewTankHE.City).toContain("City is required");
  
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
    await this.page.getByText(NewTankHE.ZipCode).click();
    const ZipCode = this.page.getByText(NewTankHE.ZipCode).innerHTML();
    console.log(await(ZipCode));
    expect(NewTankHE.ZipCode).toContain("Zip is required");
  
  
    }
  
  
  };