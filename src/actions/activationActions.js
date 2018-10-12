import * as types from "./actionTypes";
//import activationActionApi from "../api/activationApi";
import activationActionApi from "../api/mockActivationApi";

function setAccountActivationPending(isActivationPending) {
  return {
    type: types.SET_ACCOUNT_ACTIVATION_PENDING,
    isActivationPending
  };
}

function setAccountActivationSuccess(isActivationSuccess, nextStep = {}) {
  return {
    type: types.SET_ACCOUNT_ACTIVATION_SUCCESS,
    isActivationSuccess,
    nextStep
  };
}

function setAccountActivationError(isActivationError, error = {}) {
  return {
    type: types.SET_ACCOUNT_ACTIVATION_ERROR,
    isActivationError,
    error
  };
}

function setEmailActivationPending(isActivationPending) {
  return {
    type: types.SET_EMAIL_ACTIVATION_PENDING,
    isActivationPending
  };
}

function setEmailActivationSuccess(isActivationSuccess, nextStep = {}) {
  return {
    type: types.SET_EMAIL_ACTIVATION_SUCCESS,
    isActivationSuccess,
    nextStep
  };
}

function setEmailActivationError(isActivationError, error = {}) {
  return {
    type: types.SET_EMAIL_ACTIVATION_ERROR,
    isActivationError,
    error
  };
}

export function accountActivate(data, dispatch) {
  return () => {
    dispatch(setAccountActivationPending(true));
    dispatch(setAccountActivationSuccess(false));
    dispatch(setAccountActivationError(false));

    const { activation } = data;

    return activationActionApi.callAccountActivationApi(activation, (result) => {
      dispatch(setAccountActivationPending(false));
      if (result.nextStep) {
        dispatch(setAccountActivationSuccess(true, result.nextStep));
      } else {
        dispatch(setAccountActivationError(true, result));
      }
    });
  };
}

export function emailActivate(data, dispatch) {
  return () => {
    dispatch(setEmailActivationPending(true));
    dispatch(setEmailActivationSuccess(false));
    dispatch(setEmailActivationError(false));

    const { activation } = data;

    return activationActionApi.callEmailActivationApi(activation, (result) => {
      dispatch(setEmailActivationPending(false));
      if (result.nextStep) {
        dispatch(setEmailActivationSuccess(true, result.nextStep));
      } else {
        dispatch(setEmailActivationError(true, result));
      }
    });
  };
}
