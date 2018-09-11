import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormText} from "reactstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faInfoCircle);

const HelpBlock = ({children, color}) => {

    return (
      <FormText color={color}>
        <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-info" />
          {children}
      </FormText>

    );
};

HelpBlock.defaultProps = {
  color: "muted"
};

HelpBlock.propTypes = {
  color: PropTypes.string.isRequired,
};

export default HelpBlock;