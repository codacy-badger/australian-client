import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function profileReducer(state = initialState.profile, action) {
  switch (action.type) {
    case types.SET_PROFILE_PENDING:
      return Object.assign({}, state, {
        isProfilePending: action.isProfilePending
      });

    case types.SET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isProfileSuccess: action.isProfileSuccess,
        success: action.success,
        user: action.user
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
