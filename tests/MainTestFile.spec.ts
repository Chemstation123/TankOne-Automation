import { test, expect } from '@playwright/test'
import { LoginPage } from '../PageObjects/LoginPage';
import { ScheduleTankforDeliveryIDPage } from '../PageObjects/TestingSamplePage';

import { RawMaterialsSearchPage } from '../PageObjects/ValidateRawMaterialsSearch';
import { ProductsSearchPage } from '../PageObjects/ValidateProductsSearch';
import { ProductResearchHardErrorsPage } from '../PageObjects/ValidateProductResearchHE';
import { CreateDeleteRawMaterialVendorPage } from '../PageObjects/CreateDeleteVendorRawMaterialPage';

import { TruckSearchPage } from '../PageObjects/ValidateTruckSearch';
import { TruckMaintenaceHardErrorsPage } from '../PageObjects/ValidateTruckMaintenanceHE'
import { CreateUpdateTruckMaintenancePage } from '../PageObjects/CreateUpdateTruckMaintenancePage';

import { GlobalVendorSearchPage } from '../PageObjects/ValidateGlobalVendourSearch';
import { GlobalVendorHardErrorsPage } from '../PageObjects/ValidateGlobalVendorSearchMaintenanceHE';
import { CreateUpdateGlobalVendorMaintenancePage } from '../PageObjects/CreateUpdateGlobalVendorMaintenancePage';

import { RouteSearchPage } from '../PageObjects/ValidateRouteSearchPage'
import { RouteHardErrorsPage } from '../PageObjects/ValidateRouteMaintenanceHE'
import { CreateUpdateRouteMaintenancePage } from '../PageObjects/CreateUpdateRouteMaintenancePage';

import { EquipmentSearchPage } from '../PageObjects/ValidateEquipmentSearch'
import { EquipmentHardErrorsPage } from '../PageObjects/ValidateEquipmentHE'
import { CreateUpdateEquipmentMaintenancePage } from '../PageObjects/CreateUpdateEquipmentMaintenancePage';

import { CustomerSearchPage } from '../PageObjects/ValidateCustomerSearch';
import { CustomerCommentsHardErrorsPage } from '../PageObjects/ValidateCustomerCommentsHE';
import { NewCustomerInfoPage } from '../PageObjects/ValidateCustomerBillingInfo';
import { BillingInfoPage } from '../PageObjects/ValidateBillingInfoPage';
import { CustomerCommentsPage } from '../PageObjects/CreateCustomerCommentsPage';

import { ManagerControlHardErrosPage } from '../PageObjects/ValidateManagerControlHE';
import { UpdateManagerControlLocationPage } from '../PageObjects/UpdateManagerControlLocationPage';

import { TankPOTaxPage } from '../PageObjects/ValidateTankPOTaxPage';
import { TankEquipmentPage } from '../PageObjects/ValidateTankEquipmentPage';
import { TankConatctInfoHardErrorsPage } from '../PageObjects/ValidateTankContactInformationHE';
import { NewTankHardErrorsPage } from '../PageObjects/ValidateNewTankHE';
import { TankCommentsPage } from '../PageObjects/CreateTankCommentsPage';
import { UpdateDeleteTankEquipmentPage } from '../PageObjects/UpdateDeleteTankEquipmentPage';
import { TankEquipmentHE } from '../PageObjects/TankEquipmentHE';

import { QuoteInfoHardErrorsPage } from '../PageObjects/ValidateQuoteInfoHE';
import { ValidateQuotePricePostingPage } from '../PageObjects/ValidateQuotePricePostingPage';
import { LOTCertificationPage } from '../PageObjects/ValidateLOTCertificationHardError';
import { CreateUpdateLOTCertificationPage } from '../PageObjects/Create&UpdateLOTCertificationPage';
import { EditLOTCertificationHardErrorsPage } from '../PageObjects/EditLOTCertificationHE'

