import { Page, expect } from "@playwright/test";
import { CreateUpdateAccountManager } from "../TestData/CreateUpdateAccountManagerJData"; 
 
export class CreateUpdateAccountManagerPage{
    public page: Page;
 
    constructor(page: Page){
        this.page = page;
    }
  
    async performCreateUpdateAccountManagerPage()
    { 
        //Navigating to Account Manager Tab
        await this.page.getByText('Settings').click();
        await this.page.getByText('Lookup Tables').click();
        await this.page.waitForTimeout(2000);
        
        //Create a New Record
        await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill(CreateUpdateAccountManager.FirstName);
        await this.page.getByLabel('Last Name:').fill(CreateUpdateAccountManager.LastName); 
        await this.page.locator("(//input[@placeholder='Select...'])[3]").click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(`//div[text()='${CreateUpdateAccountManager.LinkedUserAccount}']`).click();
        await this.page.getByRole('button', { name: 'Select' }).nth(4).click();
        const calendarDateValue = new Date().toISOString().split('T')[0].replace(/-/g, '/');
        await this.page.locator(`.dx-calendar-cell[data-value="${calendarDateValue}"]`).first().click();       
        await this.page.waitForTimeout(1000); 
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();
 
        //Edit the created record
        await this.page.locator("(//div[@aria-label='Search box'])[1]").click();
        await this.page.getByText('Contains').click();
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CreateUpdateAccountManager.FirstName);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('row', { name: 'Test Testing' }).getByLabel('Edit').click();
        await this.page.getByLabel('First Name:').click();
        await this.page.getByLabel('First Name:').fill(CreateUpdateAccountManager.UpdatedFirstName);
        await this.page.getByLabel('Last Name:').click();
        await this.page.getByLabel('Last Name:').fill(CreateUpdateAccountManager.UpdatedLastName);
        await this.page.getByLabel('Select').nth(4).click();
        await this.page.locator(`.dx-calendar-cell[data-value="${calendarDateValue}"]`);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();
 
        //Delete the Edited record
        await this.page.locator("(//div[@aria-label='Search box'])[1]").click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: CreateUpdateAccountManager.DeletedFirstName }).click();
        await this.page.getByRole('row', { name: 'TestingPurpose' }).getByLabel('Delete').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Yes').click();
        await this.page.getByText('Record Removed Succesfully').click();
    }
 
 
}