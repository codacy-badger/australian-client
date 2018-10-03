import React from "react";
import PropTypes from "prop-types";
import isEmpty from "validator/lib/isEmpty";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import UserNameFormGroup from "../formgroup/UsernameFormGroup";
import { Form } from "reactstrap";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Field, reduxForm } from "redux-form";

library.add(faUser, faUserMd);

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.name)) {
    errors.names = "name is required";
  }
  console.dir(values, errors, "<<<<<<<<<<<<<<<<<<<<=VALIDATE=================================");

  return errors;
};

const ProfileForm = (props) => {
  const { status, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <StatusAlert code="profile" status={status} />
      <Field name="name" type="text" component={UserNameFormGroup} isLoading={status.isPending || status.isLoading} />

      <div className="text-right">
        <Submit isPending={status.isPending} name="profile" onClick={handleSubmit} />
      </div>
    </Form>
  );
};

// The propTypes.
ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired
};

// Redux form begin here
export default reduxForm({
  form: "profile",
  validate
})(ProfileForm);
