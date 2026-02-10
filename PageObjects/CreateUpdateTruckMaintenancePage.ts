import { Page,expect } from "@playwright/test";
import { CreateUpdateTruckMPage } from "../TestData/CreateUpdateTruckMaintenanceJData";



export class CreateUpdateTruckMaintenancePage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performCreateUpdateTruckMaintenancePage() {

        await this.page.getByText('Settings').click();
        await this.page.getByText('Lookup Tables').click();
        await this.page.getByText('Truck MaintenanceTruck').click();
        await this.page.waitForTimeout(2000);

        //Adding a New record
        await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.getByLabel('Truck: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Truck: *').fill(CreateUpdateTruckMPage.Truck);
        const MyTruck = await this.page.getByLabel('Truck: *').innerText();
        console.log(MyTruck);
        expect(CreateUpdateTruckMPage.Truck).toContain("362");
    
        await this.page.getByLabel('Capacity G:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Capacity G:').fill(CreateUpdateTruckMPage.CapacityG);
        const Capacity_G = await this.page.getByLabel('Capacity G:').innerText();
        console.log(Capacity_G);
        expect(CreateUpdateTruckMPage.CapacityG).toContain("100");

        await this.page.getByLabel('Tote Capacity:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Tote Capacity:').fill(CreateUpdateTruckMPage.ToteCapacity);
        const Tote_Capacity = await this.page.getByLabel('Tote Capacity:').innerText();
        console.log(Tote_Capacity);
        expect(CreateUpdateTruckMPage.ToteCapacity).toContain("150");

        await this.page.getByRole('form').getByLabel('Select').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Items').getByText(CreateUpdateTruckMPage.DefaultDriver).click();
        const Default_Driver = await this.page.getByLabel('Items').getByText(CreateUpdateTruckMPage.DefaultDriver).innerHTML();
        console.log(Default_Driver);
        expect((await Default_Driver).includes(CreateUpdateTruckMPage.DefaultDriver)).toBe(true);

        await this.page.getByLabel('Description:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Description:').fill('Testing');
        const Description = await this.page.getByLabel('Description:').innerText();
        console.log(Description);
        expect(CreateUpdateTruckMPage.Description).toContain("Testing");

        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Updating for the created record
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Contains').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(CreateUpdateTruckMPage.SearchTruck);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('gridcell', { name: CreateUpdateTruckMPage.Truck }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Edit' }).click();
        await this.page.getByLabel('Truck: *').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Truck: *').fill('263');
        const UpdatedTruck = await this.page.getByLabel('Truck: *').innerText();
        console.log(UpdatedTruck);
        expect(CreateUpdateTruckMPage.UpdatedTruck).toContain("263");

        await this.page.getByLabel('Capacity G:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Capacity G:').fill(CreateUpdateTruckMPage.UpdatedCapacityG);
        const UpdatedCapacityG = await this.page.getByLabel('Capacity G:').innerText();
        console.log(UpdatedCapacityG);
        expect(CreateUpdateTruckMPage.UpdatedCapacityG).toContain("117");
        
        await this.page.getByLabel('Tote Capacity:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Tote Capacity:').fill('170');
        const UpdatedToteCapacity = await this.page.getByLabel('Tote Capacity:').innerText();
        console.log(UpdatedToteCapacity);

        await this.page.getByLabel('Description:').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Description:').fill(CreateUpdateTruckMPage.UpdatedDescription);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();
        await this.page.waitForTimeout(1000);

        //Deleting record
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menubar').first().click();
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Reset').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill('263');
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: '263' }).click();
        await this.page.getByRole('link', { name: 'Delete' }).click();
        await this.page.getByLabel('Yes').click();
        await this.page.getByText('Record Removed Succesfully').click();

    }
}