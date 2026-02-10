import {test, expect} from '@playwright/test';
import { LoginPageCP } from '../PageObjects_CP/LoginPageCP';
import { AddTopToolbarLogoutUserProfileOptions } from '../PageObjects_CP/AddTopToolbarLogoutUserProfileOptions';
import { SortTanksByDepartment } from '../PageObjects_CP/SortTanksByDepartment';
import { VerifyHomeAndLogoutButtonsOnLeftPanel } from '../PageObjects_CP/VerifyHomeAndLogoutButtonsOnLeftPanel';
import { VerifyLocationDropdownonTopToolbar } from '../PageObjects_CP/VerifyLocationDropdownonTopToolbar';






test.describe('CP Environmnet Tests', () => {

    let loginPage: LoginPageCP;
    let addTopToolbarLogoutUserProfileOptionsPage: AddTopToolbarLogoutUserProfileOptions;
    let sortTanksByDepartmentPage: SortTanksByDepartment;
    let verifyHomeAndLogoutButtonsOnLeftPanelPage: VerifyHomeAndLogoutButtonsOnLeftPanel;
    let verifyLocationDropdownonTopToolbarPage: VerifyLocationDropdownonTopToolbar;





    test('Add Top Toolbar Logout User Profile Options', async({ page }) => {
        loginPage = new LoginPageCP(page);
        addTopToolbarLogoutUserProfileOptionsPage = new AddTopToolbarLogoutUserProfileOptions(page);

        await loginPage.performLoginPageCP();
        await addTopToolbarLogoutUserProfileOptionsPage.AddTopToolbarLogoutUserProfileOptions();

    });

    test('Sort Tanks By Department', async({ page }) => {
        loginPage = new LoginPageCP(page);
        sortTanksByDepartmentPage = new SortTanksByDepartment(page);

        await loginPage.performLoginPageCP();
        await sortTanksByDepartmentPage.SortTanksByDepartment();

    });

    test('Verify Home and Logout buttons on Left Panel', async({ page }) => {
        loginPage = new LoginPageCP(page);
        verifyHomeAndLogoutButtonsOnLeftPanelPage = new VerifyHomeAndLogoutButtonsOnLeftPanel(page);

        await loginPage.performLoginPageCP();
        await verifyHomeAndLogoutButtonsOnLeftPanelPage.VerifyHomeAndLogoutButtonsOnLeftPanel();
    });


    test('Verify Location Dropdown on Top Toolbar', async({ page }) => {
        loginPage = new LoginPageCP(page);
        verifyLocationDropdownonTopToolbarPage = new VerifyLocationDropdownonTopToolbar(page);

        await loginPage.performLoginPageCP();
        await verifyLocationDropdownonTopToolbarPage.VerifyLocationDropdownonTopToolbar();
    });










});