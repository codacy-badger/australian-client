import * as types from "./actionTypes";
//import notificationActionApi from "../api/notificationApi";
import notificationActionApi from "../api/mockNotificationApi";

//Initial retrieve
function setNotificationLoading(isNotificationLoading) {
  return {
    type: types.SET_NOTIFICATION_LOADING,
    isNotificationLoading
  };
}

function setNotificationLoaded(isNotificationLoaded, notifications) {
  return {
    type: types.SET_NOTIFICATION_LOADED,
    isNotificationLoaded,
    notifications
  };
}

function setNotificationUnloadable(isNotificationUnloadable, message) {
  return {
    type: types.SET_NOTIFICATION_UNLOADABLE,
    isNotificationUnloadable,
    //We put message only if notification are Unloadable
    message
  };
}

export function getNotification() {
  return (dispatch) => {
    dispatch(setNotificationLoading(true));
    dispatch(setNotificationUnloadable(false));
    notificationActionApi.callGetNotificationApi((result) => {
      dispatch(setNotificationLoading(false));
      if (result.success) {
        dispatch(setNotificationLoaded(true, result.notifications));
      } else {
        dispatch(setNotificationUnloadable(true, result.message));
      }
    });
  };
}
