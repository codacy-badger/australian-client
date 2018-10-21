import { combineReducers } from "redux";
import accountActivationReducer from "./accountActivationReducer";
import addressReducer from "./addressReducer";
import authReducer from "./authReducer";
import deleteAccountReducer from "./deleteAccountReducer";
import emailActivationReducer from "./emailActivationReducer";
import emailReducer from "./emailReducer";
import emailRestorationReducer from "./emailRestorationReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import lastDogReducer from "./lastDogsReducer";
import notificationReducer from "./notificationsReducer";
import passwordReducer from "./passwordReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import searchReducer from "./searchReducer";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

//FIXME Replace toastrReducer by redux-notif https://github.com/indexiatech/re-notif

const rootReducer = combineReducers({
  accountActivationReducer,
  addressReducer,
  authReducer,
  deleteAccountReducer,
  emailReducer,
  emailActivationReducer,
  emailRestorationReducer,
  forgotPasswordReducer,
  lastDogReducer,
  notificationReducer,
  passwordReducer,
  profileReducer,
  registerReducer,
  searchReducer,
  toastr: toastrReducer, // <- Mounted at toastr.
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});

export default rootReducer;
