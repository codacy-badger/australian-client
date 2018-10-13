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
  }
};

const notification2 = {
  kind: "info",
  level: "info",
  id: 33,
  meta: {
    title: "Foo title",
    message: "A sample message"
  }
};

const notification3 = {
  kind: "info",
  level: "alert",
  id: 13,
  meta: {
    title: "Foo alert title",
    message: "A sample alert message"
  }
};

const notification4 = {
  kind: "info",
  level: "warning",
  id: 13,
  meta: {
    title: "Foo warning level title",
    message: "A warning message"
  }
};

const successfulResponse = {
  notifications: {
    unread: [notification1, notification2],
    read: [notification3, notification4]
  },
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
