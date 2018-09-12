import React from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import { Container, Jumbotron } from "reactstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";

const Error404Page = ({ t }) => {
  return (
    <div>
      <Helmet>
        <title>{t("meta.title.404")}</title>
        <meta name="description" content={t("meta.description.404")} />
        <meta name="keywords" content={t("meta.keywords.404")} />
      </Helmet>
      <Header />
      <Container className="mt-3">
        <Jumbotron className="text-left">
          <h1>{t("title.ooops")}</h1>
          <p>{t("message.404-explanation")}</p>
          <hr />
          <div className="text-right">
            <Link to="/" title={t("link.home-page-title")} className="btn btn-primary">
              {t("link.home-page")}
            </Link>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

Error404Page.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(Error404Page);
