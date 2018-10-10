import React from "react";
import PropTypes from "prop-types";
import FormCheckBoxGroup from "../formgroup/abstract/FormCheckBoxGroup";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { Form, FormText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { translate } from "react-i18next";

export const validate = (values) => {
  const errors = {};
  const { email, password } = values;

  if (email && !isEmail(email)) {
    errors.email = "email is not a valid email";
  }
  if (!email || isEmpty(email)) {
    errors.email = "email is required";
  }
  if (!password || isEmpty(password)) {
    errors.password = "password is required";
  }

  return errors;
};

const LoginForm = (props) => {
  const { handleSubmit, submitting, t } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="email" component={FormEmailGroup} disabled={submitting} isLoading={submitting} required />
      <Field name="password" component={FormPasswordGroup} disabled={submitting} isLoading={submitting} required>
        <FormText color="muted">
          <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-info" />
          <Link to="/forgot-your-password" title={t("link.forgot-your-password-title")}>
            {t("link.forgot-your-password")}
          </Link>
        </FormText>
      </Field>
      <Field name="remember" component={FormCheckBoxGroup} disabled={submitting} />
    </Form>
  );
};

// The propTypes.
LoginForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login",
  validate
})(translate(["translations", "validators"])(LoginForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
