import { Page, expect } from "@playwright/test";
import { addDeliveriesTabToViewProductDeliveryHistorydata } from "../TestData_DEV/AddDeliveriesTabToViewProductDeliveryHistoryData";


export class AddDeliveriesTabToViewProductDeliveryHistory{
    public page : Page;
    constructor(page: Page){
        this.page = page;
    }
    async addDeliveriesTabToViewProductDeliveryHistory()
    {
        await this.page.getByText('Products').click();
        await this.page.getByText('Products List').click();
        await this.page.waitForTimeout(1000);        
        await this.page.getByRole('menuitem', { name: 'Search box' }).nth(0).click();
        await this.page.getByRole('menu').getByText('Equals').click();
        await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(addDeliveriesTabToViewProductDeliveryHistorydata.ProductID);
        await this.page.waitForTimeout(1000);
        await this.page.getByText(addDeliveriesTabToViewProductDeliveryHistorydata.ProductID).click();
        await this.page.getByRole('button', { name: 'View Full Product Detail' }).click();
        await this.page.getByText('DeliveriesDeliveries').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Delivery Date').click();
        console.log('Delivery date column verified successfully');
        await this.page.getByText('Manufacturing Center').click();
        console.log('Manufacturing Center column verified successfully');
        await this.page.getByText('Total Gallons').click();
        console.log('Total Gallons column verified successfully');

        // await this.page.getByRole('gridcell', { name: 'July' }).click();
        // await this.page.getByRole('gridcell', { name: 'Dayton (IGHQ), OH' }).click();
        // await this.page.getByRole('gridcell', { name: '0', exact: true }).click();
        
        const row = this.page.locator('table tr').nth(5); // index that highlights 1st row
        const deliveryCell = await row.locator('td').nth(0).allInnerTexts();
        console.log('Delivery:', deliveryCell); // 1st column
        const mfgCell = await row.locator('td').nth(1).allInnerTexts();
        console.log('Mfg:', mfgCell); // 2nd column
        const gallonsCell = await row.locator('td').nth(2).allInnerTexts(); // 3rd column
        console.log('Gallons:', gallonsCell);
    
    }
}