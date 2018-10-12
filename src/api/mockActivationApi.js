import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses sleep to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  nextStep: {
    code: 10,
    message: "Your account is activated, you can now login."
  }
};

const erroredResponse = {
  activation: "account-activation is non-valid",
  code: "account-activation-failed",
  message: "Account activation failed."
};

class ActivationApi {
  static callAccountActivationApi(activationCode, callback) {
    return sleep(delay) // simulate server latency
      .then(() => {
        if ("42" === activationCode) {
          return callback(successfulResponse);
        } else {
          callback(erroredResponse);
          throw new SubmissionError(erroredResponse);
        }
      });
  }
}

export default ActivationApi;
