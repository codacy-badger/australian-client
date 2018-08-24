import delay from "./mockDelay";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const auth = {
  user: {
    id: 1,
    email: 'admin@example.org',
    givenName: 'John',
    familyName: 'Doe',
  },
  token: 'foo42bar'
};

const error = {
  code: 10,
  message: "toto",
};


class AuthApi {
  static callLoginApi(email, password, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if (email === "admin@example.org" && password === "admin") {
          localStorage.setItem('user', auth.user);
          localStorage.setItem('accessToken', auth.token);
          return callback(auth);
        } else {
          return callback(error);
        }
      }, delay);
    });
  }
}

export default AuthApi;
