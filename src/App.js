import React, { Component } from "react";
import PropTypes from "prop-types";
import AccountActivationPage from "./components/page/AccountActivationPage";
import CguPage from "./components/page/TosPage";
import Error404Page from "./components/page/Error404Page";
import ForgotPasswordPage from "./components/page/ForgotPasswordPage";
import HomePage from "./components/page/HomePage";
import LoginPage from "./components/page/LoginPage";
import ProfilePage from "./components/page/ProfilePage";
import ReduxToastr from "react-redux-toastr";
import RegisterPage from "./components/page/RegisterPage";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { NonAuthenticatedRoute } from "./components/NonAuthenticatedRoute";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { translate } from "react-i18next";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import EmailActivationPage from "./components/page/EmailActivationPage";
import EmailRestorationPage from "./components/page/EmailRestorationPage";
import NotificationPage from "./components/page/NotificationPage";

class App extends Component {
  componentDidUpdate() {
    const { t, isJustAuthenticated, isJustDisconnected } = this.props;

    if (isJustAuthenticated) {
      toastr.success(t("message.login-successful"), t("message.welcome-back"));
    }
    if (isJustDisconnected) {
      toastr.success(t("message.logout-successful"), t("message.logout-successful-explanations"));
    }
  }

  //TODO https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a
  //TODO https://www.cookiebot.com/fr/cookie-consent/?utm_source=bing&utm_medium=cpc&utm_campaign=BING%3A%20FR%20-%20Generic&utm_content=FR%20-%20FR%20-%20Cookie%20Consent*
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/activate/account" component={AccountActivationPage} />
          <Route exact path="/activate/account/:activationCode" component={AccountActivationPage} />
          <Route exact path="/activate/email" component={EmailActivationPage} />
          <Route exact path="/activate/email/:activationCode" component={EmailActivationPage} />
          <Route exact path="/restore/email" component={EmailRestorationPage} />
          <Route exact path="/restore/email/:restorationCode" component={EmailRestorationPage} />
          <Route exact path="/forgot-your-password" component={ForgotPasswordPage} />
          <Route exact path="/tos" component={CguPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <NonAuthenticatedRoute exact path="/register" component={RegisterPage} />
          <NonAuthenticatedRoute exact path="/login" component={LoginPage} />
          <AuthenticatedRoute exact path="/profile/*" component={ProfilePage} />
          <Route path="*" component={Error404Page} />
        </Switch>
        <ReduxToastr
          preventDuplicates
          className="mt-5"
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    );
  }
}

App.propTypes = {
  isJustAuthenticated: PropTypes.bool.isRequired,
  isJustDisconnected: PropTypes.bool.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isJustAuthenticated: state.authReducer.sendLoginMessage || false,
    isJustDisconnected: state.authReducer.sendLogoutMessage || false
  };
}

export default withRouter(connect(mapStateToProps)(translate("translations")(App)));
