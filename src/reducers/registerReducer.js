import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function registerReducer(state = initialState.register, action) {
  switch (action.type) {
    case types.SET_REGISTER_PENDING:
      return Object.assign({}, state, {
        isRegisterPending: action.isRegisterPending
      });

    case types.SET_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegisterSuccess: action.isRegisterSuccess,
        nextStep: action.nextStep
      });

    case types.SET_REGISTER_ERROR:
      console.log(action);
      return Object.assign({}, state, {
        isRegisterError: action.isRegisterError,
        error: action.error
      });

    default:
      return state;
  }
}
