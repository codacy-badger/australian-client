import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faSpinner);

const Submit = ({ icon = "", name, isPending, isSuccess, rotation = 0, submitCallback, t }) => {
  return (
    <Button color="primary" onClick={submitCallback} disabled={isPending || isSuccess}>
      {isPending && (
        <span>
          {"" !== icon && <FontAwesomeIcon icon="spinner" spin className="mr-1" />}
          {t("form." + name + ".submitting")}
        </span>
      )}
      {!isPending && (
        <span>
          {"" !== icon && <FontAwesomeIcon icon={icon} rotation={rotation} className="mr-1" />}
          {t("form." + name + ".submit")}
        </span>
      )}
    </Button>
  );
};

// The propTypes.
Submit.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  submitCallback: PropTypes.func.isRequired
};

export default translate("translations")(Submit);
