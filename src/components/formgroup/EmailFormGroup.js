import React from "react";
import PropTypes from "prop-types";
import FormEmailGroup from "./FormEmailGroup";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAt);

const EmailFormGroup = (props) => {
  const { oldEmail, newEmail } = props;
  const fieldName = oldEmail ? "old-email" : newEmail ? "new-email" : "email";

  return <FormEmailGroup fieldName={fieldName} {...props} required />;
};

EmailFormGroup.defaultProps = {
  disabled: false,
  newEmail: false,
  oldEmail: false
};

EmailFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  newEmail: PropTypes.bool,
  oldEmail: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default EmailFormGroup;
