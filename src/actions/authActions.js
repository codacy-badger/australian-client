import * as types from "./actionTypes";
//import authActionApi from "../api/authApi";
import authActionApi from "../api/mockAuthApi";

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

function setLoginSuccess(isLoginSuccess, auth = {}) {
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

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(false));

    authActionApi.callLoginApi(email, password, (result) => {
      dispatch(setLoginPending(false));
      if (result.token) {
        dispatch(setLoginSuccess(true, result));
        //TODO try to dispatch Toastr directly
        setTimeout(() => {
          dispatch(setLoginMessagePrinted(false));
        }, 1000);
      } else {
        dispatch(setLoginError(true, result));
      }
    });
  };
}
