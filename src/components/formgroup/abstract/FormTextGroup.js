import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { fieldInputPropTypes, fieldMetaPropTypes } from "redux-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAlignJustify);

const FormTextGroup = (props) => {
  return <FormAllGroup type="text" {...props} />;
};

FormTextGroup.defaultProps = {
  disabled: false,
  helpBlock: false,
  icon: "align-justify",
  isUnloadable: false,
  required: false
};

// The propTypes.
FormTextGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  helpBlock: PropTypes.bool,
  icon: PropTypes.string,
  input: PropTypes.shape(fieldInputPropTypes).isRequired, //redux-form
  isLoading: PropTypes.bool.isRequired,
  isUnloadable: PropTypes.bool.isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired //redux-form
};

export default FormTextGroup;
