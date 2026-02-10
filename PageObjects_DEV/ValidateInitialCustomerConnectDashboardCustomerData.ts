import { Page, expect } from "@playwright/test";



export class ValidateInitialCustomerConnectDashboardCustomerData{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performValidationCustomerData()
    {
        const customerConnect = this.page.getByText('Customer Connect');
        console.log(await customerConnect.innerText());
        await customerConnect.click();
  
        const centerNumber = this.page.getByText('Center Number');
        console.log(await centerNumber.innerText());
        await centerNumber.click();

        const metropolitanArea = this.page.getByText('Metropolitan Area');
        console.log(await metropolitanArea.innerText());
        await metropolitanArea.click();

        const customerName = this.page.getByText('Customer Name');
        console.log(await customerName.innerText());
        await customerName.click();

        const fullAddress = this.page.getByText('Full Address');
        console.log(await fullAddress.innerText());
        await fullAddress.click();

        const city = this.page.getByText('City', { exact: true });
        console.log(await city.innerText());
        await city.click();

        const state = this.page.getByText('State', { exact: true });
        console.log(await state.innerText());
        await state.click();

        const zipCode = this.page.getByText('Zip Code');
        console.log(await zipCode.innerText());
        await zipCode.click();

        const status = this.page.getByText('Status');
        console.log(await status.innerText());
        await status.click();

        const setupDate = this.page.getByText('Setup Date');
        console.log(await setupDate.innerText());
        await setupDate.click();

        const lastDeliveryDate = this.page.getByText('Last Delivery Date');
        console.log(await lastDeliveryDate.innerText());
        await lastDeliveryDate.click();

        const activeTankCount = this.page.getByText('Active Tank Count');
        console.log(await activeTankCount.innerText());
        await activeTankCount.click();

        const currentAnnualSales = this.page.getByText('Current Annual Sales');
        console.log(await currentAnnualSales.innerText());
        await currentAnnualSales.click();

        const resetState = this.page.getByLabel('Reset State');
        console.log(await resetState.innerText());
        await resetState.click();

    }
}