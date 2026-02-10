import { Page, expect } from "@playwright/test";
import { OwnersCanEditBasePrices } from "../TestData_Dev/OwnersCanEditBasePricesJData";


function generateRandomDecimal(min = 1, max = 10): string {
  const num = (Math.random() * (max - min) + min);
  return num.toFixed(3); // 3 decimal places
}



export class OwnersCanEditBasePricesPage{
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }

    async performOwnersCanEditBasePrices()
    {
      const randomValue = generateRandomDecimal();

      await this.page.getByText('Products').click();
      await this.page.getByText('Raw Materials').click();
      await this.page.getByRole('gridcell', { name: OwnersCanEditBasePrices.RawMaterialCode }).first().click();
      await this.page.getByLabel('Update Cost').click();
      await this.page.getByRole('spinbutton', { name: 'Tote Cost: *' }).click();
      await this.page.getByRole('spinbutton', { name: 'Tote Cost: *' }).fill(OwnersCanEditBasePrices.ToteCost);
      await this.page.getByRole('spinbutton', { name: 'Drum Cost: *' }).click();
      await this.page.getByRole('spinbutton', { name: 'Drum Cost: *' }).fill(OwnersCanEditBasePrices.DrumCost);
      await this.page.getByRole('spinbutton', { name: 'Pail Cost: *' }).click();
      await this.page.getByRole('spinbutton', { name: 'Pail Cost: *' }).fill(randomValue);
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('spinbutton', { name: 'Tote Cost: *' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByPlaceholder('Search...').click();
      await this.page.getByPlaceholder('Search...').fill(OwnersCanEditBasePrices.RawMaterialCode);
      await this.page.getByRole('gridcell', { name: OwnersCanEditBasePrices.RawMaterialCode }).first().click();
      await this.page.locator('li').filter({ hasText: 'Tote Cost$' }).locator('span').click();

    }
}