import React, { Component } from "react";
import PropTypes from "prop-types";
import {Alert, Button} from "reactstrap";
import { translate, Trans } from "react-i18next";

class StatusAlert extends Component {
  hasError() {
    const { isError, isUnloadable } = this.props.status;

    return isError || isUnloadable;
  }

  getColor() {
    const { isSuccess } = this.props.status;

    return this.hasError() ? "danger" : isSuccess ? "success" : "info";
  }

  getKey() {
    const {
      code,
      status: { error, isSuccess, success }
    } = this.props;

    if (this.hasError() && error && error.code) {
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
      status: { error, isSuccess, success },
      t
    } = this.props;

    if (this.hasError() && error && error.message) {
      return error.message;
    }
    if (isSuccess && success && success.message) {
      return success.message;
    }

    return t("help." + code);
  }

  shouldReload() {
    const {isUnloadable} = this.props.status;
    const {onReload} = this.props;

    return isUnloadable && typeof onReload === "function";
  }

  renderReload() {
    const {isLoading} = this.props.status;
    const {onReload, t} = this.props;

    return (
      <Button onClick={onReload} size="sm" color="danger" className="ml-1" disabled={isLoading}>
        {t("button.retry")}
      </Button>
    );
  }

  render() {
    const key = this.getKey();

    return (
      <Alert color={this.getColor()} className="text-center">
        {null !== key && <Trans i18nKey={key}>{this.getMessage()}</Trans>}
        {null === key && this.getMessage()}
        {this.shouldReload() && this.renderReload()}
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
    isUnloadable: PropTypes.bool,
    success: PropTypes.object.isRequired
  }).isRequired,
  onReload: PropTypes.func,
  t: PropTypes.func.isRequired
};

StatusAlert.defaultProps = {
  status: {
    isUnloadable: false
  }
};

export default translate("translations")(StatusAlert);
