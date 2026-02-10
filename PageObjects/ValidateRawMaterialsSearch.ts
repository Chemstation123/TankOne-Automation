import { Page, expect } from "@playwright/test";
import { RawMaterialsSearch } from "../TestData/RawMaterialsSearchJData";


export class RawMaterialsSearchPage {
    public page: Page;

    constructor(page:Page) {
        this.page = page;
    }

    async performRawMaterialsSearch() {

     //Select the Manufacturing Center 
     await this.page.locator("[class='dx-dropdowneditor-icon']").click();
     await this.page.locator("[class='dx-item dx-list-item dx-list-item-selected']").click();

     //RawMaterials Search this.page
     await this.page.getByText('Products').click();
     await this.page.getByText('Raw Materials').click();


     //RawMaterials -- Raw Material Code filter 
     //Search filter with "Contains-------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("RawMaterials Code Search using Contains filter");
     await this.page.getByRole('menu').getByText(RawMaterialsSearch.RMCode1).click();

      //await this.page.getByRole('textbox', { name: 'Filter cell' }).first().click();
     console.log("Raw Materials Search using Contains :" + RawMaterialsSearch.rawMaterialCodeFilter1_Contains);
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RawMaterialsSearch.rawMaterialCodeFilter1_Contains);
     const myRMContains = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialCodeFilter1_Contains }).first().innerText();

     console.log(await(myRMContains));
     expect((await myRMContains).includes(RawMaterialsSearch.rawMaterialCodeFilter1_Contains)).toBe(true);
     console.log("Raw Materials Search using Contains with filter displaying results")
     await this.page.getByLabel('Reset State').click();

     //  //Search filter with "Does not conatin"
     //  await this.page.getByRole('menubar').first().click();
     //  await this.page.getByText('Does not contain').click();
     //  await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RawMaterialsSearch.rawMaterialCodeFilter2_DoesNotContain);
     //  await this.page.getByRole('gridcell', { name: '3510' }).first().click();
     //  await this.page.getByText('InformationInformation').click();
     //  await this.page.getByRole('button', { name: 'Reset State' }).click();

     //Search filter with "Start with--------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("RawMaterials Search using Starts with filter");
     await this.page.getByText(RawMaterialsSearch.RMCode2).click();

     console.log("Raw Materials code Search using Starts with :" + RawMaterialsSearch.rawMaterialCodeFilter3_StartsWith)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RawMaterialsSearch.rawMaterialCodeFilter3_StartsWith);
     const myRMStartswith = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialCodeFilter3_StartsWith }).innerText();

     console.log(await(myRMStartswith));
     expect((await myRMStartswith).includes(RawMaterialsSearch.rawMaterialCodeFilter3_StartsWith)).toBe(true);
     console.log("Raw Materials code Search using Starts with filter displaying results")
     await this.page.getByLabel('Reset State').click();
     //await this.page.getByRole('tab', { name: 'Information' }).click();
    

     //Search filter with "Ends with---------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("RawMaterials code Search using Ends with filter");
     await this.page.getByText(RawMaterialsSearch.RMCode3).click();

     console.log("Raw Materials code Search using Ends with :" + RawMaterialsSearch.rawMaterialCodeFilter4_EndsWith)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RawMaterialsSearch.rawMaterialCodeFilter4_EndsWith);
     const myRMEndswith = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialCodeFilter4_EndsWith }).first().innerText();
    
     console.log(await(myRMEndswith));
     expect((await myRMEndswith).includes(RawMaterialsSearch.rawMaterialCodeFilter4_EndsWith)).toBe(true);
     console.log("Raw Materials code Search using Ends with filter displaying results")
     await this.page.getByLabel('Reset State').click();
     

     //Search filter with "Equals------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').first().click();
     console.log("RawMaterials code Search using Equals filter");
     await this.page.getByText(RawMaterialsSearch.RMCode4).click();

     console.log("Raw Materials code Search using Equals :" + RawMaterialsSearch.rawMaterialCodeFilter5_Equals)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RawMaterialsSearch.rawMaterialCodeFilter5_Equals);
     const myRMEquals = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialCodeFilter5_Equals }).first().innerText();
     
     console.log(await(myRMEquals));
     expect((await myRMEquals).includes(RawMaterialsSearch.rawMaterialCodeFilter5_Equals)).toBe(true);
     console.log("Raw Materials code Search using Equals filter displaying results")
     await this.page.getByLabel('Reset State').click();

     //  //Search filter with "Does not equal"
     //  await this.page.getByRole('menubar').first().click();
     //  await this.page.getByText('Does not equal').click();
     //  await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(RawMaterialsSearch.rawMaterialCodeFilter6_NotEquals);
     //  await this.page.getByRole('gridcell', { name: '3030' }).first().click();
     //  await this.page.getByText('InformationInformation').click();
     //  await this.page.waitForTimeout(2000);
     //  await this.page.getByRole('button', { name: 'Reset State' }).click();
     


     //Raw Materials -- Raw Material Description search
     //Search filter with "Contains--------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("RawMaterials Description Search using Conatins filter");
     await this.page.getByRole('menu').getByText(RawMaterialsSearch.RMDescription1).click();

     console.log("Raw Materials Description Search using Contains :" + RawMaterialsSearch.rawMaterialDesc_FT1_Contains)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RawMaterialsSearch.rawMaterialDesc_FT1_Contains);
     const myRMDContains = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialDesc_FT1_Contains }).nth(1).innerText();
     
     console.log(await(myRMDContains));
     expect((await myRMDContains).includes(RawMaterialsSearch.rawMaterialDesc_FT1_Contains)).toBe(true);
     console.log("Raw Materials description Search using Contains filter displaying results")
     await this.page.getByLabel('Reset State').click();
     

     //  //Search filter with "Does not contain"
     //  await this.page.getByRole('menubar').nth(1).click();
     //  await this.page.getByText('Does not contain').click();
     //  await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RawMaterialsSearch.rawMaterialDesc_FT2_DoesNotContain);
     //  await this.page.getByRole('gridcell', { name: '3510' }).nth(1).click();
     //  await this.page.getByText('InformationInformation').click();
     //  await this.page.getByLabel('Reset State').click();

     //Search filter with "Starts with----------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("RawMaterials Description Search using Starts with filter");
     await this.page.getByText(RawMaterialsSearch.RMDescription2).click();

     console.log("Raw Materials Description Search using Starts with :" + RawMaterialsSearch.rawMaterialDesc_FT3_StartsWith)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RawMaterialsSearch.rawMaterialDesc_FT3_StartsWith);
     await this.page.waitForTimeout(1000);
     const myRMDStartswith = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialDesc_FT3_StartsWith }).innerText();

     console.log(await(myRMDStartswith));
     expect((await myRMDStartswith).includes(RawMaterialsSearch.rawMaterialDesc_FT3_StartsWith)).toBe(false);
     console.log("Raw Materials description Search using Starts with filter displaying results")
     await this.page.getByLabel('Reset State').click();
     

     //Search filter with "Ends with------------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("RawMaterials Description Search using Ends with filter");
     await this.page.getByText(RawMaterialsSearch.RMDescription3).click();

     console.log("Raw Materials Description Search using Ends with :" + RawMaterialsSearch.rawMaterialDesc_FT4_EndsWith)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RawMaterialsSearch.rawMaterialDesc_FT4_EndsWith);
     await this.page.waitForTimeout(2000);
     const myRMDEndswith = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialDesc_FT4_EndsWith }).innerText();
    
     console.log(await(myRMDEndswith));
     expect((await myRMDEndswith).includes(RawMaterialsSearch.rawMaterialDesc_FT4_EndsWith)).toBe(false);
     console.log("Raw Materials description Search using Ends with filter displaying results")
     await this.page.getByLabel('Reset State').click();

     //Search filter with "Equals--------------------------------------------------------------------------------------------"
     await this.page.waitForTimeout(1000);
     await this.page.getByRole('menubar').nth(1).click();
     console.log("RawMaterials Description Search using Equals filter");
     await this.page.getByText(RawMaterialsSearch.RMDescription4).click();

     console.log("Raw Materials Description Search using Ends with :" + RawMaterialsSearch.rawMaterialDesc_FT5_Equals)
     await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RawMaterialsSearch.rawMaterialDesc_FT5_Equals);
     const myRMDEquals = this.page.getByRole('gridcell', { name: RawMaterialsSearch.rawMaterialDesc_FT5_Equals }).innerText();
    
     console.log(await(myRMDEquals));
     expect((await myRMDEquals).includes(RawMaterialsSearch.rawMaterialDesc_FT5_Equals)).toBe(true);
     console.log("Raw Materials description Search using Equals filter displaying results")
     await this.page.getByLabel('Reset State').click();

     //  //Search filter with "Does not equal"
     //  await this.page.getByRole('menubar').nth(1).click();
     //  await this.page.getByText('Does not equal').click();
     //  await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(RawMaterialsSearch.rawMaterialDesc_FT6_NotEquals);
     //  await this.page.getByRole('gridcell', { name: '3510' }).nth(1).click();
     //  await this.page.getByRole('tab', { name: 'Information' }).click();
     //  await this.page.getByLabel('Reset State').click();



    }
}