import React from "react";
import PropTypes from "prop-types";
import FormAllGroup from "./FormAllGroup";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faKey);

const FormPasswordGroup = (props) => {
  return <FormAllGroup type="password" {...props} />;
};

FormPasswordGroup.defaultProps = {
  disabled: false,
  helpBlock: false,
  icon: "key",
  required: false
};

FormPasswordGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired, //redux-form
  icon: PropTypes.string,
  helpBlock: PropTypes.bool,
  meta: PropTypes.object.isRequired //redux-form
};

export default FormPasswordGroup;
