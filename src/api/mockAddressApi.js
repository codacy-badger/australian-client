import delay, { sleep } from "./mockDelay";
import AppStorage from "../tools/AppStorage";
import { SubmissionError } from "redux-form";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises
const getAddressSuccess = {
  address: {
    latitude: 45,
    longitude: -1,
    setPosition: true,
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
  address: {
    latitude: 45,
    longitude: -1,
    city: "Lacanau-Ville",
    country: "France"
  },
  success: {
    code: "success",
    message: "Address updated"
  }
};
const erroredResponse = {
  code: "update-address-failed",
  message: "Geolocation data has not been updated"
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
    return sleep(delay).then(() => {
      const { city } = data;
      if ("42" === city) {
        return callback(successfulResponse);
      } else {
        callback(erroredResponse);
        throw new SubmissionError(erroredResponse);
      }
    });
  }
}

export default AddressApi;
