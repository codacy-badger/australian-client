import React from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import LoginModal from "../modal/LoginModal";
import Meta from "../common/Meta";
import { Container, UncontrolledAlert } from "reactstrap";
import { translate } from "react-i18next";

const LoginPage = ({ t }) => {
  return (
    <div>
      <Meta code="login" />
      <Header />
      <Container className="mt-3">
        <UncontrolledAlert color="warning">{t("message.please-login")}</UncontrolledAlert>
        <LoginModal isOpen warning />
      </Container>
    </div>
  );
};

LoginPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(LoginPage);
