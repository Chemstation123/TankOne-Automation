import { Page, expect } from "@playwright/test";
import { EquipmentSearch } from "../TestData/EquipmentSearchJData";


export class EquipmentSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performEquipmentSearch() {

        await this.page.getByText('Settings').click();
        await this.page.getByText('Lookup Tables').click();

        //Equipment Page filter 
        await this.page.getByText('Equipment MaintenanceEquipment Maintenance').click();

        //Equipment Code Search filter with Contains
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        console.log("Equipment Search using Contains filter ");
        await this.page.getByText(EquipmentSearch.EquipmentCode1).click();
        console.log("Truck Search using Conatins :" + EquipmentSearch.Code_Contains)
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(EquipmentSearch.Code_Contains);
        const myECodeContains = this.page.getByRole('gridcell', { name: EquipmentSearch.Code_Contains, exact: true }).innerText();
        
        console.log(await(myECodeContains));
        expect((await myECodeContains).includes(EquipmentSearch.Code_Contains)).toBe(true);
        console.log("Equipment Search using Contains filter displaying results");
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Reset').click();


        //Equipment Code Search filter with Starts with 
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        console.log("Equipment Search using Starts with filter ");
        await this.page.getByText(EquipmentSearch.EquipmentCode3).click();

        console.log("Equipment Search using Starts with :" + EquipmentSearch.Code_Startswith)
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(EquipmentSearch.Code_Startswith);
        const myECodeStartswith = this.page.getByRole('gridcell', { name: EquipmentSearch.Code_filter, exact: true }).innerText();
        
        console.log(await(myECodeStartswith));
        expect((await myECodeStartswith).includes(EquipmentSearch.Code_filter)).toBe(true);
        console.log("Equipment Search using Starts with filter displaying results");
        await this.page.getByRole('menubar').first().click();
        //await this.page.getByText('Reset', { exact: true }).click();
        await this.page.getByRole('menu').getByText('Reset').click();


        //Equipment Code Search filter with Ends with
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        console.log("Equipment Search using Ends with filter ");
        await this.page.getByText(EquipmentSearch.EquipmentCode4).click();

        console.log("Equipment Search using Conatins :" + EquipmentSearch.Code_Endswith)
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(EquipmentSearch.Code_Endswith);
        const myECodeEndswith = this.page.getByRole('gridcell', { name: EquipmentSearch.Code_filter1, exact: true }).innerText();
        
        console.log(await(myECodeEndswith));
        expect((await myECodeEndswith).includes(EquipmentSearch.Code_filter1)).toBe(true);
        console.log("Equipment Search using Ends with filter displaying results");
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Reset').click();


        //Equipment Code Search filter with Equals
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        console.log("Equipment Search using Equals filter ");
        await this.page.getByText(EquipmentSearch.EquipmentCode5).click();

        console.log("Equipment Search using Equals :" + EquipmentSearch.Code_Equals)
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(EquipmentSearch.Code_Equals);
        const myECodeEquals = this.page.getByRole('gridcell', { name: EquipmentSearch.Code_Equals, exact: true }).innerText();
        
        console.log(await(myECodeEquals));
        expect((await myECodeEquals).includes(EquipmentSearch.Code_Equals)).toBe(true);
        console.log("Equipment Search using Equals filter displaying results");
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('menubar').first().click();
        await this.page.getByRole('menu').getByText('Reset').click();


        //Equipment Cost Search filter with Equals
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').nth(1).click();
        console.log("Equipment cost Search using Contains filter ");
        await this.page.getByText(EquipmentSearch.EquipmentName1).click();

        console.log("Equipment cost Search using Conatins :" + EquipmentSearch.Cost_Equals);
        await this.page.getByRole('spinbutton', { name: 'Filter cell' }).fill(EquipmentSearch.Cost_Equals);
        const myECostEquals = this.page.getByRole('gridcell', { name: EquipmentSearch.Cost_Equals }).innerText();
        
        console.log(await(myECostEquals));
        expect((await myECostEquals).includes(EquipmentSearch.Cost_Equals)).toBe(true);
        console.log("Equipment Search using Contains filter displaying results");
        await this.page.getByRole('menubar').nth(1).click();
        await this.page.getByRole('menu').getByText('Reset').click();

        //Equipment Cost Search filter with Greater than
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').nth(1).click();
        console.log("Equipment cost Search using Greater than filter ");
        await this.page.getByText(EquipmentSearch.EquipmentName4, { exact: true }).click();

        console.log("Equipment cost Search using Conatins :" + EquipmentSearch.Cost_Greaterthan);
        await this.page.getByRole('spinbutton', { name: 'Filter cell' }).fill(EquipmentSearch.Cost_Greaterthan);
        // const myECostGreaterthan = this.page.getByRole('gridcell', { name: EquipmentSearch.Cost_filter1 }).innerText();
        
        // console.log(await(myECostGreaterthan));
        // expect((await myECostGreaterthan).includes(EquipmentSearch.Cost_filter1)).toBe(true);
        console.log("Equipment Search using Greater than filter displaying results");
        await this.page.getByRole('menubar').nth(1).click();
        await this.page.getByRole('menu').getByText('Reset').click();


        //Equipment Cost Search filter with Greater than or equal to
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').nth(1).click();
        console.log("Equipment cost Search using Greater than or equal to filter ");
        await this.page.getByText(EquipmentSearch.EquipmentName6).click();

        console.log("Equipment cost Search using Conatins :" + EquipmentSearch.Cost_Greaterthanorequalto);
        await this.page.getByRole('spinbutton', { name: 'Filter cell' }).fill(EquipmentSearch.Cost_Greaterthanorequalto);
        // const myECostGreaterthanorequalto = this.page.getByRole('gridcell', { name: EquipmentSearch.Cost_Greaterthanorequalto }).innerText();
        
        // console.log(await(myECostGreaterthanorequalto));
        // expect((await myECostGreaterthanorequalto).includes(EquipmentSearch.Cost_Greaterthanorequalto)).toBe(true);
        console.log("Equipment Search using Greater than or equal to filter displaying results");
        await this.page.getByRole('menubar').nth(1).click();
        await this.page.getByRole('menu').getByText('Reset').click();
        

        //Equipment Cost Search filter with Between
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').nth(1).click();
        console.log("Equipment cost Search using Between filter ");
        await this.page.getByText(EquipmentSearch.EquipmentName7).click();

        console.log("Equipment cost Search using Between :" + EquipmentSearch.Cost_Start);
        console.log("Equipment cost Search using Between :" + EquipmentSearch.Cost_End);
        await this.page.getByPlaceholder('Start').fill(EquipmentSearch.Cost_Start);
        await this.page.getByPlaceholder('End').fill(EquipmentSearch.Cost_End);

        console.log("Equipment Search using Between filter displaying results");
    



    }
}
