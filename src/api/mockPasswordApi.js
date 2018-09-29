import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  success: {
    code: 110,
    message: "Password updated."
  }
};

const errorResponse = {
  error: {
    code: 120,
    message: "Please verify your password."
  }
};

class PasswordApi {
  static callPasswordApi(data, callback) {
    console.dir(data);
    return new Promise(() => {
      setTimeout(() => {
        const { oldPassword } = data;
        if ("42" === oldPassword) {
          return callback(successfulResponse);
        } else {
          return callback(errorResponse);
        }
      }, delay);
    });
  }
}

export default PasswordApi;
