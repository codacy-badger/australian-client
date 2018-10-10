import delay, { sleep } from "./mockDelay";
import AppStorage from "../tools/AppStorage";
import {SubmissionError} from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses sleep to simulate the delay of an AJAX call.
// All calls return promises
const getProfileSuccess = {
  user: {
    givenName: "Johann",
    familyName: "Doe" + Math.round(Math.random() * 100).toString(),
    name: "John",
    jobTitle: "Administrator"
  },
  success: true
};
const getProfileError = {
  success: false,
  message: "Profil unavailable"
};
const successfulResponse = {
  success: {
    code: "profile-updated",
    message: "Your profile has been successfully updated"
  },
  user: {
    givenName: "Johann",
    familyName: "Doe" + Math.round(Math.random() * 100).toString(),
    name: "John",
    jobTitle: "Administrator"
  }
};
const erroredResponse = {
  error: {
    code: "profile-server-error",
    message: "Server unavailable. Your profile has not been updated."
  }
};

class ProfileApi {
  static callGetProfileApi(callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("foo42bar" === AppStorage.getItem("accessToken")) {
          return callback(getProfileSuccess);
        } else {
          return callback(getProfileError);
        }
      }, delay);
    });
  }

  static isUsernameUnique(data) {
    return sleep(delay) // simulate server latency
      .then(() => {
        if (["John", "paul", "george", "ringo"].includes(data.name)) {
          throw { name: "username is already taken" };
        }
      });
    // return new Promise(() => {
    //   setTimeout(() => {
    //     const { name } = data;
    //     if (["John", "john", "george", "ringo"].includes(name)) {
    //       throw { name: 'That username is already taken'};
    //       }
    //   }, delay);
    // });
  }

  static callUpdateApi(data, callback) {
    return sleep(delay)
      .then(() => {
        const { jobTitle } = data;
        if ("42" === jobTitle) {
          return callback(successfulResponse);
        } else {
          callback(erroredResponse);
          throw new SubmissionError(erroredResponse);
        }
      }, delay);
  }
}

export default ProfileApi;
