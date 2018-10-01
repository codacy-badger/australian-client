import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  success: {
    code: 10,
    message: "An email has been sent to new address, please follow instructions to finish this update."
  }
};

const errorResponse = {
  error: {
    code: 20,
    message: "An error has occurred."
  }
};

class EmailApi {
  static callEmailApi(data, callback) {
    return new Promise(() => {
      setTimeout(() => {
        const { oldEmail } = data;
        if ("42@example.org" === oldEmail) {
          return callback(successfulResponse);
        } else {
          return callback(errorResponse);
        }
      }, delay);
    });
  }
}

export default EmailApi;
