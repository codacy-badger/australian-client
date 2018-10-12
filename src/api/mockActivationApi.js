import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses sleep to simulate the delay of an AJAX call.
// All calls return promises.
const successfulAccountResponse = {
  nextStep: {
    code: 10,
    message: "Your account is activated, you can now login."
  }
};

const erroredAccountResponse = {
  activation: "account-activation is non-valid",
  code: "account-activation-failed",
  message: "Account activation failed."
};

const successfulEmailResponse = {
  nextStep: {
    code: 10,
    message: "Your email has been changed."
  }
};

const erroredEmailResponse = {
  activation: "email-activation is non-valid",
  code: "email-activation-failed",
  message: "Email update failed."
};

class ActivationApi {
  static callAccountActivationApi(activationCode, callback) {
    return sleep(delay) // simulate server latency
      .then(() => {
        if ("42" === activationCode) {
          return callback(successfulAccountResponse);
        } else {
          callback(erroredAccountResponse);
          throw new SubmissionError(erroredAccountResponse);
        }
      });
  }

  static callEmailActivationApi(activationCode, callback) {
    return sleep(delay) // simulate server latency
      .then(() => {
        if ("42" === activationCode) {
          return callback(successfulEmailResponse);
        } else {
          callback(erroredEmailResponse);
          throw new SubmissionError(erroredEmailResponse);
        }
      });
  }
}

export default ActivationApi;
