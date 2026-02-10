import { Page, expect } from "@playwright/test";



export class ValidateAmountFeildPostingPage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performValidateAmountFeildPosting()
    {
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.getByText('PostingPosting').click();

        const tankElement = await this.page.getByText('405 G').first();
        const tankCapacityFeild = await tankElement.innerText();

        if(tankCapacityFeild === '405 G') {
            console.log(`Tank Capacity is: ${tankCapacityFeild}`);

            tankElement.click();

             await this.page.waitForTimeout(1000);
             //await this.page.locator('#dx-83a359ab-dd44-540c-79ba-b7384b4cd712 > tbody > tr > td:nth-child(8)').first().click();
             await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
             await this.page.getByLabel('Amount', { exact: true }).fill('410');

             await this.page.keyboard.press('Tab');
        
             //await this.page.locator('#dx-83a359ab-dd44-540c-79ba-b7384b4cd712 > tbody > tr > td:nth-child(9)').first().click();
             await this.page.getByText('You have entered a total').click();
             const confrimChangesMessage = await this.page.getByText('You have entered a total').innerText();
             console.log(confrimChangesMessage);
             
             await this.page.waitForTimeout(1000);
             await this.page.getByLabel('Yes').click();

             await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
             //await this.page.getByRole('gridcell', { name: '410' }).click();

        }
        else {
            console.log('Tank Capacity does not match 405 G.');
        }
    }
}

