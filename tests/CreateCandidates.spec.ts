import { test } from "./fixtures/rootpages";
import _default, { candidate } from "../config/default";
import { expect } from "@playwright/test";

   test('should be able to CREATE a Candidate completing all 5 steps', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    //step 1
    await global.openDropdown();
    await candidates.selectadvancePosition();
    await global.openDropdown();
    await candidates.selectcrossplatformPosition();
    await global.fillTxtBox(candidates.firstNameTxtBox(), candidate.firstName); 
    await global.fillTxtBox(candidates.middleNameTxtBox(), candidate.middleName); 
    await global.fillTxtBox(candidates.lastNameTxtBox(), candidate.lastName); 
    await global.fillTxtBox(candidates.phoneTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.emailTxtBox(), candidate.email);
    await global.fillTxtBox(candidates.addressTxtBox(), candidate.address);
    await global.fillTxtBox(candidates.cityTxtBox(), candidate.city);
    await global.fillTxtBox(candidates.stateTxtBox(), candidate.state);
    await global.fillTxtBox(candidates.zipTxtBox(), candidate.zipcode);
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    // await expect (candidates.addLinkBtn()).toBeEnabled();
    //step 2
    await global.fillTxtBox(candidates.urlInputTxtBox(), candidate.url);
    // await expect (candidates.skipBtn()).toBeEnabled();
    // await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    // await expect (candidates.addLicenseBtn()).toBeEnabled();
    //step 3
    await global.fillTxtBox(candidates.licenseNumberTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.licenseName(), candidate.firstName);
    await global.fillTxtBox(candidates.issuedByTxtBox(), candidate.lastName);
    // await expect (candidates.skipBtn()).toBeEnabled();
    // await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    // await expect (candidates.addSchoolBtn()).toBeEnabled();
    //step 4
    await global.fillTxtBox(candidates.institutionNameTxtBox(),candidate.middleName);
    await global.fillTxtBox(candidates.degreeTxtBox(), candidate.firstName);
    // await expect (candidates.skipBtn()).toBeEnabled();
    // await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    // await expect (candidates.addWorkplaceBtn()).toBeEnabled();
    //step 5
    await global.fillTxtBox(candidates.jobTitleTxtBox(), candidate.firstName);
    await global.fillTxtBox(candidates.companyNameTxtBox(), candidate.middleName);
    // await expect (candidates.skipBtn()).toBeEnabled();
    // await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    await candidates.assertCreateCandidateSuccessMsg(global.alertmsg());
  });
  test('should be able to CREATE a Candidate completing ONLY the 1st step', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    //step 1
    await global.openDropdown();
    await candidates.selectadvancePosition();
    await global.openDropdown();
    await candidates.selectcrossplatformPosition();
    await global.fillTxtBox(candidates.firstNameTxtBox(), candidate.firstName); 
    await global.fillTxtBox(candidates.middleNameTxtBox(), candidate.middleName); 
    await global.fillTxtBox(candidates.lastNameTxtBox(), candidate.lastName); 
    await global.fillTxtBox(candidates.phoneTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.emailTxtBox(), candidate.email);
    await global.fillTxtBox(candidates.addressTxtBox(), candidate.address);
    await global.fillTxtBox(candidates.cityTxtBox(), candidate.city);
    await global.fillTxtBox(candidates.stateTxtBox(), candidate.state);
    await global.fillTxtBox(candidates.zipTxtBox(), candidate.zipcode);
    await expect (global.saveBtn()).toBeEnabled();
    await global.clickBtn(candidates.saveAndSkipBtn());
    await candidates.assertCreateCandidateSuccessMsg(global.alertmsg());
  });
  test('should be able to CREATE a Candidate completing steps 1 and 2', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    //step 1
    await global.openDropdown();
    await candidates.selectadvancePosition();
    await global.openDropdown();
    await candidates.selectcrossplatformPosition();
    await global.fillTxtBox(candidates.firstNameTxtBox(), candidate.firstName); 
    await global.fillTxtBox(candidates.middleNameTxtBox(), candidate.middleName); 
    await global.fillTxtBox(candidates.lastNameTxtBox(), candidate.lastName); 
    await global.fillTxtBox(candidates.phoneTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.emailTxtBox(), candidate.email);
    await global.fillTxtBox(candidates.addressTxtBox(), candidate.address);
    await global.fillTxtBox(candidates.cityTxtBox(), candidate.city);
    await global.fillTxtBox(candidates.stateTxtBox(), candidate.state);
    await global.fillTxtBox(candidates.zipTxtBox(), candidate.zipcode);
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    //step 2
    await global.fillTxtBox(candidates.urlInputTxtBox(), candidate.url);
    await expect (candidates.skipBtn()).toBeEnabled();
    await expect (global.saveBtn()).toBeEnabled();
    await global.clickBtn(candidates.saveAndSkipBtn());
    await candidates.assertCreateCandidateSuccessMsg(global.alertmsg());
  
  });  
 
  test('should be able to CREATE a Candidate completing steps 1-3', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    //step 1
    await global.openDropdown();
    await candidates.selectadvancePosition();
    await global.openDropdown();
    await candidates.selectcrossplatformPosition();
    await global.fillTxtBox(candidates.firstNameTxtBox(), candidate.firstName); 
    await global.fillTxtBox(candidates.middleNameTxtBox(), candidate.middleName); 
    await global.fillTxtBox(candidates.lastNameTxtBox(), candidate.lastName); 
    await global.fillTxtBox(candidates.phoneTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.emailTxtBox(), candidate.email);
    await global.fillTxtBox(candidates.addressTxtBox(), candidate.address);
    await global.fillTxtBox(candidates.cityTxtBox(), candidate.city);
    await global.fillTxtBox(candidates.stateTxtBox(), candidate.state);
    await global.fillTxtBox(candidates.zipTxtBox(), candidate.zipcode);
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    //step 2
    await global.fillTxtBox(candidates.urlInputTxtBox(), candidate.url);
    await expect (candidates.skipBtn()).toBeEnabled();
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    await expect (candidates.addLicenseBtn()).toBeEnabled();
    //step 3
    await global.fillTxtBox(candidates.licenseNumberTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.licenseName(), candidate.firstName);
    await global.fillTxtBox(candidates.issuedByTxtBox(), candidate.lastName);
    await expect (candidates.skipBtn()).toBeEnabled();
    await expect (global.saveBtn()).toBeEnabled();
    await global.clickBtn(candidates.saveAndSkipBtn());
    await candidates.assertCreateCandidateSuccessMsg(global.alertmsg());
  });

  test('should be able to CREATE a Candidate completing stapes 1-4', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    //step 1
    await global.openDropdown();
    await candidates.selectadvancePosition();
    await global.openDropdown();
    await candidates.selectcrossplatformPosition();
    await global.fillTxtBox(candidates.firstNameTxtBox(), candidate.firstName); 
    await global.fillTxtBox(candidates.middleNameTxtBox(), candidate.middleName); 
    await global.fillTxtBox(candidates.lastNameTxtBox(), candidate.lastName); 
    await global.fillTxtBox(candidates.phoneTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.emailTxtBox(), candidate.email);
    await global.fillTxtBox(candidates.addressTxtBox(), candidate.address);
    await global.fillTxtBox(candidates.cityTxtBox(), candidate.city);
    await global.fillTxtBox(candidates.stateTxtBox(), candidate.state);
    await global.fillTxtBox(candidates.zipTxtBox(), candidate.zipcode);
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    //step 2
    await global.fillTxtBox(candidates.urlInputTxtBox(), candidate.url);
    await expect (candidates.skipBtn()).toBeEnabled();
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    await expect (candidates.addLicenseBtn()).toBeEnabled();
    //step 3
    await global.fillTxtBox(candidates.licenseNumberTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.licenseName(), candidate.firstName);
    await global.fillTxtBox(candidates.issuedByTxtBox(), candidate.lastName);
    await expect (candidates.skipBtn()).toBeEnabled();
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    await expect (candidates.addSchoolBtn()).toBeEnabled();
    //step 4
    await global.fillTxtBox(candidates.institutionNameTxtBox(),candidate.middleName);
    await global.fillTxtBox(candidates.degreeTxtBox(), candidate.firstName);
    await expect (candidates.skipBtn()).toBeEnabled();
    await expect (global.saveBtn()).toBeEnabled();
    await global.clickBtn(candidates.saveAndSkipBtn());
    await candidates.assertCreateCandidateSuccessMsg(global.alertmsg());
  });
  test('should be able to CREATE a Candidate skipping the rest of the steps', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    //step 1
    await global.openDropdown();
    await candidates.selectadvancePosition();
    await global.openDropdown();
    await candidates.selectcrossplatformPosition();
    await global.fillTxtBox(candidates.firstNameTxtBox(), candidate.firstName); 
    await global.fillTxtBox(candidates.middleNameTxtBox(), candidate.middleName); 
    await global.fillTxtBox(candidates.lastNameTxtBox(), candidate.lastName); 
    await global.fillTxtBox(candidates.phoneTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.emailTxtBox(), candidate.email);
    await global.fillTxtBox(candidates.addressTxtBox(), candidate.address);
    await global.fillTxtBox(candidates.cityTxtBox(), candidate.city);
    await global.fillTxtBox(candidates.stateTxtBox(), candidate.state);
    await global.fillTxtBox(candidates.zipTxtBox(), candidate.zipcode);
    await expect (candidates.saveAndSkipBtn()).toBeEnabled();
    await global.clickBtn(global.saveBtn());
    // await expect (global.saveBtn()).toBeDisabled();
    // await expect (candidates.saveAndSkipBtn()).toBeDisabled();
    await global.clickBtn(candidates.skipBtn());
    // await expect (global.saveBtn()).toBeDisabled();
    // await expect (candidates.saveAndSkipBtn()).toBeDisabled();
    await global.clickBtn(candidates.skipBtn());
    // await expect (global.saveBtn()).toBeDisabled();
    // await expect (candidates.saveAndSkipBtn()).toBeDisabled();
    await global.clickBtn(candidates.skipBtn());
    // await expect (global.saveBtn()).toBeDisabled();
    // await expect (candidates.saveAndSkipBtn()).toBeDisabled();
    await global.clickBtn(candidates.skipBtn());
    await candidates.assertCreateCandidateSuccessMsg(global.alertmsg());
  });
  