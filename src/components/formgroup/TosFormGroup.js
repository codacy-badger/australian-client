import React from "react";
import PropTypes from "prop-types";
import FormCheckBoxGroup from "./abstract/FormCheckBoxGroup";
import { formShape } from "rc-form";

const TosFormGroup = (props) => {
  //otherProps : disabled form onChange value
  const { onClickCgu, ...otherProps } = props;

  return <FormCheckBoxGroup onClick={onClickCgu} fieldName="read" formName="register" {...otherProps} required />;
};

TosFormGroup.defaultProps = {
  disabled: false,
  isPending: false
};

TosFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  onClickCgu: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default TosFormGroup;
