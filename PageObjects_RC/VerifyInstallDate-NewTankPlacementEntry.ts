import { Page, expect } from "@playwright/test";
import { InstallDate_NewTankPlacemnet } from "../TestData_RC/InstallDate-NewTankPlacementEntry";



export class VerifyInstallDateNewTankPlacementEntry{
    public page : Page;


    constructor(page : Page){
        this.page = page;
    }

    async performInstallDateNewTankPlacementEntry() 

    {
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(InstallDate_NewTankPlacemnet.Customer);
        await this.page.getByRole('gridcell', { name: InstallDate_NewTankPlacemnet.Customer }).first().click();
        console.log(InstallDate_NewTankPlacemnet.Customer);

        //Navigating to Quote Page and creating a new quote
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Quote InfoQuote Info').click();
        await this.page.waitForTimeout(1500);
        await this.page.getByRole('button', { name: 'Add a row' }).click();
        await this.page.waitForTimeout(1000);
        // await this.page.getByRole('combobox', { name: 'Product Code: *' }).click();
        const productCodeCombobox = this.page.getByRole('combobox', { name: 'Product Code: *' }).first();
        await this.page.waitForTimeout(3500);
        await productCodeCombobox.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(1000);
        await productCodeCombobox.click();
        await this.page.getByRole('option').first().scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);

        //Getting all option from the dropdown
        await this.page.getByRole('option').last().scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(1000);
        // const options = await this.page.locator('role=option').all();
        const options = await this.page.getByRole('option').all();
        await this.page.waitForTimeout(1000);
        const optionsCount = options.length;
        console.log("Options count in Product Code dropdown:", optionsCount);

        if (optionsCount === 0){
            throw new Error("No options found in the dropdown")
        }

       // Select a random product code
        const randomIndex = Math.floor(Math.random() * optionsCount);
        await this.page.waitForTimeout(1000);
        await options[randomIndex].click();

       // Get the selected Product Code
       const selectedProductCode = await this.page.getByRole('combobox', { name: 'Product Code: *' }).inputValue();
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
        console.log("Randomly Price is :", randomPrice);

        await this.page.getByRole('combobox', { name: 'Unit of Issue: *' }).click();
        await this.page.getByLabel('Items').getByText(InstallDate_NewTankPlacemnet.UOI).click();
        console.log("Unit Of Measurement is :", InstallDate_NewTankPlacemnet.UOI);
        
        // await this.page.getByLabel('Total Commission %: *').click();
        await this.page.locator('#localCommissionPercent').click();
        await this.page.locator('#localCommissionPercent').fill(InstallDate_NewTankPlacemnet["Total Commission%"]);
        console.log("Total Commission % is :", InstallDate_NewTankPlacemnet["Total Commission%"]);

        await this.page.getByRole('combobox', { name: 'Commission Method: *' }).click();
        await this.page.getByText(InstallDate_NewTankPlacemnet["Commission Method"]).click();
        console.log("Commission Method is :", InstallDate_NewTankPlacemnet["Commission Method"]);
    
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
        console.log("Quote Date is :", formattedDate);
        await this.page.waitForTimeout(1000);    
        await this.page.getByLabel('Save').click();
        await this.page.getByText("Record Saved Succesfully").click();
        // await this.page.waitForTimeout(2000);

