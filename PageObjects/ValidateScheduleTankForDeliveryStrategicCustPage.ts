import { Page,expect } from "@playwright/test";
import { ScheduleTank } from "../TestData/ScheduleTankForeliveryJData";
import { NewStrategicCustomerInfoPage } from "./CreatingNewStrategicCustomerPage";


export class ScheduleTankForDeliveryStrategicCustPage{

    public page: Page;
    public static DeliveryTicketNumber:string;

    constructor(page: Page, ) {
      this.page = page;
    }
  
    async performScheduleTankForDelivery() {
      await this.page.waitForTimeout(2000);
      await this.page.getByText('Deliveries & Scheduling').click();
      await this.page.getByLabel('Add To Schedule').click();
      await this.page.getByText('Add Tank').click();
  
      await this.page.waitForTimeout(2000);
  
      await this.page.getByPlaceholder('Select a Customer...').click();
      await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]");
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('menu').getByText('Contains').click();
      await this.page.waitForTimeout(1000);
   
      await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(NewStrategicCustomerInfoPage.MyCustomerNum);
      console.log(NewStrategicCustomerInfoPage.MyCustomerNum);
      await this.page.getByRole('gridcell', { name: NewStrategicCustomerInfoPage.MyCustomerNum }).click();
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
      console.log(ScheduleTank.Driver)

      //TruckID
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByText('515', { exact: true }).click();
      const TruckID = await this.page.getByText('515', { exact: true }).innerText();
      console.log(TruckID);

      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Save').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.RecordSaved).click();
      await this.page.waitForTimeout(2000);

     //Redirecting to Confrim  Schedule page
      await this.page.getByLabel('Clear Selection').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Search...').click();
      await this.page.getByPlaceholder('Search...').fill(NewStrategicCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(3000);

      //Expanding the row
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
  
  
      //Misc
      await this.page.getByRole('link', { name: 'Misc/Freight' }).click();
      await this.page.waitForTimeout(3000);
  
      await this.page.getByLabel('Add New Misc/Freight Item').click();
      await this.page.waitForTimeout(1000);
      //await this.page.locator('#formdiv').getByLabel('Select').first().click();

      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').first().click();
      await this.page.getByText('14-45, Hijing Bolevard Street').click();
      
      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(1).click();
      await this.page.getByText('Misc', { exact: true }).click();
      //await this.page.getByText('Misc', { exact: true }).click();

      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Delivery Date:').click();
      await this.page.getByLabel('Delivery Date:').fill(formattedDate);
      const DeliveryDate = await this.page.getByLabel('Delivery Date:').innerText();
      console.log(await (formattedDate));
      console.log(await(DeliveryDate));
      expect((await (DeliveryDate)).includes(formattedDate));

      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(2).click();
      await this.page.getByRole('option', { name: '_ Tim Barker' }).locator('div').click();

      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(3).click();
      await this.page.getByRole('option', { name: '_ 515' }).locator('div').click();
  
      await this.page.getByLabel('Description:').click();
      await this.page.getByLabel('Description:').fill(ScheduleTank.Description);
      await this.page.waitForTimeout(2000);
      
      // await this.page.getByLabel('Qty: *').click();
      await this.page.getByLabel('Qty: *').click();
      await this.page.waitForTimeout(3000);
      await this.page.getByLabel('Qty: *').fill(ScheduleTank.Qty);
      await this.page.waitForTimeout(1000);

      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(4).click();
      await this.page.getByText('G', { exact: true }).click();

      await this.page.waitForTimeout(1000); 
      await this.page.getByLabel('Price Ea.:').click();
      await this.page.getByLabel('Price Ea.:').fill('$52.00');

      await this.page.getByRole('combobox', { name: 'Select a value...' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('combobox', { name: 'Select a value...' }).fill('45');
      await this.page.waitForTimeout(1000);
  
      await this.page.getByLabel('PO:').click();
      await this.page.getByLabel('PO:').fill("P4321");
  
      await this.page.locator('#formdiv').getByLabel('Done').click();
  
      await this.page.waitForTimeout(3000);
      await this.page.getByLabel('Done').click();

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

      //Adding 2nd Tank for Delivery
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
      
      await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(NewStrategicCustomerInfoPage.MyCustomerNum);
      //console.log(NewStrategicCustomerInfoPage.MyCustomerNum);
      await this.page.getByRole('gridcell', { name: NewStrategicCustomerInfoPage.MyCustomerNum }).click();
      await this.page.waitForTimeout(2000);

      //Department
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select a Department...').click();
      await this.page.getByRole('gridcell', { name: ScheduleTank.Department_1 }).first().click();
      const Department1 = this.page.getByRole('gridcell', { name: ScheduleTank.Department_1 }).first().innerText();
      console.log(await(Department1));
      expect((await Department1).includes(ScheduleTank.Department_1)).toBe(true);
      await this.page.waitForTimeout(2000);

      //Tank Number 
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select Tanks...').click();
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).click();
      const tankNumber1 = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).innerHTML();
      console.log(await(tankNumber1));
      expect(ScheduleTank.TankNumber_1).toContain("654321");
      await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
      await this.page.getByLabel('OK').click();
  
      //Schedule Date
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Scheduled Date:').click();
      await this.page.getByLabel('Scheduled Date:').fill(formattedDate);
      const date1 = this.page.getByLabel('Scheduled Date:').innerText();
      console.log(await (formattedDate));
      console.log(await(date1));
      expect((await (date1)).includes(formattedDate));

      //Driver
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('option', { name: ScheduleTank.Driver }).locator('div').click();
      console.log(ScheduleTank.Driver)

      //TruckID
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByRole('option', { name: '_ 233' }).locator('div').click();
      const TruckID1 = await this.page.getByRole('option', { name: '_ 233' }).locator('div').innerText();
      console.log(TruckID1);

      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Save').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText(ScheduleTank.RecordSaved).click();
      await this.page.waitForTimeout(2000);

      //Redirecting to Confrim  Schedule page
      await this.page.getByLabel('Clear Selection').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Search...').click();
      await this.page.getByPlaceholder('Search...').fill(NewStrategicCustomerInfoPage.MyCustomerNum);
      await this.page.waitForTimeout(3000);

      //Expanding the row
      await this.page.locator("(//td[@aria-label='Expand'])[2]").click();
    
     //PO Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.PONumber_1 }).click();
      const PONumber1 = this.page.getByRole('gridcell', { name: ScheduleTank.PONumber_1 }).innerHTML();
      console.log(await(PONumber1));
      expect((await PONumber1)).toContain("123456");
      
  
      //Tank Number 
      await this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).click();
      const TankNum1 = this.page.getByRole('gridcell', { name: ScheduleTank.TankNumber_1 }).innerHTML();
      console.log(await(TankNum1));
      expect((await TankNum1)).toContain("654321");

