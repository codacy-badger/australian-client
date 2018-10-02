import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { formShape } from "rc-form";

library.add(faAlignJustify);

const FormTextGroup = (props) => {
  const {required, ...otherProps} = props;
  const rules = {
    required,
    type: "string",
  };

  return <FormAllGroup type="text" rules={rules} {...otherProps} />
};

FormTextGroup.defaultProps = {
  disabled: false,
  formName: "general",
  helpBlock: false,
  icon: "align-justify",
  required: false
};

// The propTypes.
FormTextGroup.propTypes = {
  children: PropTypes.any,
  confirmation: PropTypes.string.isRequired,
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

export default FormTextGroup;
