import * as types from "./actionTypes";
//import restorationActionApi from "../api/restorationApi";
import emailRestorationActionApi from "../api/mockEmailRestorationApi";

//Save update
function setEmailRestorationPending(isEmailRestorationPending) {
  return {
    type: types.SET_EMAIL_RESTORATION_PENDING,
    isEmailRestorationPending
  };
}

function setEmailRestorationSuccess(isEmailRestorationSuccess, success = {}) {
  return {
    type: types.SET_EMAIL_RESTORATION_SUCCESS,
    isEmailRestorationSuccess,
    success
  };
}

function setEmailRestorationError(isEmailRestorationError, error = {}) {
  return {
    type: types.SET_EMAIL_RESTORATION_ERROR,
    isEmailRestorationError,
    error
  };
}

export function emailRestore(data, dispatch) {
  return () => {
    dispatch(setEmailRestorationPending(true));
    dispatch(setEmailRestorationSuccess(false));
    dispatch(setEmailRestorationError(false));

    return emailRestorationActionApi.callEmailRestorationApi(data, (result) => {
      dispatch(setEmailRestorationPending(false));
      if (result.success) {
        dispatch(setEmailRestorationSuccess(true, result.success));
      } else {
        dispatch(setEmailRestorationError(true, result));
      }
    });
  };
}
