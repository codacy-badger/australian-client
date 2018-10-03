import React from "react";
import PropTypes from "prop-types";
import isEmpty from "validator/lib/isEmpty";
import Reset from "../common/button/Reset";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import { Form } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { isUsernameUnique } from "../../actions/profileActions";
import { translate } from "react-i18next";

library.add(faUser, faUserMd);

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.name)) {
    errors.name = "name is required";
  }

  return errors;
};

const ProfileForm = (props) => {
  const { handleSubmit, pristine, reset, status, submitting } = props;
  const fieldProps = {
    isLoading: status.isPending || status.isLoading
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StatusAlert code="profile" status={status} />
      <Field icon="user" component={FormTextGroup} {...fieldProps} name="name" required />
      <Field icon="user" component={FormTextGroup} {...fieldProps} name="givenName" />
      <Field icon="user" component={FormTextGroup} {...fieldProps} name="familyName" />
      <Field icon="user-md" component={FormTextGroup} {...fieldProps} name="jobTitle" />

      <div className="text-right">
        <Reset disabled={pristine || submitting} onClick={reset} className="mr-1" />
        <Submit isPending={status.isPending} name="profile" onClick={handleSubmit} />
      </div>
    </Form>
  );
};

// The propTypes.
ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  submitting: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

// Redux form begin here
export default reduxForm({
  form: "profile",
  validate,
  asyncValidate: isUsernameUnique,
  asyncBlurFields: ["name"]
})(translate("validators")(ProfileForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
