import { Page, expect } from "@playwright/test";
import { ScheduleTankIDPage } from "../TestData/ScheduleTankDeliveryIDPageJData";
import { Console } from "console";



export class ScheduleTankforDeliveryIDPage {

    public page : Page;

    constructor(page: Page){
        this.page = page;
    }


    async performScheduleTankforDeliveryIDPage()
    {

      
        //Creating the new Quote
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').fill(ScheduleTankIDPage.Customer_Name);
        console.log("Customer Name is :", ScheduleTankIDPage.Customer_Name);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: 'Creating Tanks' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Quote InfoQuote Info').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('Add a row').click();

        await this.page.waitForTimeout(10000);
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.locator('role=option').first().waitFor({ state: 'visible'});

        //Getting all option from the dropdown
        const options = await this.page.locator('role=option').all();
        const optionsCount = options.length;

       // Select a random product code
        const randomIndex = Math.floor(Math.random() * optionsCount);
        await options[randomIndex].click();

       // Get the selected Product Code
       const selectedProductCode = await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).inputValue();
       console.log("Selected Product Code:", selectedProductCode);

        //Generating a random price between a specified range 
        function getRandomPrice(min: number, max: number): string{
            //Generate a random float within the range
            const randomPrice = (Math.random() * (max - min)+ min).toFixed(2); //3decimal values
            return `$${randomPrice}`;
        }
        //Use the funstion to fill the random price$
        const randomPrice = getRandomPrice(10,1000); //Random price between $10 -$1000
        await this.page.getByLabel('Price: *').click();
        await this.page.getByLabel('Price: *').fill(randomPrice);
        console.log(randomPrice);
        
        
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
        await this.page.getByLabel('Items').getByText(ScheduleTankIDPage.UOM).click();
        console.log("Unit Of Measurement is :", ScheduleTankIDPage.UOM);
        
        await this.page.getByLabel('Total Commission %: *').click();
        await this.page.getByLabel('Total Commission %: *').fill('2.100%');
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
        await this.page.getByText('Global MSC').click();

        //Date
        const today : Date = new Date();
        //Extract year, month, and day
        const year: number = today.getFullYear();
        const month: number = today.getMonth() + 1;
        const day : number = today.getDate();
      
        //Formatting of the Date as mm-dd-yyyy
        const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;
      
    
        await this.page.getByLabel('Quote Date: *').click();
        await this.page.getByLabel('Quote Date: *').fill(formattedDate);
        console.log(formattedDate);

        await this.page.waitForTimeout(5000);

        await this.page.getByLabel('Save').click();
        await this.page.getByText("Record Saved Succesfully").click();

        //Creating a new Tank
        await this.page.getByText('TanksTanks').click();
        //Generate a random tank number 
        function generateRandomTankNumber(): string {
            const min = 100000; //Minium 6-digit number 
            const max = 999999; //Maximum 6-digit number
            return Math.floor(Math.random() * (max - min + 1)+ min).toString();
        }
        //Generate a new Tank Number 
        const randomTankNumber =  generateRandomTankNumber();
        await this.page.getByLabel('New Tank').click();
        await this.page.getByLabel('Tank Number: *').click();
        await this.page.getByLabel('Tank Number: *').fill(randomTankNumber);
        console.log(`Generated tank Number : ${randomTankNumber}`);
        await this.page.locator('dx-number-box').getByRole('spinbutton').click();
        await this.page.locator('dx-number-box').getByRole('spinbutton').fill(ScheduleTankIDPage.TankCapacity);
        console.log("Tank Capacity :", ScheduleTankIDPage.TankCapacity);
        await this.page.getByLabel('Est. Fills / Year: *').click();
        await this.page.getByLabel('Est. Fills / Year: *').fill(ScheduleTankIDPage.Est_Fills_Year);
        console.log("Est Fills/Year :", ScheduleTankIDPage.Est_Fills_Year);

        
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('dialog', { name: 'New Tank' }).locator('dx-select-box').getByPlaceholder('Select...').click();
        await this.page.waitForTimeout(2000);

        const tankProductLocator = await this.page.locator("(//div[@class='card-body'])[*]/h6[1]").filter({ hasText: selectedProductCode})
        //const tankProduct_Codes = await this.page.locator("(//div[@class='card-body'])[*]/h6[1]").allInnerTexts();
        
