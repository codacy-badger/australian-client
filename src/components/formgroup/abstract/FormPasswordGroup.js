import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./FormTextGroup";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faKey);

const FormPasswordGroup = (props) => {
  return <FormTextGroup type={"password"} {...props} />;
};

FormPasswordGroup.defaultProps = {
  disabled: false,
  icon: "key"
};

FormPasswordGroup.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default FormPasswordGroup;
