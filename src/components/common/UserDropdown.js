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
import {
  faIdCardAlt,
  faSignOutAlt,
  faUser,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";
import connect from "react-redux/es/connect/connect";

library.add(faIdCardAlt, faSignOutAlt, faUser, faUserCog);

class UserDropdown extends React.Component {
  render() {
    const { t, username } = this.props;

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <FontAwesomeIcon icon="user" fixedWidth />
          {username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <FontAwesomeIcon fixedWidth icon="id-card-alt" />{" "}
            {t("navbar.user-profile")}
          </DropdownItem>
          <DropdownItem>
            <FontAwesomeIcon fixedWidth icon="user-cog" />{" "}
            {t("navbar.user-settings")}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <FontAwesomeIcon fixedWidth icon="sign-out-alt" />{" "}
            {t("navbar.user-logout")}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

UserDropdown.propTypes = {
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    username: state.authReducer.auth.user.givenName,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     //login: (email, password) => dispatch(login(email, password))
//   };
// }

export default translate("translations")(connect(mapStateToProps, null)(UserDropdown));
