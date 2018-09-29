import * as types from "./actionTypes";
//import deleteAccountActionApi from "../api/deleteAccountApi";
import deleteAccountActionApi from "../api/mockDeleteAccountApi";
import { setLogoutSuccess } from "./authActions";

function setDeleteAccountPending(isDeleteAccountPending) {
  return {
    type: types.SET_DELETE_ACCOUNT_PENDING,
    isDeleteAccountPending
  };
}

function setDeleteAccountSuccess(isDeleteAccountSuccess) {
  return {
    type: types.SET_DELETE_ACCOUNT_SUCCESS,
    isDeleteAccountSuccess
  };
}

function setDeleteAccountError(isDeleteAccountError, error = {}) {
  return {
    type: types.SET_DELETE_ACCOUNT_ERROR,
    isDeleteAccountError,
    error
  };
}

export function deleteAccount(deleteAccountCode) {
  return (dispatch) => {
    dispatch(setDeleteAccountPending(true));
    dispatch(setDeleteAccountSuccess(false));
    dispatch(setDeleteAccountError(false));

    deleteAccountActionApi.callDeleteAccountApi(deleteAccountCode, (result) => {
      dispatch(setDeleteAccountPending(false));
      if (result.error) {
        dispatch(setDeleteAccountError(true, result.error));
      } else {
        dispatch(setDeleteAccountSuccess(true));
        dispatch(setLogoutSuccess(true));
      }
    });
  };
}
