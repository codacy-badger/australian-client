import * as types from "./actionTypes";
//import authActionApi from "../api/authApi";
import authActionApi from "../api/mockAuthApi";

function setLoginPending(isLoginPending) {
  return {
    type: types.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess, auth) {
  return {
    type: types.SET_LOGIN_SUCCESS,
    isLoginSuccess,
    auth
  };
}

function setLoginError(isLoginError, error) {
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
    dispatch(setLoginError(null));

    authActionApi.callLoginApi(email, password, (result) => {
      dispatch(setLoginPending(false));
      console.log(JSON.stringify(result));
      if (result.user_id) {
        dispatch(setLoginSuccess(true, result));
      } else {
        dispatch(setLoginError(true, result));
      }
    });
  };
}
