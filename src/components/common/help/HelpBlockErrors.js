import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormText } from "reactstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faInfoCircle);

const HelpBlockErrors = ({ errors, t }) => {
  if (errors.length) {
    return errors.map((error, index) => {
      return (
        <FormText color="danger" key={index}>
          <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-danger" />
          {t(error)}
        </FormText>
      );
    });
  }
  return <span />;
};

HelpBlockErrors.defaultProps = {
  errors: []
};

HelpBlockErrors.propTypes = {
  errors: PropTypes.array
};

export default translate("validators")(HelpBlockErrors);
