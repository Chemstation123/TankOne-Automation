import { Page, expect } from "@playwright/test";
import { UpdateDeleteCommnets } from "../TestData_RC/UpdateDeleteCommnetsJData_RC";



export class UpdateDeleteCommentsTankSectionPage {
    public page : Page;


    constructor(page : Page) {
        this.page = page;
    }


    async performUpdateDeleteCommentsTankSectionSection() {

        //Select the Customer
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(UpdateDeleteCommnets.Customer_Number);
        // await this.page.getByRole('group', { name: 'Data grid with 13 rows and 9' }).getByPlaceholder('Search...').click();
        // await this.page.getByRole('group', { name: 'Data grid with 13 rows and 9' }).getByPlaceholder('Search...').fill(UpdateDeleteCommnets.Customer_Number);
        await this.page.getByRole('gridcell', { name: UpdateDeleteCommnets.Customer_Number }).click();

        //Navigate to the Tanks tab
        await this.page.waitForTimeout(1000);
        await this.page.getByText('TanksTanks').click();
        await this.page.getByRole('gridcell', { name: UpdateDeleteCommnets.Tank_number }).click();

        //Navigate to the Comments tab
        await this.page.waitForTimeout(1000);
        await this.page.locator('#tanks-card').getByText('CommentsComments').click();

        //Deleting the exisiting comments for testing
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        await this.page.getByText('Edit Comments').click();

        //Tank Comments Section
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('paragraph').nth(0).click();
        await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill('');

        //Delivery Summary Notes Section
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('paragraph').nth(1).click();
        await this.page.getByLabel('Editor content').nth(1).fill('');

        //Additional Del Tik Additives Section
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('paragraph').nth(2).click();
        await this.page.getByLabel('Editor content').nth(2).fill('');


        await this.page.waitForTimeout(2000);
        //await this.page.getByRole('button', { name: 'Save' }).click();

        await this.page.getByRole('button', { name: 'Save' }).click();
        // await this.page.locator("//div[normalize-space(text())='Save']").click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Checking the timestamp and also for logged users
        await this.page.waitForTimeout(1000);
        await this.page.locator("//legend[text()='Tank Comments']/following-sibling::sub").click();
        const Tank_Comments = await this.page.locator("//legend[text()='Tank Comments']/following-sibling::sub").textContent();
        console.log(Tank_Comments);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('- Modified By:').nth(1).click();
        const Delivery_Summary = await this.page.getByText('- Modified By:').nth(1).textContent();
        console.log(Delivery_Summary);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('- Modified By:').nth(2).click();
        const Additional_Del_Tik_Additives = await this.page.getByText('- Modified By:').nth(2).textContent();
        console.log(Additional_Del_Tik_Additives);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('*Text entered here will').click();
        const Comments_Text = await this.page.getByText('*Text entered here will').textContent();
        console.log(Comments_Text);


        //Updating new comments for checking the timestamp and also for logged users
        await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        await this.page.getByText('Edit Comments').click();


        await this.page.waitForTimeout(1000);
        await this.page.getByRole('group', { name: 'Tank Comments' }).getByRole('paragraph').click();
        await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill(UpdateDeleteCommnets.Tank_Comments_UpdatedComments);
        const TC_updatedComments = await this.page.getByRole('group', { name: 'Tank Comments' }).textContent();
        console.log(TC_updatedComments);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Editor content').nth(1).click();
        await this.page.getByLabel('Editor content').nth(1).fill(UpdateDeleteCommnets.Delivery_Summary_Notes_UpdatedComments);
        const DS_updatedComments = await this.page.getByLabel('Editor content').nth(1).textContent();
        console.log(DS_updatedComments);

        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Editor content').nth(2).click();
        await this.page.getByLabel('Editor content').nth(2).fill(UpdateDeleteCommnets.Additional_Tik_Additives_UpdatedComments);
        const AT_updatedComments = await this.page.getByLabel('Editor content').nth(2).textContent();
        console.log(AT_updatedComments);


        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();


        await this.page.getByRole('link', { name: 'Customer List' }).click();
        await this.page.getByPlaceholder('Search...').click();
        await this.page.getByPlaceholder('Search...').fill(UpdateDeleteCommnets.Customer_Number);
        await this.page.getByRole('gridcell', { name: UpdateDeleteCommnets.Customer_Number }).click();
        await this.page.getByText('TanksTanks').click();
        await this.page.getByRole('gridcell', { name: UpdateDeleteCommnets.Tank_number }).click();
        await this.page.locator('#tanks-card').getByText('CommentsComments').click();


        await this.page.waitForTimeout(1000);
        await this.page.getByRole('group', { name: 'Tank Comments' }).getByRole('subscript').click();
        const TC_Latest_timeStamp = await this.page.getByRole('group', { name: 'Tank Comments' }).getByRole('subscript').textContent();
        console.log(TC_Latest_timeStamp);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('- Modified By:').nth(1).click();
        const DS_Latest_timeStamp = await this.page.getByText('- Modified By:').nth(1).textContent();
        console.log(DS_Latest_timeStamp);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('- Modified By:').nth(2).click();
        const AT_Latest_timeStamp = await this.page.getByText('- Modified By:').nth(2).textContent();
        console.log(AT_Latest_timeStamp);

        await this.page.waitForTimeout(1000);
        await this.page.getByText('*Text entered here will').click();
        const Comments_Latest_Text = await this.page.getByText('*Text entered here will').textContent();
        console.log(Comments_Latest_Text);


    }

}