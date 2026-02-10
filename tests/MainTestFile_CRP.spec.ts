import { test, expect } from "allure-playwright";

import { LoginPage } from "../PageObjects/LoginPage";
import { ToggoleCheckBoxContractedProducts } from "../PageObjects_CRP/ToggleCheckBoxContractedProducts";


test.describe('CRP Environmnet Tests', () => {

    let loginPage: LoginPage;
    let toggleCheckBoxContractedProducts: ToggoleCheckBoxContractedProducts;



    test('Toggle Check Box Contracted Products', async({ page }) => {
        loginPage = new LoginPage(page);
        toggleCheckBoxContractedProducts = new ToggoleCheckBoxContractedProducts(page);
        
        await loginPage.performLoginPage();
        await toggleCheckBoxContractedProducts.performToggleCheckboxContractedProducts();
    })
})