import { Locator, Page, expect} from "@playwright/test";
import { link } from "fs";
import { request } from "http";

export default class Global {
    page: Page;
    
    constructor(page: Page) {
      this.page = page;
     
    }
    //Global Locators
    async assertCandidatesPageURL(){
      await expect(this.page).toHaveURL(/.*candidates/);
    }
    async assertCalendarPageURL(){
      await expect(this.page).toHaveURL(/.*calendar/);
    }
    async assertPositionsPageURL(){
      await expect(this.page).toHaveURL(/.*positions/);
    }
    async assertUsersPageURL(){
      await expect(this.page).toHaveURL(/.*users/);
    }
       
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
    async assertNoSearchResultFound(field: Locator){
      await expect(field).toHaveText('No results found...');
    }
      
    async consoleerror(){
      this.page.on('console', msg => {
        if (msg.text() === 'error')
          console.log(`Error text: "${msg.text()}"`);
      });
    }
    
     async checkURLs(){
       this.page.on('response', request => {
        expect (request.status()).toEqual(200);
      });
    }

}