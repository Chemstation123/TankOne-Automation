import { Page, expect } from "@playwright/test";
import { DeliverySanitizerProductDifferentState } from "../TestData_Dev/DeliverySchedulingSanitizerProductsDifferentStateJData";



export class ValidateDeliverySchedulingSanitizerProductsPageDifferentState{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performDeliverySchedulingSanitizerProducts()
    {
        //Checking the Sanitizer product in customer tab
          await this.page.getByText('Customers').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByPlaceholder('Search...').click();
          await this.page.getByPlaceholder('Search...').fill(DeliverySanitizerProductDifferentState.CustomerID);
          await this.page.waitForTimeout(1000);
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.CustomerName }).click();
          await this.page.waitForTimeout(1000);
          await this.page.getByText('TanksTanks').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.ProductID }).click();
          await this.page.waitForTimeout(1000);
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.ProductID1 }).click();
          await this.page.waitForTimeout(1000);
          await this.page.getByText('Products').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByText('Products List').click();
          await this.page.getByPlaceholder('Search...').click();
          await this.page.getByPlaceholder('Search...').fill(DeliverySanitizerProductDifferentState.ProductID);
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.ProductID, exact: true }).locator('span').click();
          await this.page.getByLabel('View Full Product Detail').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByText('MiscellaneousMiscellaneous').click();
          await this.page.getByLabel('EPA Number:').click();
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.StateID }).click();
          await this.page.waitForTimeout(1000);
          await this.page.getByText('Deliveries & Scheduling').click();
          await this.page.getByLabel('Add To Schedule').click();
          await this.page.getByText('Add Tank').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByPlaceholder('Select a Customer...').click();
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.CustomerID }).click();
          await this.page.getByPlaceholder('Select a Department...').click();
          await this.page.getByRole('gridcell', { name: DeliverySanitizerProductDifferentState.Department }).click();
          await this.page.getByPlaceholder('Select Tanks...').click();
          await this.page.getByRole('row', { name: 'Select row 6218-1 50286 10 G' }).getByLabel('Select row').click();
          await this.page.getByText('This tank is an SMSP tank and').click();
          const errorMessage = await this.page.getByText('This tank is an SMSP tank and').innerHTML();
          console.log(errorMessage);
    }
}