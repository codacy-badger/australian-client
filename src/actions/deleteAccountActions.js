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

export function deleteAccount(data, dispatch) {
  return () => {
    dispatch(setDeleteAccountPending(true));
    dispatch(setDeleteAccountError(false));

    const { password } = data;

    return deleteAccountActionApi.callDeleteAccountApi(password, (result) => {
      const { error, ...other} = result;
      dispatch(setDeleteAccountPending(false));
      if (error) {
        dispatch(setDeleteAccountError(true, other));
      } else {
        dispatch(setLogoutSuccess(true));
      }
    });
  };
}
