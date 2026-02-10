import { Page, expect } from '@playwright/test';
import { GlobalVendorSearch } from '../TestData/GlobalVendorSearchJData';


export class GlobalVendorSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performGlobalVendorSearch() {

 //Select the Manufacturing Center 
 await this.page.locator("[class='dx-dropdowneditor-icon']").click();
 await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

 //LookUp-tables search
 await this.page.getByText('Settings').click();
 await this.page.getByText('Lookup Tables').click();
 await this.page.getByText('Global Vendor MaintenanceGlobal Vendor Maintenance').click();
 await this.page.waitForTimeout(3000);


 //Global Vendor this.page --Vendor Code filter
 //Search filter with "Contains"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Global Vendor Search using Contains filter");
 //await this.page.getByRole('menu').getByText(GlobalVendorSearch.VendorCode1).click();
 await this.page.getByText(GlobalVendorSearch.VendorCode1).click();
 await this.page.waitForTimeout(2000);

 console.log("Global Vendor Search using Conatins :" + GlobalVendorSearch.vendorCodeFilter1_Contains)
 //await this.page.getByLabel('Filter cell').nth(1).fill(GlobalVendorSearch.vendorCodeFilter1_Contains);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().click();
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(GlobalVendorSearch.vendorCodeFilter1_Contains);
 await this.page.waitForTimeout(1000);
 const myVendorCodeContains = this.page.getByRole('gridcell', { name: GlobalVendorSearch.vendorCodeFilter1_Contains }).first().innerText();

