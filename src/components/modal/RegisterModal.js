import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate, Trans } from "react-i18next";
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
import {
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { register } from "../../actions/registerActions";
import Submit from "../common/button/Submit";

library.add(
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faSignInAlt,
);

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: "",
      confirmation: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { register } = this.props;
    const { email, password, confirmation } = this.state;

    if (password === confirmation) {
      register(email, password);
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { confirmation, email, modal, password } = this.state;
    const {
      error,
      isRegisterPending,
      isRegisterSuccess,
      isRegisterError,
      nextStep,
      t
    } = this.props;

    return (
      <Modal isOpen={modal} toggle={this.toggle} size="lg">
        <Form onSubmit={this.onSubmit}>
          <ModalHeader toggle={this.toggleRegisterModal}>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation={270} />{" "}
            {t("navbar.user-register")}
          </ModalHeader>
          <ModalBody>
            {isRegisterError && (
              <Alert color="danger" className="text-center">
                <Trans i18nKey={"error." + error.code}>{error.message}</Trans>
              </Alert>
            )}
            {isRegisterSuccess && (
              <Alert color="success" className="text-center">
                {t("message.register-successful")}
                <br />
                <Trans i18nKey={"message.register-nextStep." + nextStep.code}>
                  {nextStep.message}
                </Trans>
              </Alert>
            )}
            <FormGroup row>
              <Label for="registerEmail" sm={4}>
                {t("form.register.email")}
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="registerEmail"
                  placeholder={t("form.register.email-placeholder")}
                  value={email}
                  required
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerPassword" sm={4}>
                {t("form.register.password")}
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="registerPassword"
                  placeholder={t("form.register.password-placeholder")}
                  required
                  onChange={this.onChange}
                  value={password}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="registerPasswordConfirmation" sm={4}>
                {t("form.register.password-confirmation")}
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="confirmation"
                  id="registerPasswordConfirmation"
                  placeholder={t(
                    "form.register.password-confirmation-placeholder"
                  )}
                  required
                  onChange={this.onChange}
                  value={confirmation}
                />
                {password === confirmation &&
                  "" === password && (
                    <FormText color="muted">
                      <FontAwesomeIcon
                        fixedWidth
                        icon="info-circle"
                        className="mr-1"
                      />
                      {t("form.register.password-confirmation-helpBlock")}
                    </FormText>
                  )}
                {password !== confirmation &&
                  ("" !== password || "" !== confirmation) && (
                    <FormText color="warning">
                      <FontAwesomeIcon
                        fixedWidth
                        icon="exclamation-triangle"
                        className="mr-1"
                      />
                      {t("message.password-not-confirmed")}
                    </FormText>
                  )}
                {password === confirmation &&
                  ("" !== password || "" !== confirmation) && (
                    <FormText color="success">
                      <FontAwesomeIcon
                        fixedWidth
                        icon="check-circle"
                        className="mr-1"
                      />
                      {t("message.password-confirmed")}
                    </FormText>
                  )}
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Submit icon="sign-in-alt" name="register" isPending={isRegisterPending} isSuccess={isRegisterSuccess} submitCallback={this.onSubmit} rotation={270}/>
            {" "}
            <Button color="secondary" onClick={this.toggle}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

RegisterModal.propTypes = {
  error: PropTypes.object.isRequired,
  isRegisterPending: PropTypes.bool.isRequired,
  isRegisterSuccess: PropTypes.bool.isRequired,
  isRegisterError: PropTypes.bool.isRequired,
  nextStep: PropTypes.object.isRequired,
  onRef: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.registerReducer.error,
    isRegisterPending: state.registerReducer.isRegisterPending,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isRegisterError: state.registerReducer.isRegisterError,
    nextStep: state.registerReducer.nextStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: (email, password) => dispatch(register(email, password))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterModal)
);
