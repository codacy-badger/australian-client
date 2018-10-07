import { combineReducers } from "redux";
import activationReducer from "./activationReducer";
import addressReducer from "./addressReducer";
import authReducer from "./authReducer";
import deleteAccountReducer from "./deleteAccountReducer";
import emailReducer from "./emailReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import passwordReducer from "./passwordReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  activationReducer,
  addressReducer,
  authReducer,
  deleteAccountReducer,
  emailReducer,
  forgotPasswordReducer,
  passwordReducer,
  profileReducer,
  registerReducer,
  toastr: toastrReducer, // <- Mounted at toastr.
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});

export default rootReducer;
