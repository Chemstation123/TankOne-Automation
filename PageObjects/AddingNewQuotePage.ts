import { Page,expect } from "@playwright/test";
import { NewQuote } from "../TestData/AddQuoteJData";


export class AddQuotesPage {
    private page: Page;
  
    constructor(page: Page){
      this.page = page;
    }
   
    async performAddQuote () {
  
    //Directing to QuoteInfo this.page
    await this.page.getByText('Quote InfoQuote Info').click();
  
    //Adding a New Quote
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel('Add a row').click();
  
    //Product Code
    await this.page.waitForTimeout(35000);
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();


    await this.page.getByText(NewQuote.ProductCode).click();
    const ProductCode = this.page.getByRole('combobox', { name: 'Select...' }).nth(1).inputValue();
       console.log(await(ProductCode));
        expect((await ProductCode).includes(NewQuote.ProductCode)).toBe(true);
  
    //Price
    await this.page.getByLabel('Price: *').click();
    await this.page.getByLabel('Price: *').fill(NewQuote.Price);
    const ProductPrice = this.page.getByLabel('Price: *').inputValue();
    console.log(await(ProductPrice));
     expect(NewQuote.Price).toContain("2.00")
  
    //Unit of Issue
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
    await this.page.getByText(NewQuote.UnitOfIssue, { exact: true }).click();
    const UOI = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
       console.log(await(UOI));
        expect((await UOI).includes(NewQuote.UnitOfIssue)).toBe(true);
    
  
    //Total Commission%
    await this.page.getByLabel('Total Commission %: *').click();
    await this.page.getByLabel('Total Commission %: *').fill(NewQuote.TotalCommision);
    const TotalCommission = this.page.getByLabel('Total Commission %: *').inputValue();
    console.log(await(TotalCommission));
     expect(NewQuote.TotalCommision).toContain("80.00%")
  
    //Commission Method
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
    await this.page.getByText(NewQuote.CommissionMethod).click();
    const CommissionMethod = this.page.getByRole('combobox', { name: 'Select...' }).nth(3).inputValue();
    console.log(await(CommissionMethod));
    expect((await CommissionMethod).includes(NewQuote.CommissionMethod)).toBe(true);
  
    
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

    await this.page.getByLabel('Save').click();
    await this.page.getByText(NewQuote.RecordSaved).click();
  
    
  
    //Selecting the created Quote
    await this.page.getByRole('gridcell', { name: NewQuote.ProductCode }).click();
  
    //Commissions button
    await this.page.getByLabel('Commissions').click();
  
    //Commissions for Products window
    await this.page.getByLabel('Commissions for Product').getByLabel('dropdownbutton').click();
    await this.page.getByText('Edit Commissions').click();
    await this.page.getByLabel('Commissions for Product').getByLabel('Add a row').click();
    await this.page.getByRole('row', { name: 'Select... Select Column %' }).getByLabel('Select').click();
    await this.page.waitForTimeout(1000);
    //await this.page.getByText('Dave Gebhart').click();
    await this.page.getByRole('option', { name: NewQuote.AccountManager }).locator('div').click();
  
  
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
  
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(NewQuote.FirstDelivery);
  
  
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(NewQuote.SubsequentDeliveries);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText(NewQuote.RecordSaved1).click();
  
    await this.page.getByLabel('Edit').nth(2).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(NewQuote.FirstDelivery1);
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(NewQuote.SubsequentDeliveries1);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText(NewQuote.RecordSaved2).click();
  
    //Editing the Quote 
    await this.page.getByLabel('Commissions for Product').getByLabel('Close').click();
    await this.page.getByRole('gridcell', { name: NewQuote.ProductCode }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
    //await this.page.getByLabel('Commissions for Product').getByLabel('dropdownbutton').click();
    await this.page.getByText('Edit Quote').click();
    await this.page.locator('#loadPanel').getByLabel('Select').first().click();
    await this.page.getByRole('option', { name: '_ Global MSC' }).locator('div').click();
    await this.page.locator('#loadPanel').getByLabel('Select').nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('option', { name: '_ G' }).locator('div').click();
    await this.page.getByLabel('Override MSC Factor:').click();
    await this.page.getByLabel('MSC Override Factor: *').click();
    await this.page.getByLabel('MSC Override Factor: *').fill(NewQuote.MSCOverrideFactor);
    const MSCFactor = this.page.getByLabel('MSC Override Factor: *').inputValue();
    console.log(await(MSCFactor));
    expect(NewQuote.MSCOverrideFactor).toContain("5")
  
  
    await this.page.getByLabel('Minimum MSC: *').click();
    await this.page.getByLabel('Minimum MSC: *').fill(NewQuote.MinimumMSC);
    const MiniumMSC = this.page.getByLabel('Minimum MSC: *').inputValue();
    console.log(await(MiniumMSC));
    expect(NewQuote.MinimumMSC).toContain("6")
  
  
    await this.page.getByLabel('MSC Maximum Addition: *').click();
    await this.page.getByLabel('MSC Maximum Addition: *').fill(NewQuote.MSCMaximumAddition);
    const MSCMaxAddition = this.page.getByLabel('MSC Maximum Addition: *').inputValue();
    console.log(await(MSCMaxAddition));
    expect(NewQuote.MSCMaximumAddition).toContain("4")
  
  
    await this.page.getByLabel('Private Product Comments:').click();
    await this.page.getByLabel('Private Product Comments:').fill(NewQuote.PrivateProductComments);
    const PPComments = this.page.getByLabel('Private Product Comments:').inputValue();
    console.log(await(PPComments));
    expect(NewQuote.PrivateProductComments).toContain("Testing")
  
  
    await this.page.getByLabel('Delivery Ticket \'Additives\'').click();
    await this.page.getByLabel('Delivery Ticket \'Additives\'').fill(NewQuote.DeliveryTicketAdditives);
    const TicketAdditives = this.page.getByLabel('Delivery Ticket \'Additives\'').inputValue();
    console.log(await(TicketAdditives));
    expect(NewQuote.PrivateProductComments).toContain("Testing")
  
  
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.getByText(NewQuote.RecordSaved3).click();
  
  
   //Adding another Quote
   await this.page.waitForTimeout(3000);
   await this.page.getByRole('button', { name: 'Add a row' }).click();

   //Product Code
   await this.page.waitForTimeout(3000);
   await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
   await this.page.waitForTimeout(3000);
   await this.page.getByText(NewQuote.ProductCode1).click();
   const ProductCode1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(1).inputValue();
   console.log(await(ProductCode1));
   expect((await ProductCode1).includes(NewQuote.ProductCode1)).toBe(true);

    //Price
    await this.page.getByLabel('Price: *').click();
    await this.page.getByLabel('Price: *').fill(NewQuote.Price1);
    const ProductPrice1 = this.page.getByLabel('Price: *').inputValue();
    console.log(await(ProductPrice1));
     expect(NewQuote.Price1).toContain("5.00")

  
    //Unit of Issue
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
    await this.page.getByText(NewQuote.UnitOfIssue1, { exact: true }).click();
    const UOI1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
    console.log(await(UOI1));
    expect((await UOI1).includes(NewQuote.UnitOfIssue1)).toBe(true);
  
    //Total Commission%
    await this.page.getByLabel('Total Commission %: *').click();
    await this.page.getByLabel('Total Commission %: *').fill(NewQuote.TotalCommision1);
    const TotalCommission1 = this.page.getByLabel('Total Commission %: *').inputValue();
    console.log(await(TotalCommission1));
    expect(NewQuote.TotalCommision1).toContain("83.00%");
  
    //Commission Method
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
    await this.page.getByText(NewQuote.CommissionMethod1).click();
    const CommissionMethod1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(3).inputValue();
    console.log(await(CommissionMethod1));
    expect((await CommissionMethod1).includes(NewQuote.CommissionMethod1)).toBe(true);
  
    //Quote date
    await this.page.getByLabel('Quote Date: *').click();
    await this.page.getByLabel('Quote Date: *').fill(formattedDate);
    console.log(formattedDate);

    await this.page.getByLabel('Save').click();
    await this.page.getByText(NewQuote.RecordSaved).click();
    
    //Selecting the created Quote
    await this.page.getByRole('gridcell', { name: NewQuote.ProductCode1 }).click();
    await this.page.waitForTimeout(2000);
  
    //Commissions button
    await this.page.getByLabel('Commissions', { exact: true }).click();
    await this.page.waitForTimeout(1000);
  
    //Commissions for Products window
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('dropdownbutton').click();
    await this.page.getByRole('option').getByText('Edit Commissions').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('Add a row').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('row', { name: 'Select... Select Column %' }).getByLabel('Select').click();
    await this.page.waitForTimeout(1000);
    //await this.page.getByText('Dave Gebhart').click();
    await this.page.getByRole('option', { name: NewQuote.AccountManager }).locator('div').click();
  
  
    await this.page.getByLabel('% First Delivery', { exact: true }).click();
  
    await this.page.getByLabel('% First Delivery', { exact: true }).fill(NewQuote.FirstDelivery);
  
  
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
    await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(NewQuote.SubsequentDeliveries);
    await this.page.getByRole('link', { name: 'Save' }).click();
    await this.page.getByText(NewQuote.RecordSaved1).click();
  
  
   //Editing the Quote 
    await this.page.getByRole('dialog', { name: 'Commissions for Product' }).getByLabel('Close').click();
    await this.page.getByRole('gridcell', { name: NewQuote.ProductCode1 }).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
    //await this.page.getByLabel('Commissions for Product').getByLabel('dropdownbutton').click();
    await this.page.getByText('Edit Quote').click();
    await this.page.locator('#loadPanel').getByLabel('Select').first().click();
    await this.page.getByRole('option', { name: '_ Strategic MSC' }).locator('div').click();
    await this.page.locator('#loadPanel').getByLabel('Select').nth(1).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('option', { name: '_ L' }).locator('div').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByLabel('Override MSC Factor:').click();
    await this.page.getByLabel('MSC Override Factor: *').click();
    await this.page.getByLabel('MSC Override Factor: *').fill(NewQuote.MSCOverrideFactor1);
    const MSCFactor1 = this.page.getByLabel('MSC Override Factor: *').inputValue();
    console.log(await(MSCFactor1));
    expect(NewQuote.MSCOverrideFactor1).toContain("6")
  
  
    await this.page.getByLabel('Minimum MSC: *').click();
    await this.page.getByLabel('Minimum MSC: *').fill(NewQuote.MinimumMSC1);
    const MinimumMSC1 = this.page.getByLabel('Minimum MSC: *').inputValue();
    console.log(await(MinimumMSC1));
    expect(NewQuote.MinimumMSC1).toContain("7")
  
  
    await this.page.getByLabel('MSC Maximum Addition: *').click();
    await this.page.getByLabel('MSC Maximum Addition: *').fill(NewQuote.MSCMaximumAddition1);
    const MSCMaxAddition1 = this.page.getByLabel('MSC Maximum Addition: *').inputValue();
    console.log(await(MSCMaxAddition1));
    expect(NewQuote.MSCMaximumAddition1).toContain("4")
  
  
    await this.page.getByLabel('Private Product Comments:').click();
    await this.page.getByLabel('Private Product Comments:').fill(NewQuote.PrivateProductComments1);
    const PPComments1 = this.page.getByLabel('Private Product Comments:').inputValue();
    console.log(await(PPComments1));
    expect(NewQuote.PrivateProductComments1).toContain("Testing")
  
  
    await this.page.getByLabel('Delivery Ticket \'Additives\'').click();
    await this.page.getByLabel('Delivery Ticket \'Additives\'').fill(NewQuote.DeliveryTicketAdditives1);
    const TicketAdditives1 = this.page.getByLabel('Delivery Ticket \'Additives\'').inputValue();
    console.log(await(TicketAdditives1));
    expect(NewQuote.PrivateProductComments1).toContain("Testing")
  
  
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.getByText(NewQuote.RecordSaved3).click();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
  
  
  
  };