import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  success: {
    code: "success",
    message: "Your old email has been restored."
  }
};

const errorResponse = {
  code: "restore-email-server-error",
  message: "Email restoration failed.",
  restoration: "bad restoration code"
};

class EmailRestorationApi {
  static callEmailRestorationApi(data, callback) {
    return sleep(delay).then(() => {
      if ("42" === data.restoration) {
        return callback(successfulResponse);
      } else {
        callback(errorResponse);
        throw new SubmissionError(errorResponse);
      }
    });
  }
}

export default EmailRestorationApi;
