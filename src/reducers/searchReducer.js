import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case types.SET_SEARCH_PENDING:
      return Object.assign({}, state, {
        isSearchPending: action.isSearchPending
      });

    case types.SET_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isSearchSuccess: action.isSearchSuccess,
        success: action.success
      });

    case types.SET_SEARCH_ERROR:
      return Object.assign({}, state, {
        isSearchError: action.isSearchError,
        error: action.error
      });

    default:
      return state;
  }
}
