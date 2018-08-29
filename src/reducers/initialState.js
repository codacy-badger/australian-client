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
      user: !!localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : false
    },
    error: {},
    isAuthenticated: !!localStorage.getItem("accessToken"),
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: false,
    isLogoutPending: false,
    isLogoutSuccess: false,
    sendLoginMessage: false,
    sendLogoutMessage: false
  },
  register: {
    error: {},
    isRegisterPending: false,
    isRegisterSuccess: false,
    isRegisterError: false,
    nextStep: {}
  }
};
