import { Page,expect } from "@playwright/test";
import { StrategicCustComments } from "../TestData/StartegicCustCommentsJData";
import { NewStrategicCustomerInfoPage } from "./CreatingNewStrategicCustomerPage";


export class StrategicCustomerCommentsPage {
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
  
  
    async performStrategicCustComments(){
    //Selecting customer 
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: 'Customer List' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByPlaceholder('Search...').click();
    await this.page.getByPlaceholder('Search...').fill(NewStrategicCustomerInfoPage.MyCustomerNum);
    await this.page.getByRole('gridcell', { name: NewStrategicCustomerInfoPage.MyCustomerNum }).click();
  
    //Comments Section
    await this.page.waitForTimeout(1000);
    await this.page.getByText('CommentsComments').first().click();
  
    //Adding a New Comment
    await this.page.getByLabel('add', { exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).fill(StrategicCustComments.Paragraph)
    const CurrentPara = this.page.getByRole('textbox', { name: 'Editor content' }).innerText();
    console.log(await(CurrentPara));
    expect((await CurrentPara).includes(StrategicCustComments.Paragraph)).toBe(true);
  
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.getByText(StrategicCustComments.RecordSaved).click();
  
    await this.page.getByLabel('add', { exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).click();
    await this.page.getByRole('textbox', { name: 'Editor content' }).fill(StrategicCustComments.Paragraph1);
    const Para1 = this.page.getByRole('textbox', { name: 'Editor content' }).innerText();
    console.log(await(Para1));  
    await this.page.getByRole('button', { name: 'Save' }).click();

  
  
  
  
  
  
    }
  
  };