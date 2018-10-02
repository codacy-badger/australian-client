import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./abstract/FormTextGroup";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUser);

const AdditionalNameFormGroup = (props) => {
  return <FormTextGroup helpBlock icon="user" fieldName="additionalName" formName="profile" {...props} />;
};

AdditionalNameFormGroup.defaultProps = {
  disabled: false
};

AdditionalNameFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default AdditionalNameFormGroup;
