import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "reactstrap";

library.add(faDog);

const OwnerBadge = ({ isOwner, t }) => {
  if (isOwner) {
    return (
      <Badge color="light">
        <FontAwesomeIcon icon="dog" className="mr-1" />
        {t("common.owner")}
      </Badge>
    );
  }
  return <span />;
};

OwnerBadge.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate()(OwnerBadge);
