import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const successfulResponse = {
  success: {
    code: "success",
    message: "An search has been sent to new address, please follow instructions to finish this update."
  },
  dogs: []
};

const errorResponse = {
  code: "update-search-server-error",
  message: "Search update failed.",
  password: "bad password",
  search: "search already exists"
};

class SearchApi {
  static callSearchApi(data, callback) {
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

export default SearchApi;
