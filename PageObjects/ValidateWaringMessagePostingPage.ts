import { Page, expect } from "@playwright/test";

export class ValidateWarningMessage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performWarningMessage()
     {
        await this.page.getByText('Deliveries & Scheduling').click();
        await this.page.getByText('PostingPosting').click();
        await this.page.waitForTimeout(3000);
        
        // Click on the first row of the grid
        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
        await this.page.waitForTimeout(3000);
        
        // Click 'Post Deliveries' button
        await this.page.getByLabel('Post Deliveries').click();
        await this.page.waitForTimeout(1000);
        
        // Wait for the warning message to appear
        const WM_Prompt = await this.page.locator('div').filter({ hasText: 'Please select at least one' }).nth(1).innerText();
        const warningMessage = await this.page.locator('div').filter({ hasText: 'Please select at least one' }).nth(1);
        await expect(warningMessage).toBeVisible({ timeout: 1000 });
        console.log(WM_Prompt);

        // Validate the warning message text
        const actualMessage = await warningMessage.textContent();
        //expect(actualMessage).toContain(expectedMessage);

        // Optional: Click on the warning message to dismiss it
        await warningMessage.click();

        // Additional actions after validating the warning message
        await this.page.locator('.with-footer > div > div > div:nth-child(2) > .dx-scrollable-scroll > .dx-scrollable-scroll-content').click();
        await this.page.getByRole('gridcell', { name: '0', exact: true }).first().click();
        await this.page.getByLabel('Post Deliveries').click();


     
    }
} 