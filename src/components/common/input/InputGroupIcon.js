import React from "react";
import PropTypes from "prop-types";

import { InputGroupAddon } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputGroupIcon = ( props ) => {
  const { icon, position, ...otherProps } = props;

  return (
    <InputGroupAddon addonType={position}>
      <span className="input-group-text">
        <FontAwesomeIcon icon={icon} {...otherProps} />
      </span>
    </InputGroupAddon>
  );
};

// The propTypes.
InputGroupIcon.defaultProps = {
  position: "prepend"
};

InputGroupIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["prepend", "append"])
};

export default InputGroupIcon;
