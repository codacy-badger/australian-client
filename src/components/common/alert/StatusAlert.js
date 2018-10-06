import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import { translate, Trans } from "react-i18next";

//TODO convert to stateless component
class StatusAlert extends Component {
  getColor() {
    const { isError, isSuccess } = this.props.status;

    return isError ? "danger" : isSuccess ? "success" : "info";
  }

  getKey() {
    const {
      code,
      status: { error, isError, isSuccess, success }
    } = this.props;

    if (isError && error && error.code) {
      return "error." + error.code;
    }

    if (isSuccess && success && success.code) {
      return "message." + code + "." + success.code;
    }

    return null;
  }

  getMessage() {
    const {
      code,
      status: { error, isError, isSuccess, success },
      t
    } = this.props;

    if (isError && error && error.message) {
      return error.message;
    }
    if (isSuccess && success && success.message) {
      return success.message;
    }

    return t("help." + code);
  }

  render() {
    const key = this.getKey();

    return (
      <Alert color={this.getColor()} className="text-center">
        {null !== key && <Trans i18nKey={key}>{this.getMessage()}</Trans>}
        {null === key && this.getMessage()}
      </Alert>
    );
  }
}

StatusAlert.propTypes = {
  code: PropTypes.string.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(StatusAlert);
