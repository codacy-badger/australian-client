import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { Link } from "react-router-dom";
import LoginForm from "../form/LoginForm";
import Submit from "../common/button/Submit";

library.add(faInfoCircle, faSignInAlt);

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: "",
      rememberMe: false
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: "checkbox" === e.target.type ? e.target.checked : e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { login } = this.props;
    const { email, password, rememberMe } = this.state;

    login(email, password, rememberMe);

    this.setState({
      password: ""
    });
  }

  onClick(e) {
    e.preventDefault();
    this.loginForm.internalSubmit(e);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { email, modal, password, rememberMe } = this.state;
    const { error, isLoginPending, isLoginSuccess, isLoginError, t, warning } = this.props;

    return (
      <Modal isOpen={warning || modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggleLoginModal}>
          <FontAwesomeIcon fixedWidth icon="sign-in-alt" /> {t("navbar.user-login")}
        </ModalHeader>
        <ModalBody>
          {warning &&
            !isLoginError && (
              <Alert color="warning" className="text-center">
                {t("message.please-login")}
              </Alert>
            )}
          {isLoginError && (
            <Alert color="danger" className="text-center">
              {t("error." + error.code)}
            </Alert>
          )}
          <LoginForm
            email={email}
            error={error}
            password={password}
            rememberMe={rememberMe}
            isError={isLoginError}
            isPending={isLoginPending}
            isSuccess={isLoginSuccess}
            onChange={this.onChange}
            onRef={(ref) => (this.loginForm = ref)}
            onSubmit={this.onSubmit}
          />
        </ModalBody>
        <ModalFooter>
          <Submit
            icon="sign-in-alt"
            name="login"
            isPending={isLoginPending}
            isSuccess={isLoginSuccess}
            onClick={this.onClick}
          />
          {warning || (
            <Button color="secondary" onClick={this.toggle}>
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
  isLoginPending: PropTypes.bool.isRequired,
  isLoginSuccess: PropTypes.bool.isRequired,
  isLoginError: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  onRef: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  warning: PropTypes.bool.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isLoginPending: state.authReducer.isLoginPending,
    isLoginSuccess: state.authReducer.isLoginSuccess,
    isLoginError: state.authReducer.isLoginError,
    error: state.authReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password, remember) => dispatch(login(email, password, remember))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginModal)
);
