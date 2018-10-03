import React from "react";
import PropTypes from "prop-types";
import ProfileForm from "../../form/ProfileForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProfile, profileUpdate } from "../../../actions/profileActions";

class ProfileContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.actions.load();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.dir(values, "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    this.props.actions.profileUpdate(values);
  }

  render() {
    //status : error, is*4, success
    const { ...status } = this.props;

    return <ProfileForm {...status} onSubmit={this.onSubmit} />;
  }
}

// The propTypes.
ProfileContainer.propTypes = {
  error: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  success: PropTypes.object.isRequired
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
    initialValues: state.profileReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ load: getProfile, profileUpdate }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
