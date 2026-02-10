import { Page, expect } from "@playwright/test";


function getRandomState(): string {
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
  ];

  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
}
console.log(getRandomState());

export class RegionFieldOnCustomerCardPage{
    public page : Page;

    constructor(page: Page){
        this.page = page;
    }

async performRegionFieldOnCustomerCard()
{
  const randomState = getRandomState(); // Call once

  await this.page.getByText('Settings').click();
  await this.page.getByText('Lookup Tables').click();
  await this.page.getByText('Region MaintenanceRegion').click();
  await this.page.getByLabel('Data grid with 0 rows and 1').getByLabel('Add a row').click();
  await this.page.getByLabel('Region Name', { exact: true }).fill(randomState);
  await this.page.getByLabel('Save').click();
  await this.page.getByRole('gridcell', { name: randomState }).click();
  await this.page.getByText('Customers').click();
  await this.page.getByLabel('New Customer').click();
  await this.page.waitForTimeout(1000);
  await this.page.getByLabel('Region:').click();
  await this.page.getByText(randomState).click();
}

}