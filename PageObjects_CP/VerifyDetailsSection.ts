import {Page, expect} from "@playwright/test";

export class VerifyDetailsSection{
    public page : Page;
    constructor(page : Page){
    this.page = page;
    }

    async VerifyDetailsSection()
    {
        await this.page.getByRole('cell', { name: '-1' }).click();    
        await this.page.getByRole('button', { name: ' Details' }).click();

        this.page.locator("//div[@class='row g-3']//div[1]//div[1]//div[1]").innerText().then(text => {
            console.log(text);
        });
        await this.page.locator("//div[@class='modal-body']//div[2]//div[1]//div[1]").innerText().then(text => {
            console.log(text);
        });
        await this.page.locator("//app-tank-detail-modal//div[3]//div[1]//div[1]").innerText().then(text => {
            console.log(text);
        });
        await this.page.locator("//app-tank-detail-modal//div[4]//div[1]//div[1]").innerText().then(text => {
            console.log(text);
        });
        await this.page.locator("//div[@class='modal-body']//div[5]//div[1]//div[1]").innerText().then(text => {
            console.log(text);
        });
        await this.page.getByLabel('Tank: 5330-1 - Product:').getByText('Close').click();
    }
}