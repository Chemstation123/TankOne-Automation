import { expect, Page } from '@playwright/test';
import { ProductSearch } from "../TestData/ProductsSearchJData";



    export class ProductsSearchPage {
        private page: Page;

        constructor(page: Page) {
            this.page = page;
        }

        async performProductSearch() {
    
     //Select the Manufacturing Center 
     await this.page.locator("[class='dx-dropdowneditor-icon']").click();
     await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

     //Product Search this.page
     await this.page.getByText('Products').click();
     await this.page.getByText('Products List').click();

     //Search filter with "Contains"
try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Product Search using Contains filter");
     await this.page.getByText(ProductSearch.PCode1).click();

     console.log("Products Search using Conatins :" + ProductSearch.productCodeFilter1_Contains)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(ProductSearch.productCodeFilter1_Contains);
     await this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter1_Contains }).click();
     const myPCodeConatins = this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter1_Contains}).innerText();

     console.log(await(myPCodeConatins));
     expect((await myPCodeConatins).includes(ProductSearch.productCodeFilter1_Contains)).toBe(true);
     console.log("Product Search using Contains filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Contains Filter Passed");
} catch (err) {
    console.error("Contains filter failed" , err);
}

     //Search filter with "Starts with"

try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Product Search using Starts with filter");
     await this.page.getByText(ProductSearch.PCode2).click();

     console.log("Products Search using Starts with :" + ProductSearch.productCodeFilter3_StartsWith)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(ProductSearch.productCodeFilter3_StartsWith);
     await this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter3_StartsWith }).click();
     const myPCodeStartswith = this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter3_StartsWith }).innerText();

     console.log(await(myPCodeStartswith));
     expect((await myPCodeStartswith).includes(ProductSearch.productCodeFilter3_StartsWith)).toBe(true);
     console.log("Product Search using Starts with filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Start filter passed");
} catch (err) {
    console.error("Starts with filter failed" , err);
}

     //Search filter with "Ends with"

try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Product Search using Ends with filter");
     await this.page.getByText(ProductSearch.PCode3).click();

     console.log("Products Search using Ends with :" + ProductSearch.productCodeFilter4_EndsWith)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(ProductSearch.productCodeFilter4_EndsWith);
     await this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter4_EndsWith }).click();
     const myPCodeEndswith = this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter4_EndsWith }).innerText();

     console.log(await(myPCodeEndswith));
     expect((await myPCodeEndswith).includes(ProductSearch.productCodeFilter4_EndsWith)).toBe(true);
     console.log("Product Search using Ends with filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Ends with filter passed");
} catch (err) {
    console.error("Ends with filter failed" , err);
}


     //Search filter with "Equals"
try{
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("Product Search using Equals filter");
     await this.page.getByText(ProductSearch.PCode4).click();

     console.log("Products Search using Equals :" + ProductSearch.productCodeFilter5_Equals)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(ProductSearch.productCodeFilter5_Equals);
     await this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter5_Equals }).click();
     const myPCodeEquals = this.page.getByRole('gridcell', { name: ProductSearch.productCodeFilter5_Equals }).innerText();

     console.log(await(myPCodeEquals));
     expect((await myPCodeEquals).includes(ProductSearch.productCodeFilter5_Equals)).toBe(true);
     console.log("Product Search using Equals filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Equals filter passed");
} catch (err) {
    console.error("Equals filter failed" , err);
}

try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Local Cost Search using Equals filter");
     await this.page.getByRole('menu').getByText(ProductSearch.LCost1).click();

     console.log("Local Cost Search using Equals :" + ProductSearch.localCostFT1_Equals)
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('spinbutton', { name: 'Filter cell' }).first().fill(ProductSearch.localCostFT1_Equals);
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('row', { name: ProductSearch.localCostFT1_Equals }).getByRole('gridcell').nth(1).click();
     const myLCodeEquals = this.page.getByRole('row', { name: ProductSearch.localCostFT1_Equals }).getByRole('gridcell').nth(1).innerText();
     await this.page.waitForTimeout(1000);

     console.log(await(myLCodeEquals));
     expect((await myLCodeEquals).includes(ProductSearch.localCostFT1_Equals)).toBe(true);
     console.log("Local Cost Search using Equals filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Equals filter passed");
} catch (err) {
    console.error("Equals filter failed" , err);
}

try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Local Cost Search using Greater than filter");   
     await this.page.getByRole('menu').getByText(ProductSearch.LCost2, { exact: true }).click();

     console.log("Local Cost Search using Greater than :" + ProductSearch.localCostFT2_GreaterThan)
     await this.page.getByRole('spinbutton', { name: 'Filter cell' }).first().fill(ProductSearch.localCostFT2_GreaterThan);
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('gridcell', { name: ProductSearch.FLGT }).click();
     const myLCostGreaterthan = this.page.getByRole('gridcell', { name: ProductSearch.FLGT }).innerText();


     console.log(await(myLCostGreaterthan));
     expect((await myLCostGreaterthan).includes(ProductSearch.FLGT)).toBe(true);
     console.log("Local Cost Search using Equals filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Greater than filter passed");
} catch (err) {
    console.error("Greater than filter failed" , err);
}

try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Local Cost Search using Greater than or equal to filter"); 
     await this.page.getByRole('menu').getByText(ProductSearch.LCost3).click();

     await this.page.waitForTimeout(1000);
     console.log("Local Cost Search using Greater than or equal to :" + ProductSearch.localCostFT3_GreaterThanOrEqualTo)
     await this.page.getByRole('spinbutton', { name: 'Filter cell' }).first().fill(ProductSearch.localCostFT3_GreaterThanOrEqualTo);
     await this.page.getByRole('gridcell', { name: ProductSearch.FLGT }).click();
     const myLCostGTorEqualto = this.page.getByRole('gridcell', { name: ProductSearch.FLGT }).innerText();


     console.log(await(myLCostGTorEqualto));
     expect((await myLCostGTorEqualto).includes(ProductSearch.FLGT)).toBe(true);
     console.log("Local Cost Search using Equals filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     await this.page.waitForTimeout(1000);
     console.log("Greater than or equal to filter passed");
} catch (err) {
    console.error("Greater than or equal to filter failed" , err);
}

try {
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("Local Cost Search using Between filter"); 
     await this.page.getByRole('menu').getByText(ProductSearch.LCost4).click();

     await this.page.waitForTimeout(1000);
     await this.page.getByPlaceholder('Start').fill(ProductSearch.localCostFT4_BetweenStart);
     await this.page.getByPlaceholder('End').click();
     await this.page.getByPlaceholder('End').fill(ProductSearch.localCostFT5_BetweenEnd);
     await this.page.getByRole('gridcell', { name: ProductSearch.FLGT1 }).click();
     const myLCostBetween = this.page.getByRole('gridcell', { name: ProductSearch.FLGT1 }).innerText();


     console.log(await(myLCostBetween));
     expect((await myLCostBetween).includes(ProductSearch.FLGT1)).toBe(true);
     console.log("Local Cost Search using Equals filter displaying results");
     await this.page.getByLabel(ProductSearch.ProductPage).click();
     await this.page.getByRole('link', { name: ProductSearch.ProductHomePage }).click();
     await this.page.getByLabel('Reset State').click();
     console.log("Between filter passed successfully");
} catch (err) {
    console.error("Between filter failed" , err);
}

        }

    };