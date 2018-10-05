import React from "react";
import PropTypes from "prop-types";
import EmailForm from "../../form/EmailForm";
import StatusAlert from "../../common/alert/StatusAlert";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { emailUpdate } from "../../../actions/emailActions";
import { translate } from "react-i18next";

const EmailContainer = (props) => {
  const { actions, status, t, ...formProps } = props;
  const { isPending } = status;

  return (
    <div>
      <h2>{t("title.profile-email")}</h2>
      <StatusAlert code="profile-email" status={status} />
      <EmailForm {...formProps} isPending={isPending} onSubmit={actions.emailUpdate} />
    </div>
  );
};

// The propTypes.
EmailContainer.propTypes = {
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
      error: state.emailReducer.error,
      isError: state.emailReducer.isEmailError,
      isPending: state.emailReducer.isEmailPending,
      isSuccess: state.emailReducer.isEmailSuccess,
      success: state.emailReducer.success
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ emailUpdate }, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translate()(EmailContainer));
