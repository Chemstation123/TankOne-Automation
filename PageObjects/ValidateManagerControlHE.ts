import { Page,expect } from "@playwright/test";
import { ManagerControlHE } from "../TestData/ManagerControlHE";


export class ManagerControlHardErrosPage {
    private page: Page;

    constructor(page: Page){
      this.page = page;
    }

    async performManagerControlHE() {

  //Navigate to Settings option
  await this.page.getByText('Settings').click();

  //Manager Control Section
  await this.page.getByText('Manager Control').click();
  await this.page.waitForTimeout(2000);


  await this.page.getByLabel('dropdownbutton').click();
  await this.page.waitForTimeout(2000);
  await this.page.getByText('Edit Manufacturing Center').click();
  await this.page.waitForTimeout(2000);
  await this.page.getByLabel('Name: *').click();

  await this.page.waitForTimeout(1000);
  await this.page.getByLabel('Name: *').fill('');
  await this.page.getByLabel('Address 1: *').click();
  await this.page.getByLabel('Address 1: *').fill('');
  await this.page.getByLabel('City: *').click();
  await this.page.getByLabel('City: *').fill('');
  await this.page.getByLabel('Zip Code: *').click();
  await this.page.getByLabel('Zip Code: *').fill('');

  await this.page.waitForTimeout(1000);
  await this.page.getByLabel('Save').click();


  await this.page.getByLabel('Name: *').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(ManagerControlHE.Name).click();
  const MCNameError = this.page.getByText(ManagerControlHE.Name).innerHTML();
  console.log(await(MCNameError));
  expect(ManagerControlHE.Name).toContain("Name is Required.");


  await this.page.getByLabel('Address 1: *').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(ManagerControlHE.Address1).click();
  const MCAddressError = this.page.getByText(ManagerControlHE.Address1).innerHTML();
  console.log(await(MCAddressError));
  expect(ManagerControlHE.Address1).toContain("Address is Required.");


  await this.page.getByLabel('City: *').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(ManagerControlHE.City).click();
  const MCCityError = this.page.getByText(ManagerControlHE.City).innerHTML();
  console.log(await(MCCityError));
  expect(ManagerControlHE.City).toContain("City is Required.");


  await this.page.getByLabel('Zip Code: *').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(ManagerControlHE.ZipCode).click();
  const MCZipcodeError = this.page.getByText(ManagerControlHE.ZipCode).innerHTML();
  console.log(await(MCZipcodeError));
  expect(ManagerControlHE.ZipCode).toContain("Zip Code is Required.");

    }

  };