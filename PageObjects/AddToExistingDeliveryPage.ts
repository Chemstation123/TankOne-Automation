import { Page, expect } from "@playwright/test";
import { AddExistingDelivery } from "../TestData/AddExistingDeliveryJData";



export class AddToExistingDeliveryPageNew{
    public page : Page;

    constructor(page : Page){
        this.page = page;
    }


    async performAddExistingDelivery()

    {
        // //Function to get a random element from an array
        // function getRandomElement<T>(arr: T[]): T{
        //     return arr[Math.floor(Math.random() *arr.length)];   
        // }

        // function getRandomNumber(min: number, max: number, decimals: number =2): number {
        //     const factor = Math.pow(10, decimals);
        //     return Math.round((Math.random() * (min - min)+ min) * factor)/ factor;
        // }


        // //Choosing customer and adding Quote
        // await this.page.getByText('Customers').click();
        // await this.page.getByPlaceholder('Search...').click();
        // await this.page.waitForTimeout(1000);
        // await this.page.getByPlaceholder('Search...').fill(AddExistingDelivery.CustomerNumber);
        // await this.page.getByRole('gridcell', { name: AddExistingDelivery.CustomerNumber }).click();
        // await this.page.waitForTimeout(1000);
        // console.log(`Choosen Customer number is: ${AddExistingDelivery.CustomerNumber}`);
        // await this.page.waitForTimeout(1000);
        // await this.page.getByText('Quote InfoQuote Info').click();
        // await this.page.waitForTimeout(1000);

        // //Adding a new product 
        // await this.page.getByLabel('Add a row').click();
        // await this.page.waitForTimeout(10000);
        // await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        // await this.page.waitForTimeout(1000);
        // const productCodes = await this.page.locator("[data-testid='product-code']").allInnerTexts();
        // const selectProductCode = getRandomElement(productCodes);
        // //await this.page.getByLabel('Items').getByText('10005').click();
        // console.log(`Product Code: ${selectProductCode}`);


        // await this.page.getByLabel('Price: *').click();
        // await this.page.getByLabel('Price: *').fill('$125.00');
        // await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
        // await this.page.getByLabel('Items').getByText('G').click();
        // await this.page.getByLabel('Total Commission %: *').click();
        // await this.page.getByLabel('Total Commission %: *').fill('1.300%');
        // await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
        // await this.page.getByText('Global MSC').click();
        // await this.page.getByLabel('New Quote').getByLabel('Select').nth(3).click();
        // await this.page.getByLabel('Quote Date: *').click();
        // await this.page.getByLabel('Quote Date: *').click();
        // await this.page.getByLabel('Monday, February 17,').getByText('17').click();
        // await this.page.getByLabel('Save').click();
        // await this.page.getByText('Record Saved Succesfully').click();

        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(1000);

        await this.page.getByPlaceholder('Search...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').fill("Curly's Meats");
        await this.page.waitForTimeout(1000);

        const DeliveryTicket =  await this.page.locator("//*[contains(@class, 'dx-row dx-data-row dx-column-lines dx-selection')]/td[3][@aria-describedby='dx-col-101']");
        const text = await DeliveryTicket.textContent();
  
        console.log('Extracted Text:', text);
    }
}