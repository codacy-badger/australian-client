import * as types from "./actionTypes";
import dogActionApi from "../api/dogApi";
//import dogActionApi from '../api/mockDogApi';
import { beginDogCall, dogCallError } from "./ajaxStatusActions";

export function loadDogSuccess(dogs) {
  return { type: types.DOGS_LOAD_SUCCESS, dogs };
}

export function loadDogs(page = 1, sizePerPage = 30) {
  return dispatch => {
    dispatch(beginDogCall());
    return dogActionApi
      .getAllDogs(page, sizePerPage)
      .then(dogs => {
        dispatch(loadDogSuccess(dogs));
      })
      .catch(error => {
        dispatch(dogCallError(error));
      });
  };
}
