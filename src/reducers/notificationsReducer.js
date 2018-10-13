import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function notificationReducer(state = initialState.notification, action) {
  switch (action.type) {
    case types.SET_NOTIFICATION_LOADING:
      return Object.assign({}, state, {
        isNotificationLoading: action.isNotificationLoading
      });

    case types.SET_NOTIFICATION_LOADED:
      return Object.assign({}, state, {
        isNotificationLoaded: action.isNotificationLoaded,
        notifications: action.notifications
      });

    case types.SET_NOTIFICATION_UNLOADABLE:
      return Object.assign({}, state, {
        isNotificationUnloadable: action.isNotificationUnloadable
      });

    default:
      return state;
  }
}
