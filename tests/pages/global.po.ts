import { Locator, Page, } from "@playwright/test";

export default class Global {
    page: Page;
    
    constructor(page: Page) {
      this.page = page;
     
    }
    //Global Locators
       
      addBtn(){
        return this.page.getByLabel('add');
      }
      saveBtn(){
        return this.page.getByRole('button', { name: 'Save', exact: true });
      }
      deleteTrashIcon(){
        return this.page.locator("[data-testid='DeleteIcon']");
      }
      pencilEditIcon(){
        return this.page.locator("[data-testid='EditIcon']");
      }
      alertmsg(){
        return this.page.locator('div.MuiAlert-message.css-1xsto0d');
      }
      assignUserIcon(){
        return this.page.locator("[data-testid='AddCircleRoundedIcon']");
      }
      searchAssignedUser(){
        return this.page.getByPlaceholder('Search a user');
      }
      selectUserAlbert(){
        return this.page.locator('li').filter({ hasText: 'Albert QA Testing' }).getByLabel('delete');
      }

    //ACTIONS

    async openDropdown(){
      await this.page.getByLabel('Open', { exact: true }).click();
    }
    async goToMenu(menu: Locator){
      await (menu).click();
    }
    async clickBtn(button: Locator){
      await (button).click();
    }
    async fillTxtBox(field: Locator, value: string){
      await (field).fill(value);
    } 
      
}