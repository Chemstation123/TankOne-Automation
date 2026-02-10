import { Page,expect } from "@playwright/test";
import { NewTank } from "../TestData/AddNewTankJData";


export class AddNewTankPage {
    public page: Page;
  
    constructor(page: Page) {
        this.page = page;
    }



     async performAddTank() {
       await this.page.getByText('TanksTanks').click();
       await this.page.getByLabel('New Tank').click();
      
      
       //Tank Number 
    
      await this.page.getByLabel('Tank Number: *').click();   
      await this.page.getByLabel('Tank Number: *').fill(NewTank.TankNumber);
      const TankNumber = this.page.getByLabel('Tank Number: *').inputValue();
      console.log(await(TankNumber));
      expect(NewTank.TankNumber).toContain("985632");


      //Tank Capacity
      await this.page.locator('dx-number-box').getByRole('spinbutton').click();
      await this.page.locator('dx-number-box').getByRole('spinbutton').fill(NewTank.TankCapacity);
      const TankCapacity = this.page.locator('dx-number-box').getByRole('spinbutton').inputValue();
      console.log(await(TankCapacity));
      expect(NewTank.TankCapacity).toContain("5");

      //EstFills/Year
      await this.page.getByLabel('Est. Fills / Year: *').click();
      await this.page.getByLabel('Est. Fills / Year: *').fill(NewTank.EstFillsYear);
      const EstFillYear = this.page.getByLabel('Est. Fills / Year: *').inputValue();
      console.log(await(EstFillYear));
      expect(NewTank.EstFillsYear).toContain("7");

      //Selected Producted/Quote
      await this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').click();
      await this.page.getByText(NewTank.ProductQuote).click();
      const ProductQuote = this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').inputValue();
      console.log(await(ProductQuote));
      expect(NewTank.ProductQuote).toContain("Product: 10005Price: $")

      //Location
      await this.page.getByLabel('Location Name: *').click();
      await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).fill(NewTank.Address2);
      const LocationName = this.page.getByRole('textbox', { name: 'Address 2:' }).inputValue()
      console.log(await(LocationName));
      expect(NewTank.Address2).toContain("Testing");

      //City
      await this.page.getByRole('textbox', { name: 'City: *' }).click();

      //State
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByText(NewTank.State).click();
      const State = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
      console.log(await(State));
      expect((await State).includes(NewTank.State)).toBe(true);

     
      //ZipCode
      await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByText(NewTank.RecordSaved).click();

