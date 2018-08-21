import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faIdCardAlt,
  faSignOutAlt,
  faUser,
  faUserCog
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {translate} from "react-i18next";

library.add(faIdCardAlt, faSignOutAlt, faUser, faUserCog);

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
    const { i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Australian Shepherd</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={() => changeLanguage('de')}>DE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => changeLanguage('en')}>EN</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon="user" fixedWidth /> User1
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <FontAwesomeIcon fixedWidth icon="id-card-alt" />{' '}
                  Profile&hellip;
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon fixedWidth icon="user-cog" />{' '}
                  Settings&hellip;
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FontAwesomeIcon fixedWidth icon="sign-out-alt" /> Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object
};

export default translate('translations')(Header);
