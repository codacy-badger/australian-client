import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const auth42 = {
  email: "john@example.org",
  gravatar: true,
  username: "John",
  token: "foo42bar"
};

const auth13 = {
  email: "murphy@example.org",
  gravatar: false,
  username: "Murphy",
  token: "foo13bar"
};

const error = {
  code: 10,
  message: "toto",
  email: "email is not a valid email"
};

class AuthApi {
  static callLoginApi(email, password, remember = false, callback) {
    return sleep(delay).then(() => {
      const storage = remember ? localStorage : sessionStorage;
      switch (password) {
        case "13":
          storage.setItem("email", auth13.email);
          storage.setItem("gravatar", auth13.gravatar);
          storage.setItem("username", auth13.username);
          storage.setItem("accessToken", auth13.token);
          return callback(auth13);
        case "42":
          storage.setItem("email", auth42.email);
          storage.setItem("gravatar", auth42.gravatar);
          storage.setItem("username", auth42.username);
          storage.setItem("accessToken", auth42.token);
          return callback(auth42);
        default:
          callback(error);
          throw new SubmissionError(error);
      }
    });
  }

  static callLogoutApi(callback) {
    return sleep(delay).then(() => {
      localStorage.clear();
      sessionStorage.clear();
      return callback({});
    });
  }
}

export default AuthApi;
