import * as types from "./actionTypes";
//import last_dogActionApi from "../api/lastDogApi";
import lastDogActionApi from "../api/mockLastDogApi";

//Initial retrieve
function setLastDogLoading(isLastDogLoading) {
  return {
    type: types.SET_LAST_DOG_LOADING,
    isLastDogLoading
  };
}

function setLastDogLoaded(isLastDogLoaded, dogs) {
  return {
    type: types.SET_LAST_DOG_LOADED,
    isLastDogLoaded,
    dogs
  };
}

function setLastDogUnloadable(isLastDogUnloadable, code, message) {
  return {
    type: types.SET_LAST_DOG_UNLOADABLE,
    isLastDogUnloadable,
    //We put message only if last_dog are Unloadable
    code,
    message
  };
}

export function getLastDog() {
  return (dispatch) => {
    dispatch(setLastDogLoading(true));
    dispatch(setLastDogUnloadable(false));
    lastDogActionApi.callGetLastDogApi((result) => {
      dispatch(setLastDogLoading(false));
      if (result.success) {
        dispatch(setLastDogLoaded(true, result.lastDogs));
      } else {
        dispatch(setLastDogUnloadable(true, result.code, result.message));
      }
    });
  };
}
