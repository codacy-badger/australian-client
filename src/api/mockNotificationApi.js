import delay, { sleep } from "./mockDelay";
import AppStorage from "../tools/AppStorage";
//import * as codes from './errorCode';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const notification1 = {
  kind: "message",
  level: "secondary",
  id: 243,
  linkId: 237,
  meta: {
    userId: 33,
    userName: "toto",
    userAvatar: ""
  },
  read: false
};

const notification2 = {
  id: 33,
  kind: "info",
  level: "info",
  meta: {
    title: "Foo title",
    message: "A sample message"
  },
  read: false
};

const notification3 = {
  id: 13,
  kind: "info",
  level: "alert",
  meta: {
    title: "Foo alert title",
    message: "A sample alert message"
  },
  read: true
};

const notification4 = {
  id: 23,
  kind: "info",
  level: "warning",
  meta: {
    title: "Foo warning level title",
    message: "A warning message"
  },
  read: true
};

const successfulResponse = {
  notifications: [notification1, notification2, notification3, notification4],
  success: {
    code: "get-notification",
    message: "Notifications are up to date"
  }
};

const errorResponse = {
  error: {
    code: "get-notification-error",
    message: "Unable to retrieve last notifications"
  }
};

class NotificationApi {
  static callGetNotificationApi(callback) {
    return sleep(delay).then(() => {
      if ("foo42bar" === AppStorage.getItem("accessToken")) {
        return callback(successfulResponse);
      } else {
        //This is not a return from a redux-form.
        //callback(errorResponse);
        //throw new SubmissionError(errorResponse);
        //So we return callback
        return callback(errorResponse);
      }
    });
  }
}

export default NotificationApi;
