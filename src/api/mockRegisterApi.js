import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
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
  code: 30,
  message: "Mail already exists",
  email: "email already exists"
};

class RegisterApi {
  static callRegisterApi(email, password, callback) {
    return sleep(delay).then(() => {
      if ("42" === password) {
        return callback(successfulResponse);
      } else {
        callback(erroredResponse);
        throw new SubmissionError(erroredResponse);
      }
    });
  }
}

export default RegisterApi;
