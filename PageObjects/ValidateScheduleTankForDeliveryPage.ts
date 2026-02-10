import { Page,expect } from "@playwright/test";
import { ScheduleTank } from "../TestData/ScheduleTankForeliveryJData";
import { NewCustomerInfoPage } from "./ValidateCustomerBillingInfo";


export class ScheduleTankForDeliveryPage{

    public page: Page;
    public static DeliveryTicketNumber:string;
    //static page: any;
    
    
    //static DeliveryTicketNumber: string;
    
  
    
    constructor(page: Page, ) {
      this.page = page;
    }
  
    
  
    async performScheduleTankForDelivery() {
      await this.page.getByText('Deliveries & Scheduling').click();
      await this.page.waitForTimeout(1000);


      await this.page.getByLabel('Add To Schedule').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText('Add Tank').click();
  
      await this.page.waitForTimeout(2000);
  
      await this.page.getByPlaceholder('Select a Customer...').click();
      await this.page.waitForTimeout(1000);
  
      await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]");
      await this.page.waitForTimeout(1000);
  
      await this.page.getByRole('menu').getByText('Contains').click();
      await this.page.waitForTimeout(1000);
  
      await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(NewCustomerInfoPage.MyCustomerNum);
      console.log(NewCustomerInfoPage.MyCustomerNum);
      await this.page.getByRole('gridcell', { name: NewCustomerInfoPage.MyCustomerNum }).click();
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
      await this.page.waitForTimeout(2000);
      const tankNumber = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber }).innerHTML();
      console.log(await(tankNumber));
      expect(ScheduleTank.TankNumber).toContain("985632");
      await this.page.waitForTimeout(2000);
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
      console.log(ScheduleTank.Driver)
    
  
      //TruckID
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.TruckID, { exact: true }).click();
      console.log(ScheduleTank.TruckID);

      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Save').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.RecordSaved).click();
      await this.page.waitForTimeout(2000);

      //Redirecting to Confrim Schedule Page
      await this.page.getByPlaceholder('Search...').click();
      await this.page.getByPlaceholder('Search...').fill(NewCustomerInfoPage.MyCustomerNum);
      console.log(NewCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(2000);

  
     //Delivery Ticket number 
      await this.page.getByLabel('Clear Selection').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Search...').click();
      
      await this.page.getByPlaceholder('Search...').fill(NewCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(3000);
  
      //Epanding the row
      await this.page.getByLabel('Expand').click();
    
      //PO Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.PONumber }).click();
      const PONumber = this.page.getByRole('gridcell', { name: ScheduleTank.PONumber }).innerHTML();
      console.log(await(PONumber));
      expect((await PONumber)).toContain("123456");
      
  
      //Tank Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber }).click();
      const TankNum = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber }).innerHTML();
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

      await this.page.getByRole('gridcell', { name: 'Display additional data' }).locator('span').click();
      await this.page.getByRole('button', { name: 'fa fa-sticky-note' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Note:').click();
      await this.page.getByLabel('Note:').fill(ScheduleTank.NoteForTicket);
      await this.page.waitForTimeout(1000);
      await this.page.getByText('Add/Edit Note for Ticket #').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Note saved successfully').click();
      await this.page.waitForTimeout(1000);



      //Adding 2nd Tank for the Delivery
      await this.page.reload({ waitUntil: 'networkidle',});
      await this.page.getByLabel('Add To Schedule').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText('Add Tank').click();
  
      await this.page.waitForTimeout(2000);
  
      await this.page.getByRole('combobox', { name: 'Select a Customer...' }).click();
      await this.page.waitForTimeout(1000);

  
      await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]");
      await this.page.waitForTimeout(1000);
  
      await this.page.getByRole('menu').getByText('Contains').click();
      await this.page.waitForTimeout(1000);
  
      await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(NewCustomerInfoPage.MyCustomerNum);
      console.log(NewCustomerInfoPage.MyCustomerNum);
  
      await this.page.getByRole('gridcell', { name: NewCustomerInfoPage.MyCustomerNum }).click();
      await this.page.waitForTimeout(2000);
    
      //Department
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select a Department...').click();
      await this.page.getByRole('gridcell', { name: ScheduleTank.Department_1 }).first().click();
      const Depart_1 = this.page.getByRole('gridcell', { name: ScheduleTank.Department_1 }).first().innerText();
      console.log(await Depart_1);
      expect((await Depart_1).includes(ScheduleTank.Department_1)).toBe(true);
      await this.page.waitForTimeout(2000);
  
      //Tank Number 
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select Tanks...').click();
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).click();
      await this.page.waitForTimeout(2000);
      const TankNum_1 = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).innerHTML();
      console.log(await(TankNum_1));
      expect(ScheduleTank.TankNumber_1).toContain("654321");
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
      await this.page.getByLabel('OK').click();
  
      await this.page.getByLabel('Scheduled Date:').click();
      await this.page.getByLabel('Scheduled Date:').fill(formattedDate);
      const date_1 = this.page.getByLabel('Scheduled Date:').innerText();
      console.log(await (formattedDate));
      console.log(await(date_1));
      expect((await (date_1)).includes(formattedDate));
  
      //Driver
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('option', { name: ScheduleTank.Driver }).locator('div').click();
      console.log(ScheduleTank.Driver)
    
  
      //TruckID
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.TruckID, { exact: true }).click();
      console.log(ScheduleTank.TruckID);

      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Save').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.RecordSaved).click();
      await this.page.waitForTimeout(2000);

      //Redirecting to Confrim Schedule Page
      await this.page.getByPlaceholder('Search...').click();
      await this.page.getByPlaceholder('Search...').fill(NewCustomerInfoPage.MyCustomerNum);
      console.log(NewCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(2000);

      //Delivery Ticket number 
      await this.page.getByLabel('Clear Selection').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Search...').click();
    
      await this.page.getByPlaceholder('Search...').fill(NewCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(3000);

      //Epanding the row
      //await this.page.getByLabel('Expand').click();
      await this.page.locator("(//td[@aria-label='Expand'])[2]").click();
  
      //PO Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.PONumber_1 }).click();
      const PONum_1 = this.page.getByRole('gridcell', { name: ScheduleTank.PONumber_1 }).innerHTML();
      console.log(await(PONum_1));
      expect((await PONum_1)).toContain("123456");
    

      //Tank Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).click();
      const TankNum_2 = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).innerHTML();
      console.log(await(TankNum_2));
      expect((await TankNum_2)).toContain("654321");
      //await this.page.getByLabel('Expand').click();
    
      await this.page.getByLabel('Data grid with 1 rows and 9').getByLabel('Edit').click();
      await this.page.getByLabel('Manufacture Quantity', { exact: true }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Manufacture Quantity', { exact: true }).fill('25');
      await this.page.getByRole('link', { name: 'Save' }).click();

      await this.page.waitForTimeout(1000);
      await this.page.locator("//td[@aria-label='Collapse']//div[1]").click();
      await this.page.waitForTimeout(1000);

      
      await this.page.locator("(//span[@class='dx-datagrid-adaptive-more'])[2]").click();
      await this.page.getByRole('button', { name: 'fa fa-sticky-note' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Note:').click();
      await this.page.getByLabel('Note:').fill(ScheduleTank.NoteForTicket);
      await this.page.waitForTimeout(1000);
      await this.page.getByText('Add/Edit Note for Ticket #').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Note saved successfully').click();

    
    }
  
  
  };