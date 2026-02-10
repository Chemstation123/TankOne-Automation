import { Page,expect } from "@playwright/test";
import { StrategicCustomerInfoPage } from "../TestData/StrategicCustomerJData";


export class  NewStrategicCustomerInfoPage {
    public page: Page;
    public static MyCustomerNum : string;
    public static MyCustomerName : string;

    private static customerCounter = 0;

    constructor(page: Page){
        this.page = page;
        NewStrategicCustomerInfoPage.MyCustomerNum = this.generateFiveDigitUniqueNumber().toString();
    }

    private generateFiveDigitUniqueNumber() : number{
        const digits : number[] = [];
        while(digits.length<5){
            const digit = Math.floor(Math.random() *10);
            if(!digits.includes(digit)){
                digits.push(digit);
                console.log(digits);
            }
        }
        return parseInt(digits.join(''), 10);
    }

    private static generateSequentialCustomerName() : string{
        const prefix = 'Startegic_Automation_User_';
        const timeStamp = Date.now();
        this.customerCounter++;
        return`${prefix}${timeStamp}`;
    }

    public generateCustomerIdentifier():string{
        //To get Name and Number 
        const customerName = NewStrategicCustomerInfoPage.generateSequentialCustomerName();
        const customerNumber = this.generateFiveDigitUniqueNumber();

        //Concatenating both with desired formatting 
        return`${customerName}_${customerNumber}`;
    }

    async performStrategicCustomerCreation() {

        //Customer Page
      await this.page.getByText("Customers").click();
    
      //Creating New Customer
      await this.page.getByLabel('New Customer').click();
    
      //New Customer window for data
      //Customer Number 
      
      await this.page.getByLabel('Customer Number: *').fill(NewStrategicCustomerInfoPage.MyCustomerNum);
      console.log(NewStrategicCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Customer Number: *').fill(NewStrategicCustomerInfoPage.MyCustomerNum);

       //Customer Name
      const uniqueCustomerName = NewStrategicCustomerInfoPage.generateSequentialCustomerName();
      await this.page.waitForTimeout(1000);
      await this.page.locator('div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().click();
      await this.page.locator('div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().fill(uniqueCustomerName);
      console.log("Generated Customer Name:", uniqueCustomerName);

      NewStrategicCustomerInfoPage.MyCustomerName = uniqueCustomerName;
    
      //Customer First Name
      await this.page.waitForTimeout(1000);
      await this.page.locator('div:nth-child(2) > div > div > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().click();
      await this.page.locator('div:nth-child(2) > div > div > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').first().fill(StrategicCustomerInfoPage.ContactFirstName);
    
      //Customer Last Name
      await this.page.locator('div:nth-child(2) > div > div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
      await this.page.locator('div:nth-child(2) > div > div:nth-child(2) > .dx-item-content > .dx-datagrid-edit-form-item > .dx-field-item-content > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').fill(StrategicCustomerInfoPage.ContactLastName);
    
      //Account Manager 
      await this.page.getByLabel('Select').nth(2).click();
      await this.page.getByText(StrategicCustomerInfoPage.AccountManaer).click();
    
      //Address 1
      await this.page.getByLabel('Billing Address').getByRole('textbox').first().click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').first().fill(StrategicCustomerInfoPage.Address1);
    
      //Address 2
      await this.page.getByLabel('Address 2:').click();
      await this.page.getByLabel('Address 2:').fill(StrategicCustomerInfoPage.Address2);
    
      //City
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(2).click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(2).fill(StrategicCustomerInfoPage.City);
    
      //State
      await this.page.getByLabel('Billing Address').getByLabel('Select').click();
      await this.page.getByText('AL', { exact: true }).click();
    
      //Zip Code
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(3).click();
      await this.page.getByLabel('Billing Address').getByRole('textbox').nth(3).fill(StrategicCustomerInfoPage.ZipCode);
      await this.page.getByLabel('Save').click();
    
      //Editing the created Customer 
      await this.page.getByLabel('dropdownbutton').click();
      await this.page.getByText('Edit Customer').click();

      await this.page.getByLabel('Phone:').click();
      await this.page.getByLabel('Phone:').fill(StrategicCustomerInfoPage.Phone);
    
      await this.page.getByLabel('Contact Email:').click();
      await this.page.getByLabel('Contact Email:').fill(StrategicCustomerInfoPage.ContactEmail);
    
      await this.page.getByRole('form').getByLabel('Select').nth(3).click();
      await this.page.getByText('Net 10').click();
    
      await this.page.getByLabel('Tax Exempt Number:').click();
      await this.page.getByLabel('Tax Exempt Number:').fill(StrategicCustomerInfoPage.TaxExemptNumber);
    
      await this.page.getByRole('form').getByLabel('Select').nth(4).click();
      await this.page.getByText('- Oilseed and Grain Farming').click();


      //Strtegic Customer
      const usedNumbers = new Set<number>();

      function generateUniqueFourDigitNumber():number{
        if(usedNumbers.size >=9000) {
            throw new Error("All possible 4-digit numbers have been used.");
        }

        let num;
        do {
            num = Math.floor(1000 + Math.random() * 9000);
        } while(usedNumbers.has(num));

        usedNumbers.add(num);
        return num;
      }
      console.log(generateUniqueFourDigitNumber());
      const randomStrategicCustomerNumber = generateUniqueFourDigitNumber();
      await this.page.getByLabel('Customer Type:').click()
      await this.page.getByLabel('Strategic Customer #:').click();
      await this.page.getByLabel('Strategic Customer #:').fill(randomStrategicCustomerNumber.toString());
      await this.page.getByLabel('Strategic Customer #:').innerHTML();
      console.log(randomStrategicCustomerNumber);
      await this.page.waitForTimeout(1000);
    
      await this.page.getByLabel('Provide SDS:').click();
    
      await this.page.getByLabel('Provide Certificate of').click();
    
      await this.page.getByLabel('Save').click();
    
      await this.page.waitForTimeout(1000);
      await this.page.getByText(StrategicCustomerInfoPage.RecordSavedMessage).click();

      //Validating the Created Customer 
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
    
      await this.page.waitForTimeout(1000);
      const CurrentProvideSDS = await this.page.locator("input[name='provideSDS']").inputValue();
      console.log("Provide SDS:" +" " +CurrentProvideSDS);

    
      //Data validations
      expect(CurrentAdd1).toBe(StrategicCustomerInfoPage.Address1);
      expect(CurrentAdd2).toBe(StrategicCustomerInfoPage.Address2);
      expect(CurrentCity).toBe(StrategicCustomerInfoPage.City);
      expect(CurrentZipCode).toBe(StrategicCustomerInfoPage.ZipCode);
      expect(CurrentPhone).toBe(StrategicCustomerInfoPage.Phone);
      expect(CurrentContactEmail).toBe(StrategicCustomerInfoPage.ContactEmail);
      expect(CurrentTEN).toBe(StrategicCustomerInfoPage.TaxExemptNumber);
    
   
    
    }

};
