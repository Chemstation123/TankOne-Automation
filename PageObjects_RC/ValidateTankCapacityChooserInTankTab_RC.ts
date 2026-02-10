import { Page, expect } from "@playwright/test";



export class TankCapacityChooserTankTab{
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }


    async performTankCapacityChooserTankTab()

    {
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Search...').first().click();
        await this.page.getByPlaceholder('Search...').first().fill('CUST000014424');
        await this.page.getByRole('gridcell', { name: 'CUST000014424' }).click();
        await this.page.getByText('TanksTanks').click();
        await this.page.getByLabel('Column Chooser').click();
        await this.page.waitForTimeout(1000);
        const sourceElement = await this.page.getByText('Tank Capacity');
        // const sourceElement = this.page.locator("//div[contains(text(),'Tank Capacity')]");

        //Get the target element 
        const targetElement = this.page.locator("//div[@class='dx-datagrid-group-panel']//div[1]");
        
        await this.page.waitForTimeout(1000);

        //Ensure both elements are visible
        await this.page.waitForTimeout(1000);
        await sourceElement.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000); 
        await targetElement.waitFor({ state: 'visible' });

        //Get the bounding boxes of the soure and tarhed elements
        const sourceBoundingBox = await sourceElement.boundingBox();
        const targetBoundingBox = await targetElement.boundingBox();

        if (sourceBoundingBox && targetBoundingBox) {
            //perform the darg and drop operation
            await this.page.mouse.move(
                sourceBoundingBox.x + sourceBoundingBox.width / 2,
                sourceBoundingBox.y + sourceBoundingBox.height / 2
            );

            await this.page.mouse.down();
            await this.page.mouse.move(
                targetBoundingBox.x + targetBoundingBox.width / 2,
                targetBoundingBox.y + targetBoundingBox.height / 2
            );

            await this.page.mouse.up();

            //verify that the darg and drop was successful
            //Replace 'selector-for-dropped-element' with an appropriate selector
            await expect(this.page.getByLabel('Data grid toolbar').getByText('Tank Capacity')).toBeVisible();
            await this.page.waitForTimeout(1000);

            //checking with all the tanks
            const tank_1 =  await this.page.getByRole('gridcell', { name: 'Tank Capacity:' }).first().innerHTML()
            console.log(tank_1);

            const tank_2 = await this.page.getByRole('gridcell', { name: 'Tank Capacity:' }).nth(1).innerHTML()
            console.log(tank_2);

            console.log('Drag and drop was successful');
        }else{
            throw new Error('Unable to get bounding box for soure and target elements');

        }
            await this.page.getByRole('link', { name: 'Customer List' }).click();
            await this.page.getByPlaceholder('Search...').click();
            await this.page.getByPlaceholder('Search...').fill('CUST000014424');
            await this.page.getByRole('gridcell', { name: 'CUST000014424' }).click();
            await this.page.getByRole('tab', { name: 'Tanks' }).click();
            await this.page.getByLabel('Column Chooser').click();
            await this.page.getByLabel('Tank Capacity').locator('div').first().click();
      
    }
}