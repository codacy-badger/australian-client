import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./FormTextGroup";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faAt);

//TODO move into subdirectory abstract
const FormEmailGroup = (props) => {
  return <FormTextGroup type={"email"} {...props} />;
};

FormEmailGroup.defaultProps = {
  disabled: false,
  icon: "at"
};

FormEmailGroup.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default FormEmailGroup;
