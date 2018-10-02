import React from "react";
import PropTypes from "prop-types";
import { formShape } from "rc-form";
import FormConfirmationGroup from "./abstract/FormConfirmationGroup";

const ConfirmationFormGroup = (props) => {
  const { password, ...others } = props;

  return <FormConfirmationGroup confirmation={password} {...others} />;
};

ConfirmationFormGroup.defaultProps = {
  disabled: false
};

ConfirmationFormGroup.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default ConfirmationFormGroup;