        if (await tankProductLocator.count() > 0) {
            await tankProductLocator.click();
            console.log(`Selected Product Code in Tank Page: ${selectedProductCode}`);
        } else {
            console.log("No exact math found");
            await this.page.locator("//div[@class='card-body']/h6[1]").first().click();
        }
      
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Accessing tank contact information tab
        await this.page.getByRole('gridcell', { name: randomTankNumber }).click();
        await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        await this.page.getByText('Edit Info').click();

        await this.page.getByLabel('Install Date: *').click();
        await this.page.getByLabel('Install Date: *').fill(formattedDate);
        console.log(formattedDate);

        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.getByText('EAST', { exact: true }).click();

        //Generateing random string for the department
        function generateRandomDept() : string{
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = 'Dept-';
            for(let i = 0; i < 4; i++){
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
        //Generated and use the random department name
        const randomDept = generateRandomDept();
        await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).click();
        await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).fill(randomDept);
        console.log(`Department of the Tank :${randomDept}`);

        await this.page.getByRole('textbox', { name: 'Contact First Name:' }).click();
        await this.page.getByRole('textbox', { name: 'Contact First Name:' }).fill(ScheduleTankIDPage.ContactFirstName);
        await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).click();
        await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).fill(ScheduleTankIDPage.ContactLastName);
        await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).fill('(123) 456-7896_');
        await this.page.getByLabel('Cell Phone:').click();
        await this.page.getByLabel('Cell Phone:').fill('(951) 357-4852_');
        await this.page.getByRole('textbox', { name: 'Contact Email:' }).click();
        await this.page.getByRole('textbox', { name: 'Contact Email:' }).fill(ScheduleTankIDPage.ContactEmail);

        //Generate Random Tank Name 
        const randomNumber = Math.floor(100 + Math.random() * 900);
        const tankName = `TestTank${randomNumber}`
        await this.page.getByLabel('Tank Name:').click();
        await this.page.getByLabel('Tank Name:').fill(tankName);
        console.log(`Generated Tank Name :${tankName}`);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Updating to the PO/Tax tab
        await this.page.getByText('PO / TaxPO / Tax').click();
        await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        await this.page.getByText('Edit PO/Tax Info').click();
        await this.page.getByLabel('PO #:').click();
        await this.page.getByLabel('PO #:').fill(ScheduleTankIDPage.PONumber);
        await this.page.getByLabel('Release Number:').click();
        await this.page.getByLabel('Release Number:').fill(ScheduleTankIDPage.ReleaseNumber);
        await this.page.getByLabel('Requisition Number:').click();
        await this.page.getByLabel('Requisition Number:').fill(ScheduleTankIDPage.Requisition_Number);
        await this.page.getByLabel('Tax Rate:').click();
        await this.page.getByLabel('Tax Rate:').fill(ScheduleTankIDPage.Tax_Rate);
        await this.page.getByLabel('Tox Number:').click();
        await this.page.getByLabel('Tox Number:').fill(ScheduleTankIDPage.Tox_Number);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').click();

        //Updating the Equipment Tab of the tank
        await this.page.getByText('EquipmentEquipment').click();
        await this.page.waitForTimeout(1000); 
        await this.page.getByRole('button', { name: 'Add a row' }).click();
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

        //Delivery and Scheduling Tab 
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(2000);
        //await this.page.getByLabel('Add Tank to Schedule').click();
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

        await this.page.locator("(//input[@aria-label='Filter cell'])[10]").fill(ScheduleTankIDPage.Customer_Name);
        console.log(ScheduleTankIDPage.Customer_Name);
        await this.page.getByRole('gridcell', { name: ScheduleTankIDPage.Customer_Name }).click();
        await this.page.waitForTimeout(2000);

        await this.page.locator('dx-drop-down-box').filter({ hasText: 'NameTestingSanity' }).getByLabel('Select').click();
        await this.page.getByRole('gridcell', { name: randomDept }).click();
        console.log(randomDept);
        await this.page.getByPlaceholder('Select Tanks...').click();
        await this.page.getByLabel('Data grid with 1 rows and 5').getByLabel('Select row').click();
        await this.page.getByRole('gridcell', { name: randomTankNumber }).click();
        await this.page.getByRole('gridcell', { name: randomDept }).click();
        await this.page.getByLabel('OK').click();
        await this.page.getByLabel('Scheduled Date:').click();
        await this.page.getByLabel('Scheduled Date:').fill(formattedDate);
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
        await this.page.getByText('Tim Barker').click();
        await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
        await this.page.getByRole('option', { name: '_ 233' }).locator('div').click();
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').click();
        await this.page.getByPlaceholder('Search...').click();
        await this.page.getByPlaceholder('Search...').fill(ScheduleTankIDPage.Customer_Name);


    }
}