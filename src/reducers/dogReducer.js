import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dogReducer(state = initialState.dogs, action) {
    switch (action.type) {
        case types.DOGS_LOAD_SUCCESS:
            return Object.assign({}, state, action.dogs);
        case types.DOGS_CALL_ERROR:
            return Object.assign({}, state, {isErrorDog: true});
        default:
            return state;
    }
}