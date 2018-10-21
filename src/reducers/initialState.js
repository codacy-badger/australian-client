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
      setPosition: true,
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
  emailRestoration: {
    error: {},
    isEmailRestorationPending: false,
    isEmailRestorationSuccess: false,
    isEmailRestorationError: false,
    success: {}
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
  notification: {
    message: "",
    notifications: [],
    isNotificationLoaded: false,
    isNotificationLoading: false,
    isNotificationUnloadable: false
  },
  password: {
    error: {},
    isPasswordError: false,
    isPasswordPending: false,
    isPasswordSuccess: false,
    success: {}
  },
  profile: {
    error: {},
    isProfileError: false,
    isProfileLoading: true,
    isProfileLoaded: false,
    isProfilePending: false,
    isProfileSuccess: false,
    isProfileUnloadable: false,
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
