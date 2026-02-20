import {test, expect} from '@playwright/test';
import { LoginPageCP } from '../PageObjects_CP/LoginPageCP';
import { AddTopToolbarLogoutUserProfileOptions } from '../PageObjects_CP/AddTopToolbarLogoutUserProfileOptions';
import { SortTanksByDepartment } from '../PageObjects_CP/SortTanksByDepartment';
import { VerifyHomeAndLogoutButtonsOnLeftPanel } from '../PageObjects_CP/VerifyHomeAndLogoutButtonsOnLeftPanel';
import { VerifyLocationDropdownonTopToolbar } from '../PageObjects_CP/VerifyLocationDropdownonTopToolbar';
import { VerifyStatusSection } from '../PageObjects_CP/VerifyStatusSection';
import { VerifyHistorySection } from '../PageObjects_CP/VerifyHistorySection';
import { VerifyDetailsSection } from '../PageObjects_CP/VerifyDetailsSection';
import { VerifyUsageSection } from '../PageObjects_CP/VerifyUsageSection';






test.describe('CP Environmnet Tests', () => {

    let loginPage: LoginPageCP;
    let addTopToolbarLogoutUserProfileOptionsPage: AddTopToolbarLogoutUserProfileOptions;
    let sortTanksByDepartmentPage: SortTanksByDepartment;
    let verifyHomeAndLogoutButtonsOnLeftPanelPage: VerifyHomeAndLogoutButtonsOnLeftPanel;
    let verifyLocationDropdownonTopToolbarPage: VerifyLocationDropdownonTopToolbar;
    let verifyStatusSectionPage: VerifyStatusSection;
    let verifyHistorySectionPage: VerifyHistorySection;
    let verifyDetailsSectionPage: VerifyDetailsSection;
    let verifyUsageSectionPage: VerifyUsageSection;






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


    test('Verify Status Section', async({ page }) => {
        loginPage = new LoginPageCP(page);
        verifyStatusSectionPage = new VerifyStatusSection(page);

        await loginPage.performLoginPageCP();
        await verifyStatusSectionPage.VerifyStatusSection();
    });

    test('Verify History Section', async({ page }) => {
        loginPage = new LoginPageCP(page);
        verifyHistorySectionPage = new VerifyHistorySection(page);

        await loginPage.performLoginPageCP();
        await verifyHistorySectionPage.VerifyHistorySection();
    });

    test('Verify Details Section', async({ page }) => {
        loginPage = new LoginPageCP(page);
        verifyDetailsSectionPage = new VerifyDetailsSection(page);

        await loginPage.performLoginPageCP();
        await verifyDetailsSectionPage.VerifyDetailsSection();
    });


    test('Verify Usage Section', async({ page }) => {
        loginPage = new LoginPageCP(page);
        verifyUsageSectionPage = new VerifyUsageSection(page);

        await loginPage.performLoginPageCP();
        await verifyUsageSectionPage.VerifyUsageSection();

    });







});