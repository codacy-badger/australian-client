import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises
const profileResponse = {
  user: {
    id: 42,
    uuid: "42",
    name: "toto"
  }
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
    message: "User does not exists"
  }
};

class ProfileApi {
  static callGetProfileApi(uuid, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("42" === uuid) {
          return callback(profileResponse);
        } else {
          return callback(erroredResponse);
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
