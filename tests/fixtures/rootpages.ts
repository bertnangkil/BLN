import { test as root} from "playwright/test";
import Base from "../pages/global.po";
import Login from "../pages/login.po";
import Candidates from "../pages/candidates.po";
import Position from "../pages/position.po";
import Global from "../pages/global.po";

export const test = root.extend<{
global: Global;
login: Login;
candidates: Candidates;
position: Position;

}>({
    //Define a fixture
    global: async({ page}, use) => {
        await use(new Global(page));
    },
    login: async({ page}, use) => {
        await use(new Login(page));
    },
    candidates: async({ page}, use) => {
        await use(new Candidates(page));
    },
    position: async({ page}, use) => {
        await use(new Position(page));
    },
   })