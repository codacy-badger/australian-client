import React from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import ForgotPasswordForm from "../form/ForgotPasswordForm";

const ForgotPasswordPage = (props) => {
  return (
    <div>
      <Meta code="forgotten-password" />
      <Header />
      <Container className="mt-3 text-justify">
        <ForgotPasswordForm status={props} />
      </Container>
    </div>
  );
};

// The propTypes.
ForgotPasswordPage.propTypes = {
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
      error: state.forgotPasswordReducer.error,
      isError: state.forgotPasswordReducer.isForgotPasswordError,
      isSuccess: state.forgotPasswordReducer.isForgotPasswordSuccess,
      success: state.forgotPasswordReducer.nextStep
    }
  };
}

export default connect(
  mapStateToProps
)(ForgotPasswordPage);
