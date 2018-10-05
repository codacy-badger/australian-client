import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faUpload, faSpinner);

const ButtonIcon = (props) => {
  const { color, disabled, icon, name, isPending, onClick, rotation, t, type } = props;
  const label = isPending ? "form." + name + ".submit" : "form." + name + ".submit";
  const finalProps = {
    icon: isPending ? "spinner" : icon ? icon : "upload",
    className: "mr-1"
  };

  if (0 !== rotation) {
    finalProps.rotation = rotation;
  }

  return (
    <Button type={type} color={color} onClick={onClick} disabled={disabled || isPending}>
      <FontAwesomeIcon spin={isPending} {...finalProps} />
      {t(label)}
    </Button>
  );
};

ButtonIcon.defaultProps = {
  color: "primary",
  disabled: false,
  icon: "upload",
  type: "button",
  rotation: 0
};

// The propTypes.
ButtonIcon.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  isPending: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  t: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit"])
};

export default translate("translations")(ButtonIcon);
