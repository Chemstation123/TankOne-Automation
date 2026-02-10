import { Page, expect } from "@playwright/test";
import { EPANumberEditField } from "../TestData_Dev/RegisterSanitizerProductsEditMiscellaneousEPANumberJData";


function generatingRandomAlphanumeric(length: number) : string{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result =  '';
    const charactersLength = characters.length;

    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}



export class RegisterSanitizerProductsInDeliveryStateEPAEditing{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performRegisterSanitizerProducts()
    {
        const randomWord = generatingRandomAlphanumeric(5);

          await this.page.waitForTimeout(2000);
          await this.page.getByText('Products').click();
          await this.page.getByText('Products List').click();
          await this.page.getByRole('menubar').nth(0).click();
          await this.page.getByRole('textbox', { name: 'Filter cell' }).first().click();
          await this.page.getByRole('textbox', { name: 'Filter cell' }).fill(EPANumberEditField.ProductID);
          await this.page.getByRole('gridcell', { name: EPANumberEditField.ProductID, exact: true }).click();
          await this.page.getByLabel('View Full Product Detail').click();
          await this.page.getByText('MiscellaneousMiscellaneous').click();
          await this.page.waitForTimeout(1000);
          await this.page.locator('app-miscellaneous > .d-flex').click();
          await this.page.waitForTimeout(3000);
          await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        //   await this.page.waitForTimeout(5000);
        //   await this.page.locator("//div[normalize-space(text())='Edit Product']").click();
        //   await this.page.waitForTimeout(5000);

        //   await this.page.getByLabel('EPA Number:').click();
        //   await this.page.waitForTimeout(1000);
        //   await this.page.getByLabel('EPA Number:').fill(randomWord);
        //   console.log(randomWord)
        //   await this.page.locator("(//div[@class='dx-button-content']//span)[3]").click();
        //   await this.page.locator("//div[normalize-space(text())='Record Saved Succesfully']").click();

        //   //Validating the above Created EPA number 
        //   await this.page.waitForTimeout(1000);
        //   await this.page.getByRole('link', { name: 'Product List' }).click();
        //   await this.page.getByRole('gridcell', { name: EPANumberEditField.ProductID, exact: true }).click();
        //   const EPAnumber = (await this.page.getByLabel('EPA Number:').innerText()).toString();
        //   console.log(EPAnumber);

        //   if(randomWord == EPAnumber){
        //     console.log("This is Updated EPA Number", `${EPAnumber}`);
        //   }
    }
}