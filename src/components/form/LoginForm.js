import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

class LoginForm extends Component {
  render() {
    return <div>Login form</div>;
  }
}

LoginForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(LoginForm);
