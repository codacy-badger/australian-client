import React, { Component } from "react";
import PropTypes from "prop-types";
import ResultAlert from "../common/alert/ResultAlert";
import Submit from "../common/button/Submit";
import HelpBlock from "../common/help/HelpBlock";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCheckCircle, faExclamationTriangle, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { register } from "../../actions/registerActions";
import { translate } from "react-i18next";

library.add(faInfoCircle, faCheckCircle, faExclamationTriangle, faSignInAlt);

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: "",
      email: "",
      modal: false,
      password: "",
      read: false,
      warning: false
    };

    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleCgu = this.toggleCgu.bind(this);
  }

  accept() {
    this.setState({
      read: true,
      warning: false
    });
    this.toggleCgu();
  }
  
  decline() {
    this.setState({
      read: false,
      warning: true
    });
    this.toggleCgu();
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

    const { register } = this.props;
    const { confirmation, email, password, read } = this.state;

    this.setState({
      warning: !read
    });

    //FIXME Validation job is not done.
    if (read && email && password && password === confirmation) {
      register(email, password);
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleCgu() {
    this.setState({
      modalCgu: !this.state.modalCgu
    });
  }


  render() {
    const { confirmation, email, modal, modalCgu, read, password, warning } = this.state;
    const { error, isRegisterPending, isRegisterSuccess, isRegisterError, nextStep, t } = this.props;

    return (
      <div>
        <Modal isOpen={modal} toggle={this.toggle} size="lg">
          <Form onSubmit={this.onSubmit}>
            <ModalHeader toggle={this.toggleRegisterModal}>
              <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation={270} /> {t("navbar.user-register")}
            </ModalHeader>
            <ModalBody>
              <ResultAlert
                code="register"
                isError={isRegisterError}
                isSuccess={isRegisterSuccess}
                error={error}
                success={nextStep}
              />
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
                  {/* TODO Create a component which evaluate password strength */}
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
                    placeholder={t("form.register.password-confirmation-placeholder")}
                    required
                    onChange={this.onChange}
                    value={confirmation}
                  />
                  {password === confirmation &&
                    "" === password && (
                    <HelpBlock>{t("form.register.password-confirmation-helpBlock")}</HelpBlock>
                    )}
                  {password !== confirmation &&
                    ("" !== password || "" !== confirmation) && (
                      <HelpBlock color="warning">{t("message.password-not-confirmed")}</HelpBlock>
                    )}
                  {password === confirmation &&
                    ("" !== password || "" !== confirmation) && (
                      <HelpBlock color="success">{t("message.password-confirmed")}</HelpBlock>
                    )}
                </Col>
              </FormGroup>
              <FormGroup check>
                <Col sm={{size:8, offset:4}}>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="read"
                      id="read"
                      checked={read}
                      required
                      onChange={this.onChange}
                    />
                    <a href={"#"} onClick={this.toggleCgu}>{t("form.register.read.label")}</a>
                  </Label>
                  {warning && !read && (
                    <HelpBlock color="warning">{t("form.register.read.helpBlock")}</HelpBlock>
                  )}
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Submit
                icon="sign-in-alt"
                name="register"
                isPending={isRegisterPending}
                isSuccess={isRegisterSuccess}
                onClick={this.onSubmit}
                rotation={270}
              />{" "}
              <Button color="secondary" onClick={this.toggle}>
                {t("button.cancel")}
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
        <Modal isOpen={modalCgu} toggle={this.toggleCgu}>
          <ModalHeader>CGU</ModalHeader>
          <ModalBody>Bla bla</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.accept}>Accept</Button>
            <Button color="secondary" onClick={this.decline}>Decline</Button>
          </ModalFooter>
        </Modal>
      </div>
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
