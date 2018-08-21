import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {translate} from 'react-i18next';

/**
 * Language dropdown
 */
class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);
    const {i18n} = this.props;
    this.toggle = this.toggle.bind(this);
    this.changeEn = this.changeEn.bind(this);
    this.changeFr = this.changeFr.bind(this);
    this.state = {
      dropdownOpen: false,
      language: i18n.language
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeEn() {
    const {i18n} = this.props;
    i18n.changeLanguage('en');
    this.setState({
      language: i18n.language
    });
  }

  changeFr() {
    const {i18n} = this.props;
    i18n.changeLanguage('fr');
    this.setState({
      language: i18n.language
    });
  }

  renderFlag() {
    if ('fr' === this.state.language) {
      return <span>FR</span>
    } else if ('en' === this.state.language) {
      return <span>EN</span>
    } else {
      return <span>Select language</span>
    }
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.renderFlag(this.state.language)}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Application language</DropdownItem>
          <DropdownItem active={'fr' === this.state.language} tag="button" onClick={this.changeFr}>
            Français
          </DropdownItem>
          <DropdownItem active={'en' === this.state.language} tag="button" onClick={this.changeEn}>
            English
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

// The propTypes.
LanguageDropdown.propTypes = {
  i18n: PropTypes.object.isRequired
};


export default translate('translations')(LanguageDropdown);
