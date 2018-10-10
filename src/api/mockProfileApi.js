import delay, { sleep } from "./mockDelay";
import AppStorage from "../tools/AppStorage";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses sleep to simulate the delay of an AJAX call.
// All calls return promises
const getProfileSuccess = {
  user: {
    additionalName: "",
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
    code: 10,
    message: "Profile updated"
  },
  user: {
    additionalName: "42",
    givenName: "Johann",
    familyName: "Doe" + Math.round(Math.random() * 100).toString(),
    name: "John",
    jobTitle: "Administrator"
  }
};
const erroredResponse = {
  error: {
    code: 30,
    message: "Username already taken"
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
          //FIXME Try to throw Submission Error.
          throw { name: "That username is taken" };
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
    return new Promise(() => {
      setTimeout(() => {
        const { name } = data;
        if (["John", "paul", "george", "ringo"].includes(name)) {
          return callback(erroredResponse);
        } else {
          return callback(successfulResponse);
        }
      }, delay);
    });
  }
}

export default ProfileApi;
