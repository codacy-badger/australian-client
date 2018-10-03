import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "./abstract/FormTextGroup";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUser);

const UserNameFormGroup = (props) => {
  return <FormTextGroup helpBlock icon="user" {...props} required />;
};

UserNameFormGroup.defaultProps = {
  disabled: false
};

UserNameFormGroup.propTypes = {
  disabled: PropTypes.bool
};

export default UserNameFormGroup;
