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

    //FIXME this only works when modal dialog is reopened.
    this.setState({
      password: ""
    });
  }

  render() {
    const { error, form, isPending, isError, isOpen, t, toggle, warning } = this.props;

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
          <LoginForm
            error={error}
            form={form}
            isError={isError}
            isPending={isPending}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            {...this.state}
          />
        </ModalBody>
        <ModalFooter>
          <Submit icon="sign-in-alt" name="login" isPending={isPending} onClick={this.onSubmit} />
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
  isPending: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  form: formShape,
  t: PropTypes.func.isRequired,
  toggle: PropTypes.func,
  warning: PropTypes.bool.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isPending: state.authReducer.isLoginPending,
    isError: state.authReducer.isLoginError,
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
