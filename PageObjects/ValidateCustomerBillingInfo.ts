import { Page, expect } from "@playwright/test";
import { CustomerInfoPage } from "../TestData/NewCustomerInfoJData";
import { timeStamp } from "console";



export class NewCustomerInfoPage {
    public page: Page;
    public static MyCustomerNum : string;
    public static MyCustomerName : string;

    private static customerCounter = 0;

    public constructor(page: Page) {
       this.page =page;
       NewCustomerInfoPage.MyCustomerNum = this.generateFiveDigitUniqueNumber().toString();
      
      }

      private generateFiveDigitUniqueNumber() : number{
        const digits : number[] = [];
        while (digits.length < 5) {
          const digit = Math.floor(Math.random() * 10);
          if (!digits. includes(digit)){
            digits.push(digit);
            console.log(digits);
          }
        }

        return parseInt(digits.join(''), 10);
      }

      private static generateSequentialCustomerName() : string {
          const prefix = "Automated_User_";  
          const timeStamp = Date.now();
          this.customerCounter++;
          return `${prefix}${timeStamp}`;
        }

      public generateCustomerIdentifer() : string {
        //get the name and number 
        const customerName = NewCustomerInfoPage.generateSequentialCustomerName();
        const customerNumber = this.generateFiveDigitUniqueNumber();

        //Concatenating both with desired formatting
        return `${customerNumber}_${customerName}`;
      }

      async performCustomerInfo () {
      
        //Customer Page
      await this.page.getByText("Customers").click();
    
      //Creating New Customer
      await this.page.getByLabel('New Customer').click();
    
      //New Customer window for data
      //Customer Number 
    
      //public static readonly const MyCustomerNum : string  = Math.random() + CustomerInfoPage.CustomerNumber;
    
      await this.page.getByLabel('Customer Number: *').fill(NewCustomerInfoPage.MyCustomerNum);
      console.log("Generated Customer Number:",NewCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Customer Number: *').fill(NewCustomerInfoPage.MyCustomerNum);
      
  
      //Customer Name

      const uniqueCustomerName = NewCustomerInfoPage.generateSequentialCustomerName();
      await this.page.waitForTimeout(2000);
      await this.page.locator('div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().click();
      await this.page.locator('div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().fill(uniqueCustomerName);
      console.log("Generated Customer Name:", uniqueCustomerName);

      NewCustomerInfoPage.MyCustomerName = uniqueCustomerName;

    
      //Customer First Name
      await this.page.waitForTimeout(2000);
      await this.page.locator('div:nth-child(2) > div > div > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().click();
      await this.page.locator('div:nth-child(2) > div > div > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().fill(CustomerInfoPage.ContactFirstName);
    
      //Customer Last Name
      await this.page.waitForTimeout(2000);
      await this.page.locator('div:nth-child(2) > div > div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
      await this.page.locator('div:nth-child(2) > div > div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').fill(CustomerInfoPage.ContactLastName);
    
      //Account Manager 
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Select').nth(2).click();
      await this.page.getByText(CustomerInfoPage.AccountManaer).first().click();
    
      //Address 1
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Billing Address').getByRole('textbox').first().click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').first().fill(CustomerInfoPage.Address1);
    
      //Address 2
      await this.page.getByLabel('Address 2:').click();
      await this.page.getByLabel('Address 2:').fill(CustomerInfoPage.Address2);
    
      //City
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(2).click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(2).fill(CustomerInfoPage.City);
    
      //State
      await this.page.getByLabel('Billing Address').getByLabel('Select').click();
      await this.page.getByText('AL', { exact: true }).click();
    
      //Zip Code
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(3).click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(3).fill(CustomerInfoPage.ZipCode);
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Save').click();
    
      //Editing the created Customer 
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('dropdownbutton').click();
      await this.page.getByText('Edit Customer').click();
    
      await this.page.getByLabel('Phone:').click();
      await this.page.getByLabel('Phone:').fill(CustomerInfoPage.Phone);
    
      await this.page.getByLabel('Contact Email:').click();
      await this.page.getByLabel('Contact Email:').fill(CustomerInfoPage.ContactEmail);
    
      await this.page.getByRole('form').getByLabel('Select').nth(3).click();
      await this.page.getByText('Net 10').click();
    
      await this.page.getByLabel('Tax Exempt Number:').click();
      await this.page.getByLabel('Tax Exempt Number:').fill(CustomerInfoPage.TaxExemptNumber);
    
      await this.page.getByRole('form').getByLabel('Select').nth(4).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByText('- Oilseed and Grain Farming').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Provide SDS:').click();
      await this.page.waitForTimeout(2000);
    
      await this.page.getByLabel('Provide Certificate of').click();
    
      await this.page.getByLabel('Save').click();
    
      await this.page.waitForTimeout(1000);
      await this.page.getByText(CustomerInfoPage.RecordSavedMessage).click();
    
    
      //Validating the Created Customer 
      const CurrentCustName = await this.page.getByLabel('Customer Name: *').inputValue();
      console.log("Customer Name:" +" " + uniqueCustomerName);
    
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
  
    
      //Data validations
    
      expect(CurrentCustName).toBe(uniqueCustomerName);
      expect(CurrentAdd1).toBe(CustomerInfoPage.Address1);
      expect(CurrentAdd2).toBe(CustomerInfoPage.Address2);
      expect(CurrentCity).toBe(CustomerInfoPage.City);
      expect(CurrentZipCode).toBe(CustomerInfoPage.ZipCode);
      expect(CurrentPhone).toBe(CustomerInfoPage.Phone);
      expect(CurrentContactEmail).toBe(CustomerInfoPage.ContactEmail);
      expect(CurrentTEN).toBe(CustomerInfoPage.TaxExemptNumber);
      expect(CurrentProvideSDS).toBe(CustomerInfoPage.ProvideSDS);
    
    }


}
