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

function setDeleteAccountError(isDeleteAccountError, error = {}) {
  return {
    type: types.SET_DELETE_ACCOUNT_ERROR,
    isDeleteAccountError,
    error
  };
}

export function deleteAccount(data) {
  return (dispatch) => {
    dispatch(setDeleteAccountPending(true));
    dispatch(setDeleteAccountError(false));

    const {password} = data;

    deleteAccountActionApi.callDeleteAccountApi(password, (result) => {
      dispatch(setDeleteAccountPending(false));
      if (result.error) {
        dispatch(setDeleteAccountError(true, result.error));
      } else {
        dispatch(setLogoutSuccess(true));
      }
    });
  };
}