      //Tank Validations
      await this.page.getByRole('gridcell', { name: '985632' }).click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Info').click();
      await this.page.getByLabel('Install Date: *').click();
      await this.page.locator('#tanks-card').getByLabel('Select').nth(1).click();

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
      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).fill(NewTank.Department);
      const Department = this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).inputValue();
      console.log(await(Department));
      expect((await Department).includes(NewTank.Department)).toBe(true);

      await this.page.getByLabel('Delivery Information').getByLabel('Select').nth(1).click();
      //await this.page.getByText('N 15').click();
      await this.page.getByText('N 15').click();

      await this.page.getByRole('textbox', { name: 'Contact First Name:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact First Name:' }).fill(NewTank.ContactFirstName);
      const ContactFirstName = this.page.getByRole('textbox', { name: 'Contact First Name:' }).inputValue();
      console.log(await(ContactFirstName));
      expect((await ContactFirstName).includes(NewTank.ContactFirstName)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).fill(NewTank.ContactLastName);
      const ContactLastName = this.page.getByRole('textbox', { name: 'Contact Last Name:' }).inputValue();
      console.log(await(ContactLastName));
      expect((await ContactLastName).includes(NewTank.ContactLastName)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).click();
      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).fill(NewTank.Phone);
      const Phone = this.page.getByRole('textbox', { name: 'Phone:', exact: true }).inputValue();
      console.log(await(Phone));
      expect((await Phone).includes(NewTank.Phone)).toBe(true);

      await this.page.getByLabel('Cell Phone:').click();
      await this.page.getByLabel('Cell Phone:').fill(NewTank.CellPhone);
      const CellPhone = this.page.getByLabel('Cell Phone:').inputValue();
      console.log(await(CellPhone));
      expect((await CellPhone).includes(NewTank.CellPhone)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Contact Email:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact Email:' }).fill("Testing@gmail.com");
      const Email = this.page.getByRole('textbox', { name: 'Contact Email:' }).inputValue();
      console.log(await (Email));

      await this.page.getByLabel('Tank Name:').click();
      await this.page.getByLabel('Tank Name:').fill("Testing Tank");
      const Tank_Name = this.page.getByLabel('Tank Name:').inputValue();
      console.log(await (Tank_Name));


      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Comments Tab
      await this.page.locator('#tanks-card').getByText('CommentsComments').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Comments').click();

      await this.page.waitForTimeout(1000);
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').click();
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill(NewTank.Paragrap1);
      const Comments1 = this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').innerHTML();
      console.log(await(Comments1));
      expect((await Comments1).includes(NewTank.Paragrap1)).toBe(true);

      await this.page.getByLabel('Editor content').nth(1).click();
      await this.page.getByLabel('Editor content').nth(1).fill(NewTank.Paragrap2);
      const Comments2 = this.page.getByLabel('Editor content').nth(1).innerHTML();
      console.log(await(Comments2));
      expect((await Comments2).includes(NewTank.Paragrap2)).toBe(true);

      await this.page.getByRole('paragraph').nth(2).click();
      await this.page.getByLabel('Editor content').nth(2).fill(NewTank.Paragrap3);
      const Comments3 = this.page.getByLabel('Editor content').nth(2).innerHTML();
      console.log(await(Comments3));
      expect((await Comments3).includes(NewTank.Paragrap3)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank History tab
      await this.page.getByText('HistoryHistory').click();
       
      //Tank PO/Tax tab
      await this.page.getByText('PO / TaxPO / Tax').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit PO/Tax Info').click();

      await this.page.getByLabel('PO #:').click();
      await this.page.getByLabel('PO #:').fill(NewTank.PONumber);
      const PONum = this.page.getByLabel('PO #:').inputValue();
      console.log(await(PONum));
      expect((await PONum).includes(NewTank.PONumber)).toBe(true);

      await this.page.getByLabel('Release Number:').click();
      await this.page.getByLabel('Release Number:').fill(NewTank.ReleaseNummber);
      const ReleaseNumber = this.page.getByLabel('Release Number:').inputValue();
      console.log(await(ReleaseNumber));
      expect((await ReleaseNumber).includes(NewTank.ReleaseNummber)).toBe(true);

      await this.page.getByLabel('Requisition Number:').click();
      await this.page.getByLabel('Requisition Number:').fill(NewTank.RequisitionNumber);
      const RequisitionNumber = this.page.getByLabel('Requisition Number:').inputValue();
      console.log(await(RequisitionNumber));
      expect((await RequisitionNumber).includes(NewTank.RequisitionNumber)).toBe(true);

      await this.page.getByLabel('Tax Rate:').click();
      await this.page.getByLabel('Tax Rate:').fill(NewTank.TaxRate);
      const TaxRate = this.page.getByLabel('Tax Rate:').inputValue();
      console.log(await(TaxRate));
      expect((await TaxRate).includes(NewTank.TaxRate)).toBe(true);

      await this.page.getByLabel('Tox Number:').click();
      await this.page.getByLabel('Tox Number:').fill(NewTank.ToxNumber);
      const ToxNumber = this.page.getByLabel('Tox Number:').inputValue();
      console.log(await(ToxNumber));
      expect((await ToxNumber).includes(NewTank.ToxNumber)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Equipment tab
      await this.page.getByText('EquipmentEquipment').click();
      await this.page.waitForTimeout(1000); 
      await this.page.getByRole('button', { name: 'Add a row' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select a value...').click();
      await this.page.waitForTimeout(2000);
      await this.page.getByPlaceholder('Select a value...').click();
      

      await this.page.getByLabel('Data grid with 0 rows and 6').getByLabel('', { exact: true }).click();
      await this.page.getByRole('gridcell', { name: '0223' }).click();
      await this.page.getByLabel('Quantity', { exact: true }).click();
      await this.page.getByLabel('Quantity', { exact: true }).fill('5');

      await this.page.getByLabel('Basis Date', { exact: true }).click();
      await this.page.getByLabel('Basis Date', { exact: true }).fill(formattedDate);
      console.log(formattedDate);

      await this.page.getByRole('link', { name: 'Save' }).click();
      
      await this.page.getByText('Record Saved Succesfully').click();
      await this.page.waitForTimeout(5000);


      //Adding Another Tank
      await this.page.getByRole('button', { name: 'New Tank' }).click();

      //Tank Number 
      //await this.page.getByLabel('Tank Number: *').click();   
       await this.page.getByRole('textbox', { name: 'Tank Number: *' }).click();
       await this.page.getByRole('textbox', { name: 'Tank Number: *' }).fill(NewTank.TankNumber1);
       const TankNumber1 = this.page.getByRole('textbox', { name: 'Tank Number: *' }).inputValue();
       console.log(await(TankNumber1));
       expect(NewTank.TankNumber1).toContain("654321");

      //Tank Capacity
      await this.page.locator('dx-number-box').getByRole('spinbutton').click();
      await this.page.locator('dx-number-box').getByRole('spinbutton').fill(NewTank.TankCapacity1);
      const TankCapacity1 = this.page.locator('dx-number-box').getByRole('spinbutton').inputValue();
      console.log(await(TankCapacity1));
      expect(NewTank.TankCapacity1).toContain("6");

      //EstFills/Year
      await this.page.getByRole('spinbutton', { name: 'Est. Fills / Year: *' }).click();
      await this.page.getByRole('spinbutton', { name: 'Est. Fills / Year: *' }).fill(NewTank.EstFillsYear1);
      const EstFillYear1 = this.page.getByRole('spinbutton', { name: 'Est. Fills / Year: *' }).inputValue();
      console.log(await(EstFillYear1));
      expect(NewTank.EstFillsYear1).toContain("4");

     //Selected Producted/Quote
      await this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').click();
      await this.page.getByRole('listbox').getByText(NewTank.ProductQuote1).click();
      const ProductQuote1 = this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').inputValue();
      console.log(await(ProductQuote1));
      expect(NewTank.ProductQuote1).toContain("Product: 10001Price: $")

      //Location
      await this.page.getByRole('textbox', { name: 'Location Name: *' }).click();
      await this.page.getByRole('textbox', { name: 'Address 1: *' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).click();
      await this.page.getByRole('textbox', { name: 'Address 2:' }).fill(NewTank.Address);
      const LocationName1 = this.page.getByRole('textbox', { name: 'Address 2:' }).inputValue()
      console.log(await(LocationName1));
      expect(NewTank.Address).toContain("Testing");

      //City
      await this.page.getByRole('textbox', { name: 'City: *' }).click();

      //State
      await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
      await this.page.getByRole('option', { name: NewTank.State }).locator('div').click();
      const State1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
      console.log(await(State1));
      expect((await State).includes(NewTank.State)).toBe(true);

     
      //ZipCode
      await this.page.getByRole('textbox', { name: 'Zip Code: *' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.waitForTimeout(2000);
      await this.page.getByText(NewTank.RecordSaved).click();


     //Tank Validations
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('gridcell', { name: '654321' }).click();
      await this.page.waitForTimeout(1000);
      await this.page.getByText('Contact InformationContact Information').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Info').click();
      await this.page.waitForTimeout(2000);

      await this.page.getByLabel('Install Date: *').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByLabel('Install Date: *').fill(formattedDate);
      console.log(formattedDate);


      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).click();
      await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).fill(NewTank.Department1);
      const Department1 = this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).inputValue();
      console.log(await(Department1));
      expect((await Department1).includes(NewTank.Department1)).toBe(true);

      await this.page.getByLabel('Delivery Information').getByLabel('Select').nth(1).click();
      //await this.page.getByText('N 15').click();
      await this.page.getByText('ARMCO').click();

      await this.page.getByRole('textbox', { name: 'Contact First Name:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact First Name:' }).fill(NewTank.ContactFirstName1);
      const ContactFirstName1 = this.page.getByRole('textbox', { name: 'Contact First Name:' }).inputValue();
      console.log(await(ContactFirstName1));
      expect((await ContactFirstName1).includes(NewTank.ContactFirstName1)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).fill(NewTank.ContactLastName1);
      const ContactLastName1 = this.page.getByRole('textbox', { name: 'Contact Last Name:' }).inputValue();
      console.log(await(ContactLastName1));
      expect((await ContactLastName1).includes(NewTank.ContactLastName1)).toBe(true);

      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).click();
      await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).fill(NewTank.Phone1);
      const Phone1 = this.page.getByRole('textbox', { name: 'Phone:', exact: true }).inputValue();
      console.log(await(Phone1));
      expect((await Phone1).includes(NewTank.Phone1)).toBe(true);

      await this.page.getByLabel('Cell Phone:').click();
      await this.page.getByLabel('Cell Phone:').fill(NewTank.CellPhone1);
      const CellPhone1 = this.page.getByLabel('Cell Phone:').inputValue();
      console.log(await(CellPhone1));
      expect((await CellPhone1).includes(NewTank.CellPhone1)).toBe(true);


      await this.page.getByRole('textbox', { name: 'Contact Email:' }).click();
      await this.page.getByRole('textbox', { name: 'Contact Email:' }).fill("Testing@gmail.com");
      const Email_1 = this.page.getByRole('textbox', { name: 'Contact Email:' }).inputValue();
      console.log(await (Email_1));

      await this.page.getByLabel('Tank Name:').click();
      await this.page.getByLabel('Tank Name:').fill("Testing Tank");
      const Tank1_Name = this.page.getByLabel('Tank Name:').inputValue();
      console.log(await (Tank1_Name));

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank Comments Tab
      await this.page.locator('#tanks-card').getByText('CommentsComments').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit Comments').click();

      await this.page.waitForTimeout(1000);
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').click();
      await this.page.waitForTimeout(1000);
      await this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').fill(NewTank.Paragrap1);
      const Comments11 = this.page.getByRole('group', { name: 'Tank Comments' }).getByLabel('Editor content').innerHTML();
      console.log(await(Comments11));
      expect((await Comments1).includes(NewTank.Paragrap1)).toBe(true);

      await this.page.getByLabel('Editor content').nth(1).click();
      await this.page.getByLabel('Editor content').nth(1).fill(NewTank.Paragrap2);
      const Comments12 = this.page.getByLabel('Editor content').nth(1).innerHTML();
      console.log(await(Comments12));
      expect((await Comments12).includes(NewTank.Paragrap2)).toBe(true);

      await this.page.getByRole('paragraph').nth(2).click();
      await this.page.getByLabel('Editor content').nth(2).fill(NewTank.Paragrap3);
      const Comments13 = this.page.getByLabel('Editor content').nth(2).innerHTML();
      console.log(await(Comments13));
      expect((await Comments3).includes(NewTank.Paragrap3)).toBe(true);

      await this.page.getByRole('button', { name: 'Save' }).click();
      await this.page.getByText('Record Saved Succesfully').click();

      //Tank History tab
      await this.page.getByText('HistoryHistory').click();
       
      //Tank PO/Tax tab
      await this.page.getByText('PO / TaxPO / Tax').click();
      await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
      await this.page.getByText('Edit PO/Tax Info').click();

      await this.page.getByLabel('PO #:').click();
      await this.page.getByLabel('PO #:').fill(NewTank.PONumber1);
      const PONum1 = this.page.getByLabel('PO #:').inputValue();
      console.log(await(PONum1));
      expect((await PONum1).includes(NewTank.PONumber1)).toBe(true);

      await this.page.getByLabel('Release Number:').click();
      await this.page.getByLabel('Release Number:').fill(NewTank.ReleaseNummber1);
      const ReleaseNumber1 = this.page.getByLabel('Release Number:').inputValue();
      console.log(await(ReleaseNumber1));
      expect((await ReleaseNumber1).includes(NewTank.ReleaseNummber1)).toBe(true);

      await this.page.getByLabel('Requisition Number:').click();
      await this.page.getByLabel('Requisition Number:').fill(NewTank.RequisitionNumber1);
      const RequisitionNumber1 = this.page.getByLabel('Requisition Number:').inputValue();
      console.log(await(RequisitionNumber1));
      expect((await RequisitionNumber1).includes(NewTank.RequisitionNumber1)).toBe(true);

      await this.page.getByLabel('Tax Rate:').click();
      await this.page.getByLabel('Tax Rate:').fill(NewTank.TaxRate1);
      const TaxRate1 = this.page.getByLabel('Tax Rate:').inputValue();
      console.log(await(TaxRate1));
      expect((await TaxRate1).includes(NewTank.TaxRate1)).toBe(true);

      await this.page.getByLabel('Tox Number:').click();
      await this.page.getByLabel('Tox Number:').fill(NewTank.ToxNumber1);
      const ToxNumber1 = this.page.getByLabel('Tox Number:').inputValue();
      console.log(await(ToxNumber1));
      expect((await ToxNumber1).includes(NewTank.ToxNumber1)).toBe(true);

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
      await this.page.getByText('Record Saved Succesfully').click();
      await this.page.waitForTimeout(1000);





        
     }
    };