import React from "react";
import PropTypes from "prop-types";
import ProfileForm from "../../form/ProfileForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProfile } from "../../../actions/profileActions";
import { translate } from "react-i18next";

class ProfileContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.actions.getProfile();
  }

  render() {
    const { status, t } = this.props;
    const { isLoading, isPending } = status;

    return (
      <div>
        <h2>{t("title.profile-general")}</h2>
        <StatusAlert code="profile" status={status} />
        <ProfileForm isLoading={isLoading} isPending={isPending} />
      </div>
    );
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
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProfile }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileContainer)
);
