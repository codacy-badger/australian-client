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
  success: true,
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
    id: 42,
    uuid: "42",
    name: "toto"
  }
};

const erroredResponse = {
  error: {
    code: 30,
    message: "Unable to retrieve profile information."
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

  static callUpdateApi(email, password, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("profile@example.org" === email) {
          return callback(successfulResponse);
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default ProfileApi;