import { MSCOverrideHardErrorsPage } from '../PageObjects/ValidateMSCOverrideHE';
import { CreateUpdateMSCOverridePage } from '../PageObjects/CreateUpdateMSCOverridePage';

import { ScheduleTankForDeliveryPage } from '../PageObjects/ValidateScheduleTankForDeliveryPage';
import { ScheduleTankForDeliveryIndividualPage } from '../PageObjects/ScheduleTankForDeliveryIndividualPage';

import { ValidateAmountFeildPostingPage } from '../PageObjects/ValidationForAmountFeildPostingPage';
import { ValidateUnCapAmountFeilds } from '../PageObjects/ValidateUnCap&AmonutFeildsPostingPage';
import { ValidateAFIsFloatType } from '../PageObjects/ValidateAFFloatType';
import { ValidateWarningMessage } from '../PageObjects/ValidateWaringMessagePostingPage';
import { ValidateAmountFeildIsFloatInCustomerPage } from '../PageObjects/ValidateAmountFeildInFloatTypeOnCustomerPage';

import { AddToExistingDeliveryPageNew } from '../PageObjects/AddToExistingDeliveryPage';

import { ToolBoxWorksheetsPage } from '../PageObjects/ValidateToolBoxWroksheets';

import { UpdateStrategicQualifyFactorsPage } from '../PageObjects/UpdateStrategicQualifyFactorsPage';

import { ValidateUpdateCustomerSalesPerson } from '../PageObjects/ValidateUpdateCustomerSalesPerson';
import { ValidateSplitCommisionsPage } from '../PageObjects/ValidateSplitCommissionsPage';

import { ValidateProductSearcFilters } from '../PageObjects/ProductSearchPageTest';
import { CreateUpdateAccountManagerPage } from '../PageObjects/CreateUpdateAccountManagerPage';






