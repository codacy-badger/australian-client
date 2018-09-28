import React from "react";
import PropTypes from "prop-types";
import StatusAlert from "../common/alert/StatusAlert";
import HelpBlock from "../common/help/HelpBlock";
import AdditionalNameFormGroup from "../formgroup/AdditionalNameFormGroup";
import FamilyNameFormGroup from "../formgroup/FamilyNameFormGroup";
import GivenNameFormGroup from "../formgroup/GivenNameFormGroup";
import InputGroupIcon from "../common/input/InputGroupIcon";
import Submit from "../common/button/Submit";
import UsernameFormGroup from "../formgroup/UsernameFormGroup";
import { Col, Form, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

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
    onChange,
    t
  } = props;

  return (
    <Form onSubmit={onSubmit}>
      <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
      <UsernameFormGroup value={name} onChange={onChange} onSubmit={onSubmit} form={form} />
      <GivenNameFormGroup value={givenName} onChange={onChange} onSubmit={onSubmit} form={form} />
      <AdditionalNameFormGroup value={additionalName} onChange={onChange} onSubmit={onSubmit} form={form} />
      <FamilyNameFormGroup value={additionalName} onChange={onChange} onSubmit={onSubmit} form={form} />
      <FormGroup row>
        <Label for="jobTitle" sm={4}>
          {t("form.profile.jobTitle.label")}
        </Label>
        <Col sm={8}>
          <InputGroup>
            <InputGroupIcon icon="user-md" />
            <Input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder={t("form.profile.jobTitle.placeholder")}
              value={jobTitle}
              required
              onChange={onChange}
            />
          </InputGroup>
          <HelpBlock>{t("form.profile.jobTitle.helpBlock")}</HelpBlock>
        </Col>
      </FormGroup>
      <Submit isPending={isPending} name="profile" onClick={onSubmit} />
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
  t: PropTypes.func.isRequired
};

// Redux connect begin here
export default translate("translations")(ProfileForm);
