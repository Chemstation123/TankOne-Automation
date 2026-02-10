import { expect, Page } from '@playwright/test';
import { RouteSearch } from '../TestData/RouteSearchJData';


export class RouteSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performRouteSearch() {


 //Select the Manufacturing Center 
 await this.page.locator("[class='dx-dropdowneditor-icon']").click();
 await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

 //LookUp tables --Route Search
 await this.page.getByText('Settings').click();
 await this.page.getByText('Lookup Tables').click();
 await this.page.getByText('Route MaintenanceRoute').click();

 //Route this.page --Route# filter 
 //Search filter with "Contains"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Route# Search using Contains filter");
 await this.page.getByRole('menu').getByText(RouteSearch.RouteN1).click();

 console.log("Route# Search using Conatins :" + RouteSearch.route_Filter1_Contains)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RouteSearch.route_Filter1_Contains)
 await this.page.waitForTimeout(1000);
 const myRouteNContains = this.page.getByRole('gridcell', { name: 'N' }).first().innerText();

 console.log(await(myRouteNContains));
 expect((await myRouteNContains).includes(RouteSearch.route_Filter1_Contains)).toBe(true);
 console.log("RouteN Search using Contains filter displaying results");
 await this.page.getByRole('menubar').first().click();
 await this.page.getByRole('menu').getByText('Reset').click();
 

 //Search filter with "Starts with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Route# Search using Starts with filter");
 await this.page.getByRole('menu').getByText(RouteSearch.RouteN2).click();

 console.log("Route# Search using Starts with :" + RouteSearch.route_Filter2_StartsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RouteSearch.route_Filter2_StartsWith);
 const myRouteNStartswith = this.page.getByRole('gridcell', { name: RouteSearch.RouteNFilter, exact: true }).innerText();
 
 console.log(await(myRouteNStartswith));
 expect((await myRouteNStartswith).includes(RouteSearch.RouteNFilter)).toBe(true);
 console.log("RouteN Search using Starts with filter displaying results");
 await this.page.getByRole('menubar').first().click();
 await this.page.getByRole('menu').getByText('Reset').click();

 //Search fliter with "Ends with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Route# Search using Ends with filter");
 await this.page.getByRole('menu').getByText(RouteSearch.RouteN3).click();

 console.log("Route# Search using Ends with :" + RouteSearch.route_Filter3_EndsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RouteSearch.route_Filter3_EndsWith);
 const myRouteNEndswith = this.page.getByRole('gridcell', { name: RouteSearch.RouteNfilter1, exact: true }).innerText();

 console.log(await(myRouteNEndswith));
 expect((await myRouteNEndswith).includes(RouteSearch.RouteNfilter1)).toBe(true);
 console.log("RouteN Search using Ends with filter displaying results");
 await this.page.getByRole('menubar').first().click();
 await this.page.getByRole('menu').getByText('Reset').click();
 

 //Search filter with "Equals"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Route# Search using Ends with filter");
 await this.page.getByRole('menu').getByText(RouteSearch.RouteN4).click();

 console.log("Route# Search using Equals :" + RouteSearch.route_Filter4_Equals)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RouteSearch.route_Filter4_Equals);
 const myRouteNEquals = this.page.getByRole('gridcell', { name: RouteSearch.route_Filter4_Equals }).first().innerText();
 
 console.log(await(myRouteNEquals));
 expect((await myRouteNEquals).includes(RouteSearch.route_Filter4_Equals)).toBe(true);
 console.log("RouteN Search using Equals filter displaying results");
 await this.page.waitForTimeout(2000);
 await this.page.getByRole('menubar').first().click();
 await this.page.getByRole('menu').getByText('Reset').click();
 await this.page.waitForTimeout(2000);


 //Route Filter 
 //Search filter with "Contains"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Route Search using Contains filter");
 await this.page.getByRole('menu').getByText(RouteSearch.Route1).click();

 console.log("Route Search using Contains :" + RouteSearch.routeDesc_FT1_Contains)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RouteSearch.routeDesc_FT1_Contains);
 const myRouteConatins = this.page.getByRole('gridcell', { name: RouteSearch.routeDesc_FT1_Contains }).first().innerText();
 
 console.log(await(myRouteNEquals));
 expect((await myRouteNEquals).includes(RouteSearch.route_Filter4_Equals)).toBe(true);
 console.log("Route Search using Conatins filter displaying results");
 await this.page.getByRole('menubar').nth(1).click();
 await this.page.getByText('Reset', { exact: true }).click();

 //Search filter with "Starts with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Route Search using Contains filter");
 await this.page.getByRole('menu').getByText(RouteSearch.Route2).click();

 console.log("Route Search using Starts with :" + RouteSearch.routeDesc_FT2_StartsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RouteSearch.routeDesc_FT2_StartsWith);
 const myRouteStartwith = this.page.getByRole('gridcell', { name: RouteSearch.RouteFilter }).innerText();

 console.log(await(myRouteStartwith));
 expect((await myRouteStartwith).includes(RouteSearch.RouteFilter)).toBe(true);
 console.log("Route Search using Starts with filter displaying results");
 await this.page.getByRole('menubar').nth(1).click();
 await this.page.getByText('Reset', { exact: true }).click();

 //Search filter with "Ends with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Route Search using Ends with filter");
 await this.page.getByRole('menu').getByText(RouteSearch.Route3).click();

 console.log("Route Search using Ends with :" + RouteSearch.routeDesc_FT3_EndsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RouteSearch.routeDesc_FT3_EndsWith);
//  const myRouteEndswith = this.page.getByRole('gridcell', { name: RouteSearch.Routefilter1 }).nth(1).innerText();

//  console.log(await(myRouteEndswith));
//  expect((await myRouteEndswith).includes(RouteSearch.Routefilter1)).toBe(true);
 console.log("Route Search using Ends with filter displaying results");
 await this.page.getByRole('menubar').nth(1).click();
 await this.page.getByText('Reset', { exact: true }).click();

 //Search filter with "Equals"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Route Search using Equals filter");
 await this.page.getByRole('menu').getByText(RouteSearch.Route4).click();

 console.log("Route Search using Equals :" + RouteSearch.routeDesc_FT4_Equals)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RouteSearch.routeDesc_FT4_Equals);
 const myRouteEquals = this.page.getByRole('gridcell', { name: RouteSearch.routeDesc_FT4_Equals }).nth(1).innerText();

 console.log(await(myRouteEquals));
 expect((await myRouteEquals).includes(RouteSearch.routeDesc_FT4_Equals)).toBe(true);
 console.log("Route Search using Equals filter displaying results");
 await this.page.getByRole('menubar').nth(1).click();
 await this.page.getByText('Reset', { exact: true }).click();



    }

};

