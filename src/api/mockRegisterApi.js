import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  nextStep: {
    code: 10,
    message: "Verify your mail"
  }
};

const erroredResponse = {
  error: {
    code: 30,
    message: "Mail already exists"
  }
};

class RegisterApi {
  static callRegisterApi(email, password, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("42" === password) {
          return callback(successfulResponse);
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default RegisterApi;
