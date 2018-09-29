import { combineReducers } from "redux";
import activationReducer from "./activationReducer";
import authReducer from "./authReducer";
import deleteAccountReducer from "./deleteAccountReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  activationReducer,
  deleteAccountReducer,
  authReducer,
  forgotPasswordReducer,
  profileReducer,
  registerReducer,
  //TODO rename toastr to toastrReducer
  toastr: toastrReducer // <- Mounted at toastr.
});

export default rootReducer;
