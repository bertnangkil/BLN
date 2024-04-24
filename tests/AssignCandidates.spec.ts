import { test } from "./fixtures/rootpages";

    test('should be able to ASSIGN a User to a Candidate', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.clickBtn(candidates.firstcandidateSeeProfileBtn());
    await global.clickBtn(global.assignUserIcon());
    await global.clickBtn(global.selectUserAlbert());
    await candidates.assertAssignUserSuccessMsg(global.alertmsg());
  });
  test('should be able to UNASSIGN a User to a Candidate', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.clickBtn(candidates.firstcandidateSeeProfileBtn());
    await global.clickBtn(global.assignUserIcon());
    await global.clickBtn(global.selectUserAlbert());
    await candidates.assertAssignUserSuccessMsg(global.alertmsg());
  });
  