        //Navigating to Tank Page and creating a new Tank 
        await this.page.getByText('TanksTanks').click();
            //Generate a random tank number 
            function generateRandomTankNumber(): string {
                const min = 100000; //Minium 6-digit number 
                const max = 999999; //Maximum 6-digit number
                return Math.floor(Math.random() * (max - min + 1)+ min).toString();
            }
            function generateRandomTankCapacity(): string {
                const min = 100; //Minium 3-digut number
                const max = 999; //Maxmium 3-digut number
                return Math.floor(Math.random() * (max - min +1)+ min).toString();
            }
            function generateEstFills(): string {
                const min = 25; //Minium 2-digut number
                const max = 10; //Maxmium 2-digut number
                return Math.floor(Math.random() * (max - min +1)+ min).toString();
            }
            //Generate a new Tank Number 
            const randomTankNumber =  generateRandomTankNumber();
            const randomTankCapacity = generateRandomTankCapacity();
            const randomEstFills = generateEstFills();

        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('New Tank').click();
        await this.page.getByLabel('Tank Number: *').click();
        await this.page.getByLabel('Tank Number: *').fill(randomTankNumber);
        console.log(`Generated tank Number : ${randomTankNumber}`);
        await this.page.locator('dx-number-box').getByRole('spinbutton').click();
        await this.page.locator('dx-number-box').getByRole('spinbutton').fill(randomTankCapacity);
        console.log("Tank Capacity :", randomTankCapacity);
        await this.page.getByLabel('Est. Fills / Year: *').click();
        await this.page.getByLabel('Est. Fills / Year: *').fill(randomEstFills);
        console.log("Est Fills/Year :", randomEstFills);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('dialog', { name: 'New Tank' }).getByRole('combobox').click();
        await this.page.getByRole('heading', { name: InstallDate_NewTankPlacemnet.Product }).click();
        console.log("Selected Product is :", InstallDate_NewTankPlacemnet.Product);
        
        // const tankProductLocator = await this.page.getByRole('form').getByRole('combobox', { name: 'Select...' }).allInnerTexts();
        // console.log(tankProductLocator)                
        // await this.page.waitForTimeout(5000);
        // await this.page.getByRole('dialog', { name: 'New Tank'}).locator('dx-select-box').getByPlaceholder('Select...').click();
        // await this.page.waitForTimeout(1000);
        // // Locate the combobox and open it, then get the actual option elements
        // const combobox = this.page.getByRole('form').getByRole('combobox', { name: 'Select...' }).first();
        // await combobox.waitFor({ state: 'attached', timeout: 5000 });
        // await combobox.click();
        // // Wait for the options container (listbox) to become visible
        // const listbox = this.page.getByRole('listbox').first();
        // await listbox.waitFor({ state: 'visible', timeout: 5000 });
        // const optionLocator = listbox.getByRole('option');
        // const optionCount = await optionLocator.count();
        // console.log('Options count:', optionCount);

        // if (optionCount === 0) {
        //     throw new Error('No options found in the product dropdown');
        // }
        // let found = false;

        // for (let i = 0; i < optionCount; i++) {
        //     const option = optionLocator.nth(i);
        //     try {
        //         const optionText = (await option.innerText()).trim();
        //         console.log(`Option ${i + 1}: ${optionText}`);

        //         await option.click();
        //         await this.page.waitForTimeout(500);

        //         // After selecting the option, read the combobox input value (selected code)
        //         const productCode = await combobox.inputValue();

        //         // Get parent form and try to locate any price text containing '$'
        //         const formHandle = combobox.locator('xpath=ancestor::form').first();
        //         const priceLocator = formHandle.locator("text=/\\$/").first();
        //         let priceText = '';
        //         try {
        //             await priceLocator.waitFor({ state: 'attached', timeout: 3000 });
        //             priceText = (await priceLocator.textContent())?.trim() ?? '';
        //         } catch (e) {
        //             priceText = '';
        //         }

        //         console.log(`Product ${i + 1} - Code: ${productCode}, Price: ${priceText}`);

        //         if (
        //             productCode.trim() === selectedProductCode.trim() &&
        //             priceText.includes(randomPrice.trim())
        //         ) {
        //             console.log(`Selected Product: ${productCode} with Price: ${priceText}`);
        //             found = true;
        //             break;
        //         }

        //         // Re-open combobox to iterate next option
        //         await combobox.click();
        //         await listbox.waitFor({ state: 'visible', timeout: 3000 });
        //     } catch (error) {
        //         console.log(
        //             `Error processing option ${i + 1}:`,
        //             error instanceof Error ? error.message : error
        //         );
        //         // Ensure combobox is open for the next iteration
        //         try {
        //             await combobox.click();
        //             await listbox.waitFor({ state: 'visible', timeout: 3000 });
        //         } catch (_) {}
        //         continue;
        //     }
        // }

        // if (!found) {
        //     console.log('No exact match found, selecting first available product.');
        //     await this.page.locator("//div[@class='card-body']").first().click();
        // }

        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByText('Record Saved Succesfully').waitFor({ state: 'visible' });
        console.log("New Tank Created Successfully");

