import * as types from "./actionTypes";
//import profileActionApi from "../api/profileApi";
import profileActionApi from "../api/mockProfileApi";
import initialState from "../reducers/initialState";

//Initial retrieve
function setProfileLoading(isProfileLoading) {
  return {
    type: types.SET_PROFILE_LOADING,
    isProfileLoading
  };
}

function setProfileLoaded(isProfileLoaded, user = initialState.profile.user) {
  return {
    type: types.SET_PROFILE_LOADED,
    isProfileLoaded,
    user
  };
}

function setProfileUnloadable(isProfileUnloadable, message = "Unkonwn error") {
  return {
    type: types.SET_PROFILE_UNLOADABLE,
    isProfileUnloadable,
    message
  };
}

//Save update
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

function setProfileSuccess(isProfileSuccess, user = initialState.profile.user, success = initialState.profile.success) {
  return {
    type: types.SET_PROFILE_SUCCESS,
    isProfileSuccess,
    user,
    success
  };
}

function setProfileError(isProfileError, error = initialState.profile.error) {
  return {
    type: types.SET_PROFILE_ERROR,
    isProfileError,
    error
  };
}

export function isUsernameUnique(data) {
  return profileActionApi.isUsernameUnique(data);
}

export function updateProfile(data) {
  return (dispatch) => {
    dispatch(setProfilePending(true));
    dispatch(setProfileSuccess(false, data));
    dispatch(setProfileError(false));

    profileActionApi.callUpdateApi(data, (result) => {
      dispatch(setProfilePending(false));
      if (result.success) {
        dispatch(setProfileSuccess(true, result.user, result.success));
        setTimeout(() => {
          dispatch(setProfileMessagePrinted(false));
        }, 1000);
      } else {
        dispatch(setProfileError(true, result.error));
      }
    });
  };
}

export function profileAddressUpdate(data) {
  return (dispatch) => {
    dispatch(setProfilePending(true));
    dispatch(setProfileSuccess(false, data));
    dispatch(setProfileError(false));

    profileActionApi.callAddressUpdateApi(data, (result) => {
      dispatch(setProfilePending(false));
      if (result.success) {
        dispatch(setProfileSuccess(true, result.user, result.success));
        setTimeout(() => {
          dispatch(setProfileMessagePrinted(false));
        }, 1000);
      } else {
        dispatch(setProfileError(true, result.error));
      }
    });
  };
}

export function getProfile() {
  return (dispatch) => {
    dispatch(setProfileLoading(true));
    profileActionApi.callGetProfileApi((result) => {
      dispatch(setProfileLoading(false));
      if (result.success) {
        dispatch(setProfileLoaded(true, result.user));
        // dispatch(setProfileSuccess(true, result.user, result.success));
      } else {
        dispatch(setProfileUnloadable(true, result.message));
      }
    });
  };
}
