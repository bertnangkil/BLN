import { expect, Page } from "@playwright/test";
import Global from "./global.po";

export default class Candidates {
    page: Page;
    global: Global
    
    constructor(page: Page) {
      this.page = page;
      global = global;
    }
    //Locators 
    //Create Candidate
  
    //Step 1 Fields
    //position values
    selectadvancePosition(){
      return this.page.getByRole('option', { name: 'Advanced encompassing benchmark Driver' }).click();
    }
    selectcrossplatformPosition(){
      return this.page.getByRole('option', { name: 'Cross-platform clear-thinking methodology Driver' }).click();
    }
    firstNameTxtBox(){
      return this.page.getByPlaceholder('First Name');
    }
    middleNameTxtBox(){
      return this.page.getByPlaceholder('Middle Name');
    }
    lastNameTxtBox(){
      return this.page.getByPlaceholder('Last Name');
    }
    phoneTxtBox(){
      return this.page.getByLabel('Phone Number *');
    }
    emailTxtBox(){
      return this.page.getByPlaceholder('Email');
    }
    addressTxtBox(){
      return this.page.getByLabel('Address *');
    }
    cityTxtBox(){
      return this.page.getByLabel('City *');
    }
    stateTxtBox(){
      return this.page.getByLabel('State *');
    }
    zipTxtBox(){
      return this.page.getByLabel('Zip Code *');
    }
    addAddressBtn(){
      return this.page.getByRole('button', { name: 'Add Address' });
    }
    
    saveAndSkipBtn(){
      return this.page.getByRole('button', { name: 'Save and Skip' });
    }
    skipBtn(){
      return this.page.getByRole('button', { name: 'Skip', exact: true });
    }
    cancelBtn(){
      return this.page.getByRole('button', { name: 'Cancel' });
    }
    pictureURLTxtBox(){
      return this.page.getByPlaceholder('Avatar URL');
    }

    //Step 2 Fields
    linkedIn(){
      return this.page.getByRole('option', { name: 'Linked in' });
    }
    urlInputTxtBox(){
      return this.page.getByPlaceholder('The absolute url of the link (include the domain.com)');
    }
    addLinkBtn(){
      return this.page.getByRole('button', { name: 'Add Link' });
    }

    //Step 3 Fields
    licenseNumberTxtBox(){
      return this.page.getByPlaceholder('The number or ID of the license');
    }
    licenseName(){
      return this.page.getByPlaceholder('The name of the kind of license, i.e. \'Drivers License\'');
    }
    issuedByTxtBox(){
      return this.page.getByPlaceholder('Who issued the license, i.e. \'New York\'');
    }
    licenseTypeOption(){
      return this.page.getByRole('option', { name: 'License' });
    }
    certificationTypeOption(){
      return this.page.getByRole('option', { name: 'Certification' });
    }
    addLicenseBtn(){
      return this.page.getByRole('button', { name: 'Add License' });
    }

    //Step 4 Fields
    institutionNameTxtBox(){
      return this.page.getByPlaceholder('The name of the education instituion');
    }
    schoolLocationTxtBox(){
      return this.page.getByPlaceholder('The location of the education instituion');
    }    
    degreeTxtBox(){
      return this.page.getByPlaceholder('The degree, certificate, or license acquired');
    }
    addSchoolBtn(){
      return this.page.getByRole('button', { name: 'Add School' });
    }

    //Step 5 Fields
    jobTitleTxtBox(){
      return this.page.getByPlaceholder('The job title');
    }
    companyNameTxtBox(){
      return this.page.getByPlaceholder('The company name');
    }
    responsibilitiesTxtBox(){
      return this.page.getByPlaceholder('Description of the work responsibilites and accomplishments');
    }
    companyLocationTxtBox(){
      return this.page.getByPlaceholder('The location of the company');
    }
    addWorkplaceBtn(){
      return this.page.getByRole('button', { name: 'Add Workplace' });
    }
   
    //Board view
    candidatesPage(){
      return this.page.getByRole('button', { name: 'Candidates' });
    }
    candidatesSearchTxtBox(){
      return this.page.locator('#\:r0\:');
    }
    allCandidatesBtn(){
      return this.page.getByRole('button', { name: 'All Candidates' });
    }
    fireCandidatesBtn(){
      return this.page.getByRole('button', { name: 'Fire Candidates' });
    }
    editBoardBtn(){
      return this.page.getByRole('button', { name: 'Edit Board' });
    }
    gridViewIcon(){
      return this.page.locator("[data-testid='WindowIcon']");
    }
    boardViewIcon(){
      return this.page.locator("[data-testid='ViewColumnIcon']");
    }
    listViewIcon(){
      return this.page.locator("[data-testid='ListIcon']");
    }
    filterIcon(){
      return this.page.locator("[data-testid='FilterListIcon']");
    }
    
    
    //Grid view
    firstCandidateMessageBtn(){
      return this.page.locator("(//button[text()='Message'])[1]");
    }
    firstcandidateSeeProfileBtn(){
      return this.page.locator('.MuiTypography-root > .MuiButtonBase-root').first();
    }
    firstCandidateRemoveBtn(){
      return this.page.locator("(//button[text()='Remove'])[1]");
    }
    continueRemoveBtn(){
      return this.page.getByRole('button', { name: 'Continue' });
    }
    
    //List view
    firstCandidate(){
      return this.page.locator('tr:nth-child(1) td:nth-child(2) a');
    }
    candidatePositionSearchTxtBox(){
      return this.page.locator('#tags-outlined');
    }
    candidatePositionDropdownBtn(){
      return this.page.getByLabel('Open', { exact: true });
    }
    candidatePositionClearSearchBtn(){
      return this.page.getByLabel('Clear');
    }
    
    // Candidate Detail view
    
    
                
    //Pagination
    assertRowPerPageOptions(){
      return this.page.locator("getByRole('option')");
    }
    tenPerPageOption(){
      return this.page.getByRole('option', { name: '10' });
    }
    twentyFivePerPageOption(){
      return this.page.getByRole('option', { name: '25' });
    }
    fiftyPerPageOption(){
      return this.page.getByRole('option', { name: '50' });
    }
    hundredPerPageOption(){
      return this.page.getByRole('option', { name: '100' });
    }
    listOfCandidates(){
      return this.page.locator('tbody tr td div a');
    }
    nextPageBtn(){
      return this.page.getByLabel('Go to next page');
    }
    lastPageBtn(){
      return this.page.getByLabel('Go to last page');
    }
    previousPageBtn(){
      return this.page.getByLabel('Go to previous page');
    }

    //Actions

    //Assert
    async assertCandidatesPageURL(){
      await expect(this.page).toHaveURL(/.*candidates/);
    }
    async assertCreateCandidateSuccessMsg(locator) {
      await expect (locator).toHaveText("successCandidate’s profile has been created");
    }
    async assertRemoveCandidateSuccessMsg(locator){
      await expect (locator).toHaveText("infoCandidate successfully deleted.");
    } 
    async assertAssignUserSuccessMsg(locator){
      await expect (locator).toHaveText("infoYour changes have been saved.");
    } 
}