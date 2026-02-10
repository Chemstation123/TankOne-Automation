import { test, expect } from "allure-playwright";

import { LoginPage } from "../PageObjects_DEV/LoginPage";
import { PONumberColumnChooserDHPage } from "../PageObjects_Dev/PONumberColumnChooserDeliverHistoryPage";
import { VerifyRawMaterialsHardErrors } from "../PageObjects_Dev/VerifyRawMaterialsHardErrors";
import { MakingManualAdjustmentToSMSPRawMaterialsPage } from "../PageObjects_Dev/MakingManualAdjustmentToSMSPRawMaterialsHEPage";
import { SMSPProductInventoryByLOTNumberHEPage } from "../PageObjects_Dev/SMSPProductInventoryByLOTNumberHEPage";
import { SanitizerInventoryAddingNewAdjustmentTransaction } from "../PageObjects_Dev/SaintizerInventoryAddingNewAdjustmentTransaction";
import { SanitizerInventoryAddingNewVendorReceiptTransaction } from "../PageObjects_Dev/SanitizerInventoryAddingNewVendorReceiptTransaction";
import { SanitizerInventoryAddingNewDefaultTransaction } from "../PageObjects_Dev/SanitizerInventoryAddingNewDefaultTransaction";
import { RawMaterialInventoryAddingNewAdjustmentTransaction } from "../PageObjects_Dev/RawMaterialInventoryAddingNewAdjustmentTransaction";
import { RawMaterialInventoryAddingNewWithdrawalTransaction } from "../PageObjects_Dev/RawMaterialInventoryAddingNewWithdrawalTransaction";
import { RawMaterialInventoryAddingNewLossSpillTransaction } from "../PageObjects_Dev/RawMaterialInventoryAddingNewLossSpillTransaction";
import { RawMaterialInventoryAddingNewVendorReceiptTransaction } from "../PageObjects_Dev/RawMaterialInventoryAddingNewVendorReceiptTransaction";
import { RawMaterialInventoryAddingNewDefaultTransaction } from "../PageObjects_Dev/RawMaterialInventoryAddingNewDefaultTransaction";
import { RawMaterialInventoryAddingNewWasteDisposalTransaction } from "../PageObjects_Dev/RawMaterialInventoryAddingNewWasteDisposalTransaction";
import { ProductResearchEditSearchCriteriaPage } from "../PageObjects_Dev/ProductResearchEditSearchCriteriaPage";
import { OwnersCanEditBasePricesPage } from "../PageObjects_Dev/OwnersCanEditBasePricesPage";
import { RegionFieldOnCustomerCardPage } from "../PageObjects_DEV/RegionFieldOnCustomerCardPage";
import { ValidateInitialCustomerConnectDashboardCustomerData } from "../PageObjects_Dev/ValidateInitialCustomerConnectDashboardCustomerData";
import { RegisterSanitizerProductsInDeliveryStateEPAEditing } from "../PageObjects_Dev/RegisterSanitizerProductsInDeliveryStateEPAEditing";
import { ValidateDeliverySchedulingSanitizerProductsPageDifferentState } from "../PageObjects_Dev/ValidateDeliverySchedulingSanitizerProductsPageDifferentState";
import { CustomerConnectFilterDataByProductInfoPage } from "../PageObjects_DEV/CustomerConnectFilterDataByProductInfoPage";
import { LabReportSanitizerProductDeliveriesbyStatePage } from "../PageObjects_DEV/LabReportSanitizerProductDeliveriesbyState";
import { AddDeliveriesTabToViewProductDeliveryHistory } from "../PageObjects_DEV/AddDeliveriesTabToViewProductDeliveryHistory";
import { ValidateCSRReportInventoryAuditOptionalchecksSections } from "../PageObjects_DEV/ValidateCSRReportInventoryAuditOptionalchecksSections";


