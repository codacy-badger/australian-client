import React from "react";
import PropTypes from "prop-types";
import CguContent from "../common/TosContent";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faFileSignature);

const TosPage = ({ t }) => {
  return (
    <div>
      <Meta code="tos" />
      <Header />
      <Container className="text-justify mt-2">
        <h1>
          <FontAwesomeIcon icon={faFileSignature} className="mr-1" />
          {t("title.tos")}
        </h1>
        <CguContent />
      </Container>
    </div>
  );
};

TosPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate(["translations", "tos"])(TosPage);
