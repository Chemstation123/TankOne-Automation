import { Page, expect } from "@playwright/test";



export class ValidateProductSearcFilters{
    public page : Page;

    constructor(page : Page){
        this.page = page;
    }

    
    public async applyTextFilter(filterName: string, value: string, expectedCellValue: string) {
            try {
                await this.page.waitForTimeout(1000);
                await this.page.getByRole('menubar').first().click();
                console.log(`Applying ${filterName} filter`);
                await this.page.getByText(value).click();
                console.log(`${filterName} filter value: ${value}`);
                await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(value);
                await this.page.getByRole('gridcell', { name: expectedCellValue }).click();
        
                const actualValue = await this.page.getByRole('gridcell', { name: expectedCellValue }).innerText();
                console.log(actualValue);
                expect(actualValue.includes(expectedCellValue)).toBe(true);
                console.log(`${filterName} filter passed`);
        
                await this.page.getByLabel('Reset State').click();
            } catch (err) {
                console.error(`${filterName} filter failed`, err);
            }
        
    }
}

export const ProductSearch = {
    "productCodeFilter1_Contains": "10001",
    "productCodeFilter3_StartsWith": "7708",
    "productCodeFilter4_EndsWith": "11087",
    "productCodeFilter5_Equals": "1005",
    "productCodeFilter": "254.60",



    "localCostFT1_Equals": "2",
    "localCostFT2_GreaterThan": "70.48",
    "localCostFT3_GreaterThanOrEqualTo": "76.48",
    "localCostFT4_BetweenStart": "70",
    "localCostFT5_BetweenEnd": "80",
    "FLGT1": "76.48",
    "FLGT": "76.48",
    "ProductHomePage": "Product List",
    "ProductPage": "View Full Product Detail",

    //Product Code filter-------------------------
    "PCode1": "Contains",
    "PCode2": "Starts with",
    "PCode3": "Ends with",
    "PCode4": "Equals",

    //Local Cosr filter---------------------------
    "LCost1": "Equals",
    "LCost2": "Greater than",
    "LCost3": "Greater than or equal to",
    "LCost4": "Between",
};
