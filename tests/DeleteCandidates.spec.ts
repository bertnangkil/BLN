import { test } from "./fixtures/rootpages";
  
  test('should be able to REMOVE a candidate via Grid view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.clickBtn(candidates.firstCandidateRemoveBtn());
    await global.clickBtn(global.continueRemoveBtn());
    await candidates.assertRemoveCandidateSuccessMsg(global.alertmsg());
  });
  test('should be able to REMOVE a candidate via candidate detailed view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.clickBtn(candidates.firstcandidateSeeProfileBtn());
    await global.clickBtn(global.deleteTrashIcon());
    await global.clickBtn(global.continueRemoveBtn());
    await candidates.assertRemoveCandidateSuccessMsg(global.alertmsg());
  });
  