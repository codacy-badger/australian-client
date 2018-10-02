import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./FormTextGroup";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faKey);

const FormConfirmationGroup = (props) => {
  return <FormTextGroup type={"confirmation"} {...props} />;
};

FormConfirmationGroup.defaultProps = {
  disabled: false,
  fieldName: "confirmation",
  formName: "general",
  helpBlock: false,
  icon: "key",
  required: false
};

FormConfirmationGroup.propTypes = {
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

export default FormConfirmationGroup;
