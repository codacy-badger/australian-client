import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import Header from "../common/Header";

class ProfilePage extends Component {
  render() {
    const { isAuthenticated, user, t } = this.props;

    return (
      <div>
        <Header />
        isAuthenticated: {JSON.stringify(isAuthenticated)}
        <br />
        user: {JSON.stringify(user)}
        <br />
      </div>
    );
  }
}

// The propTypes.
ProfilePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.auth.user
  };
}

export default translate("translations")(connect(mapStateToProps)(ProfilePage));
