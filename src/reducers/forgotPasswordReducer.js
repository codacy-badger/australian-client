import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function forgotPasswordReducer(state = initialState.forgotPassword, action) {
  switch (action.type) {
    case types.SET_FORGOT_PASSWORD_PENDING:
      return Object.assign({}, state, {
        isForgotPasswordPending: action.isForgotPasswordPending
      });

    case types.SET_FORGOT_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        isForgotPasswordSuccess: action.isForgotPasswordSuccess,
        nextStep: action.nextStep
      });

    case types.SET_FORGOT_PASSWORD_ERROR:
      return Object.assign({}, state, {
        isForgotPasswordError: action.isForgotPasswordError,
        error: action.error
      });

    default:
      return state;
  }
}
