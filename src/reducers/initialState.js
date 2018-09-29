import AppStorage from "../tools/AppStorage";

export default {
  activation: {
    error: {},
    isActivationPending: false,
    isActivationSuccess: false,
    isActivationError: false,
    nextStep: {}
  },
  deleteAccount: {
    error: {},
    isDeleteAccountPending: false,
    isDeleteAccountSuccess: false,
    isDeleteAccountError: false
  },
  forgotPassword: {
    error: {},
    isForgotPasswordPending: false,
    isForgotPasswordSuccess: false,
    isForgotPasswordError: false,
    nextStep: {}
  },
  login: {
    username: AppStorage.getItem("username", ""),
    error: {},
    isAuthenticated: !!AppStorage.getItem("accessToken", false),
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: false,
    isLogoutPending: false,
    isLogoutSuccess: false,
    sendLoginMessage: false,
    sendLogoutMessage: false
  },
  password: {
    error: {},
    isPasswordError: false,
    isPasswordPending: false,
    isPasswordSuccess: false,
    success: {},
  },
  profile: {
    error: {},
    isProfileError: false,
    isProfileLoading: true,
    isProfilePending: false,
    isProfileSuccess: false,
    success: {},
    user: {
      additionalName: "",
      name: "",
      familyName: "",
      givenName: "",
      jobTitle: ""
    }
  },
  register: {
    error: {},
    isRegisterPending: false,
    isRegisterSuccess: false,
    isRegisterError: false,
    nextStep: {}
  }
};
