import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

class RegisterForm extends Component {
  render() {
    return <div>Register form</div>;
  }
}

RegisterForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(RegisterForm);
