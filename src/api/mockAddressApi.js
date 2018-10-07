import delay from "./mockDelay";
import AppStorage from "../tools/AppStorage";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises
const getAddressSuccess = {
  address: {
    latitude: 45,
    longitude: -1,
    city: "Lacanau",
    country: "France"
  },
  success: true
};
const getAddressError = {
  success: false,
  message: "Address unavailable"
};
const successfulResponse = {
  success: {
    code: 10,
    message: "Address updated"
  }
};
const erroredResponse = {
  error: {
    code: 30,
    message: "Username already taken"
  }
};

class AddressApi {
  static callGetAddressApi(callback) {
    return new Promise(() => {
      setTimeout(() => {
        if ("foo42bar" === AppStorage.getItem("accessToken")) {
          return callback(getAddressSuccess);
        } else {
          return callback(getAddressError);
        }
      }, delay);
    });
  }

  static callUpdateAddressApi(data, callback) {
    return new Promise(() => {
      setTimeout(() => {
        const { city } = data;
        if ("42" === city) {
          return callback(successfulResponse);
        } else {
          return callback(erroredResponse);
        }
      }, delay);
    });
  }
}

export default AddressApi;
