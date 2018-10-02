import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./FormTextGroup";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAt);

const FormEmailGroup = (props) => {
  return <FormTextGroup type={"email"} {...props} />;
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
