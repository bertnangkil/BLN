import { test } from "./fixtures/rootpages";
import _default, { candidate } from "../config/default";

  test('should be able to NOT show any search results in Board view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.fillTxtBox(candidates.boardSearchBox(), candidate.zipcode);
    await global.assertNoSearchResultFound(candidates.searchResults());
  });
  test('should be able to NOT show any search results in Grid view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.zipcode);
    await global.assertNoSearchResultFound(candidates.searchResults());
  });
  test('should be able to NOT show any search results in List view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.listViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.zipcode);
    await global.assertNoSearchResultFound(candidates.searchResults());
  });
  test('should be able to search Candidates in Board view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.fillTxtBox(candidates.boardSearchBox(), candidate.firstName);
    await candidates.assertCandidateSearchResult(candidate.firstName, candidates.boardCandidateSearchList());
  });
  test('should be able to search Candidates in Grid view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.gridViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.firstName);
    await candidates.assertCandidateSearchResult(candidate.firstName, candidates.gridCandidateSearchList());
  });
  test('should be able to search Candidates in List view', async ({ global, login, candidates, }) => {
    await login.Auth();
    await global.clickBtn(candidates.listViewIcon());
    await global.fillTxtBox(candidates.searchBox(), candidate.firstName);
    await candidates.assertCandidateSearchResult(candidate.firstName, candidates.listCandidateSearchList());
  });
  