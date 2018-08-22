import React from "react";
import PropTypes from "prop-types";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignInAlt, faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faSignInAlt);

class UserDropdown extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <FontAwesomeIcon icon="user-secret" fixedWidth />{" "}
          {t("navbar.user-anonymous")}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" />{" "}
            {t("navbar.user-login")}
          </DropdownItem>
          <DropdownItem>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation="270" />{" "}
            {t("navbar.user-register")}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

UserDropdown.propTypes = {
  t: PropTypes.func.isRequired
};
export default translate("translations")(UserDropdown);
