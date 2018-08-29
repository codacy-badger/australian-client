import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  nextStep: {
    code: 10,
    message: "Your account is activated, you can now login."
  }
};

const erroredResponse = {
  error: {
    code: 70,
    message: "Activation code is not valid"
  }
};

class ActivationApi {
  static callActivationApi(activationCode, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("42" === activationCode) {
          return callback(successfulResponse);
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default ActivationApi;