        //Editing the newly created Tank to add more details
        await this.page.getByRole('menubar').nth(0).click();
        await this.page.getByRole('menu').getByText('Equals').click();
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(randomTankNumber);
        await this.page.getByRole('gridcell', { name: randomTankNumber }).click();
        await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
        await this.page.getByText('Edit Info').click();
        await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).click();
        await this.page.getByRole('combobox', { name: 'Select or Enter a Dept' }).fill(InstallDate_NewTankPlacemnet["Department Name"]);
        await this.page.getByRole('textbox', { name: 'Contact First Name:' }).click();
        await this.page.getByRole('textbox', { name: 'Contact First Name:' }).fill(InstallDate_NewTankPlacemnet["First Name"]);
        await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).click();
        await this.page.getByRole('textbox', { name: 'Contact Last Name:' }).fill(InstallDate_NewTankPlacemnet["Last Name"]);
        await this.page.getByLabel('Delivery Information').getByRole('combobox', { name: 'Select...' }).click();
        await this.page.getByText(InstallDate_NewTankPlacemnet["Route Name"]).click();
        await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Phone:', exact: true }).fill(InstallDate_NewTankPlacemnet.Phone);
        await this.page.getByRole('textbox', { name: 'Cell Phone:' }).click();
        await this.page.getByRole('textbox', { name: 'Cell Phone:' }).fill(InstallDate_NewTankPlacemnet["Cell Phone"]);
        await this.page.getByRole('textbox', { name: 'Contact Email:' }).click();
        await this.page.getByRole('textbox', { name: 'Contact Email:' }).fill(InstallDate_NewTankPlacemnet["Contact Email"]);
        await this.page.getByRole('textbox', { name: 'Tank Name:' }).click();
        await this.page.getByRole('textbox', { name: 'Tank Name:' }).fill(InstallDate_NewTankPlacemnet["Tank Name"]);
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('combobox', { name: 'Install Date: *' }).click();
        await this.page.getByRole('combobox', { name: 'Install Date: *' }).fill(formattedDate);
        console.log("Install Date is :", formattedDate);

        // await this.page.getByLabel('Install Date: *').click();

        // Capture the screenshot
        await this.page.screenshot({ path: 'screenshots_RC/InstalledDate_RC.png', fullPage: true });
                

        //Navigating to Delivery and Schedule Page
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.getByLabel('Add To Schedule').click();
        await this.page.getByText('Add Tank').click();        
        await this.page.waitForTimeout(3000);        
        await this.page.getByPlaceholder('Select a Customer...').click();        
        await this.page.hover("//tbody/tr[@role='row']/td[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/i[1]");   
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.getByRole('textbox', { name: 'Filter cell' }).first().fill(InstallDate_NewTankPlacemnet.Customer_1);
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('gridcell', { name: InstallDate_NewTankPlacemnet.Customer_1 }).click();
        console.log(InstallDate_NewTankPlacemnet.Customer_1);
        await this.page.waitForTimeout(1000);            
        await this.page.getByRole('combobox', { name: 'Select Tanks...' }).click();
        await this.page.getByRole('menuitem', { name: 'Search box' }).nth(6).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('menu').getByText('Contains').click();
        await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(4).fill(randomTankNumber);
        await this.page.locator(`//tr[td[contains(., '${randomTankNumber}')]]//td[1]//span`).click();
        await this.page.getByRole('button', { name: 'OK' }).click();

        // await this.page.locator("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > dx-form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > dx-data-grid:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4)").click();
        // await this.page.locator("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/form[1]/dx-form[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/dx-data-grid[1]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]").click();
        await this.page.getByRole('columnheader', { name: 'Column Requested Qty' }).click();
        await this.page.locator('#dx-ed134eb7-e35a-b188-cb8a-ae68d2ae4bc9 > tbody > .dx-row.dx-data-row > td:nth-child(4)').click();
        await this.page.getByRole('spinbutton', { name: 'Press Escape to discard the' }).fill('18');


        await this.page.getByLabel('Scheduled Date:').click();
        await this.page.getByLabel('Scheduled Date:').fill(formattedDate);
        await this.page.getByRole('combobox', { name: 'Driver:' }).click();
        await this.page.getByRole('listbox').getByText('Dalton Beachy').click();
        await this.page.getByRole('combobox', { name: 'Truck Id:' }).click();
        await this.page.getByText(InstallDate_NewTankPlacemnet["Truck Id"]).click();
        await this.page.getByLabel('Save').click();
        await this.page.getByText('Record Saved Succesfully').waitFor({ state: 'visible' });
        console.log("Delivery Scheduled Successfully");

        //Navigating to Delivery Page to post the delivery
        await this.page.getByRole('menubar').nth(2).click();
        await this.page.getByText('Contains').click();
        // await this.page.waitForTimeout(5000);
        // await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(InstallDate_NewTankPlacemnet.Customer);
        
        await this.page.waitForTimeout(2000); 
        await this.page.getByRole('button', { name: 'Refresh Data' }).click(); 
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Reset State' }).click();
        await this.page.getByRole('textbox', { name: 'Filter cell' }).nth(1).fill(InstallDate_NewTankPlacemnet.Customer);

        //Navigating to Delivery Page to edit the PO and Manufactring fields
        await this.page.waitForTimeout(3000);
        const DeliveryTicketNumber = await this.page.getByRole('gridcell').nth(20).innerText();
        console.log('Delivery Ticket Number is :', DeliveryTicketNumber);        
        await this.page.waitForTimeout(2000);
        await this.page.getByLabel('Expand').locator('div').nth(-1).click();
        await this.page.getByLabel('Data grid with 1 rows and 9').getByLabel('Edit').click();

        //Genrating Random PO number 
        const randomPONumber = `PO${Math.floor(100000 + Math.random() *900000)}`;
        await this.page.getByLabel('PO', { exact: true }).fill(randomPONumber);

        const randomMQuantity = Math.floor(Math.random() * 900) + 100;
        const randomMQstr = randomMQuantity.toString();
        await this.page.getByLabel('Manufacture Quantity', { exact: true }).click();
        await this.page.getByLabel('Manufacture Quantity', { exact: true }).fill(randomMQstr);
        await this.page.getByRole('link', { name: 'Save' }).click();

        //Navigating to Posting Page
        await this.page.waitForTimeout(2000);
        await this.page.getByText('PostingPosting').click();
        await this.page.waitForTimeout(3000);

        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.getByRole('button', { name: 'Reset State' }).click();
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(DeliveryTicketNumber ? DeliveryTicketNumber.trim() : '');

        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
        await this.page.getByLabel('Amount', { exact: true }).fill(randomTankCapacity);
        await this.page.getByLabel('Amount', { exact: true }).press('Tab');
        await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');

        await this.page.getByLabel('Date', { exact: true }).press('Tab');
        await this.page.getByLabel('Rcvd By', { exact: true }).click();
        await this.page.getByLabel('Rcvd By', { exact: true }).fill(InstallDate_NewTankPlacemnet["First Name"]);
        await this.page.getByLabel('Rcvd By', { exact: true }).press('Tab');
        await this.page.getByRole('combobox', { name: 'Select or enter driver' }).press('Tab');
        await this.page.waitForTimeout(1000);
        await this.page.getByLabel('PO #', { exact: true }).press('Tab');
        await this.page.getByLabel('Req Inv Date', { exact: true }).click();
        await this.page.getByLabel('Req Inv Date', { exact: true }).fill(formattedDate);
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Post Deliveries' }).click();
        console.log("Delivery Posted Successfully");

        //Checking in the Customers Page for the New tank - Install Date Placement entry 
        await this.page.getByText('Customers').click();
        await this.page.getByRole('gridcell', { name: InstallDate_NewTankPlacemnet.Customer }).first().click();
        await this.page.getByText('TanksTanks').click();
        await this.page.getByRole('gridcell', { name: randomTankNumber }).click();
        await this.page.getByLabel('Install Date: *').click();
        const installDateValue = await this.page.getByLabel('Install Date: *').inputValue();
        console.log("Installed Date Value is :", installDateValue);

        // Capture the screenshot
        await this.page.screenshot({ path: 'screenshots_RC/Afterposting_RC.png', fullPage: true });
    

    
        
    }
}