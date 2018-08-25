import { combineReducers } from "redux";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  authReducer,
  registerReducer,
  //TODO rename toastr to toastrReducer
  toastr: toastrReducer // <- Mounted at toastr.
});

export default rootReducer;
