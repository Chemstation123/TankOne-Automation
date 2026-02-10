import { Page, expect } from "@playwright/test";
import { MakingManualAdjustmentHE } from "../TestData_Dev/MakingManualAdjustmentSMSPRawMaterialsPageHEData";

export class MakingManualAdjustmentToSMSPRawMaterialsPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getAllValidationMessages(printedMessages: Set<string>) {
  const validationDivs = this.page.locator("div >> text=---");
  const count = await validationDivs.count();

  for (let i = 0; i < count; i++) {
    const element = validationDivs.nth(i);
    if (await element.isVisible()) {
      const text = await element.textContent();
      if (text && text.trim().startsWith('---')) {
        const trimmedText = text.trim();
        if (!printedMessages.has(trimmedText)) {
          console.log(`Validation Message: ${trimmedText}`);
          printedMessages.add(trimmedText);
        }
      }
    }
  }
}
  async performManualAdjustmentToSMSP() {
  const printedMessages = new Set<string>();

  await this.page.getByText('Products').click();
  await this.page.getByLabel('Raw Materials').getByText('Raw Materials').click();
  await this.page.getByText('Raw Material InventoryRaw').click();
  await this.page.getByLabel('Add Transaction').click();

  await this.page.getByLabel('Save').click();
  await this.getAllValidationMessages(printedMessages);

  //Validations for the Hard Errors
  await this.page.getByPlaceholder('Select a raw material').click();
  await this.page.getByLabel('Items').getByText(MakingManualAdjustmentHE.RawMaterialID, { exact: true }).click();
  await this.page.getByLabel('Save').click();
  await this.getAllValidationMessages(printedMessages);

  await this.page.getByPlaceholder('Select a vendor').click();
  await this.page.getByText(MakingManualAdjustmentHE.VendorID).click();
  await this.page.getByLabel('Save').click();
  await this.getAllValidationMessages(printedMessages);

  await this.page.getByLabel('Lot Number: *').click();
  await this.page.getByLabel('Lot Number: *').fill(MakingManualAdjustmentHE.LOTNumber);
  await this.page.getByLabel('Save').click();
  await this.getAllValidationMessages(printedMessages);

  await this.page.getByPlaceholder('Select a transaction code').click();
  await this.page.getByText(MakingManualAdjustmentHE.TransactionCode).click();
  await this.page.waitForTimeout(1000);
  await this.page.getByLabel('Save').click();
  await this.page.waitForTimeout(1000);
  await this.getAllValidationMessages(printedMessages);

  await this.page.getByPlaceholder('Select a unit of issue').click();
  await this.page.getByText(MakingManualAdjustmentHE.UnitsOfIssueID).click();
  await this.page.getByLabel('Save').click();
  await this.getAllValidationMessages(printedMessages);

  await this.page.getByLabel('Transaction Amount: *').click();
  await this.page.getByLabel('Transaction Amount: *').fill(MakingManualAdjustmentHE.TransactionAmount);

  }


}

