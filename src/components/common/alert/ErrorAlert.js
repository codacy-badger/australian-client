import React from "react";
import PropTypes from "prop-types";
import { Alert, UncontrolledAlert } from "reactstrap";

const ErrorAlert = ({ controlled, children }) => {
  if (controlled) {
    return (
      <Alert color="danger" className="text-center">
        {children}
      </Alert>
    );
  }

  return (
    <UncontrolledAlert color="danger" className="text-center">
      {children}
    </UncontrolledAlert>
  );
};

ErrorAlert.defaultTypes = {
  controlled: false
};

ErrorAlert.propTypes = {
  children: PropTypes.element.isRequired,
  controlled: PropTypes.bool
};

export default ErrorAlert;
