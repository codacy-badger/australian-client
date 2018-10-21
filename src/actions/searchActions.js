import * as types from "./actionTypes";
//import searchActionApi from "../api/searchApi";
import searchActionApi from "../api/mockSearchApi";
import initialState from "../reducers/initialState";

//Save update
function setSearchPending(isSearchPending) {
  return {
    type: types.SET_SEARCH_PENDING,
    isSearchPending
  };
}

function setSearchSuccess(isSearchSuccess, success = initialState.search.success) {
  return {
    type: types.SET_SEARCH_SUCCESS,
    isSearchSuccess,
    success
  };
}

function setSearchError(isSearchError, error = initialState.search.error) {
  return {
    type: types.SET_SEARCH_ERROR,
    isSearchError,
    error
  };
}

export function searchDog(data, dispatch) {
  return () => {
    dispatch(setSearchPending(true));
    dispatch(setSearchSuccess(false));
    dispatch(setSearchError(false));

    return searchActionApi.callSearchApi(data, (result) => {
      dispatch(setSearchPending(false));
      if (result.success) {
        dispatch(setSearchSuccess(true, result.success));
      } else {
        dispatch(setSearchError(true, result));
      }
    });
  };
}
