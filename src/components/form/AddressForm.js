import React, { Component } from "react";
import PropTypes from "prop-types";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import { connect } from "react-redux";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { translate } from "react-i18next";
import { profileUpdate } from "../../actions/profileActions";

class ProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      country: "",
      locality: "",
      latitude: "",
      longitude: "",
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
    const { error, isPending, isSuccess, isError, success, t } = this.props;
    const { country, locality, latitude, longitude } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <h2>{t("title.profile-address")}</h2>
        <StatusAlert code="profile" error={error} isError={isError} isSuccess={isSuccess} success={success} />
        <FormGroup row>
          <Label for="name" sm={4}>
            {t("form.profile.name")}
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="longitude"
              id="profileLongitude"
              placeholder={t("form.profile.longitude-placeholder")}
              value={longitude}
              required
              onChange={this.onChange}
            />
          </Col>
        </FormGroup>
        <Submit isPending={isPending} isError={isSuccess} name="profile" submitCallback={this.onSubmit} />
      </Form>
    );
  }
}

// The propTypes.
ProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  if (!!state.profileReducer.user) {
    //TODO Connected but user information loosed
  }
  return {
    additionalName: state.profileReducer.user.additionalName,
    familyName: state.profileReducer.user.familyName,
    givenName: state.profileReducer.user.givenName,
    isError: state.profileReducer.isProfileError,
    isPending: state.profileReducer.isProfilePending,
    isSuccess: state.profileReducer.isProfileSuccess,
    jobTitle: state.profileReducer.user.jobTitle,
    name: state.profileReducer.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileUpdate: (name) => dispatch(profileUpdate(name))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm)
);