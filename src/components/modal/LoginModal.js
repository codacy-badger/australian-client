import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "../form/LoginForm";
import Submit from "../common/button/Submit";
import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faInfoCircle, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { login } from "../../actions/authActions";
import { submit } from "redux-form";
import { translate } from "react-i18next";

library.add(faInfoCircle, faSignInAlt);

//TODO Create a LoginContainer
class LoginModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, dispatch, status, isOpen, t, toggle, warning } = this.props;
    const { error, isError, isPending } = status;

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <FontAwesomeIcon fixedWidth icon="sign-in-alt" /> {t("navbar.user-login")}
        </ModalHeader>
        <ModalBody>
          {warning &&
            !isError && (
              <Alert color="warning" className="text-center">
                {t("message.please-login")}
              </Alert>
            )}
          {isError && (
            <Alert color="danger" className="text-center">
              {t("error." + error.code)}
            </Alert>
          )}
          <LoginForm isPending={isPending} onSubmit={actions.login} />
        </ModalBody>
        <ModalFooter>
          <Submit icon="sign-in-alt" name="login" isPending={isPending} onClick={() => dispatch(submit("login"))} />
          {warning || (
            <Button color="secondary" onClick={toggle}>
              {t("button.cancel")}
            </Button>
          )}
          {!warning || (
            <Link to="/" className="btn btn-secondary">
              {t("button.cancel")}
            </Link>
          )}
        </ModalFooter>
      </Modal>
    );
  }
}

LoginModal.defaultProps = {
  warning: false
};

LoginModal.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  toggle: PropTypes.func,
  warning: PropTypes.bool.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.authReducer.error,
      isPending: state.authReducer.isLoginPending,
      isError: state.authReducer.isLoginError
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ login }, dispatch)
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginModal)
);
