import {Page, expect} from "@playwright/test";




export class SortTanksByDepartment{
    public page : Page;
    constructor(page : Page){
    this.page = page;
    }
    async SortTanksByDepartment()
    {
        
        await this.page.getByRole('cell', { name: 'Test Dept' }).innerText();
        console.log('Department Name:', await this.page.getByRole('cell', { name: 'Test Dept' }).innerText());
        await this.page.getByRole('columnheader', { name: 'Department, sortable column,' }).click();
        await this.page.getByRole('cell', { name: '-' }).nth(1).click();
        const sortedDepartment = await this.page.getByRole('cell', { name: '-' }).nth(1).innerText();
        console.log('Sorted Department Name:', sortedDepartment);
        expect(sortedDepartment).toBe('-');
    }
}