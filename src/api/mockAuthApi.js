import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const auth42 = {
  username: "John",
  token: "foo42bar",
  isBreeder: true,
  isOwner: true
};

const auth13 = {
  username: "Murphy",
  token: "foo13bar",
  isBreeder: false,
  isOwner: false
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
          storage.setItem("username", auth13.username);
          storage.setItem("accessToken", auth13.token);
          return callback(auth13);
        case "42":
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
