import { combineReducers } from "redux";
import activationReducer from "./activationReducer";
import authReducer from "./authReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import registerReducer from "./registerReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  activationReducer,
  authReducer,
  forgotPasswordReducer,
  registerReducer,
  //TODO rename toastr to toastrReducer
  toastr: toastrReducer // <- Mounted at toastr.
});

export default rootReducer;
