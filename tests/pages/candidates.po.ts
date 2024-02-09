import { expect, Locator, Page } from "@playwright/test";
import Global from "./global.po";
import exp from "constants";
import { candidate } from "../../config/default";
import { waitForDebugger } from "inspector";

export default class Candidates {
    page: Page;
    global: Global
    
    constructor(page: Page) {
      this.page = page;
      global = global;
    }
    //Locators 
    candidatesMenu(){
      return this.page.getByRole('button', { name: 'Candidates' });
    }
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
      return this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')])[2]");
    }
    addLinkBtn(){
      return this.page.locator("//button[text()='Add Link']");
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
    secondlicenseNumberTxtBox(){
      return this.page.getByPlaceholder('The number or ID of the license').nth(1);
    }
    secondlicenseName(){
      return this.page.getByPlaceholder('The name of the kind of license, i.e. \'Drivers License\'').nth(1);
    }
    secondissuedByTxtBox(){
      return this.page.getByPlaceholder('Who issued the license, i.e. \'New York\'').nth(1);
    }
    licenseTypeOption(){
      return this.page.getByRole('option', { name: 'License' });
    }
    certificationTypeOption(){
      return this.page.getByRole('option', { name: 'Certification' });
    }
    addLicenseBtn(){
      return this.page.locator("//button[text()='Add License']");
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
    boardViewIcon(){
      return this.page.locator("[data-testid='ViewColumnIcon']");
    }
    filterIcon(){
      return this.page.locator("[data-testid='FilterListIcon']");
    }
    searchResults(){
      return this. page.locator("//p[text()='No results found...']");
    }
    boardSearchBox(){
      return this.page.locator("(//input[@placeholder='Search'])[1]");
    }
    boardColumnHeaders(){
      return this.page.locator("(//p[contains(@class,'MuiTypography-root MuiTypography-body1')])");
    }
    boardCandidateSearchList(){
      return this.page.locator("(//span[@class='css-1jxnmfo e58dww40'])");
    }
    
    
    //Grid view
    gridViewIcon(){
      return this.page.locator("[data-testid='WindowIcon']");
    }
    firstCandidateMessageBtn(){
      return this.page.locator("(//button[text()='Message'])[1]");
    }
    firstcandidateSeeProfileBtn(){
      return this.page.locator('.MuiTypography-root > .MuiButtonBase-root').first();
    }
    firstCandidateRemoveBtn(){
      return this.page.locator("(//button[text()='Remove'])[1]");
    }
    
    searchBox(){
      return this.page.locator("input[placeholder='Search for candidates...']");
    }
    gridCandidateSearchList(){
      return this.page.locator("//div[contains(@class,'MuiTypography-root MuiTypography-h5')]");
    }
    
    
    //List view
    listViewIcon(){
      return this.page.locator("[data-testid='ListIcon']");
    }
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
    }listCandidateSearchList(){
      return this.page.locator("//a[contains(@class,'MuiTypography-root MuiTypography-inherit')]");
    }
       
    // Candidate Detail view
    // addlicenselink(){
    //   locator('.MuiGrid-grid-xl-3.css-1noz1rq button:nth-child(3)')
    // }
    editLicenseLink(){
      return this.page.locator("//button[text()='Edit Licenses']");
    }
    editProfileLink(){
      return this.page.locator("//button[text()='Edit Links']");
    }
    editWorkLink(){
      return this.page.locator("//button[text()='Edit Work History']");
    }
    editEducationLink(){
      return this.page.locator("//button[text()='Edit Education History']");
    }
    
                
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
    async assertCreateCandidateSuccessMsg(locator: any) {
      await expect (locator).toHaveText("successCandidate’s profile has been created");
    }
    async assertUpdateCandidateSuccessMsg(locator: any) {
      await expect (locator).toHaveText("successThe candidate’s profile has been updated");
    }
    async assertRemoveCandidateSuccessMsg(locator:any) {
      await expect (locator).toHaveText("infoCandidate successfully deleted.");
    } 
    async assertAssignUserSuccessMsg(field: Locator){
      await expect (field).toHaveText("infoYour changes have been saved.");
    } 
    async assertCandidateSearchResult(candidate: string, field: Locator){
      await expect (field).toContainText(candidate);
    } 
}