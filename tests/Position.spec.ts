import { test } from "./fixtures/rootpages";
import _default, { candidate } from "../config/default";
import { expect } from "@playwright/test";
import { log } from "console";
import Login from "./pages/login.po";

test('should allow a user to CREATE a position', async ({ global, login, position }) => {
    await login.Auth();
    await global.clickBtn(global.addBtn());
    await global.fillTxtBox(position.positionNameTxtBox(), candidate.firstName);
    await global.fillTxtBox(position.descriptionTxtBox(), candidate.middleName);
    
});

test('should allow a user to DELETE a position', async ({ position, login, global }) => {
    await login.Auth();
    await global.clickBtn(position.positionMenu());
    await global.clickBtn(position.viewPositionBtn());
    await global.clickBtn(global.deleteTrashIcon());
    

});

test('should be able to ASSIGN a User to a position', async ({ global, login, candidates, }) => {
 
});

test('should be able to UNASSIGN a User to a position', async ({ global, login, candidates, }) => {
 
});
  

