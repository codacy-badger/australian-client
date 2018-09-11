import React, { Component } from "react";
import PropTypes from "prop-types";
import {Input} from "reactstrap";
import { translate } from "react-i18next";


class InputLoading extends Component {
  render() {
    const {isLoading, t, ...other} = this.props;

    if (isLoading) {
      return <Input {...other} value={t("message.loading")} disabled />;
    }
    return (
      <Input {...other} />
    );
  }
}

InputLoading.defaultProps = {
  isLoading: true
};

// The propTypes.
InputLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate("translations")(InputLoading);
