import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//TODO use the other pachage which emulate localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.sessionStorage = sessionStorageMock;

configure({ adapter: new Adapter() });
