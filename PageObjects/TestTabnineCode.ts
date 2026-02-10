import { Page, expect } from "@playwright/test";
import { CustomerSearch } from "../TestData/CustomerSearchJData";

const validSearchTypes = ['CustomerNumber', 'CustomerName'];



export class TabnineSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performCustomerSearch(searchTypes: string[]) {
        // Select the Manufacturing Center 
        await this.page.locator("[class='dx-dropdowneditor-icon']").click();
        await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

        // Customer Page
        await this.page.getByText("Customers").click();

    //     for (const searchType of searchTypes) {
    //         switch (searchType) {
    //             case 'CustomerNumber':
    //                 await this.performCustomerNumberSearch();
    //                 break;
    //             case 'CustomerName':
    //                 await this.performCustomerNameSearch();
    //                 break;
    //             default:
    //                 console.log(`Unsupported search type: ${searchType}`);
    //         }
    //     }
    // }


    //const validSearchTypes = ['CustomerNumber', 'CustomerName'];
//async performCustomerSearchs(searchTypes: string[]) {
    // Select the Manufacturing Center 
    // await this.page.locator("[class='dx-dropdowneditor-icon']").click();
    // await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

    // // Customer Page
    // await this.page.getByText("Customers").click();

    const validSearchTypes = ['CustomerNumber', 'CustomerName'];
    for (const searchType of searchTypes) {
        if (!validSearchTypes.includes(searchType)) {
            console.log(`Unsupported search type: ${searchType}`);
            continue;  // Skip unsupported search type
        }
        switch (searchType) {
            case 'CustomerNumber':
                await this.performCustomerNumberSearch();
                break;
            case 'CustomerName':
                await this.performCustomerNameSearch();
                break;
        }
    }
}



    

    private async performCustomerNumberSearch() {
        const searchOperations = [
            { name: 'Contains', value: CustomerSearch.CustNumber1, filter: CustomerSearch.customerNumberFilter1_Contains },
            { name: 'Starts with', value: CustomerSearch.CustNumber2, filter: CustomerSearch.customerNumberFilter2_StartsWith },
            { name: 'Ends with', value: CustomerSearch.CustNumber3, filter: CustomerSearch.customerNumberFilter3_EndsWith },
            { name: 'Equals', value: CustomerSearch.CustNumber4, filter: CustomerSearch.customerNumberFilter4_Equals }
        ];

        for (const operation of searchOperations) {
            await this.page.waitForTimeout(1000);
            await this.page.hover("(//I[@class='dx-icon dx-icon-filter-operation-default'])[1]");
            console.log(`Customer Search using ${operation.name} filter`);
            await this.page.getByText(operation.value).click();

            console.log(`Customer Search using ${operation.name} : ${operation.filter}`);
            await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(operation.filter);
            const result = await this.page.getByRole('gridcell', { name: operation.filter }).innerText();

            console.log(await result);
            expect(result).toContain(operation.filter);
            await this.page.getByText("Customer List").click();
            await this.page.getByLabel('Reset State').click();
        }
    }

    private async performCustomerNameSearch() {
        const searchOperations = [
            { name: 'Contains', value: CustomerSearch.CustName1, filter: CustomerSearch.customerNameFT1_Contains },
            { name: 'Starts with', value: CustomerSearch.CustName2, filter: CustomerSearch.customerNameFT2_StartsWith },
            { name: 'Ends with', value: CustomerSearch.CustName3, filter: CustomerSearch.customerNameFT3_EndWith },
            { name: 'Equals', value: CustomerSearch.CustName4, filter: CustomerSearch.customerNameFT4_Equals }
        ];

        for (const operation of searchOperations) {
            await this.page.waitForTimeout(1000);
            await this.page.getByRole("menubar").nth(1).click();
            console.log(`Customer Name Search using ${operation.name} filter`);
            await this.page.getByRole('menu').getByText(operation.value).click();

            console.log(`Customer Name Search using ${operation.name} : ${operation.filter}`);
            await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(operation.filter);
            const result = await this.page.getByRole('gridcell', { name: operation.filter }).innerText();

            console.log(await result);
            expect(result).toContain(operation.filter);
            await this.page.getByLabel('Reset State').click();
        }
    }
}