import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Jumbotron } from "reactstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faSpinner);

const LoadingJumbotron = ({ t }) => {
  return (
    <Jumbotron className="text-center loading">
      <FontAwesomeIcon icon="spinner" spin className="mr-2" />
      {t("message.loading")}
    </Jumbotron>
  );
};

// The propTypes.
LoadingJumbotron.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(LoadingJumbotron);
