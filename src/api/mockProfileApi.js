import delay from "./mockDelay";
import AppStorage from "../tools/AppStorage";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises
const getProfileSuccess = {
  user: {
    additionalName: "",
    givenName: "Johann",
    familyName: "Doe",
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
    familyName: "Doe",
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
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    return sleep(delay) // simulate server latency
      .then(() => {
        if (["John", "paul", "george", "ringo"].includes(data.name)) {
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

  static callAddressUpdateApi(data, callback) {
    return new Promise(() => {
      setTimeout(() => {
        const { locality } = data;
        if ("Lacanau" === locality) {
          return callback(successfulResponse);
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default ProfileApi;
