import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  authReducer,
  toastr: toastrReducer // <- Mounted at toastr.
});

export default rootReducer;
