import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  nextStep: {
    code: 10,
    message: "A link to create a new password has been sent by mail"
  }
};

const erroredResponse = {
  error: {
    code: 60,
    message: "Any account is registered with this email."
  }
};

class ForgotPasswordApi {
  static callForgotPasswordApi(email, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("forgot@example.org" === email) {
          return callback(successfulResponse);
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default ForgotPasswordApi;