import React from "react";
import PropTypes from "prop-types";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

import LanguageDropdown from "./LanguageDropdown";
import { translate, Trans } from "react-i18next";
import UserDropdown from "./UserDropdown";
import AnonymousDropdown from "./AnonymousDropdown";
import {connect} from "react-redux";

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
    const {isAuthenticated} = this.props;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Trans i18nKey="navbar.brand">Australian shepherd</Trans>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <LanguageDropdown />
            {!isAuthenticated && <AnonymousDropdown />}
            {isAuthenticated && <UserDropdown />}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
//  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     //login: (email, password) => dispatch(login(email, password))
//   };
// }

export default translate("translations")(connect(mapStateToProps, null)(Header));
