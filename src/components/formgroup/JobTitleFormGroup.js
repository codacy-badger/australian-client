import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./abstract/FormTextGroup";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserMd);

const JobTitleFormGroup = (props) => {
  return <FormTextGroup helpBlock icon="user" fieldName="jobTitle" formName="profile" {...props} />;
};

JobTitleFormGroup.defaultProps = {
  disabled: false
};

JobTitleFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default JobTitleFormGroup;
