import { Page, expect } from "@playwright/test";
import { TankComments } from "../TestData/TankCommentsJData";


export class TankCommentsPage{
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
  
    async performTankComments() {
  
  
    await this.page.getByText('Customers').click();
    
    await this.page.getByRole('gridcell', { name: '60021' }).click();
    await this.page.getByRole('tab', { name: 'Tanks' }).click();
  
  
    await this.page.getByRole('gridcell', { name: '60021-1' }).click();
  
    //Tank Comments section
    await this.page.locator('#tanks-card').getByText('CommentsComments').click();
    await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
    await this.page.getByText('Edit Comments').click();
    await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill(TankComments.Paragrph1);
    const para1 = this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').innerText();
    console.log(await(para1));
    expect((await para1).includes(TankComments.Paragrph1)).toBe(true);
  
  
  
    await this.page.getByRole('paragraph').nth(1).click();
    await this.page.getByLabel('Editor content').nth(1).fill(TankComments.Paragrph2);
    await this.page.waitForTimeout(1000);
    const para2 = this.page.getByLabel('Editor content').nth(1).innerText();
    console.log(await(para2));
    expect((await para2).includes(TankComments.Paragrph2)).toBe(true);
  
    await this.page.getByRole('paragraph').nth(2).click();
    await this.page.getByLabel('Editor content').nth(2).fill(TankComments.Paragrph3);
    await this.page.waitForTimeout(1000);
    const para3 = this.page.getByLabel('Editor content').nth(1).innerText();
    console.log(await(para3));
    expect((await para3).includes(TankComments.Paragrph3));
  
    await this.page.getByRole('button', { name: 'Save' }).click();
  
    
  
    }
  };