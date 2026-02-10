import { Page, test } from "@playwright/test";


export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performLoginPage() {

        await this.page.goto(process.env.ProdURL!);
        // await this.page.goto('https://hq-keycloakaz04.azurewebsites.net/realms/TankOneTest/protocol/openid-connect/auth?client_id=tankone&redirect_uri=https%3A%2F%2Ftankonereboot.azurewebsites.net%2F%23%2Fhome&state=a49e8f4f-d972-4bc6-80d3-6b7c34452b86&response_mode=query&response_type=code&scope=openid&nonce=aeda32ae-22d5-4d79-842a-4efd702deab2');
        await this.page.locator("//*[@id='username']").fill(process.env.ProdUserName!);
        // await this.page.locator("//*[@id='username']").fill('DAYT_TEST250_USER');
        await this.page.waitForTimeout(1000);
        await this.page.locator("//*[@id='password']").fill(process.env.ProdPassword!);
        // await this.page.locator("//*[@id='password']").fill('*53gtniZZe-xwK(N');
        await this.page.waitForTimeout(1000);
        await this.page.click("//*[@id='kc-login']");
        await this.page.waitForTimeout(1000);


    }

}