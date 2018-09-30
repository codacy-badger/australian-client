import React from "react";
import PropTypes from "prop-types";
import StatusAlert from "../common/alert/StatusAlert";
import AdditionalNameFormGroup from "../formgroup/AdditionalNameFormGroup";
import FamilyNameFormGroup from "../formgroup/FamilyNameFormGroup";
import GivenNameFormGroup from "../formgroup/GivenNameFormGroup";
import JobTitleFormGroup from "../formgroup/JobTitleFormGroup";
import Submit from "../common/button/Submit";
import UsernameFormGroup from "../formgroup/UsernameFormGroup";
import { Form } from "reactstrap";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUser, faUserMd);

const ProfileForm = (props) => {
  const {
    additionalName,
    familyName,
    form,
    givenName,
    jobTitle,
    name,
    error,
    isPending,
    isSuccess,
    isError,
    success,
    onSubmit,
    onChange
  } = props;
  //TODO disable all field during pending...
  return (
    <Form onSubmit={onSubmit}>
      <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
      <UsernameFormGroup value={name} onChange={onChange} onSubmit={onSubmit} form={form} />
      <GivenNameFormGroup value={givenName} onChange={onChange} onSubmit={onSubmit} form={form} />
      <AdditionalNameFormGroup value={additionalName} onChange={onChange} onSubmit={onSubmit} form={form} />
      <FamilyNameFormGroup value={familyName} onChange={onChange} onSubmit={onSubmit} form={form} />
      <JobTitleFormGroup value={jobTitle} onChange={onChange} onSubmit={onSubmit} form={form} />
      <div className="text-right">
        <Submit isPending={isPending} name="profile" onClick={onSubmit} />
      </div>
    </Form>
  );
};

// The propTypes.
ProfileForm.propTypes = {
  additionalName: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  familyName: PropTypes.string.isRequired,
  form: formShape,
  givenName: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  jobTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  success: PropTypes.object.isRequired
};

// Redux connect begin here
export default ProfileForm;
