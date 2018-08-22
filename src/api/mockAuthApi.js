import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class AuthApi {
  static callLoginApi(email, password, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if (email === "admin@example.org" && password === "admin") {
          return callback(null);
        } else {
          return callback(new Error("Invalid email and password"));
        }
      }, delay);
    });
  }
}

export default AuthApi;
