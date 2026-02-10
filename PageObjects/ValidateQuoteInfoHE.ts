import { Page,expect } from "@playwright/test";
import { QuoteInfoHE } from "../TestData/QuoteInfoHE";


export class QuoteInfoHardErrorsPage{
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async performQuoteInfoHardErrors()

    {
      await this.page.getByText('Customers').click();
      await this.page.getByPlaceholder('Search...').click();
      await this.page.getByPlaceholder('Search...').fill('TestCustomer');
      await this.page.getByText('TestCustomer').click();
      await this.page.getByText('Quote InfoQuote Info').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Add a row').click();
      await this.page.getByLabel('Save').click();

      //Product Code HE
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
      await this.page.getByText(QuoteInfoHE.ProductCode).click();
      console.log(`Product Code Text Box Hard Error Message: ${QuoteInfoHE.ProductCode}`);

      //Price HE
      await this.page.getByLabel('Price: *').click();
      await this.page.getByText(QuoteInfoHE.Price).click();
      console.log(`Price Text Box Hard Error Message: ${QuoteInfoHE.Price}`);

      //Total Commission HE
      await this.page.getByLabel('Total Commission %: *').click();
      await this.page.getByText(QuoteInfoHE.TotalCommission).click();
      console.log(`Total Commission Hard Error Message: ${QuoteInfoHE.TotalCommission}`);

      //Unit Of Issue HE
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByText(QuoteInfoHE.UnitOfIssue).click();
      console.log(`Unit Of Issue Hard Error Message: ${QuoteInfoHE.UnitOfIssue}`);

      //Quote Date HE
      await this.page.getByLabel('Quote Date: *').click();
      await this.page.getByText(QuoteInfoHE.QuoteDate).click();
      console.log(`Quote Date Hard Error Message: ${QuoteInfoHE.QuoteDate}`);

      //Commission Method
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
      await this.page.getByText(QuoteInfoHE.CommissionMethod).click();
      console.log(`Commission Method Hard Error: ${QuoteInfoHE.CommissionMethod}`);
    }
  
  };