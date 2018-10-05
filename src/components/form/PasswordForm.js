import React from "react";
import PropTypes from "prop-types";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import { translate } from "react-i18next";

const validate = (values) => {
  const errors = {};

  if (typeof values["new-password"] !== "string" || isEmpty(values["new-password"])) {
    errors["new-password"] = "new-password is required";
  }
  if (typeof values["old-password"] !== "string" || isEmpty(values["old-password"])) {
    errors["old-password"] = "old-password is required";
  }
  if (typeof values["confirmation"] !== "string" || isEmpty(values["confirmation"])) {
    errors["confirmation"] = "confirmation is required";
  }
  if (
    typeof values["confirmation"] === "string" &&
    typeof values["new-password"] === "string" &&
    values["new-password"] !== values["confirmation"]
  ) {
    errors["confirmation"] = "confirmation is different from password";
  }

  console.dir(errors, values);
  return errors;
};

const PasswordForm = (props) => {
  const { handleSubmit, isPending, pristine, reset, submitting } = props;

  const fieldProps = {
    disabled: isPending || submitting,
    isLoading: isPending || submitting
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field icon="key" component={FormPasswordGroup} {...fieldProps} name="old-password" required />
      <Field icon="key" component={FormPasswordGroup} {...fieldProps} name="new-password" required />
      <Field icon="key" component={FormPasswordGroup} {...fieldProps} name="confirmation" required />

      <div className="text-right">
        <Reset disabled={pristine || submitting} onClick={reset} />
        <Submit isPending={isPending} name="password" onClick={handleSubmit} />
      </div>
    </Form>
  );
};

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

// Redux form begin here
export default reduxForm({
  form: "profile-password",
  validate
})(translate("validators")(PasswordForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
