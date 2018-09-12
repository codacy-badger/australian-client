import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function profileReducer(state = initialState.profile, action) {
  switch (action.type) {
    case types.SET_PROFILE_LOADING:
      return Object.assign({}, state, {
        isProfileLoading: action.isProfileLoading
      });

    case types.SET_PROFILE_LOADED:
      return Object.assign({}, state, {
        isProfileLoading: !action.isProfileLoaded,
        user: action.user
      });

    case types.SET_PROFILE_UNLOADABLE:
      return Object.assign({}, state, {
        user: action.user
      });

    case types.SET_PROFILE_PENDING:
      return Object.assign({}, state, {
        isProfilePending: action.isProfilePending
      });

    case types.SET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isProfileSuccess: action.isProfileSuccess,
        user: action.user,
        success: action.success
      });

    case types.SET_PROFILE_ERROR:
      return Object.assign({}, state, {
        isProfileError: action.isProfileError,
        error: action.error
      });

    default:
      return state;
  }
}
