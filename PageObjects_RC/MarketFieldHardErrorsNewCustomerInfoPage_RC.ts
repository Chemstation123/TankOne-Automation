import { Page, expect } from "@playwright/test";

export class MarketFieldHardErrorsNewCustomerInfoPage{
    public page : Page;

    constructor(page : Page){
        this.page = page;
    }

    async performMarketFieldHardErrors()
    {
        await this.page.getByText('Customers').click();
        await this.page.getByLabel('New Customer').click();
        await this.page.waitForTimeout(1000);
        // await this.page.getByText('Market:').click();
        // await this.page.locator('#dx_dx-c2199193-7141-2fdb-e196-da61ed39c9a1_market').press('Escape');
        await this.page.getByLabel('Save').click();
        await this.page.waitForTimeout(1000);
        await this.page.locator("(//input[@placeholder='Select...'])[3]").click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Market is Required.').click();
        const HardErroe_Message = await this.page.getByText('Market is Required.').innerText();
        console.log(HardErroe_Message);
    }
}