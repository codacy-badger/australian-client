import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
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
  message: "Email update failed.",
  password: "bad password",
  email: "email already exists"
};

class EmailApi {
  static callEmailApi(data, callback) {
    return sleep(delay).then(() => {
      if ("42" === data.password) {
        return callback(successfulResponse);
      } else {
        callback(errorResponse);
        throw new SubmissionError(errorResponse);
      }
    });
  }
}

export default EmailApi;
