import delay from "./mockDelay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const erroredResponse = {
  error: {
    code: 80,
    message: "Your password is not valid"
  }
};

class DeleteAccountApi {
  static callDeleteAccountApi(deleteAccountCode, callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("42" === deleteAccountCode) {
          localStorage.clear();
          sessionStorage.clear();
          return callback({});
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default DeleteAccountApi;
