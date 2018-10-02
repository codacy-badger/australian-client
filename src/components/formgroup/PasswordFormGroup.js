import React from "react";
import PropTypes from "prop-types";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import FormPasswordGroup from "./abstract/FormPasswordGroup";

library.add(faKey);

const PasswordFormGroup = (props) => {
  const { oldPassword, newPassword } = props;
  const fieldName = oldPassword ? "old-password" : newPassword ? "new-password" : "password";

  return <FormPasswordGroup {...props} fieldName={fieldName} required />;
};

PasswordFormGroup.defaultProps = {
  disabled: false,
  newPassword: false,
  oldPassword: false
};

PasswordFormGroup.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  form: formShape,
  newPassword: PropTypes.bool,
  oldPassword: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default PasswordFormGroup;
