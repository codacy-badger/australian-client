import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function deleteAccountReducer(state = initialState.deleteAccount, action) {
  switch (action.type) {
    case types.SET_DELETE_ACCOUNT_PENDING:
      return Object.assign({}, state, {
        isDeleteAccountPending: action.isDeleteAccountPending
      });

    case types.SET_DELETE_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        isDeleteAccountSuccess: action.isDeleteAccountSuccess,
        nextStep: action.nextStep
      });

    case types.SET_DELETE_ACCOUNT_ERROR:
      return Object.assign({}, state, {
        isDeleteAccountError: action.isDeleteAccountError,
        error: action.error
      });

    default:
      return state;
  }
}
