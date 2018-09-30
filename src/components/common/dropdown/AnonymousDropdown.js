import React from "react";
import PropTypes from "prop-types";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "../../modal/LoginModal";
import RegisterModal from "../../modal/RegisterModal";

library.add(faUserSecret, faSignInAlt);

class AnonymousDropdown extends React.Component {
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
            <FontAwesomeIcon icon="user-secret" fixedWidth /> {t("navbar.user-anonymous")}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.toggleLoginModal}>
              <FontAwesomeIcon fixedWidth icon="sign-in-alt" /> {t("navbar.user-login")}
            </DropdownItem>
            <DropdownItem onClick={this.toggleRegisterModal}>
              <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation={270} /> {t("navbar.user-register")}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <LoginModal toggle={this.toggleLoginModal} isOpen={this.state.loginModal} />
        <RegisterModal toggle={this.toggleRegisterModal} isOpen={this.state.registerModal} />
      </div>
    );
  }
}

AnonymousDropdown.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(AnonymousDropdown);
