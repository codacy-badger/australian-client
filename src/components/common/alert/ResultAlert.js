import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import { translate, Trans } from "react-i18next";

class ResultAlert extends Component {
  getKey() {
    const { code, error, isError, isSuccess, success } = this.props;

    if (isError && error && error.code) {
      return "error." + error.code;
    }
    if (isSuccess && success && success.code) {
      return "message." + code + "." + success.code;
    }

    return null;
  }

  getMessage() {
    const { error, isError, isSuccess, success } = this.props;

    if (isError && error && error.message) {
      return error.message;
    }

    if (isSuccess && success && success.message) {
      return success.message;
    }

    return "";
  }
  render() {
    const { isError } = this.props;

    const message = this.getMessage();

    if ("" === message) {
      return <div />;
    }

    return (
      <Alert color={isError ? "danger" : "success"} className="text-center">
        <Trans i18nKey={this.getKey()}>{message}</Trans>
      </Alert>
    );
  }
}

ResultAlert.propTypes = {
  code: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired
};

export default translate("translations")(ResultAlert);
