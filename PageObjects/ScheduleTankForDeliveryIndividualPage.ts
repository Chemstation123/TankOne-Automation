import { Page,expect } from "@playwright/test";
import { ScheduleTank } from "../TestData/ScheduleTankDeliveryIndividualJData";
import { NewCustomerInfoPage } from "./ValidateCustomerBillingInfo";


export class ScheduleTankForDeliveryIndividualPage{

    public page: Page;
    public static DeliveryTicketNumber:string;
    //static page: any;
    
    
    //static DeliveryTicketNumber: string;
    
  
    
    constructor(page: Page, ) {
      this.page = page;
    }
  
    
  
    async performScheduleTankForDelivery() {
      await this.page.waitForTimeout(2000);
      await this.page.getByText('Deliveries & Scheduling').click();
      //await this.page.getByLabel('Add Tank to Schedule').click();
      await this.page.getByLabel('Add To Schedule').click();
      await this.page.getByText('Add Tank').click();
  
      await this.page.waitForTimeout(2000);
  
      await this.page.getByPlaceholder('Select a Customer...').click();
  
      await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]");
      await this.page.waitForTimeout(1000);
  
      await this.page.getByRole('menu').getByText('Contains').click();
      await this.page.waitForTimeout(1000);
  
      
      await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(ScheduleTank.Valid_Customer_ID);
      console.log(ScheduleTank.Valid_Customer_ID);
      await this.page.getByRole('gridcell', { name: ScheduleTank.Valid_Customer_ID }).click();
      await this.page.waitForTimeout(2000);
  
  
  
      
      //Department
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select a Department...').click();
      await this.page.getByRole('gridcell', { name: ScheduleTank.Department }).first().click();
      const Department = this.page.getByRole('gridcell', { name: ScheduleTank.Department }).first().innerText();
      console.log(await(Department));
      expect((await Department).includes(ScheduleTank.Department)).toBe(true);
      await this.page.waitForTimeout(2000);
  
