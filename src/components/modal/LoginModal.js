import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "../form/LoginForm";
import Submit from "../common/button/Submit";
import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createForm, formShape } from "rc-form";
import { connect } from "react-redux";
import { faInfoCircle, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../actions/authActions";
import { translate } from "react-i18next";

library.add(faInfoCircle, faSignInAlt);

//TODO Create a LoginContainer
//TODO isSuccess is probably nether useful and should be removed from login redux files.
class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

    this.props.form.validateFields((error) => {
      if (!error) {
        login(email, password, rememberMe);
      }
    });

    // this.setState({
    //   password: ""
    // });
  }

  render() {
    const { email, password, rememberMe } = this.state;
    const { error, form, isLoginPending, isLoginError, isOpen, t, toggle, warning } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
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
            form={form}
            isError={isLoginError}
            isPending={isLoginPending}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            password={password}
            rememberMe={rememberMe}
          />
        </ModalBody>
        <ModalFooter>
          <Submit icon="sign-in-alt" name="login" isPending={isLoginPending} onClick={this.onSubmit} />
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
  isLoginPending: PropTypes.bool.isRequired,
  isLoginSuccess: PropTypes.bool.isRequired,
  isLoginError: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  form: formShape,
  t: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
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
  )(createForm()(LoginModal))
);
