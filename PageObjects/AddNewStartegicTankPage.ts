import { Page,expect } from "@playwright/test";
import { StrategicNewTank } from "../TestData/StrategicNewTankJData";


export class AddStrategicNewTankPage {
    private page: Page;
  
    constructor(page: Page) {
        this.page = page;
    }



     async performAddTank() {
       await this.page.getByText('TanksTanks').click();
       await this.page.getByLabel('New Tank').click();
      
      
       //Tank Number 
      await this.page.getByLabel('Tank Number: *').click();   
      await this.page.getByLabel('Tank Number: *').fill(StrategicNewTank.TankNumber);
      const TankNumber = this.page.getByLabel('Tank Number: *').inputValue();
      console.log(await(TankNumber));
      expect(StrategicNewTank.TankNumber).toContain("985632");


      //Tank Capacity
      await this.page.locator('dx-number-box').getByRole('spinbutton').click();
      await this.page.locator('dx-number-box').getByRole('spinbutton').fill(StrategicNewTank.TankCapacity);
      const TankCapacity = this.page.locator('dx-number-box').getByRole('spinbutton').inputValue();
      console.log(await(TankCapacity));
      expect(StrategicNewTank.TankCapacity).toContain("5");

      //EstFills/Year
      await this.page.getByLabel('Est. Fills / Year: *').click();
      await this.page.getByLabel('Est. Fills / Year: *').fill(StrategicNewTank.EstFillsYear);
      const EstFillYear = this.page.getByLabel('Est. Fills / Year: *').inputValue();
      console.log(await(EstFillYear));
      expect(StrategicNewTank.EstFillsYear).toContain("7");

      //Selected Producted/Quote
      await this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').click();
      await this.page.getByText(StrategicNewTank.ProductQuote).click();
      const ProductQuote = this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').inputValue();
      console.log(await(ProductQuote));
      expect(StrategicNewTank.ProductQuote).toContain("Product: 10005Price: $")

      //Location
      await this.page.getByLabel('Location Name: *').click();
      await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).fill(StrategicNewTank.Address2);
      const LocationName = this.page.getByRole('textbox', { name: 'Address 2:' }).inputValue()
      console.log(await(LocationName));
      expect(StrategicNewTank.Address2).toContain("Testing");

      //City
      await this.page.getByRole('textbox', { name: 'City: *' }).click();

      //State
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByText(StrategicNewTank.State).click();
      const State = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
      console.log(await(State));
      expect((await State).includes(StrategicNewTank.State)).toBe(true);

     
      //ZipCode
      await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByText(StrategicNewTank.RecordSaved).click();

      //Tank Validations
      await this.page.getByRole('gridcell', { name: '985632' }).click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Info').click();
      await this.page.getByLabel('Install Date: *').click();
      await this.page.locator('#tanks-card').getByLabel('Select').nth(1).click();
      //await this.page.getByRole('gridcell', { name: 'Monday, April 29,' }).getByText('29').first().click();
      // await this.page.getByRole('gridcell', {name: 'Tuesday, May 28,'}).getByText('28').first().click();
      const today : Date = new Date();
      //Extract year, month, and day
      const year: number = today.getFullYear();
      const month: number = today.getMonth() + 1;
      const day : number = today.getDate();
  
      //Formatting of the Date as mm-dd-yyyy
      const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;
  

