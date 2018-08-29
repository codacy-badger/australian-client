import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import { translate, Trans } from "react-i18next";

class StatusAlert extends Component {
  render() {
    const { code, error, isError, isSuccess, success, t } = this.props;

    //Calculation
    const color = isError ? "danger" : isSuccess ? "success" : "info";
    const key = isError ? "error." + error.code : isSuccess ? "message." + code + "." + success.code : null;
    const message = isError ? error.message : isSuccess ? success.message : t("help." + code);

    return (
      <Alert color={color} className="text-center">
        {null !== key && <Trans i18nKey={key}>{message}</Trans>}
        {null === key && message}
      </Alert>
    );
  }
}

StatusAlert.propTypes = {
  code: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(StatusAlert);
