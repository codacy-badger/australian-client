import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate, Trans } from "react-i18next";
import Header from "./components/common/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import ReduxToastr from "react-redux-toastr";

class App extends Component {
  componentDidUpdate() {
    const { t, isJustAuthenticated } = this.props;

    if (isJustAuthenticated) {
      toastr.success(t("message.login-successful"), t("message.welcome-back"));
    }
  }

  render() {
    const { t } = this.props;

    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <h2>{t("title")}</h2>
        </div>
        <div className="App-intro">
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div>{t("description.part2")}</div>
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
  isJustAuthenticated: PropTypes.bool.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isJustAuthenticated: state.authReducer.sendMessage
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     //login: (email, password) => dispatch(login(email, password))
//   };
// }

export default connect(
  mapStateToProps,
  null
)(translate("translations")(App));
