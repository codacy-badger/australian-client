import React from "react";
import PropTypes from "prop-types";
import CguContent from "../common/CguContent";
import Header from "../common/Header";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faFileSignature);

const CguPage = ({ t }) => {
  return (
    <div>
      <Helmet>
        <title>{t("meta.title.cgu")}</title>
        <meta name="description" content={t("meta.description.cgu")} />
        <meta name="keywords" content={t("meta.keywords.cgu")} />
      </Helmet>
      <Header />
      <Container className="text-justify mt-2">
        <h1>
          <FontAwesomeIcon icon={faFileSignature} className="mr-1" />
          {t("title.cgu")}
        </h1>
        <CguContent />
      </Container>
    </div>
  );
};

CguPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate(["cgu", "translations"])(CguPage);
