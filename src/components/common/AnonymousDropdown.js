import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledDropdown
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../form/LoginForm";
import RegisterForm from "../form/RegisterForm";

library.add(faUserSecret, faSignInAlt);

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false
    };

    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  toggleRegisterModal() {
    this.setState({
      registerModal: !this.state.registerModal
    });
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <FontAwesomeIcon icon="user-secret" fixedWidth />{" "}
            {t("navbar.user-anonymous")}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.toggleLoginModal}>
              <FontAwesomeIcon fixedWidth icon="sign-in-alt" />{" "}
              {t("navbar.user-login")}
            </DropdownItem>
            <DropdownItem onClick={this.toggleRegisterModal}>
              <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation="270" />{" "}
              {t("navbar.user-register")}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Modal
          isOpen={this.state.loginModal}
          toggle={this.toggleLoginModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleLoginModal}>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" />{" "}
            {t("navbar.user-login")}
          </ModalHeader>
          <ModalBody>
            <LoginForm/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLoginModal}>
              {t("button.login")}
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleLoginModal}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.registerModal}
          toggle={this.toggleRegisterModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleRegisterModal}>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation="270" />{" "}
            {t("navbar.user-register")}
          </ModalHeader>
          <ModalBody>
            <RegisterForm/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleRegisterModal}>
              {t("button.register")}
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleRegisterModal}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

UserDropdown.propTypes = {
  t: PropTypes.func.isRequired
};
export default translate("translations")(UserDropdown);
