import { test } from "./fixtures/rootpages";

  test('should capture console error logs', async ({ login, global,position,candidates }) => {
    await login.Auth();
    await global.clickBtn(position.positionMenu());
    await global.clickBtn(candidates.candidatesMenu());
    // await global.checkURLs();
    await global.consoleerror();
        
});


