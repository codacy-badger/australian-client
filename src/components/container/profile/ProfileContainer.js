import React from "react";
import PropTypes from "prop-types";
import ProfileForm from "../../form/ProfileForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProfile, updateProfile } from "../../../actions/profileActions";

class ProfileContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.actions.getProfile();
  }

  render() {

    return <ProfileForm {...this.props} onSubmit={this.props.actions.updateProfile} />;
  }
}

// The propTypes.
ProfileContainer.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.profileReducer.error,
      isError: state.profileReducer.isProfileError,
      isLoading: state.profileReducer.isProfileLoading,
      isPending: state.profileReducer.isProfilePending,
      isSuccess: state.profileReducer.isProfileSuccess,
      success: state.profileReducer.success
    },
    initialValues: state.profileReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProfile, updateProfile }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
