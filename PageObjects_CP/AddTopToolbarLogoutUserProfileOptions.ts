import {Page, expect} from "@playwright/test";
import { addTopToolbarLogoutUserProfileOptionsData } from "../TestData_CP/AddTopToolbarLogoutUserProfileOptionsData";

export class AddTopToolbarLogoutUserProfileOptions{
    public page : Page;
    constructor(page : Page){
        this.page = page;
    }
    async AddTopToolbarLogoutUserProfileOptions()
    {
       
        await this.page.getByRole('button', { name: addTopToolbarLogoutUserProfileOptionsData.Name }).click();
        await this.page.getByRole('link', { name: 'Profile' }).innerText();
        console.log("Profile option is present under User Profile dropdown");
        await this.page.getByRole('link', { name: 'Logout' }).innerText();
        console.log("Logout option is present under User Profile dropdown");
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: addTopToolbarLogoutUserProfileOptionsData.Name }).click();
        await this.page.getByRole('button', { name: addTopToolbarLogoutUserProfileOptionsData.Name }).click();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Profile' }).click();
        const page1 = await page1Promise;
        await page1.goto('https://hq-keycloakaz02.azurewebsites.net/realms/CustomerPortal/account?referrer=appClient&referrer_uri=https%3A%2F%2Fmychemstationportal-staging-g9dpaedsf6cterct.northcentralus-01.azurewebsites.net%2Fdashboard');

        const lastNameLocator = page1.getByTestId('lastName');
        const currentValue = await lastNameLocator.inputValue();
        const newValue = currentValue === 'A' ? 'Aragay' : 'A';
        await lastNameLocator.fill(newValue);
        await page1.getByTestId('save').click();        
        await page1.getByText('Your account has been updated.').click();
        console.log("User is able to edit the profile details successfully");
        await page1.getByTestId('referrer-link').click();
        await page1.getByRole('button', { name: addTopToolbarLogoutUserProfileOptionsData.Name }).click();
        await page1.getByRole('link', { name: 'Logout' }).click();
        await page1.getByRole('button', { name: 'Yes' }).click();
        
    }
}