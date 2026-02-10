import { Page, expect } from "@playwright/test";
import { ValidateCommissions } from "../TestData/ValidateSplitCommissionsJData";
import path from "path";

export class ValidateSplitCommisionsPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async performValidateSplitCommissions() 
  
  {
    await this.page.getByText('Customers').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByPlaceholder('Search...').click();
    await this.page.getByPlaceholder('Search...').fill(ValidateCommissions.Customer);
    await this.page.getByText(ValidateCommissions.Customer).click();
    await this.page.getByText('Quote InfoQuote Info').click();
    await this.page.getByRole('gridcell', { name: ValidateCommissions.QuoteID }).click();
    await this.page.getByLabel('Commissions').click();
    await this.page.waitForTimeout(1000);

    const random1 = Math.floor(Math.random() * 51);
    const random2 = Math.floor(Math.random() *(51 - random1));
    const random3 = Math.floor(Math.random() *(51 - random1 - random2));
    const random4 = 100 - (random1 + random2 + random3);
    
    const percentages = [random1, random2, random3, random4];
    console.log(`Generated Percentages: ${percentages.join(", ")}`);


    await this.page.getByLabel('Commissions for Product').getByLabel('dropdownbutton').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByText('Edit Commissions').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Edit').nth(2).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(`${percentages[0]}%`);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(`${percentages[1]}%`);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.waitForTimeout(2000);

    await this.page.getByRole('gridcell', { name: 'Edit   Delete' }).first().click();
    await this.page.getByLabel('Commissions for Product').getByLabel('Close').click();
    await this.page.getByText('Commission Percentage Split(s').click();
    await this.page.getByLabel('Commissions', { exact: true }).click()
    


    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('dropdownbutton').click()
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('option').getByText('Edit Commissions').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Edit' }).nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(`${percentages[2]}%`);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(`${percentages[3]}%`);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText('Record Saved Succesfully').click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('Close').click();
    await this.page.getByText('Commission Percentage Split(s').click();
    await this.page.waitForTimeout(1000);


    await this.page.getByLabel('Commissions', { exact: true }).click();
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('dropdownbutton').click();
    await this.page.getByRole('option').getByText('Edit Commissions').click();
    await this.page.getByRole('link', { name: 'Edit' }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(`${percentages[0]}%`);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(`${percentages[2]}%`);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByRole('gridcell', { name: 'Edit   Delete' }).first().click();
    await this.page.getByRole('link', { name: 'Edit' }).nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(`${percentages[1]}%`);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(`${percentages[3]}%`);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText('Record Saved Succesfully').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('Close').click();
    await this.page.getByText('Commission Percentage Split(s').click();
    await this.page.getByLabel('Commissions', { exact: true }).click();
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('dropdownbutton').click();
    await this.page.getByRole('option').getByText('Edit Commissions').click();
    await this.page.getByRole('link', { name: 'Edit' }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(ValidateCommissions.SplitCommison_ACManager1_FD);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(ValidateCommissions.SplitCommison_ACManager1_SD);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText('Record Saved Succesfully').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Edit' }).nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(ValidateCommissions.SplitCommison_ACManager2_FD);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(ValidateCommissions.SplitCommison_ACManager2_SD);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText('Record Saved Succesfully').click();
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('Close').click(); 
  }
}

