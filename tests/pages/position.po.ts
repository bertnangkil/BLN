import { Page } from '@playwright/test';
  
  export default class Position {
    page: Page;
    
    constructor(page: Page) {
      this.page = page;
     
    }
  
 //Locators
    viewPositionBtn(){
    return this.page.locator('.MuiTypography-root > .MuiButtonBase-root').first();
    }
    
 //Add Position Form
    positionMenu(){
      return this.page.getByRole('button', { name: 'Positions' });
    }
    positionNameTxtBox() {
      return this.page.locator("input[Placeholder='Name']");
    }
    educationTxtBox() {
      return this.page.getByLabel('Required Education');
    }
    licensingTxtBox() {
      return this.page.getByText('Required Education');
    }
    minSalaryTxtBox() {
      return this.page.getByPlaceholder('Min Salary');
    }
    mnaxSalaryTxtBox() {
      return this.page.getByPlaceholder('Max Salary');
    }
    descriptionTxtBox(){
      return this.page.getByPlaceholder('Description');
    }
    
    

    //Actions
    async clickLogin(){
      await this.page.getByRole('button', { name: 'Continue' }).click();
    }
    
}
function expect(arg0: any) {
  throw new Error('Function not implemented.');
}

