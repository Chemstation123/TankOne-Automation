import { test } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { CreateUpdateAccountManagerPage } from '../PageObjects/CreateUpdateAccountManagerPage';

// Focused spec for Create / Update / Delete Account Manager
test.describe('Create/Update Account Manager', () => {
  test('Create, update and delete account manager', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const createUpdateAccountManager = new CreateUpdateAccountManagerPage(page);

    // Perform login (assumes LoginPage handles credentials from env or fixtures)
    await loginPage.performLoginPage();

    // Execute the page object flow which creates, updates and deletes the record
    await createUpdateAccountManager.performCreateUpdateAccountManagerPage();
  });
});
