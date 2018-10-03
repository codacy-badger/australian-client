import React from "react";
import PropTypes from "prop-types";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import UserNameFormGroup from "../formgroup/UsernameFormGroup";
import { Form } from "reactstrap";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Field, reduxForm } from "redux-form";
import isEmpty from "validator/lib/isEmpty";

library.add(faUser, faUserMd);

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.name)) {
    errors.names = "name is required";
  }

  return errors;
};

const ProfileForm = (props) => {
  const { error, isLoading, isPending, isSuccess, isError, handleSubmit, success } = props;
  // const required = value => (value || typeof value === 'number' ? undefined : 'Required');
  // const fieldProps = { disabled: isPending || isLoading };

  return (
    <Form onSubmit={handleSubmit}>
      <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
      <Field name="name" type="text" component={UserNameFormGroup} />

      <div className="text-right">
        <Submit isPending={isPending} name="profile" onClick={handleSubmit} />
      </div>
    </Form>
  );
};

// The propTypes.
ProfileForm.propTypes = {
  error: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  success: PropTypes.object.isRequired
};

// Redux form begin here
export default reduxForm({
  form: "profile",
  validate: validate,
  onSubmit: () => {
    alert("SUB");
  }
})(ProfileForm);
