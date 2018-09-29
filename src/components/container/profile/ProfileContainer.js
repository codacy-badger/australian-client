import React from "react";
import PropTypes from "prop-types";
import LoadingJumbotron from "../../common/jumbotron/LoadingJumbotron";
import ProfileForm from "../../form/ProfileForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createForm } from "rc-form";
import { getProfile, profileUpdate } from "../../../actions/profileActions";

class ProfileContainer extends React.Component {
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      additionalName: nextProps.user.additionalName,
      familyName: nextProps.user.familyName,
      givenName: nextProps.user.givenName,
      jobTitle: nextProps.user.jobTitle,
      name: nextProps.user.name
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        this.props.actions.profileUpdate(this.state);
      }
    });
  }

  render() {
    const { isLoading, ...status } = this.props;
    delete status.user;

    if (isLoading) {
      return <LoadingJumbotron />;
    }

    return <ProfileForm {...this.state} {...status} onSubmit={this.onSubmit} onChange={this.onChange} />;
  }
}

// The propTypes.
ProfileContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    user: state.profileReducer.user,
    error: state.profileReducer.error,
    isError: state.profileReducer.isProfileError,
    isLoading: state.profileReducer.isProfileLoading,
    isPending: state.profileReducer.isProfilePending,
    isSuccess: state.profileReducer.isProfileSuccess,
    success: state.profileReducer.success
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getProfile());

  return {
    actions: bindActionCreators({ getProfile, profileUpdate }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(ProfileContainer));
