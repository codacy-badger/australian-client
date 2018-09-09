const user = !!localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : !!sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : false;

export default {
  activation: {
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
    auth: {
      user: user
    },
    error: {},
    isAuthenticated: !!localStorage.getItem("accessToken") || !!sessionStorage.getItem("accessToken"),
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: false,
    isLogoutPending: false,
    isLogoutSuccess: false,
    sendLoginMessage: false,
    sendLogoutMessage: false
  },
  profile: {
    error: {},
    isProfilePending: false,
    isProfileSuccess: false,
    isProfileError: false,
    success: {},
    user: user
  },
  register: {
    error: {},
    isRegisterPending: false,
    isRegisterSuccess: false,
    isRegisterError: false,
    nextStep: {}
  }
};
