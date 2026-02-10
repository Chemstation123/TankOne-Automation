import { Page, expect } from "@playwright/test";
import { RoutePageHE } from "../TestData/RouteMaintenanceHE";


export class RouteHardErrorsPage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async performRoutePageHE() {


 //Select Seetings Icon
  await this.page.getByLabel('Settings').locator('div').nth(2).click();

  //Selecting LookUp Tables option
  await this.page.getByText('Lookup Tables').click();


  await this.page.getByRole('tab', { name: 'Route Maintenance' }).click();
  await this.page.waitForTimeout(1500);
  await this.page.getByRole('button', { name: 'Add a row' }).click();
  await this.page.getByRole('button', { name: 'Save' }).click();


  await this.page.getByLabel('Route #: *').click();
  await this.page.getByText(RoutePageHE.Route).click();
  const RouteError = this.page.getByText(RoutePageHE.Route).innerHTML();
  console.log(await(RouteError));
  expect(RoutePageHE.Route).toContain("Route # is required");


    }

}; 
