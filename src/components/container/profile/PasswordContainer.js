import React from "react";
import PropTypes from "prop-types";
import PasswordForm from "../../form/PasswordForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { passwordUpdate } from "../../../actions/passwordActions";
import { translate } from "react-i18next";

const PasswordContainer = (props) => {
  const { actions, status, t, ...formProps } = props;
  const { isPending } = status;

  return (
    <div>
      <h2>{t("title.profile-password")}</h2>
      <StatusAlert code="profile-password" status={status} />
      <PasswordForm {...formProps} isPending={isPending} onSubmit={actions.passwordUpdate} />
    </div>
  );
};

// The propTypes.
PasswordContainer.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.passwordReducer.error,
      isError: state.passwordReducer.isPasswordError,
      isPending: state.passwordReducer.isPasswordPending,
      isSuccess: state.passwordReducer.isPasswordSuccess,
      success: state.passwordReducer.success
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ passwordUpdate }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translate()(PasswordContainer));
