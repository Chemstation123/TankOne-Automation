import { expect, Page } from '@playwright/test';
import { TruckSearch } from '../TestData/TruckSearchJData';


    export class TruckSearchPage {
        private page: Page;

        constructor(page: Page) {
            this.page = page;
        }

        async performUserSearch() {

    
     //Select the Manufacturing Center 
     await this.page.locator("[class='dx-dropdowneditor-icon']").click();
     await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

     //LookUp tables --Truck Search
     await this.page.getByText('Settings').click();
     await this.page.getByText('Lookup Tables').click();
     await this.page.getByText('Truck MaintenanceTruck').click();


     //Truck this.page --truck filter 
     //Search filter with "Contains"
     await this.page.waitForTimeout(1500);
     await this.page.getByRole('menubar').first().click();
     console.log("Truck Search using Contains filter on Truck ");
     await this.page.getByRole('menu').getByText(TruckSearch.TruckFilter1).click();

     console.log("Truck Search using Conatins :" + TruckSearch.truck_NumFilter1_Contains)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(TruckSearch.truck_NumFilter1_Contains);
     const myTruckContains = this.page.getByRole('gridcell', { name: TruckSearch.truck_NumFilter1_Contains }).innerText();

     console.log(await(myTruckContains));
     expect((await myTruckContains).includes(TruckSearch.truck_NumFilter1_Contains)).toBe(true);
     console.log("Truck Search using Contains filter displaying results correctly on Truck");
     await this.page.getByRole('menubar').first().click();
     await this.page.getByRole('menu').getByText('Reset').click();
    

    //  //Search filter with "Does not contain"
    //  await this.page.getByRole('menubar').first().click();
    //  await this.page.getByRole('menu').getByText('Does not contain').click();
    //  await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(TruckSearch.truck_NumFilter2_NotContains);
    //  await this.page.getByRole('gridcell', { name: '1' }).click();

     //Search filter with "Starts with--------------------------------------------------------------------------------------"

     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Truck Search using Starts with filter on Truck ");
     await this.page.getByRole('menu').getByText(TruckSearch.TruckFilter2).click();
     
     console.log("Truck Search using Starts with :" + TruckSearch.truck_NumFilter2_StartsWith);
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(TruckSearch.truck_NumFilter2_StartsWith);
     const myTruckStartwith = this.page.getByRole('gridcell', { name: TruckSearch.truck_NumFilter2_StartsWith1 }).innerText();

     console.log(await(myTruckStartwith));
     expect((await myTruckStartwith).includes(TruckSearch.truck_NumFilter2_StartsWith)).toBe(true);
     console.log("Truck Search using Starts with filter displaying results correctly on Truck")
     await this.page.getByRole('menubar').first().click();
     await this.page.getByRole('menu').getByText('Reset').click();


     //Search filter with "Ends with----------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Truck Search using Ends with filter on Truck ");
     await this.page.getByRole('menu').getByText(TruckSearch.TruckFilter3).click();

     console.log("Truck Search using Ends with :" + TruckSearch.truck_NumFilter3_EndsWith);
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(TruckSearch.truck_NumFilter3_EndsWith);
     const myTruckEndswith = this.page.getByRole('gridcell', { name: TruckSearch.truck_NumFilter3_EndsWith }).innerText();

     console.log(await(myTruckEndswith));
     expect((await myTruckEndswith).includes(TruckSearch.truck_NumFilter3_EndsWith)).toBe(true);
     console.log("Truck Search using Ends with filter displaying results correctly on Truck")
     await this.page.getByRole('menubar').first().click();
     await this.page.getByRole('menu').getByText('Reset').click();

     //Search filter with "Equals-------------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Truck Search using Equals filter on Truck ");
     await this.page.getByRole('menu').getByText(TruckSearch.TruckFilter4).click();

     console.log("Truck Search using Equals :" + TruckSearch.truck_NumFilter4_Equals)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(TruckSearch.truck_NumFilter4_Equals);
     const myTruckEquals = this.page.getByRole('gridcell', { name: TruckSearch.truck_NumFilter4_Equals }).innerText();

     console.log(await(myTruckEquals));
     expect((await myTruckEquals).includes(TruckSearch.truck_NumFilter4_Equals)).toBe(true);
     console.log("Truck Search using Equals filter displaying results correctly on Truck")
     await this.page.getByRole('menubar').first().click();
     await this.page.getByRole('menu').getByText('Reset').click();
     await this.page.waitForTimeout(1000);

    //  //Search filter with "Does not equal"
    //  await this.page.getByRole('menubar').first().click();
    //  await this.page.getByRole('menu').getByText('Does not equal').click();
    //  await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(TruckSearch.truck_NumFilter6_NotEquals);
    //  await this.page.waitForTimeout(1000);
    //  await this.page.getByRole('gridcell', { name: '2', exact: true }).click();

     //Search filter with "Reset"
    //  await this.page.getByRole('menubar').first().click();
    //  await this.page.getByRole('menu').getByText('Reset').click();



     //Capacity Gal filter 
     //Search filter with "Equals-------------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Capacity Gal Search using Equals filter");
     await this.page.getByRole('menu').getByText(TruckSearch.CGalFilter1).click();

     console.log("Capacity Gal Search using Equals :" + TruckSearch.capacity_GalFT1_Equals)
     await this.page.getByRole('spinbutton').first().fill(TruckSearch.capacity_GalFT1_Equals);
     await this.page.waitForTimeout(1000);
     const myGalEquals = this.page.getByRole('gridcell', { name: TruckSearch.capacity_GalFT1_Equals}).first().innerText();

     console.log(await(myGalEquals));
     expect((await myGalEquals).includes(TruckSearch.capacity_GalFT1_Equals)).toBe(true);
     console.log("Capacity Gal Search using Equals filter displaying results")
     await this.page.getByRole('menubar').nth(1).click();
     await this.page.getByRole('menu').getByText('Reset').click();


    //  //Search filter "Does not equal"
    //  await this.page.getByRole('menubar').nth(1).click();
    //  await this.page.getByRole('menu').getByText('Does not equal').click();
    //  await this.page.getByRole('spinbutton').first().fill(TruckSearch.capacity_GalFT2_DoesNotEqual);
    //  await this.page.waitForTimeout(1000);
    //  await this.page.getByRole('row', { name: '0 0 Carrie Kessler Edit Delete' }).getByRole('gridcell').nth(1).click();

     //Search filter "Less than---------------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Capacity Gal Search using Less than filter");
     await this.page.getByText('Less than', { exact: true }).click();

     console.log("Capacity Gal Search using Less than :" + TruckSearch.capacity_GalFT3_LessThan)
     await this.page.getByRole('spinbutton').first().fill(TruckSearch.capacity_GalFT3_LessThan);
     await this.page.waitForTimeout(1000);
     const myGalLessThan = this.page.getByRole('row', { name: TruckSearch.capacity_GalFT3_LessThan1 }).getByRole('gridcell').nth(1).innerText();

     console.log(await (myGalLessThan));
     //expect((await myGalLessThan).includes(TruckSearch.capacity_GalFT3_LessThan1)).toBe(true);
     console.log("Capacity Gal Search using Lass than filter displaying results")
     await this.page.getByRole('menubar').nth(1).click();
     await this.page.getByRole('menu').getByText('Reset').click();


     //Search filter "Greater than------------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Capacity Gal Search using Greater than filter");
     await this.page.getByText('Greater than', { exact: true }).click();

     console.log("Capacity Gal Search using Greater than :" + TruckSearch.capacity_GalFT4_GreaterThan)
     await this.page.getByRole('spinbutton').first().fill(TruckSearch.capacity_GalFT4_GreaterThan);
     await this.page.waitForTimeout(1000);
     const myGalGreaterThan = await this.page.getByRole('gridcell', { name: TruckSearch.capacity_GalFT4_GreaterThan1 }).innerText();

     console.log(await(myGalGreaterThan));
     //expect((await myGalGreaterThan).includes(TruckSearch.capacity_GalFT4_GreaterThan1)).toBe(true);
     console.log("Capacity Gal Search using Greater than filter displaying results")
     await this.page.getByRole('menubar').nth(1).click();
     await this.page.getByRole('menu').getByText('Reset').click();

     //Search filter "Less than or equal to----------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Capacity Gal Search using Less than or equal to filter");
     await this.page.getByRole('menu').getByText(TruckSearch.CGalFilter4).click();

     console.log("Capacity Gal Search using Less than or equal to :" + TruckSearch.capacity_GalFT5_LessThankOrEqualTo);
     await this.page.getByRole('spinbutton').first().fill(TruckSearch.capacity_GalFT5_LessThankOrEqualTo);
     await this.page.waitForTimeout(1000);
     const myGalLTorEqualto = this.page.getByRole('gridcell', { name: TruckSearch.capacity_GalFT5_LessThankOrEqualTo1 }).first().innerText();

     console.log(await(myGalLTorEqualto));
     //expect((await myGalLTorEqualto).includes(TruckSearch.capacity_GalFT5_LessThankOrEqualTo1)).toBe(true);
     console.log("Capacity Gal Search using Less than or equal to filter displaying results")
     await this.page.getByRole('menubar').nth(1).click();
     await this.page.getByRole('menu').getByText('Reset').click();


     //Search filter "Greater than or equal to---------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Capacity Gal Search using Greater than or equal to filter");
     await this.page.getByRole('menu').getByText(TruckSearch.CGalFilter5).click();

     console.log("Capacity Gal Search using Greater than or equal to :" + TruckSearch.capacity_GalFT6_GreaterThanOrEqualTo)
     await this.page.getByRole('spinbutton').first().fill(TruckSearch.capacity_GalFT6_GreaterThanOrEqualTo);
     await this.page.waitForTimeout(1000);
     const myGalGTorEqualTo = await this.page.getByRole('gridcell', { name: '22000' }).first().innerText();

     console.log(await(myGalGTorEqualTo));
     //expect((await myGalGTorEqualTo).includes(TruckSearch.capacity_GalFT6_GreaterThanOrEqualTo2)).toBe(true);
     console.log("Capacity Gal Search using Greater than or equal to displaying results")
     await this.page.getByRole('menubar').nth(1).click();
     await this.page.getByRole('menu').getByText('Reset').click();

    //  //Search filter "Between"
    //  await this.page.getByRole('menubar').nth(1).click();
    //  await this.page.getByRole('menu').getByText('Between').click();
    //  await this.page.getByPlaceholder('Start').click();
    //  await this.page.getByPlaceholder('Start').fill(TruckSearch.capacity_GalFT7_BetweenStart);
    //  await this.page.getByPlaceholder('End').click();
    //  await this.page.getByPlaceholder('End').fill(TruckSearch.capacity_GalFT8_BetweenEnd);
    //  await this.page.waitForTimeout(1000);
    //  await this.page.getByRole('gridcell', { name: '22000' }).nth(2).click();

    //  //Search filter "Reset"
    //  await this.page.getByRole('menubar').nth(1).click();
    //  await this.page.getByRole('menu').getByText('Reset').click();






     


    







        }
    };
