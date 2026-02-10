import { Page, expect } from "@playwright/test";
import { PO_Number_CC } from "../TestData_Dev/PONumberColumnChooserJDATA";



export class PONumberColumnChooserDHPage {
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }


    async performPONumberColumnChooser ()

    {
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Search...', { exact: true }).waitFor({ state: 'visible' });
        await this.page.getByPlaceholder('Search...', { exact: true }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').fill(PO_Number_CC.Customer_Name);
        await this.page.getByRole('gridcell', { name: PO_Number_CC.Customer_Name }).waitFor({ state: 'visible' });
        await this.page.getByRole('gridcell', { name: PO_Number_CC.Customer_Name }).click();
        // await this.page.waitForTimeout(1000);
        await this.page.getByText('Delivery HistoryDelivery').waitFor({ state: 'visible' });
        await this.page.getByText('Delivery HistoryDelivery').click();
        // await this.page.waitForTimeout(2000);
        await this.page.getByLabel('Column Chooser').waitFor({ state: 'visible' });
        await this.page.getByLabel('Column Chooser').click();
        await this.page.getByText('Po Number').click();
    
        const  poNumber = await this.page.getByText('Po Number');

        //Locating the grouping area where you to drop 
        const groupingArea = await this.page.getByText('Drag a column header here to');
        
        //perform drag and drop
        await poNumber.dragTo(groupingArea);
        // await this.page.waitForTimeout(1000);

        await this.page.locator("//i[@class='dx-icon dx-icon-revert']").waitFor({ state: 'visible' });
        await this.page.locator("//i[@class='dx-icon dx-icon-revert']").click();

        await this.page.getByRole('button', { name: 'Column Chooser' }).click();
        await this.page.getByLabel('Po Number').getByText('Po Number').click();

        //Locating the grouping PO Number option to the table
        const tablegroupArea = this.page.locator("//td[@role='columnheader'][contains(.,'Product')]");

        //perform drag and drop option
        await  this.page.getByLabel('Po Number').getByText('Po Number').click();
        const poNumber1 = this.page.getByLabel('Po Number').getByText('Po Number');
        await poNumber1.dragTo(tablegroupArea);
        // await this.page.waitForTimeout(3000);
        await this.page.locator("//i[@class='dx-icon dx-icon-revert']").waitFor({ state: 'visible' });
        await this.page.locator("//i[@class='dx-icon dx-icon-revert']").click();




    

       
    }
}