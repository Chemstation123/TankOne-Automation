import { Page, expect } from "@playwright/test";
import { CustComments } from "../TestData/CustomerCommentsHE";


export class CustomerCommentsHardErrorsPage{
    private page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async performComments() {
  
    //Customer Page
    await this.page.getByText('Customers').click();
  
    //Selecting any Random Customer
    await this.page.getByPlaceholder('Search...').click();
    await this.page.getByPlaceholder('Search...').fill(CustComments.CustomerNumber);
  
    await this.page.getByRole('gridcell', { name: CustComments.CustomerNumber }).click();
    
    await this.page.getByRole('tab', { name: 'Comments' }).click();
  
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('add', { exact: true }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Save' }).click();
  
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Editor content').getByRole('paragraph').click();
  
    await this.page.waitForTimeout(1000);
    await this.page.getByText(CustComments.Paragraph).click();
    const myParagraph = this.page.getByText(CustComments.Paragraph).innerHTML();
    console.log(await(myParagraph));
    expect(CustComments.Paragraph).toContain("A Comment is required");
  
  
  
    }
  
  };