import * as types from "./actionTypes";
//import registerActionApi from "../api/registerApi";
import registerActionApi from "../api/mockRegisterApi";

function setRegisterPending(isRegisterPending) {
  return {
    type: types.SET_REGISTER_PENDING,
    isRegisterPending
  };
}

function setRegisterSuccess(isRegisterSuccess, nextStep = {}) {
  return {
    type: types.SET_REGISTER_SUCCESS,
    isRegisterSuccess,
    nextStep
  };
}

function setRegisterError(isRegisterError, error = {}) {
  return {
    type: types.SET_REGISTER_ERROR,
    isRegisterError,
    error
  };
}

export function register(data) {
  return (dispatch) => {
    dispatch(setRegisterPending(true));
    dispatch(setRegisterSuccess(false));
    dispatch(setRegisterError(false));

    const { email, password } = data;

    registerActionApi.callRegisterApi(email, password, (result) => {
      dispatch(setRegisterPending(false));
      if (result.nextStep) {
        dispatch(setRegisterSuccess(true, result.nextStep));
      } else {
        dispatch(setRegisterError(true, result.error));
      }
    });
  };
}
