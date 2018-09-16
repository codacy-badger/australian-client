import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faHome);

const NotFoundJumbotron = ({ t }) => {
  return (
    <Jumbotron className="text-left">
      <h1>{t("title.ooops")}</h1>
      <p>{t("message.404-explanation")}</p>
      <hr />
      <div className="text-right">
        <Link to="/" title={t("link.home-page-title")} className="btn btn-primary">
          <FontAwesomeIcon icon="home" className="mr-1"/>
          {t("link.home-page")}
        </Link>
      </div>
    </Jumbotron>
  );
};

// The propTypes.
NotFoundJumbotron.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(NotFoundJumbotron);
