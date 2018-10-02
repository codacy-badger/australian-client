import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./abstract/FormTextGroup";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUser);

const GivenNameFormGroup = (props) => {
  return <FormTextGroup helpBlock icon="user" fieldName="givenName" formName="profile" {...props} />;
};

GivenNameFormGroup.defaultProps = {
  disabled: false
};

GivenNameFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default GivenNameFormGroup;
