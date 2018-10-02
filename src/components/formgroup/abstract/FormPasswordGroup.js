import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./FormTextGroup";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faKey);

const FormPasswordGroup = (props) => {
  const {children, ...otherProps} = props;

  return <FormTextGroup type={"password"} {...otherProps} >{children}</FormTextGroup>;
};

FormPasswordGroup.defaultProps = {
  disabled: false,
  fieldName: "password",
  formName: "general",
  helpBlock: false,
  icon: "key",
  required: false
};

FormPasswordGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  form: formShape,
  formName: PropTypes.string,
  helpBlock: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default FormPasswordGroup;
