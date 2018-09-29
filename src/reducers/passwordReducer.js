import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function passwordReducer(state = initialState.password, action) {
  switch (action.type) {
    case types.SET_PASSWORD_PENDING:
      return Object.assign({}, state, {
        isPasswordPending: action.isPasswordPending
      });

    case types.SET_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        isPasswordSuccess: action.isPasswordSuccess,
        success: action.success
      });

    case types.SET_PASSWORD_ERROR:
      return Object.assign({}, state, {
        isPasswordError: action.isPasswordError,
        error: action.error
      });

    default:
      return state;
  }
}
