import React from "react";
import PropTypes from "prop-types";
import EmailForm from "../../form/EmailForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { connect } from "react-redux";
import { translate } from "react-i18next";

const EmailContainer = (props) => {
  const { status, t } = props;

  return (
    <div>
      <h2>{t("title.profile-email")}</h2>
      <StatusAlert code="profile-email" status={status} />
      <EmailForm />
    </div>
  );
};

// The propTypes.
EmailContainer.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.emailReducer.error,
      isError: state.emailReducer.isEmailError,
      isSuccess: state.emailReducer.isEmailSuccess,
      success: state.emailReducer.success
    }
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps
)(translate()(EmailContainer));
