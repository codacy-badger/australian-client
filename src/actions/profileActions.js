import * as types from "./actionTypes";
//import profileActionApi from "../api/profileApi";
import profileActionApi from "../api/mockProfileApi";

function setProfilePending(isProfilePending) {
  return {
    type: types.SET_PROFILE_PENDING,
    isProfilePending
  };
}

function setProfileMessagePrinted(sendMessage) {
  return {
    type: types.SET_PROFILE_MESSAGE_PRINTED,
    sendMessage
  };
}

function setProfileSuccess(isProfileSuccess, profile = {}) {
  return {
    type: types.SET_PROFILE_SUCCESS,
    isProfileSuccess,
    profile
  };
}

function setProfileError(isProfileError, error = {}) {
  return {
    type: types.SET_PROFILE_ERROR,
    isProfileError,
    error
  };
}

export function profileUpdate(email, password) {
  return (dispatch) => {
    dispatch(setProfilePending(true));
    dispatch(setProfileSuccess(false));
    dispatch(setProfileError(false));

    profileActionApi.callUpdateApi(email, password, (result) => {
      dispatch(setProfilePending(false));
      if (result.token) {
        dispatch(setProfileSuccess(true, result));
        setTimeout(() => {
          dispatch(setProfileMessagePrinted(false));
        }, 1000);
      } else {
        dispatch(setProfileError(true, result));
      }
    });
  };
}

export function getProfile() {
  return (dispatch) => {
    dispatch(setProfilePending(true));
    dispatch(setProfileSuccess(false));
    dispatch(setProfileError(false));
    profileActionApi.callGetProfileApi((result) => {
      console.log('-+++++++++++++++++++++++');
      console.dir(result);
      dispatch(setProfilePending(false));
      if (result.success) {
        dispatch(setProfileSuccess(true, result));
      } else {
        dispatch(setProfileError(true, result));
      }
    });
  };
}
