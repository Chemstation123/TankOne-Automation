import { Page, expect } from "@playwright/test";
import { SwitchDefaultDriver } from "../TestData_RC/ValidateSwitchDDriverDeliveryPageJData_RC";



export class SwitchDefaultDriverDeliveryPage {
    public page: Page;
    private selectedTruck : string;
    private selectedDriver : string;


    constructor(page: Page) {
        this.page = page;
        this.selectedTruck = '';
        this.selectedDriver = '';
    }


    async performSwitchDedaultDriverDeliveryPage() {
        try {
            await this.navigateToTruckManagement();
            await this.selectTruckAndDriver();
            await this.navigateToDeliveriesAndScheduling();
            await this.addNewDelivery();
            await this.validateTruckAndDriver();
        } catch (error) {
            console.error('Error in performSwitchDefaultDriverDeliveryPage: ', error);
            throw error;
        }
    }

    private async navigateToTruckManagement() {
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Settings').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Lookup Tables').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Truck MaintenanceTruck').click();
    }

    
    private async selectTruckAndDriver() {
        this.selectedTruck = SwitchDefaultDriver.TruckNumber;
        this.selectedDriver = SwitchDefaultDriver.Driver;;

        await this.page.getByRole('gridcell', { name: this.selectedTruck }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: this.selectedDriver }).click();

        // Add assertions to ensure the truck and driver are selected
        const selectedTruckElement = await this.page.getByRole('gridcell', { name: this.selectedTruck});
        await this.page.waitForTimeout(1000);
        const selectedDriverElement = await this.page.getByRole('gridcell', { name: this.selectedDriver});

        expect(await selectedTruckElement.isVisible()).toBeTruthy();
        expect(await selectedDriverElement.isVisible()).toBeTruthy();
    }

    private async navigateToDeliveriesAndScheduling() {
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.goto('https://tankone-rc.azurewebsites.net/#/deliveries');
    }

    private async addNewDelivery() {
        await this.page.getByLabel('Add To Schedule').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Add Tank').click();

        // Select customer
        await this.page.getByPlaceholder('Select a Customer...').click();
        await this.page.waitForTimeout(1000);
        
        await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]");
        await this.page.waitForTimeout(1000);
        
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.waitForTimeout(1000);
    
        await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(SwitchDefaultDriver.CustomerNumber);
        console.log(SwitchDefaultDriver.CustomerNumber);
        await this.page.getByRole('gridcell', { name: SwitchDefaultDriver.CustomerNumber }).click();
        await this.page.waitForTimeout(2000);

        // Select department
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Select a Department...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: SwitchDefaultDriver.Department }).click();

        // Select tank
        await this.page.getByPlaceholder('Select Tanks...').click();
        await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
        await this.page.getByLabel('OK', { exact: true }).click();

    //Schedule Date
    await this.page.waitForTimeout(2000);
  
    //Picking Today's Date
    const today : Date = new Date();
    //Extract year, month, and day
    const year: number = today.getFullYear();
    const month: number = today.getMonth() + 1;
    const day : number = today.getDate();

    //Formatting of the Date as mm-dd-yyyy
    const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;

    await this.page.getByLabel('Scheduled Date:').click();
    await this.page.getByLabel('Scheduled Date:').fill(formattedDate);
    const date = this.page.getByLabel('Scheduled Date:').innerText();
    console.log(await (formattedDate));
    console.log(await(date));
    expect((await (date)).includes(formattedDate));   




        // Select truck and driver
        await this.selectTruckInDelivery();
        await this.selectDriverInDelivery();
    }

    private async selectTruckInDelivery() {
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
        await this.page.getByRole('option', { name: '_ T1234' }).locator('div').click();

        // Add assertion to ensure the correct truck is selected
        const selectedTruckElement = await this.page.getByRole('combobox', { name: 'Select...' }).nth(2);
        expect(await selectedTruckElement.inputValue()).toBe(this.selectedTruck);
    }

    private async selectDriverInDelivery() {
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.getByText(this.selectedDriver).click();

        // Add assertion to ensure the correct driver is selected
        const selectedDriverElement = await this.page.getByRole('combobox', { name: 'Select...' }).nth(1);
        expect(await selectedDriverElement.inputValue()).toBe(this.selectedDriver);

        await this.page.waitForTimeout(5000);
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.waitForTimeout(1000);
        //await this.page.getByRole('gridcell', { name: SwitchDefaultDriver.Switched_Driver }).first().click();
        await this.page.getByRole('option', { name: SwitchDefaultDriver.Switched_Driver }).locator('div').click();
        const Driver_Switch = this.page.getByRole('option', { name: SwitchDefaultDriver.Switched_Driver }).locator('div').innerText();
        console.log(await (Driver_Switch));

        await this.page.waitForTimeout(1000);
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.getByText(this.selectedDriver).click();



    }

    private async validateTruckAndDriver() {
        // Validate that the selected truck and driver in the delivery form match those from the Truck Management page
        const truckInDelivery = await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
        const driverInDelivery = await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).inputValue();

        expect(truckInDelivery).toBe(this.selectedTruck);
        expect(driverInDelivery).toBe(this.selectedDriver);

        console.log('Validation successful: Truck and Driver match between Truck Management and Delivery pages');
    }
}
