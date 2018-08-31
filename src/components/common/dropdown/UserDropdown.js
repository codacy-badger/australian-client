import React from "react";
import PropTypes from "prop-types";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdCardAlt, faSignOutAlt, faUser, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";

library.add(faIdCardAlt, faSignOutAlt, faUser, faUserCog);

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.logoutClick = this.logoutClick.bind(this);
  }

  logoutClick() {
    this.props.logout();
  }

  render() {
    const { t, username } = this.props;

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <FontAwesomeIcon icon="user" fixedWidth className="mr-1" /> {username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem to="/profile" tag={NavLink}>
            <FontAwesomeIcon fixedWidth icon="id-card-alt" /> {t("navbar.user-profile")}
          </DropdownItem>
          <DropdownItem>
            <FontAwesomeIcon fixedWidth icon="user-cog" /> {t("navbar.user-settings")}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.logoutClick}>
            <FontAwesomeIcon fixedWidth icon="sign-out-alt" /> {t("navbar.user-logout")}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
UserDropdown.contextTypes = {
  router: PropTypes.object
};

UserDropdown.propTypes = {
  t: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  if (state.authReducer.auth.user) {
    return {
      username: state.authReducer.auth.user.givenName
    };
  }
  return {
    username: ""
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDropdown)
);
