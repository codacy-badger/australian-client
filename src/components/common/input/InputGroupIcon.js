import React from "react";
import PropTypes from "prop-types";
import { InputGroupAddon } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faExclamationTriangle, faSpinner);

const InputGroupIcon = (props) => {
  const { icon, position, isLoading, isUnloadable, ...otherProps } = props;
  const finalIcon = isLoading ? "spinner" : isUnloadable ? "exclamation-triangle" : icon;
  const color = isUnloadable ? "text-danger" : "";

  return (
    <InputGroupAddon addonType={position}>
      <span className={"input-group-text " + color}>
        <FontAwesomeIcon icon={finalIcon} {...otherProps} spin={isLoading} />
      </span>
    </InputGroupAddon>
  );
};

// The propTypes.
InputGroupIcon.defaultProps = {
  isLoading: false,
  isUnloadable: false,
  position: "prepend"
};

InputGroupIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isUnloadable: PropTypes.bool,
  position: PropTypes.oneOf(["prepend", "append"])
};

export default InputGroupIcon;
