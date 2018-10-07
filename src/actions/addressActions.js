import * as types from "./actionTypes";
//import addressActionApi from "../api/addressApi";
import addressActionApi from "../api/mockAddressApi";
import initialState from "../reducers/initialState";

//Initial retrieve
function setAddressLoading(isAddressLoading) {
  return {
    type: types.SET_ADDRESS_LOADING,
    isAddressLoading
  };
}

function setAddressLoaded(isAddressLoaded, user = initialState.address.user) {
  return {
    type: types.SET_ADDRESS_LOADED,
    isAddressLoaded,
    user
  };
}

function setAddressUnloadable(isAddressUnloadable, message = "Unkonwn error") {
  return {
    type: types.SET_ADDRESS_UNLOADABLE,
    isAddressUnloadable,
    message
  };
}

//Save update
function setAddressPending(isAddressPending) {
  return {
    type: types.SET_ADDRESS_PENDING,
    isAddressPending
  };
}

function setAddressMessagePrinted(sendMessage) {
  return {
    type: types.SET_ADDRESS_MESSAGE_PRINTED,
    sendMessage
  };
}

function setAddressSuccess(isAddressSuccess, user = initialState.address.user, success = initialState.address.success) {
  return {
    type: types.SET_ADDRESS_SUCCESS,
    isAddressSuccess,
    user,
    success
  };
}

function setAddressError(isAddressError, error = initialState.address.error) {
  return {
    type: types.SET_ADDRESS_ERROR,
    isAddressError,
    error
  };
}

export function updateAddress(data) {
  return (dispatch) => {
    dispatch(setAddressPending(true));
    dispatch(setAddressSuccess(false, data));
    dispatch(setAddressError(false));

    addressActionApi.callUpdateAddressApi(data, (result) => {
      dispatch(setAddressPending(false));
      if (result.success) {
        dispatch(setAddressSuccess(true, result.user, result.success));
        setTimeout(() => {
          dispatch(setAddressMessagePrinted(false));
        }, 1000);
      } else {
        dispatch(setAddressError(true, result.error));
      }
    });
  };
}

export function getAddress() {
  return (dispatch) => {
    dispatch(setAddressLoading(true));
    addressActionApi.callGetAddressApi((result) => {
      dispatch(setAddressLoading(false));
      if (result.success) {
        dispatch(setAddressLoaded(true, result.user));
        // dispatch(setAddressSuccess(true, result.user, result.success));
      } else {
        dispatch(setAddressUnloadable(true, result.message));
      }
    });
  };
}