      await this.page.getByLabel('Data grid with 1 rows and 9').getByLabel('Edit').click();
      await this.page.getByLabel('Manufacture Quantity', { exact: true }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Manufacture Quantity', { exact: true }).fill('26');
      await this.page.getByRole('link', { name: 'Save' }).click();

      await this.page.waitForTimeout(1000);
      await this.page.locator("//td[@aria-label='Collapse']//div[1]").click();
      await this.page.waitForTimeout(1000);

      //Misc/Freight
      await this.page.getByRole('link', { name: 'Misc/Freight' }).nth(1).click();
      await this.page.waitForTimeout(3000);
  
      await this.page.getByLabel('Add New Misc/Freight Item').click();
      await this.page.waitForTimeout(1000);
      //await this.page.locator('#formdiv').getByLabel('Select').first().click();

      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').first().click();
      await this.page.getByText('14-45, Hijing Testing, Dayton, OH,').click();
      
      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(1).click();
      await this.page.getByText('Freight', { exact: true }).click();

      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Delivery Date:').click();
      await this.page.getByLabel('Delivery Date:').fill(formattedDate);
      const DeliveryDate_2 = await this.page.getByLabel('Delivery Date:').innerText();
      console.log(await (formattedDate));
      console.log(await(DeliveryDate_2));
      expect((await (DeliveryDate_2)).includes(formattedDate));

      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(2).click();
      await this.page.getByText('David Gebhart').click();

      await this.page.waitForTimeout(1000);
      await this.page.locator('#formdiv').getByPlaceholder('Select...').nth(3).click();
      await this.page.getByRole('option', { name: '_ 233' }).locator('div').click();

      await this.page.waitForTimeout(1000); 
      await this.page.getByLabel('Price Ea.:').click();
      await this.page.getByLabel('Price Ea.:').fill('$52.00');
  
      await this.page.getByLabel('PO:').click();
      await this.page.getByLabel('PO:').fill("P4321");
  
      await this.page.locator('#formdiv').getByLabel('Done').click();
  
      await this.page.waitForTimeout(3000);
      await this.page.getByLabel('Done').click();

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