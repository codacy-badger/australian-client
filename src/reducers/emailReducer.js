import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function emailReducer(state = initialState.email, action) {
  switch (action.type) {
    case types.SET_EMAIL_PENDING:
      return Object.assign({}, state, {
        isEmailPending: action.isEmailPending
      });

    case types.SET_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        isEmailSuccess: action.isEmailSuccess,
        success: action.success
      });

    case types.SET_EMAIL_ERROR:
      return Object.assign({}, state, {
        isEmailError: action.isEmailError,
        error: action.error
      });

    default:
      return state;
  }
}
