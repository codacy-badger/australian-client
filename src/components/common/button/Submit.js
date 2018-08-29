import React, {Component} from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faSpinner);

class Submit extends Component {
  render() {
    const { icon, name, isPending, isSuccess, onClick, rotation, t} = this.props;
    return (
      <Button color="primary" onClick={onClick} disabled={isPending || isSuccess}>
        {isPending && (
          <span>
            {"" !== icon && <FontAwesomeIcon icon="spinner" spin className="mr-1" />}
            {t("form." + name + ".submitting")}
          </span>
        )}
        {!isPending && (
          <span>
            {"" !== icon && 0 === rotation && <FontAwesomeIcon icon={icon} className="mr-1" />}
            {"" !== icon && 0 !== rotation && <FontAwesomeIcon icon={icon} rotation={rotation} className="mr-1" />}
            {t("form." + name + ".submit")}
          </span>
        )}
      </Button>
    );
  }
}

Submit.defaultProps = {
  icon: "",
  rotation: 0
};

// The propTypes.
Submit.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  onClick: PropTypes.func.isRequired
};

export default translate("translations")(Submit);
