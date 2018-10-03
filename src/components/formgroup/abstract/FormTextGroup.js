import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAlignJustify);

const FormTextGroup = (props) => {
  return <FormAllGroup type="text" {...props} />;
};

FormTextGroup.defaultProps = {
  disabled: false,
  helpBlock: false,
  icon: "align-justify",
  required: false
};

// The propTypes.
FormTextGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  icon: PropTypes.string,
  helpBlock: PropTypes.bool,
  meta: PropTypes.object.isRequired //redux-form
};

export default FormTextGroup;
