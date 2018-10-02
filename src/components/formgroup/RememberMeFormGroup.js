import React from "react";
import PropTypes from "prop-types";
import FormCheckBoxGroup from "./abstract/FormCheckBoxGroup";

const RememberMeFormGroup = (props) => {

  return <FormCheckBoxGroup fieldName="rememberMe" formName="login" {...props} />;
};

RememberMeFormGroup.defaultProps = {
  disabled: false
};

RememberMeFormGroup.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default RememberMeFormGroup;
