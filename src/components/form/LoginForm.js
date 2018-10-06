import React from "react";
import PropTypes from "prop-types";
import FormCheckBoxGroup from "../formgroup/abstract/FormCheckBoxGroup";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { FormText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { translate } from "react-i18next";

const validate = (values) => {
  const errors = {};

  if (typeof values["email"] === "string" && !isEmail(values["email"])) {
    errors["email"] = "email is not a valid email";
  }
  if (typeof values["email"] !== "string" || isEmpty(values["email"])) {
    errors["email"] = "email is required";
  }
  //FIXME !values.password
  if (typeof values["password"] !== "string" || isEmpty(values["password"])) {
    errors["password"] = "password is required";
  }

  return errors;
};

const LoginForm = (props) => {
  const { handleSubmit, submitting, isPending, t } = props;

  const fieldProps = {
    disabled: isPending || submitting,
    isLoading: isPending || submitting
  };

  //FIXME replace all Form by form or by a reduc-form component instead of reactstrap component
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" component={FormEmailGroup} {...fieldProps} required />
      <Field name="password" component={FormPasswordGroup} {...fieldProps} required>
        <FormText color="muted">
          <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-info" />
          <Link to="/forgot-your-password" title={t("link.forgot-your-password-title")}>
            {t("link.forgot-your-password")}
          </Link>
        </FormText>
      </Field>
      <Field name="remember" component={FormCheckBoxGroup} {...fieldProps} />
    </form>
  );
};

// The propTypes.
LoginForm.defaultProps = {
  isPending: false
};

LoginForm.propTypes = {
  isPending: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default reduxForm({
  form: "login",
  validate
})(translate(["translations", "validators"])(LoginForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
