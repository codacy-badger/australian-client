import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Submit from "../common/button/Submit";

library.add(faSignInAlt);

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
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
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { login } = this.props;
    const { email, password } = this.state;

    login(email, password);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { email, modal, password } = this.state;
    const { error, isLoginPending, isLoginSuccess, isLoginError, t, warning } = this.props;

    return (
      <Modal isOpen={warning || modal} toggle={this.toggle}>
        <Form onSubmit={this.onSubmit}>
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
            <FormGroup row>
              <Label for="loginEmail" sm={4}>
                {t("form.login.email")}
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="loginEmail"
                  value={email}
                  placeholder="john.doe@example.org"
                  required
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>
                {t("form.login.password")}
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="loginPassword"
                  value={password}
                  placeholder={t("form.login.password-placeholder")}
                  required
                  onChange={this.onChange}
                />
                <FormText color="muted">
                  <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-info" />
                  <Link to="/forgot-your-password" title={t("link.forgot-your-password-title")} onClick={this.toggle}>
                    {t("link.forgot-your-password")}
                  </Link>
                </FormText>
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Submit
              icon="sign-in-alt"
              name="login"
              isPending={isLoginPending}
              isSuccess={isLoginSuccess}
              onClick={this.onSubmit}
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
        </Form>
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
    login: (email, password) => dispatch(login(email, password))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginModal)
);
