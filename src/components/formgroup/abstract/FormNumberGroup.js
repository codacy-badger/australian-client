import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

//TODO change icon
library.add(faAlignJustify);

const FormNumberGroup = (props) => {
  return <FormAllGroup type="number" {...props} />;
};

FormNumberGroup.defaultProps = {
  disabled: false,
  helpBlock: false,
  icon: "align-justify",
  required: false
};

// The propTypes.
FormNumberGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  icon: PropTypes.string,
  helpBlock: PropTypes.bool,
  meta: PropTypes.object.isRequired //redux-form
};

export default FormNumberGroup;
