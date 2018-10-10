import delay, { sleep } from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  success: {
    code: "success",
    message: "An email has been sent to new address, please follow instructions to finish this update."
  }
};

const errorResponse = {
  code: "update-email-server-error",
  message: "Email update failed."
};

class EmailApi {
  static callEmailApi(data, callback) {
    return sleep(delay)
      .then(() => {
        if ("42@example.org" === data["old-email"]) {
          return callback(successfulResponse);
        } else {
          return callback(errorResponse);
        }
      });
  }
}

export default EmailApi;
