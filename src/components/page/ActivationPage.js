import React from "react";
import PropTypes from "prop-types";
import ActivationForm from "../form/ActivationForm";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";
import { activate } from "../../actions/activationActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ActivationPage = (props) => {
  const {
    actions: { activate },
    status
  } = props;

  const values = {
    activation: props.match.params.activationCode
  };

  return (
    <div>
      <Meta code="activation" />
      <Header />
      <Container className="mt-3 text-justify">
        <ActivationForm initialValues={values} status={status} onSubmit={activate} />
      </Container>
    </div>
  );
};

ActivationPage.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    status: {
      error: state.activationReducer.error,
      isError: state.activationReducer.isActivationError,
      isPending: state.activationReducer.isActivationPending,
      isSuccess: state.activationReducer.isActivationSuccess,
      success: state.activationReducer.nextStep
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ activate }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivationPage);