 console.log(await(myVendorCodeContains));
 expect((await myVendorCodeContains).includes(GlobalVendorSearch.vendorCodeFilter1_Contains)).toBe(true);
 console.log("Global Vendor Search using Contains filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();
 //await this.page.getByRole('menu').getByText('Reset').click();

 //Search filter with "Starts with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Global Vendor Search using Starts with filter");
 //await page.getByRole('menu').getByText('Starts with').click();
 await this.page.getByRole('menu').getByText(GlobalVendorSearch.VendorCode2).click();
 //await this.page.getByText(GlobalVendorSearch.VendorCode2).click();

 console.log("Global Vendor Search using Starts with :" + GlobalVendorSearch.vendorCodeFilter2_StartsWith)
 //await this.page.getByLabel('Filter cell').nth(1).fill(GlobalVendorSearch.vendorCodeFilter2_StartsWith);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(GlobalVendorSearch.vendorCodeFilter2_StartsWith);
 const myVendorCodeStartswith = this.page.getByRole('gridcell', { name: GlobalVendorSearch.vendorCodeFilter2_StartsWith, exact: true }).innerText();

 console.log(await(myVendorCodeStartswith));
 expect((await myVendorCodeStartswith).includes(GlobalVendorSearch.vendorCodeFilter2_StartsWith)).toBe(true);
 console.log("Global Vendor Search using Starts with filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();
 //await this.page.getByRole('menu').getByText('Reset').click();

 //Search filter with "Ends with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Global Vendor Search using Ends with filter");
 await this.page.getByRole('menu').getByText(GlobalVendorSearch.VendorCode3).click();
 //await this.page.getByText(GlobalVendorSearch.VendorCode3).click();

 console.log("Global Vendor Search using Ends with :" + GlobalVendorSearch.vendorCodeFilter3_EndsWith)
 //await this.page.getByLabel('Filter cell').nth(1).fill(GlobalVendorSearch.vendorCodeFilter3_EndsWith);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(GlobalVendorSearch.vendorCodeFilter3_EndsWith);
 const myVendorCodeEndswith = this.page.getByRole('gridcell', { name: GlobalVendorSearch.VendorCodeFeild, exact: true }).first().innerText();

 console.log(await(myVendorCodeEndswith));
 expect((await myVendorCodeEndswith).includes(GlobalVendorSearch.VendorCodeFeild)).toBe(true);
 console.log("Global Vendor Search using Ends with filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();
 //await this.page.getByRole('menu').getByText('Reset').click();

 //Search filter with "Equals"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').first().click();
 console.log("Global Vendor Search using Ends with filter");
 await this.page.getByRole('menu').getByText(GlobalVendorSearch.VendorCode4).click();
 //await this.page.getByText(GlobalVendorSearch.VendorCode4).click();

 console.log("Global Vendor Search using Equals :" + GlobalVendorSearch.vendorCodeFilter4_Equals)
 //await this.page.getByLabel('Filter cell').nth(1).fill(GlobalVendorSearch.vendorCodeFilter4_Equals);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(GlobalVendorSearch.vendorCodeFilter4_Equals);
 const myVendorCodeEquals = this.page.getByRole('gridcell', { name: GlobalVendorSearch.vendorCodeFilter4_Equals }).innerText();

 console.log(await(myVendorCodeEquals));
 expect((await myVendorCodeEquals).includes(GlobalVendorSearch.vendorCodeFilter4_Equals)).toBe(true);
 console.log("Global Vendor Search using Equals filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();
 //await this.page.getByRole('menu').getByText('Reset').click();


 //Global Vendor this.page --Vendor Name filter 
 //Search filter with "Contains"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Vendor Name Search using Contains filter");
 await this.page.getByText(GlobalVendorSearch.VendorName1).click();

 console.log("Vendor Name Search using Conatins :" + GlobalVendorSearch.vendorName_FT1_Contains);
 await this.page.waitForTimeout(1000);
 //await this.page.getByLabel('Filter cell').nth(3).fill(GlobalVendorSearch.vendorName_FT1_Contains);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(GlobalVendorSearch.vendorName_FT1_Contains);
 const myVendorNameContains = this.page.getByRole('gridcell', { name: GlobalVendorSearch.vendorName_FT1_Contains  }).innerText();
 //const myVendorNameContains =  this.page.getByRole('gridcell', { name: 'ChemCentral' }).innerText();

 console.log(await(myVendorNameContains));
 expect((await myVendorNameContains).includes(GlobalVendorSearch.vendorName_FT1_Contains)).toBe(true);
 console.log("Global Name Search using Equals filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();
 

 //Search filter with "Starts with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Vendor Name Search using Starts with filter");
 await this.page.getByText(GlobalVendorSearch.VendorName2).click();

 console.log("Vendor Name Search using Starts with :" + GlobalVendorSearch.vendorName_FT2_StartsWith);
 //await this.page.getByLabel('Filter cell').nth(3).fill(GlobalVendorSearch.vendorName_FT2_StartsWith);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(GlobalVendorSearch.vendorName_FT2_StartsWith);
 const myVendorNameStartwith = this.page.getByRole('gridcell', { name: GlobalVendorSearch.VendorNameFeild }).innerText();

 console.log(await(myVendorNameStartwith));
 expect((await myVendorNameStartwith).includes(GlobalVendorSearch.VendorNameFeild)).toBe(true);
 console.log("Global Name Search using Starts with filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Ends with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Vendor Name Search using Starts with filter");
 await this.page.getByText(GlobalVendorSearch.VendorName3).click();

 console.log("Vendor Name Search using Ends with :" + GlobalVendorSearch.vendorName_FT3_EndsWith);
 //await this.page.getByLabel('Filter cell').nth(3).fill(GlobalVendorSearch.vendorName_FT3_EndsWith);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(GlobalVendorSearch.vendorName_FT3_EndsWith);
 const myVendorNameEndswith = this.page.getByRole('gridcell', { name: 'EMERALD', exact: true }).innerText();

 console.log(await(myVendorNameEndswith));
//  expect((await myVendorNameEndswith).includes(GlobalVendorSearch.VendorNameFeild1)).toBe(true);
 console.log("Global Name Search using Ends with filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Equals"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole('menubar').nth(1).click();
 console.log("Vendor Name Search using Starts with filter");
 await this.page.getByText(GlobalVendorSearch.VendorName4).click();

 console.log("Vendor Name Search using Ends with :" + GlobalVendorSearch.vendorName_FT4_Equals);
 await this.page.waitForTimeout(1000);
 //await this.page.getByLabel('Filter cell').nth(3).fill(GlobalVendorSearch.vendorName_FT4_Equals);
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(GlobalVendorSearch.vendorName_FT4_Equals);
 const myVendorNameEquals = this.page.getByRole('gridcell', { name: GlobalVendorSearch.vendorName_FT4_Equals }).nth(1).innerText();

 console.log(await(myVendorNameEquals));
 expect((await myVendorNameEquals).includes(GlobalVendorSearch.vendorName_FT4_Equals)).toBe(true);
 console.log("Global Name Search using Equals filter displaying results");
 await this.page.waitForTimeout(1000);
 await this.page.getByLabel('Reset State').click();

    }

};
