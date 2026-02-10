import { Page, expect } from "@playwright/test";



export class CustomerConnectFilterDataByProductInfoPage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performCustomerConnectFilter()
    {
      await this.page.waitForTimeout(2000); 
      await this.page.getByText('Customer Connect').click();
      await this.page.getByText('Active ProductsActive Products').click();

      //Application filter 
      await this.page.locator("(//input[@placeholder='Select...'])[2]").click();
      await this.page.getByText('Acid').click();
      const item1 = await this.page.getByRole('gridcell', { name: 'Acid' }).first().innerText();
      console.log(item1);
      await this.page.getByRole('gridcell', { name: 'Acid' }).first().click();
      await this.page.waitForTimeout(1000);
      

      await this.page.locator("(//input[@placeholder='Select...'])[2]").click();
      await this.page.getByText('Asphalt release agent').click();
      const item2 =  await this.page.getByRole('gridcell', { name: 'Asphalt release agent' }).first().innerText();
      console.log(item2);
      await this.page.getByRole('gridcell', { name: 'Asphalt release agent' }).first().click();
      await this.page.waitForTimeout(1000);


      await this.page.locator("(//input[@placeholder='Select...'])[2]").click();
      await this.page.getByText('Glass Cleaner').click();
      const item3 =  await this.page.getByRole('gridcell', { name: 'Glass Cleaner' }).first().innerText();
      console.log(item3);
      await this.page.getByRole('gridcell', { name: 'Glass Cleaner' }).first().click();
      await this.page.waitForTimeout(1000);


      await this.page.locator("(//input[@placeholder='Select...'])[2]").click();
      await this.page.getByText('Floor Cleaner').click();
      const item4 = await this.page.getByRole('gridcell', { name: 'Floor Cleaner' }).first().innerText();
      console.log(item4);
      await this.page.getByRole('gridcell', { name: 'Floor Cleaner' }).first().click();
      await this.page.waitForTimeout(1000);


      await this.page.locator("(//input[@placeholder='Select...'])[2]").click();
      await this.page.getByText('Floor soap').click();
      const item5 = await this.page.getByRole('gridcell', { name: 'Floor soap' }).first().innerText();
      console.log(item5);
      await this.page.getByRole('gridcell', { name: 'Floor soap' }).first().click();
      await this.page.waitForTimeout(1000);

      await this.page.locator("(//input[@placeholder='Select...'])[2]").click();
      await this.page.getByText('Foaming Chlorinated Cleaner').click();
      const item6 = await this.page.getByRole('gridcell', { name: 'Foaming Chlorinated Cleaner' }).first().innerText();
      console.log(item6)
      await this.page.getByRole('gridcell', { name: 'Foaming Chlorinated Cleaner' }).first().click();


    }
}