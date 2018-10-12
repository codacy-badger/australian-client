import * as types from "./actionTypes";
//import activationActionApi from "../api/activationApi";
import activationActionApi from "../api/mockActivationApi";

function setActivationPending(isActivationPending) {
  return {
    type: types.SET_ACTIVATION_PENDING,
    isActivationPending
  };
}

function setActivationSuccess(isActivationSuccess, nextStep = {}) {
  return {
    type: types.SET_ACTIVATION_SUCCESS,
    isActivationSuccess,
    nextStep
  };
}

function setActivationError(isActivationError, error = {}) {
  return {
    type: types.SET_ACTIVATION_ERROR,
    isActivationError,
    error
  };
}

export function accountActivate(data, dispatch) {
  return () => {
    dispatch(setActivationPending(true));
    dispatch(setActivationSuccess(false));
    dispatch(setActivationError(false));

    const { activation } = data;

    return activationActionApi.callAccountActivationApi(activation, (result) => {
      dispatch(setActivationPending(false));
      if (result.nextStep) {
        dispatch(setActivationSuccess(true, result.nextStep));
      } else {
        dispatch(setActivationError(true, result));
      }
    });
  };
}
