import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  success: {
    code: "success",
    message: "Password updated."
  }
};

const errorResponse = {
  code: "profile-password-invalid-password",
  message: "Please verify your password.",
  "old-password": "bad password"
};

class PasswordApi {
  static callPasswordApi(data, callback) {
    return sleep(delay).then(() => {
      if ("42" === data["old-password"]) {
        return callback(successfulResponse);
      } else {
        callback(errorResponse);
        throw new SubmissionError(errorResponse);
      }
    });
  }
}

export default PasswordApi;
