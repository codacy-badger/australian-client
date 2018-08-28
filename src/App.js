import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import ReduxToastr from "react-redux-toastr";
import HomePage from "./components/page/HomePage";
import Error404Page from "./components/page/Error404Page";
import ForgotPasswordPage from "./components/page/ForgotPasswordPage";

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

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/forgot-your-password" component={ForgotPasswordPage} />
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

// function mapDispatchToProps(dispatch) {
//   return {
//     //login: (email, password) => dispatch(login(email, password))
//   };
// }

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(translate("translations")(App))
);
