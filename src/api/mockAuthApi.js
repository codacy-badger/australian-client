import delay, { sleep } from "./mockDelay";
import { SubmissionError } from "redux-form";
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
  message: "toto",
  email: "email is not a valid email"
};

class AuthApi {
  static callLoginApi(email, password, remember = false, callback) {
    return sleep(delay).then(() => {
      if (email && password === "42") {
        if (remember) {
          localStorage.setItem("username", auth.username);
          localStorage.setItem("accessToken", auth.token);
        } else {
          sessionStorage.setItem("username", auth.username);
          sessionStorage.setItem("accessToken", auth.token);
        }
        return callback(auth);
      } else {
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
