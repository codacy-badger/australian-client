import * as types from "./actionTypes";
//import forgot_passwordActionApi from "../api/forgot_passwordApi";
import forgot_passwordActionApi from "../api/mockForgotPasswordApi";

function setForgotPasswordPending(isForgotPasswordPending) {
  return {
    type: types.SET_FORGOT_PASSWORD_PENDING,
    isForgotPasswordPending
  };
}

function setForgotPasswordSuccess(isForgotPasswordSuccess, nextStep = {}) {
  return {
    type: types.SET_FORGOT_PASSWORD_SUCCESS,
    isForgotPasswordSuccess,
    nextStep
  };
}

function setForgotPasswordError(isForgotPasswordError, error = {}) {
  return {
    type: types.SET_FORGOT_PASSWORD_ERROR,
    isForgotPasswordError,
    error
  };
}

export function sendMail(email) {
  return (dispatch) => {
    dispatch(setForgotPasswordPending(true));
    dispatch(setForgotPasswordSuccess(false));
    dispatch(setForgotPasswordError(false));

    forgot_passwordActionApi.callForgotPasswordApi(email, (result) => {
      dispatch(setForgotPasswordPending(false));
      if (result.nextStep) {
        dispatch(setForgotPasswordSuccess(true, result.nextStep));
      } else {
        dispatch(setForgotPasswordError(true, result.error));
      }
    });
  };
}
