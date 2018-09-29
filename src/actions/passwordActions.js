import * as types from "./actionTypes";
//import passwordActionApi from "../api/passwordApi";
import passwordActionApi from "../api/mockPasswordApi";
import initialState from "../reducers/initialState";

//Save update
function setPasswordPending(isPasswordPending) {
  return {
    type: types.SET_PASSWORD_PENDING,
    isPasswordPending
  };
}

function setPasswordSuccess(isPasswordSuccess, success = initialState.password.success) {
  return {
    type: types.SET_PASSWORD_SUCCESS,
    isPasswordSuccess,
    success
  };
}

function setPasswordError(isPasswordError, error = initialState.password.error) {
  return {
    type: types.SET_PASSWORD_ERROR,
    isPasswordError,
    error
  };
}

export function passwordUpdate(data) {
  return (dispatch) => {
    dispatch(setPasswordPending(true));
    dispatch(setPasswordSuccess(false));
    dispatch(setPasswordError(false));

    passwordActionApi.callPasswordApi(data, (result) => {
      dispatch(setPasswordPending(false));
      if (result.success) {
        dispatch(setPasswordSuccess(true, result.success));
      } else {
        dispatch(setPasswordError(true, result.error));
      }
    });
  };
}
