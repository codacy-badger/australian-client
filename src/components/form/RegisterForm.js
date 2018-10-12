import React from "react";
import PropTypes from "prop-types";
import FormCheckBoxGroup from "../formgroup/abstract/FormCheckBoxGroup";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import { translate } from "react-i18next";

export const validate = (values) => {
  const errors = {};
  const { confirmation, email, password, read } = values;

  if (email && !isEmail(email)) {
    errors.email = "email is not a valid email";
  }

  if (!email || isEmpty(email)) {
    errors.email = "email is required";
  }

  if (!password || isEmpty(password)) {
    errors.password = "password is required";
  }

  if (!confirmation || isEmpty(confirmation)) {
    errors.confirmation = "confirmation is required";
  }

  if (confirmation && password && password !== confirmation) {
    errors.confirmation = "confirmation is different from password";
  }

  if (!read) {
    errors.read = "read is required";
  }

  return errors;
};

const RegisterForm = (props) => {
  const { handleSubmit, onClickTos, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" component={FormEmailGroup} disabled={submitting} isLoading={submitting} required />
      <Field name="password" component={FormPasswordGroup} disabled={submitting} isLoading={submitting} required />
      <Field name="confirmation" component={FormPasswordGroup} disabled={submitting} isLoading={submitting} required />
      <Field
        name="read"
        type="checkbox"
        component={FormCheckBoxGroup}
        disabled={submitting}
        isLoading={submitting}
        onClick={onClickTos}
        required
      />
    </Form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClickTos: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

//Redux-form
export default reduxForm({
  form: "register",
  validate
})(translate(["translations", "validators"])(RegisterForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
