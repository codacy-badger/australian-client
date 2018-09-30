import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faUpload, faSpinner);

const Submit = (props) => {
  const { icon, name, isPending, onClick, rotation, t } = props;
  const label = isPending ? "form." + name + ".submitting" : "form." + name + ".submit";
  const finalProps = {
    icon: isPending ? "spinner" : icon ? icon : "upload",
    className: "mr-1"
  };

  if (0 !== rotation) {
    finalProps.rotation = rotation;
  }

  return (
    <Button type="submit" color="primary" onClick={onClick} disabled={isPending}>
      <FontAwesomeIcon spin={isPending} {...finalProps} />
      {t(label)}
    </Button>
  );
};

Submit.defaultProps = {
  icon: "",
  rotation: 0
};

// The propTypes.
Submit.propTypes = {
  icon: PropTypes.string,
  isPending: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  t: PropTypes.func.isRequired
};

export default translate("translations")(Submit);
