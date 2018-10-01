import { combineReducers } from "redux";
import activationReducer from "./activationReducer";
import authReducer from "./authReducer";
import deleteAccountReducer from "./deleteAccountReducer";
import emailReducer from "./emailReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import passwordReducer from "./passwordReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  activationReducer,
  authReducer,
  deleteAccountReducer,
  emailReducer,
  forgotPasswordReducer,
  passwordReducer,
  profileReducer,
  registerReducer,
  //TODO rename toastr to toastrReducer
  toastr: toastrReducer // <- Mounted at toastr.
});

export default rootReducer;
