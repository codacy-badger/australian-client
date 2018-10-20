import delay, { sleep } from "./mockDelay";
import AppStorage from "../tools/AppStorage";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const lastDog1 = {
  name: "Rag"
};

const lastDog2 = {
  name: "Ned"
};

const lastDog3 = {
  name: "Oxbow"
};

const lastDog4 = {
  name: "Heyden"
};

const successfulResponse = {
  lastDogs: [lastDog1, lastDog2, lastDog3, lastDog4],
  success: {
    code: "get-lastDog",
    message: "LastDogs are up to date"
  }
};

const errorResponse = {
  code: "get-lastDog-error",
  message: "Unable to retrieve last Dogs."
};

class LastDogApi {
  static callGetLastDogApi(callback) {
    return sleep(delay).then(() => {
      if ("foo42bar" === AppStorage.getItem("accessToken")) {
        return callback(successfulResponse);
      } else {
        //This is not a return from a redux-form.
        //callback(errorResponse);
        //throw new SubmissionError(errorResponse);
        //So we return callback
        return callback(errorResponse);
      }
    });
  }
}

export default LastDogApi;
