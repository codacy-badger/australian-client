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

class LoginModal extends Component {
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
        <ModalHeader toggle={this.toggleLoginModal}>
          <FontAwesomeIcon fixedWidth icon="sign-in-alt" />{" "}
          {t("navbar.user-login")}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="loginEmail" sm={4}>
                {t("form.login.email")}
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="loginEmail"
                  placeholder="john.doe@example.org"
                  required
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
                  placeholder={t("form.login.password-placeholder")}
                  required
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submit}>
            {t("button.login")}
          </Button>{" "}
          <Button color="secondary" onClick={this.toggle}>
            {t("button.cancel")}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  t: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired
};

export default translate("translations")(LoginModal);
