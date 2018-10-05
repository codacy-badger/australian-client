import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAt);

const FormEmailGroup = (props) => {
  return <FormAllGroup type="email" {...props} />;
};

FormEmailGroup.defaultProps = {
  disabled: false,
  helpBlock: false,
  icon: "at",
  required: false
};

FormEmailGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired, //redux-form
  icon: PropTypes.string,
  helpBlock: PropTypes.bool,
  meta: PropTypes.object.isRequired //redux-form
};

export default FormEmailGroup;
