import { combineReducers } from "redux";
import accountActivationReducer from "./accountActivationReducer";
import addressReducer from "./addressReducer";
import authReducer from "./authReducer";
import deleteAccountReducer from "./deleteAccountReducer";
import emailActivationReducer from "./emailActivationReducer";
import emailReducer from "./emailReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import passwordReducer from "./passwordReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  accountActivationReducer,
  addressReducer,
  authReducer,
  deleteAccountReducer,
  emailReducer,
  emailActivationReducer,
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
