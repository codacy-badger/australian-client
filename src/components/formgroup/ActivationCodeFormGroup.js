import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./FormTextGroup";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faKey);

const ActivationCodeFormGroup = (props) => {
  return <FormTextGroup icon="key" fieldName="activationCode" formName="activation" {...props} required />;
};

ActivationCodeFormGroup.defaultProps = {
  disabled: false
};

ActivationCodeFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default ActivationCodeFormGroup;
