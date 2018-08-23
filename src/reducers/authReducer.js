import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case types.SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        isAuthenticated: (typeof action.auth === "object") && (action.auth !== null),
        auth: action.auth
      });

    case types.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoginError: action.isLoginError,
        error: action.error
      });

    default:
      return state;
  }
}
