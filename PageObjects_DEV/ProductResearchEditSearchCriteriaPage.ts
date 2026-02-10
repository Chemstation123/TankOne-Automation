import { Page, expect } from "@playwright/test";
import { ProductResearchEditCriteria } from "../TestData_Dev/ProductResearchEditSearchCriteriaJData";



export class ProductResearchEditSearchCriteriaPage{
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }

    async performProductResearchEditSearchCriteria()
    {
      await this.page.getByLabel('Products').locator('div').nth(1).click();
      await this.page.getByText('Product Research').click();
      await this.page.getByLabel('Base: *').click();
      await this.page.getByText(ProductResearchEditCriteria.BaseID, { exact: true }).click();
      await this.page.getByLabel('Target % : *').click();
      await this.page.getByLabel('Target % : *').fill(ProductResearchEditCriteria.TargetPercentage);
      await this.page.getByLabel('+/- % : *').click();
      await this.page.getByLabel('+/- % : *').fill(ProductResearchEditCriteria.Value);
      await this.page.getByLabel('plus').click();
      await this.page.getByLabel('Edit').click();
      await this.page.getByLabel('Target %', { exact: true }).fill(ProductResearchEditCriteria.EditedTargetPercentage);
      await this.page.getByLabel('+/- %', { exact: true }).click();
    //   await this.page.getByLabel('+/- %', { exact: true }).press('ArrowRight');
    //   await this.page.getByLabel('+/- %', { exact: true }).press('ArrowRight');
      await this.page.getByLabel('+/- %', { exact: true }).fill(ProductResearchEditCriteria.EditedValue);
      await this.page.getByLabel('Save').click();
      await this.page.getByLabel('Find Products').click();

    }
}