import { Page, expect } from "@playwright/test";


export class LabReportSanitizerProductDeliveriesbyStatePage{
    public page : Page;


    constructor(page: Page){
        this.page = page;
    }

    async performLabReportSanitizerProductDeliveriesbyState()
    {
      await this.page.getByText('Sanitizer Program').click();
      await this.page.getByText('Sanitizer Reports').click();
      await this.page.getByText('Report showing all deliveries').click();
      await this.page.getByRole('button', { name: 'Select' }).nth(1).click();
      await this.page.getByText('1').nth(2).click();
      await this.page.getByRole('button', { name: 'Select' }).nth(2).click();
      await this.page.getByText('15').nth(3).click();
      await this.page.locator('.dx-texteditor-input-container.dx-tag-container').click();
      await this.page.getByRole('combobox', { name: 'Select states...' }).fill('oh');
      await this.page.getByText('OH').click();
      await this.page.getByRole('button', { name: 'Submit' }).click();
      await this.page.locator('#page_0 > div:nth-child(2)').click();
      console.log('Lab Report Sanitizer Product Deliveries by State Generated Successfully');
      await this.page.getByRole('button', { name: 'Print', exact: true }).click();
      console.log('User able to Print Successfully');
      await this.page.waitForTimeout(1000);
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(1000);
      await this.page.keyboard.press('Escape');
      console.log('Print preview closed successfully');
      await this.page.locator('.dx-menu-item-popout').click();
      const downloadPromise = this.page.waitForEvent('download');
      await this.page.getByText('PDF', { exact: true }).click();
      const download = await downloadPromise;
      await this.page.locator('.dx-menu-item-popout').click();
      const download1Promise = this.page.waitForEvent('download');
      await this.page.getByText('XLS', { exact: true }).click();
      const download1 = await download1Promise;
      await this.page.getByRole('menuitem', { name: 'Export To' }).click();
      const download2Promise = this.page.waitForEvent('download');
      await this.page.getByText('XLSX', { exact: true }).click();
      const download2 = await download2Promise;
      await this.page.locator('.dx-menu-item-popout').click();
      const download3Promise = this.page.waitForEvent('download');
      await this.page.getByText('CSV', { exact: true }).click();
      const download3 = await download3Promise;

    }
}