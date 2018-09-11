import React, { Component } from "react";
import PropTypes from "prop-types";
import StatusAlert from "../../common/alert/StatusAlert";
import InputLoading from "../../common/input/InputLoading";
import HelpBlock from "../help/HelpBlock";
import Submit from "../../common/button/Submit";
import { connect } from "react-redux";
import { Col, Form, FormGroup, Label } from "reactstrap";
import { translate } from "react-i18next";
import { getProfile, profileUpdate } from "../../../actions/profileActions";

class ProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      additionalName: "",
      familyName: "",
      givenName: "",
      jobTitle: "",
      name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { name } = this.state;
    profileUpdate(name);
  }

  render() {
    const { error, isLoading, isPending, isSuccess, isError, success, t } = this.props;
    const { additionalName, familyName, givenName, jobTitle, name } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
        <FormGroup row>
          <Label for="name" sm={4}>
            {t("form.profile.name.label")}
          </Label>
          <Col sm={8}>
            <InputLoading
              type="text"
              name="name"
              id="Name"
              isLoading={isLoading}
              placeholder={t("form.profile.name.placeholder")}
              value={name}
              required
              onChange={this.onChange}
            />
            <HelpBlock>
                {t("form.profile.name.helpBlock")}
            </HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="givenName" sm={4}>
            {t("form.profile.givenName.label")}
          </Label>
          <Col sm={8}>
            <InputLoading
              type="text"
              name="givenName"
              id="givenName"
              isLoading={isLoading}
              placeholder={t("form.profile.givenName.placeholder")}
              value={givenName}
              required
              onChange={this.onChange}
            />
            <HelpBlock>
                {t("form.profile.givenName.helpBlock")}
            </HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="additionalName" sm={4}>
            {t("form.profile.additionalName.label")}
          </Label>
          <Col sm={8}>
            <InputLoading
              type="text"
              name="additionalName"
              id="AdditionalName"
              isLoading={isLoading}
              placeholder={t("form.profile.additionalName.placeholder")}
              value={additionalName}
              required
              onChange={this.onChange}
            />
            <HelpBlock>
                {t("form.profile.additionalName.helpBlock")}
            </HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="familyName" sm={4}>
            {t("form.profile.familyName.label")}
          </Label>
          <Col sm={8}>
            <InputLoading
              type="text"
              name="familyName"
              id="familyName"
              isLoading={isLoading}
              placeholder={t("form.profile.familyName.placeholder")}
              value={familyName}
              required
              onChange={this.onChange}
            />
            <HelpBlock>
                {t("form.profile.familyName.helpBlock")}
            </HelpBlock>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="jobTitle" sm={4}>
            {t("form.profile.jobTitle.label")}
          </Label>
          <Col sm={8}>
            <InputLoading
              type="text"
              name="jobTitle"
              id="jobTitle"
              isLoading={isLoading}
              placeholder={t("form.profile.jobTitle.placeholder")}
              value={jobTitle}
              required
              onChange={this.onChange}
            />
            <HelpBlock>
                {t("form.profile.jobTitle.helpBlock")}
            </HelpBlock>
          </Col>
        </FormGroup>
        <Submit isLoading={isLoading} isPending={isPending} isSuccess={isSuccess} name="profile" onClick={this.onSubmit}/>
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
  isLoading: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  jobTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {

  return {
    additionalName: state.profileReducer.user.additionalName,
    error: state.profileReducer.error,
    familyName: state.profileReducer.user.familyName,
    givenName: state.profileReducer.user.givenName,
    isError: state.profileReducer.isProfileError,
    isLoading: state.profileReducer.isProfileLoading,
    isPending: state.profileReducer.isProfilePending,
    isSuccess: state.profileReducer.isProfileSuccess,
    jobTitle: state.profileReducer.user.jobTitle,
    name: state.profileReducer.user.name,
    success: state.profileReducer.success
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: () => dispatch(getProfile()),
    profileUpdate: (name) => dispatch(profileUpdate(name))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm)
);
