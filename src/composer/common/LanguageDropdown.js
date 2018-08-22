import React from 'react';
import PropTypes from 'prop-types';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import {translate} from 'react-i18next';
import frFlag from '../../images/flags/32/France.png';
import ukFlag from '../../images/flags/32/United-Kingdom.png';

/**
 * Language dropdown
 */
class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);
    const {i18n} = this.props;
    this.changeEn = this.changeEn.bind(this);
    this.changeFr = this.changeFr.bind(this);
    this.state = {
      language: i18n.language
    };
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
    const { t } = this.props;

    if ('fr' === this.state.language) {
      return <img src={frFlag} alt={t('img-alt.french-flag')} className="flag-in-navbar mr-1 float-left"/>
    } else {
      return <img src={ukFlag} alt={t('img-alt.united-kingdom-flag')} className="flag-in-navbar mr-1 float-left"/>
    }
  }

  render() {
    const { t } = this.props;

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {this.renderFlag(this.state.language)}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>{t('navbar.select-language')}</DropdownItem>
          <DropdownItem active={'fr' === this.state.language} tag="button" onClick={this.changeFr}>
            Français
          </DropdownItem>
          <DropdownItem active={'en' === this.state.language} tag="button" onClick={this.changeEn}>
            English
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

// The propTypes.
LanguageDropdown.propTypes = {
  i18n: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default translate('translations')(LanguageDropdown);
