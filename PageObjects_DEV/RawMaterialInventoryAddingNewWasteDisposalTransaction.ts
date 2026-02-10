import { Page, expect } from "@playwright/test";
import { AddingAdjustmentRawMaterialInventory } from "../TestData_Dev/RawMaterialInventoryAdjustmentAddingJData";
import { AddingWasteDisposalRawMaterialInventory} from "../TestData_Dev/RawMaterialInventoryWasteDisposalAddingJData";



    export class RawMaterialInventoryAddingNewWasteDisposalTransaction {
        public page : Page;

        constructor(page: Page){
            this.page = page;
        }

        async performAddingNewWasteDisposalTransaction()
        {
          await this.page.getByText('Products').click();
          await this.page.getByText('Raw Materials').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByText('Raw Material InventoryRaw').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByLabel('Add Transaction').click();
          await this.page.waitForTimeout(2000);

          //Selecting random raw material from the list
          await this.page.getByPlaceholder('Select a raw material').click();
          await this.page.waitForTimeout(1000);
          await this.page.getByLabel('Items').getByText(AddingAdjustmentRawMaterialInventory.RawMaterialID).click();
          const RawMaterialID = await this.page.getByLabel('Items').getByText(AddingAdjustmentRawMaterialInventory.RawMaterialID).innerText();
          console.log(RawMaterialID);

          //Selecting random vendor ID from the list 
          await this.page.locator("//input[@placeholder='Select a vendor']").click();
          const dropdownLists = this.page.locator("div.dx-list").filter({has: this.page.locator("[role='option']")});
          const listCount = await dropdownLists.count();
          console.log("Total dx-list with options:", listCount);
          const visibleList = dropdownLists.nth(1);
          await visibleList.waitFor({ state: "visible" });
          const vendorOptions = visibleList.locator("[role='option']");
          const count1 = await vendorOptions.count();
          if (count1 === 0) throw new Error("No vendor options found");
          const randomIndex1 = Math.floor(Math.random() * count1);
          const selectedOption = vendorOptions.nth(randomIndex1);
          await selectedOption.scrollIntoViewIfNeeded();
          await selectedOption.click();
          const selectedText = await selectedOption.innerText();
          console.log("Selected Vendor:", selectedText.trim());

          //Picking any LOT  number from the above function
          await this.page.getByLabel('Lot Number: *').click();
          await this.page.getByLabel('Lot Number: *').fill(AddingWasteDisposalRawMaterialInventory.LOTNUmber);
          console.log(AddingWasteDisposalRawMaterialInventory.LOTNUmber);

          //Selecting Transaction type
          await this.page.getByPlaceholder('Select a transaction code').click();
          await this.page.getByText(AddingWasteDisposalRawMaterialInventory.TransactionCode).click();
          console.log(AddingWasteDisposalRawMaterialInventory.TransactionCode);

          //Selecting Unit of issue 
          await this.page.getByPlaceholder('Select a unit of issue').click();
          await this.page.getByLabel('Items').getByText(AddingWasteDisposalRawMaterialInventory.UnitOfIssueID).click();
          console.log(AddingWasteDisposalRawMaterialInventory.UnitOfIssueID)

          //Selecting Transaction amount
          await this.page.getByLabel('Transaction Amount: *').click();
          const randomAmountNum = Math.floor(100 + Math.random() * 900).toString();
          await this.page.getByLabel('Transaction Amount: *').fill(randomAmountNum);
          console.log(randomAmountNum);
          await this.page.getByLabel('Operator Name:').click();
          await this.page.getByLabel('Operator Name:').fill(AddingWasteDisposalRawMaterialInventory.OperatorName);
          await this.page.getByLabel('Keyed By:').click();
          await this.page.getByLabel('Keyed By:').fill(AddingWasteDisposalRawMaterialInventory.KeyedBy);
          await this.page.getByLabel('Note:').click();
          await this.page.getByLabel('Note:').fill(AddingWasteDisposalRawMaterialInventory.Note);
          await this.page.getByLabel('Save').click();

          //Validating the created transaction values
          await this.page.waitForTimeout(2000);
          await this.page.getByRole('row', { name: RawMaterialID }).locator('div').click();
          await this.page.waitForTimeout(1000);
          await this.page.locator("(//td[@aria-label='Expand']//div)[1]").click();
          await this.page.waitForTimeout(3000);
          await this.page.screenshot({ path: `Screenshots_DEV/6(WasteDisposal).png`});
          await this.page.locator("(//td[@aria-label='Collapse']//div)[2]").click();
          await this.page.getByLabel('Collapse').locator('div').click();
        


        }

    }
