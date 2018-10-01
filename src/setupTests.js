import { LocalStorage } from "node-localstorage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

global.localStorage = new LocalStorage('./scratch/localStorage');
global.sessionStorage = new LocalStorage('./scratch/sessionStorage');

configure({ adapter: new Adapter() });
