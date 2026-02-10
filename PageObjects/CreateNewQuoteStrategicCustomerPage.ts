import { Page,expect } from "@playwright/test";
import { StrategicCustomerQuote } from "../TestData/StartegicQuoteInfoJData";


export class StrategicCustomerQuoteInfoPage {
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }

    async performAddStrategicQuote() {
  //Directing to QuoteInfo this.page
  await this.page.getByText('Quote InfoQuote Info').click();

  //Adding a New Quote
  await this.page.waitForTimeout(3000);
  await this.page.getByLabel('Add a row').click();

 //Product Code
    await this.page.waitForTimeout(35000);
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
    await this.page.getByText(StrategicCustomerQuote.ProductCode).click();
    const ProductCode = this.page.getByRole('combobox', { name: 'Select...' }).nth(1).inputValue();
       console.log(await(ProductCode));
        expect((await ProductCode).includes(StrategicCustomerQuote.ProductCode)).toBe(true);

  //Price
  await this.page.getByLabel('Price: *').click();
  await this.page.getByLabel('Price: *').fill(StrategicCustomerQuote.Price);
  const ProductPrice = this.page.getByLabel('Price: *').inputValue();
  console.log(await(ProductPrice));
   expect(StrategicCustomerQuote.Price).toContain("2.00")

  //Unit of Issue
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
  await this.page.getByText(StrategicCustomerQuote.UnitOfIssue, { exact: true }).click();
  const UOI = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
     console.log(await(UOI));
      expect((await UOI).includes(StrategicCustomerQuote.UnitOfIssue)).toBe(true);
  

  //Total Commission%
  await this.page.getByLabel('Total Commission %: *').click();
  await this.page.getByLabel('Total Commission %: *').fill(StrategicCustomerQuote.TotalCommision);
  const TotalCommission = this.page.getByLabel('Total Commission %: *').inputValue();
  console.log(await(TotalCommission));
   expect(StrategicCustomerQuote.TotalCommision).toContain("80.00%")

  //Commission Method
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
  await this.page.getByText(StrategicCustomerQuote.CommissionMethod).click();
  const CommissionMethod = this.page.getByRole('combobox', { name: 'Select...' }).nth(3).inputValue();
     console.log(await(CommissionMethod));
      expect((await CommissionMethod).includes(StrategicCustomerQuote.CommissionMethod)).toBe(true);

  //Quote date
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
  await this.page.waitForTimeout(1000);
  await this.page.getByText(StrategicCustomerQuote.RecordSaved).click();
 
  //Selecting the created Quote
  await this.page.getByRole('gridcell', { name: StrategicCustomerQuote.ProductCode }).click();

  //Commissions button
  await this.page.getByLabel('Commissions').click();

  //Commissions for Products window
  await this.page.getByLabel('Commissions for Product').getByLabel('dropdownbutton').click();
  await this.page.getByText('Edit Commissions').click();
  await this.page.getByLabel('Commissions for Product').getByLabel('Add a row').click();
  await this.page.getByRole('row', { name: 'Select... Select Column %' }).getByLabel('Select').click();
  await this.page.waitForTimeout(1000);
  //await this.page.getByText('Dave Gebhart').click();
  await this.page.getByRole('option', { name: StrategicCustomerQuote.AccountManager }).locator('div').click();


  await this.page.getByLabel('% First Delivery', { exact: true }).click();

  await this.page.getByLabel('% First Delivery', { exact: true }).fill(StrategicCustomerQuote.FirstDelivery);


  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(StrategicCustomerQuote.SubsequentDeliveries);
  await this.page.getByRole('link', { name: 'Save' }).click();
  await this.page.getByText(StrategicCustomerQuote.RecordSaved1).click();

  await this.page.getByLabel('Edit').nth(2).click();
  await this.page.getByLabel('% First Delivery', { exact: true }).click();
  await this.page.getByLabel('% First Delivery', { exact: true }).fill(StrategicCustomerQuote.FirstDelivery1);
  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(StrategicCustomerQuote.SubsequentDeliveries1);
  await this.page.getByRole('link', { name: 'Save' }).click();
  await this.page.getByText(StrategicCustomerQuote.RecordSaved2).click();
  await this.page.getByLabel('Commissions for Product').getByLabel('Close').click();

  //Editing the Quote
  await this.page.getByRole('gridcell', { name: StrategicCustomerQuote.ProductCode }).click();
  await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
  await this.page.getByText('Edit Quote').click();
  await this.page.waitForTimeout(1000);
   
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
  await this.page.waitForTimeout(1000);
  await this.page.getByRole('option', { name: '_ Strategic MSC' }).locator('div').click();

  await this.page.waitForTimeout(1000);
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
  await this.page.getByRole('option', { name: '_ G' }).locator('div').click();

  //Strategic Commission Information 
  //1st Delivery Total Percentage
  await this.page.getByLabel('1st Delivery Total %: *').click();
  await this.page.getByLabel('1st Delivery Total %: *').fill(StrategicCustomerQuote.DeliveryTotal);
  const DeliveryTotal = this.page.getByLabel('1st Delivery Total %: *').inputValue();
  console.log(await (DeliveryTotal));
  expect(await(DeliveryTotal)).toContain(StrategicCustomerQuote.DeliveryTotal);

  //Total Year 1 
  await this.page.getByLabel('Total Year 1 %: *').click();
  await this.page.getByLabel('Total Year 1 %: *').fill(StrategicCustomerQuote.TotalYear1);
  const TotYear1 = this.page.getByLabel('Total Year 1 %: *').inputValue();
  console.log(await (TotYear1));
  expect(await(TotYear1)).toContain(StrategicCustomerQuote.TotalYear1);

  //Total Year 2 
  await this.page.getByLabel('Total Year 2 %: *').click();
  await this.page.getByLabel('Total Year 2 %: *').fill(StrategicCustomerQuote.TotalYear2);

  //Total Year 3 
  await this.page.getByLabel('Total Year 3 %: *').click();
  await this.page.getByLabel('Total Year 3 %: *').fill(StrategicCustomerQuote.TotalYear3);
  const TotYear3 = this.page.getByLabel('Total Year 3 %: *').inputValue();
  console.log(await (TotYear3));
  expect(await(TotYear3)).toContain(StrategicCustomerQuote.TotalYear3);

  //1st Svcr Del
  await this.page.getByLabel('Svcr 1st Del %: *').click();
  await this.page.getByLabel('Svcr 1st Del %: *').fill(StrategicCustomerQuote.Svcr1stDel);
  const SvcrDel = this.page.getByLabel('Svcr 1st Del %: *').inputValue();
  console.log(await (SvcrDel));
  expect(await(SvcrDel)).toContain(StrategicCustomerQuote.Svcr1stDel);

  //Svcr Share 1st year
  await this.page.getByLabel('Svcr Share Year 1 %: *').click();
  await this.page.getByLabel('Svcr Share Year 1 %: *').fill(StrategicCustomerQuote.SvcrShare1stYear);
  const SvcrDel1 = this.page.getByLabel('Svcr Share Year 1 %: *').inputValue();
  console.log(await (SvcrDel1));
  expect(await(SvcrDel1)).toContain(StrategicCustomerQuote.SvcrShare1stYear);

  //Svcr Share 2st year
  await this.page.getByLabel('Svcr Share Year 2 %: *').click();
  await this.page.getByLabel('Svcr Share Year 2 %: *').fill(StrategicCustomerQuote.SvcrShare2stYear);
  const SvcrDe2 = this.page.getByLabel('Svcr Share Year 2 %: *').inputValue();
  console.log(await (SvcrDe2));
  expect(await(SvcrDe2)).toContain(StrategicCustomerQuote.SvcrShare2stYear);

  //Svcr Share 3st year
  await this.page.getByLabel('Svcr Share Year 3 %: *').click();
  await this.page.getByLabel('Svcr Share Year 3 %: *').fill(StrategicCustomerQuote.SvcrShare3stYear);
  const SvcrDe3 = this.page.getByLabel('Svcr Share Year 3 %: *').inputValue();
  console.log(await (SvcrDe3));
  expect(await(SvcrDe3)).toContain(StrategicCustomerQuote.SvcrShare3stYear);


     //Product Comments
  await this.page.getByLabel('Private Product Comments:').click();
  await this.page.getByLabel('Private Product Comments:').fill(StrategicCustomerQuote.PProductComments);
  const PProductC = this.page.getByLabel('Private Product Comments:').inputValue();
  console.log(await(PProductC));
  expect((await PProductC).includes(StrategicCustomerQuote.PProductComments)).toBe(true);

  //Delivery Ticket 
  await this.page.getByLabel('Delivery Ticket \'Additives\'').click();
  await this.page.getByLabel('Delivery Ticket \'Additives\'').fill(StrategicCustomerQuote.DeliveryTicketColumn);
  const DeliverTCoulum = this.page.getByLabel('Delivery Ticket \'Additives\'').inputValue();
  console.log(await(DeliverTCoulum));
  expect((await DeliverTCoulum).includes(StrategicCustomerQuote.DeliveryTicketColumn)).toBe(true);
   

   await this.page.getByRole('button', { name: 'Save' }).click();
   await this.page.waitForTimeout(2000);
   await this.page.getByText('Record Saved Succesfully').click();


   //Adding another Quote
   await this.page.waitForTimeout(3000);
   await this.page.getByRole('button', { name: 'Add a row' }).click();


  //Product Code
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('combobox', { name: 'Select...' }).nth(1).click();
    await this.page.getByText(StrategicCustomerQuote.ProductCode1).click();
    const ProductCode_1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(1).inputValue();
       console.log(await(ProductCode_1));
        expect((await ProductCode_1).includes(StrategicCustomerQuote.ProductCode1)).toBe(true);

  //Price
  await this.page.getByLabel('Price: *').click();
  await this.page.getByLabel('Price: *').fill(StrategicCustomerQuote.Price1);
  await this.page.waitForTimeout(1000);
  const ProductPrice_1 = await this.page.getByLabel('Price: *').inputValue();
  console.log(await(ProductPrice_1));
  expect(StrategicCustomerQuote.Price1).toContain("5.00")

  //Unit of Issue
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
  await this.page.getByText(StrategicCustomerQuote.UnitOfIssue1, { exact: true }).click();
  const UOI_1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(2).inputValue();
     console.log(await(UOI_1));
      expect((await UOI_1).includes(StrategicCustomerQuote.UnitOfIssue1)).toBe(true);
  

  //Total Commission%
  await this.page.getByLabel('Total Commission %: *').click();
  await this.page.getByLabel('Total Commission %: *').fill(StrategicCustomerQuote.TotalCommision1);
  const TotalCommission_1 = this.page.getByLabel('Total Commission %: *').inputValue();
  console.log(await(TotalCommission_1));
   expect(StrategicCustomerQuote.TotalCommision1).toContain("83.00%")

  //Commission Method
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
  await this.page.getByText(StrategicCustomerQuote.CommissionMethod1).click();
  const CommissionMethod_1 = this.page.getByRole('combobox', { name: 'Select...' }).nth(3).inputValue();
     console.log(await(CommissionMethod_1));
      expect((await CommissionMethod_1).includes(StrategicCustomerQuote.CommissionMethod1)).toBe(true);


  await this.page.getByLabel('Quote Date: *').click();
  await this.page.getByLabel('Quote Date: *').fill(formattedDate);
  console.log(formattedDate);

  await this.page.getByLabel('Save').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByText(StrategicCustomerQuote.RecordSaved).click();
 
  //Selecting the created Quote
  await this.page.getByRole('gridcell', { name: StrategicCustomerQuote.ProductCode1 }).click();

  //Commissions button
  await this.page.getByLabel('Commissions').click();

  //Commissions for Products window
  await this.page.getByLabel('Commissions for Product').getByLabel('dropdownbutton').click();
  await this.page.getByText('Edit Commissions').click();
  await this.page.getByLabel('Commissions for Product').getByLabel('Add a row').click();
  await this.page.getByRole('row', { name: 'Select... Select Column %' }).getByLabel('Select').click();
  await this.page.waitForTimeout(1000);
  //await this.page.getByText('Dave Gebhart').click();
  await this.page.getByRole('option', { name: StrategicCustomerQuote.AccountManager }).locator('div').click();


  await this.page.getByLabel('% First Delivery', { exact: true }).click();

  await this.page.getByLabel('% First Delivery', { exact: true }).fill(StrategicCustomerQuote.FirstDelivery);


  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(StrategicCustomerQuote.SubsequentDeliveries);
  await this.page.getByRole('link', { name: 'Save' }).click();
  await this.page.getByText(StrategicCustomerQuote.RecordSaved1).click();

  await this.page.getByLabel('Edit').nth(2).click();
  await this.page.getByLabel('% First Delivery', { exact: true }).click();
  await this.page.getByLabel('% First Delivery', { exact: true }).fill(StrategicCustomerQuote.FirstDelivery1);
  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).click();
  await this.page.getByLabel('% Subsequent Deliveries', { exact: true }).fill(StrategicCustomerQuote.SubsequentDeliveries1);
  await this.page.getByRole('link', { name: 'Save' }).click();
  await this.page.getByText(StrategicCustomerQuote.RecordSaved2).click();
  await this.page.getByLabel('Commissions for Product').getByLabel('Close').click();

  //Editing the Quote
  await this.page.getByRole('gridcell', { name: StrategicCustomerQuote.ProductCode }).click();
  await this.page.getByRole('button', { name: 'dropdownbutton' }).click();
  await this.page.getByText('Edit Quote').click();
  await this.page.waitForTimeout(1000);
   
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(2).click();
  await this.page.waitForTimeout(1000);
  await this.page.getByRole('option', { name: '_ Strategic MSC' }).locator('div').click();

  await this.page.waitForTimeout(1000);
  await this.page.getByRole('combobox', { name: 'Select...' }).nth(3).click();
  await this.page.getByRole('option', { name: '_ G' }).locator('div').click();

  //Strategic Commission Information 
  //1st Delivery Total Percentage
  await this.page.getByLabel('1st Delivery Total %: *').click();
  await this.page.getByLabel('1st Delivery Total %: *').fill(StrategicCustomerQuote.DeliveryTotal1);
  const DeliveryTotal_1 = this.page.getByLabel('1st Delivery Total %: *').inputValue();
  console.log(await (DeliveryTotal_1));
  expect(await(DeliveryTotal_1)).toContain(StrategicCustomerQuote.DeliveryTotal1);

  //Total Year 1 
  await this.page.getByLabel('Total Year 1 %: *').click();
  await this.page.getByLabel('Total Year 1 %: *').fill(StrategicCustomerQuote.TotalYear1);
  const TotYear_1 = this.page.getByLabel('Total Year 1 %: *').inputValue();
  console.log(await (TotYear_1));
  expect(await(TotYear_1)).toContain(StrategicCustomerQuote.TotalYear1);

  //Total Year 2 
  await this.page.getByLabel('Total Year 2 %: *').click();
  await this.page.getByLabel('Total Year 2 %: *').fill(StrategicCustomerQuote.TotalYear2);

  //Total Year 3 
  await this.page.getByLabel('Total Year 3 %: *').click();
  await this.page.getByLabel('Total Year 3 %: *').fill(StrategicCustomerQuote.TotalYear3);
  const TotYear_3 = this.page.getByLabel('Total Year 3 %: *').inputValue();
  console.log(await (TotYear_3));
  expect(await(TotYear_3)).toContain(StrategicCustomerQuote.TotalYear3);

  //1st Svcr Del
  await this.page.getByLabel('Svcr 1st Del %: *').click();
  await this.page.getByLabel('Svcr 1st Del %: *').fill(StrategicCustomerQuote.Svcr1stDel);
  const SvcrDel_1styear = this.page.getByLabel('Svcr 1st Del %: *').inputValue();
  console.log(await (SvcrDel_1styear));
  expect(await(SvcrDel_1styear)).toContain(StrategicCustomerQuote.Svcr1stDel);

  //Svcr Share 1st year
  await this.page.getByLabel('Svcr Share Year 1 %: *').click();
  await this.page.getByLabel('Svcr Share Year 1 %: *').fill(StrategicCustomerQuote.SvcrShare1stYear);
  const SvcrShare_share_1styear = this.page.getByLabel('Svcr Share Year 1 %: *').inputValue();
  console.log(await (SvcrShare_share_1styear));
  expect(await(SvcrShare_share_1styear)).toContain(StrategicCustomerQuote.SvcrShare1stYear);

  //Svcr Share 2st year
  await this.page.getByLabel('Svcr Share Year 2 %: *').click();
  await this.page.getByLabel('Svcr Share Year 2 %: *').fill(StrategicCustomerQuote.SvcrShare2stYear1);
  const SvcrShare_2ndyear = this.page.getByLabel('Svcr Share Year 2 %: *').inputValue();
  console.log(await (SvcrShare_2ndyear));
  expect(await(SvcrShare_2ndyear)).toContain(StrategicCustomerQuote.SvcrShare2stYear1);

  //Svcr Share 3st year
  await this.page.getByLabel('Svcr Share Year 3 %: *').click();
  await this.page.getByLabel('Svcr Share Year 3 %: *').fill(StrategicCustomerQuote.SvcrShare3stYear1);
  const SvcrShare_3rdyear = this.page.getByLabel('Svcr Share Year 3 %: *').inputValue();
  console.log(await (SvcrShare_3rdyear));
  expect(await(SvcrShare_3rdyear)).toContain(StrategicCustomerQuote.SvcrShare3stYear1);


     //Product Comments
  await this.page.getByLabel('Private Product Comments:').click();
  await this.page.getByLabel('Private Product Comments:').fill(StrategicCustomerQuote.PProductComments);
  const PProductC1 = this.page.getByLabel('Private Product Comments:').inputValue();
  console.log(await(PProductC1));
  expect((await PProductC1).includes(StrategicCustomerQuote.PProductComments)).toBe(true);

  //Delivery Ticket 
  await this.page.getByLabel('Delivery Ticket \'Additives\'').click();
  await this.page.getByLabel('Delivery Ticket \'Additives\'').fill(StrategicCustomerQuote.DeliveryTicketColumn);
  const DeliverTCoulum1 = this.page.getByLabel('Delivery Ticket \'Additives\'').inputValue();
  console.log(await(DeliverTCoulum1));
  expect((await DeliverTCoulum1).includes(StrategicCustomerQuote.DeliveryTicketColumn)).toBe(true);
  await this.page.waitForTimeout(1000);
  await this.page.locator("//span[normalize-space(text())='Product and Pricing']").click();
   

   await this.page.getByRole('button', { name: 'Save' }).click();
   await this.page.waitForTimeout(2000);
   await this.page.getByText('Record Saved Succesfully').click();













    }


}