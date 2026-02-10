import { Page, expect } from "@playwright/test";
import { UpdateManagerControlLocation } from "../TestData/UpdateManagerControlLocationJData";


export class UpdateManagerControlLocationPage{
    public page: Page;
  
  
    constructor(page: Page){
      this.page = page;
    }

    async performUpdateMCLocation() {
  
    
  
    await this.page.getByText('Settings').click();
    await this.page.getByText('Manager Control').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('dropdownbutton').click();
    await this.page.waitForTimeout(3000);
    await this.page.getByText('Edit Manufacturing Center').click();
  
    //Name
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Name: *').click();
    await this.page.getByLabel('Name: *').fill(UpdateManagerControlLocation.Name);
  
    //Address1
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Address 1: *').click();
    await this.page.getByLabel('Address 1: *').fill(UpdateManagerControlLocation.Address1);
  
    //Address2
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Address 2:').click();
    await this.page.getByLabel('Address 2:').fill(UpdateManagerControlLocation.Address2);
  
    //City
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('City: *').click();
    await this.page.getByLabel('City: *').fill(UpdateManagerControlLocation.City);
  
    //State
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('form').getByLabel('Select').click();
    await this.page.getByText(UpdateManagerControlLocation.State, { exact: true }).click();
  
    //ZipCode
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Zip Code: *').click();
    await this.page.getByLabel('Zip Code: *').fill(UpdateManagerControlLocation.ZipCode);
  
    //PhoneNumber
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Phone Number:').click();
    await this.page.getByLabel('Phone Number:').fill(UpdateManagerControlLocation.PhoneNumber);


    function genrateRandomString(length: number) {

      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;

      for (let i=0; i<length; i++)
      {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
      }

      return result;
   
    }
  
    //Email Address
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Email Address:').click();
    const randomString = genrateRandomString(10);
    const newemail = `testuser+${randomString}@chemstation.com`;
    await this.page.getByLabel('Email Address:').fill(newemail);
    console.log(newemail)
    
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Save').click();
    await this.page.getByText('Record Saved Succesfully').click();
  }
  
  };