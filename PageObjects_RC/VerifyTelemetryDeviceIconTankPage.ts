import { Page, expect } from "@playwright/test";
import { VerifyTelemtryIconData as verifyTelemtryDeviceIcon, VerifyTelemtryIconData } from "../TestData_RC/VerifyTelemtryIconData";



export class VerifyTelemetryDeviceIconTankPage {
    public page : Page;

    constructor(page : Page){
        this.page = page;
    }

    async verifyTelemtryDeviceIcon () 

    {
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(1500);
        await this.page.getByPlaceholder('Search...').first().click();
        await this.page.getByPlaceholder('Search...').first().fill(verifyTelemtryDeviceIcon.CustomerName);
        await this.page.getByRole('gridcell', { name: verifyTelemtryDeviceIcon.FullCustomerName }).click();
        await this.page.getByText('TanksTanks').click();
        const timestamp = Date.now();
        await this.page.getByRole('img', { name: 'True' }).nth(0).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: `screenshots_RC/${timestamp}_1.png`});
        await this.page.locator('app-tank-contact-info').getByRole('img', { name: 'True' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({ path: `screenshots_RC/${timestamp}_2.png`});
    }
}