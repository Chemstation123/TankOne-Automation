import { Page,expect } from "@playwright/test";
import { ValidateQuotePricePosting } from "../TestData/ValidateQuotePricePostingJData";



export class ValidateQuotePricePostingPage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async performValidateQuotePrice()
    {
        await this.page.waitForTimeout(3000);
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.waitForTimeout(3000);
          
     
        await this.page.getByText('PostingPosting').click();
        await this.page.waitForTimeout(4000);

          
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill('RPMN');
        await this.page.waitForTimeout(1000);
          
        if (await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price }).first().isVisible()) {
            await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price }).first().click();
            const quotePrice = await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price }).first().innerHTML();
            console.log(quotePrice);
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Tank_Number }).first().isVisible()) {
            await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Tank_Number }).first().click();
            const tank_number = await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Tank_Number }).first().innerHTML();
            console.log(tank_number);
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Product_Code }).first().isVisible()) {
            await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Product_Code }).first().click();
            console.log(ValidateQuotePricePosting.Product_Code);
            await this.page.waitForTimeout(3000);
        }
          
        if (await this.page.getByText('Customers').isVisible()) {
            await this.page.getByText('Customers').click();
            await this.page.waitForTimeout(1000);
        }
          
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('textbox', { name: 'Search in the data grid' }).fill(ValidateQuotePricePosting.Customer_ID);
        await this.page.waitForTimeout(1000);
        //await this.page.getByLabel('Data grid with 64 rows and 11').getByPlaceholder('Search...').fill('RPMN');
        await this.page.waitForTimeout(1000);
          
        if (await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Customer_ID }).isVisible()) {
            await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Customer_ID }).click();
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByText('Quote InfoQuote Info').isVisible()) {
            await this.page.getByText('Quote InfoQuote Info').click();
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Product_Code }).isVisible()) {
            await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Product_Code }).click();
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price }).isVisible()) {
            await this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price }).click();
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByRole('heading', { name: 'Quote Details' }).isVisible()) {
            await this.page.getByRole('heading', { name: 'Quote Details' }).click();
            await this.page.waitForTimeout(1000);
        }
          
        if (await this.page.getByLabel('Price: *').isVisible()) {
            await this.page.getByLabel('Price: *').click();
            await this.page.waitForTimeout(1000);
        }

        const postingPage_QuotePrice = this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price }).first();

        const customerPage_QuotePrice = this.page.getByRole('gridcell', { name: ValidateQuotePricePosting.Quote_Price });

        //Comparing the two values for validation
        const PP_QuotePrice = await postingPage_QuotePrice.boundingBox();
        const CP_QuotePrice = await customerPage_QuotePrice.boundingBox();

        if (PP_QuotePrice && CP_QuotePrice && PP_QuotePrice.x === CP_QuotePrice.x && PP_QuotePrice.y === CP_QuotePrice.y){
            console.log("Both Posting and Customer Page Quote Prices are same.");

        } else {
            console.log("Both Posting and Customer Page Quote Prices are different.");
        }

    
    }
}