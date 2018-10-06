import React from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sendMail } from "../../actions/forgotPasswordActions";
import ForgotPasswordForm from "../form/ForgotPasswordForm";

const ForgotPasswordPage = (props) => {
  const {
    actions: { sendMail },
    status
  } = props;

  return (
    <div>
      <Meta code="forgotten-password" />
      <Header />
      <Container className="mt-3 text-justify">
        <ForgotPasswordForm status={status} onSubmit={sendMail} />
      </Container>
    </div>
  );
};

// The propTypes.
ForgotPasswordPage.propTypes = {
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
      error: state.forgotPasswordReducer.error,
      isError: state.forgotPasswordReducer.isForgotPasswordError,
      isPending: state.forgotPasswordReducer.isForgotPasswordPending,
      isSuccess: state.forgotPasswordReducer.isForgotPasswordSuccess,
      success: state.forgotPasswordReducer.nextStep
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ sendMail }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordPage);
