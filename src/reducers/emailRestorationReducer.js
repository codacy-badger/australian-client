import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function emailRestorationReducer(state = initialState.emailRestoration, action) {
  switch (action.type) {
    case types.SET_EMAIL_RESTORATION_PENDING:
      return Object.assign({}, state, {
        isEmailRestorationPending: action.isEmailRestorationPending
      });

    case types.SET_EMAIL_RESTORATION_SUCCESS:
      return Object.assign({}, state, {
        isEmailRestorationSuccess: action.isEmailRestorationSuccess,
        success: action.success
      });

    case types.SET_EMAIL_RESTORATION_ERROR:
      return Object.assign({}, state, {
        isEmailRestorationError: action.isEmailRestorationError,
        error: action.error
      });

    default:
      return state;
  }
}
