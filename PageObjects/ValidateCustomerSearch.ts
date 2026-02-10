import { Page,expect } from "@playwright/test";
import { CustomerSearch } from "../TestData/CustomerSearchJData";


export class CustomerSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performCustomerSearch() {



 //Select the Manufacturing Center 
 await this.page.locator("[class='dx-dropdowneditor-icon']").click();
 await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

 //Customer Page
 await this.page.getByText("Customers").click();

 await this.page.waitForTimeout(1000);
 await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
 console.log("Customer Search using Contains filter");
 await this.page.getByText(CustomerSearch.CustNumber1).click();

 console.log("Customer Search using Conatins :" + CustomerSearch.customerNumberFilter1_Contains)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CustomerSearch.customerNumberFilter1_Contains);
 const myCustNumberContains = this.page.getByRole('gridcell', { name: CustomerSearch.customerNumberFilter1_Contains }).innerText();

 console.log(await(myCustNumberContains));
 expect((await myCustNumberContains).includes(CustomerSearch.customerNumberFilter1_Contains)).toBe(true);
 await this.page.getByText("Customer List").click();
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Starts with"
 await this.page.waitForTimeout(1000);
 await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
 console.log("Customer Search using Starts with filter");
 await this.page.getByText(CustomerSearch.CustNumber2).click();

 console.log("Customer Search using Starts with :" + CustomerSearch.customerNumberFilter2_StartsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CustomerSearch.customerNumberFilter2_StartsWith);
 const myCustNumberStartswith = this.page.getByRole('gridcell', { name: CustomerSearch.CustomerNumberFilter }).innerText();

 console.log(await(myCustNumberStartswith));
 expect((await myCustNumberStartswith).includes(CustomerSearch.CustomerNumberFilter)).toBe(true);
 await this.page.getByText("Customer List").click();
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Ends with"
 await this.page.waitForTimeout(1000);
 await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
 console.log("Customer Search using Ends with filter");
 await this.page.getByText(CustomerSearch.CustNumber3).click();

 console.log("Customer Search using Ends with :" + CustomerSearch.customerNumberFilter3_EndsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CustomerSearch.customerNumberFilter3_EndsWith);
 const myCustNumberEndswith = this.page.getByRole('gridcell', { name: CustomerSearch.CustomerNumberFilter1 }).innerText();

 console.log(await(myCustNumberEndswith));
 expect((await myCustNumberEndswith).includes(CustomerSearch.CustomerNumberFilter1)).toBe(true);
 await this.page.getByText("Customer List").click();
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Equals"
 await this.page.waitForTimeout(1000);
 await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
 console.log("Customer Search using Ends with filter");
 await this.page.getByText(CustomerSearch.CustNumber4).click();

 console.log("Customer Search using Equals :" + CustomerSearch.customerNumberFilter4_Equals)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CustomerSearch.customerNumberFilter4_Equals);
 const myCustNumberEquals = this.page.getByRole('gridcell', { name: CustomerSearch.customerNumberFilter4_Equals }).innerText();

 console.log(await(myCustNumberEquals));
 expect((await myCustNumberEquals).includes(CustomerSearch.customerNumberFilter4_Equals)).toBe(true);
 await this.page.getByText("Customer List").click();
 await this.page.getByLabel('Reset State').click();

//  //Search filter with "Does not equal"
//  await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
//  await this.page.getByText('Does not equal').click();
//  await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CustomerSearch.customerNumberFilter6_NotEquals);
//  await this.page.getByRole('gridcell', { name: '60021' }).click();
//  console.log(await this.page.getByRole('heading', { name: 'AAA Car Care Powell' }));
//  expect(this.page.getByRole('heading', { name: 'AAA Car Care Powell' })).toContainText('AAA Car Care Powell');
//  await this.page.getByRole('link', { name: 'Customer List' }).click();
//  await this.page.getByLabel('Reset State').click();

//  //Search filter with "Reset"
//  await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
//  await this.page.getByText('Reset', { exact: true }).click();





 //Customer this.page-- Customer Name search filer 
 //Search filter with "Contains"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole("menubar").nth(1).click();
 console.log("Customer Name Search using Conatins filter");
 await this.page.getByRole('menu').getByText(CustomerSearch.CustName1).click();

 console.log("Customer Name Search using Contains :" + CustomerSearch.customerNameFT1_Contains)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(CustomerSearch.customerNameFT1_Contains);
 const myCustNameConatins = this.page.getByRole('gridcell', { name: CustomerSearch.customerNameFT1_Contains }).innerText();

 console.log(await(myCustNameConatins))
 expect((await myCustNameConatins).includes(CustomerSearch.customerNameFT1_Contains)).toBe(true);
 
 await this.page.getByLabel('Reset State').click();

//  //Search filter with "Does not contain"
//  await this.page.getByRole("menubar").nth(1).click();
//  await this.page.getByRole('menu').getByText('Does not contain').click();
//  await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(CustomerSearch.customerNameFT2_NotContains);
//  await this.page.getByRole('gridcell', { name: 'Tones Brewing' }).click();
//  console.log(await this.page.getByRole('heading', { name: 'Tones Brewing' }));
//  expect(this.page.getByRole('heading', { name: 'Tones Brewing' })).toContainText('Tones Brewing')
//  
//  await this.page.getByLabel('Reset State').click();

 //Search filter with "Starts with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole("menubar").nth(1).click();
 console.log("Customer Name Search using Starts with filter");
 await this.page.getByRole('menu').getByText(CustomerSearch.CustName2).click();

 console.log("Customer Name Search using Starts with :" + CustomerSearch.customerNameFT2_StartsWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(CustomerSearch.customerNameFT2_StartsWith);
 const myCustNameStartswith = this.page.getByRole('gridcell', { name: CustomerSearch.CustomerNameFilter }).innerText();

 console.log(await(myCustNameStartswith))
 expect((await myCustNameStartswith).includes(CustomerSearch.CustomerNameFilter)).toBe(true);
 
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Ends with"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole("menubar").nth(1).click();
 console.log("Customer Name Search using Ends with filter");
 await this.page.getByRole('menu').getByText(CustomerSearch.CustName3).click();

 console.log("Customer Name Search using Ends with :" + CustomerSearch.customerNameFT3_EndWith)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(CustomerSearch.customerNameFT3_EndWith);
 const myCustNameEndswith = this.page.getByRole('gridcell', { name: CustomerSearch.CustomerNameFilter1 }).innerText();

 console.log(await(myCustNameEndswith))
 expect((await myCustNameEndswith).includes(CustomerSearch.CustomerNameFilter1)).toBe(true);
 
 await this.page.getByLabel('Reset State').click();

 //Search filter with "Equals"
 await this.page.waitForTimeout(1000);
 await this.page.getByRole("menubar").nth(1).click();
 console.log("Customer Name Search using Ends with filter");
 await this.page.getByRole('menu').getByText(CustomerSearch.CustName4).click();

 console.log("Customer Name Search using Starts with :" + CustomerSearch.customerNameFT4_Equals)
 await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(CustomerSearch.customerNameFT4_Equals);
 const myCustNameEquals = this.page.getByRole('gridcell', { name: CustomerSearch.customerNameFT4_Equals }).innerText();

 console.log(await(myCustNameEquals))
 expect((await myCustNameEquals).includes(CustomerSearch.customerNameFT4_Equals)).toBe(true);
 
 await this.page.getByLabel('Reset State').click();



 
    }

};

