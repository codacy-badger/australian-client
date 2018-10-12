import AppStorage from "../tools/AppStorage";

export default {
  accountActivation: {
    error: {},
    isActivationPending: false,
    isActivationSuccess: false,
    isActivationError: false,
    nextStep: {}
  },
  address: {
    error: {},
    isAddressError: false,
    isAddressLoading: true,
    isAddressPending: false,
    isAddressSuccess: false,
    success: {},
    address: {
      latitude: 0,
      longitude: 45,
      city: "",
      country: ""
    }
  },
  deleteAccount: {
    error: {},
    isDeleteAccountPending: false,
    isDeleteAccountSuccess: false,
    isDeleteAccountError: false
  },
  email: {
    error: {},
    isEmailError: false,
    isEmailPending: false,
    isEmailSuccess: false,
    success: {}
  },
  emailActivation: {
    error: {},
    isActivationPending: false,
    isActivationSuccess: false,
    isActivationError: false,
    nextStep: {}
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
    isPasswordSuccess: true,
    success: {}
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
