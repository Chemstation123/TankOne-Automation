import {test, expect}from "allure-playwright";  

import { LoginPage}from "../PageObjects/LoginPage";
import { TankCapacityColumnChooser } from "../PageObjects_RC/ValidateTankCapacityColumnChooser_RC";
import { TankCapacityChooserTankTab } from "../PageObjects_RC/ValidateTankCapacityChooserInTankTab_RC";
import { ValidateDefaultDriverC1 } from "../PageObjects_RC/ValidateDefaultDriverChoosen_RC";
import { SwitchDefaultDriverDeliveryPage } from "../PageObjects_RC/ValidateSwitchDriverInDeliveryPages_RC";
import { DetailsByDriver } from "../PageObjects_RC/ValidateDetailsByDriverReport_Rc";
import { DefaultDriverHEReportsPage } from "../PageObjects_RC/ValidateDefaultDriverHardErrorsReportsPage_RC";
import { ValidateCommentsOnTankSection } from "../PageObjects_RC/ValidateCommentsOnTankSection_RC";
import { UpdateDeleteCommentsTankSectionPage } from "../PageObjects_RC/UpdateDeleteCommentsOnTankSectionPage_RC";
import { VerifyInstallDateNewTankPlacementEntry } from "../PageObjects_RC/VerifyInstallDate-NewTankPlacementEntry";
import { VerifyTelemetryDeviceIconTankPage } from "../PageObjects_RC/VerifyTelemetryDeviceIconTankPage";
import { TaxFieldFreightPage } from "../PageObjects_RC/TaxFeildInFreightPage_RC";
import { MarketFieldHardErrorsNewCustomerInfoPage } from "../PageObjects_RC/MarketFieldHardErrorsNewCustomerInfoPage_RC";


test.describe('RC Environment Tests',() => {

    let loginPage: LoginPage;
    let tankCapacityColumnChooser: TankCapacityColumnChooser;
    let tankCapacityChooserTankTab: TankCapacityChooserTankTab;
    let validateDefaultDriverC1: ValidateDefaultDriverC1;
    let switchDefaultDriverDeliveryPage: SwitchDefaultDriverDeliveryPage;
    let detailsByDriver: DetailsByDriver;
    let defaultDriverHEReportsPage: DefaultDriverHEReportsPage;
    let validateCommentsOnTankSection: ValidateCommentsOnTankSection;
    let updatedDeleteCommentsTankSectionPage: UpdateDeleteCommentsTankSectionPage;
    let verifyInstallDateNewTankPlacementEntry: VerifyInstallDateNewTankPlacementEntry;
    let verifyTelemtryDeviceIconTankPage: VerifyTelemetryDeviceIconTankPage;
    let taxFieldFreightPage: TaxFieldFreightPage
    let marketFieldHardErrorsNewCustomerInfoPage: MarketFieldHardErrorsNewCustomerInfoPage;



    test('Tank Capacity Column Chooser Customer Tab ', async({ page}) => {
        loginPage = new LoginPage(page);
        tankCapacityColumnChooser = new TankCapacityColumnChooser(page);

        await loginPage.performLoginPage();
        await tankCapacityColumnChooser.performTankCapacityColumnChooser();


        })


    test('Tank Capacity Column Chooser Tank Tab', async({ page}) => {
        loginPage = new LoginPage(page);
        tankCapacityChooserTankTab = new TankCapacityChooserTankTab(page);

        await loginPage.performLoginPage();
        await tankCapacityChooserTankTab.performTankCapacityChooserTankTab();


        })


    test('Validate Default Driver Case1', async({ page}) => {
        loginPage = new LoginPage(page);
        validateDefaultDriverC1 = new ValidateDefaultDriverC1(page);
    
        await loginPage.performLoginPage();
        await validateDefaultDriverC1.performValidateDefaultDriverC1();
    
    
        })



    // test('Validate Switch Default Driver Delivery Page', async({ page}) => {
    //     loginPage = new LoginPage(page);
    //     switchDefaultDriverDeliveryPage = new SwitchDefaultDriverDeliveryPage(page);
        
    //     await loginPage.performLoginPage();
    //     await switchDefaultDriverDeliveryPage.performSwitchDedaultDriverDeliveryPage();
        
        
    //    })


    // test('Validate Details by Driver Reports Page', async({ page}) => {
    //     loginPage = new LoginPage(page);
    //     detailsByDriver = new DetailsByDriver(page);
        
    //     await loginPage.performLoginPage();
    //     await detailsByDriver.performDetailsByDriver();
        
        
    //    })


    test('Validate Default Driver Hard Errors Reports Page', async({ page}) => {
        loginPage = new LoginPage(page);
        defaultDriverHEReportsPage = new DefaultDriverHEReportsPage(page);
        
        await loginPage.performLoginPage();
        await defaultDriverHEReportsPage.performDefaultDriverHEReports();
        
        
       })


    test('Validate Comments On Tank Section', async({ page}) => {
        loginPage = new LoginPage(page);
        validateCommentsOnTankSection = new ValidateCommentsOnTankSection(page);
        
        await loginPage.performLoginPage();
        await validateCommentsOnTankSection.performValidateCommentsOnTankSection();
        
        
       })


    test('Update Delete Comments Tank Section Page', async({ page}) => {
        loginPage = new LoginPage(page);
        updatedDeleteCommentsTankSectionPage = new UpdateDeleteCommentsTankSectionPage(page);
        
        await loginPage.performLoginPage();
        await updatedDeleteCommentsTankSectionPage.performUpdateDeleteCommentsTankSectionSection();
        
        
       })



    test('Verify Install Date New Tank Placement Entry ', async({ page}) => {
        loginPage = new LoginPage(page);
        verifyInstallDateNewTankPlacementEntry = new VerifyInstallDateNewTankPlacementEntry(page);
        
        await loginPage.performLoginPage();
        await verifyInstallDateNewTankPlacementEntry.performInstallDateNewTankPlacementEntry();
        
        
       })



    test('Verify Telemtry Icon Tank Page ', async({ page}) => {
        loginPage = new LoginPage(page);
        verifyTelemtryDeviceIconTankPage = new VerifyTelemetryDeviceIconTankPage(page);
        
        await loginPage.performLoginPage();
        await verifyTelemtryDeviceIconTankPage.verifyTelemtryDeviceIcon();
        
        
       })


    test('Tax Field Freight Page', async({page}) => {

        loginPage = new LoginPage(page);
        taxFieldFreightPage = new TaxFieldFreightPage(page);
    
        await loginPage.performLoginPage();
        await taxFieldFreightPage.TaxFieldFreight();
    
    });


    // test('Market Field New Customer Info Page', async({page}) => {

    //     loginPage = new LoginPage(page);
    //    marketFieldHardErrorsNewCustomerInfoPage = new MarketFieldHardErrorsNewCustomerInfoPage(page);
    
    //     await loginPage.performLoginPage();
    //     await marketFieldHardErrorsNewCustomerInfoPage.performMarketFieldHardErrors();
    
    // });

});