test .describe('Tank-One Dev Page Tests', ()=> {
    let loginPage : LoginPage;
    let pONumberColumnChooserDHPage : PONumberColumnChooserDHPage;
    let verifyRawMaterialsHardErrors: VerifyRawMaterialsHardErrors;
    let makingManualAdjustmentToSMSPRawMaterialsPage: MakingManualAdjustmentToSMSPRawMaterialsPage;
    let sMSPProductInventoryByLOTNumberHEPage: SMSPProductInventoryByLOTNumberHEPage;
    let sanitizerInventoryAddingNewAdjustmentTransaction: SanitizerInventoryAddingNewAdjustmentTransaction;
    let sanitizerInventoryAddingNewVendorReceiptTransaction: SanitizerInventoryAddingNewVendorReceiptTransaction;
    let sanitizerInventoryAddingNewDefaultTransaction: SanitizerInventoryAddingNewDefaultTransaction;
    let rawMaterialInventoryAddingNewAdjustmentTransaction: RawMaterialInventoryAddingNewAdjustmentTransaction;
    let rawMaterialInventoryAddingNewWithdrawalTransaction: RawMaterialInventoryAddingNewWithdrawalTransaction;
    let rawMaterialInventoryAddingNewLossSpillTransaction: RawMaterialInventoryAddingNewLossSpillTransaction;
    let rawMaterialInventoryAddingNewVendorReceiptTransaction: RawMaterialInventoryAddingNewVendorReceiptTransaction;
    let rawMaterialInventoryAddingNewDefaultTransaction: RawMaterialInventoryAddingNewDefaultTransaction;
    let rawMaterialInventoryAddingNewWasteDisposalTransaction: RawMaterialInventoryAddingNewWasteDisposalTransaction;
    let productResearchEditSearchCriteriaPage: ProductResearchEditSearchCriteriaPage;
    let ownersCanEditBasePricesPage: OwnersCanEditBasePricesPage;
    let regionFieldOnCustomerCardPage: RegionFieldOnCustomerCardPage;
    let validateInitialCustomerConnectDashboardCustomerData: ValidateInitialCustomerConnectDashboardCustomerData;
    let registerSanitizerProductsInDeliveryStateEPAEditing: RegisterSanitizerProductsInDeliveryStateEPAEditing;
    let validateDeliverySchedulingSanitizerProductsPageDifferentState: ValidateDeliverySchedulingSanitizerProductsPageDifferentState;
    let customerConnectFilterDataByProductInfoPage: CustomerConnectFilterDataByProductInfoPage;
    let labReportSanitizerProductDeliveriesbyStatePage: LabReportSanitizerProductDeliveriesbyStatePage;
    let addDeliveriesTabToViewProductDeliveryHistory: AddDeliveriesTabToViewProductDeliveryHistory;
    let validateCSRReportInventoryAuditOptionalchecksSections: ValidateCSRReportInventoryAuditOptionalchecksSections;


//Test Scripts calling from here 

test('PO Number Column Chooser Delivery History', async({page}) => {

    loginPage = new LoginPage(page);
    pONumberColumnChooserDHPage = new PONumberColumnChooserDHPage(page);

    await loginPage.performLoginPage();
    await pONumberColumnChooserDHPage.performPONumberColumnChooser();

});


test('Verify Raw Materials Hard Errors', async({page}) => {

    loginPage = new LoginPage(page);
    verifyRawMaterialsHardErrors = new VerifyRawMaterialsHardErrors(page);

    await loginPage.performLoginPage();
    await verifyRawMaterialsHardErrors.verifyRMHardErrors();

});


test('Making Manual Adjustment to SMSP Raw Materials Page', async({page}) => {

    loginPage = new LoginPage(page);
    makingManualAdjustmentToSMSPRawMaterialsPage = new MakingManualAdjustmentToSMSPRawMaterialsPage(page);

    await loginPage.performLoginPage();
    await makingManualAdjustmentToSMSPRawMaterialsPage.performManualAdjustmentToSMSP();

});


test('SMSP Product Inventory Hard Errors Page', async({page}) => {

    loginPage = new LoginPage(page);
    sMSPProductInventoryByLOTNumberHEPage = new SMSPProductInventoryByLOTNumberHEPage(page);

    await loginPage.performLoginPage();
    await sMSPProductInventoryByLOTNumberHEPage.performSMSPProductInventoryHardErrors();

});


test('Sanitizer Inventory Adding New Adjustment Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    sanitizerInventoryAddingNewAdjustmentTransaction = new SanitizerInventoryAddingNewAdjustmentTransaction(page);

    await loginPage.performLoginPage();
    await sanitizerInventoryAddingNewAdjustmentTransaction.performAddingNewAdjustmentTransaction();

});


test('Sanitizer Inventory Adding New VendorReceipt Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    sanitizerInventoryAddingNewVendorReceiptTransaction = new SanitizerInventoryAddingNewVendorReceiptTransaction(page);

    await loginPage.performLoginPage();
    await sanitizerInventoryAddingNewVendorReceiptTransaction.performAddingNewVendorReceiptTransaction();

});


test('Sanitizer Inventory Adding New Default Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    sanitizerInventoryAddingNewDefaultTransaction = new SanitizerInventoryAddingNewDefaultTransaction(page);

    await loginPage.performLoginPage();
    await sanitizerInventoryAddingNewDefaultTransaction.performAddingNewDefaultTransaction();

});


test('Raw Material Inventory Adding New Adjustment Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    rawMaterialInventoryAddingNewAdjustmentTransaction = new RawMaterialInventoryAddingNewAdjustmentTransaction(page);

    await loginPage.performLoginPage();
    await rawMaterialInventoryAddingNewAdjustmentTransaction.performAddingNewAdjustmentTransaction();

});


test('Raw Material Inventory Adding New Withdrawal Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    rawMaterialInventoryAddingNewWithdrawalTransaction = new RawMaterialInventoryAddingNewWithdrawalTransaction(page);

    await loginPage.performLoginPage();
    await rawMaterialInventoryAddingNewWithdrawalTransaction.performAddingNewWithdrawalTransaction();

});


test('Raw Material Inventory Adding New LossSpill Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    rawMaterialInventoryAddingNewLossSpillTransaction = new RawMaterialInventoryAddingNewLossSpillTransaction(page);

    await loginPage.performLoginPage();
    await rawMaterialInventoryAddingNewLossSpillTransaction.performAddingNewLossSpillTransaction();

});


