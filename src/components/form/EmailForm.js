import React from "react";
import PropTypes from "prop-types";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import { translate } from "react-i18next";

export const validate = (values) => {
  const errors = {};

  if (values["old-email"] && !isEmail(values["old-email"])) {
    errors["old-email"] = "old-email is not a valid email";
  }
  if (values["new-email"] && !isEmail(values["new-email"])) {
    errors["new-email"] = "new-email is not a valid email";
  }
  if (!values["new-email"] || isEmpty(values["new-email"])) {
    errors["new-email"] = "new-email is required";
  }
  if (!values["old-email"] || isEmpty(values["old-email"])) {
    errors["old-email"] = "old-email is required";
  }

  return errors;
};

const EmailForm = (props) => {
  const { handleSubmit, isPending, pristine, reset, submitting } = props;

  const fieldProps = {
    disabled: isPending || submitting,
    isLoading: isPending || submitting
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field component={FormEmailGroup} {...fieldProps} name="old-email" required />
      <Field component={FormEmailGroup} {...fieldProps} name="new-email" required />

      <div className="text-right">
        <Reset disabled={pristine || submitting} onClick={reset} />
        <Submit isPending={isPending} name="profile-email" onClick={handleSubmit} />
      </div>
    </Form>
  );
};

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

// Redux form begin here
export default reduxForm({
  form: "profile-email",
  validate
})(translate("validators")(EmailForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
