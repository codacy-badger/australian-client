import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  //All tests will be done here.
  submit() {
    //TODO send API request
    //TODO disable launching button
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { t } = this.props;
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggleRegisterModal}>
          <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation={270} />{" "}
          {t("navbar.user-register")}
        </ModalHeader>
        <ModalBody>
          <Form>
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
                  required
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
                  name="password-confirmation"
                  id="registerPasswordConfirmation"
                  placeholder={t(
                    "form.register.password-confirmation-placeholder"
                  )}
                  required
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submit}>
            {t("button.register")}
          </Button>{" "}
          <Button color="secondary" onClick={this.toggle}>
            {t("button.cancel")}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

RegisterModal.propTypes = {
  t: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired
};

export default translate("translations")(RegisterModal);
