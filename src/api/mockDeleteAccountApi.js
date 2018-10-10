import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";

// This file mocks a web API by working with the hard-coded data below.
// It uses sleep to simulate the delay of an AJAX call.
// All calls return promises.
const erroredResponse = {
  password: "password is non-valid",
  code: "delete-account-password-invalid",
  message: "Your password is not valid",
  error: true
};

class DeleteAccountApi {
  static callDeleteAccountApi(deleteAccountCode, callback) {
    return sleep(delay)
      .then(() => {
        if ("42" === deleteAccountCode) {
          localStorage.clear();
          sessionStorage.clear();
          return callback({error: false});
        } else {
          callback(erroredResponse);
          return new SubmissionError(erroredResponse);
        }
      });
  }
}

export default DeleteAccountApi;
