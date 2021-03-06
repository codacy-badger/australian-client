import * as types from "./actionTypes";
//import authActionApi from "../api/authApi";
import authActionApi from "../api/mockAuthApi";
import { setProfileLoaded } from "./profileActions";
import { setNotificationLoaded } from "./notificationActions";
import { setAddressLoaded } from "./addressActions";

function setLoginPending(isLoginPending) {
  return {
    type: types.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginMessagePrinted(sendMessage) {
  return {
    type: types.SET_LOGIN_MESSAGE_PRINTED,
    sendMessage
  };
}

function setLoginSuccess(isLoginSuccess, auth = { email: "", gravatar: false, username: "" }) {
  return {
    type: types.SET_LOGIN_SUCCESS,
    isLoginSuccess,
    auth
  };
}

function setLoginError(isLoginError, error = {}) {
  return {
    type: types.SET_LOGIN_ERROR,
    isLoginError,
    error
  };
}

function setLogoutPending(isLogoutPending) {
  return {
    type: types.SET_LOGOUT_PENDING,
    isLogoutPending
  };
}

function setLogoutMessagePrinted(sendMessage) {
  return {
    type: types.SET_LOGOUT_MESSAGE_PRINTED,
    sendMessage
  };
}

export function setLogoutSuccess(isLogoutSuccess) {
  return {
    type: types.SET_LOGOUT_SUCCESS,
    isLogoutSuccess
  };
}

export function login(data, dispatch) {
  return () => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(false));

    const { email, password, remember } = data;

    return authActionApi.callLoginApi(email, password, remember, (result) => {
      dispatch(setLoginPending(false));
      if (result.token) {
        dispatch(setLoginSuccess(true, result));
        setTimeout(() => {
          dispatch(setLoginMessagePrinted(false));
        }, 1000);
      } else {
        dispatch(setLoginError(true, result));
      }
    });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(setLogoutPending(true));
    dispatch(setLogoutSuccess(false));

    authActionApi.callLogoutApi(() => {
      dispatch(setLogoutPending(false));
      dispatch(setLogoutSuccess(true));
      dispatch(setLoginSuccess(false));
      //All reducers with a is*Loaded must be set to false to avoid cache bugs.
      dispatch(setAddressLoaded(false));
      dispatch(setNotificationLoaded(false));
      dispatch(setProfileLoaded(false));
      setTimeout(() => {
        dispatch(setLogoutMessagePrinted(false));
      }, 1000);
    });
  };
}
