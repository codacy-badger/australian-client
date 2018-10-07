import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function addressReducer(state = initialState.address, action) {
  switch (action.type) {
    case types.SET_ADDRESS_LOADING:
      return Object.assign({}, state, {
        isAddressLoading: action.isAddressLoading
      });

    case types.SET_ADDRESS_LOADED:
      return Object.assign({}, state, {
        isAddressLoading: !action.isAddressLoaded,
        user: action.user
      });

    case types.SET_ADDRESS_UNLOADABLE:
      return Object.assign({}, state, {
        user: action.user
      });

    case types.SET_ADDRESS_PENDING:
      return Object.assign({}, state, {
        isAddressPending: action.isAddressPending
      });

    case types.SET_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isAddressSuccess: action.isAddressSuccess,
        user: action.user,
        success: action.success
      });

    case types.SET_ADDRESS_ERROR:
      return Object.assign({}, state, {
        isAddressError: action.isAddressError,
        error: action.error
      });

    default:
      return state;
  }
}
