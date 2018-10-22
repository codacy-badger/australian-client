import { LocalStorage } from "node-localstorage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const jsdom = require('jsdom').jsdom;
const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.localStorage = new LocalStorage("./scratch/localStorage");
global.sessionStorage = new LocalStorage("./scratch/sessionStorage");

configure({ adapter: new Adapter() });
