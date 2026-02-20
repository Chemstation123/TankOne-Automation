import {Page, expect} from "@playwright/test";
import exp from "constants";

export class linkToTrainingPortal{
    public page : Page;
    constructor(page : Page){
    this.page = page;
    }


    async LinkToTrainingPortal()
    {
        
    await this.page.getByRole('button', { name: ' Pramod' }).click();
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Chem U – Training & Resources' }).click();
    const page1 = await page1Promise;
    const TextDisplayed = await page1.getByRole('heading', { name: 'Chem U for Customers', exact: true }).textContent();
    console.log('Navigated to Customer Page: ' + TextDisplayed);
    expect(TextDisplayed).toContain('Chem U for Customers');

    }
}