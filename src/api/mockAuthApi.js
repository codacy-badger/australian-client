import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const auth = {
  username: "John",
  token: "foo42bar"
};

const error = {
  code: 10,
  message: "toto"
};

class AuthApi {
  static callLoginApi(email, password, remember, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if (email === "admin@example.org" && password === "admin") {
          if (remember) {
            localStorage.setItem("username", auth.username);
            localStorage.setItem("accessToken", auth.token);
          } else {
            sessionStorage.setItem("username", auth.username);
            sessionStorage.setItem("accessToken", auth.token);
          }
          return callback(auth);
        } else {
          return callback(error);
        }
      }, delay);
    });
  }

  static callLogoutApi(callback) {
    return new Promise(() => {
      setTimeout(() => {
        localStorage.clear();
        sessionStorage.clear();
        return callback({});
      }, delay);
    });
  }
}

export default AuthApi;
