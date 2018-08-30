import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, UncontrolledAlert } from "reactstrap";
import { translate } from "react-i18next";
import LoginModal from "../modal/LoginModal";

class LoginPage extends Component {
  toggleLoginModal = () => {
    this.loginModal.toggle();
  };

  componentDidMount() {
    this.toggleLoginModal();
  }

  render() {
    const { t } = this.props;
    return (
      <Container className="mt-3">
        <UncontrolledAlert color="warning">{t("message.please-login")}</UncontrolledAlert>
        <LoginModal onRef={(ref) => (this.loginModal = ref)} warning={true} />
      </Container>
    );
  }
}

LoginPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(LoginPage);
