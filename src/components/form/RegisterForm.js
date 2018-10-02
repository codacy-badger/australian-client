import React from "react";
import PropTypes from "prop-types";
import ConfirmationFormGroup from "../formgroup/ConfirmationFormGroup";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import TosFormGroup from "../formgroup/TosFormGroup";
import { Form } from "reactstrap";
import { formShape } from "rc-form";

const RegisterForm = (props) => {
  const { confirmation, email, form, isPending, onChange, onClickCgu, onSubmit, password, read } = props;

  const fieldProps = { disabled: isPending, form, onChange, formName: "register" };

  return (
    <Form onSubmit={onSubmit}>
      <EmailFormGroup value={email} {...fieldProps} />
      <PasswordFormGroup value={password} {...fieldProps} />
      <ConfirmationFormGroup value={confirmation} password={password} {...fieldProps} />
      <TosFormGroup {...fieldProps} onClickCgu={onClickCgu} value={read} />
    </Form>
  );
};

RegisterForm.defaultProps = {
  isPending: false
};

// The propTypes.
RegisterForm.propTypes = {
  confirmation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  form: formShape,
  isPending: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClickCgu: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired
};

export default RegisterForm;
