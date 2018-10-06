import React from "react";
import PropTypes from "prop-types";
import { Form } from "reactstrap";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import { Field, reduxForm } from "redux-form";
import FormCheckBoxGroup from "../formgroup/abstract/FormCheckBoxGroup";
import { translate } from "react-i18next";

const validate = (values) => {
  const errors = {};
  const { confirmation, email, password, read } = values;

  if (email && !isEmail(values["email"])) {
    errors["email"] = "email is not a valid email";
  }

  if (!email || isEmpty(email)) {
    errors["email"] = "email is required";
  }

  if (!password || isEmpty(password)) {
    errors["password"] = "password is required";
  }

  if (!confirmation || isEmpty(confirmation)) {
    errors["confirmation"] = "confirmation is required";
  }

  if (confirmation && password && password !== confirmation) {
    errors["confirmation"] = "confirmation is required";
  }

  if (!read) {
    errors["read"] = "read is required";
  }

  return errors;
};

const RegisterForm = (props) => {
  const { handleSubmit, onClickTos, submitting, isPending } = props;

  const fieldProps = {
    disabled: isPending || submitting,
    isLoading: isPending || submitting
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" component={FormEmailGroup} {...fieldProps} required />
      <Field name="password" component={FormPasswordGroup} {...fieldProps} required />
      <Field name="confirmation" component={FormPasswordGroup} {...fieldProps} required />
      <Field name="read" type="checkbox" component={FormCheckBoxGroup} {...fieldProps} onClick={onClickTos} required />
    </Form>
  );
};

// The propTypes.
RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  onClickTos: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: "register",
  validate
})(translate(["translations", "validators"])(RegisterForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
