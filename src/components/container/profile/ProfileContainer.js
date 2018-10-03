import React from "react";
import PropTypes from "prop-types";
import ProfileForm from "../../form/ProfileForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createForm } from "rc-form";
import { getProfile, profileUpdate } from "../../../actions/profileActions";

class ProfileContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoaded: false,
      additionalName: "",
      familyName: "",
      givenName: "",
      jobTitle: "",
      name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Used after data loading through api client.
  componentWillReceiveProps(nextProps) {
    const { isLoading } = this.props;
    const { isLoaded } = this.state;
    if (!isLoading && !isLoaded) {
      this.setState({
        isLoaded: true,
        additionalName: nextProps.user.additionalName,
        familyName: nextProps.user.familyName,
        givenName: nextProps.user.givenName,
        jobTitle: nextProps.user.jobTitle,
        name: nextProps.user.name
      });
    }
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
    const { ...status } = this.props;
    delete status.user;

    return <ProfileForm values={this.state} {...status} onSubmit={this.onSubmit} onChange={this.onChange} />;
  }
}

// The propTypes.
ProfileContainer.propTypes = {
  error: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired,
  user: PropTypes.object
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.profileReducer.error,
    isError: state.profileReducer.isProfileError,
    isLoading: state.profileReducer.isProfileLoading,
    isPending: state.profileReducer.isProfilePending,
    isSuccess: state.profileReducer.isProfileSuccess,
    success: state.profileReducer.success,
    user: state.profileReducer.user
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
