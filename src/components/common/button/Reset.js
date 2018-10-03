import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faUndo);

const Reset = (props) => {
  const { onClick, t, ...others } = props;

  return (
    <Button color="secondary" onClick={onClick} {...others}>
      <FontAwesomeIcon icon="undo" className="mr-1" />
      {t("button.reset")}
    </Button>
  );
};

Reset.defaultProps = {
  icon: "upload",
  rotation: 0
};

// The propTypes.
Reset.propTypes = {
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(Reset);
