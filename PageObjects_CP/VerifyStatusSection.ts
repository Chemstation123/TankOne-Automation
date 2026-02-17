import {Page, expect} from "@playwright/test";




export class VerifyStatusSection{
    public page : Page;
    constructor(page : Page){
    this.page = page;
    }
    async VerifyStatusSection()
    {
        await this.page.getByRole('cell', { name: '-2' }).click();
        await this.page.getByRole('button', { name: ' Status' }).click();
        
        const status = await this.page.locator('div.row.g-3').locator('div').nth(2).innerText();
        console.log('Status:', status);

        const primaryContact = await this.page.locator("app-tank-detail-modal div[class='row g-3'] div:nth-child(2)").innerText();
        console.log('Primary Contact:', primaryContact);

        const alarmStatus = await this.page.locator("div[class='modal-body'] div:nth-child(3)").innerText();
        console.log('Alarm Status:', alarmStatus);

        const inventoryInGallons = await this.page.locator("body app-root app-tank-detail-modal div:nth-child(4)").innerText();
        console.log('Inventory in Gallons:', inventoryInGallons);

        const TankNumber = await this.page.locator("body app-root app-tank-detail-modal div:nth-child(5)").innerText();
        console.log('Tank Number:', TankNumber);
    }
}