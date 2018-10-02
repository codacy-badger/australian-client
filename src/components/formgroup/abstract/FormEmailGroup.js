import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAt);

const FormEmailGroup = (props) => {
  const {required, ...otherProps} = props;

  const rules = {
    required,
    type: "string",
  };

  return <FormAllGroup type="email" rules={rules} {...otherProps} />;
};

FormEmailGroup.defaultProps = {
  disabled: false,
  fieldName: "email",
  formName: "general",
  helpBlock: false,
  icon: "at",
  required: false
};

FormEmailGroup.propTypes = {
  disabled: PropTypes.bool,
  helpBlock: PropTypes.bool,
  icon: PropTypes.string,
  fieldName: PropTypes.string,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default FormEmailGroup;
