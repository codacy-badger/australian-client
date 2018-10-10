import * as types from "./actionTypes";
//import emailActionApi from "../api/emailApi";
import emailActionApi from "../api/mockEmailApi";
import initialState from "../reducers/initialState";

//Save update
function setEmailPending(isEmailPending) {
  return {
    type: types.SET_EMAIL_PENDING,
    isEmailPending
  };
}

function setEmailSuccess(isEmailSuccess, success = initialState.email.success) {
  return {
    type: types.SET_EMAIL_SUCCESS,
    isEmailSuccess,
    success
  };
}

function setEmailError(isEmailError, error = initialState.email.error) {
  return {
    type: types.SET_EMAIL_ERROR,
    isEmailError,
    error
  };
}

export function emailUpdate(data, dispatch) {
  return () => {
    dispatch(setEmailPending(true));
    dispatch(setEmailSuccess(false));
    dispatch(setEmailError(false));

    return emailActionApi.callEmailApi(data, (result) => {
      dispatch(setEmailPending(false));
      if (result.success) {
        dispatch(setEmailSuccess(true, result.success));
      } else {
        dispatch(setEmailError(true, result));
      }
    });
  };
}