test.describe('TankOne Page Tests', () => {

    let loginPage: LoginPage;
    let scheduleTankforDeliveryIDPage: ScheduleTankforDeliveryIDPage;

    // let validateProductsSearchFilters: ValidateProductSearcFilters;
    let rawMaterialsSearchPage: RawMaterialsSearchPage;
    let productsSearchPage: ProductsSearchPage;
    let productResearchHardErrorsPage: ProductResearchHardErrorsPage;
    let createDeleteRawMaterialVendorPage: CreateDeleteRawMaterialVendorPage;
    let truckSearchPage: TruckSearchPage;
    let truckMaintenanceHardErrorsPage: TruckMaintenaceHardErrorsPage;
    let createUpdateTruckMaintenancePage: CreateUpdateTruckMaintenancePage;
    let globalVendorSearchPage: GlobalVendorSearchPage;
    let globalVendorHardErrorsPage: GlobalVendorHardErrorsPage;
    let createUpdateGlobalVendorMaintenancePage: CreateUpdateGlobalVendorMaintenancePage;
    let routeSearchPage: RouteSearchPage;
    let routeHardErrorsPage: RouteHardErrorsPage;
    let createUpdateRouteMaintenancePage: CreateUpdateRouteMaintenancePage;
    let equipmentSeachPage: EquipmentSearchPage;
    let equipmentHardErrorsPage: EquipmentHardErrorsPage;
    let createUpdateEquipmentMaintenancePage: CreateUpdateEquipmentMaintenancePage;
    let customerSearchPage: CustomerSearchPage;
    let customerCommentsHardErrorsPage: CustomerCommentsHardErrorsPage;
    let newCustomerInfoPage: NewCustomerInfoPage;
    let billingInfo: BillingInfoPage;
    let customerCommentsPage: CustomerCommentsPage;
    let managerControlHardErrorsPage: ManagerControlHardErrosPage;
    let updateManagerControlLocationPage: UpdateManagerControlLocationPage;
    let tankPOTaxPage: TankPOTaxPage;
    let tankEquipmentPage: TankEquipmentPage;
    let tankContactInfoHardErrorsPage: TankConatctInfoHardErrorsPage;
    let newTankHardErrorsPage: NewTankHardErrorsPage;
    let tankCommentsPage: TankCommentsPage;
    let quoteInfoHardErrorsPage: QuoteInfoHardErrorsPage;
    let validateQuotePricePostingPage : ValidateQuotePricePostingPage;
    let lotCertificationPage: LOTCertificationPage;
    let createUpdateLOTCertificationPage: CreateUpdateLOTCertificationPage;
    let editLOTCertificationHardErrorsPage: EditLOTCertificationHardErrorsPage;
    let mscOverrideHardErrorsPage: MSCOverrideHardErrorsPage;
    let createUpdateMSCOverridePage: CreateUpdateMSCOverridePage;
    let scheduleTankForDeliveryPage: ScheduleTankForDeliveryPage;
    let scheduleTankForDeliveryIndividualPage: ScheduleTankForDeliveryIndividualPage;
    let addToExistingDeliveryPageNew: AddToExistingDeliveryPageNew;
    let validateAmountFeildPostingPage: ValidateAmountFeildPostingPage;
    let validateUncapAmountsFeilds : ValidateUnCapAmountFeilds;
    let validateAFIsFloatType: ValidateAFIsFloatType;
    let validateWarningMessage: ValidateWarningMessage;
    let validateAmountFeildIsFloatInCustomerPage: ValidateAmountFeildIsFloatInCustomerPage;
    let toolBoxWorksheetsPage: ToolBoxWorksheetsPage;
    let updateStrategicQualifyFactorsPage: UpdateStrategicQualifyFactorsPage;
    let validateUpdateCustomerSalesPerson: ValidateUpdateCustomerSalesPerson;
    let validateSplitCommissionsPage: ValidateSplitCommisionsPage;
    let updateDeleteTankEquipmentPage: UpdateDeleteTankEquipmentPage; 
    let tankEquipmentHE: TankEquipmentHE;
    let createUpdateAccountManager: CreateUpdateAccountManagerPage;


    // test('Test Product Search Filters', async({ page })=>{
    //     loginPage = new LoginPage(page);
    //     validateProductsSearchFilters = new ValidateProductSearcFilters(page);

    //     await loginPage.performLoginPage();
    //     await validateProductsSearchFilters.applyTextFilter();
    // })



    test('Validate Amount Feild In Posting Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateAFIsFloatType = new ValidateAFIsFloatType(page);

        await loginPage.performLoginPage();
        await validateAFIsFloatType.performValidateAmountFeildIsFloatType();

    });


    
    test('Products Search Page', async({ page}) => {
        loginPage = new LoginPage(page);
        productsSearchPage= new ProductsSearchPage(page);

        await loginPage.performLoginPage();
        await productsSearchPage.performProductSearch();

    });


    test('Product Research Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        productResearchHardErrorsPage = new ProductResearchHardErrorsPage(page);

        await loginPage.performLoginPage();
        await productResearchHardErrorsPage.performProductResearchHE();

    });


    test('Raw Materials Search', async({ page}) => {
        loginPage = new LoginPage(page);
        rawMaterialsSearchPage = new RawMaterialsSearchPage(page);

        await loginPage.performLoginPage();
        await rawMaterialsSearchPage.performRawMaterialsSearch();

    });


    test('Create Delete Raw Materials Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createDeleteRawMaterialVendorPage = new CreateDeleteRawMaterialVendorPage(page);

        await loginPage.performLoginPage();
        await createDeleteRawMaterialVendorPage.performCreateDeleteRawMaterialVendor();

    });


    test('Truck Search Page', async({ page}) => {
        loginPage = new LoginPage(page);
        truckSearchPage = new TruckSearchPage(page);

        await loginPage.performLoginPage();
        await truckSearchPage.performUserSearch();

    });


    test('Truck Maintenance Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        truckMaintenanceHardErrorsPage = new TruckMaintenaceHardErrorsPage(page);

        await loginPage.performLoginPage();
        await truckMaintenanceHardErrorsPage.performTruckPageHardErrors();

    });


    test('Create Update Truck Maintenance Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateTruckMaintenancePage = new CreateUpdateTruckMaintenancePage(page);

        await loginPage.performLoginPage();
        await createUpdateTruckMaintenancePage.performCreateUpdateTruckMaintenancePage();

    });


    test('Global Vendor Search Page', async({ page}) => {
        loginPage = new LoginPage(page);
        globalVendorSearchPage = new GlobalVendorSearchPage(page);

        await loginPage.performLoginPage();
        await globalVendorSearchPage.performGlobalVendorSearch();

    });


    test('Global Vendor Maintenance Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        globalVendorHardErrorsPage = new GlobalVendorHardErrorsPage(page);

        await loginPage.performLoginPage();
        await globalVendorHardErrorsPage.performGlobalVendorHE();

    });


    test('Create Update Global Vendor Maintenance Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateGlobalVendorMaintenancePage = new CreateUpdateGlobalVendorMaintenancePage(page);

        await loginPage.performLoginPage();
        await createUpdateGlobalVendorMaintenancePage.performCreateUpdateGVMPage();

    });


    test('Route Search Page', async({ page}) => {
        loginPage = new LoginPage(page);
        routeSearchPage = new RouteSearchPage(page);

        await loginPage.performLoginPage();
        await routeSearchPage.performRouteSearch();
    });


    test('Route Maintenance Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        routeHardErrorsPage = new RouteHardErrorsPage(page);

        await loginPage.performLoginPage();
        await routeHardErrorsPage.performRoutePageHE();
    });


    test('Create Update Route Maintenance Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateRouteMaintenancePage = new CreateUpdateRouteMaintenancePage(page);

        await loginPage.performLoginPage();
        await createUpdateRouteMaintenancePage.performCreateUpdateRouteMaintenance();
    });


    test('Equipment Search Page', async({ page}) => {
        loginPage = new LoginPage(page);
        equipmentSeachPage = new EquipmentSearchPage(page);

        await loginPage.performLoginPage();
        await equipmentSeachPage.performEquipmentSearch();
    });


    test('Equipment Maintenance Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        equipmentHardErrorsPage = new EquipmentHardErrorsPage(page);

        await loginPage.performLoginPage();
        await equipmentHardErrorsPage.performEquipmentHE();
    });


    test('Create Update Equipment Maintenance Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateEquipmentMaintenancePage = new CreateUpdateEquipmentMaintenancePage(page);

        await loginPage.performLoginPage();
        await createUpdateEquipmentMaintenancePage.performCreateUpdateEquipmentPage();
    });


    test('Customer Search Page', async({ page}) => {
        loginPage = new LoginPage(page);
        customerSearchPage = new CustomerSearchPage(page);

        await loginPage.performLoginPage();
        await customerSearchPage.performCustomerSearch();
    });


    test('Customer Comments Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        customerCommentsHardErrorsPage = new CustomerCommentsHardErrorsPage(page);

        await loginPage.performLoginPage();
        await customerCommentsHardErrorsPage.performComments();
    });


    test('Customer BI Tab Page', async({ page}) => {
        loginPage = new LoginPage(page);
        newCustomerInfoPage = new NewCustomerInfoPage(page);

        await loginPage.performLoginPage();
        await newCustomerInfoPage.performCustomerInfo();
    });


    // test('Billing Info Page', async({ page}) => {
    //     loginPage = new LoginPage(page);
    //     billingInfo = new BillingInfoPage(page);

    //     await loginPage.performLoginPage();
    //     await billingInfo.PerformBillingInfo();
    // });


    // test('Customer Comments Page', async({ page}) => {
    //     loginPage = new LoginPage(page);
    //     customerCommentsPage = new CustomerCommentsPage(page);

    //     await loginPage.performLoginPage();
    //     await customerCommentsPage.performCustComments();
    // });


    test('Manager Control Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        managerControlHardErrorsPage = new ManagerControlHardErrosPage(page);

        await loginPage.performLoginPage();
        await managerControlHardErrorsPage.performManagerControlHE();
    });


    test('Update Manager Control Location', async({ page}) => {
        loginPage = new LoginPage(page);
        updateManagerControlLocationPage = new UpdateManagerControlLocationPage(page);

        await loginPage.performLoginPage();
        await updateManagerControlLocationPage.performUpdateMCLocation();
    });


    test('Tank PO/Tax Page', async({ page}) => {
        loginPage = new LoginPage(page);
        tankPOTaxPage = new TankPOTaxPage(page);

        await loginPage.performLoginPage();
        await tankPOTaxPage.performTankPOTax();
    });


    test('Tank Equipment Page', async({ page}) => {
        loginPage = new LoginPage(page);
        tankEquipmentPage = new TankEquipmentPage(page);

        await loginPage.performLoginPage();
        await tankEquipmentPage.perfomTankEquipement();
    });


    test('Tank Contact Information Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        tankContactInfoHardErrorsPage = new TankConatctInfoHardErrorsPage(page);

        await loginPage.performLoginPage();
        await tankContactInfoHardErrorsPage.performTankContactInfoHardErrors();
    });


    test('New Tank Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        newTankHardErrorsPage = new NewTankHardErrorsPage(page);

        await loginPage.performLoginPage();
        await newTankHardErrorsPage.performNewTankHE();
    });


    test('Tank Comments Page', async({ page}) => {
        loginPage = new LoginPage(page);
        tankCommentsPage = new TankCommentsPage(page);

        await loginPage.performLoginPage();
        await tankCommentsPage.performTankComments();
    });


    test('Update Delete Tank Equipment Page', async({ page}) => {
        loginPage = new LoginPage(page);
        updateDeleteTankEquipmentPage = new UpdateDeleteTankEquipmentPage(page);

        await loginPage.performLoginPage();
        await updateDeleteTankEquipmentPage.performUpdateDeleteTankEquipmentPage();
    });


    test('Tank Equipment Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        tankEquipmentHE = new TankEquipmentHE(page);

        await loginPage.performLoginPage();
        await tankEquipmentHE.performTankEquipmentHE();
    });


    test('Quote Info Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        quoteInfoHardErrorsPage = new QuoteInfoHardErrorsPage(page);

        await loginPage.performLoginPage();
        await quoteInfoHardErrorsPage.performQuoteInfoHardErrors();
    });


    test('Validate Quote Price Posting Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateQuotePricePostingPage = new ValidateQuotePricePostingPage(page);

        await loginPage.performLoginPage();
        await validateQuotePricePostingPage.performValidateQuotePrice();
    });


    test('LOT Certification Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        lotCertificationPage = new LOTCertificationPage(page);

        await loginPage.performLoginPage();
        await lotCertificationPage.performLOTCertification();
    });


    test('Create Update LOT Certification Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateLOTCertificationPage = new CreateUpdateLOTCertificationPage(page);

        await loginPage.performLoginPage();
        await createUpdateLOTCertificationPage.performCreateUpdateLOTCertificate();
    });


    test('Edit LOT Certification Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        editLOTCertificationHardErrorsPage = new EditLOTCertificationHardErrorsPage(page);

        await loginPage.performLoginPage();
        await editLOTCertificationHardErrorsPage.performEditLOTCertificate();
    });


    test('MSC Override Hard Errors', async({ page}) => {
        loginPage = new LoginPage(page);
        mscOverrideHardErrorsPage = new MSCOverrideHardErrorsPage(page);

        await loginPage.performLoginPage();
        await mscOverrideHardErrorsPage.performMSCOverrideHE();
    });


    test('Create Update MSC Override Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateMSCOverridePage = new CreateUpdateMSCOverridePage(page);

        await loginPage.performLoginPage();
        await createUpdateMSCOverridePage.performCreateUpdateMSCOverride();
    });


    // test('Schedule Tank For Delivery Page', async({ page}) => {
    //     loginPage = new LoginPage(page);
    //     scheduleTankForDeliveryPage = new ScheduleTankForDeliveryPage(page);

    //     await loginPage.performLoginPage();
    //     await scheduleTankForDeliveryPage.performScheduleTankForDelivery();
    // });


    // test('Schedule Tank For Delivery Individual Page', async({ page}) => {
    //     loginPage = new LoginPage(page);
    //     scheduleTankForDeliveryIndividualPage = new ScheduleTankForDeliveryIndividualPage(page);

    //     await loginPage.performLoginPage();
    //     await scheduleTankForDeliveryIndividualPage.performScheduleTankForDelivery();
    // });


    test('Add To Existing Delivery Page', async({ page}) => {
        loginPage = new LoginPage(page);
        addToExistingDeliveryPageNew = new AddToExistingDeliveryPageNew(page);

        await loginPage.performLoginPage();
        await addToExistingDeliveryPageNew.performAddExistingDelivery();
    });


    test('Validate Amount Feild Posting Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateAmountFeildPostingPage = new ValidateAmountFeildPostingPage(page);

        await loginPage.performLoginPage();
        await validateAmountFeildPostingPage.performValidateAmountFeildPosting();
    });


    test('Validate UnCap & Amount Feilds Posting Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateUncapAmountsFeilds = new ValidateUnCapAmountFeilds(page);

        await loginPage.performLoginPage();
        await validateUncapAmountsFeilds.performValidateUnCapAmountFeilds();
    });


    test('Validate Warning Message in Posting Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateWarningMessage = new ValidateWarningMessage(page)

        await loginPage.performLoginPage();
        await validateWarningMessage.performWarningMessage();
    });


    test('Validate Amount Feild is Float in Customer Delivery Page too', async({ page}) => {
        loginPage = new LoginPage(page);
        validateAmountFeildIsFloatInCustomerPage = new ValidateAmountFeildIsFloatInCustomerPage(page);

        await loginPage.performLoginPage();
        await validateAmountFeildIsFloatInCustomerPage.performAmountFeildIsFloatValue();
    });



    test('ToolBox Worksheets Page', async({ page}) => {
        loginPage = new LoginPage(page);
        toolBoxWorksheetsPage = new ToolBoxWorksheetsPage(page);

        await loginPage.performLoginPage();
        await toolBoxWorksheetsPage.performValidateToolboxWorksheets();
    });


    test('Update Strategic Qualify Factors Page', async({ page}) => {
        loginPage = new LoginPage(page);
        updateStrategicQualifyFactorsPage = new UpdateStrategicQualifyFactorsPage(page);

        await loginPage.performLoginPage();
        await updateStrategicQualifyFactorsPage.performUpdateStrategicQualifyFactors();
    });


    test('Validate Update Customer Sales Person Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateUpdateCustomerSalesPerson = new ValidateUpdateCustomerSalesPerson(page);

        await loginPage.performLoginPage();
        await validateUpdateCustomerSalesPerson.performValidateUpdateCustomerSalesPerson();
    });


    test('Validate Split Commissions Page', async({ page}) => {
        loginPage = new LoginPage(page);
        validateSplitCommissionsPage = new ValidateSplitCommisionsPage(page);

        await loginPage.performLoginPage();
        await validateSplitCommissionsPage.performValidateSplitCommissions();
    });


    test('Create Update Account Manager Page', async({ page}) => {
        loginPage = new LoginPage(page);
        createUpdateAccountManager = new CreateUpdateAccountManagerPage(page);
 
        await loginPage.performLoginPage();
        await createUpdateAccountManager.performCreateUpdateAccountManagerPage();
    });




 





  

    




    

});

