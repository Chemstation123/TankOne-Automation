import { Page,expect } from "@playwright/test";
import { CreateUpdateRouteMPage } from "../TestData/CreateUpdateRouteMaintenanceJData";



export class CreateUpdateRouteMaintenancePage {
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }


    async performCreateUpdateRouteMaintenance() {

        await this.page.getByText('Settings').click();
        await this.page.getByText('Lookup Tables').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Route MaintenanceRoute').click();
        await this.page.waitForTimeout(2000);

        //Adding a new record
        await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.getByLabel('Route #: *').fill(CreateUpdateRouteMPage.Route_1);
        await this.page.getByLabel('Route:').click();
        await this.page.getByLabel('Route:').fill(CreateUpdateRouteMPage.Route);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Searching previously created record
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CreateUpdateRouteMPage.Route_1);
        await this.page.waitForTimeout(1000);

        //Updating created record
        await this.page.getByRole('link', { name: 'Edit' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Route #: *').click();
        await this.page.getByLabel('Route #: *').fill(CreateUpdateRouteMPage.UpdatedRoute_1);
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Route:').click();
        await this.page.getByLabel('Route:').fill(CreateUpdateRouteMPage.UpdatedRoute);
        await this.page.waitForTimeout(2000);

        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Record Saved Succesfully').click();

        //Deleting record
        await this.page.locator("(//div[@aria-label='Search box'])[1]").click();
        // await this.page.getByRole('menubar').first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menu').getByText('Reset').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CreateUpdateRouteMPage.SearchingRoute);
        await this.page.getByRole('gridcell', { name: CreateUpdateRouteMPage.SearchingRoute }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Delete' }).click();
        await this.page.getByLabel('Yes').click();
        await this.page.getByText('Record Removed Succesfully').click();

    }
}