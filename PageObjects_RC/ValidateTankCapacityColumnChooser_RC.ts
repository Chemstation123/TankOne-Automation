import { Page, expect } from "@playwright/test";

export class TankCapacityColumnChooser {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performTankCapacityColumnChooser() {
        // Navigate to the correct page and open the column chooser
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Tank CommunityTank Community').click();
        await this.page.waitForTimeout(2000);

        await this.page.getByRole('button', { name: 'Column Chooser' }).click();
        // await this.page.locator('#tankGrid').getByLabel('Column Chooser').click();

        // Get the source element (Tank Capacity)
        await this.page.waitForTimeout(1500);
        const sourceElement = await this.page.getByText('Tank Capacity');
        // const sourceElement = await this.page.locator("//div[contains(text(),'Tank Capacity')]");

        // Get the target element (where you want to drop)
        //const targetElement = this.page.getByLabel('Data grid with 68 rows and 12').getByText('Drag a column header here to');
        await this.page.waitForTimeout(1000);
        const targetElement = await this.page.locator("(//div[@class='dx-group-panel-message'])[2]");
        await this.page.waitForTimeout(1000);

        // Ensure both elements are visible
        await this.page.waitForTimeout(1000);
        await sourceElement.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await targetElement.waitFor({ state: 'visible' });

        // Get the bounding boxes of the source and target elements
        const sourceBoundingBox = await sourceElement.boundingBox();
        const targetBoundingBox = await targetElement.boundingBox();
        await this.page.waitForTimeout(1000);

        if (sourceBoundingBox && targetBoundingBox) {
            // Perform the drag and drop operation
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

            // Wait for any animations or updates to complete
            await this.page.waitForTimeout(2000);

            // Verify that the drag and drop was successful
            // Replace 'selector-for-dropped-element' with an appropriate selector
            //await expect(this.page.getByLabel('Data grid with 1323 rows and').getByLabel('Data grid toolbar').getByText('Tank Capacity')).toBeVisible();
            await this.page.waitForTimeout(1000);

            console.log('Drag and drop operation successful');
        } else {
            throw new Error('Unable to get bounding box for source or target element');
        }
    }
}