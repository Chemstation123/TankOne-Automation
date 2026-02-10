import { Page,expect } from "@playwright/test";
import { TankContactInofHardErrors } from "../TestData/TankContactInfoHE";


export class TankConatctInfoHardErrorsPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async performTankContactInfoHardErrors() {


  await this.page.getByText('Customers').click();
  await this.page.getByRole('gridcell', { name: TankContactInofHardErrors.Customer }).click();

  await this.page.getByText('TanksTanks').click();
  await this.page.getByRole('gridcell', { name: '60021-1', exact: true }).click();

  await this.page.getByText('Contact InformationContact Information').click();
  await this.page.getByRole('button', { name: 'dropdownbutton' }).click();

  await this.page.getByText('Edit Info').click();
  await this.page.getByLabel('Tank Number: *').click();
  await this.page.getByLabel('Tank Number: *').fill('');
  await this.page.getByLabel('Install Date: *').click();
  await this.page.getByLabel('Install Date: *').fill('');
  await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
  await this.page.getByRole('textbox', { name: 'Address 1: *' }).fill('');

  await this.page.getByRole('spinbutton').first().fill('');
  await this.page.getByRole('spinbutton').first().click();
  await this.page.getByRole('textbox', { name: 'City: *' }).fill('');
  await this.page.getByRole('textbox', { name: 'City: *' }).click();
  await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
  await this.page.getByRole('textbox', { name: 'Zip Code: *' }).fill('');
  // await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
  // await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).fill('');
  //await this.page.getByLabel('Delivery Information').locator('div').filter({ hasText: 'Department:Route:Address 1: *' }).first().click();
  await this.page.getByLabel('Save').click();


  await this.page.getByLabel('Tank Number: *').click();
  await this.page.getByText(TankContactInofHardErrors.TankNumber).click();
  const myTankNumber = this.page.getByText(TankContactInofHardErrors.TankNumber).innerHTML()
  console.log(await(myTankNumber));
  expect(TankContactInofHardErrors.TankNumber).toContain("Tank Number is required")


  await this.page.getByLabel('Install Date: *').click();
  await this.page.getByText(TankContactInofHardErrors.InstallDate).click();
  const myInstalldate = this.page.getByText(TankContactInofHardErrors.InstallDate).innerHTML()
  console.log(await(myInstalldate));
  expect(TankContactInofHardErrors.InstallDate).toContain("Install Date is required")


  await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
  await this.page.getByText(TankContactInofHardErrors.Address1).click();
  const myAddress1 = this.page.getByText(TankContactInofHardErrors.Address1).innerHTML()
  console.log(await(myAddress1));
  expect(TankContactInofHardErrors.Address1).toContain("Address is required")

  // await this.page.locator('dx-number-box').filter({ hasText: 'Tank Capacity is required' }).getByRole('spinbutton').click();
  // await this.page.getByText(TankContactInofHardErrors.TankCapacityG).click();
  // const myTankCapacity = this.page.getByText(TankContactInofHardErrors.TankCapacityG).innerHTML()
  // console.log(await(myTankCapacity));
  // expect(TankContactInofHardErrors.TankCapacityG).toContain("Tank Capacity is required")


  await this.page.getByRole('textbox', { name: 'City: *' }).click();
  await this.page.waitForTimeout(3000);
  await this.page.getByText(TankContactInofHardErrors.City, { exact: true }).click();
  const myCity = this.page.getByText(TankContactInofHardErrors.City, { exact: true }).innerHTML()
  console.log(await(myCity));
  expect(TankContactInofHardErrors.City).toContain("City is required")




  await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
  await this.page.getByText(TankContactInofHardErrors.ZipCode).click();
  const myZipCode = this.page.getByText(TankContactInofHardErrors.ZipCode).innerHTML()
  console.log(await(myZipCode));
  expect(TankContactInofHardErrors.ZipCode).toContain("Zip Code is required")


  // await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
  // await this.page.getByText(TankContactInofHardErrors.State).click();
  // const myState = this.page.getByText(TankContactInofHardErrors.State).innerHTML()
  // console.log(await(myState));
  // expect(TankContactInofHardErrors.State).toContain("State is required")


  


    }

};