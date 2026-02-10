import { Page,expect } from "@playwright/test";
import { BillingInfo } from "../TestData/BillingInfoJData";


export class BillingInfoPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }


    async PerformBillingInfo() {

        //Customer Page
      await this.page.getByText("Customers").click();
    
      //Creating New Customer
      await this.page.getByLabel('New Customer').click();
    
      //New Customer window for data
      //Customer Number 
      const MyCustomerNum = Math.random() + BillingInfo.CustomerNumber;
      await this.page.getByLabel('Customer Number: *').fill(MyCustomerNum);
      await this.page.waitForTimeout(2000);
    
      //Customer Name
      await this.page.locator('div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().click();
      await this.page.locator('div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().fill(BillingInfo.CustomerName);
      await this.page.waitForTimeout(2000);
      //Customer First Name
      await this.page.locator('div:nth-child(2) > div > div > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().click();
      await this.page.locator('div:nth-child(2) > div > div > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().fill(BillingInfo.ContactFirstName);
    
      //Customer Last Name
      await this.page.locator('div:nth-child(2) > div > div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
      await this.page.locator('div:nth-child(2) > div > div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').fill(BillingInfo.ContactLastName);
    
      //Account Manager 
      await this.page.getByLabel('Select').nth(2).click();
      await this.page.getByText(BillingInfo.AccountManager).click();
    
      //Address 1
      await this.page.getByLabel('Billing Address').getByRole('textbox').first().click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').first().fill(BillingInfo.Address1);
    
      //Address 2
      await this.page.getByLabel('Address 2:').click();
      await this.page.getByLabel('Address 2:').fill(BillingInfo.Address2);
    
      //City
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(2).click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(2).fill(BillingInfo.City);
    
      //State
      await this.page.getByLabel('Billing Address').getByLabel('Select').click();
      await this.page.getByText('AL', { exact: true }).click();
    
      //Zip Code
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(3).click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(3).fill(BillingInfo.ZipCode);
      await this.page.getByLabel('Save').click();
    
      //Editing the created Customer 
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('dropdownbutton').click();
      await this.page.getByText('Edit Customer').click();
    
      await this.page.getByLabel('Phone:').click();
      await this.page.getByLabel('Phone:').fill(BillingInfo.Phone);
    
      await this.page.getByLabel('Contact Email:').click();
      await this.page.getByLabel('Contact Email:').fill(BillingInfo.ContactEmail);
    
      await this.page.getByRole('form').getByLabel('Select').nth(3).click();
      await this.page.getByText('Net 10').click();
    
      await this.page.getByLabel('Tax Exempt Number:').click();
      await this.page.getByLabel('Tax Exempt Number:').fill(BillingInfo.TaxExemptNumber);
    
      await this.page.getByRole('form').getByLabel('Select').nth(4).click();
      await this.page.getByText('- Oilseed and Grain Farming').click();
    
      await this.page.getByLabel('Provide SDS:').click();
      await this.page.waitForTimeout(2000);
    
      await this.page.getByLabel('Provide Certificate of').click();
    
      await this.page.getByLabel('Save').click();
    
      await this.page.waitForTimeout(1000);
      await this.page.getByText(BillingInfo.RecordSavedMessage).click();
    
    
      //Validating the Created Customer 
      const CurrentCustName = await this.page.getByLabel('Customer Name: *').inputValue();
      console.log("Customer Name:" +" " + CurrentCustName);
    
      const CurrentSetupDate = await this.page.getByLabel('Setup Date:').inputValue();
      console.log("Setup Date:" +" " +CurrentSetupDate);
    
      const CurrentAdd1 = await this.page.getByLabel('Address 1: *').inputValue();
      console.log("Address 1:" +" " +CurrentAdd1);
    
      const CurrentAdd2 = await this.page.getByLabel('Address 2:').inputValue();
      console.log("Address 2:" +" " +CurrentAdd2);
    
      const CurrentCity = await this.page.getByLabel('City: *').inputValue();
      console.log("City:" +" " +CurrentCity);
    
      const CurrentState = await this.page.getByPlaceholder('Select...').nth(1).inputValue();
      console.log("State:" +" " +CurrentState);
    
      const CurrentZipCode = await this.page.getByLabel('Zip Code: *').inputValue();
      console.log("Zip Code:" +" " +CurrentZipCode);
    
      const CurrentPhone = await this.page.getByLabel('Phone:').inputValue();
      console.log("Phone:" +" " +CurrentPhone);
    
      const CurrentContactEmail = await this.page.getByLabel('Contact Email:').inputValue();
      console.log("Contact Email:" +" " +CurrentContactEmail);
    
      const CurrentTEN = await this.page.getByLabel('Tax Exempt Number:').inputValue();
      console.log("Tax Exempt Number:" +" " +CurrentTEN);
    
      const CurrentProvideSDS = await this.page.locator("input[name='provideSDS']").inputValue();
      console.log("Provide SDS:" +" " +CurrentProvideSDS);
    
      const CurrentCOA = await this.page.locator("input[name='provideCOA']").inputValue();
      console.log("Provide SDS:" +" " +CurrentCOA);
    
      //Data validations
    
      expect(CurrentCustName).toBe(BillingInfo.CustomerName);
      expect(CurrentAdd1).toBe(BillingInfo.Address1);
      expect(CurrentAdd2).toBe(BillingInfo.Address2);
      expect(CurrentCity).toBe(BillingInfo.City);
      expect(CurrentZipCode).toBe(BillingInfo.ZipCode);
      expect(CurrentPhone).toBe(BillingInfo.Phone);
      expect(CurrentContactEmail).toBe(BillingInfo.ContactEmail);
      expect(CurrentTEN).toBe(BillingInfo.TaxExemptNumber);
      expect(CurrentProvideSDS).toBe(BillingInfo.ProvideSDS);
      //expect(CurrentCOA).toBe(BillingInfo.ProvideCOA);
    
    }


};