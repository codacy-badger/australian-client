import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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
import LanguageDropdown from './LanguageDropdown';
import {translate, Trans} from 'react-i18next';

library.add(faIdCardAlt, faSignOutAlt, faUser, faUserCog);

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {t} = this.props;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Trans i18nKey="navbar.brand">
            Australian shepherd
          </Trans>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <LanguageDropdown/>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon="user" fixedWidth /> User1
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <FontAwesomeIcon fixedWidth icon="id-card-alt" />{' '}
                  {t('navbar.user-profile')}
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon fixedWidth icon="user-cog" />{' '}
                  {t('navbar.user-settings')}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FontAwesomeIcon fixedWidth icon="sign-out-alt" />
                  {t('navbar.user-logout')}
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
  t: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default translate('translations')(Header);
