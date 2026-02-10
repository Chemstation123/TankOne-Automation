import { test, expect } from "allure-playwright";
import { LoginPage } from '../PageObjects/LoginPage';
import { NewCustomerInfoPage } from '../PageObjects/ValidateCustomerBillingInfo';
import { AddQuotesPage } from "../PageObjects/AddingNewQuotePage";
import { AddNewTankPage } from '../PageObjects/AddingNewTankPage';
import { CustomerCommentsPage } from '../PageObjects/CreateCustomerCommentsPage';
import { ScheduleTankForDeliveryPage } from '../PageObjects/ValidateScheduleTankForDeliveryPage';
import { LocalCustomerPostingPage } from '../PageObjects/LocalCustomerPostingPage';




test.describe('Customer Page Tests', () => {
    let loginPage: LoginPage;
    let newCustomerInfoPage: NewCustomerInfoPage;
    let addQuotesPage: AddQuotesPage;
    let addNewTankPage: AddNewTankPage;
    let customerCommentsPage: CustomerCommentsPage;
    let sheduleTankForDeliveryPage: ScheduleTankForDeliveryPage;
    let localCustomerPostingPage: LocalCustomerPostingPage;
 

   
    
    test('Schedule and Post Delivery for Local Customer', async ({ page }) => {
        loginPage = new LoginPage(page);
        newCustomerInfoPage = new NewCustomerInfoPage(page);
        addQuotesPage = new AddQuotesPage(page);
        addNewTankPage = new AddNewTankPage(page);
        customerCommentsPage = new CustomerCommentsPage(page);
        sheduleTankForDeliveryPage = new ScheduleTankForDeliveryPage(page);
        localCustomerPostingPage = new LocalCustomerPostingPage(page);
        
        

       
    
        await loginPage.performLoginPage();
        await newCustomerInfoPage.performCustomerInfo();
        await addQuotesPage.performAddQuote();
        await addNewTankPage.performAddTank();
        await customerCommentsPage.performCustComments();
        await sheduleTankForDeliveryPage.performScheduleTankForDelivery();
        await localCustomerPostingPage.performPostingPage();
      
    
        
    });

    

});
