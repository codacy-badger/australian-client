import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function emailActivationReducer(state = initialState.emailActivation, action) {
  switch (action.type) {
    case types.SET_EMAIL_ACTIVATION_PENDING:
      return Object.assign({}, state, {
        isActivationPending: action.isActivationPending
      });

    case types.SET_EMAIL_ACTIVATION_SUCCESS:
      return Object.assign({}, state, {
        isActivationSuccess: action.isActivationSuccess,
        nextStep: action.nextStep
      });

    case types.SET_EMAIL_ACTIVATION_ERROR:
      return Object.assign({}, state, {
        isActivationError: action.isActivationError,
        error: action.error
      });

    default:
      return state;
  }
}
