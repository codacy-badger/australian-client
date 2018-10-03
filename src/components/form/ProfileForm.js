import React from "react";
import PropTypes from "prop-types";
import AdditionalNameFormGroup from "../formgroup/AdditionalNameFormGroup";
import FamilyNameFormGroup from "../formgroup/FamilyNameFormGroup";
import GivenNameFormGroup from "../formgroup/GivenNameFormGroup";
import JobTitleFormGroup from "../formgroup/JobTitleFormGroup";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import UsernameFormGroup from "../formgroup/UsernameFormGroup";
import { Form } from "reactstrap";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUser, faUserMd);

const ProfileForm = (props) => {
  const {
    values: {
      additionalName,
      familyName,
      givenName,
      jobTitle,
      name
    },
    error,
    form,
    isError,
    isLoading,
    isPending,
    isSuccess,
    success,
    onSubmit,
    onChange
  } = props;

  const fieldProps = { disabled: isPending || isLoading, onChange, onSubmit, form };

  return (
    <Form onSubmit={onSubmit}>
      <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
      <UsernameFormGroup value={name} {...fieldProps} />
      <GivenNameFormGroup value={givenName} {...fieldProps} />
      <AdditionalNameFormGroup value={additionalName} {...fieldProps} />
      <FamilyNameFormGroup value={familyName} {...fieldProps} />
      <JobTitleFormGroup value={jobTitle} {...fieldProps} />
      <div className="text-right">
        <Submit isPending={isPending} name="profile" onClick={onSubmit} />
      </div>
    </Form>
  );
};

// The propTypes.
ProfileForm.propTypes = {
  error: PropTypes.object.isRequired,
  form: formShape,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  success: PropTypes.object.isRequired,
  values: PropTypes.shape({
    additionalName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired,
    givenName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
};

// Redux connect begin here
export default ProfileForm;
