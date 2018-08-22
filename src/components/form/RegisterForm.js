import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

class RegisterForm extends Component {

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  //All tests will be done here.
  submit() {
    alert('register submit function called');
  }

  render() {
    return <div>Register form</div>;
  }
}

RegisterForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(RegisterForm);
