import React from "react";
import PropTypes from "prop-types";
import { Container, Jumbotron } from "reactstrap";
import { translate } from "react-i18next";

const Error404Page = ({ t }) => {
  return (
    <Container className="mt-3">
      <Jumbotron className="text-left">
        <h1>{t("title.ooops")}</h1>
        <p>{t("message.404-explanation")}</p>
        <hr />
        <div className="text-right">
          <a
            href="/"
            title={t("link.home-page-title")}
            className="btn btn-primary"
          >
            {t("link.home-page")}
          </a>
        </div>
      </Jumbotron>
    </Container>
  );
};

Error404Page.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(Error404Page);