      await this.page.getByLabel('Install Date: *').click();
      await this.page.getByLabel('Install Date: *').fill(formattedDate);
      console.log(formattedDate);


      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).click();
      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).fill(StrategicNewTank.Department);
      const Department = this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).inputValue();
      console.log(await(Department));
      expect((await Department).includes(StrategicNewTank.Department)).toBe(true);

      await this.page.getByLabel('Delivery Information').getByLabel('Select').nth(1).click();
      await this.page.getByText('N 15').click();

      await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).fill(StrategicNewTank.ContactLastName);
      const ContactLastName = this.page.getByRole('textbox', { name: 'Contact Last Name:' }).inputValue();
      console.log(await(ContactLastName));
      expect((await ContactLastName).includes(StrategicNewTank.ContactLastName)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).click();
      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).fill(StrategicNewTank.Phone);
      const Phone = this.page.getByRole('textbox', { name: 'Phone:', exact: true }).inputValue();
      console.log(await(Phone));
      expect((await Phone).includes(StrategicNewTank.Phone)).toBe(true);

      await this.page.getByLabel('Cell Phone:').click();
      await this.page.getByLabel('Cell Phone:').fill(StrategicNewTank.CellPhone);
      const CellPhone = this.page.getByLabel('Cell Phone:').inputValue();
      console.log(await(CellPhone));
      expect((await CellPhone).includes(StrategicNewTank.CellPhone)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Contact Email:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact Email:' }).fill("Testing@gmail.com");

      await this.page.getByLabel('Tank Name:').click();
      await this.page.getByLabel('Tank Name:').fill("Testing Tank");

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Comments Tab
      await this.page.locator('#tanks-card').getByText('CommentsComments').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Comments').click();

      await this.page.waitForTimeout(1000);
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').click();
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill(StrategicNewTank.Paragrap1);
      const Comments1 = this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').innerHTML();
      console.log(await(Comments1));
      expect((await Comments1).includes(StrategicNewTank.Paragrap1)).toBe(true);

      await this.page.getByLabel('Editor content').nth(1).click();
      await this.page.getByLabel('Editor content').nth(1).fill(StrategicNewTank.Paragrap2);
      const Comments2 = this.page.getByLabel('Editor content').nth(1).innerHTML();
      console.log(await(Comments2));
      expect((await Comments2).includes(StrategicNewTank.Paragrap2)).toBe(true);

      await this.page.getByRole('paragraph').nth(2).click();
      await this.page.getByLabel('Editor content').nth(2).fill(StrategicNewTank.Paragrap3);
      const Comments3 = this.page.getByLabel('Editor content').nth(2).innerHTML();
      console.log(await(Comments3));
      expect((await Comments3).includes(StrategicNewTank.Paragrap3)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank History tab
      await this.page.getByText('HistoryHistory').click();
       
      //Tank PO/Tax tab
      await this.page.getByText('PO / TaxPO / Tax').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit PO/Tax Info').click();

      await this.page.getByLabel('PO #:').click();
      await this.page.getByLabel('PO #:').fill(StrategicNewTank.PONumber);
      const PONum = this.page.getByLabel('PO #:').inputValue();
      console.log(await(PONum));
      expect((await PONum).includes(StrategicNewTank.PONumber)).toBe(true);

      await this.page.getByLabel('Release Number:').click();
      await this.page.getByLabel('Release Number:').fill(StrategicNewTank.ReleaseNummber);
      const ReleaseNumber = this.page.getByLabel('Release Number:').inputValue();
      console.log(await(ReleaseNumber));
      expect((await ReleaseNumber).includes(StrategicNewTank.ReleaseNummber)).toBe(true);

      await this.page.getByLabel('Requisition Number:').click();
      await this.page.getByLabel('Requisition Number:').fill(StrategicNewTank.RequisitionNumber);
      const RequisitionNumber = this.page.getByLabel('Requisition Number:').inputValue();
      console.log(await(RequisitionNumber));
      expect((await RequisitionNumber).includes(StrategicNewTank.RequisitionNumber)).toBe(true);

      await this.page.getByLabel('Tax Rate:').click();
      await this.page.getByLabel('Tax Rate:').fill(StrategicNewTank.TaxRate);
      const TaxRate = this.page.getByLabel('Tax Rate:').inputValue();
      console.log(await(TaxRate));
      expect((await TaxRate).includes(StrategicNewTank.TaxRate)).toBe(true);

      await this.page.getByLabel('Tox Number:').click();
      await this.page.getByLabel('Tox Number:').fill(StrategicNewTank.ToxNumber);
      const ToxNumber = this.page.getByLabel('Tox Number:').inputValue();
      console.log(await(ToxNumber));
      expect((await ToxNumber).includes(StrategicNewTank.ToxNumber)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Equipment tab
      await this.page.getByText('EquipmentEquipment').click();
      await this.page.waitForTimeout(1000); 
      await this.page.getByRole('button', { name: 'Add a row' }).click();

      await this.page.getByLabel('Data grid with 0 rows and 6').getByLabel('', { exact: true }).click();
      await this.page.getByRole('gridcell', { name: '0223' }).click();

      await this.page.getByLabel('Quantity', { exact: true }).click();
      await this.page.getByLabel('Quantity', { exact: true }).fill('5');

      await this.page.getByLabel('Basis Date', { exact: true }).click();
      await this.page.getByLabel('Basis Date', { exact: true }).fill(formattedDate);
      console.log(formattedDate);
      
      await this.page.getByRole('link', { name: 'Save' }).click();
      
      await this.page.getByText('Record Saved Succesfully').first().click();
      await this.page.waitForTimeout(5000);



      //Adding Another Tank
      await this.page.getByRole('button', { name: 'New Tank' }).click();

       //Tank Number 
       //await this.page.getByLabel('Tank Number: *').click();   
       await this.page.getByRole('textbox', { name: 'Tank Number: *' }).click();
       await this.page.getByRole('textbox', { name: 'Tank Number: *' }).fill(StrategicNewTank.TankNumber1);
       const TankNumber1 = this.page.getByRole('textbox', { name: 'Tank Number: *' }).inputValue();
       console.log(await(TankNumber1));
       expect(StrategicNewTank.TankNumber1).toContain("654321");

         //Tank Capacity
      await this.page.locator('dx-number-box').getByRole('spinbutton').click();
      await this.page.locator('dx-number-box').getByRole('spinbutton').fill(StrategicNewTank.TankCapacity1);
      const TankCapacity1 = this.page.locator('dx-number-box').getByRole('spinbutton').inputValue();
      console.log(await(TankCapacity1));
      expect(StrategicNewTank.TankCapacity1).toContain("6");

      //EstFills/Year
      await this.page.getByRole('spinbutton', { name: 'Est. Fills / Year: *' }).click();
      await this.page.getByRole('spinbutton', { name: 'Est. Fills / Year: *' }).fill(StrategicNewTank.EstFillsYear1);
      const EstFillYear1 = this.page.getByRole('spinbutton', { name: 'Est. Fills / Year: *' }).inputValue();
      console.log(await(EstFillYear1));
      expect(StrategicNewTank.EstFillsYear1).toContain("4");

     //Selected Producted/Quote
      await this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').click();
      await this.page.getByRole('listbox').getByText(StrategicNewTank.ProductQuote1).click();
      const ProductQuote1 = this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').inputValue();
      console.log(await(ProductQuote1));
      expect(StrategicNewTank.ProductQuote1).toContain("Product: 10001Price: $")

      //Location
      await this.page.getByRole('textbox', { name: 'Location Name: *' }).click();
      await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).fill(StrategicNewTank.Address);
      const LocationName1 = this.page.getByRole('textbox', { name: 'Address 2:' }).inputValue()
      console.log(await(LocationName1));
      expect(StrategicNewTank.Address).toContain("Testing");

      //City
      await this.page.getByRole('textbox', { name: 'City: *' }).click();

      //State
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByRole('option', { name: StrategicNewTank.State }).locator('div').click();
      const State1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
      console.log(await(State1));
      expect((await State).includes(StrategicNewTank.State)).toBe(true);

     
      //ZipCode
      await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByText(StrategicNewTank.RecordSaved).click();


     //Tank Validations
      await this.page.getByRole('gridcell', { name: '654321' }).click();
      await this.page.getByText('Contact InformationContact Information').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Info').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByLabel('Install Date: *').click();
      await this.page.getByLabel('Install Date: *').fill(formattedDate);
      console.log(formattedDate);


      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).click();
      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).fill(StrategicNewTank.Department1);
      const Department1 = this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).inputValue();
      console.log(await(Department1));
      expect((await Department1).includes(StrategicNewTank.Department1)).toBe(true);

      await this.page.getByLabel('Delivery Information').getByLabel('Select').nth(1).click();
      await this.page.getByText('ARMCO').click();

      await this.page.getByRole('textbox', { name: 'Contact First Name:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact First Name:' }).fill(StrategicNewTank.ContactFirstName1);
      const ContactFirstName1 = this.page.getByRole('textbox', { name: 'Contact First Name:' }).inputValue();
      console.log(await(ContactFirstName1));
      expect((await ContactFirstName1).includes(StrategicNewTank.ContactFirstName1)).toBe(true);

      await this.page.locator("(//input[@name='contactLastName'])[2]").click();
      await this.page.locator("(//input[@name='contactLastName'])[2]").fill(StrategicNewTank.ContactLastName1);
      const ContactLastName1 = this.page.locator("(//input[@name='contactLastName'])[2]").inputValue();
      console.log(await(ContactLastName1));
      expect((await ContactLastName1).includes(StrategicNewTank.ContactLastName1)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).click();
      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).fill(StrategicNewTank.Phone1);
      const Phone1 = this.page.getByRole('textbox', { name: 'Phone:', exact: true }).inputValue();
      console.log(await(Phone1));
      expect((await Phone1).includes(StrategicNewTank.Phone1)).toBe(true);

      await this.page.getByLabel('Cell Phone:').click();
      await this.page.getByLabel('Cell Phone:').fill(StrategicNewTank.CellPhone1);
      const CellPhone1 = this.page.getByLabel('Cell Phone:').inputValue();
      console.log(await(CellPhone1));
      expect((await CellPhone1).includes(StrategicNewTank.CellPhone1)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Comments Tab
      await this.page.locator('#tanks-card').getByText('CommentsComments').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Comments').click();

      await this.page.waitForTimeout(1000);
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill(StrategicNewTank.Paragrap1);
      const Comments11 = this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').innerHTML();
      console.log(await(Comments11));
      expect((await Comments1).includes(StrategicNewTank.Paragrap1)).toBe(true);

      await this.page.getByLabel('Editor content').nth(1).click();
      await this.page.getByLabel('Editor content').nth(1).fill(StrategicNewTank.Paragrap2);
      const Comments12 = this.page.getByLabel('Editor content').nth(1).innerHTML();
      console.log(await(Comments12));
      expect((await Comments12).includes(StrategicNewTank.Paragrap2)).toBe(true);

      await this.page.getByRole('paragraph').nth(2).click();
      await this.page.getByLabel('Editor content').nth(2).fill(StrategicNewTank.Paragrap3);
      const Comments13 = this.page.getByLabel('Editor content').nth(2).innerHTML();
      console.log(await(Comments13));
      expect((await Comments3).includes(StrategicNewTank.Paragrap3)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank History tab
      await this.page.getByText('HistoryHistory').click();
       
      //Tank PO/Tax tab
      await this.page.getByText('PO / TaxPO / Tax').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit PO/Tax Info').click();

      await this.page.getByLabel('PO #:').click();
      await this.page.getByLabel('PO #:').fill(StrategicNewTank.PONumber1);
      const PONum1 = this.page.getByLabel('PO #:').inputValue();
      console.log(await(PONum1));
      expect((await PONum1).includes(StrategicNewTank.PONumber1)).toBe(true);

      await this.page.getByLabel('Release Number:').click();
      await this.page.getByLabel('Release Number:').fill(StrategicNewTank.ReleaseNummber1);
      const ReleaseNumber1 = this.page.getByLabel('Release Number:').inputValue();
      console.log(await(ReleaseNumber1));
      expect((await ReleaseNumber1).includes(StrategicNewTank.ReleaseNummber1)).toBe(true);

      await this.page.getByLabel('Requisition Number:').click();
      await this.page.getByLabel('Requisition Number:').fill(StrategicNewTank.RequisitionNumber1);
      const RequisitionNumber1 = this.page.getByLabel('Requisition Number:').inputValue();
      console.log(await(RequisitionNumber1));
      expect((await RequisitionNumber1).includes(StrategicNewTank.RequisitionNumber1)).toBe(true);

      await this.page.getByLabel('Tax Rate:').click();
      await this.page.getByLabel('Tax Rate:').fill(StrategicNewTank.TaxRate1);
      await this.page.waitForTimeout(1000);
      const TaxRate1 = this.page.getByLabel('Tax Rate:').inputValue();
      console.log(await(TaxRate1));
      expect((await TaxRate1).includes(StrategicNewTank.TaxRate1)).toBe(true);

      await this.page.getByLabel('Tox Number:').click();
      await this.page.getByLabel('Tox Number:').fill(StrategicNewTank.ToxNumber1);
      await this.page.waitForTimeout(1000);
      const ToxNumber1 = this.page.getByLabel('Tox Number:').inputValue();
      console.log(await(ToxNumber1));
      expect((await ToxNumber1).includes(StrategicNewTank.ToxNumber1)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Equipment tab
      await this.page.getByText('EquipmentEquipment').click();
      //await this.page.locator('#dx-4d8c518c-62c5-af52-9548-ac16126f67a7 > tbody > tr:nth-child(2) > .dx-command-edit').click();
      await this.page.waitForTimeout(1000); 
      await this.page.getByRole('button', { name: 'Add a row' }).click();

      await this.page.getByLabel('Data grid with 0 rows and 6').getByLabel('', { exact: true }).click();
      await this.page.getByRole('gridcell', { name: '0223' }).click();

      await this.page.getByLabel('Quantity', { exact: true }).click();
      await this.page.getByLabel('Quantity', { exact: true }).fill('5');

      await this.page.getByLabel('Basis Date', { exact: true }).click();
      await this.page.getByLabel('Basis Date', { exact: true }).fill(formattedDate);
      console.log(formattedDate);

      await this.page.getByRole('link', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();
      await this.page.waitForTimeout(1000);





        
     }
    };