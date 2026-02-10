import { Page,expect } from "@playwright/test";
import { CustComments1 } from "../TestData/CreateCustomerCommentsJData";
import { NewCustomerInfoPage } from "./ValidateCustomerBillingInfo";


export class CustomerCommentsPage {
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
  
  
    async performCustComments(){
  
  
  
  
    //Selecting customer 
    await this.page.waitForTimeout(7000);
    await this.page.locator("//a[contains(text(),'Customer List')]").click();
    await this.page.waitForTimeout(3000);
    // await this.page.getByRole('gridcell', { name: 'New Ace 12368' }).click();
    await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
    await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(NewCustomerInfoPage.MyCustomerNum);
    await this.page.getByRole('gridcell', { name: NewCustomerInfoPage.MyCustomerNum }).click();
    //await this.page.getByPlaceholder('Search...').fill(CustComments1.CustomerNumber)
  
    //Comments Section
    await this.page.waitForTimeout(1000);
    await this.page.getByText('CommentsComments').first().click();
  
    //Adding a New Comment
  
    await this.page.getByLabel('add', { exact: true }).click();
    //await this.page.getByLabel('Editor content').click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).fill(CustComments1.Paragraph)
    const CurrentPara = this.page.getByRole('textbox', { name: 'Editor content' }).innerText();
    console.log(await(CurrentPara));
    expect((await CurrentPara).includes(CustComments1.Paragraph)).toBe(true);
  
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.getByText(CustComments1.RecordSaved).click();
  //   const saveRecordMessage = this.page.getByRole('button', { name: 'Save' }).innerText();
  //   console.log(await(saveRecordMessage));
  //   expect((await saveRecordMessage).includes(CustComments1.RecordSaved)).toBe(true);
  
  
  
    await this.page.getByLabel('add', { exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).fill(CustComments1.Paragraph1);
    const Para1 = this.page.getByRole('textbox', { name: 'Editor content' }).innerText();
    console.log(await(Para1));
    // expect((await Para1).includes(CustComments1.Paragraph1)).toBe(true);
  
    await this.page.getByRole('button', { name: 'Save' }).click();
    // await this.page.getByText(CustComments1.RecordSaved1).click();
  //   const saveRecordMessage1 = this.page.getByRole('button', { name: 'Save' }).innerText();
  //   console.log(await(saveRecordMessage1));
  //   expect((await saveRecordMessage1).includes(CustComments1.RecordSaved1)).toBe(true);
  
  
  
  
  
  
    }
  
  };