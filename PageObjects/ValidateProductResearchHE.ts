import { Page,expect } from "@playwright/test";
import { ProductResearch } from "../TestData/ProductResearchHE";


export class ProductResearchHardErrorsPage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    async performProductResearchHE() {



  //Customer Page
  await this.page.getByText('Products').click();
  await this.page.getByText('Product Research').click();
  await this.page.getByLabel('plus').click();
  
  
  
  await this.page.locator('#collapse').getByPlaceholder('Select...').click();
  await this.page.getByText(ProductResearch.Base).click();
  const BaseErrorMessage = this.page.getByText(ProductResearch.Base).innerHTML();
  console.log(await(BaseErrorMessage));
  expect(ProductResearch.Base).toContain("Please select a Base")

  await this.page.getByLabel('Target % : *').click();
  await this.page.getByText(ProductResearch.Target).first().click();
  const TargetErrorMessage = this.page.getByText(ProductResearch.Target).first().innerHTML();
  console.log(await(TargetErrorMessage));
  expect(ProductResearch.Target).toContain("Value Required")

  await this.page.getByLabel('+/- % : *').click();
  await this.page.getByText(ProductResearch.Value).nth(1).click();
  const ValueErrorMessage = this.page.getByText(ProductResearch.Value).nth(1).innerHTML();
  console.log(await(ValueErrorMessage));
  expect(ProductResearch.Value).toContain("Value Required")


    }

  };
