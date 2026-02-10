import { test, expect } from "allure-playwright";
import { LoginPage } from "../PageObjects/LoginPage";
import { NewStrategicCustomerInfoPage } from "../PageObjects/CreatingNewStrategicCustomerPage";
import { StrategicCustomerQuoteInfoPage } from "../PageObjects/CreateNewQuoteStrategicCustomerPage";
import { AddStrategicNewTankPage } from "../PageObjects/AddNewStartegicTankPage";
import { StrategicCustomerCommentsPage } from "../PageObjects/CreateStrategicCustomerCommentsPage";
import { ScheduleTankForDeliveryStrategicCustPage } from "../PageObjects/ValidateScheduleTankForDeliveryStrategicCustPage";
import { StrategicCustomerPostingPage } from '../PageObjects/StrategicCustomerPostingPage';




test.describe('Customer Page Tests', () => {
    let loginPage: LoginPage;
    let newStartegicCustomerInfoPage: NewStrategicCustomerInfoPage;
    let strategicCustomerQuoteInfoPage: StrategicCustomerQuoteInfoPage;
    let addStrategicNewTankPage: AddStrategicNewTankPage;
    let strategicCustomerCommenetsPage: StrategicCustomerCommentsPage;
    let scheduleTankForDeliveryStrategicCustPage: ScheduleTankForDeliveryStrategicCustPage;
    let strategicCustomerPostingPage: StrategicCustomerPostingPage
    
    



     
    test('Schedule and Post Delivery for Strategic Customer', async ({ page }) => {
        loginPage = new LoginPage(page);
        newStartegicCustomerInfoPage = new NewStrategicCustomerInfoPage(page);
        strategicCustomerQuoteInfoPage = new StrategicCustomerQuoteInfoPage(page);
        addStrategicNewTankPage = new AddStrategicNewTankPage(page);
        strategicCustomerCommenetsPage = new StrategicCustomerCommentsPage(page);
        scheduleTankForDeliveryStrategicCustPage = new ScheduleTankForDeliveryStrategicCustPage(page);
        strategicCustomerPostingPage = new StrategicCustomerPostingPage(page);



        await loginPage.performLoginPage();
        await newStartegicCustomerInfoPage.performStrategicCustomerCreation();
        await strategicCustomerQuoteInfoPage.performAddStrategicQuote();
        await addStrategicNewTankPage.performAddTank();
        await strategicCustomerCommenetsPage.performStrategicCustComments();
        await scheduleTankForDeliveryStrategicCustPage.performScheduleTankForDelivery();
        await strategicCustomerPostingPage.performStartegicCustPostingPage();
        


    });

});
