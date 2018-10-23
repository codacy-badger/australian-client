import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case types.SET_LOGIN_MESSAGE_PRINTED:
      return Object.assign({}, state, {
        sendLoginMessage: action.sendLoginMessage
      });

    case types.SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        isAuthenticated: action.isLoginSuccess,
        sendLoginMessage: action.isLoginSuccess,
        gravatar: action.auth.gravatar,
        username: action.auth.username,
        email: action.auth.email
      });

    case types.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoginError: action.isLoginError,
        error: action.error
      });

    case types.SET_LOGOUT_PENDING:
      return Object.assign({}, state, {
        isLogoutPending: action.isLogoutPending
      });

    case types.SET_LOGOUT_MESSAGE_PRINTED:
      return Object.assign({}, state, {
        sendLogoutMessage: action.sendLogoutMessage
      });

    case types.SET_LOGOUT_SUCCESS:
      if (action.isLogoutSuccess) {
        return Object.assign({}, state, {
          isLogoutSuccess: true,
          isAuthenticated: false,
          sendLogoutMessage: true,
          email: "",
          gravatar: false,
          username: ""
        });
      } else {
        return Object.assign({}, state, {
          isLogoutSuccess: false,
          sendLogoutMessage: false
        });
      }

    default:
      return state;
  }
}
