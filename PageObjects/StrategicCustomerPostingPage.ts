import { Page,expect } from "@playwright/test";
import { StrategicCustPosting } from "../TestData/StrategicCustJData";
import { NewStrategicCustomerInfoPage } from "./CreatingNewStrategicCustomerPage";


export class StrategicCustomerPostingPage{
  
    public page: Page;
   
    
    constructor(page: Page){
      this.page = page;
    }
    
  
  async performStartegicCustPostingPage() {
    await this.page.reload();
    await this.page.locator("//span[normalize-space(text())='Deliveries & Scheduling']").click();
    
    //Fetching the automated customer for the Delivery Ticket numbers
    await this.page.getByPlaceholder('Search...').fill(NewStrategicCustomerInfoPage.MyCustomerNum);
    await this.page.waitForTimeout(3000);

    //Extracting Delivery Ticket Numbers
    const ST_DeliveryTicket_1 = await this.page.locator("(//tr[@aria-rowindex='1']//td)[3]").innerText();
    console.log(ST_DeliveryTicket_1);

    const ST_DeliveryTicket_2 = await this.page.locator("(//tr[@aria-rowindex='2']//td)[3]").innerText();
    console.log(ST_DeliveryTicket_2);

    //Posting Tab 
    await this.page.getByText('PostingPosting').click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("(//input[@placeholder='Search...'])[2]").click();
    await this.page.locator("(//input[@placeholder='Search...'])[2]").fill(ST_DeliveryTicket_1);
    console.log(ST_DeliveryTicket_1);
    await this.page.waitForTimeout(2000);


    //Amount feild
    await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
    await this.page.waitForTimeout(1000);
    //await page.locator('#dx-f165b9ba-d252-5236-ad67-dc0b8717c414 > tbody > tr > td:nth-child(7)').first().click();
    await this.page.getByLabel('Amount', { exact: true }).fill(StrategicCustPosting.Amount);
    const Amount = await this.page.getByLabel('Amount', { exact: true }).innerHTML()
    console.log(Amount);
    await this.page.waitForTimeout(2000);


    //Uncap feild
    await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Unf Cap', { exact: true }).fill(StrategicCustPosting.UnfCap);
    await this.page.waitForTimeout(1000);
    const UnCap = await this.page.getByLabel('Unf Cap', { exact: true }).innerHTML();
    console.log(UnCap);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');
       //Confrim Changes pop-up window 
       await this.page.locator("//div[normalize-space(text())='Confirm changes']").click();
       await this.page.locator("//span[normalize-space(text())='Yes']").click();
       await this.page.waitForTimeout(3000);
       await this.page.locator("(//td[@class='dx-cell-modified']/following-sibling::td)[1]").click();
       await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');

    //Date Feild
    await this.page.getByLabel('Date', { exact: true }).press('Tab');
    await this.page.waitForTimeout(1000);

    //Received By Feild
    await this.page.getByLabel('Rcvd By', { exact: true }).fill(StrategicCustPosting.ReceivedBy);
    const ReceivedBy = await this.page.getByLabel('Rcvd By', { exact: true }).innerText();
    console.log(ReceivedBy);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Rcvd By', { exact: true }).press('Tab');

    //Going to the Req Invoice Tab 
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Data grid with 2 rows and 15').getByLabel('', { exact: true }).press('Tab');
    await this.page.waitForTimeout(2000);
    await this.page.getByLabel('PO #', { exact: true }).press('Tab');
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Req Inv Date', { exact: true }).click();

    //Picking Today's Date
    const today : Date = new Date();
    //Extract year, month, and day
    const year: number = today.getFullYear();
    const month: number = today.getMonth() + 1;
    const day : number = today.getDate();

    //Formatting of the Date as mm-dd-yyyy
    const formattedDate: string = `${month}/${day.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;

    //Req Invoice Tab 
    await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").click();
    await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").first().fill(formattedDate);
    console.log(formattedDate);

    // await this.page.getByRole('button', { name: 'Reset State' }).click();
    // await this.page.waitForTimeout(2000);
    // await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
    // await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(ST_DeliveryTicket_1);
    // await this.page.waitForTimeout(2000);

    //Adding Misc Delivery
    // await this.page.locator("(//td[@aria-describedby='dx-col-287'])[3]").click();
    // await this.page.waitForTimeout(1000);
    // await this.page.locator("(//td[@aria-describedby='dx-col-287'])[3]").click();
    // await this.page.getByLabel('Unf Cap', { exact: true }).fill(StrategicCustPosting.Misc_Uncap);
    // const M_Uncap = await this.page.getByLabel('Unf Cap', { exact: true })
    // console.log(M_Uncap);
    // await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');
    //     //Confrim Changes pop-up window 
    //     await this.page.locator("//div[normalize-space(text())='Confirm changes']").click();
    //     await this.page.locator("//span[normalize-space(text())='Yes']").click();
    //     await this.page.waitForTimeout(3000);
    //     await this.page.locator("(//td[@aria-describedby='dx-col-287'])[3]").click();
    //     await this.page.waitForTimeout(3000);
    //     await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');

    // //Date Feild
    // await this.page.getByLabel('Date', { exact: true }).press('Tab');
    // await this.page.waitForTimeout(1000);

    // //Received By Feild
    // await this.page.getByLabel('Rcvd By', { exact: true }).fill('Test');
    // const M_ReceivedBy = await this.page.getByLabel('Rcvd By', { exact: true }).innerText();
    // console.log(M_ReceivedBy);
    // await this.page.waitForTimeout(1000);
    // await this.page.getByLabel('Rcvd By', { exact: true }).press('Tab');

    // //Going to the Req Invoice Tab 
    // await this.page.waitForTimeout(1000);
    // await this.page.getByLabel('Data grid with 2 rows and 15').getByLabel('', { exact: true }).press('Tab');
    // await this.page.waitForTimeout(2000);
    // await this.page.getByLabel('PO #', { exact: true }).press('Tab');
    // await this.page.waitForTimeout(1000);
    // await this.page.getByLabel('Req Inv Date', { exact: true }).click();

    // //Req Invoice Tab 
    // await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").click();
    // await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").first().fill(formattedDate);
    // console.log(formattedDate);

    //Posting
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Post Deliveries').click();
    await this.page.waitForTimeout(2000);

    //Reloading the page to Add one Delivery ticket 
    await this.page.reload();

    //2nd Delivery Ticket for the 2nd tank----------------------------------------------------------
    await this.page.getByText('PostingPosting').click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("(//input[@placeholder='Search...'])[2]").click();
    await this.page.locator("(//input[@placeholder='Search...'])[2]").fill(ST_DeliveryTicket_2);
    console.log(ST_DeliveryTicket_2);
    await this.page.waitForTimeout(2000);

    //Amount Feild 
    await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Amount', { exact: true }).fill(StrategicCustPosting.Amount);
    const Amount_1 = await this.page.getByLabel('Amount', { exact: true }).innerHTML()
    console.log(Amount_1);
    await this.page.waitForTimeout(2000);

    //UnCap Feild
    await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
    await this.page.getByLabel('Unf Cap', { exact: true }).fill(StrategicCustPosting.UnfCap);
    const UnCap_1 = await this.page.getByLabel('Unf Cap', { exact: true }).innerHTML();
    console.log(UnCap_1);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');
      //Confrim Changes pop-up window 
      await this.page.locator("//div[normalize-space(text())='Confirm changes']").click();
      await this.page.locator("//span[normalize-space(text())='Yes']").click();
      await this.page.waitForTimeout(3000);
      await this.page.locator("(//td[@class='dx-cell-modified']/following-sibling::td)[1]").click();
      await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');

    //Date Feild
    await this.page.getByLabel('Date', { exact: true }).press('Tab');
    await this.page.waitForTimeout(1000);
  
    //Received By Feild
    await this.page.getByLabel('Rcvd By', { exact: true }).fill('Test');
    const ReceivedBy_1 = await this.page.getByLabel('Rcvd By', { exact: true }).innerText();
    console.log(ReceivedBy_1);
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Rcvd By', { exact: true }).press('Tab');
    
  
    //Going to the Req Invoice Tab 
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel('Data grid with 2 rows and 15').getByLabel('', { exact: true }).press('Tab');
    await this.page.waitForTimeout(2000);
    await this.page.getByLabel('PO #', { exact: true }).press('Tab');
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Req Inv Date', { exact: true }).click();

    //Req Invoice Tab 
    await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").click();
    await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").first().fill(formattedDate);
    console.log(formattedDate);

    //Adding Freight Delivery
    //await this.page.reload();
    // await this.page.waitForTimeout(1000);
    // await this.page.getByText('PostingPosting').click();
    // await this.page.waitForTimeout(2000);
    // await this.page.locator("(//input[@placeholder='Search...'])[2]").click();
    // await this.page.locator("(//input[@placeholder='Search...'])[2]").fill(ST_DeliveryTicket_2);
    // console.log(ST_DeliveryTicket_2);
    // await this.page.waitForTimeout(2000);
    // await this.page.locator("//body[1]/app-root[1]/app-side-nav-outer-toolbar[1]/dx-drawer[1]/div[1]/div[2]/dx-scroll-view[1]/div[1]/div[1]/div[1]/div[2]/div[1]/app-deliveries-scheduling[1]/div[1]/div[1]/dx-tab-panel[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/app-post-delivery[1]/div[1]/dx-data-grid[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[9]").click();
    // await this.page.waitForTimeout(1000);
    // await this.page.locator("//body[1]/app-root[1]/app-side-nav-outer-toolbar[1]/dx-drawer[1]/div[1]/div[2]/dx-scroll-view[1]/div[1]/div[1]/div[1]/div[2]/div[1]/app-deliveries-scheduling[1]/div[1]/div[1]/dx-tab-panel[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/app-post-delivery[1]/div[1]/dx-data-grid[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[9]").click();
    // await this.page.getByLabel('Unf Cap', { exact: true }).fill(StrategicCustPosting.Misc_Uncap);
    // const M_Uncap_1 = await this.page.getByLabel('Unf Cap', { exact: true })
    // console.log(M_Uncap_1);
    // await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');
    //     //Confrim Changes pop-up window 
    //     await this.page.locator("//div[normalize-space(text())='Confirm changes']").click();
    //     await this.page.locator("//span[normalize-space(text())='Yes']").click();
    //     await this.page.waitForTimeout(3000);
    //     await this.page.locator("//body[1]/app-root[1]/app-side-nav-outer-toolbar[1]/dx-drawer[1]/div[1]/div[2]/dx-scroll-view[1]/div[1]/div[1]/div[1]/div[2]/div[1]/app-deliveries-scheduling[1]/div[1]/div[1]/dx-tab-panel[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/app-post-delivery[1]/div[1]/dx-data-grid[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[9]").click();
    //     await this.page.getByLabel('Unf Cap', { exact: true }).press('Tab');

    // //Date Feild
    // await this.page.getByLabel('Date', { exact: true }).press('Tab');
    // await this.page.waitForTimeout(1000);

    // //Received By Feild
    // await this.page.getByLabel('Rcvd By', { exact: true }).fill('Test');
    // const M_ReceivedBy_1 = await this.page.getByLabel('Rcvd By', { exact: true }).innerText();
    // console.log(M_ReceivedBy_1);
    // await this.page.waitForTimeout(1000);
    // await this.page.getByLabel('Rcvd By', { exact: true }).press('Tab');

    // //Going to the Req Invoice Tab 
    // await this.page.waitForTimeout(1000);
    // await this.page.getByLabel('Data grid with 2 rows and 15').getByLabel('', { exact: true }).press('Tab');
    // await this.page.waitForTimeout(2000);
    // await this.page.getByLabel('PO #', { exact: true }).press('Tab');
    // await this.page.waitForTimeout(1000);
    // await this.page.getByLabel('Req Inv Date', { exact: true }).click();

    // //Req Invoice Tab 
    // await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").click();
    // await this.page.locator("//td[@class='dx-editor-cell dx-focused']//input[@role='combobox']").first().fill(formattedDate);
    // console.log(formattedDate);

    //Posting
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Post Deliveries').click();
    await this.page.waitForTimeout(2000);


  //Redirecting to Customers Page
       
        await this.page.getByText('Customers').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByPlaceholder('Search...').fill(NewStrategicCustomerInfoPage.MyCustomerNum);
        await this.page.getByText(NewStrategicCustomerInfoPage.MyCustomerNum).click();
  
     
        //Delivery History Page
        await this.page.waitForTimeout(2000);
        await this.page.getByText('Delivery HistoryDelivery').click();
        await this.page.locator("//i[@class='dx-icon dx-icon-revert']").click();
  
    }
   
  
  }