      //Tank Number 
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select Tanks...').click();
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber }).click();
      const tankNumber = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber }).innerHTML();
      console.log(await(tankNumber));
      expect(ScheduleTank.TankNumber).toContain("985632");
      await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
      await this.page.getByLabel('OK').click();
  
  
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
  
      //Driver
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('option', { name: ScheduleTank.Driver }).locator('div').click();
      // const Driver = this.page.getByRole('gridcell', { name: ScheduleTank.Driver }).innerText();
      // console.log(await(Driver));
      // expect((await Driver).includes(ScheduleTank.Driver)).toBe(true);
      // await this.page.waitForTimeout(2000);
  
      //TruckID
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      //await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      //await this.page.getByRole('option', { name: ScheduleTank.TruckID }).locator('div').click();
      await this.page.getByText('515', { exact: true }).click();
      const TruckID = await this.page.getByText('515', { exact: true }).innerText();
      console.log(await(TruckID));
      //expect((await TruckID).includes(ScheduleTank.TruckID));
  
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Save').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.RecordSaved).click();
      await this.page.waitForTimeout(2000);
  
      // await this.page.getByPlaceholder('Search...').click();
      // await this.page.getByPlaceholder('Search...').fill(NewCustomerInfoPage.MyCustomerNum);
      // await this.page.waitForTimeout(2000);
  
     //Delivery Ticket number 
      await this.page.getByLabel('Clear Selection').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Search...').click();
      
      //const DeliveryTicketNumber = await this.page.locator("(//table[@class='dx-row dx-data-row dx-column-lines dx-state-hover']//tr)[3]").first().innerText();
  
      //const DeliveryTicketNumber = await this.page.getByRole("gridcell").count();
      //console.log(DeliveryTicketNumber);
  
      
  
      await this.page.getByPlaceholder('Search...').fill(ScheduleTank.Valid_Customer_ID);
      await this.page.waitForTimeout(3000);
  
      //await this.page.locator('//table//tbody//tr[contains(.,"Delivery Ticket #")]//tr').nth(3);
      //await this.page.locator("(//tr[contains(@class,'dx-row dx-data-row')]//td)[3]").first();
   
      //await this.page.locator("(//tr[contains(@class,'dx-row dx-data-row')]//td)[3]")
      //await this.page.locator("(//tr[contains(@class,'dx-row dx-data-row')]//td)[3]").click();
      //await this.page.waitForTimeout(3000);
  
        
  
        //LocalCustomerPostingPage.performPostingPage(ScheduleTankForDeliveryPage.DeliveryTicketNumber);
      
      //const DeliveryTicketNumber = this.page.locator("(//tr[contains(@class,'dx-row dx-data-row')]//td)[3]").innerText();
     
      //static DeliveryTicketNumber: string;
      
      //console.log(await(DeliveryTicketNumber));
      //ScheduleTankForDeliveryPage.DeliveryTicketNumber = ScheduleTankForDeliveryPage.DeliveryTicketNumber;
      //await this.page.waitForTimeout(2000);
  
      // await page.locator("(//tr[contains(@class,'dx-row dx-data-row')]//td)[3]")
      // const DeliveryTicketNumber =  page.locator("(//tr[contains(@class,'dx-row dx-data-row')]//td)[3]").innerHTML();
      // // const value = await DeliveryTicketNumber?.getAttribute('value');
      // console.log(await(DeliveryTicketNumber));
     
  
  
      await this.page.getByLabel('Expand').click();
    
     //PO Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.PONumber }).click();
      const PONumber = this.page.getByRole('gridcell', { name: ScheduleTank.PONumber }).innerHTML();
      console.log(await(PONumber));
      expect((await PONumber)).toContain("123456");
      
  
      //Tank Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumb }).click();
      const TankNum = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumb }).innerHTML();
      console.log(await(TankNum));
      expect((await TankNum)).toContain("985632");
      //await this.page.getByLabel('Expand').click();
      
      await this.page.getByLabel('Data grid with 1 rows and 9').getByLabel('Edit').click();
      await this.page.getByLabel('Manufacture Quantity', { exact: true }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Manufacture Quantity', { exact: true }).fill('25');
      await this.page.getByRole('link', { name: 'Save' }).click();

      await this.page.waitForTimeout(1000);
      await this.page.locator("//td[@aria-label='Collapse']//div[1]").click();
      await this.page.waitForTimeout(1000);
     
  
  
  
    //   //Scheduling a 2nd Tank for delivery 
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByLabel('Add Tank to Schedule').click();
  
    //   await this.page.waitForTimeout(2000);
  
    //   await this.page.getByPlaceholder('Select a Customer...').click();
  
    //   await this.page.hover("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > dx-data-grid:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > i:nth-child(1)");
    //   await this.page.waitForTimeout(1000);
  
    //   await this.page.getByRole('menu').getByText('Contains').click();
  
      
    //   await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@aria-label='Filter cell']").fill(NewCustomerInfoPage.MyCustomerNum);
    //   await this.page.waitForTimeout(1000);
    //   await this.page.getByLabel('Data grid with 1 rows and 10').getByRole('gridcell', { name: '0.7682422807954894NT45' }).click();
    //   // await this.page.locator("//table[@id='dx-2cca09c6-ccd4-3ec7-9a65-b855ee9be6e0']/tbody[1]/tr[1]/td[3]").click();
    //   await this.page.waitForTimeout(2000);
  
  
    //   //Department
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByPlaceholder('Select a Department...').click();
    //   await this.page.locator("(//td[text()='Testing'])[2]").click();
    //   const Department1 = this.page.locator("(//td[text()='Testing'])[2]").innerText();
    //   console.log(await(Department1));
    //   expect((await Department1).includes(ScheduleTank.Department1)).toBe(true);
    //   await this.page.waitForTimeout(2000);
  
    //   //Tank Number 
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByPlaceholder('Select Tanks...').click();
    //   await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber1 }).click();
    //   const tankNumber1 = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber1 }).innerHTML();
    //   console.log(await(tankNumber1));
    //   expect(ScheduleTank.TankNumber1).toContain("654321");
    //   await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
    //   await this.page.getByLabel('OK').click();
  
  
    //   //Schedule Date
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByLabel('Scheduled Date:').click();
    //   await this.page.getByLabel('Scheduled Date:').fill(ScheduleTank.ScheduleDate);
    //   const date1 = this.page.getByLabel('Scheduled Date:').innerText();
    //   console.log(await(date1));
    //   expect((await (date1)).includes(ScheduleTank.ScheduleDate));
  
    //   //Driver
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
    //   await this.page.getByText(ScheduleTank.Driver).click();
    //   const Drive = this.page.getByText(ScheduleTank.Driver).innerText();
    //   console.log(await(Drive));
    //   expect((await Drive).includes(ScheduleTank.Driver)).toBe(true);
  
    //   //TruckID
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
    //   await this.page.getByRole('option', { name: ScheduleTank.TruckID1 }).locator('div').click();
    //   const TruckID1 = this.page.getByRole('option', { name: ScheduleTank.TruckID1 }).locator('div').innerText();
    //   console.log(await(TruckID1));
    //   expect((await TruckID1).includes(ScheduleTank.TruckID1));
  
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByLabel('Save').click();
    //   await this.page.waitForTimeout(1000);
    //   await this.page.getByText(ScheduleTank.RecordSaved).click();
    //   await this.page.waitForTimeout(2000);
  
    //   await this.page.getByPlaceholder('Search...').click();
    //   await this.page.getByPlaceholder('Search...').fill('Ace Test 12345');
    //   await this.page.waitForTimeout(2000);
  
    //  //Delivery Ticket number 
    //   await this.page.getByLabel('Clear Selection').click();
    //   await this.page.waitForTimeout(2000);
    //   await this.page.getByPlaceholder('Search...').click();
    //   await this.page.getByPlaceholder('Search...').fill(NewCustomerInfoPage.MyCustomerNum);
     
    //   await this.page.locator("(//td[@aria-label='Expand']//div)[2]")
    //   const DeliveryTicketNumber1 =  this.page.locator("(//td[@aria-label='Expand']//div)[2]").innerText();
    //   // const value = await DeliveryTicketNumber?.getAttribute('value');
    //   console.log(await(DeliveryTicketNumber1));
    //   await this.page.waitForTimeout(2000);
  
  
    //   await this.page.getByLabel('Expand').click();
    
    //  //PO Number 
    //   await this.page.getByRole('gridcell', { name: ScheduleTank.PONumber1 }).click();
    //   const PONumber1 = this.page.getByRole('gridcell', { name: ScheduleTank.PONumber1 }).innerHTML();
    //   console.log(await(PONumber1));
    //   expect((await PONumber1)).toContain("123456");
    //   console.log("PONumber = ", + PONumber1);
  
    //   //Tank Number 
    //   await this.page.getByRole('gridcell', { name: ScheduleTank.TankNum1}).click();
    //   const TankNum1 = this.page.getByRole('gridcell', { name: ScheduleTank.TankNum1}).innerHTML();
    //   console.log(await(TankNum1));
    //   expect((await TankNum1)).toContain("985632");
    //   console.log("TankNumber =", TankNum1);
  
  
   
  
  
    
  
  
  
  
  
  
    }
  
  
  };