test('Raw Material Inventory Adding New VendorReceipt Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    rawMaterialInventoryAddingNewVendorReceiptTransaction = new RawMaterialInventoryAddingNewVendorReceiptTransaction(page);

    await loginPage.performLoginPage();
    await rawMaterialInventoryAddingNewVendorReceiptTransaction.performAddingNewVendorReceiptTransaction();

});


test('Raw Material Inventory Adding New Default Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    rawMaterialInventoryAddingNewDefaultTransaction = new RawMaterialInventoryAddingNewDefaultTransaction(page);

    await loginPage.performLoginPage();
    await rawMaterialInventoryAddingNewDefaultTransaction.performAddingNewDefaultTransaction();

});


test('Raw Material Inventory Adding New WasteDisposal Transaction', async({page}) => {

    loginPage = new LoginPage(page);
    rawMaterialInventoryAddingNewWasteDisposalTransaction = new RawMaterialInventoryAddingNewWasteDisposalTransaction(page);

    await loginPage.performLoginPage();
    await rawMaterialInventoryAddingNewWasteDisposalTransaction.performAddingNewWasteDisposalTransaction();

});


test('Prodcut Research Edit Search Criteria Page', async({page}) => {

    loginPage = new LoginPage(page);
    productResearchEditSearchCriteriaPage = new ProductResearchEditSearchCriteriaPage(page);

    await loginPage.performLoginPage();
    await productResearchEditSearchCriteriaPage.performProductResearchEditSearchCriteria();

});


test('Owners Can Edit Base Prices Page', async({page}) => {

    loginPage = new LoginPage(page);
    ownersCanEditBasePricesPage = new OwnersCanEditBasePricesPage(page);

    await loginPage.performLoginPage();
    await ownersCanEditBasePricesPage.performOwnersCanEditBasePrices();

});


test('Region Field Customer Card Page', async({page}) => {

    loginPage = new LoginPage(page);
    regionFieldOnCustomerCardPage = new RegionFieldOnCustomerCardPage(page);

    await loginPage.performLoginPage();
    await regionFieldOnCustomerCardPage.performRegionFieldOnCustomerCard();

});


test('Validate Initial Customer Connect Dashboard Customer Data', async({page}) => {

    loginPage = new LoginPage(page);
    validateInitialCustomerConnectDashboardCustomerData = new ValidateInitialCustomerConnectDashboardCustomerData(page);

    await loginPage.performLoginPage();
    await validateInitialCustomerConnectDashboardCustomerData.performValidationCustomerData();

});


test('Register Sanitizer Products In Delivery State EPA Number Editing', async({page}) => {

    loginPage = new LoginPage(page);
    registerSanitizerProductsInDeliveryStateEPAEditing = new RegisterSanitizerProductsInDeliveryStateEPAEditing(page);

    await loginPage.performLoginPage();
    await registerSanitizerProductsInDeliveryStateEPAEditing.performRegisterSanitizerProducts();

});


test('Delivery Scheduling Sanitizer Products Different State', async({page}) => {

    loginPage = new LoginPage(page);
    validateDeliverySchedulingSanitizerProductsPageDifferentState = new ValidateDeliverySchedulingSanitizerProductsPageDifferentState(page);

    await loginPage.performLoginPage();
    await validateDeliverySchedulingSanitizerProductsPageDifferentState.performDeliverySchedulingSanitizerProducts();

});


test('Customer Connect Filter Data By Product Info Page', async({page}) => {

    loginPage = new LoginPage(page);
    customerConnectFilterDataByProductInfoPage = new CustomerConnectFilterDataByProductInfoPage(page);

    await loginPage.performLoginPage();
    await customerConnectFilterDataByProductInfoPage.performCustomerConnectFilter();

});


test('Lab Report Sanitizer Product Deliveries by State Page', async({page}) => {

    loginPage = new LoginPage(page);
    labReportSanitizerProductDeliveriesbyStatePage = new LabReportSanitizerProductDeliveriesbyStatePage(page);

    await loginPage.performLoginPage();
    await labReportSanitizerProductDeliveriesbyStatePage.performLabReportSanitizerProductDeliveriesbyState();

});


test('Add Deliveries Tab to View Product Delivery History Page', async({page}) => {

    loginPage = new LoginPage(page);
    addDeliveriesTabToViewProductDeliveryHistory = new AddDeliveriesTabToViewProductDeliveryHistory(page);
    await loginPage.performLoginPage();
    await addDeliveriesTabToViewProductDeliveryHistory.addDeliveriesTabToViewProductDeliveryHistory();
});


test('Create CSR Report Inventory Audit Optional Checks Sections', async({page}) => {

    loginPage = new LoginPage(page);
    validateCSRReportInventoryAuditOptionalchecksSections = new ValidateCSRReportInventoryAuditOptionalchecksSections(page);
    await loginPage.performLoginPage();
    await validateCSRReportInventoryAuditOptionalchecksSections.validateCSRReportInventoryAuditOptionalchecksSections();
});



});