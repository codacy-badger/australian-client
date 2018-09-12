import React, { Component } from "react";
import PropTypes from "prop-types";
import StatusAlert from "../../common/alert/StatusAlert";
import HelpBlock from "../help/HelpBlock";
import Submit from "../../common/button/Submit";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import { translate } from "react-i18next";

class ProfileForm extends Component {
  render() {
    const {
      additionalName,
      familyName,
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
    } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
        <FormGroup row>
          <Label for="name" sm={4}>
            {t("form.profile.name.label")}
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="name"
              id="Name"
              placeholder={t("form.profile.name.placeholder")}
              value={name}
              required
              onChange={onChange}
            />
            <HelpBlock>{t("form.profile.name.helpBlock")}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="givenName" sm={4}>
            {t("form.profile.givenName.label")}
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="givenName"
              id="givenName"
              placeholder={t("form.profile.givenName.placeholder")}
              value={givenName}
              required
              onChange={onChange}
            />
            <HelpBlock>{t("form.profile.givenName.helpBlock")}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="additionalName" sm={4}>
            {t("form.profile.additionalName.label")}
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="additionalName"
              id="AdditionalName"
              placeholder={t("form.profile.additionalName.placeholder")}
              value={additionalName}
              required
              onChange={onChange}
            />
            <HelpBlock>{t("form.profile.additionalName.helpBlock")}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="familyName" sm={4}>
            {t("form.profile.familyName.label")}
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="familyName"
              id="familyName"
              placeholder={t("form.profile.familyName.placeholder")}
              value={familyName}
              required
              onChange={onChange}
            />
            <HelpBlock>{t("form.profile.familyName.helpBlock")}</HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="jobTitle" sm={4}>
            {t("form.profile.jobTitle.label")}
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder={t("form.profile.jobTitle.placeholder")}
              value={jobTitle}
              required
              onChange={onChange}
            />
            <HelpBlock>{t("form.profile.jobTitle.helpBlock")}</HelpBlock>
          </Col>
        </FormGroup>
        <Submit isPending={isPending} name="profile" onClick={onSubmit} />
      </Form>
    );
  }
}

// The propTypes.
ProfileForm.propTypes = {
  additionalName: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  familyName: PropTypes.string.isRequired,
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
