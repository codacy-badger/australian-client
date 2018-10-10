import React from "react";
import PropTypes from "prop-types";
import PasswordForm from "../../form/PasswordForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { connect } from "react-redux";
import { translate } from "react-i18next";

const PasswordContainer = (props) => {
  const { status, t } = props;

  return (
    <div>
      <h2>{t("title.profile-password")}</h2>
      <StatusAlert code="profile-password" status={status} />
      <PasswordForm />
    </div>
  );
};

// The propTypes.
PasswordContainer.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.passwordReducer.error,
      isError: state.passwordReducer.isPasswordError,
      isSuccess: state.passwordReducer.isPasswordSuccess,
      success: state.passwordReducer.success
    }
  };
}

//connect is returning a function, that explains the )(
export default connect(mapStateToProps)(translate()(PasswordContainer));
