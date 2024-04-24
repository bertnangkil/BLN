import { test } from "./fixtures/rootpages";
import _default, { candidate } from "../config/default";
import { expect } from "@playwright/test";

  test('should be able to update Candidate License in detail view', async ({ login, global,candidates }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.firstName);
    await global.clickBtn(candidates.firstcandidateSeeProfileBtn());
    await global.clickBtn(candidates.editLicenseLink());
    await global.fillTxtBox(candidates.licenseNumberTxtBox(), candidate.zipcode);
    await global.fillTxtBox(candidates.licenseName(), candidate.firstName2);
    await global.fillTxtBox(candidates.issuedByTxtBox(), candidate.lastName2);
    await global.clickBtn(global.saveBtn());
    await candidates.assertUpdateCandidateSuccessMsg(global.alertmsg());
  });
  test('should be able to add an additional Candidate License in detail view', async ({ login, global,candidates }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.firstName);
    await global.clickBtn(candidates.firstcandidateSeeProfileBtn());
    await global.clickBtn(candidates.editLicenseLink());
    await global.clickBtn(candidates.addLicenseBtn());
    await global.fillTxtBox(candidates.secondlicenseNumberTxtBox(), candidate.number);
    await global.fillTxtBox(candidates.secondlicenseName(), candidate.firstName);
    await global.fillTxtBox(candidates.secondissuedByTxtBox(), candidate.lastName);
    await global.clickBtn(global.saveBtn());
    await candidates.assertUpdateCandidateSuccessMsg(global.alertmsg());
  });
  test('should be able to Delete the additional License in candidate detail view', async ({ login,global,candidates }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.firstName);
    await global.clickBtn(candidates.firstcandidateSeeProfileBtn());
    await global.clickBtn(candidates.editLicenseLink());
    await global.clickBtn(global.seconddeleteTrashIcon());
    await global.clickBtn(global.continueRemoveBtn());
    await global.clickBtn(global.saveBtn());
    await expect (global.seconddeleteTrashIcon()).not.toBeVisible();
    
  });
  test('should be able to Add an additional Link in candidate detail view', async ({ login }) => {
    await login.Auth();
    
  });
  test('should be able to Delete an additional Link in candidate detail view', async ({ login }) => {
    await login.Auth();
    
  });
  test('should be able to Add an additional Work History in candidate detail view', async ({ login }) => {
    await login.Auth();
    
  });
  test('should be able to Delete an additional  Work History in candidate detail view', async ({ login }) => {
    await login.Auth();
    
  });
  test('should be able to Add an additional Educational History in candidate detail view', async ({ login }) => {
    await login.Auth();
    
  });
  test('should be able to Delete an additional  Educational History in candidate detail view', async ({ login }) => {
    await login.Auth();
    
  });