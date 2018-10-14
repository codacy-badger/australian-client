import React from "react";
import PropTypes from "prop-types";
import { Alert, UncontrolledAlert } from "reactstrap";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faSpinner);

const LoadingAlert = ({ controlled, children, t }) => {
  const text = children ? children : t("error.loading");

  if (controlled) {
    return (
      <Alert color="secondary" className="text-center">
        {text}
      </Alert>
    );
  }

  return (
    <UncontrolledAlert color="secondary" className="text-center">
      <FontAwesomeIcon icon={"spinner"} spin className="mr-1" />
      {text}
    </UncontrolledAlert>
  );
};

LoadingAlert.defaultTypes = {
  controlled: true
};

LoadingAlert.propTypes = {
  children: PropTypes.any,
  controlled: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default translate()(LoadingAlert);
