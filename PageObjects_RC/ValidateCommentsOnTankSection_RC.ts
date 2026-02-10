import { Page, expect } from "@playwright/test";
import { ValidateCommentsByUsers } from "../TestData_RC/ValidateCommnetsTankSectionJData_RC";



export class ValidateCommentsOnTankSection {
    public page : Page;



    constructor(page : Page) {
        this.page = page;
    }
    

    async performValidateCommentsOnTankSection() {

        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(ValidateCommentsByUsers.CustomerNumber);    
        await this.page.getByRole('gridcell', { name: ValidateCommentsByUsers.CustomerNumber }).click();
        await this.page.getByText('TanksTanks').click();
        await this.page.getByRole('gridcell', { name: ValidateCommentsByUsers.TankNumber }).click();
        await this.page.locator('#tanks-card').getByText('CommentsComments').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('group', { name: 'Tank Comments' }).getByRole('subscript').click();
        await this.page.waitForTimeout(1000);
        const Tank_Comments = await this.page.getByRole('group', { name: 'Tank Comments' }).getByRole('subscript').textContent();
        console.log(Tank_Comments);
        
        await this.page.waitForTimeout(1000);
        await this.page.getByText('- Modified By:').nth(1).click();
        await this.page.waitForTimeout(1000);
        const Delivery_Summary_Notes = await this.page.getByText('- Modified By:').nth(1).textContent();
        console.log(Delivery_Summary_Notes);
        
        await this.page.waitForTimeout(1000);
        await this.page.getByText('- Modified By:').nth(2).click();
        await this.page.waitForTimeout(1000);
        const Additional_Del_Tik_Additives = await this.page.getByText('- Modified By:').nth(2).textContent();
        console.log(Additional_Del_Tik_Additives);


       }
    }
    
    
