import { Page,expect } from "@playwright/test";
import { ToolboxWorksheets } from "../TestData/ValidateToolBoxWorksheetsJData";


export class ToolBoxWorksheetsPage {
    private page : Page;
  
  
    constructor(page: Page) {
      this.page = page;
    }
  
  
    async performValidateToolboxWorksheets() {
  
    
    await this.page.getByText('Toolbox').click();
    await this.page.waitForTimeout(2000);
  
  
    await this.page.getByText(ToolboxWorksheets.WorkSheet1).click();
    await this.page.getByLabel('Submit').click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.getByLabel('Cancel').click();
  
  
    await this.page.getByText(ToolboxWorksheets.WorkSheet2).click();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.waitForTimeout(5000);
    await this.page.getByRole('button', { name: 'Close' }).click();
    await this.page.getByLabel('Cancel').click();
  };
  
  }