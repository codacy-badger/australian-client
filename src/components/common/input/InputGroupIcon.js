import React from "react";
import PropTypes from "prop-types";
import { InputGroupAddon } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSpinner);

const InputGroupIcon = (props) => {
  const { icon, position, isLoading, ...otherProps } = props;
  const finalIcon = isLoading ? "spinner" : icon;

  return (
    <InputGroupAddon addonType={position}>
      <span className="input-group-text">
        <FontAwesomeIcon icon={finalIcon} {...otherProps} spin={isLoading} />
      </span>
    </InputGroupAddon>
  );
};

// The propTypes.
InputGroupIcon.defaultProps = {
  isLoading: false,
  position: "prepend"
};

InputGroupIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  position: PropTypes.oneOf(["prepend", "append"])
};

export default InputGroupIcon;
