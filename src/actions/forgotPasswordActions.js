import * as types from "./actionTypes";
//import forgotPasswordActionApi from "../api/forgot_passwordApi";
import forgotPasswordActionApi from "../api/mockForgotPasswordApi";

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

export function sendMail(data, dispatch) {
  return () => {
    dispatch(setForgotPasswordPending(true));
    dispatch(setForgotPasswordSuccess(false));
    dispatch(setForgotPasswordError(false));

    const { email } = data;

    return forgotPasswordActionApi.callForgotPasswordApi(email, (result) => {
      dispatch(setForgotPasswordPending(false));
      if (result.nextStep) {
        dispatch(setForgotPasswordSuccess(true, result.nextStep));
      } else {
        dispatch(setForgotPasswordError(true, result));
      }
    });
  };
}
