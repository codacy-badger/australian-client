import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function lastDogReducer(state = initialState.lastDog, action) {
  switch (action.type) {
    case types.SET_LAST_DOG_LOADING:
      return Object.assign({}, state, {
        isLastDogLoading: action.isLastDogLoading
      });

    case types.SET_LAST_DOG_LOADED:
      return Object.assign({}, state, {
        isLastDogLoaded: action.isLastDogLoaded,
        dogs: action.dogs
      });

    case types.SET_LAST_DOG_UNLOADABLE:
      if (action.isLastDogUnloadable) {
        return Object.assign({}, state, {
          isLastDogUnloadable: true,
          code: action.code,
          message: action.message
        });
      }
      return Object.assign({}, state, {
        isLastDogUnloadable: false
      });

    default:
      return state;
  }
}
