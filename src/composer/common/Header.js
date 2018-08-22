import React from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";

import LanguageDropdown from "./LanguageDropdown";
import { translate, Trans } from "react-i18next";
import UserDropdown from "./UserDropdown";
import AnonymousDropdown from "./AnonymousDropdown";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Trans i18nKey="navbar.brand">Australian shepherd</Trans>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <LanguageDropdown />
            <AnonymousDropdown />
            <UserDropdown />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default translate("translations")(Header);
