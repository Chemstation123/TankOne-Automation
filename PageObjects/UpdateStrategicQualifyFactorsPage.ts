import { Page, expect } from "@playwright/test";
import { StrategicQualifyFactors } from "../TestData/UpdateStrategicQualifyFactorsJData";



export class UpdateStrategicQualifyFactorsPage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }


    async performUpdateStrategicQualifyFactors() {


        const randomAverageMiles = (Math.random() * 1000).toFixed(2);
        const randomMonthlyValue = (Math.random() * 500).toFixed(2);
        const randomOperatingExpenses = (Math.random() * 2000).toFixed(2);
        const randomTruckCapacity = (Math.random() * 5000).toFixed(2);


        await this.page.getByText('Settings').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Manager Control').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('QualifyQualify').click();
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Edit Delivery or Budget').click();

       //Average Miles opertaed per truck per year 
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average miles operated per').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average miles operated per').fill(randomAverageMiles);

        //Average(per vehicle) monthly truck lease or fixed expense
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average (per vehicle) monthly').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average (per vehicle) monthly').fill(randomMonthlyValue);

        //Avg opearating expense per mile including fuel
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average operating expense per').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average operating expense per').fill(randomOperatingExpenses);

        //Avg truck capacity
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average truck capacity (in').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average truck capacity (in').fill(randomTruckCapacity);

        //Fully loaded annual driver cost 
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Fully loaded annual driver').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Fully loaded annual driver').fill(StrategicQualifyFactors.DriverCost);

        //Avg truck miles per delivery
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average truck miles per').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average truck miles per').fill(StrategicQualifyFactors.AvgTruckMilesPerDelvery);

        //Avg subsequent delivery as percent of tank capacity 
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average subsequent delivery').click();
        await this.page.getByLabel('Local Delivery Expense Factors').getByLabel('Average subsequent delivery').fill(StrategicQualifyFactors.TankCapacity);

        //Percent of revenue budgeted for overhead
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Percent of revenue budgeted').click();
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Percent of revenue budgeted').fill(StrategicQualifyFactors.Revenue);

        //Installed equipement amortization period
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Installed equipment').click();
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Installed equipment').fill(StrategicQualifyFactors.AmortPeriod);

        //Target Profitability
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Target profitability:').click();
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Target profitability:').press('ArrowRight');
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Target profitability:').press('ArrowRight');
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Target profitability:').press('ArrowRight');
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Target profitability:').fill('14.500 %');
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Minimum profitability:').click();
        await this.page.getByLabel('Budget Planning Factors', { exact: true }).getByLabel('Minimum profitability:').fill('11.00 %');
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();
    }
}