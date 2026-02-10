import {Page, test} from "@playwright/test";


export class LoginPageCP {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async performLoginPageCP() {

        await this.page.goto(process.env.ProdURL!);
        await this.page.locator("//*[@id='username']").fill(process.env.ProdUserName!);
        await this.page.waitForTimeout(1000);
        await this.page.locator("//*[@id='password']").fill(process.env.ProdPassword!);
        await this.page.waitForTimeout(1000);
        await this.page.click("//*[@id='kc-login']");
        await this.page.waitForTimeout(1000);
    }

}